import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';
import { getTranslatedUI } from '@/lib/uiTranslations';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/name-ideas` : `${SITE_URL}/${loc}/tool/name-ideas`;
});
languages['x-default'] = `${SITE_URL}/tool/name-ideas`;

export async function generateMetadata(): Promise<Metadata> {
    const { locale, dictionary: t } = await getLocaleDictionary();
    const ui = getTranslatedUI(locale, 'name-ideas');
    const metaTitle = ui?.name || 'Top Profile Names | 800+ Amazing Gaming, Attitude & Cool Name Ideas 🔥';
    const metaDesc = ui?.heroText || 'Browse 800+ trending profile names organized by mood — Gaming, Sad, Happy, Attitude, Love, Cool, Mafia, Anime, PUBG, Free Fire & more. Click any name to generate stylish versions!';

    return {
        title: metaTitle,
        description: metaDesc,
        alternates: {
            canonical: '/tool/name-ideas',
            languages,
        },
        openGraph: {
            title: metaTitle,
            description: metaDesc,
            url: `${SITE_URL}/tool/name-ideas`,
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
    const ui = getTranslatedUI(locale, 'name-ideas');
    const displayName = ui?.name || 'Top Profile Names | 800+ Amazing Gaming, Attitude & Cool Name Ideas 🔥';

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.siteName, item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tool` },
            { '@type': 'ListItem', position: 3, name: displayName, item: `${SITE_URL}/tool/name-ideas` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: displayName,
        description: ui?.heroText || 'Browse 800+ trending profile names organized by mood — Gaming, Sad, Happy, Attitude, Love, Cool, Mafia, Anime, PUBG, Free Fire & more. Click any name to generate stylish versions!',
        url: `${SITE_URL}/tool/name-ideas`,
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
