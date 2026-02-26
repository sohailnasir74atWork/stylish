'use client';

import { useState, useMemo } from 'react';
import TextInput from '@/components/TextInput';
import StyleGrid from '@/components/StyleGrid';
import RecentNames from '@/components/RecentNames';
import SEOContent from '@/components/SEOContent';
import { generateStylesForTool, generateAllStyles } from '@/lib/unicodeEngine';
import { tools } from '@/lib/tools';
import { DEFAULT_INPUT } from '@/lib/constants';
import Link from 'next/link';
import ToolCards from '@/components/ToolCards';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/lib/dictionaries';

interface ToolPageClientProps {
    slug: string;
    locale: Locale;
    dictionary: Dictionary;
}

export default function ToolPageClient({ slug, locale, dictionary: t }: ToolPageClientProps) {
    const [inputText, setInputText] = useState(DEFAULT_INPUT);

    const tool = tools.find(t => t.slug === slug);

    const results = useMemo(() => {
        if (tool) {
            const toolResults = generateStylesForTool(inputText, tool.charMapCategory);
            // If tool category has few results, also add all styles
            if (toolResults.length < 20) {
                return [...toolResults, ...generateAllStyles(inputText).slice(0, 50)];
            }
            return toolResults;
        }
        return generateAllStyles(inputText);
    }, [inputText, tool]);

    if (!tool) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <span className="text-6xl block mb-4">🔍</span>
                    <h1 className="text-2xl font-bold text-white mb-2">Tool Not Found</h1>
                    <p className="text-gray-400">The tool you&apos;re looking for doesn&apos;t exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">{tool.emoji}</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        {tool.name}
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
                    {tool.heroText}
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

            {/* Recent */}
            <section className="px-4 sm:px-6 mb-8">
                <RecentNames />
            </section>

            {/* Other tools links */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-6">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                    {tools.map(t => (
                        <Link
                            key={t.slug}
                            href={`/tool/${t.slug}`}
                            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${t.slug === slug
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {t.emoji} {t.name.replace(' Generator', '')}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Results */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-12">
                <StyleGrid results={results} />
            </section>

            {/* SEO */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto">
                <SEOContent
                    title={`${tool.emoji} ${tool.name}`}
                    content={`
            <p>${tool.description}. Our <strong>${tool.name}</strong> converts your plain text into beautiful ${tool.name.toLowerCase().replace(' generator', '')} fonts that you can copy and paste anywhere.</p>
            
            <h3>How to Use the ${tool.name}</h3>
            <ol>
              <li>Type your text in the input box above</li>
              <li>Browse through the generated ${tool.name.toLowerCase().replace(' generator', '')} styles</li>
              <li>Click any result to copy it instantly</li>
              <li>Paste it on Instagram, TikTok, WhatsApp, gaming profiles, or anywhere else</li>
            </ol>

            <h3>What Are ${tool.name.replace(' Generator', '')} Fonts?</h3>
            <p>${tool.name.replace(' Generator', '')} fonts are special Unicode characters that mimic the appearance of ${tool.name.toLowerCase().replace(' generator', '')} typefaces. Unlike regular fonts that require installation, these work everywhere because they are actual Unicode characters supported by all modern devices.</p>
          `}
                    faqItems={[
                        {
                            question: `What is a ${tool.name.toLowerCase()}?`,
                            answer: `A ${tool.name.toLowerCase()} converts your regular text into ${tool.name.toLowerCase().replace(' generator', '')} style Unicode fonts. These are real characters that work on any device and platform without requiring font installation.`,
                        },
                        {
                            question: `Where can I use ${tool.name.toLowerCase().replace(' generator', '')} fonts?`,
                            answer: `You can use ${tool.name.toLowerCase().replace(' generator', '')} fonts on Instagram, TikTok, Facebook, WhatsApp, Discord, gaming platforms like PUBG and Free Fire, and anywhere that supports Unicode text.`,
                        },
                        {
                            question: `Is the ${tool.name.toLowerCase()} free?`,
                            answer: `Yes! Our ${tool.name.toLowerCase()} is completely free to use. Generate unlimited ${tool.name.toLowerCase().replace(' generator', '')} text without sign-up or downloads.`,
                        },
                    ]}
                />
            </section>
        </div>
    );
}
