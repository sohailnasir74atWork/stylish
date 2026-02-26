'use client';

import { useState, useMemo } from 'react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { DEFAULT_INPUT } from '@/lib/constants';

// ASCII art font definitions (simplified block letters)
const ASCII_FONTS: Record<string, Record<string, string[]>> = {
    block: {
        A: ['  █  ', ' █ █ ', '█████', '█   █', '█   █'],
        B: ['████ ', '█   █', '████ ', '█   █', '████ '],
        C: [' ████', '█    ', '█    ', '█    ', ' ████'],
        D: ['████ ', '█   █', '█   █', '█   █', '████ '],
        E: ['█████', '█    ', '████ ', '█    ', '█████'],
        F: ['█████', '█    ', '████ ', '█    ', '█    '],
        G: [' ████', '█    ', '█  ██', '█   █', ' ████'],
        H: ['█   █', '█   █', '█████', '█   █', '█   █'],
        I: ['█████', '  █  ', '  █  ', '  █  ', '█████'],
        J: ['█████', '   █ ', '   █ ', '█  █ ', ' ██  '],
        K: ['█  █ ', '█ █  ', '██   ', '█ █  ', '█  █ '],
        L: ['█    ', '█    ', '█    ', '█    ', '█████'],
        M: ['█   █', '██ ██', '█ █ █', '█   █', '█   █'],
        N: ['█   █', '██  █', '█ █ █', '█  ██', '█   █'],
        O: [' ███ ', '█   █', '█   █', '█   █', ' ███ '],
        P: ['████ ', '█   █', '████ ', '█    ', '█    '],
        Q: [' ███ ', '█   █', '█ █ █', '█  █ ', ' ██ █'],
        R: ['████ ', '█   █', '████ ', '█  █ ', '█   █'],
        S: [' ████', '█    ', ' ███ ', '    █', '████ '],
        T: ['█████', '  █  ', '  █  ', '  █  ', '  █  '],
        U: ['█   █', '█   █', '█   █', '█   █', ' ███ '],
        V: ['█   █', '█   █', '█   █', ' █ █ ', '  █  '],
        W: ['█   █', '█   █', '█ █ █', '██ ██', '█   █'],
        X: ['█   █', ' █ █ ', '  █  ', ' █ █ ', '█   █'],
        Y: ['█   █', ' █ █ ', '  █  ', '  █  ', '  █  '],
        Z: ['█████', '   █ ', '  █  ', ' █   ', '█████'],
        ' ': ['     ', '     ', '     ', '     ', '     '],
        '0': [' ███ ', '█  ██', '█ █ █', '██  █', ' ███ '],
        '1': [' █   ', '██   ', ' █   ', ' █   ', '████ '],
        '2': [' ███ ', '█   █', '  ██ ', ' █   ', '█████'],
        '3': ['████ ', '    █', ' ███ ', '    █', '████ '],
        '4': ['█  █ ', '█  █ ', '█████', '   █ ', '   █ '],
        '5': ['█████', '█    ', '████ ', '    █', '████ '],
        '6': [' ███ ', '█    ', '████ ', '█   █', ' ███ '],
        '7': ['█████', '   █ ', '  █  ', ' █   ', '█    '],
        '8': [' ███ ', '█   █', ' ███ ', '█   █', ' ███ '],
        '9': [' ███ ', '█   █', ' ████', '    █', ' ███ '],
    },
    shadow: {
        A: ['  ▄  ', ' █▀█ ', '█▀▀█ ', '█  █ ', '▀  ▀ '],
        B: ['▄▄▄  ', '█▀▀█ ', '█▀▀▄ ', '█▄▄█ ', '     '],
        C: [' ▄▄▄ ', '█    ', '█    ', ' ▀▀▀ ', '     '],
        D: ['▄▄▄  ', '█  █ ', '█  █ ', '▀▀▀  ', '     '],
        E: ['▄▄▄▄ ', '█▀▀  ', '█▀▀  ', '▀▀▀▀ ', '     '],
        F: ['▄▄▄▄ ', '█▀▀  ', '█    ', '▀    ', '     '],
        G: [' ▄▄▄ ', '█    ', '█ ▀█ ', ' ▀▀▀ ', '     '],
        H: ['▄  ▄ ', '█▀▀█ ', '█  █ ', '▀  ▀ ', '     '],
        I: ['▄▄▄  ', ' █   ', ' █   ', '▀▀▀  ', '     '],
        J: [' ▄▄▄ ', '  █  ', '  █  ', '▀▀   ', '     '],
        K: ['▄  ▄ ', '█▀█  ', '█▀▄  ', '▀  ▀ ', '     '],
        L: ['▄    ', '█    ', '█    ', '▀▀▀▀ ', '     '],
        M: ['▄   ▄', '█▀▄▀█', '█ ▀ █', '▀   ▀', '     '],
        N: ['▄   ▄', '█▀▄ █', '█ ▀▄█', '▀   ▀', '     '],
        O: [' ▄▄▄ ', '█   █', '█   █', ' ▀▀▀ ', '     '],
        P: ['▄▄▄  ', '█  █ ', '█▀▀  ', '▀    ', '     '],
        Q: [' ▄▄▄ ', '█   █', '█ ▄ █', ' ▀▀▄ ', '     '],
        R: ['▄▄▄  ', '█  █ ', '█▀▀▄ ', '▀  ▀ ', '     '],
        S: [' ▄▄▄ ', '█▀▀  ', ' ▀▀▄ ', '▀▀▀  ', '     '],
        T: ['▄▄▄▄▄', '  █  ', '  █  ', '  ▀  ', '     '],
        U: ['▄   ▄', '█   █', '█   █', ' ▀▀▀ ', '     '],
        V: ['▄   ▄', '█   █', ' █ █ ', '  ▀  ', '     '],
        W: ['▄   ▄', '█   █', '█ ▄ █', ' ▀ ▀ ', '     '],
        X: ['▄   ▄', ' ▀▄▀ ', ' ▄▀▄ ', '▀   ▀', '     '],
        Y: ['▄   ▄', ' ▀▄▀ ', '  █  ', '  ▀  ', '     '],
        Z: ['▄▄▄▄▄', '  ▄▀ ', ' ▄▀  ', '▀▀▀▀▀', '     '],
        ' ': ['     ', '     ', '     ', '     ', '     '],
    },
};

function generateAsciiArt(text: string, fontName: string): string {
    const font = ASCII_FONTS[fontName];
    if (!font) return text;

    const upper = text.toUpperCase();
    const lines: string[] = ['', '', '', '', ''];

    for (const ch of upper) {
        const charArt = font[ch];
        if (charArt) {
            for (let row = 0; row < 5; row++) {
                lines[row] += (charArt[row] || '     ') + ' ';
            }
        }
    }

    return lines.map(l => l.trimEnd()).join('\n');
}

export default function AsciiArtPage() {
    const [inputText, setInputText] = useState(DEFAULT_INPUT);
    const [selectedFont, setSelectedFont] = useState('block');
    const { copiedId, copy } = useCopyToClipboard();

    const asciiResult = useMemo(() => generateAsciiArt(inputText, selectedFont), [inputText, selectedFont]);
    const isCopied = copiedId === 'ascii-result';

    return (
        <div className="min-h-screen">
            <section className="relative py-10 sm:py-14 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        🔤 ASCII Art Generator
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Convert your text into large block-letter ASCII art. Perfect for Discord, comments, and chats!
                </p>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
                {/* Input */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        maxLength={12}
                        className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                        placeholder="Type text (max 12 chars)..."
                    />
                </div>

                {/* Font picker */}
                <div className="flex gap-3 mb-6">
                    {Object.keys(ASCII_FONTS).map(f => (
                        <button
                            key={f}
                            onClick={() => setSelectedFont(f)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-medium capitalize transition-all ${selectedFont === f
                                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Result */}
                <div className="bg-white/5 rounded-2xl border border-white/10 p-4 sm:p-6 overflow-x-auto">
                    <pre className="text-green-400 text-xs sm:text-sm font-mono leading-tight whitespace-pre">
                        {asciiResult}
                    </pre>
                </div>

                {/* Copy */}
                <div className="mt-4 flex gap-3">
                    <button
                        onClick={() => copy(asciiResult, 'ascii-result')}
                        className={`flex-1 py-3.5 rounded-xl text-sm font-semibold transition-all ${isCopied
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                            }`}
                    >
                        {isCopied ? '✓ Copied!' : '📋 Copy ASCII Art'}
                    </button>
                </div>
            </div>
        </div>
    );
}
