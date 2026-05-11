import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';
import { getTranslatedUI } from '@/lib/uiTranslations';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/character-counter` : `${SITE_URL}/${loc}/tool/character-counter`;
});
languages['x-default'] = `${SITE_URL}/tool/character-counter`;

export async function generateMetadata(): Promise<Metadata> {
    const { locale, dictionary: t } = await getLocaleDictionary();
    const ui = getTranslatedUI(locale, 'character-counter');
    const metaTitle = ui?.name || 'Character Counter — Check Text Length for Instagram, PUBG & 20+ Platforms';
    const metaDesc = ui?.heroText || 'Free character counter. See if your text fits Instagram bio (150), PUBG name (14), WhatsApp status (139), TikTok bio (80) & 20+ platform limits. Live count!';

    return {
        title: metaTitle,
        description: metaDesc,
        alternates: {
            canonical: '/tool/character-counter',
            languages,
        },
        openGraph: {
            title: metaTitle,
            description: metaDesc,
            url: `${SITE_URL}/tool/character-counter`,
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
    const ui = getTranslatedUI(locale, 'character-counter');
    const displayName = ui?.name || 'Character Counter — Check Text Length for Instagram, PUBG & 20+ Platforms';

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.siteName, item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tool` },
            { '@type': 'ListItem', position: 3, name: displayName, item: `${SITE_URL}/tool/character-counter` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: displayName,
        description: ui?.heroText || 'Free character counter. See if your text fits Instagram bio (150), PUBG name (14), WhatsApp status (139), TikTok bio (80) & 20+ platform limits. Live count!',
        url: `${SITE_URL}/tool/character-counter`,
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
