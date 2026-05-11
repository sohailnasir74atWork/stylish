'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    resolvedTheme: 'light' | 'dark';
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'system',
    resolvedTheme: 'dark',
    setTheme: () => { },
});

function getSystemPreference(): 'light' | 'dark' {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    return 'system';
}

function readResolvedFromDOM(): 'light' | 'dark' {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

function applyTheme(resolved: 'light' | 'dark') {
    const el = document.documentElement;
    el.classList.remove('light', 'dark');
    el.classList.add(resolved);
    el.setAttribute('data-theme', resolved);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(readInitialTheme);
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(readResolvedFromDOM);

    // Resolve and apply whenever theme preference changes
    useEffect(() => {
        const resolved = theme === 'system' ? getSystemPreference() : theme;
        setResolvedTheme(resolved);
        applyTheme(resolved);

        // Watch for OS-level preference changes when set to 'system'
        if (theme === 'system') {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            const handler = () => {
                const newResolved = mq.matches ? 'dark' : 'light';
                setResolvedTheme(newResolved);
                applyTheme(newResolved);
            };
            mq.addEventListener('change', handler);
            return () => mq.removeEventListener('change', handler);
        }
    }, [theme]);

    const setTheme = (t: Theme) => {
        setThemeState(t);
        localStorage.setItem('theme', t);
    };

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
