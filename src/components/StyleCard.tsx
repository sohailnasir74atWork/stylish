'use client';

import { memo, useState, useEffect } from 'react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useRecentNames } from '@/hooks/useRecentNames';
import { useFavorites } from '@/hooks/useFavorites';
import { useLocale } from '@/hooks/useLocale';
import type { StyledResult } from '@/lib/unicodeEngine';

interface StyleCardProps {
    result: StyledResult;
    index?: number;
    defaultLight?: boolean;
    onCopied?: () => void;
}

function StyleCardInner({ result, index = 0, defaultLight = false, onCopied }: StyleCardProps) {
    const { copiedId, copy } = useCopyToClipboard();
    const { addRecentName } = useRecentNames();
    const { addFavorite, removeFavorite, isFavorited, favorites } = useFavorites();
    const { dictionary: t } = useLocale();
    const isCopied = copiedId === result.id;
    const favorited = isFavorited(result.text);
    const [isLight, setIsLight] = useState(defaultLight);

    // Sync with global toggle
    useEffect(() => {
        setIsLight(defaultLight);
    }, [defaultLight]);

    const handleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (favorited) {
            const fav = favorites.find(f => f.text === result.text);
            if (fav) removeFavorite(fav.id);
        } else {
            addFavorite(result.text, result.styleName);
        }
    };

    const handleCopy = async (e: React.MouseEvent) => {
        // Don't copy if clicking toggles
        if ((e.target as HTMLElement).closest('.preview-toggle')) return;
        if ((e.target as HTMLElement).closest('.fav-toggle')) return;
        const success = await copy(result.text, result.id);
        if (success) {
            addRecentName(result.text, result.styleName);
            onCopied?.();
        }
    };

    // Cap stagger after the first row so cards past the fold don't queue 1.8s of animation
    const animDelay = index < 9 ? index * 30 : 270;

    return (
        <div
            className="group relative cursor-pointer card-entrance"
            style={{ animationDelay: `${animDelay}ms` }}
            onClick={handleCopy}
            data-style-card=""
            data-dark-preview={isLight ? undefined : ""}
        >
            {/* Card body */}
            <div className={`rounded-2xl border transition-all duration-300 overflow-hidden hover:-translate-y-0.5 ${isLight
                ? 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
                : 'bg-[rgb(15,15,35)] border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10'
                }`}>
                {/* Top accent line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent group-hover:via-purple-500/80 transition-all duration-500" />

                <div className="p-4 sm:p-5">
                    {/* Header row: style name + preview toggle + category */}
                    <div className="flex items-center justify-between mb-3 gap-2">
                        <span className={`text-[10px] font-semibold uppercase tracking-widest truncate ${isLight ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                            {result.styleName}
                        </span>

                        <div className="flex items-center gap-1.5 shrink-0">
                            {/* Dark/Light toggle */}
                            <button
                                className={`preview-toggle p-1 rounded-md text-[10px] transition-all duration-200 ${isLight
                                    ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    : 'bg-white/8 text-gray-500 hover:bg-white/15 hover:text-gray-300'
                                    }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsLight(!isLight);
                                }}
                                title={isLight ? 'Switch to dark preview' : 'Switch to light preview'}
                            >
                                {isLight ? '🌙' : '☀️'}
                            </button>

                            {/* Favorite toggle */}
                            <button
                                className={`fav-toggle p-1 rounded-md text-sm transition-all duration-200 ${favorited
                                    ? 'text-pink-500 scale-110'
                                    : isLight
                                        ? 'text-gray-300 hover:text-pink-400'
                                        : 'text-gray-600 hover:text-pink-400'
                                    }`}
                                onClick={handleFavorite}
                                title={favorited ? 'Remove from favorites' : 'Add to favorites'}
                            >
                                {favorited ? '♥' : '♡'}
                            </button>

                            {/* Category badge */}
                            <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${isLight
                                ? 'bg-purple-100 text-purple-600'
                                : 'bg-purple-500/15 text-purple-400'
                                }`}>
                                {result.category}
                            </span>
                        </div>
                    </div>

                    {/* Styled text display */}
                    <div className={`min-h-[3rem] flex items-center rounded-xl px-3 py-3 transition-all duration-300 ${isLight
                        ? 'bg-gray-50'
                        : 'bg-white/[0.03]'
                        }`}>
                        <p
                            className={`text-base sm:text-lg break-all leading-relaxed font-medium w-full ${isLight ? 'text-gray-900' : 'text-white'
                                }`}
                            dir="auto"
                        >
                            {result.text}
                        </p>
                    </div>

                    {/* Bottom action row */}
                    <div className="flex items-center justify-between mt-3">
                        <span className={`text-[10px] transition-all duration-300 ${isLight ? 'text-gray-400' : 'text-gray-600'
                            } group-hover:${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                            {t.clickToCopy}
                        </span>

                        {/* Copy button */}
                        <button
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${isCopied
                                ? isLight
                                    ? 'bg-green-100 text-green-600 scale-105'
                                    : 'bg-green-500/20 text-green-400 scale-105'
                                : isLight
                                    ? 'bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600'
                                    : 'bg-white/5 text-gray-500 group-hover:bg-purple-500/20 group-hover:text-purple-300'
                                }`}
                        >
                            {isCopied ? (
                                <>
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {t.copiedButton.replace('✓ ', '')}
                                </>
                            ) : (
                                <>
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    {t.copyButton}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const StyleCard = memo(StyleCardInner, (prev, next) =>
    prev.result.id === next.result.id &&
    prev.result.text === next.result.text &&
    prev.defaultLight === next.defaultLight &&
    prev.index === next.index &&
    prev.onCopied === next.onCopied
);
StyleCard.displayName = 'StyleCard';

export default StyleCard;
