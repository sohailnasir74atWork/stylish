import { getLocaleDictionary } from '@/lib/getLocale';
import CategoryPageClient from './CategoryPageClient';

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: slug } = await params;
    const { locale, dictionary } = await getLocaleDictionary();

    return <CategoryPageClient slug={slug} locale={locale} dictionary={dictionary} />;
}
