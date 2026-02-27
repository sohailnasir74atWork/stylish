import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/ascii-art` : `${SITE_URL}/${loc}/tool/ascii-art`;
});
languages['x-default'] = `${SITE_URL}/tool/ascii-art`;

export const metadata: Metadata = {
    title: 'ASCII Art Generator | Block Letter Text Art 🔤',
    description: 'Convert text into large block-letter ASCII art. Create eye-catching text art for Discord, social media, and comments. Free copy paste!',
    alternates: {
        canonical: '/tool/ascii-art',
        languages,
    },
    openGraph: {
        title: 'ASCII Art Generator | Block Letter Text Art 🔤',
        description: 'Convert text into large block-letter ASCII art. Create eye-catching text art for Discord, social media, and comments. Free copy paste!',
        url: `${SITE_URL}/tool/ascii-art`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'ASCII Art' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ASCII Art Generator | Block Letter Text Art 🔤',
        description: 'Convert text into large block-letter ASCII art. Create eye-catching text art for Discord, social media, and comments. Free copy paste!',
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
            { '@type': 'ListItem', position: 3, name: 'ASCII Art', item: `${SITE_URL}/tool/ascii-art` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'ASCII Art Generator | Block Letter Text Art 🔤',
        description: 'Convert text into large block-letter ASCII art. Create eye-catching text art for Discord, social media, and comments. Free copy paste!',
        url: `${SITE_URL}/tool/ascii-art`,
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
