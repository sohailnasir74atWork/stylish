'use client';

import { useState } from 'react';
import { useFavorites } from '@/hooks/useFavorites';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import Link from 'next/link';

export default function FavoritesPage() {
    const { favorites, removeFavorite, getCollections, getFavoritesByCollection, clearAll, DEFAULT_COLLECTION } = useFavorites();
    const { copiedId, copy } = useCopyToClipboard();
    const [activeCollection, setActiveCollection] = useState(DEFAULT_COLLECTION);
    const collections = getCollections();
    const displayedFavorites = getFavoritesByCollection(activeCollection);

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-12 sm:py-16 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                        💾 My Favorites
                    </span>
                </h1>
                <p className="text-gray-400 text-base max-w-xl mx-auto">
                    Your saved stylish names collection. Click the ♡ on any style card to save it here.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
                {favorites.length === 0 ? (
                    <div className="text-center py-20">
                        <span className="text-6xl block mb-4">♡</span>
                        <h2 className="text-2xl text-white font-bold mb-2">No favorites yet</h2>
                        <p className="text-gray-500 mb-6 max-w-md mx-auto">
                            Go back to the generator and click the ♡ button on any style card to save it to your favorites.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                        >
                            ✨ Start Generating
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Top bar */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                            {/* Collection tabs */}
                            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                                {collections.map(col => (
                                    <button
                                        key={col}
                                        onClick={() => setActiveCollection(col)}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeCollection === col
                                                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                                                : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 hover:text-white border border-black/8 dark:border-white/10'
                                            }`}
                                    >
                                        {col} ({getFavoritesByCollection(col).length})
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-500">{displayedFavorites.length} saved</span>
                                <button
                                    onClick={() => { if (confirm('Clear all favorites?')) clearAll(); }}
                                    className="px-3 py-1.5 text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-all"
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>

                        {/* Favorites grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {displayedFavorites.map(fav => {
                                const isCopied = copiedId === fav.id;
                                return (
                                    <div
                                        key={fav.id}
                                        className="group bg-black/5 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 rounded-2xl border border-black/8 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer card-entrance"
                                        onClick={() => copy(fav.text, fav.id)}
                                    >
                                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
                                        <div className="p-5">
                                            {/* Header */}
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 truncate">
                                                    {fav.styleName}
                                                </span>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); removeFavorite(fav.id); }}
                                                    className="text-gray-600 hover:text-red-400 transition-colors p-1"
                                                    title="Remove from favorites"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Text */}
                                            <div className="bg-white/[0.03] rounded-xl px-3 py-3 min-h-[3rem] flex items-center mb-3">
                                                <p className="text-lg text-white break-all leading-relaxed font-medium w-full" dir="auto">
                                                    {fav.text}
                                                </p>
                                            </div>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] text-gray-600">
                                                    {new Date(fav.savedAt).toLocaleDateString()}
                                                </span>
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-lg transition-all ${isCopied
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-black/5 dark:bg-white/5 text-gray-500 group-hover:bg-purple-500/20 group-hover:text-purple-300'
                                                    }`}>
                                                    {isCopied ? '✓ Copied!' : '📋 Copy'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
