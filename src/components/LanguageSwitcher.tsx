'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { locales, localeNames, localeFlags, defaultLocale, Locale } from '@/lib/i18n';
import { useLocale } from '@/hooks/useLocale';

export default function LanguageSwitcher() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { locale: currentLocale } = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    // Close on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // Get pathname without current locale prefix
    function getCleanPath(): string {
        const segments = pathname.split('/').filter(Boolean);
        if (segments[0] && locales.includes(segments[0] as Locale)) {
            return '/' + segments.slice(1).join('/');
        }
        return pathname;
    }

    function getLocalizedPath(locale: Locale): string {
        const cleanPath = getCleanPath();
        if (locale === defaultLocale) return cleanPath || '/';
        return `/${locale}${cleanPath}`;
    }

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs"
                aria-label="Change language"
            >
                <span>{localeFlags[currentLocale]}</span>
                <span className="text-gray-300 hidden sm:inline">{localeNames[currentLocale]}</span>
                <svg className={`w-3 h-3 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 top-full mt-1 bg-gray-900 border border-white/10 rounded-xl shadow-2xl py-1 z-50 min-w-[160px] max-h-[300px] overflow-y-auto">
                    {locales.map(locale => {
                        const path = getLocalizedPath(locale);
                        return (
                            <button
                                key={locale}
                                onClick={() => {
                                    setOpen(false);
                                    if (locale === defaultLocale) {
                                        // Clear the locale cookie so English sticks
                                        document.cookie = 'locale=; path=/; max-age=0';
                                    } else {
                                        document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
                                    }
                                    router.push(path);
                                }}
                                className={`flex items-center gap-2 px-3 py-2 text-xs hover:bg-white/10 transition-colors w-full text-left ${currentLocale === locale ? 'bg-purple-500/10 text-purple-300' : 'text-gray-300'}`}
                            >
                                <span>{localeFlags[locale]}</span>
                                <span>{localeNames[locale]}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
