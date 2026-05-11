import { getLocaleDictionary } from '@/lib/getLocale';
import { tools } from '@/lib/tools';
import { SITE_URL } from '@/lib/constants';
import ToolPageClient from './ToolPageClient';

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { locale, dictionary } = await getLocaleDictionary();
    const tool = tools.find(t => t.slug === slug);
    const toolName = tool?.name || slug;

    // BreadcrumbList schema for Google rich results
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: SITE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: toolName,
                item: `${SITE_URL}/tool/${slug}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ToolPageClient slug={slug} locale={locale} dictionary={dictionary} />
        </>
    );
}
