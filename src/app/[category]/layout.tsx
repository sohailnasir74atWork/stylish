import { Metadata } from 'next';
import { categories, platforms, Category, Platform } from '@/lib/categories';
import { SITE_URL } from '@/lib/constants';
import { getLocaleDictionary } from '@/lib/getLocale';

export const dynamic = 'force-dynamic';

interface Props {
    params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category: slug } = await params;
    const cat = categories.find(c => c.slug === slug);
    const plat = platforms.find(p => p.slug === slug);
    const info: Category | Platform | undefined = cat || plat;
    const { dictionary: t } = await getLocaleDictionary();

    if (!info) {
        return { title: 'Not Found' };
    }

    const pageUrl = `${SITE_URL}/${slug}`;

    return {
        title: `${info.metaTitle} | ${t.siteName}`,
        description: info.metaDescription,
        alternates: {
            canonical: `/${slug}`,
        },
        openGraph: {
            title: `${info.metaTitle} | ${t.siteName}`,
            description: info.metaDescription,
            url: pageUrl,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${info.metaTitle} | ${t.siteName}`,
            description: info.metaDescription,
        },
    };
}

export function generateStaticParams() {
    return [
        ...categories.map(c => ({ category: c.slug })),
        ...platforms.map(p => ({ category: p.slug })),
    ];
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
