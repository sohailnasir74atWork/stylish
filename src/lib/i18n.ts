// i18n configuration

export const defaultLocale = 'en';

export const locales = [
    'en', 'de', 'fr', 'es', 'pt', 'it', 'tr', 'ar', 'id', 'ja', 'nl',
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    pt: 'Português',
    it: 'Italiano',
    tr: 'Türkçe',
    ar: 'العربية',
    id: 'Bahasa',
    ja: '日本語',
    nl: 'Nederlands',
};

export const localeFlags: Record<Locale, string> = {
    en: '🇺🇸',
    de: '🇩🇪',
    fr: '🇫🇷',
    es: '🇪🇸',
    pt: '🇧🇷',
    it: '🇮🇹',
    tr: '🇹🇷',
    ar: '🇸🇦',
    id: '🇮🇩',
    ja: '🇯🇵',
    nl: '🇳🇱',
};

// RTL languages
export const rtlLocales: Locale[] = ['ar'];

export function isRtl(locale: Locale): boolean {
    return rtlLocales.includes(locale);
}

export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}
