import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/text-repeater` : `${SITE_URL}/${loc}/tool/text-repeater`;
});
languages['x-default'] = `${SITE_URL}/tool/text-repeater`;

export const metadata: Metadata = {
    title: 'Text Repeater — Repeat Any Text Up to 5000 Times',
    description: 'Free text repeater tool. Repeat any text, word, or emoji up to 5000 times instantly. Add separators like new lines, spaces, or commas. Copy with one click!',
    alternates: {
        canonical: '/tool/text-repeater',
        languages,
    },
    openGraph: {
        title: 'Text Repeater — Repeat Any Text Up to 5000 Times',
        description: 'Free text repeater tool. Repeat any text, word, or emoji up to 5000 times instantly. Add separators like new lines, spaces, or commas. Copy with one click!',
        url: `${SITE_URL}/tool/text-repeater`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Text Repeater' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Text Repeater — Repeat Any Text Up to 5000 Times',
        description: 'Free text repeater tool. Repeat any text, word, or emoji up to 5000 times instantly. Add separators like new lines, spaces, or commas. Copy with one click!',
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
            { '@type': 'ListItem', position: 3, name: 'Text Repeater', item: `${SITE_URL}/tool/text-repeater` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Text Repeater — Repeat Any Text Up to 5000 Times',
        description: 'Free text repeater tool. Repeat any text, word, or emoji up to 5000 times instantly. Add separators like new lines, spaces, or commas. Copy with one click!',
        url: `${SITE_URL}/tool/text-repeater`,
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
