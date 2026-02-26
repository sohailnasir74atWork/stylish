'use client';

import { useState, useMemo } from 'react';

const PLATFORM_LIMITS = [
    { name: 'Instagram Bio', emoji: '📸', limit: 150, field: 'Bio' },
    { name: 'Instagram Caption', emoji: '📸', limit: 2200, field: 'Caption' },
    { name: 'Instagram Username', emoji: '📸', limit: 30, field: 'Username' },
    { name: 'TikTok Bio', emoji: '🎵', limit: 80, field: 'Bio' },
    { name: 'TikTok Username', emoji: '🎵', limit: 24, field: 'Username' },
    { name: 'TikTok Caption', emoji: '🎵', limit: 2200, field: 'Caption' },
    { name: 'WhatsApp Status', emoji: '💬', limit: 139, field: 'Status' },
    { name: 'WhatsApp About', emoji: '💬', limit: 139, field: 'About' },
    { name: 'WhatsApp Name', emoji: '💬', limit: 25, field: 'Name' },
    { name: 'Facebook Bio', emoji: '👤', limit: 101, field: 'Bio' },
    { name: 'Facebook Post', emoji: '👤', limit: 63206, field: 'Post' },
    { name: 'Twitter/X Bio', emoji: '🐦', limit: 160, field: 'Bio' },
    { name: 'Twitter/X Post', emoji: '🐦', limit: 280, field: 'Post' },
    { name: 'Discord Username', emoji: '🎮', limit: 32, field: 'Username' },
    { name: 'Discord Status', emoji: '🎮', limit: 128, field: 'Status' },
    { name: 'YouTube Channel', emoji: '▶️', limit: 100, field: 'Name' },
    { name: 'PUBG Username', emoji: '🎯', limit: 14, field: 'Username' },
    { name: 'Free Fire Name', emoji: '🔥', limit: 12, field: 'Username' },
    { name: 'Roblox Username', emoji: '🕹️', limit: 20, field: 'Username' },
    { name: 'Fortnite Name', emoji: '🏰', limit: 16, field: 'Username' },
    { name: 'Telegram Bio', emoji: '📨', limit: 70, field: 'Bio' },
    { name: 'Snapchat Username', emoji: '👻', limit: 15, field: 'Username' },
    { name: 'Spotify Playlist', emoji: '🎧', limit: 100, field: 'Name' },
    { name: 'LinkedIn Headline', emoji: '💼', limit: 220, field: 'Headline' },
];

export default function CharacterCounterPage() {
    const [text, setText] = useState('');

    const stats = useMemo(() => {
        const chars = text.length;
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const lines = text ? text.split('\n').length : 0;
        const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
        return { chars, words, lines, sentences };
    }, [text]);

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-10 sm:py-16 px-4 text-center">
                <p className="text-4xl mb-3">📏</p>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Character Counter
                    </span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    Count characters, words, and check if your text fits Instagram, TikTok, PUBG, WhatsApp &amp; 20+ platform limits!
                </p>
            </section>

            {/* Input */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-6">
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Paste or type your text here..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 resize-none"
                />
            </section>

            {/* Stats */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { label: 'Characters', value: stats.chars, emoji: '🔤' },
                        { label: 'Words', value: stats.words, emoji: '📝' },
                        { label: 'Lines', value: stats.lines, emoji: '📄' },
                        { label: 'Sentences', value: stats.sentences, emoji: '💬' },
                    ].map(stat => (
                        <div key={stat.label} className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
                            <p className="text-xs text-gray-500 mb-1">{stat.emoji} {stat.label}</p>
                            <p className="text-2xl font-bold text-white">{stat.value.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Platform Limits */}
            <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-12">
                <h2 className="text-lg font-bold text-white mb-4 text-center">📱 Platform Limits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PLATFORM_LIMITS.map(platform => {
                        const pct = stats.chars > 0 ? Math.min(100, (stats.chars / platform.limit) * 100) : 0;
                        const isOver = stats.chars > platform.limit;
                        const isFits = stats.chars > 0 && stats.chars <= platform.limit;
                        return (
                            <div key={platform.name} className={`bg-white/5 rounded-xl border p-3.5 transition-all ${isOver ? 'border-red-500/30' : isFits ? 'border-green-500/30' : 'border-white/10'}`}>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-sm">{platform.emoji}</span>
                                        <span className="text-xs text-white font-medium">{platform.name}</span>
                                        <span className="text-[10px] text-gray-600">{platform.field}</span>
                                    </div>
                                    <span className={`text-[11px] font-mono ${isOver ? 'text-red-400' : isFits ? 'text-green-400' : 'text-gray-500'}`}>
                                        {stats.chars}/{platform.limit}
                                    </span>
                                </div>
                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ${isOver ? 'bg-red-500' : isFits ? 'bg-green-500' : 'bg-gray-700'}`}
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
