import { Metadata } from 'next';
import { categories, platforms, Category, Platform } from '@/lib/categories';
import { SITE_URL } from '@/lib/constants';
import { getLocaleDictionary } from '@/lib/getLocale';
import { buildAlternateLanguages } from '@/lib/i18n';
import { getTranslatedUI } from '@/lib/uiTranslations';

interface Props {
    params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category: slug } = await params;
    const cat = categories.find(c => c.slug === slug);
    const plat = platforms.find(p => p.slug === slug);
    const info: Category | Platform | undefined = cat || plat;
    const { locale, dictionary: t } = await getLocaleDictionary();

    if (!info) {
        return { title: 'Not Found' };
    }

    const pageUrl = `${SITE_URL}/${slug}`;
    const ui = getTranslatedUI(locale, slug);
    const metaTitle = ui?.name || info.metaTitle;
    const metaDesc = ui?.heroText || info.metaDescription;

    const languages = buildAlternateLanguages(`/${slug}`);

    return {
        title: metaTitle,
        description: metaDesc,
        alternates: {
            canonical: `/${slug}`,
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
    return [
        ...categories.map(c => ({ category: c.slug })),
        ...platforms.map(p => ({ category: p.slug })),
    ];
}

export default async function CategoryLayout({ children, params }: { children: React.ReactNode; params: Promise<{ category: string }> }) {
    const { category: slug } = await params;
    const cat = categories.find(c => c.slug === slug);
    const plat = platforms.find(p => p.slug === slug);
    const info = cat || plat;
    const { locale, dictionary: t } = await getLocaleDictionary();
    const ui = info ? getTranslatedUI(locale, info.slug) : undefined;
    const displayName = ui?.name || info?.name || slug;

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.siteName, item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: displayName, item: `${SITE_URL}/${slug}` },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: info ? `${info.metaTitle}` : slug,
        description: info?.metaDescription || '',
        url: `${SITE_URL}/${slug}`,
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

