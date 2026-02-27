import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/live-preview` : `${SITE_URL}/${loc}/tool/live-preview`;
});
languages['x-default'] = `${SITE_URL}/tool/live-preview`;

export const metadata: Metadata = {
    title: 'Live Preview Mockup | See Your Name on Real Platforms 📱',
    description: 'Preview your stylish name on real platform interfaces — Instagram, PUBG, Discord, WhatsApp, TikTok, and Free Fire. See before you commit!',
    alternates: {
        canonical: '/tool/live-preview',
        languages,
    },
    openGraph: {
        title: 'Live Preview Mockup | See Your Name on Real Platforms 📱',
        description: 'Preview your stylish name on real platform interfaces — Instagram, PUBG, Discord, WhatsApp, TikTok, and Free Fire. See before you commit!',
        url: `${SITE_URL}/tool/live-preview`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Live Preview' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Live Preview Mockup | See Your Name on Real Platforms 📱',
        description: 'Preview your stylish name on real platform interfaces — Instagram, PUBG, Discord, WhatsApp, TikTok, and Free Fire. See before you commit!',
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
            { '@type': 'ListItem', position: 3, name: 'Live Preview', item: `${SITE_URL}/tool/live-preview` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Live Preview Mockup | See Your Name on Real Platforms 📱',
        description: 'Preview your stylish name on real platform interfaces — Instagram, PUBG, Discord, WhatsApp, TikTok, and Free Fire. See before you commit!',
        url: `${SITE_URL}/tool/live-preview`,
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
