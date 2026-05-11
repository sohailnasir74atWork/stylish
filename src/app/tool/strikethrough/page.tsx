'use client';

import { useState, useMemo } from 'react';
import SEOContent from '@/components/SEOContent';
import { useLocale } from '@/hooks/useLocale';
import { getTranslatedSEO } from '@/lib/seoTranslations';
import { getTranslatedUI } from '@/lib/uiTranslations';

const COMBINING_CHARS: Record<string, string> = {
    strikethrough: '\u0336',    // S̶t̶r̶i̶k̶e̶
    underline: '\u0332',        // U̲n̲d̲e̲r̲l̲i̲n̲e̲
    doubleUnderline: '\u0333',  // D̳o̳u̳b̳l̳e̳
    overline: '\u0305',         // O̅v̅e̅r̅l̅i̅n̅e̅
    slash: '\u0338',            // S̸l̸a̸s̸h̸
    crosshatch: '\u0337',      // C̷r̷o̷s̷s̷
    tilde: '\u0334',            // T̴i̴l̴d̴e̴
    dots: '\u0308',             // D̈ö ẗs̈
    hearts: '\u0489',           // H҉e҉a҉r҉t
};

const STYLE_OPTIONS = [
    { id: 'strikethrough', name: 'Strikethrough', preview: 'S̶t̶r̶i̶k̶e̶', desc: 'Classic strikethrough line through text', emoji: '✂️' },
    { id: 'underline', name: 'Underline', preview: 'U̲n̲d̲e̲r̲l̲i̲n̲e̲', desc: 'Single underline below each character', emoji: '📏' },
    { id: 'doubleUnderline', name: 'Double Underline', preview: 'D̳o̳u̳b̳l̳e̳', desc: 'Double underline for emphasis', emoji: '📐' },
    { id: 'overline', name: 'Overline', preview: 'O̅v̅e̅r̅l̅i̅n̅e̅', desc: 'Line above each character', emoji: '⬆️' },
    { id: 'slash', name: 'Slash Through', preview: 'S̸l̸a̸s̸h̸', desc: 'Diagonal slash through text', emoji: '⚡' },
    { id: 'crosshatch', name: 'Crosshatch', preview: 'C̷r̷o̷s̷s̷', desc: 'Short slash overlay effect', emoji: '🔀' },
    { id: 'tilde', name: 'Wavy', preview: 'W̴a̴v̴y̴', desc: 'Tilde combining mark overlay', emoji: '🌊' },
    { id: 'dots', name: 'Dotted', preview: 'D̈ö ẗs̈', desc: 'Dots (diaeresis) above each character', emoji: '🔵' },
    { id: 'hearts', name: 'Heart Mark', preview: 'H҉e҉a҉r҉t҉', desc: 'Combining Cyrillic heart mark', emoji: '💕' },
];

function applyStyle(text: string, styleId: string): string {
    const combiner = COMBINING_CHARS[styleId];
    if (!combiner) return text;
    return [...text].map(c => c === ' ' ? ' ' : c + combiner).join('');
}

export default function StrikethroughPage() {
    const { locale, dictionary: t } = useLocale();
    const toolUI = getTranslatedUI(locale, 'strikethrough');
    const [text, setText] = useState('Your Name');
    const [copied, setCopied] = useState<string | null>(null);

    const results = useMemo(() => {
        if (!text.trim()) return [];
        return STYLE_OPTIONS.map(style => ({
            ...style,
            result: applyStyle(text, style.id),
        }));
    }, [text]);

    const handleCopy = (result: string, id: string) => {
        navigator.clipboard.writeText(result);
        setCopied(id);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">✂️</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        {toolUI?.name || 'Strikethrough & Text Effects'}
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    Add strikethrough, underline, overline, slash, wavy, and dotted effects to any text. Copy & paste everywhere!
                </p>
            </section>

            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-6">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Type your text..."
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50"
                />
            </section>

            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                <div className="space-y-3">
                    {results.map(style => (
                        <div
                            key={style.id}
                            onClick={() => handleCopy(style.result, style.id)}
                            className={`group cursor-pointer bg-black/5 dark:bg-white/5 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${copied === style.id
                                ? 'border-green-500/30 bg-green-500/5'
                                : 'border-black/8 dark:border-white/10 hover:border-purple-500/30 hover:bg-white/[0.07]'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span>{style.emoji}</span>
                                        <span className="text-xs text-gray-500">{style.name}</span>
                                    </div>
                                    <p className="text-base text-white truncate">{style.result}</p>
                                </div>
                                <span className={`shrink-0 ml-3 text-xs px-3 py-1 rounded-full transition-all ${copied === style.id
                                    ? 'bg-green-500/20 text-green-300'
                                    : 'bg-black/5 dark:bg-white/5 text-gray-500 group-hover:text-purple-300'
                                    }`}>
                                    {copied === style.id ? t.copiedButton : t.clickToCopy}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        
            {/* SEO Content - Locale Aware */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                {(() => {
                    const seo = getTranslatedSEO(locale, 'strikethrough');
                    if (!seo) return null;
                    return <SEOContent title="" content={seo.seoContent} faqItems={seo.faqItems} />;
                })()}
            </section>
        </div>
    );
}
