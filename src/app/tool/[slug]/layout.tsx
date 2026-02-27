import { Metadata } from 'next';
import { tools } from '@/lib/tools';
import { SITE_URL } from '@/lib/constants';
import { getLocaleDictionary } from '@/lib/getLocale';
import { locales, defaultLocale } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const tool = tools.find(t => t.slug === slug);
    const { dictionary: t } = await getLocaleDictionary();

    if (!tool) {
        return { title: 'Not Found' };
    }

    const pageUrl = `${SITE_URL}/tool/${slug}`;

    // Build alternates for all locales
    const languages: Record<string, string> = {};
    locales.forEach(loc => {
        languages[loc] = loc === defaultLocale ? `${SITE_URL}/tool/${slug}` : `${SITE_URL}/${loc}/tool/${slug}`;
    });
    languages['x-default'] = `${SITE_URL}/tool/${slug}`;

    return {
        title: `${tool.metaTitle} | ${t.siteName}`,
        description: tool.metaDescription,
        alternates: {
            canonical: `/tool/${slug}`,
            languages,
        },
        openGraph: {
            title: `${tool.metaTitle} | ${t.siteName}`,
            description: tool.metaDescription,
            url: pageUrl,
            type: 'website',
            images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: `${tool.metaTitle}` }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${tool.metaTitle} | ${t.siteName}`,
            description: tool.metaDescription,
            images: [`${SITE_URL}/og-image.png`],
        },
    };
}

export function generateStaticParams() {
    return tools.map(t => ({ slug: t.slug }));
}

export default async function ToolLayout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const tool = tools.find(t => t.slug === slug);
    const { dictionary: t } = await getLocaleDictionary();

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.siteName, item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tool` },
            { '@type': 'ListItem', position: 3, name: tool?.name || slug, item: `${SITE_URL}/tool/${slug}` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: tool ? `${tool.metaTitle}` : slug,
        description: tool?.metaDescription || '',
        url: `${SITE_URL}/tool/${slug}`,
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

