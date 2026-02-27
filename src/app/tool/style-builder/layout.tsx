import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/style-builder` : `${SITE_URL}/${loc}/tool/style-builder`;
});
languages['x-default'] = `${SITE_URL}/tool/style-builder`;

export const metadata: Metadata = {
    title: 'Style Builder | Custom Stylish Name Designer 🎨',
    description: 'Build your perfect stylish name by combining fonts, decorators, and symbols. Design custom Unicode names for gaming and social media. Free!',
    alternates: {
        canonical: '/tool/style-builder',
        languages,
    },
    openGraph: {
        title: 'Style Builder | Custom Stylish Name Designer 🎨',
        description: 'Build your perfect stylish name by combining fonts, decorators, and symbols. Design custom Unicode names for gaming and social media. Free!',
        url: `${SITE_URL}/tool/style-builder`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Style Builder' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Style Builder | Custom Stylish Name Designer 🎨',
        description: 'Build your perfect stylish name by combining fonts, decorators, and symbols. Design custom Unicode names for gaming and social media. Free!',
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
            { '@type': 'ListItem', position: 3, name: 'Style Builder', item: `${SITE_URL}/tool/style-builder` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Style Builder | Custom Stylish Name Designer 🎨',
        description: 'Build your perfect stylish name by combining fonts, decorators, and symbols. Design custom Unicode names for gaming and social media. Free!',
        url: `${SITE_URL}/tool/style-builder`,
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
