'use client';

import { useState, useEffect, useCallback } from 'react';

export interface FavoriteItem {
    id: string;
    text: string;
    styleName: string;
    collection: string;
    savedAt: number;
}

const STORAGE_KEY = 'stylish-names-favorites';
const DEFAULT_COLLECTION = 'All Favorites';

function getFavorites(): FavoriteItem[] {
    if (typeof window === 'undefined') return [];
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveFavorites(items: FavoriteItem[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function useFavorites() {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    useEffect(() => {
        setFavorites(getFavorites());
    }, []);

    const addFavorite = useCallback((text: string, styleName: string, collection = DEFAULT_COLLECTION) => {
        setFavorites(prev => {
            // Don't add duplicates
            if (prev.some(f => f.text === text && f.collection === collection)) return prev;
            const item: FavoriteItem = {
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                text,
                styleName,
                collection,
                savedAt: Date.now(),
            };
            const updated = [item, ...prev];
            saveFavorites(updated);
            return updated;
        });
    }, []);

    const removeFavorite = useCallback((id: string) => {
        setFavorites(prev => {
            const updated = prev.filter(f => f.id !== id);
            saveFavorites(updated);
            return updated;
        });
    }, []);

    const isFavorited = useCallback((text: string) => {
        return favorites.some(f => f.text === text);
    }, [favorites]);

    const getCollections = useCallback(() => {
        const cols = new Set(favorites.map(f => f.collection));
        return [DEFAULT_COLLECTION, ...Array.from(cols).filter(c => c !== DEFAULT_COLLECTION)];
    }, [favorites]);

    const getFavoritesByCollection = useCallback((collection: string) => {
        if (collection === DEFAULT_COLLECTION) return favorites;
        return favorites.filter(f => f.collection === collection);
    }, [favorites]);

    const clearAll = useCallback(() => {
        setFavorites([]);
        saveFavorites([]);
    }, []);

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorited,
        getCollections,
        getFavoritesByCollection,
        clearAll,
        DEFAULT_COLLECTION,
    };
}
