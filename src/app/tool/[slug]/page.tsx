import { getLocaleDictionary } from '@/lib/getLocale';
import ToolPageClient from './ToolPageClient';

export const dynamic = 'force-dynamic';

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { locale, dictionary } = await getLocaleDictionary();

    return <ToolPageClient slug={slug} locale={locale} dictionary={dictionary} />;
}
