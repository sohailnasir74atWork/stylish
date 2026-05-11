'use client';

import { useState } from 'react';
import StylePicker from '@/components/StylePicker';
import { DEFAULT_INPUT } from '@/lib/constants';
import SEOContent from '@/components/SEOContent';
import { useLocale } from '@/lib/useLocale';
import { getTranslatedSEO } from '@/lib/seoTranslations';
import { getTranslatedUI } from '@/lib/uiTranslations';

interface MockupTemplate {
    id: string;
    name: string;
    emoji: string;
    bg: string;
    textColor: string;
    secondaryColor: string;
    accentColor: string;
}

const mockups: MockupTemplate[] = [
    { id: 'instagram', name: 'Instagram Profile', emoji: '📸', bg: 'bg-white', textColor: 'text-gray-900', secondaryColor: 'text-gray-500', accentColor: 'text-blue-500' },
    { id: 'pubg', name: 'PUBG Lobby', emoji: '🎯', bg: 'bg-gradient-to-b from-gray-900 to-gray-800', textColor: 'text-yellow-400', secondaryColor: 'text-gray-400', accentColor: 'text-yellow-500' },
    { id: 'discord', name: 'Discord Chat', emoji: '🎮', bg: 'bg-[#36393f]', textColor: 'text-white', secondaryColor: 'text-[#72767d]', accentColor: 'text-[#5865F2]' },
    { id: 'whatsapp', name: 'WhatsApp Chat', emoji: '💬', bg: 'bg-[#0b141a]', textColor: 'text-white', secondaryColor: 'text-[#8696a0]', accentColor: 'text-[#25d366]' },
    { id: 'tiktok', name: 'TikTok Profile', emoji: '🎵', bg: 'bg-black', textColor: 'text-white', secondaryColor: 'text-gray-400', accentColor: 'text-[#ff0050]' },
    { id: 'freefire', name: 'Free Fire Lobby', emoji: '🔥', bg: 'bg-gradient-to-b from-orange-950 to-gray-900', textColor: 'text-orange-300', secondaryColor: 'text-gray-400', accentColor: 'text-orange-500' },
];

export default function LivePreviewPage() {
    const locale = useLocale();
    const toolUI = getTranslatedUI(locale, 'live-preview');
    const [inputText, setInputText] = useState(DEFAULT_INPUT);
    const [styledText, setStyledText] = useState(DEFAULT_INPUT);
    const [activeMockup, setActiveMockup] = useState(mockups[0]);

    return (
        <div className="min-h-screen">
            <section className="relative py-10 sm:py-14 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                        📱 {toolUI?.name || 'Live Preview'} Mockup
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    See how your stylish name looks on real platform interfaces!
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
                                maxLength={30}
                                className="w-full px-5 py-3.5 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl text-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                                placeholder="Enter your name..."
                            />
                        </div>

                        <StylePicker
                            inputText={inputText}
                            styledText={styledText}
                            onStyled={setStyledText}
                            compact
                        />

                        {/* Platform picker */}
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Platform</p>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                {mockups.map(m => (
                                    <button
                                        key={m.id}
                                        onClick={() => setActiveMockup(m)}
                                        className={`p-2.5 rounded-xl text-center transition-all border ${activeMockup.id === m.id
                                            ? 'bg-purple-600/20 border-purple-500/50'
                                            : 'bg-white/[0.03] border-black/8 dark:border-white/10 hover:bg-white/8'
                                            }`}
                                    >
                                        <span className="text-xl block">{m.emoji}</span>
                                        <span className="text-[9px] text-gray-400 block mt-0.5">{m.name.split(' ')[0]}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Mockup Preview */}
                    <div className="lg:sticky lg:top-[120px] lg:self-start">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Preview</p>
                        <div className="max-w-sm mx-auto">
                            <div className="rounded-[2rem] border-4 border-gray-700 overflow-hidden shadow-2xl shadow-black/50">
                                {/* Status bar */}
                                <div className={`${activeMockup.bg} flex items-center justify-between px-6 py-2`}>
                                    <span className={`text-xs ${activeMockup.secondaryColor}`}>9:41</span>
                                    <div className="flex gap-1">
                                        <span className={`text-xs ${activeMockup.secondaryColor}`}>📶</span>
                                        <span className={`text-xs ${activeMockup.secondaryColor}`}>🔋</span>
                                    </div>
                                </div>

                                <div className={`${activeMockup.bg} min-h-[400px] p-6`}>
                                    {activeMockup.id === 'instagram' && (
                                        <div className="text-center">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-[3px] mx-auto mb-3">
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl">👤</div>
                                            </div>
                                            <p className={`font-bold text-lg ${activeMockup.textColor} break-all`} dir="auto">{styledText}</p>
                                            <p className={`text-sm ${activeMockup.secondaryColor} mt-1`}>@username</p>
                                            <div className="flex justify-center gap-8 mt-4 mb-4">
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>142</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Posts</p></div>
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>14.2K</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Followers</p></div>
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>892</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Following</p></div>
                                            </div>
                                            <button className={`w-full py-2 rounded-lg text-sm font-semibold ${activeMockup.accentColor} bg-blue-50`}>Follow</button>
                                        </div>
                                    )}
                                    {activeMockup.id === 'pubg' && (
                                        <div className="text-center pt-8">
                                            <div className="w-16 h-16 rounded-full bg-yellow-600/20 border-2 border-yellow-500/40 mx-auto mb-4 flex items-center justify-center text-3xl">🎖️</div>
                                            <p className={`font-bold text-xl ${activeMockup.textColor} break-all`} dir="auto">{styledText}</p>
                                            <p className={`text-sm ${activeMockup.secondaryColor} mt-2`}>Level 65 • Diamond</p>
                                            <div className="flex justify-center gap-6 mt-6">
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>3.2</p><p className={`text-xs ${activeMockup.secondaryColor}`}>K/D</p></div>
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>234</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Wins</p></div>
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>Top 1%</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Rank</p></div>
                                            </div>
                                        </div>
                                    )}
                                    {activeMockup.id === 'discord' && (
                                        <div>
                                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-black/8 dark:border-white/10">
                                                <span className="text-lg">#</span>
                                                <span className={`text-sm font-medium ${activeMockup.secondaryColor}`}>general</span>
                                            </div>
                                            <div className="flex gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm shrink-0">🎮</div>
                                                <div>
                                                    <p className={`text-sm font-medium ${activeMockup.accentColor} break-all`} dir="auto">{styledText}</p>
                                                    <p className={`text-sm ${activeMockup.textColor} mt-1`}>Hey everyone! Check out my new name 🔥</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-sm shrink-0">👤</div>
                                                <div>
                                                    <p className="text-sm font-medium text-green-400">Friend</p>
                                                    <p className={`text-sm ${activeMockup.textColor} mt-1`}>That looks awesome! 🤩</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeMockup.id === 'whatsapp' && (
                                        <div>
                                            <div className="bg-[#202c33] -m-6 mb-4 p-4 flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-lg">👤</div>
                                                <div>
                                                    <p className={`text-sm font-medium ${activeMockup.textColor} break-all`} dir="auto">{styledText}</p>
                                                    <p className={`text-xs ${activeMockup.secondaryColor}`}>online</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2 pt-2">
                                                <div className="bg-[#005c4b] rounded-lg px-3 py-2 max-w-[80%] ml-auto"><p className="text-sm text-gray-900 dark:text-white">Hey! How are you? 👋</p></div>
                                                <div className="bg-[#202c33] rounded-lg px-3 py-2 max-w-[80%]"><p className="text-sm text-gray-900 dark:text-white">I&apos;m great! Check my new name 🔥</p></div>
                                            </div>
                                        </div>
                                    )}
                                    {activeMockup.id === 'tiktok' && (
                                        <div className="text-center pt-8">
                                            <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-gray-700 mx-auto mb-3 flex items-center justify-center text-3xl">👤</div>
                                            <p className={`font-bold text-lg ${activeMockup.textColor} break-all`} dir="auto">{styledText}</p>
                                            <p className={`text-sm ${activeMockup.secondaryColor} mt-1`}>@username · Creator</p>
                                            <div className="flex justify-center gap-6 mt-4">
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>1.2M</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Likes</p></div>
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>45K</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Followers</p></div>
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>521</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Following</p></div>
                                            </div>
                                            <button className="mt-4 px-8 py-2 rounded-lg text-sm font-semibold bg-[#fe2c55] text-gray-900 dark:text-white">Follow</button>
                                        </div>
                                    )}
                                    {activeMockup.id === 'freefire' && (
                                        <div className="text-center pt-8">
                                            <div className="w-16 h-16 rounded-full bg-orange-800/30 border-2 border-orange-500/50 mx-auto mb-4 flex items-center justify-center text-3xl">🔥</div>
                                            <p className={`font-bold text-xl ${activeMockup.textColor} break-all`} dir="auto">{styledText}</p>
                                            <p className={`text-sm ${activeMockup.secondaryColor} mt-2`}>Heroic Rank • Level 72</p>
                                            <div className="flex justify-center gap-6 mt-6">
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>4.1</p><p className={`text-xs ${activeMockup.secondaryColor}`}>K/D</p></div>
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>89%</p><p className={`text-xs ${activeMockup.secondaryColor}`}>HS Rate</p></div>
                                                <div className="text-center"><p className={`font-bold ${activeMockup.textColor}`}>512</p><p className={`text-xs ${activeMockup.secondaryColor}`}>Wins</p></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* SEO Content - Locale Aware */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                {(() => {
                    const seo = getTranslatedSEO(locale, 'live-preview');
                    if (!seo) return null;
                    return <SEOContent title="" content={seo.seoContent} faqItems={seo.faqItems} />;
                })()}
            </section>
        </div>
    );
}
