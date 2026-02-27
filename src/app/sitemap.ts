import { MetadataRoute } from 'next';
import { categories, platforms } from '@/lib/categories';
import { tools } from '@/lib/tools';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL;
    const nonDefaultLocales = locales.filter(l => l !== defaultLocale);

    // --- Static pages ---
    const staticPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    ];

    // --- Locale homepages (e.g. /de, /fr, /es) ---
    const localeHomepages = nonDefaultLocales.map(locale => ({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }));

    // --- Locale static pages (e.g. /de/about, /fr/privacy-policy) ---
    const staticSlugs = ['about', 'privacy-policy', 'terms'];
    const localeStaticPages = nonDefaultLocales.flatMap(locale =>
        staticSlugs.map(slug => ({
            url: `${baseUrl}/${locale}/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.4,
        }))
    );

    // --- Category pages (English) ---
    const categoryPages = categories.map(cat => ({
        url: `${baseUrl}/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // --- Platform pages (English) ---
    const platformPages = platforms.map(plat => ({
        url: `${baseUrl}/${plat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // --- Locale category + platform pages (e.g. /de/instagram, /fr/pubg) ---
    const allSlugs = [...categories.map(c => c.slug), ...platforms.map(p => p.slug)];
    const localeCategoryPages = nonDefaultLocales.flatMap(locale =>
        allSlugs.map(slug => ({
            url: `${baseUrl}/${locale}/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    );

    // --- All tool pages (English) — deduplicated, single source ---
    const dedicatedToolSlugs = [
        'style-builder', 'bio-generator', 'share-card', 'ascii-art',
        'compatibility-checker', 'live-preview', 'name-ideas', 'invisible-text',
        'text-repeater', 'zalgo-text', 'symbol-keyboard', 'mirror-text',
        'strikethrough', 'captions', 'character-counter',
    ];

    const dynamicToolPages = tools
        .filter(t => !dedicatedToolSlugs.includes(t.slug))
        .map(tool => ({
            url: `${baseUrl}/tool/${tool.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }));

    const dedicatedToolPages = dedicatedToolSlugs.map(slug => ({
        url: `${baseUrl}/tool/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // --- Locale tool pages (e.g. /de/tool/gothic, /fr/tool/invisible-text) ---
    const allToolSlugs = [...tools.map(t => t.slug), ...dedicatedToolSlugs.filter(s => !tools.find(t => t.slug === s))];
    const uniqueToolSlugs = [...new Set(allToolSlugs)];
    const localeToolPages = nonDefaultLocales.flatMap(locale =>
        uniqueToolSlugs.map(slug => ({
            url: `${baseUrl}/${locale}/tool/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }))
    );

    // --- Favorites excluded — user-specific content, empty for crawlers ---

    return [
        ...staticPages,
        ...localeHomepages,
        ...localeStaticPages,
        ...categoryPages,
        ...platformPages,
        ...localeCategoryPages,
        ...dynamicToolPages,
        ...dedicatedToolPages,
        ...localeToolPages,
    ];
}
