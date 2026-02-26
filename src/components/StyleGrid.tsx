'use client';

import { useState, useMemo } from 'react';
import StyleCard from './StyleCard';
import type { StyledResult } from '@/lib/unicodeEngine';

interface StyleGridProps {
    results: StyledResult[];
    showSearch?: boolean;
}

const ITEMS_PER_PAGE = 60;

export default function StyleGrid({ results, showSearch = true }: StyleGridProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [allLight, setAllLight] = useState(false);

    const filtered = useMemo(() => {
        if (!searchQuery) return results;
        const q = searchQuery.toLowerCase();
        return results.filter(r =>
            r.styleName.toLowerCase().includes(q) || r.category.toLowerCase().includes(q)
        );
    }, [results, searchQuery]);

    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    if (results.length === 0) {
        return (
            <div className="text-center py-16">
                <span className="text-5xl mb-4 block animate-bounce">✍️</span>
                <h3 className="text-xl text-white mb-2">Type something to get started</h3>
                <p className="text-gray-500">Enter your name above to see 1000+ stylish variations</p>
            </div>
        );
    }

    return (
        <div>
            {/* Search, count & preview toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3 flex-1">
                    {showSearch && (
                        <div className="relative flex-1 max-w-sm">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search styles..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all"
                            />
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {/* Global preview toggle */}
                    <button
                        onClick={() => setAllLight(prev => !prev)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${allLight
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                            }`}
                    >
                        {allLight ? '☀️ Light Preview' : '🌙 Dark Preview'}
                    </button>

                    <p className="text-sm text-gray-500">
                        {filtered.length} style{filtered.length !== 1 ? 's' : ''}
                        {searchQuery && ` for "${searchQuery}"`}
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visible.map((result, i) => (
                    <StyleCard
                        key={result.id}
                        result={result}
                        index={i}
                        defaultLight={allLight}
                    />
                ))}
            </div>

            {/* Load more */}
            {hasMore && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                        className="group px-8 py-3.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 text-white font-medium rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
                    >
                        <span className="group-hover:scale-105 inline-block transition-transform">
                            ✨ Load More ({filtered.length - visibleCount} remaining)
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
}
