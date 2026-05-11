'use client';

import Link from 'next/link';
import { useRef, useState, useEffect, useCallback } from 'react';
import { NAV_LINKS } from '@/lib/constants';

interface CategoryTabsProps {
    activeSlug?: string;
}

export default function CategoryTabs({ activeSlug }: CategoryTabsProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const dirRef = useRef<'right' | 'left'>('right');

    const checkScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    }, []);

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', checkScroll, { passive: true });
        window.addEventListener('resize', checkScroll);
        return () => {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, [checkScroll]);

    // Auto-slide every 2s, reverse direction at edges
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            const el = scrollRef.current;
            if (!el) return;
            const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
            const atStart = el.scrollLeft <= 4;
            if (atEnd) dirRef.current = 'left';
            if (atStart) dirRef.current = 'right';
            el.scrollBy({ left: dirRef.current === 'right' ? 120 : -120, behavior: 'smooth' });
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const scroll = (dir: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;
        const amount = el.clientWidth * 0.6;
        el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    };

    return (
        <div className="relative group/slider">

            {/* Scrollable tabs */}
            <div
                ref={scrollRef}
                className="overflow-x-auto scrollbar-hide px-1"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => { setTimeout(() => setIsPaused(false), 4000); }}
            >
                <div className="flex gap-2 pb-2 min-w-min">
                    <Link
                        href="/"
                        className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${!activeSlug
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                            : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 hover:text-white border border-black/8 dark:border-white/10'
                            }`}
                    >
                        ⚡ All Styles
                    </Link>
                    {NAV_LINKS.map(link => {
                        const slug = link.href.replace('/', '');
                        const isActive = activeSlug === slug;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 hover:text-white border border-black/8 dark:border-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
