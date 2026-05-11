'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { defaultLocale } from '@/lib/i18n';

const FEATURE_CARDS = [
    { emoji: '🔥', name: 'Name Ideas', desc: '800+ profile names', href: '/tool/name-ideas', gradient: 'from-orange-400 to-red-400 dark:from-orange-600/60 dark:to-red-600/60', border: 'border-white/30 dark:border-orange-500/30' },
    { emoji: '🎨', name: 'Style Builder', desc: 'Build custom names', href: '/tool/style-builder', gradient: 'from-purple-500 to-violet-500 dark:from-purple-600/60 dark:to-violet-600/60', border: 'border-white/30 dark:border-purple-500/30' },
    { emoji: '📝', name: 'Bio Generator', desc: 'Social media bios', href: '/tool/bio-generator', gradient: 'from-emerald-400 to-green-400 dark:from-green-600/60 dark:to-emerald-600/60', border: 'border-white/30 dark:border-green-500/30' },
    { emoji: '🖼️', name: 'Share Card', desc: 'Download as image', href: '/tool/share-card', gradient: 'from-amber-400 to-orange-400 dark:from-orange-600/60 dark:to-amber-600/60', border: 'border-white/30 dark:border-orange-500/30' },
    { emoji: '🧪', name: 'Compatibility', desc: '15 platform check', href: '/tool/compatibility-checker', gradient: 'from-blue-400 to-indigo-400 dark:from-blue-600/60 dark:to-indigo-600/60', border: 'border-white/30 dark:border-blue-500/30' },
    { emoji: '📱', name: 'Live Preview', desc: 'See on real apps', href: '/tool/live-preview', gradient: 'from-pink-400 to-rose-400 dark:from-pink-600/60 dark:to-rose-600/60', border: 'border-white/30 dark:border-pink-500/30' },
    { emoji: '🔤', name: 'ASCII Art', desc: 'Block letter text', href: '/tool/ascii-art', gradient: 'from-cyan-400 to-blue-400 dark:from-cyan-600/60 dark:to-blue-600/60', border: 'border-white/30 dark:border-cyan-500/30' },
    { emoji: '🫥', name: 'Invisible Text', desc: 'Blank names & text', href: '/tool/invisible-text', gradient: 'from-slate-400 to-gray-500 dark:from-gray-600/60 dark:to-slate-600/60', border: 'border-white/30 dark:border-gray-500/30' },
    { emoji: '🔄', name: 'Text Repeater', desc: 'Repeat text 5000x', href: '/tool/text-repeater', gradient: 'from-teal-400 to-emerald-400 dark:from-teal-600/60 dark:to-emerald-600/60', border: 'border-white/30 dark:border-teal-500/30' },
    { emoji: '👾', name: 'Zalgo Text', desc: 'Creepy glitch text', href: '/tool/zalgo-text', gradient: 'from-red-400 to-rose-400 dark:from-red-600/60 dark:to-rose-600/60', border: 'border-white/30 dark:border-red-500/30' },
    { emoji: '⌨️', name: 'Symbols', desc: '400+ special chars', href: '/tool/symbol-keyboard', gradient: 'from-amber-400 to-yellow-400 dark:from-amber-600/60 dark:to-yellow-600/60', border: 'border-white/30 dark:border-amber-500/30' },
    { emoji: '🙃', name: 'Mirror Text', desc: 'Flip & mirror text', href: '/tool/mirror-text', gradient: 'from-violet-400 to-purple-400 dark:from-violet-600/60 dark:to-purple-600/60', border: 'border-white/30 dark:border-violet-500/30' },
    { emoji: '💬', name: 'Captions', desc: 'Status & bio ideas', href: '/tool/captions', gradient: 'from-fuchsia-400 to-pink-400 dark:from-fuchsia-600/60 dark:to-pink-600/60', border: 'border-white/30 dark:border-fuchsia-500/30' },
    { emoji: '📏', name: 'Char Counter', desc: 'Platform limits', href: '/tool/character-counter', gradient: 'from-lime-400 to-green-400 dark:from-lime-600/60 dark:to-green-600/60', border: 'border-white/30 dark:border-lime-500/30' },
];

export default function ToolCards() {
    const { locale, dictionary: t } = useLocale();
    const lp = (href: string) => (locale === defaultLocale ? href : `/${locale}${href}`);
    return (
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10">
            <div className="relative overflow-hidden rounded-2xl border p-5 sm:p-6 bg-white/80 dark:bg-[rgba(10,10,30,0.7)] border-purple-200 dark:border-purple-500/20 shadow-lg shadow-purple-100 dark:shadow-none">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-600/10 rounded-full blur-3xl" />

                <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{t.uniqueToolsHeading}</h2>
                        <Link href={lp('/favorites')} className="text-xs text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1">
                            <span className="text-sm">♥</span> {t.favoritesLink.replace('♥ ', '')}
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                        {FEATURE_CARDS.map(f => (
                            <Link
                                key={f.href}
                                href={lp(f.href)}
                                className={`group p-2 sm:p-2.5 rounded-xl bg-gradient-to-br ${f.gradient} border ${f.border} text-center transition-all duration-300 hover:-translate-y-1 shadow-md dark:shadow-none hover:shadow-xl`}
                            >
                                <span className="text-lg sm:text-xl block mb-0.5 group-hover:scale-110 transition-transform duration-300">{f.emoji}</span>
                                <span className="text-[9px] sm:text-[10px] text-white font-semibold block leading-tight drop-shadow-sm">{f.name}</span>
                                <span className="text-[8px] text-white/90 dark:text-gray-400 hidden sm:block leading-tight drop-shadow-sm">{f.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
