'use client';

import { useRecentNames } from '@/hooks/useRecentNames';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

export default function RecentNames() {
    const { recentNames, clearRecentNames } = useRecentNames();
    const { copiedId, copy } = useCopyToClipboard();

    if (recentNames.length === 0) return null;

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <span>🕐</span> Recently Copied
                </h3>
                <button
                    onClick={clearRecentNames}
                    className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
                >
                    Clear all
                </button>
            </div>

            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                {recentNames.map((item, i) => {
                    const id = `recent-${i}`;
                    const isCopied = copiedId === id;
                    return (
                        <button
                            key={`${item.text}-${item.timestamp}`}
                            onClick={() => copy(item.text, id)}
                            className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm transition-all duration-300 ${isCopied
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-black/5 dark:bg-white/5 text-gray-300 border border-black/8 dark:border-white/10 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 hover:border-purple-500/30'
                                }`}
                        >
                            <span className="block truncate max-w-[200px]">{item.text}</span>
                            <span className="block text-[10px] text-gray-500 mt-0.5">
                                {isCopied ? '✓ Copied!' : item.styleName}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
