import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';
import { getTranslatedUI } from '@/lib/uiTranslations';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/share-card` : `${SITE_URL}/${loc}/tool/share-card`;
});
languages['x-default'] = `${SITE_URL}/tool/share-card`;

export async function generateMetadata(): Promise<Metadata> {
    const { locale, dictionary: t } = await getLocaleDictionary();
    const ui = getTranslatedUI(locale, 'share-card');
    const metaTitle = ui?.name || 'Share Card Generator | Download Stylish Name as Image 🖼️';
    const metaDesc = ui?.heroText || 'Create beautiful gradient cards with your stylish name and download as PNG. Share your styled name as an image on social media!';

    return {
        title: metaTitle,
        description: metaDesc,
        alternates: {
            canonical: '/tool/share-card',
            languages,
        },
        openGraph: {
            title: metaTitle,
            description: metaDesc,
            url: `${SITE_URL}/tool/share-card`,
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
    const ui = getTranslatedUI(locale, 'share-card');
    const displayName = ui?.name || 'Share Card Generator | Download Stylish Name as Image 🖼️';

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.siteName, item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tool` },
            { '@type': 'ListItem', position: 3, name: displayName, item: `${SITE_URL}/tool/share-card` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: displayName,
        description: ui?.heroText || 'Create beautiful gradient cards with your stylish name and download as PNG. Share your styled name as an image on social media!',
        url: `${SITE_URL}/tool/share-card`,
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
