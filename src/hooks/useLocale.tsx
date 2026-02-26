'use client';

import { createContext, useContext, ReactNode, useMemo } from 'react';
import { Locale, defaultLocale } from '@/lib/i18n';
import { Dictionary, getDictionary } from '@/lib/dictionaries';

interface LocaleContextValue {
    locale: Locale;
    dictionary: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue>({
    locale: defaultLocale,
    dictionary: getDictionary(defaultLocale),
});

/**
 * LocaleProvider — receives locale from the server layout.
 * No more client-side URL detection needed.
 */
export function LocaleProvider({
    locale,
    children,
}: {
    locale: Locale;
    children: ReactNode;
}) {
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
