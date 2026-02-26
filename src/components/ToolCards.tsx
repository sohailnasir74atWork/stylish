'use client';

import Link from 'next/link';

const FEATURE_CARDS = [
    { emoji: '🔥', name: 'Name Ideas', desc: '800+ profile names', href: '/tool/name-ideas', gradient: 'from-orange-600/30 to-red-600/30', border: 'border-orange-500/30', glow: 'hover:shadow-orange-500/20' },
    { emoji: '🎨', name: 'Style Builder', desc: 'Build custom names', href: '/tool/style-builder', gradient: 'from-purple-600/30 to-violet-600/30', border: 'border-purple-500/30', glow: 'hover:shadow-purple-500/20' },
    { emoji: '📝', name: 'Bio Generator', desc: 'Social media bios', href: '/tool/bio-generator', gradient: 'from-green-600/30 to-emerald-600/30', border: 'border-green-500/30', glow: 'hover:shadow-green-500/20' },
    { emoji: '🖼️', name: 'Share Card', desc: 'Download as image', href: '/tool/share-card', gradient: 'from-orange-600/30 to-amber-600/30', border: 'border-orange-500/30', glow: 'hover:shadow-orange-500/20' },
    { emoji: '🧪', name: 'Compatibility', desc: '15 platform check', href: '/tool/compatibility-checker', gradient: 'from-blue-600/30 to-indigo-600/30', border: 'border-blue-500/30', glow: 'hover:shadow-blue-500/20' },
    { emoji: '📱', name: 'Live Preview', desc: 'See on real apps', href: '/tool/live-preview', gradient: 'from-pink-600/30 to-rose-600/30', border: 'border-pink-500/30', glow: 'hover:shadow-pink-500/20' },
    { emoji: '🔤', name: 'ASCII Art', desc: 'Block letter text', href: '/tool/ascii-art', gradient: 'from-cyan-600/30 to-blue-600/30', border: 'border-cyan-500/30', glow: 'hover:shadow-cyan-500/20' },
    { emoji: '🫥', name: 'Invisible Text', desc: 'Blank names & text', href: '/tool/invisible-text', gradient: 'from-gray-600/30 to-slate-600/30', border: 'border-gray-500/30', glow: 'hover:shadow-gray-500/20' },
    { emoji: '🔄', name: 'Text Repeater', desc: 'Repeat text 5000x', href: '/tool/text-repeater', gradient: 'from-teal-600/30 to-emerald-600/30', border: 'border-teal-500/30', glow: 'hover:shadow-teal-500/20' },
    { emoji: '👾', name: 'Zalgo Text', desc: 'Creepy glitch text', href: '/tool/zalgo-text', gradient: 'from-red-600/30 to-rose-600/30', border: 'border-red-500/30', glow: 'hover:shadow-red-500/20' },
    { emoji: '⌨️', name: 'Symbols', desc: '400+ special chars', href: '/tool/symbol-keyboard', gradient: 'from-amber-600/30 to-yellow-600/30', border: 'border-amber-500/30', glow: 'hover:shadow-amber-500/20' },
    { emoji: '🙃', name: 'Mirror Text', desc: 'Flip & mirror text', href: '/tool/mirror-text', gradient: 'from-violet-600/30 to-purple-600/30', border: 'border-violet-500/30', glow: 'hover:shadow-violet-500/20' },
    { emoji: '💬', name: 'Captions', desc: 'Status & bio ideas', href: '/tool/captions', gradient: 'from-fuchsia-600/30 to-pink-600/30', border: 'border-fuchsia-500/30', glow: 'hover:shadow-fuchsia-500/20' },
    { emoji: '📏', name: 'Char Counter', desc: 'Platform limits', href: '/tool/character-counter', gradient: 'from-lime-600/30 to-green-600/30', border: 'border-lime-500/30', glow: 'hover:shadow-lime-500/20' },
];

export default function ToolCards() {
    return (
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10">
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 via-pink-900/10 to-blue-900/20 p-5 sm:p-6">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-600/10 rounded-full blur-3xl" />

                <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-bold text-white">✨ Unique Tools</h2>
                        <Link href="/favorites" className="text-xs text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1">
                            <span className="text-sm">♥</span> My Favorites →
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                        {FEATURE_CARDS.map(f => (
                            <Link
                                key={f.href}
                                href={f.href}
                                className={`group p-2 sm:p-2.5 rounded-xl bg-gradient-to-br ${f.gradient} border ${f.border} text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${f.glow}`}
                            >
                                <span className="text-lg sm:text-xl block mb-0.5 group-hover:scale-110 transition-transform duration-300">{f.emoji}</span>
                                <span className="text-[9px] sm:text-[10px] text-white font-semibold block leading-tight">{f.name}</span>
                                <span className="text-[8px] text-gray-400 hidden sm:block leading-tight">{f.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
