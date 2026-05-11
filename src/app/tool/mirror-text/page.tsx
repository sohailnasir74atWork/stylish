'use client';

import { useState, useMemo } from 'react';
import SEOContent from '@/components/SEOContent';
import { useLocale } from '@/lib/useLocale';
import { getTranslatedSEO } from '@/lib/seoTranslations';
import { getTranslatedUI } from '@/lib/uiTranslations';

// Upside down character map
const UPSIDE_DOWN_MAP: Record<string, string> = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ',
    'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u',
    'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n',
    'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
    'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁',
    'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ꓘ', 'L': '˥', 'M': 'W', 'N': 'N',
    'O': 'O', 'P': 'Ԁ', 'Q': 'Ò', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩',
    'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
    '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9',
    '7': 'ㄥ', '8': '8', '9': '6',
    '.': '˙', ',': '\'', '\'': ',', '"': ',,', '`': ',', '!': '¡', '?': '¿',
    '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<',
    '&': '⅋', '_': '‾', ';': '؛',
};

// Mirror character map
const MIRROR_MAP: Record<string, string> = {
    'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'Ꮈ', 'g': 'ǫ',
    'h': 'ʜ', 'i': 'i', 'j': 'ꞁ', 'k': 'ʞ', 'l': 'l', 'm': 'm', 'n': 'ᴎ',
    'o': 'o', 'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 'ꙅ', 't': 'ƚ', 'u': 'u',
    'v': 'v', 'w': 'w', 'x': 'x', 'y': 'ʏ', 'z': 'ꙃ',
    'A': 'A', 'B': 'ᗺ', 'C': 'Ↄ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ꟻ', 'G': 'Ꭾ',
    'H': 'H', 'I': 'I', 'J': 'Ⴑ', 'K': 'ꓘ', 'L': '⌐', 'M': 'M', 'N': 'ᴎ',
    'O': 'O', 'P': 'ꟼ', 'Q': 'Ꝺ', 'R': 'Я', 'S': 'Ꙅ', 'T': 'T', 'U': 'U',
    'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Ꙃ',
    '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<',
    '?': '⸮', '/': '\\', '\\': '/',
};

function flipText(text: string): string {
    return [...text].map(c => UPSIDE_DOWN_MAP[c] ?? c).reverse().join('');
}

function mirrorText(text: string): string {
    return [...text].map(c => MIRROR_MAP[c] ?? c).reverse().join('');
}

export default function UpsideDownPage() {
    const locale = useLocale();
    const toolUI = getTranslatedUI(locale, 'mirror-text');
    const [text, setText] = useState('Hello World');
    const [copied, setCopied] = useState<string | null>(null);

    const flipped = useMemo(() => flipText(text), [text]);
    const mirrored = useMemo(() => mirrorText(text), [text]);

    const handleCopy = (result: string, id: string) => {
        navigator.clipboard.writeText(result);
        setCopied(id);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">🙃</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        {toolUI?.name || 'Upside Down & Mirror Text'}
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    Flip your text upside down or mirror it! Fun for WhatsApp, Instagram, Discord messages & more.
                </p>
            </section>

            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6 space-y-5">
                    {/* Input */}
                    <div>
                        <label className="block text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Your text</label>
                        <input
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Type something fun..."
                            className="w-full bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50"
                        />
                    </div>

                    {/* Upside Down Result */}
                    <div>
                        <label className="block text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">🙃 Upside Down</label>
                        <div className="bg-black/30 rounded-xl border border-black/8 dark:border-white/10 p-4">
                            <p className="text-lg text-gray-200 break-all">{flipped || '...'}</p>
                        </div>
                        <button
                            onClick={() => handleCopy(flipped, 'flip')}
                            className={`mt-2 w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${copied === 'flip'
                                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90'
                                }`}
                        >
                            {copied === 'flip' ? '✓ Copied!' : '📋 Copy Upside Down Text'}
                        </button>
                    </div>

                    {/* Mirror Result */}
                    <div>
                        <label className="block text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">🪞 Mirror Text</label>
                        <div className="bg-black/30 rounded-xl border border-black/8 dark:border-white/10 p-4">
                            <p className="text-lg text-gray-200 break-all">{mirrored || '...'}</p>
                        </div>
                        <button
                            onClick={() => handleCopy(mirrored, 'mirror')}
                            className={`mt-2 w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${copied === 'mirror'
                                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90'
                                }`}
                        >
                            {copied === 'mirror' ? '✓ Copied!' : '📋 Copy Mirror Text'}
                        </button>
                    </div>
                </div>
            </section>
        
            {/* SEO Content - Locale Aware */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                {(() => {
                    const seo = getTranslatedSEO(locale, 'mirror-text');
                    if (!seo) return null;
                    return <SEOContent title="" content={seo.seoContent} faqItems={seo.faqItems} />;
                })()}
            </section>
        </div>
    );
}
