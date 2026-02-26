import { getLocaleDictionary } from '@/lib/getLocale';
import HomePageClient from './HomePageClient';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const { locale, dictionary } = await getLocaleDictionary();

  return <HomePageClient locale={locale} dictionary={dictionary} />;
}
