import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/strikethrough` : `${SITE_URL}/${loc}/tool/strikethrough`;
});
languages['x-default'] = `${SITE_URL}/tool/strikethrough`;

export const metadata: Metadata = {
    title: 'Strikethrough Text Generator — S̶t̶r̶i̶k̶e̶ & Text Effects',
    description: 'Add strikethrough, underline, overline, slash, wavy & dotted effects to your text. 9 Unicode text effects that work everywhere. Copy & paste instantly!',
    alternates: {
        canonical: '/tool/strikethrough',
        languages,
    },
    openGraph: {
        title: 'Strikethrough Text Generator — S̶t̶r̶i̶k̶e̶ & Text Effects',
        description: 'Add strikethrough, underline, overline, slash, wavy & dotted effects to your text. 9 Unicode text effects that work everywhere. Copy & paste instantly!',
        url: `${SITE_URL}/tool/strikethrough`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Strikethrough' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Strikethrough Text Generator — S̶t̶r̶i̶k̶e̶ & Text Effects',
        description: 'Add strikethrough, underline, overline, slash, wavy & dotted effects to your text. 9 Unicode text effects that work everywhere. Copy & paste instantly!',
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
            { '@type': 'ListItem', position: 3, name: 'Strikethrough', item: `${SITE_URL}/tool/strikethrough` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Strikethrough Text Generator — S̶t̶r̶i̶k̶e̶ & Text Effects',
        description: 'Add strikethrough, underline, overline, slash, wavy & dotted effects to your text. 9 Unicode text effects that work everywhere. Copy & paste instantly!',
        url: `${SITE_URL}/tool/strikethrough`,
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
