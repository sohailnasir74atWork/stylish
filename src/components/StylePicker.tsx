'use client';

import { useState, useMemo } from 'react';
import { charMaps } from '@/lib/charMaps';
import { decorators } from '@/lib/decorators';

function applyCharMap(text: string, mapId: string): string {
    const cm = charMaps.find(m => m.id === mapId);
    if (!cm) return text;
    return text.split('').map(ch => cm.map[ch] || cm.map[ch.toLowerCase()] || ch).join('');
}

interface StylePickerProps {
    inputText: string;
    onStyled: (styledText: string) => void;
    styledText: string;
    compact?: boolean;
}

export default function StylePicker({ inputText, onStyled, styledText, compact = false }: StylePickerProps) {
    const [selectedFont, setSelectedFont] = useState('');
    const [selectedDec, setSelectedDec] = useState('');
    const [mode, setMode] = useState<'pick' | 'paste'>('pick');
    const [pastedText, setPastedText] = useState('');

    // Font categories
    const fontCategories = useMemo(() => {
        const cats = new Set(charMaps.map(m => m.category));
        return Array.from(cats);
    }, []);
    const [activeFontCat, setActiveFontCat] = useState(fontCategories[0] || '');

    // Decorator categories
    const decCategories = useMemo(() => {
        const cats = new Set(decorators.map(d => d.category));
        return Array.from(cats);
    }, []);
    const [activeDecCat, setActiveDecCat] = useState(decCategories[0] || '');

    // Build styled text when font or decorator changes
    const handleFontSelect = (fontId: string) => {
        setSelectedFont(fontId);
        setMode('pick');
        const fontedText = applyCharMap(inputText, fontId);
        const dec = selectedDec ? decorators.find(d => d.id === selectedDec) : null;
        const result = dec ? `${dec.prefix}${fontedText}${dec.suffix}` : fontedText;
        onStyled(result);
    };

    const handleDecSelect = (decId: string) => {
        setSelectedDec(decId);
        setMode('pick');
        const fontedText = selectedFont ? applyCharMap(inputText, selectedFont) : inputText;
        const dec = decId ? decorators.find(d => d.id === decId) : null;
        const result = dec ? `${dec.prefix}${fontedText}${dec.suffix}` : fontedText;
        onStyled(result);
    };

    const handlePaste = (text: string) => {
        setPastedText(text);
        setMode('paste');
        if (text.trim()) onStyled(text);
    };

    const gridCols = compact ? 'grid-cols-3 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4';
    const maxH = compact ? 'max-h-[160px]' : 'max-h-[200px]';

    return (
        <div className="space-y-4">
            {/* Mode toggle: Pick style vs Paste styled text */}
            <div className="flex gap-2">
                <button
                    onClick={() => setMode('pick')}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${mode === 'pick'
                            ? 'bg-purple-600 text-white'
                            : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 border border-black/8 dark:border-white/10'
                        }`}
                >
                    🎨 Pick Style
                </button>
                <button
                    onClick={() => setMode('paste')}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${mode === 'paste'
                            ? 'bg-purple-600 text-white'
                            : 'bg-black/5 dark:bg-white/5 text-gray-400 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 border border-black/8 dark:border-white/10'
                        }`}
                >
                    📋 Paste Styled Text
                </button>
            </div>

            {mode === 'paste' ? (
                <div>
                    <p className="text-[10px] text-gray-500 mb-2">Paste any styled name you copied from the generator:</p>
                    <input
                        type="text"
                        value={pastedText}
                        onChange={e => handlePaste(e.target.value)}
                        className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl text-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                        placeholder="Paste your styled text here..."
                        dir="auto"
                    />
                </div>
            ) : (
                <>
                    {/* Font picker */}
                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Font Style ({charMaps.length} fonts)</p>
                        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide mb-2 pb-1">
                            {fontCategories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFontCat(cat)}
                                    className={`px-2.5 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap transition-all ${activeFontCat === cat
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-black/5 dark:bg-white/5 text-gray-500 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className={`grid ${gridCols} gap-1.5 ${maxH} overflow-y-auto pr-1`}>
                            {charMaps.filter(m => m.category === activeFontCat).map(cm => {
                                const preview = applyCharMap('Abc', cm.id);
                                const isSelected = selectedFont === cm.id;
                                return (
                                    <button
                                        key={cm.id}
                                        onClick={() => handleFontSelect(cm.id)}
                                        className={`p-2 rounded-lg text-left transition-all border text-sm ${isSelected
                                                ? 'bg-purple-600/20 border-purple-500/50'
                                                : 'bg-white/[0.02] border-white/5 hover:bg-white/8 hover:border-white/15'
                                            }`}
                                    >
                                        <span className="text-white truncate block">{preview}</span>
                                        <span className="text-[9px] text-gray-600 truncate block">{cm.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Decorator picker */}
                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Decorator ({decorators.length} styles)</p>
                        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide mb-2 pb-1">
                            <button
                                onClick={() => handleDecSelect('')}
                                className={`px-2.5 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap transition-all ${!selectedDec ? 'bg-pink-600 text-white' : 'bg-black/5 dark:bg-white/5 text-gray-500 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10'
                                    }`}
                            >
                                None
                            </button>
                            {decCategories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveDecCat(cat)}
                                    className={`px-2.5 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap transition-all ${activeDecCat === cat && selectedDec
                                            ? 'bg-pink-600 text-white'
                                            : 'bg-black/5 dark:bg-white/5 text-gray-500 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className={`grid ${gridCols} gap-1.5 ${maxH} overflow-y-auto pr-1`}>
                            {decorators.filter(d => d.category === activeDecCat).map(dec => {
                                const isSelected = selectedDec === dec.id;
                                return (
                                    <button
                                        key={dec.id}
                                        onClick={() => handleDecSelect(dec.id)}
                                        className={`p-2 rounded-lg text-center transition-all border text-sm ${isSelected
                                                ? 'bg-pink-600/20 border-pink-500/50'
                                                : 'bg-white/[0.02] border-white/5 hover:bg-white/8 hover:border-white/15'
                                            }`}
                                    >
                                        <span className="text-white truncate block">{dec.prefix} ✦ {dec.suffix}</span>
                                        <span className="text-[9px] text-gray-600 block">{dec.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}

            {/* Preview */}
            <div className="p-3 bg-white/[0.03] rounded-xl border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Result</p>
                <p className="text-lg text-white break-all leading-relaxed" dir="auto">
                    {styledText || inputText}
                </p>
            </div>
        </div>
    );
}
