'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
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
            <HomePageInner t={t} />
        </Suspense>
    );
}

function HomePageInner({ t }: { t: Dictionary }) {
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

    const results = useMemo(() => generateAllStyles(inputText), [inputText]);

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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                    <span className="text-lg">✨</span>
                    <span><strong className="text-white">{copyCount}</strong> names generated</span>
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
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-6 sm:mb-12">
                <StyleGrid results={results} onCopy={incrementCopy} />
            </section>

            {/* Platform Links */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-6 sm:mb-12">
                <h2 className="text-xl font-bold text-white mb-4">{t.platformsHeading}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {PLATFORM_NAV_LINKS.map(plat => (
                        <Link
                            key={plat.href}
                            href={plat.href}
                            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/30 text-center transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <span className="text-2xl block mb-1">{plat.label.split(' ')[0]}</span>
                            <span className="text-xs text-gray-400">{plat.label.split(' ').slice(1).join(' ')}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Tool Links Banner */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-6 sm:mb-12">
                <h2 className="text-xl font-bold text-white mb-4">{t.toolsHeading}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {TOOL_NAV_LINKS.map(tool => (
                        <Link
                            key={tool.href}
                            href={tool.href}
                            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/30 text-center transition-all duration-300 hover:-translate-y-0.5"
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
                    content={`
            <p>Looking for a <strong>stylish name generator</strong>? You're in the right place! Our free tool lets you create <strong>stylish name designs</strong> with cool fonts, fancy symbols, and unique decorations. Just type your name, pick a style, and copy it — that's it. Works on <strong>Instagram, PUBG, Free Fire, TikTok, WhatsApp, Facebook</strong>, and every other app.</p>
            
            <h3>🎮 Stylish Names for Gaming</h3>
            <p>Our <strong>gaming name generator</strong> is built for players. Create a <strong>PUBG stylish name</strong> with cool symbols, or generate a <strong>Free Fire stylish name</strong> that fits the 12-character limit. We also support <strong>BGMI stylish names</strong>, Fortnite, COD Mobile, and Roblox. Every style is tested to work in-game — no broken characters.</p>

            <h3>📱 Stylish Names for Social Media</h3>
            <p>Make your profile pop with a unique <strong>Instagram stylish name</strong> for your bio. Our <strong>TikTok stylish name</strong> generator creates fonts that look amazing on your profile. Use our <strong>FB stylish name maker</strong> for a cool Facebook display name. And for messaging, our <strong>WhatsApp stylish name</strong> styles are perfect for status and profile.</p>
            
            <h3>👦👧 Stylish Names for Boys & Girls</h3>
            <p>Looking for a <strong>stylish name for boy</strong>? Try our cool, dashing, and attitude-filled designs. Or find a <strong>stylish name for girl</strong> with hearts, flowers, and cute symbols. We also have <strong>beautiful stylish names</strong> for anyone who wants something elegant and eye-catching.</p>

            <h3>💑 Couple & Group Names</h3>
            <p>Create matching <strong>stylish couple names</strong> with romantic fonts and love symbols. Or use our <strong>stylish friends group name</strong> generator for your WhatsApp group, gaming squad, or Discord server. We even have <strong>mafia stylish names</strong> if you want something bold and powerful.</p>

            <h3>🛠️ How Our Stylish Text Generator Works</h3>
            <p>Our <strong>stylish text generator</strong> uses Unicode characters — these are real text characters, not images. That means they work everywhere: any phone, any browser, any app. No downloads, no sign-ups. Just type your <strong>name style</strong> and copy. We have over 1000 <strong>stylish text name</strong> designs including cursive, bold, gothic, bubble, italic, and decorated fonts.</p>
            
            <h3>📶 More Cool Tools</h3>
            <p>Besides the <strong>stylish name design</strong> generator, we also have an <strong>invisible text generator</strong> for blank names, a <strong>text repeater</strong>, a <strong>zalgo text generator</strong> for creepy effects, a <strong>strikethrough text</strong> tool, <strong>mirror text</strong> and <strong>upside down text</strong> generators, and 400+ special symbols you can copy. All free, all instant.</p>
            
            <h3>💡 Quick Tips</h3>
            <ul>
              <li>Keep names short (3–15 characters) for the best look</li>
              <li>Try different categories — gaming, cute, cool, fancy, love</li>
              <li>Mix styles with decorators for something totally unique</li>
              <li>Test your name in the app before finalizing — some platforms have limits</li>
              <li>Use our compatibility checker to see which platforms support your name</li>
            </ul>
          `}
                    faqItems={[
                        {
                            question: 'What is a stylish name generator?',
                            answer: 'A stylish name generator is a free tool that turns your plain text into cool, fancy-looking names using special Unicode fonts and symbols. You just type your name, pick a style you like, and copy it. It works on Instagram, PUBG, Free Fire, TikTok, WhatsApp, and pretty much anywhere.',
                        },
                        {
                            question: 'How to make a stylish name for PUBG and Free Fire?',
                            answer: 'Just type your name in the box above, scroll through the styles, and tap on one you like — it copies instantly. Then paste it as your in-game username. Our generator has 1000+ fonts that work on PUBG Mobile, Free Fire, BGMI, and other games.',
                        },
                        {
                            question: 'Can I make stylish names for boys and girls?',
                            answer: 'Yes! We have separate categories for boys (cool, dashing, attitude styles) and girls (cute, beautiful, lovely styles). Visit our Boy Names or Girl Names page for styles made just for you.',
                        },
                        {
                            question: 'Do stylish names work on Instagram and TikTok?',
                            answer: 'Yes, 100%. Our names use Unicode characters that work on Instagram bio, TikTok username, WhatsApp status, Facebook profile, and all social media apps. No special app needed — just copy and paste.',
                        },
                        {
                            question: 'Is this stylish name generator free?',
                            answer: 'Totally free! No sign-up, no downloads, no limits. Generate as many stylish names as you want. We also have free tools like invisible text, text repeater, zalgo text, and 400+ symbols to copy.',
                        },
                        {
                            question: 'What other tools do you have?',
                            answer: 'Besides the stylish name generator, we have an invisible text generator (for blank names in games), text repeater, zalgo/glitch text maker, strikethrough and text effects, upside down and mirror text, 400+ symbols keyboard, Instagram captions, and a character counter for checking platform limits.',
                        },
                    ]}
                />
            </section>
        </div>
    );
}
