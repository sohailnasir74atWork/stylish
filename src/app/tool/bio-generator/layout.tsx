import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale } from '@/lib/i18n';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

// Build alternates for all locales
const languages: Record<string, string> = {};
locales.forEach(loc => {
    languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/bio-generator` : `${SITE_URL}/${loc}/tool/bio-generator`;
});
languages['x-default'] = `${SITE_URL}/tool/bio-generator`;

export const metadata: Metadata = {
    title: 'Bio Template Generator | Stylish Social Media Bios 📝',
    description: 'Create stunning social media bios with stylish fonts for Instagram, TikTok, Discord, YouTube, and more. Customize and copy instantly!',
    alternates: {
        canonical: '/tool/bio-generator',
        languages,
    },
    openGraph: {
        title: 'Bio Template Generator | Stylish Social Media Bios 📝',
        description: 'Create stunning social media bios with stylish fonts for Instagram, TikTok, Discord, YouTube, and more. Customize and copy instantly!',
        url: `${SITE_URL}/tool/bio-generator`,
        type: 'website',
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Bio Generator' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bio Template Generator | Stylish Social Media Bios 📝',
        description: 'Create stunning social media bios with stylish fonts for Instagram, TikTok, Discord, YouTube, and more. Customize and copy instantly!',
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
            { '@type': 'ListItem', position: 3, name: 'Bio Generator', item: `${SITE_URL}/tool/bio-generator` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Bio Template Generator | Stylish Social Media Bios 📝',
        description: 'Create stunning social media bios with stylish fonts for Instagram, TikTok, Discord, YouTube, and more. Customize and copy instantly!',
        url: `${SITE_URL}/tool/bio-generator`,
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
