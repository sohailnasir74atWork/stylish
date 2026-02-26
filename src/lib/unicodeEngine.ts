// Core Unicode transformation engine

import { charMaps, CharMap } from './charMaps';
import { decorators, Decorator } from './decorators';

export interface StyledResult {
    id: string;
    styleName: string;
    category: string;
    text: string;
    plainText: string;
}

/**
 * Transform a single character using a character map
 */
function transformChar(char: string, map: Record<string, string>): string {
    return map[char] ?? char;
}

/**
 * Transform text using a single character map
 */
function transformText(input: string, map: Record<string, string>): string {
    return [...input].map(c => transformChar(c, map)).join('');
}

/**
 * Generate all styled variations for the given input text
 */
export function generateAllStyles(input: string): StyledResult[] {
    if (!input.trim()) return [];

    const results: StyledResult[] = [];

    // For each char map, generate decorated versions
    for (const charMap of charMaps) {
        const styledText = transformText(input, charMap.map);

        // Get matching decorators for this category + some universal ones
        const matchingDecorators = getDecoratorsForCategory(charMap.category);

        for (const decorator of matchingDecorators) {
            const decorated = `${decorator.prefix}${styledText}${decorator.suffix}`;
            results.push({
                id: `${charMap.id}-${decorator.id}`,
                styleName: decorator.id === 'none' ? charMap.name : `${charMap.name} ${decorator.name}`,
                category: charMap.category,
                text: decorated,
                plainText: input,
            });
        }
    }

    return results;
}

/**
 * Generate styles filtered by a specific category
 * @param pageSlug - optional page slug to include slug-specific decorators (e.g., 'dog', 'bear')
 */
export function generateStylesByCategory(input: string, category: string, pageSlug?: string): StyledResult[] {
    if (!input.trim()) return [];

    const results: StyledResult[] = [];
    const categoryMaps = charMaps.filter(
        cm => cm.category === category || category === 'all'
    );

    for (const charMap of categoryMaps) {
        const styledText = transformText(input, charMap.map);
        const matchingDecorators = decorators.filter(
            d => d.id === 'none' || d.category === category || d.category === charMap.category || (pageSlug && d.category === pageSlug)
        );

        // Deduplicate decorator IDs
        const seen = new Set<string>();
        const uniqueDecorators = matchingDecorators.filter(d => {
            if (seen.has(d.id)) return false;
            seen.add(d.id);
            return true;
        });

        for (const decorator of uniqueDecorators) {
            const decorated = `${decorator.prefix}${styledText}${decorator.suffix}`;
            results.push({
                id: `${charMap.id}-${decorator.id}`,
                styleName: decorator.id === 'none' ? charMap.name : `${charMap.name} ${decorator.name}`,
                category: charMap.category,
                text: decorated,
                plainText: input,
            });
        }
    }

    return results;
}

/**
 * Generate styles for a specific tool (font family)
 */
export function generateStylesForTool(input: string, toolCategory: string): StyledResult[] {
    if (!input.trim()) return [];

    const results: StyledResult[] = [];
    const toolMaps = charMaps.filter(cm => cm.category === toolCategory);
    const allDecorators = decorators;

    for (const charMap of toolMaps) {
        const styledText = transformText(input, charMap.map);

        for (const decorator of allDecorators) {
            const decorated = `${decorator.prefix}${styledText}${decorator.suffix}`;
            results.push({
                id: `${charMap.id}-${decorator.id}`,
                styleName: decorator.id === 'none' ? charMap.name : `${charMap.name} ${decorator.name}`,
                category: charMap.category,
                text: decorated,
                plainText: input,
            });
        }
    }

    return results;
}

/**
 * Get decorators that match a given category
 */
function getDecoratorsForCategory(category: string): Decorator[] {
    // Always include "none" decorator + matching category decorators
    const matching = decorators.filter(
        d => d.id === 'none' || d.category === category || d.category === 'all'
    );

    // If very few decorators match, add some from other popular categories
    if (matching.length < 3) {
        const extras = decorators
            .filter(d => ['gaming', 'cool', 'fancy'].includes(d.category))
            .slice(0, 3);
        return [...matching, ...extras];
    }

    return matching;
}

/**
 * Get all available char maps
 */
export function getCharMaps(): CharMap[] {
    return charMaps;
}

/**
 * Get all available categories from char maps
 */
export function getAvailableCategories(): string[] {
    const cats = new Set(charMaps.map(cm => cm.category));
    return Array.from(cats);
}

/**
 * Search styles by name
 */
export function searchStyles(input: string, query: string): StyledResult[] {
    const all = generateAllStyles(input);
    const q = query.toLowerCase();
    return all.filter(r => r.styleName.toLowerCase().includes(q));
}
