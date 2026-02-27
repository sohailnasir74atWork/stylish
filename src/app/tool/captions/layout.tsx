import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/captions` : `${SITE_URL}/${loc}/tool/captions`;
});
languages['x-default'] = `${SITE_URL}/tool/captions`;

export const metadata: Metadata = {
    title: 'Captions & Status Ideas — 165+ Ready to Copy for Instagram & WhatsApp',
    description: 'Browse 165+ captions & status ideas for Instagram, WhatsApp, TikTok & Facebook. Attitude, love, sad, funny, gaming, birthday & more. Tap to copy!',
    alternates: {
        canonical: '/tool/captions',
        languages,
    },
    openGraph: {
        title: 'Captions & Status Ideas — 165+ Ready to Copy for Instagram & WhatsApp',
        description: 'Browse 165+ captions & status ideas for Instagram, WhatsApp, TikTok & Facebook. Attitude, love, sad, funny, gaming, birthday & more. Tap to copy!',
        url: `${SITE_URL}/tool/captions`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Captions' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Captions & Status Ideas — 165+ Ready to Copy for Instagram & WhatsApp',
        description: 'Browse 165+ captions & status ideas for Instagram, WhatsApp, TikTok & Facebook. Attitude, love, sad, funny, gaming, birthday & more. Tap to copy!',
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
            { '@type': 'ListItem', position: 3, name: 'Captions', item: `${SITE_URL}/tool/captions` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Captions & Status Ideas — 165+ Ready to Copy for Instagram & WhatsApp',
        description: 'Browse 165+ captions & status ideas for Instagram, WhatsApp, TikTok & Facebook. Attitude, love, sad, funny, gaming, birthday & more. Tap to copy!',
        url: `${SITE_URL}/tool/captions`,
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
