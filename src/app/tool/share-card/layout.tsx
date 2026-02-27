import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/share-card` : `${SITE_URL}/${loc}/tool/share-card`;
});
languages['x-default'] = `${SITE_URL}/tool/share-card`;

export const metadata: Metadata = {
    title: 'Share Card Generator | Download Stylish Name as Image 🖼️',
    description: 'Create beautiful gradient cards with your stylish name and download as PNG. Share your styled name as an image on social media!',
    alternates: {
        canonical: '/tool/share-card',
        languages,
    },
    openGraph: {
        title: 'Share Card Generator | Download Stylish Name as Image 🖼️',
        description: 'Create beautiful gradient cards with your stylish name and download as PNG. Share your styled name as an image on social media!',
        url: `${SITE_URL}/tool/share-card`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Share Card' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Share Card Generator | Download Stylish Name as Image 🖼️',
        description: 'Create beautiful gradient cards with your stylish name and download as PNG. Share your styled name as an image on social media!',
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
            { '@type': 'ListItem', position: 3, name: 'Share Card', item: `${SITE_URL}/tool/share-card` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Share Card Generator | Download Stylish Name as Image 🖼️',
        description: 'Create beautiful gradient cards with your stylish name and download as PNG. Share your styled name as an image on social media!',
        url: `${SITE_URL}/tool/share-card`,
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
