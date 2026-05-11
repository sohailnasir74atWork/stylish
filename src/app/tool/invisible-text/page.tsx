'use client';

import { useState } from 'react';
import SEOContent from '@/components/SEOContent';
import { useLocale } from '@/lib/useLocale';
import { getTranslatedSEO } from '@/lib/seoTranslations';
import { getTranslatedUI } from '@/lib/uiTranslations';

const INVISIBLE_CHARS = [
    { id: 'zwsp', name: 'Zero-Width Space', char: '\u200B', desc: 'Most compatible invisible character. Works on PUBG, Free Fire, Instagram, WhatsApp, and most platforms.', unicode: 'U+200B' },
    { id: 'zwnj', name: 'Zero-Width Non-Joiner', char: '\u200C', desc: 'Works great for gaming names (BGMI, COD Mobile). Some platforms treat differently from ZWSP.', unicode: 'U+200C' },
    { id: 'zwj', name: 'Zero-Width Joiner', char: '\u200D', desc: 'Used in emoji sequences. Can create invisible text on Discord, Telegram, and most chat apps.', unicode: 'U+200D' },
    { id: 'wj', name: 'Word Joiner', char: '\u2060', desc: 'Prevents line breaks. Works as invisible text on many social media platforms.', unicode: 'U+2060' },
    { id: 'braille', name: 'Braille Blank', char: '\u2800', desc: 'Appears as a blank space. Works for empty usernames on Roblox, Discord, and some games.', unicode: 'U+2800' },
    { id: 'hangul', name: 'Hangul Filler', char: '\u3164', desc: 'Korean invisible character. Works as blank name in many Asian games and apps.', unicode: 'U+3164' },
];

const USE_CASES = [
    { emoji: '🎮', title: 'Blank Gaming Names', platforms: 'PUBG · Free Fire · BGMI · COD Mobile', tip: 'Use Zero-Width Space or Braille Blank for invisible usernames.' },
    { emoji: '💬', title: 'Empty WhatsApp Messages', platforms: 'WhatsApp · Telegram · Signal', tip: 'Send blank messages to friends. Copy the Braille Blank character.' },
    { emoji: '📸', title: 'Invisible Instagram Bio', platforms: 'Instagram · TikTok · Threads', tip: 'Create clean line breaks or empty-looking bios.' },
    { emoji: '🎧', title: 'Blank Discord Names', platforms: 'Discord · Slack · Teams', tip: 'Use Hangul Filler for invisible Discord nicknames.' },
    { emoji: '🕹️', title: 'Empty Roblox Username', platforms: 'Roblox · Minecraft · Fortnite', tip: 'Braille Blank works best for gaming platforms.' },
];

export default function InvisibleTextPage() {
    const locale = useLocale();
    const toolUI = getTranslatedUI(locale, 'invisible-text');
    const [copied, setCopied] = useState<string | null>(null);
    const [repeatCount, setRepeatCount] = useState(1);

    const handleCopy = (char: string, id: string) => {
        const text = char.repeat(repeatCount);
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">🫥</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        {toolUI?.name || 'Invisible Text Generator'}
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    Generate invisible characters for blank names in PUBG, Free Fire, WhatsApp, Discord & more. Copy empty text instantly!
                </p>
            </section>

            {/* Repeat Count */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-8">
                <div className="flex items-center justify-center gap-4">
                    <label className="text-sm text-gray-400">Repeat count:</label>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setRepeatCount(Math.max(1, repeatCount - 1))} className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 text-white hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 transition-colors">−</button>
                        <input
                            type="number"
                            min={1}
                            max={100}
                            value={repeatCount}
                            onChange={e => setRepeatCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                            className="w-16 text-center bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-lg text-white py-1.5 text-sm"
                        />
                        <button onClick={() => setRepeatCount(Math.min(100, repeatCount + 1))} className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 text-white hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 transition-colors">+</button>
                    </div>
                </div>
            </section>

            {/* Invisible Characters */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                <div className="space-y-4">
                    {INVISIBLE_CHARS.map(item => (
                        <div key={item.id} className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-5 hover:border-purple-500/30 transition-all">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-white font-semibold">{item.name}</h3>
                                        <span className="text-[10px] px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full font-mono">{item.unicode}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                                <button
                                    onClick={() => handleCopy(item.char, item.id)}
                                    className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${copied === item.id
                                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30'
                                        }`}
                                >
                                    {copied === item.id ? '✓ Copied!' : `Copy${repeatCount > 1 ? ` ×${repeatCount}` : ''}`}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                <h2 className="text-xl font-bold text-white mb-6 text-center">📋 Where to Use Invisible Text</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {USE_CASES.map(uc => (
                        <div key={uc.title} className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-4">
                            <p className="text-2xl mb-2">{uc.emoji}</p>
                            <h3 className="text-white font-semibold text-sm mb-1">{uc.title}</h3>
                            <p className="text-[10px] text-purple-300/70 mb-2">{uc.platforms}</p>
                            <p className="text-xs text-gray-500">{uc.tip}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                <h2 className="text-xl font-bold text-white mb-6 text-center">❓ FAQ</h2>
                <div className="space-y-3">
                    {[
                        { q: 'What is invisible text?', a: 'Invisible text uses special Unicode characters that take up space but have no visible glyph. They appear blank to the eye but are valid characters.' },
                        { q: 'How to get a blank name in PUBG?', a: 'Copy the Zero-Width Space or Braille Blank character from above and paste it as your PUBG username. Some characters work better than others depending on the game version.' },
                        { q: 'Can I send empty messages on WhatsApp?', a: 'Yes! Copy the Braille Blank character (⠀) and paste it in WhatsApp. It will send as a blank message.' },
                        { q: 'Is invisible text the same as spaces?', a: 'No. Regular spaces are often trimmed by platforms. Invisible characters are special Unicode that platforms treat as valid text content.' },
                    ].map(faq => (
                        <details key={faq.q} className="group bg-white/[0.03] rounded-xl border border-white/[0.06] p-4">
                            <summary className="text-sm text-white font-medium cursor-pointer list-none flex justify-between items-center">
                                {faq.q}
                                <span className="text-gray-500 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="text-xs text-gray-400 mt-2 leading-relaxed">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </section>
        
            {/* SEO Content - Locale Aware */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                {(() => {
                    const seo = getTranslatedSEO(locale, 'invisible-text');
                    if (!seo) return null;
                    return <SEOContent title="" content={seo.seoContent} faqItems={seo.faqItems} />;
                })()}
            </section>
        </div>
    );
}
