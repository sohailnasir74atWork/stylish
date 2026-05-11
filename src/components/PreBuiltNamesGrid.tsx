'use client';

import { useState } from 'react';
import { preBuiltNames, PreBuiltName } from '@/lib/preBuiltNames';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useLocale } from '@/hooks/useLocale';

interface PreBuiltNamesGridProps {
    slug: string;
}

export default function PreBuiltNamesGrid({ slug }: PreBuiltNamesGridProps) {
    const names = preBuiltNames[slug];
    const { copiedId, copy } = useCopyToClipboard();
    const { dictionary: t } = useLocale();
    const [showAll, setShowAll] = useState(false);

    if (!names || names.length === 0) return null;

    const displayNames = showAll ? names : names.slice(0, 8);

    return (
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10">
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-900/10 via-orange-900/5 to-red-900/10 p-5 sm:p-6">
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-600/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-600/5 rounded-full blur-3xl" />

                <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                            {t.prebuiltHeading}
                        </h2>
                        <span className="text-xs text-gray-500">{names.length} {t.prebuiltCountSuffix}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {displayNames.map((n: PreBuiltName, i: number) => {
                            const id = `prebuilt-${slug}-${i}`;
                            const isCopied = copiedId === id;
                            return (
                                <button
                                    key={i}
                                    onClick={() => copy(n.name, id)}
                                    className={`group p-3.5 rounded-xl text-left transition-all border ${isCopied
                                            ? 'bg-green-500/10 border-green-500/30'
                                            : 'bg-white/[0.03] border-white/5 hover:bg-white/8 hover:border-white/15'
                                        }`}
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-white text-sm sm:text-base break-all leading-relaxed flex-1" dir="auto">
                                            {n.name}
                                        </p>
                                        <span className={`text-xs px-2 py-1 rounded-lg shrink-0 transition-all ${isCopied
                                                ? 'bg-green-500/20 text-green-400'
                                                : 'bg-black/5 dark:bg-white/5 text-gray-500 group-hover:bg-purple-500/20 group-hover:text-purple-400'
                                            }`}>
                                            {isCopied ? t.copiedButton : t.copyButton}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-gray-600 mt-1">{n.style}</p>
                                </button>
                            );
                        })}
                    </div>

                    {names.length > 8 && !showAll && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="mt-3 w-full py-2.5 rounded-xl text-xs font-medium text-purple-400 bg-black/5 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 transition-all border border-white/5"
                        >
                            {t.showAllNames.replace('{count}', String(names.length))}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
