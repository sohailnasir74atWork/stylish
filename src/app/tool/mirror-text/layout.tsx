import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/mirror-text` : `${SITE_URL}/${loc}/tool/mirror-text`;
});
languages['x-default'] = `${SITE_URL}/tool/mirror-text`;

export const metadata: Metadata = {
    title: 'Upside Down & Mirror Text Generator — Flip Your Text',
    description: 'Flip your text upside down or mirror it instantly! Works on WhatsApp, Instagram, Discord, TikTok & more. Free, no sign-up needed. Just type and copy!',
    alternates: {
        canonical: '/tool/mirror-text',
        languages,
    },
    openGraph: {
        title: 'Upside Down & Mirror Text Generator — Flip Your Text',
        description: 'Flip your text upside down or mirror it instantly! Works on WhatsApp, Instagram, Discord, TikTok & more. Free, no sign-up needed. Just type and copy!',
        url: `${SITE_URL}/tool/mirror-text`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Mirror Text' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Upside Down & Mirror Text Generator — Flip Your Text',
        description: 'Flip your text upside down or mirror it instantly! Works on WhatsApp, Instagram, Discord, TikTok & more. Free, no sign-up needed. Just type and copy!',
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
            { '@type': 'ListItem', position: 3, name: 'Mirror Text', item: `${SITE_URL}/tool/mirror-text` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Upside Down & Mirror Text Generator — Flip Your Text',
        description: 'Flip your text upside down or mirror it instantly! Works on WhatsApp, Instagram, Discord, TikTok & more. Free, no sign-up needed. Just type and copy!',
        url: `${SITE_URL}/tool/mirror-text`,
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
