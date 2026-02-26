'use client';

import { useState, useMemo } from 'react';

export default function TextRepeaterPage() {
    const [text, setText] = useState('');
    const [count, setCount] = useState(10);
    const [separator, setSeparator] = useState('newline');
    const [customSep, setCustomSep] = useState(' ');
    const [copied, setCopied] = useState(false);

    const separatorMap: Record<string, string> = {
        newline: '\n',
        space: ' ',
        comma: ', ',
        none: '',
        custom: customSep,
    };

    const result = useMemo(() => {
        if (!text.trim()) return '';
        const sep = separatorMap[separator];
        return Array(Math.min(count, 5000)).fill(text).join(sep);
    }, [text, count, separator, customSep]);

    const charCount = result.length;

    const handleCopy = () => {
        if (!result) return;
        navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">🔄</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Text Repeater
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    Repeat any text up to 5000 times. Perfect for WhatsApp, SMS, Discord flooding, emphasis text, and more!
                </p>
            </section>

            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-5">
                    {/* Input */}
                    <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Text to repeat</label>
                        <textarea
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="I love you ❤️"
                            rows={2}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 resize-none"
                        />
                    </div>

                    {/* Controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Repeat count</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min={1}
                                    max={1000}
                                    value={count}
                                    onChange={e => setCount(parseInt(e.target.value))}
                                    className="flex-1 accent-purple-500"
                                />
                                <input
                                    type="number"
                                    min={1}
                                    max={5000}
                                    value={count}
                                    onChange={e => setCount(Math.min(5000, Math.max(1, parseInt(e.target.value) || 1)))}
                                    className="w-20 text-center bg-white/5 border border-white/10 rounded-lg text-white py-1.5 text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Separator</label>
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    { id: 'newline', label: 'New Line' },
                                    { id: 'space', label: 'Space' },
                                    { id: 'comma', label: 'Comma' },
                                    { id: 'none', label: 'None' },
                                    { id: 'custom', label: 'Custom' },
                                ].map(s => (
                                    <button
                                        key={s.id}
                                        onClick={() => setSeparator(s.id)}
                                        className={`px-2.5 py-1 text-[11px] rounded-full border transition-all ${separator === s.id
                                            ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                                            }`}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                            {separator === 'custom' && (
                                <input
                                    type="text"
                                    value={customSep}
                                    onChange={e => setCustomSep(e.target.value)}
                                    placeholder="Enter separator"
                                    className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50"
                                />
                            )}
                        </div>
                    </div>

                    {/* Result */}
                    {result && (
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-xs text-gray-500 uppercase tracking-wider">Result</label>
                                <span className="text-[10px] text-gray-600">{charCount.toLocaleString()} characters</span>
                            </div>
                            <div className="bg-black/30 rounded-xl border border-white/10 p-4 max-h-48 overflow-y-auto">
                                <pre className="text-sm text-gray-300 whitespace-pre-wrap break-all font-sans">{result.slice(0, 5000)}{result.length > 5000 ? '...' : ''}</pre>
                            </div>
                            <button
                                onClick={handleCopy}
                                className={`mt-3 w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${copied
                                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90'
                                    }`}
                            >
                                {copied ? '✓ Copied to Clipboard!' : `📋 Copy All (${charCount.toLocaleString()} chars)`}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
