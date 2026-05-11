'use client';

import { useState, useMemo } from 'react';
import StylePicker from '@/components/StylePicker';
import { DEFAULT_INPUT } from '@/lib/constants';
import SEOContent from '@/components/SEOContent';
import { useLocale } from '@/lib/useLocale';
import { getTranslatedSEO } from '@/lib/seoTranslations';
import { getTranslatedUI } from '@/lib/uiTranslations';

interface PlatformInfo {
    id: string;
    name: string;
    emoji: string;
    maxLength: number;
    blockedPatterns: RegExp[];
    blockedNote: string;
    supportLevel: 'full' | 'partial' | 'limited';
}

const platforms: PlatformInfo[] = [
    { id: 'instagram', name: 'Instagram', emoji: '📸', maxLength: 30, blockedPatterns: [], blockedNote: 'Supports most Unicode', supportLevel: 'full' },
    { id: 'tiktok', name: 'TikTok', emoji: '🎵', maxLength: 30, blockedPatterns: [], blockedNote: 'Supports most Unicode', supportLevel: 'full' },
    { id: 'whatsapp', name: 'WhatsApp', emoji: '💬', maxLength: 25, blockedPatterns: [], blockedNote: 'Supports most Unicode', supportLevel: 'full' },
    { id: 'facebook', name: 'Facebook', emoji: '👤', maxLength: 50, blockedPatterns: [/[^\p{L}\p{N}\s.',-]/u], blockedNote: 'Limited to basic Unicode in display names', supportLevel: 'partial' },
    { id: 'discord', name: 'Discord', emoji: '🎮', maxLength: 32, blockedPatterns: [], blockedNote: 'Supports Unicode in display names', supportLevel: 'full' },
    { id: 'pubg', name: 'PUBG Mobile', emoji: '🎯', maxLength: 14, blockedPatterns: [/[\u0300-\u036f]/g], blockedNote: 'Limited combining marks, some special chars blocked', supportLevel: 'partial' },
    { id: 'freefire', name: 'Free Fire', emoji: '🔥', maxLength: 12, blockedPatterns: [/[\u0300-\u036f]/g], blockedNote: 'Strict character limits, many Unicode fonts work', supportLevel: 'partial' },
    { id: 'fortnite', name: 'Fortnite', emoji: '🏰', maxLength: 16, blockedPatterns: [/[^\x20-\x7E\u00C0-\u024F]/], blockedNote: 'Mostly ASCII, limited Unicode support', supportLevel: 'limited' },
    { id: 'roblox', name: 'Roblox', emoji: '🧱', maxLength: 20, blockedPatterns: [/[^\x20-\x7E]/], blockedNote: 'ASCII only, no Unicode fonts in usernames', supportLevel: 'limited' },
    { id: 'youtube', name: 'YouTube', emoji: '▶️', maxLength: 50, blockedPatterns: [], blockedNote: 'Full Unicode support', supportLevel: 'full' },
    { id: 'telegram', name: 'Telegram', emoji: '📨', maxLength: 64, blockedPatterns: [], blockedNote: 'Full Unicode support', supportLevel: 'full' },
    { id: 'snapchat', name: 'Snapchat', emoji: '👻', maxLength: 15, blockedPatterns: [/[^\x20-\x7E]/], blockedNote: 'ASCII only for usernames, display name supports some Unicode', supportLevel: 'limited' },
    { id: 'spotify', name: 'Spotify', emoji: '🎧', maxLength: 30, blockedPatterns: [], blockedNote: 'Supports most Unicode in display names', supportLevel: 'full' },
    { id: 'bgmi', name: 'BGMI', emoji: '🎮', maxLength: 14, blockedPatterns: [/[\u0300-\u036f]/g], blockedNote: 'Same as PUBG — limited combining marks', supportLevel: 'partial' },
    { id: 'twitter', name: 'Twitter/X', emoji: '🐦', maxLength: 50, blockedPatterns: [], blockedNote: 'Full Unicode support', supportLevel: 'full' },
];

function checkCompatibility(text: string, platform: PlatformInfo) {
    const issues: string[] = [];
    let score = 100;

    if (text.length > platform.maxLength) {
        issues.push(`Too long (${text.length}/${platform.maxLength} chars)`);
        score -= 30;
    }

    for (const pattern of platform.blockedPatterns) {
        if (pattern.test(text)) {
            issues.push('Contains unsupported characters');
            score -= 40;
            break;
        }
    }

    if (/[\u0300-\u036f]{3,}/g.test(text)) {
        issues.push('Excessive combining marks may be stripped');
        score -= 20;
    }

    return { score: Math.max(0, score), issues, ok: score >= 70 };
}

export default function CompatibilityCheckerPage() {
    const locale = useLocale();
    const toolUI = getTranslatedUI(locale, 'compatibility-checker');
    const [inputText, setInputText] = useState(DEFAULT_INPUT);
    const [styledText, setStyledText] = useState(DEFAULT_INPUT);

    const results = useMemo(() => {
        return platforms.map(p => ({
            platform: p,
            ...checkCompatibility(styledText, p),
        }));
    }, [styledText]);

    return (
        <div className="min-h-screen">
            <section className="relative py-10 sm:py-14 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                        🧪 Name {toolUI?.name || 'Compatibility Checker'}
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Apply any style + decorator, then check if it works on 15 platforms!
                </p>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Input + Style Picker */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Your Text</label>
                            <input
                                type="text"
                                value={inputText}
                                onChange={e => { setInputText(e.target.value); setStyledText(e.target.value); }}
                                maxLength={50}
                                className="w-full px-5 py-3.5 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl text-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                                placeholder="Enter your name..."
                            />
                        </div>

                        <StylePicker
                            inputText={inputText}
                            styledText={styledText}
                            onStyled={setStyledText}
                        />
                    </div>

                    {/* Right: Results */}
                    <div className="lg:sticky lg:top-[120px] lg:self-start">
                        {/* Testing text display */}
                        <div className="mb-4 p-4 bg-black/5 dark:bg-white/5 rounded-xl border border-black/8 dark:border-white/10">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Testing this name</p>
                            <p className="text-xl text-white break-all" dir="auto">{styledText}</p>
                            <p className="text-[10px] text-gray-600 mt-1">{styledText.length} characters</p>
                        </div>

                        <div className="space-y-2.5">
                            {results.map(r => (
                                <div
                                    key={r.platform.id}
                                    className={`p-3.5 rounded-xl border transition-all ${r.ok
                                        ? 'bg-green-500/5 border-green-500/20'
                                        : r.score > 30
                                            ? 'bg-yellow-500/5 border-yellow-500/20'
                                            : 'bg-red-500/5 border-red-500/20'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{r.platform.emoji}</span>
                                            <div>
                                                <p className="text-white font-medium text-sm">{r.platform.name}</p>
                                                <p className="text-[10px] text-gray-500">Max {r.platform.maxLength} chars • {r.platform.supportLevel} Unicode</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="hidden sm:block w-24 h-2 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all ${r.ok ? 'bg-green-500' : r.score > 30 ? 'bg-yellow-500' : 'bg-red-500'
                                                        }`}
                                                    style={{ width: `${r.score}%` }}
                                                />
                                            </div>
                                            <span className={`text-xl font-bold ${r.ok ? 'text-green-400' : r.score > 30 ? 'text-yellow-400' : 'text-red-400'
                                                }`}>
                                                {r.ok ? '✅' : r.score > 30 ? '⚠️' : '❌'}
                                            </span>
                                        </div>
                                    </div>
                                    {r.issues.length > 0 && (
                                        <div className="mt-2 pl-9">
                                            {r.issues.map((issue, i) => (
                                                <p key={i} className="text-xs text-yellow-400/70">⚠ {issue}</p>
                                            ))}
                                        </div>
                                    )}
                                    {r.ok && r.issues.length === 0 && (
                                        <p className="mt-1 pl-9 text-xs text-green-400/70">✓ {r.platform.blockedNote}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        
            {/* SEO Content - Locale Aware */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                {(() => {
                    const seo = getTranslatedSEO(locale, 'compatibility-checker');
                    if (!seo) return null;
                    return <SEOContent title="" content={seo.seoContent} faqItems={seo.faqItems} />;
                })()}
            </section>
        </div>
    );
}
