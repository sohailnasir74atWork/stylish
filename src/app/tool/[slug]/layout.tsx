import { Metadata } from 'next';
import { tools } from '@/lib/tools';
import { SITE_URL } from '@/lib/constants';
import { getLocaleDictionary } from '@/lib/getLocale';

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

    return {
        title: `${tool.metaTitle} | ${t.siteName}`,
        description: tool.metaDescription,
        alternates: {
            canonical: `/tool/${slug}`,
        },
        openGraph: {
            title: `${tool.metaTitle} | ${t.siteName}`,
            description: tool.metaDescription,
            url: pageUrl,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${tool.metaTitle} | ${t.siteName}`,
            description: tool.metaDescription,
        },
    };
}

export function generateStaticParams() {
    return tools.map(t => ({ slug: t.slug }));
}

export default function ToolLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
