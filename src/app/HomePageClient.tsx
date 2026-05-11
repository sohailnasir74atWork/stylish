'use client';

import { useState, useMemo, useEffect, useCallback, useDeferredValue, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import TextInput from '@/components/TextInput';
import StyleGrid from '@/components/StyleGrid';
import CategoryTabs from '@/components/CategoryTabs';
import SEOContent from '@/components/SEOContent';
import { generateAllStyles } from '@/lib/unicodeEngine';
import { DEFAULT_INPUT } from '@/lib/constants';
import Link from 'next/link';
import { TOOL_NAV_LINKS, PLATFORM_NAV_LINKS } from '@/lib/constants';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/lib/dictionaries';
import { useCopyCounter } from '@/hooks/useCopyCounter';
import { getHomepageSEO } from '@/lib/homepageSEO';

// Lazy-load below-fold components to reduce initial bundle
const ToolCards = dynamic(() => import('@/components/ToolCards'), {
    loading: () => <div className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 h-[140px]" />,
});
const RecentNames = dynamic(() => import('@/components/RecentNames'), {
    loading: () => <div className="h-[80px]" />,
});


interface HomePageClientProps {
    locale: Locale;
    dictionary: Dictionary;
}

export default function HomePageClient({ locale, dictionary: t }: HomePageClientProps) {
    return (
        <Suspense fallback={<div className="min-h-screen" />}>
            <HomePageInner t={t} locale={locale} />
        </Suspense>
    );
}

function HomePageInner({ t, locale }: { t: Dictionary; locale: Locale }) {
    const searchParams = useSearchParams();
    const nameFromUrl = searchParams.get('name');
    const [inputText, setInputText] = useState(nameFromUrl || DEFAULT_INPUT);
    const { formatted: copyCount, increment: incrementCopy } = useCopyCounter();

    // Update input when ?name= query param changes (from Name Ideas page)
    useEffect(() => {
        if (nameFromUrl) {
            setInputText(nameFromUrl);
        }
    }, [nameFromUrl]);

    // INP fix: useDeferredValue lets React interrupt the heavy generateAllStyles work
    // when the user taps something else. Combined with the 150ms debounce, this keeps
    // typing responsive even on slow devices (INP target <200ms).
    const [debouncedInput, setDebouncedInput] = useState(inputText);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedInput(inputText), 150);
        return () => clearTimeout(timer);
    }, [inputText]);

    const deferredInput = useDeferredValue(debouncedInput);
    const results = useMemo(() => generateAllStyles(deferredInput), [deferredInput]);

    // U10: Scroll-to-top button visibility
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section — fixed min-height prevents CLS */}
            <section className="relative py-4 sm:py-12 px-4 text-center overflow-hidden min-h-[160px] sm:min-h-[220px]">
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 text-5xl opacity-20 animate-float">✨</div>
                <div className="absolute top-20 right-20 text-4xl opacity-15 animate-float" style={{ animationDelay: '2s' }}>🎮</div>
                <div className="absolute bottom-10 left-1/4 text-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}>💖</div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        {t.heroTitle}
                    </span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-4">
                    {t.heroSubtitle} ✨
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-full text-sm text-gray-400">
                    <span className="text-lg">✨</span>
                    <span><strong className="text-gray-900 dark:text-white">{copyCount}</strong> names generated</span>
                </div>
            </section>

            {/* Sticky Input — fixed min-height prevents CLS */}
            <div className="sticky top-[64px] sm:top-[104px] z-40 py-2 sm:py-3 px-4 min-h-[56px] sm:min-h-[64px]">
                <div className="max-w-2xl mx-auto">
                    <TextInput onTextChange={setInputText} defaultValue={nameFromUrl || DEFAULT_INPUT} value={inputText} />
                </div>
            </div>

            {/* ✨ Unique Tools */}
            <ToolCards />

            {/* Recent Names */}
            <section className="px-4 sm:px-6 mb-4 sm:mb-8">
                <RecentNames />
            </section>

            {/* Category Tabs */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-3 sm:mb-6">
                <CategoryTabs />
            </section>

            {/* Results Grid */}
            <section id="style-results" className="px-4 sm:px-6 max-w-7xl mx-auto mb-6 sm:mb-12">
                <StyleGrid results={results} onCopy={incrementCopy} />
            </section>

            {/* Platform Links — U8: Use theme-adaptive text instead of hardcoded text-white */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-6 sm:mb-12">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.platformsHeading}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {PLATFORM_NAV_LINKS.map(plat => (
                        <Link
                            key={plat.href}
                            href={plat.href}
                            className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 rounded-xl border border-black/8 dark:border-white/10 hover:border-purple-500/30 text-center transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <span className="text-2xl block mb-1">{plat.label.split(' ')[0]}</span>
                            <span className="text-xs text-gray-400">{plat.label.split(' ').slice(1).join(' ')}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Tool Links Banner */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-6 sm:mb-12">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.toolsHeading}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {TOOL_NAV_LINKS.map(tool => (
                        <Link
                            key={tool.href}
                            href={tool.href}
                            className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 rounded-xl border border-black/8 dark:border-white/10 hover:border-purple-500/30 text-center transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <span className="text-2xl block mb-1">{tool.label.split(' ')[0]}</span>
                            <span className="text-xs text-gray-400">{tool.label.split(' ').slice(1).join(' ')}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* SEO Content */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto">
                <SEOContent
                    title={t.seoTitle}
                    content={getHomepageSEO(locale).content}
                    faqItems={getHomepageSEO(locale).faqItems}
                />
            </section>

            {/* U10: Scroll-to-top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-16 right-6 z-50 p-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Scroll to top"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}
