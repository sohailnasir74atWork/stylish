import { MetadataRoute } from 'next';
import { categories, platforms } from '@/lib/categories';
import { tools } from '@/lib/tools';
import { getAllBlogPosts } from '@/lib/content/blogPosts';
import { SITE_URL } from '@/lib/constants';

// Locale URLs intentionally excluded — non-English pages currently noindex while we revisit
// the translation strategy (10 languages produced 18 clicks in 3 months per GSC).
const BUILD_DATE = new Date();
const STATIC_PAGE_DATES = {
    about: new Date('2026-02-25'),
    'privacy-policy': new Date('2026-02-25'),
    terms: new Date('2026-02-25'),
    disclaimer: new Date('2026-06-21'),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL;

    const staticPages = [
        { url: baseUrl, lastModified: BUILD_DATE, changeFrequency: 'daily' as const, priority: 1.0 },
        { url: `${baseUrl}/blog`, lastModified: BUILD_DATE, changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${baseUrl}/news`, lastModified: BUILD_DATE, changeFrequency: 'weekly' as const, priority: 0.5 },
        { url: `${baseUrl}/about`, lastModified: STATIC_PAGE_DATES.about, changeFrequency: 'monthly' as const, priority: 0.5 },
        { url: `${baseUrl}/contact`, lastModified: STATIC_PAGE_DATES.disclaimer, changeFrequency: 'monthly' as const, priority: 0.4 },
        { url: `${baseUrl}/privacy-policy`, lastModified: STATIC_PAGE_DATES['privacy-policy'], changeFrequency: 'monthly' as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: STATIC_PAGE_DATES.terms, changeFrequency: 'monthly' as const, priority: 0.3 },
        { url: `${baseUrl}/disclaimer`, lastModified: STATIC_PAGE_DATES.disclaimer, changeFrequency: 'monthly' as const, priority: 0.3 },
    ];

    const blogPosts = getAllBlogPosts().map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date + 'T00:00:00Z'),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const categoryPages = categories.map(cat => ({
        url: `${baseUrl}/${cat.slug}`,
        lastModified: BUILD_DATE,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const platformPages = platforms.map(plat => ({
        url: `${baseUrl}/${plat.slug}`,
        lastModified: BUILD_DATE,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

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
            lastModified: BUILD_DATE,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }));

    const dedicatedToolPages = dedicatedToolSlugs.map(slug => ({
        url: `${baseUrl}/tool/${slug}`,
        lastModified: BUILD_DATE,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        ...staticPages,
        ...blogPosts,
        ...categoryPages,
        ...platformPages,
        ...dynamicToolPages,
        ...dedicatedToolPages,
    ];
}
