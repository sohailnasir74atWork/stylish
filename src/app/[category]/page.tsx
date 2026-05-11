import { notFound } from 'next/navigation';
import { getLocaleDictionary } from '@/lib/getLocale';
import { categories, platforms } from '@/lib/categories';
import CategoryPageClient from './CategoryPageClient';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: slug } = await params;

    const isKnown = categories.some(c => c.slug === slug) || platforms.some(p => p.slug === slug);
    if (!isKnown) notFound();

    const { locale, dictionary } = await getLocaleDictionary();

    return <CategoryPageClient slug={slug} locale={locale} dictionary={dictionary} />;
}
