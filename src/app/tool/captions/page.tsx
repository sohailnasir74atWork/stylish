'use client';

import { useState } from 'react';
import { captionCategories } from '@/lib/captions';

export default function CaptionsPage() {
    const [activeCategory, setActiveCategory] = useState(captionCategories[0].slug);
    const [searchQuery, setSearchQuery] = useState('');
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 1500);
    };

    const activeCat = captionCategories.find(c => c.slug === activeCategory)!;

    const filteredCaptions = searchQuery.trim()
        ? captionCategories.flatMap(cat =>
            cat.captions
                .filter(c => c.text.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(c => ({ ...c, catName: cat.name, catEmoji: cat.emoji }))
        )
        : activeCat.captions.map(c => ({ ...c, catName: activeCat.name, catEmoji: activeCat.emoji }));

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">💬</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Captions &amp; Status Ideas
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    165+ ready-to-copy captions for Instagram, WhatsApp status, TikTok, Facebook &amp; more. Organized by mood!
                </p>
            </section>

            {/* Search */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="🔍 Search captions..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50"
                />
            </section>

            {/* Category Tabs */}
            {!searchQuery && (
                <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-6">
                    <div className="flex flex-wrap gap-1.5">
                        {captionCategories.map(cat => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className={`px-3 py-1.5 text-xs rounded-full border transition-all ${activeCategory === cat.slug
                                    ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {cat.emoji} {cat.name}
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {/* Category Description */}
            {!searchQuery && (
                <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-6">
                    <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] px-4 py-3 text-center">
                        <p className="text-sm text-gray-400">{activeCat.emoji} {activeCat.description}</p>
                    </div>
                </section>
            )}

            {/* Captions List */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-12">
                {searchQuery && (
                    <p className="text-xs text-gray-500 mb-4">{filteredCaptions.length} results found</p>
                )}
                <div className="space-y-2.5">
                    {filteredCaptions.map((caption, i) => {
                        const id = `${caption.catName}-${i}`;
                        return (
                            <div
                                key={id}
                                onClick={() => handleCopy(`${caption.text} ${caption.emoji}`, id)}
                                className={`group cursor-pointer bg-white/5 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${copied === id
                                    ? 'border-green-500/30 bg-green-500/5'
                                    : 'border-white/10 hover:border-purple-500/30 hover:bg-white/[0.07]'
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-white leading-relaxed">
                                            {caption.emoji} {caption.text}
                                        </p>
                                        {searchQuery && (
                                            <span className="text-[10px] text-gray-600 mt-1 block">{caption.catEmoji} {caption.catName}</span>
                                        )}
                                    </div>
                                    <span className={`shrink-0 text-xs px-3 py-1 rounded-full transition-all ${copied === id
                                        ? 'bg-green-500/20 text-green-300'
                                        : 'bg-white/5 text-gray-500 group-hover:text-purple-300'
                                        }`}>
                                        {copied === id ? '✓ Copied!' : 'Copy'}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
