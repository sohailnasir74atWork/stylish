'use client';

import { useState, useMemo } from 'react';
import TextInput from '@/components/TextInput';
import StyleGrid from '@/components/StyleGrid';
import CategoryTabs from '@/components/CategoryTabs';
import RecentNames from '@/components/RecentNames';
import SEOContent from '@/components/SEOContent';
import { generateStylesByCategory, generateAllStyles } from '@/lib/unicodeEngine';
import { categories } from '@/lib/categories';
import { platforms } from '@/lib/categories';
import { DEFAULT_INPUT } from '@/lib/constants';
import PreBuiltNamesGrid from '@/components/PreBuiltNamesGrid';
import ToolCards from '@/components/ToolCards';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/lib/dictionaries';

interface CategoryPageClientProps {
    slug: string;
    locale: Locale;
    dictionary: Dictionary;
}

export default function CategoryPageClient({ slug, locale, dictionary: t }: CategoryPageClientProps) {
    const [inputText, setInputText] = useState(DEFAULT_INPUT);

    // Find matching category or platform
    const category = categories.find(c => c.slug === slug);
    const platform = platforms.find(p => p.slug === slug);
    const pageInfo = category || platform;

    const results = useMemo(() => {
        if (category) {
            return generateStylesByCategory(inputText, category.charMapCategory, slug);
        }
        // For platforms, show all styles
        return generateAllStyles(inputText);
    }, [inputText, category]);

    if (!pageInfo) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <span className="text-6xl block mb-4">🔍</span>
                    <h1 className="text-2xl font-bold text-white mb-2">Category Not Found</h1>
                    <p className="text-gray-400">The category you&apos;re looking for doesn&apos;t exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">{category?.emoji || platform?.emoji}</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        {pageInfo.name} Stylish Name Generator
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
                    {pageInfo.heroText}
                </p>
            </section>

            {/* Sticky Input — always visible while scrolling */}
            <div className="sticky top-[104px] z-40 py-3 px-4">
                <div className="max-w-2xl mx-auto">
                    <TextInput onTextChange={setInputText} defaultValue={DEFAULT_INPUT} />
                </div>
            </div>

            {/* Unique Tools */}
            <ToolCards />

            {/* Pre-built Names (if available) */}
            <PreBuiltNamesGrid slug={slug} />

            {/* Recent */}
            <section className="px-4 sm:px-6 mb-8">
                <RecentNames />
            </section>

            {/* Category Tabs */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-6">
                <CategoryTabs activeSlug={slug} />
            </section>

            {/* Results Grid */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-12">
                <StyleGrid results={results} />
            </section>

            {/* SEO Content */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto">
                <SEOContent
                    title={`${pageInfo.emoji} ${pageInfo.name} Stylish Names`}
                    content={`
            <p>${pageInfo.description}. Our <strong>${pageInfo.name} stylish name generator</strong> creates hundreds of unique font styles with decorative symbols that you can copy and paste instantly.</p>
            
            <h3>How to Use ${pageInfo.name} Names</h3>
            <ol>
              <li>Type your name or text in the input box above</li>
              <li>Browse through the ${pageInfo.name.toLowerCase()}-themed styles</li>
              <li>Click any style to copy it to your clipboard</li>
              <li>Paste it on your favorite platform!</li>
            </ol>

            <h3>Where to Use ${pageInfo.name} Names</h3>
            <ul>
              <li>Instagram bio and profile name</li>
              <li>TikTok and YouTube usernames</li>
              <li>Gaming platforms (PUBG, Free Fire, COD)</li>
              <li>WhatsApp and Telegram status</li>
              <li>Discord and Snapchat usernames</li>
            </ul>
          `}
                    faqItems={[
                        {
                            question: `What are ${pageInfo.name.toLowerCase()} stylish names?`,
                            answer: `${pageInfo.name} stylish names are specially designed text styles using Unicode characters and symbols that give your name a ${pageInfo.name.toLowerCase()} look. They work on all platforms and are free to use.`,
                        },
                        {
                            question: `Can I use ${pageInfo.name.toLowerCase()} names on social media?`,
                            answer: `Yes! Our ${pageInfo.name.toLowerCase()} stylish names use Unicode characters that work on Instagram, TikTok, Facebook, Twitter, WhatsApp, and most other platforms.`,
                        },
                        {
                            question: `Are ${pageInfo.name.toLowerCase()} names free?`,
                            answer: `Absolutely! Our ${pageInfo.name.toLowerCase()} name generator is completely free. You can generate unlimited names without any sign-up or download.`,
                        },
                    ]}
                />
            </section>
        </div>
    );
}
