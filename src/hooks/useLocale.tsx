'use client';

import { createContext, useContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { Locale, defaultLocale, isValidLocale } from '@/lib/i18n';
import { Dictionary, getDictionary } from '@/lib/dictionaries';

interface LocaleContextValue {
    locale: Locale;
    dictionary: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue>({
    locale: defaultLocale,
    dictionary: getDictionary(defaultLocale),
});

function readLocaleCookie(): Locale {
    if (typeof document === 'undefined') return defaultLocale;
    const match = document.cookie.match(/(?:^|; )locale=([^;]+)/);
    const value = match ? decodeURIComponent(match[1]) : '';
    return isValidLocale(value) ? value : defaultLocale;
}

/**
 * LocaleProvider — renders the default (English) dictionary on the server so every
 * page can be statically generated. After hydration, reads the locale cookie and
 * swaps the dictionary if the user previously chose a different language.
 *
 * Non-English users see English text for ~50ms before the swap. Acceptable trade
 * because non-English variants are noindex (no SEO loss) and the static-render
 * win is ~1s of TTFB per request.
 */
export function LocaleProvider({
    locale: initialLocale,
    children,
}: {
    locale: Locale;
    children: ReactNode;
}) {
    const [locale, setLocale] = useState<Locale>(initialLocale);

    useEffect(() => {
        const cookieLocale = readLocaleCookie();
        if (cookieLocale !== locale) setLocale(cookieLocale);
    }, [locale]);

    const dictionary = useMemo(() => getDictionary(locale), [locale]);

    return (
        <LocaleContext.Provider value={{ locale, dictionary }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    return useContext(LocaleContext);
}
