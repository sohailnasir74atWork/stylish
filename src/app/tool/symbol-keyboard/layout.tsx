import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/symbol-keyboard` : `${SITE_URL}/${loc}/tool/symbol-keyboard`;
});
languages['x-default'] = `${SITE_URL}/tool/symbol-keyboard`;

export const metadata: Metadata = {
    title: 'Special Symbols & Emoji Keyboard — 400+ Characters to Copy',
    description: 'Browse 400+ special symbols, emojis, stars, hearts, arrows, crowns & more. Click to copy any symbol instantly. Use in bios, names, captions & messages.',
    alternates: {
        canonical: '/tool/symbol-keyboard',
        languages,
    },
    openGraph: {
        title: 'Special Symbols & Emoji Keyboard — 400+ Characters to Copy',
        description: 'Browse 400+ special symbols, emojis, stars, hearts, arrows, crowns & more. Click to copy any symbol instantly. Use in bios, names, captions & messages.',
        url: `${SITE_URL}/tool/symbol-keyboard`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Symbol Keyboard' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Special Symbols & Emoji Keyboard — 400+ Characters to Copy',
        description: 'Browse 400+ special symbols, emojis, stars, hearts, arrows, crowns & more. Click to copy any symbol instantly. Use in bios, names, captions & messages.',
        images: [`${SITE_URL}/og-image.png`],
    },
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    const { dictionary: t } = await getLocaleDictionary();

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.siteName, item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tool` },
            { '@type': 'ListItem', position: 3, name: 'Symbol Keyboard', item: `${SITE_URL}/tool/symbol-keyboard` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Special Symbols & Emoji Keyboard — 400+ Characters to Copy',
        description: 'Browse 400+ special symbols, emojis, stars, hearts, arrows, crowns & more. Click to copy any symbol instantly. Use in bios, names, captions & messages.',
        url: `${SITE_URL}/tool/symbol-keyboard`,
        isPartOf: { '@type': 'WebSite', name: t.siteName, url: SITE_URL },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            {children}
        </>
    );
}
