import { MetadataRoute } from 'next';
import { categories, platforms } from '@/lib/categories';
import { tools } from '@/lib/tools';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL;
    const nonDefaultLocales = locales.filter(l => l !== defaultLocale);

    const staticPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
    ];

    // Locale homepages (e.g. /de, /fr, /es)
    const localeHomepages = nonDefaultLocales.map(locale => ({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }));

    const categoryPages = categories.map(cat => ({
        url: `${baseUrl}/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const platformPages = platforms.map(plat => ({
        url: `${baseUrl}/${plat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Locale category + platform pages (e.g. /de/instagram, /fr/pubg)
    const allSlugs = [...categories.map(c => c.slug), ...platforms.map(p => p.slug)];
    const localeCategoryPages = nonDefaultLocales.flatMap(locale =>
        allSlugs.map(slug => ({
            url: `${baseUrl}/${locale}/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    );

    const toolPages = tools.map(tool => ({
        url: `${baseUrl}/tool/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const featurePages = [
        { url: `${baseUrl}/favorites`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.6 },
        { url: `${baseUrl}/tool/style-builder`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/tool/bio-generator`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/tool/share-card`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${baseUrl}/tool/ascii-art`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${baseUrl}/tool/compatibility-checker`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/tool/live-preview`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/tool/name-ideas`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: `${baseUrl}/tool/invisible-text`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/tool/text-repeater`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/tool/zalgo-text`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/tool/symbol-keyboard`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/tool/mirror-text`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/tool/strikethrough`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/tool/captions`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/tool/character-counter`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    ];

    return [...staticPages, ...localeHomepages, ...categoryPages, ...platformPages, ...localeCategoryPages, ...toolPages, ...featurePages];
}
