'use client';

import { useState } from 'react';
import SEOContent from '@/components/SEOContent';
import { useLocale } from '@/lib/useLocale';
import { getTranslatedSEO } from '@/lib/seoTranslations';
import { getTranslatedUI } from '@/lib/uiTranslations';

const SYMBOL_CATEGORIES = [
    {
        name: 'Stars & Sparkles',
        emoji: '⭐',
        symbols: ['★', '☆', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⁂', '⁑', '⁎', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '✽', '✾', '❂', '❃', '❇', '❈', '❉', '❊', '❋', '✨', '💫', '⭐', '🌟', '✴️'],
    },
    {
        name: 'Hearts & Love',
        emoji: '❤️',
        symbols: ['♡', '♥', '❤', '❥', '❣', '❦', '❧', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '🖤', '🤍', '🤎', '💝', '💞', '💟', '❤️‍🔥', '❤️‍🩹', '♡⃛', '♡⃝'],
    },
    {
        name: 'Arrows',
        emoji: '➤',
        symbols: ['→', '←', '↑', '↓', '↔', '↕', '➜', '➝', '➞', '➟', '➠', '➡', '➤', '➥', '➦', '➧', '➨', '➩', '➪', '➫', '➬', '➭', '➮', '➯', '➱', '⟶', '⟵', '⟷', '⇒', '⇐', '⇔', '⇑', '⇓', '↗', '↘', '↙', '↖'],
    },
    {
        name: 'Crowns & Royal',
        emoji: '👑',
        symbols: ['♔', '♕', '♚', '♛', '👑', '🤴', '👸', '🏰', '⚜', '♜', '♝', '♞', '♟', '🗡️', '⚔️', '🛡️', '♠', '♣', '♦', '♤', '♧', '♢'],
    },
    {
        name: 'Music & Sound',
        emoji: '🎵',
        symbols: ['♩', '♪', '♫', '♬', '♭', '♮', '♯', '🎵', '🎶', '🎤', '🎸', '🎹', '🎺', '🎻', '🎼', '🥁', '🎧'],
    },
    {
        name: 'Weather & Nature',
        emoji: '🌿',
        symbols: ['☀', '☁', '☂', '☃', '❄', '☾', '☽', '✿', '❀', '❁', '🌸', '🌺', '🌻', '🌹', '🌷', '🍀', '🌿', '🍃', '🌙', '⭐', '🌈', '⚡', '🔥', '💧', '❆', '❅'],
    },
    {
        name: 'Faces & Emoticons',
        emoji: '(◕‿◕)',
        symbols: ['( ͡° ͜ʖ ͡°)', '(◕‿◕)', '(ᵔᴥᵔ)', '(╯°□°)╯', '¯\\_(ツ)_/¯', '(ノ◕ヮ◕)ノ*:・゚✧', 'ʕ•ᴥ•ʔ', '(◔◡◔)', '(⌐■_■)', '(╥﹏╥)', '(⊙_⊙)', '(ಠ_ಠ)', '(✿◠‿◠)', 'ᕦ(ò_óˇ)ᕤ', '(☞ ͡° ͜ʖ ͡°)☞'],
    },
    {
        name: 'Math & Currency',
        emoji: '∞',
        symbols: ['∞', '≈', '≠', '≤', '≥', '±', '÷', '×', '√', '∂', '∆', '∑', '∏', 'π', 'Ω', '∫', '$', '€', '£', '¥', '₹', '₿', '¢', '₩', '₽'],
    },
    {
        name: 'Decorative Borders',
        emoji: '꧁',
        symbols: ['꧁', '꧂', '༺', '༻', '༒', '࿐', '࿇', '〘', '〙', '「', '」', '『', '』', '【', '】', '〖', '〗', '◤', '◥', '◣', '◢', '▰', '▱', '░', '▒', '▓', '█'],
    },
    {
        name: 'Zodiac & Symbols',
        emoji: '☯',
        symbols: ['☯', '☮', '☸', '✡', '☪', '✝', '☥', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⚕', '⚖', '⚗', '⚛', '⚿'],
    },
    {
        name: 'Check & Bullets',
        emoji: '✓',
        symbols: ['✓', '✔', '✗', '✘', '✕', '☑', '☒', '☐', '●', '○', '◉', '◎', '◈', '◇', '◆', '▪', '▫', '■', '□', '▲', '△', '▼', '▽', '►', '◄', '⦿', '⊙'],
    },
    {
        name: 'Gaming & Skulls',
        emoji: '☠',
        symbols: ['☠', '💀', '👻', '👾', '🎮', '🕹️', '🏆', '⚡', '🔥', '💣', '💥', '🗡️', '⚔️', '🛡️', '🏹', '🎯', '亗', '×͜×', '卍'],
    },
];

export default function SymbolKeyboardPage() {
    const locale = useLocale();
    const toolUI = getTranslatedUI(locale, 'symbol-keyboard');
    const [copied, setCopied] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState(SYMBOL_CATEGORIES[0].name);
    const [searchQuery, setSearchQuery] = useState('');

    const handleCopy = (symbol: string) => {
        navigator.clipboard.writeText(symbol);
        setCopied(symbol);
        setTimeout(() => setCopied(null), 800);
    };

    const filteredCategories = searchQuery.trim()
        ? SYMBOL_CATEGORIES.map(cat => ({
            ...cat,
            symbols: cat.symbols.filter(s => s.includes(searchQuery)),
        })).filter(cat => cat.symbols.length > 0)
        : SYMBOL_CATEGORIES.filter(cat => cat.name === activeCategory);

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">⌨️</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        {toolUI?.name || 'Symbol & Emoji Keyboard'}
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    Browse 400+ special symbols, emojis, and characters. Click to copy instantly — use in bios, names, and captions!
                </p>
            </section>

            {/* Search */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="🔍 Search symbols..."
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50"
                />
            </section>

            {/* Category Tabs */}
            {!searchQuery && (
                <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-6">
                    <div className="flex flex-wrap gap-1.5">
                        {SYMBOL_CATEGORIES.map(cat => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`px-3 py-1.5 text-xs rounded-full border transition-all ${activeCategory === cat.name
                                    ? 'bg-purple-600 border-purple-600 text-white font-semibold'
                                    : 'bg-black/5 dark:bg-white/5 border-black/8 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-purple-500/10 hover:border-purple-500/30'
                                    }`}
                            >
                                {cat.emoji} {cat.name}
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {/* Symbols Grid */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-12">
                {filteredCategories.map(cat => (
                    <div key={cat.name} className="mb-8">
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{cat.emoji} {cat.name}</h2>
                        <div className="flex flex-wrap gap-2">
                            {cat.symbols.map((symbol, i) => (
                                <button
                                    key={`${symbol}-${i}`}
                                    onClick={() => handleCopy(symbol)}
                                    className={`min-w-[44px] h-11 px-2 flex items-center justify-center rounded-lg border text-lg transition-all duration-200 ${copied === symbol
                                        ? 'bg-green-500/20 border-green-500/30 scale-110'
                                        : 'bg-black/5 dark:bg-white/5 border-black/8 dark:border-white/10 hover:bg-purple-500/10 hover:border-purple-500/30 hover:scale-105'
                                        }`}
                                    title={`Copy ${symbol}`}
                                >
                                    {symbol}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Copied toast */}
                {copied && (
                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg shadow-green-500/25 animate-bounce">
                        ✓ Copied: {copied}
                    </div>
                )}
            </section>

            {/* SEO Content - Locale Aware */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                {(() => {
                    const seo = getTranslatedSEO(locale, 'symbol-keyboard');
                    if (!seo) return null;
                    return <SEOContent title="" content={seo.seoContent} faqItems={seo.faqItems} />;
                })()}
            </section>
        </div>
    );
}
