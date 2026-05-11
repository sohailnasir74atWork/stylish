import { Locale, defaultLocale } from './i18n';
import { getDictionary, Dictionary } from './dictionaries';

/**
 * Server always renders the default locale (English).
 *
 * Locale switching is handled entirely client-side via the LanguageSwitcher
 * (cookie set on click, dictionary swapped after hydration). This lets every
 * page render statically — no cookies()/headers() reads, no per-request SSR,
 * TTFB drops from ~1.3s to ~200ms. Non-English variants are noindex anyway,
 * so server-side rendering of localized copy provided no SEO value.
 */
export async function getLocale(): Promise<Locale> {
    return defaultLocale;
}

export async function getLocaleDictionary(): Promise<{ locale: Locale; dictionary: Dictionary }> {
    return { locale: defaultLocale, dictionary: getDictionary(defaultLocale) };
}
