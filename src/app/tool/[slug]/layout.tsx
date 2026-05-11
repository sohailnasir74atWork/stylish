import { Metadata } from 'next';
import { tools } from '@/lib/tools';
import { SITE_URL } from '@/lib/constants';
import { getLocaleDictionary } from '@/lib/getLocale';
import { buildAlternateLanguages } from '@/lib/i18n';
import { getTranslatedUI } from '@/lib/uiTranslations';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const tool = tools.find(t => t.slug === slug);
    const { locale, dictionary: t } = await getLocaleDictionary();

    if (!tool) {
        return { title: 'Not Found' };
    }

    const pageUrl = `${SITE_URL}/tool/${slug}`;
    const ui = getTranslatedUI(locale, slug);
    const metaTitle = ui?.name || tool.metaTitle;
    const metaDesc = ui?.heroText || tool.metaDescription;

    const languages = buildAlternateLanguages(`/tool/${slug}`);

    return {
        title: metaTitle,
        description: metaDesc,
        alternates: {
            canonical: `/tool/${slug}`,
            languages,
        },
        openGraph: {
            title: metaTitle,
            description: metaDesc,
            url: pageUrl,
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

export function generateStaticParams() {
    return tools.map(t => ({ slug: t.slug }));
}

export default async function ToolLayout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const tool = tools.find(t => t.slug === slug);
    const { locale, dictionary: t } = await getLocaleDictionary();
    const ui = tool ? getTranslatedUI(locale, tool.slug) : undefined;
    const displayName = ui?.name || tool?.name || slug;

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.siteName, item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tool` },
            { '@type': 'ListItem', position: 3, name: displayName, item: `${SITE_URL}/tool/${slug}` },
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

