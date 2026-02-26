'use client';

import { useState, useEffect, useCallback } from 'react';
import { MAX_RECENT_NAMES } from '@/lib/constants';

interface RecentName {
    text: string;
    styleName: string;
    timestamp: number;
}

const STORAGE_KEY = 'stylish-names-recent';

export function useRecentNames() {
    const [recentNames, setRecentNames] = useState<RecentName[]>([]);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setRecentNames(JSON.parse(stored));
            }
        } catch {
            // ignore
        }
    }, []);

    const addRecentName = useCallback((text: string, styleName: string) => {
        setRecentNames(prev => {
            const updated = [
                { text, styleName, timestamp: Date.now() },
                ...prev.filter(n => n.text !== text),
            ].slice(0, MAX_RECENT_NAMES);
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            } catch {
                // ignore
            }
            return updated;
        });
    }, []);

    const clearRecentNames = useCallback(() => {
        setRecentNames([]);
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            // ignore
        }
    }, []);

    return { recentNames, addRecentName, clearRecentNames };
}
