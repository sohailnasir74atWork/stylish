import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';
import { getTranslatedUI } from '@/lib/uiTranslations';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/strikethrough` : `${SITE_URL}/${loc}/tool/strikethrough`;
});
languages['x-default'] = `${SITE_URL}/tool/strikethrough`;

export async function generateMetadata(): Promise<Metadata> {
    const { locale, dictionary: t } = await getLocaleDictionary();
    const ui = getTranslatedUI(locale, 'strikethrough');
    const metaTitle = ui?.name || 'Strikethrough Text Generator — S̶t̶r̶i̶k̶e̶ & Text Effects';
    const metaDesc = ui?.heroText || 'Add strikethrough, underline, overline, slash, wavy & dotted effects to your text. 9 Unicode text effects that work everywhere. Copy & paste instantly!';

    return {
        title: metaTitle,
        description: metaDesc,
        alternates: {
            canonical: '/tool/strikethrough',
            languages,
        },
        openGraph: {
            title: metaTitle,
            description: metaDesc,
            url: `${SITE_URL}/tool/strikethrough`,
            type: 'website',
            images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: metaTitle }],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDesc,
            images: [`${SITE_URL}/og-image.png`],
        },
    };
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    const { locale, dictionary: t } = await getLocaleDictionary();
    const ui = getTranslatedUI(locale, 'strikethrough');
    const displayName = ui?.name || 'Strikethrough Text Generator — S̶t̶r̶i̶k̶e̶ & Text Effects';

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.siteName, item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tool` },
            { '@type': 'ListItem', position: 3, name: displayName, item: `${SITE_URL}/tool/strikethrough` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: displayName,
        description: ui?.heroText || 'Add strikethrough, underline, overline, slash, wavy & dotted effects to your text. 9 Unicode text effects that work everywhere. Copy & paste instantly!',
        url: `${SITE_URL}/tool/strikethrough`,
        isPartOf: { '@type': 'WebSite', name: t.siteName, url: SITE_URL },
    };

    return (
        <>
            <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            {children}
        </>
    );
}
