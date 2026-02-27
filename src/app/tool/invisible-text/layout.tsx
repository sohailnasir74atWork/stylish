import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/invisible-text` : `${SITE_URL}/${loc}/tool/invisible-text`;
});
languages['x-default'] = `${SITE_URL}/tool/invisible-text`;

export const metadata: Metadata = {
    title: 'Invisible Text Generator — Blank Names for PUBG, WhatsApp & More',
    description: 'Copy invisible characters and blank text for PUBG, Free Fire, WhatsApp, Instagram & Discord. 6 types of invisible Unicode characters that work everywhere.',
    alternates: {
        canonical: '/tool/invisible-text',
        languages,
    },
    openGraph: {
        title: 'Invisible Text Generator — Blank Names for PUBG, WhatsApp & More',
        description: 'Copy invisible characters and blank text for PUBG, Free Fire, WhatsApp, Instagram & Discord. 6 types of invisible Unicode characters that work everywhere.',
        url: `${SITE_URL}/tool/invisible-text`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Invisible Text' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Invisible Text Generator — Blank Names for PUBG, WhatsApp & More',
        description: 'Copy invisible characters and blank text for PUBG, Free Fire, WhatsApp, Instagram & Discord. 6 types of invisible Unicode characters that work everywhere.',
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
            { '@type': 'ListItem', position: 3, name: 'Invisible Text', item: `${SITE_URL}/tool/invisible-text` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Invisible Text Generator — Blank Names for PUBG, WhatsApp & More',
        description: 'Copy invisible characters and blank text for PUBG, Free Fire, WhatsApp, Instagram & Discord. 6 types of invisible Unicode characters that work everywhere.',
        url: `${SITE_URL}/tool/invisible-text`,
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
