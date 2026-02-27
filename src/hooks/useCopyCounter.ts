'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'stylish_copy_count';
const BASE_COUNT = 2_437_892; // Starting social proof number

export function useCopyCounter() {
    const [count, setCount] = useState(BASE_COUNT);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setCount(BASE_COUNT + parseInt(stored, 10));
        }
    }, []);

    const increment = useCallback(() => {
        const stored = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) + 1;
        localStorage.setItem(STORAGE_KEY, String(stored));
        setCount(BASE_COUNT + stored);
    }, []);

    const formatted = count.toLocaleString();

    return { count, formatted, increment };
}
