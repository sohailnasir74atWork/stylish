import { cookies, headers } from 'next/headers';
import { Locale, defaultLocale, isValidLocale } from './i18n';
import { getDictionary, Dictionary } from './dictionaries';

/**
 * Server-side locale detection.
 * Reads locale from the cookie set by middleware, or from the x-locale header.
 * Falls back to defaultLocale ('en').
 */
export async function getLocale(): Promise<Locale> {
    // Try x-locale header first (set by middleware rewrite)
    const headerStore = await headers();
    const headerLocale = headerStore.get('x-locale');
    if (headerLocale && isValidLocale(headerLocale)) {
        return headerLocale;
    }

    // Try cookie (set by middleware)
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('locale')?.value;
    if (cookieLocale && isValidLocale(cookieLocale)) {
        return cookieLocale;
    }

    return defaultLocale;
}

/**
 * Server-side helper to get both locale and dictionary in one call.
 */
export async function getLocaleDictionary(): Promise<{ locale: Locale; dictionary: Dictionary }> {
    const locale = await getLocale();
    return { locale, dictionary: getDictionary(locale) };
}
