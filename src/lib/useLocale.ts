'use client';

import { useLocale as useLocaleContext } from '@/hooks/useLocale';
import { Locale } from './i18n';

/**
 * Returns the current locale. Reads from LocaleProvider context (set by the server),
 * so SSR renders the correct locale on first paint — no flash of English content.
 */
export function useLocale(): Locale {
    return useLocaleContext().locale;
}
