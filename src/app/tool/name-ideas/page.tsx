'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trendingCategories } from '@/lib/trendingNames';

export default function NameIdeasPage() {
    const [activeCat, setActiveCat] = useState('gaming');
    const activeCatData = trendingCategories.find(c => c.id === activeCat);

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-14 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                        🔥 Top Profile Name Ideas
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    200+ trending name ideas for gaming, social media & more. Click any name to generate 1000+ stylish versions!
                </p>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                {/* Category tabs — horizontal scroll */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
                    {trendingCategories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCat(cat.id)}
                            className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all border ${activeCat === cat.id
                                ? 'bg-orange-500/20 text-orange-400 border-orange-500/30 shadow-lg shadow-orange-500/10'
                                : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat.emoji} {cat.label}
                        </button>
                    ))}
                </div>

                {/* Active category header */}
                {activeCatData && (
                    <div className="mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                            {activeCatData.emoji} {activeCatData.label} Names
                        </h2>
                        <p className="text-xs text-gray-500">
                            {activeCatData.names.length} name ideas • Click any name to generate stylish versions
                        </p>
                    </div>
                )}

                {/* Names grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {activeCatData?.names.map((name, i) => (
                        <Link
                            key={`${activeCat}-${i}`}
                            href={`/?name=${encodeURIComponent(name)}`}
                            className="group p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/5 text-center"
                        >
                            <p className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                                {name}
                            </p>
                            <p className="text-[10px] text-gray-600 mt-1 group-hover:text-purple-400/60">
                                Click to stylize →
                            </p>
                        </Link>
                    ))}
                </div>

                {/* All Categories Quick Access */}
                <div className="mt-12">
                    <h3 className="text-lg font-bold text-white mb-4">📂 All Categories</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {trendingCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => { setActiveCat(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                className={`p-4 rounded-xl border text-center transition-all hover:-translate-y-0.5 ${activeCat === cat.id
                                    ? 'bg-orange-500/10 border-orange-500/20'
                                    : 'bg-white/[0.02] border-white/5 hover:bg-white/5'
                                    }`}
                            >
                                <span className="text-2xl block mb-1">{cat.emoji}</span>
                                <span className="text-sm text-white font-medium block">{cat.label}</span>
                                <span className="text-[10px] text-gray-500">{cat.names.length} names</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
