'use client';

import { useState, useMemo } from 'react';
import { charMaps } from '@/lib/charMaps';
import { decorators } from '@/lib/decorators';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useFavorites } from '@/hooks/useFavorites';
import { DEFAULT_INPUT } from '@/lib/constants';
import SEOContent from '@/components/SEOContent';
import { useLocale } from '@/lib/useLocale';
import { getTranslatedSEO } from '@/lib/seoTranslations';
import { getTranslatedUI } from '@/lib/uiTranslations';

function applyCharMap(text: string, mapId: string): string {
    const cm = charMaps.find(m => m.id === mapId);
    if (!cm) return text;
    return text.split('').map(ch => cm.map[ch] || cm.map[ch.toLowerCase()] || ch).join('');
}

export default function StyleBuilderPage() {
    const locale = useLocale();
    const toolUI = getTranslatedUI(locale, 'style-builder');
    const [inputText, setInputText] = useState(DEFAULT_INPUT);
    const [selectedFont, setSelectedFont] = useState(charMaps[0]?.id || '');
    const [selectedLeftDec, setSelectedLeftDec] = useState('');
    const [selectedRightDec, setSelectedRightDec] = useState('');
    const { copiedId, copy } = useCopyToClipboard();
    const { addFavorite, isFavorited } = useFavorites();

    // Get unique font categories
    const fontCategories = useMemo(() => {
        const cats = new Set(charMaps.map(m => m.category));
        return Array.from(cats);
    }, []);

    const [activeFontCat, setActiveFontCat] = useState(fontCategories[0] || '');

    // Decorators grouped by category
    const decCategories = useMemo(() => {
        const cats = new Set(decorators.map(d => d.category));
        return Array.from(cats);
    }, []);

    const [activeDecCat, setActiveDecCat] = useState(decCategories[0] || '');

    // Build the final styled name
    const styledText = useMemo(() => {
        const fontedText = applyCharMap(inputText, selectedFont);
        const leftDec = selectedLeftDec ? decorators.find(d => d.id === selectedLeftDec) : null;
        const rightDec = selectedRightDec ? decorators.find(d => d.id === selectedRightDec) : null;
        const left = leftDec?.prefix || '';
        const right = rightDec?.suffix || leftDec?.suffix || '';
        return `${left}${fontedText}${right}`;
    }, [inputText, selectedFont, selectedLeftDec, selectedRightDec]);

    const isCopied = copiedId === 'builder-result';
    const favorited = isFavorited(styledText);

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-14 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        🎨 {toolUI?.name || 'Style Builder'}
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Build your perfect stylish name by combining fonts, decorators, and symbols.
                </p>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
                {/* Live Preview Card */}
                <div className="mb-8 p-6 sm:p-8 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">Live Preview</p>
                    <p className="text-2xl sm:text-4xl text-white break-all leading-relaxed font-medium" dir="auto">
                        {styledText}
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <button
                            onClick={() => copy(styledText, 'builder-result')}
                            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${isCopied
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                                }`}
                        >
                            {isCopied ? '✓ Copied!' : '📋 Copy Result'}
                        </button>
                        <button
                            onClick={() => {
                                if (favorited) return;
                                addFavorite(styledText, 'Custom Build');
                            }}
                            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${favorited
                                    ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                                    : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 border border-black/8 dark:border-white/10'
                                }`}
                        >
                            {favorited ? '♥ Saved' : '♡ Save'}
                        </button>
                    </div>
                </div>

                {/* Input */}
                <div className="mb-8">
                    <label className="block text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Your Text</label>
                    <input
                        type="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        maxLength={30}
                        className="w-full px-5 py-3.5 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl text-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all"
                        placeholder="Enter your name..."
                    />
                </div>

                {/* Step 1: Pick Font */}
                <div className="mb-8">
                    <h2 className="text-lg font-bold text-white mb-3">① Choose Font</h2>
                    {/* Category filter */}
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-3 pb-1">
                        {fontCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFontCat(cat)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeFontCat === cat
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[240px] overflow-y-auto pr-1">
                        {charMaps.filter(m => m.category === activeFontCat).map(cm => {
                            const preview = applyCharMap('Abc', cm.id);
                            const isSelected = selectedFont === cm.id;
                            return (
                                <button
                                    key={cm.id}
                                    onClick={() => setSelectedFont(cm.id)}
                                    className={`p-3 rounded-xl text-left transition-all duration-200 border ${isSelected
                                            ? 'bg-purple-600/20 border-purple-500/50 shadow-lg shadow-purple-500/10'
                                            : 'bg-white/[0.03] border-black/8 dark:border-white/10 hover:bg-white/8 hover:border-black/15 dark:border-white/20'
                                        }`}
                                >
                                    <p className="text-base text-white truncate">{preview}</p>
                                    <p className="text-[10px] text-gray-500 mt-1 truncate">{cm.name}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Step 2: Pick Decorators */}
                <div className="mb-8">
                    <h2 className="text-lg font-bold text-white mb-3">② Choose Decorators</h2>
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-3 pb-1">
                        <button
                            onClick={() => { setSelectedLeftDec(''); setSelectedRightDec(''); }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${!selectedLeftDec && !selectedRightDec
                                    ? 'bg-pink-600 text-white'
                                    : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10'
                                }`}
                        >
                            None
                        </button>
                        {decCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveDecCat(cat)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeDecCat === cat && (selectedLeftDec || selectedRightDec)
                                        ? 'bg-pink-600 text-white'
                                        : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[200px] overflow-y-auto pr-1">
                        {decorators.filter(d => d.category === activeDecCat).map(dec => {
                            const isSelected = selectedLeftDec === dec.id;
                            return (
                                <button
                                    key={dec.id}
                                    onClick={() => {
                                        setSelectedLeftDec(dec.id);
                                        setSelectedRightDec(dec.id);
                                    }}
                                    className={`p-3 rounded-xl text-center transition-all duration-200 border ${isSelected
                                            ? 'bg-pink-600/20 border-pink-500/50 shadow-lg shadow-pink-500/10'
                                            : 'bg-white/[0.03] border-black/8 dark:border-white/10 hover:bg-white/8 hover:border-black/15 dark:border-white/20'
                                        }`}
                                >
                                    <p className="text-base text-white truncate">{dec.prefix} ✦ {dec.suffix}</p>
                                    <p className="text-[10px] text-gray-500 mt-1">{dec.name}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        
            {/* SEO Content - Locale Aware */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                {(() => {
                    const seo = getTranslatedSEO(locale, 'style-builder');
                    if (!seo) return null;
                    return <SEOContent title="" content={seo.seoContent} faqItems={seo.faqItems} />;
                })()}
            </section>
        </div>
    );
}
