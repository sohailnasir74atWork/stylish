'use client';

import { useState, useMemo } from 'react';

// Combining diacritical marks for zalgo effect
const ZALGO_UP = [
    '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
    '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350',
    '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d',
    '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369',
    '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b',
];

const ZALGO_MID = [
    '\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327',
    '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e',
    '\u035f', '\u0360', '\u0362', '\u0338', '\u0337',
];

const ZALGO_DOWN = [
    '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f',
    '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c',
    '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339',
    '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d',
    '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323',
];

function generateZalgo(text: string, intensity: number, direction: 'up' | 'mid' | 'down' | 'all'): string {
    const maxMarks = Math.floor(intensity * 15);
    return [...text].map(char => {
        if (char === ' ' || char === '\n') return char;
        let result = char;
        const addMarks = (pool: string[]) => {
            const count = Math.floor(Math.random() * maxMarks) + 1;
            for (let i = 0; i < count; i++) {
                result += pool[Math.floor(Math.random() * pool.length)];
            }
        };
        if (direction === 'up' || direction === 'all') addMarks(ZALGO_UP);
        if (direction === 'mid' || direction === 'all') addMarks(ZALGO_MID);
        if (direction === 'down' || direction === 'all') addMarks(ZALGO_DOWN);
        return result;
    }).join('');
}

export default function ZalgoTextPage() {
    const [text, setText] = useState('Creepy Text');
    const [intensity, setIntensity] = useState(0.4);
    const [direction, setDirection] = useState<'up' | 'mid' | 'down' | 'all'>('all');
    const [copied, setCopied] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const result = useMemo(() => {
        if (!text.trim()) return '';
        return generateZalgo(text, intensity, direction);
    }, [text, intensity, direction, refreshKey]);

    const handleCopy = () => {
        if (!result) return;
        navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const intensityLabel = intensity < 0.3 ? 'Subtle' : intensity < 0.6 ? 'Medium' : intensity < 0.85 ? 'Crazy' : 'MAXIMUM';

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">👾</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Zalgo / Glitch Text Generator
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    Create creepy, glitchy, corrupted text with adjustable intensity. Perfect for Discord, memes, horror aesthetics &amp; more!
                </p>
            </section>

            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-5">
                    {/* Input */}
                    <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Your text</label>
                        <input
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Type something..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50"
                        />
                    </div>

                    {/* Controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-xs text-gray-500 uppercase tracking-wider">Craziness</label>
                                <span className={`text-xs font-semibold ${intensity >= 0.85 ? 'text-red-400' : intensity >= 0.6 ? 'text-orange-400' : intensity >= 0.3 ? 'text-yellow-400' : 'text-green-400'}`}>
                                    {intensityLabel}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={0.05}
                                max={1}
                                step={0.05}
                                value={intensity}
                                onChange={e => { setIntensity(parseFloat(e.target.value)); setRefreshKey(k => k + 1); }}
                                className="w-full accent-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Direction</label>
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    { id: 'all' as const, label: '↕ All' },
                                    { id: 'up' as const, label: '↑ Up' },
                                    { id: 'mid' as const, label: '↔ Mid' },
                                    { id: 'down' as const, label: '↓ Down' },
                                ].map(d => (
                                    <button
                                        key={d.id}
                                        onClick={() => { setDirection(d.id); setRefreshKey(k => k + 1); }}
                                        className={`px-3 py-1.5 text-xs rounded-full border transition-all ${direction === d.id
                                            ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                                            }`}
                                    >
                                        {d.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Regenerate */}
                    <button
                        onClick={() => setRefreshKey(k => k + 1)}
                        className="w-full py-2 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all"
                    >
                        🔄 Regenerate
                    </button>

                    {/* Result */}
                    {result && (
                        <div>
                            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Result</label>
                            <div className="bg-black/30 rounded-xl border border-white/10 p-4 min-h-[80px] overflow-hidden">
                                <p className="text-lg text-gray-200 break-all leading-loose">{result}</p>
                            </div>
                            <button
                                onClick={handleCopy}
                                className={`mt-3 w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${copied
                                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90'
                                    }`}
                            >
                                {copied ? '✓ Copied!' : '📋 Copy Zalgo Text'}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
