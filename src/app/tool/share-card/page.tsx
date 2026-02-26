'use client';

import { useState, useRef, useCallback } from 'react';
import StylePicker from '@/components/StylePicker';
import { DEFAULT_INPUT } from '@/lib/constants';

const gradients = [
    { id: 'purple-pink', name: 'Purple Dream', colors: ['#7c3aed', '#ec4899'] },
    { id: 'blue-cyan', name: 'Ocean', colors: ['#3b82f6', '#06b6d4'] },
    { id: 'green-emerald', name: 'Forest', colors: ['#10b981', '#059669'] },
    { id: 'orange-red', name: 'Sunset', colors: ['#f97316', '#ef4444'] },
    { id: 'pink-rose', name: 'Rose', colors: ['#ec4899', '#f43f5e'] },
    { id: 'dark', name: 'Midnight', colors: ['#1e1b4b', '#312e81'] },
    { id: 'gold', name: 'Gold', colors: ['#d97706', '#b45309'] },
    { id: 'teal', name: 'Teal', colors: ['#0d9488', '#0891b2'] },
];

export default function ShareCardPage() {
    const [inputText, setInputText] = useState(DEFAULT_INPUT);
    const [styledText, setStyledText] = useState(DEFAULT_INPUT);
    const [selectedGradient, setSelectedGradient] = useState(gradients[0]);
    const [subtitle, setSubtitle] = useState('stylishnames.com');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawCard = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const w = 800;
        const h = 400;
        canvas.width = w;
        canvas.height = h;

        // Background gradient
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, selectedGradient.colors[0]);
        grad.addColorStop(1, selectedGradient.colors[1]);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(0, 0, w, h, 20);
        ctx.fill();

        // Decorative circles
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(w * 0.85, h * 0.2, 120, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(w * 0.1, h * 0.85, 80, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Main text
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.font = '900 42px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
        ctx.fillText(styledText, w / 2, h / 2 + 5, w - 80);

        // Subtitle
        ctx.font = '400 16px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fillText(subtitle, w / 2, h / 2 + 45);

        // Border
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(4, 4, w - 8, h - 8, 18);
        ctx.stroke();
    }, [styledText, selectedGradient, subtitle]);

    const handleDownload = () => {
        drawCard();
        const canvas = canvasRef.current;
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = `stylish-name-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    // Redraw on styled text or gradient change
    useState(() => {
        setTimeout(drawCard, 100);
    });

    return (
        <div className="min-h-screen">
            <section className="relative py-10 sm:py-14 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        🖼️ Share Card Generator
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Create beautiful shareable images of your stylish name. Pick any style or paste from the generator!
                </p>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Controls */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Your Text</label>
                            <input
                                type="text"
                                value={inputText}
                                onChange={e => { setInputText(e.target.value); setStyledText(e.target.value); setTimeout(drawCard, 50); }}
                                maxLength={30}
                                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                                placeholder="Enter your name..."
                            />
                        </div>

                        <StylePicker
                            inputText={inputText}
                            styledText={styledText}
                            onStyled={(text) => { setStyledText(text); setTimeout(drawCard, 50); }}
                            compact
                        />

                        <div>
                            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Subtitle</label>
                            <input
                                type="text"
                                value={subtitle}
                                onChange={e => { setSubtitle(e.target.value); setTimeout(drawCard, 50); }}
                                maxLength={40}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                                placeholder="Add a subtitle..."
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Background</label>
                            <div className="grid grid-cols-4 gap-2">
                                {gradients.map(g => (
                                    <button
                                        key={g.id}
                                        onClick={() => { setSelectedGradient(g); setTimeout(drawCard, 50); }}
                                        className={`h-12 rounded-xl transition-all border-2 ${selectedGradient.id === g.id ? 'border-white scale-105 shadow-lg' : 'border-transparent hover:border-white/30'
                                            }`}
                                        style={{ background: `linear-gradient(135deg, ${g.colors[0]}, ${g.colors[1]})` }}
                                        title={g.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Preview & Download */}
                    <div className="lg:sticky lg:top-[120px] lg:self-start">
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Preview</label>
                        <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
                            <canvas
                                ref={canvasRef}
                                className="w-full rounded-xl"
                                style={{ aspectRatio: '2/1' }}
                            />
                            <button
                                onClick={handleDownload}
                                className="mt-4 w-full py-3.5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all text-sm"
                            >
                                📥 Download as PNG
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
