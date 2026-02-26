import { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: `About Us | ${SITE_NAME}`,
    description: `Learn about ${SITE_NAME} — the free stylish name generator for creating beautiful names with cool fonts, symbols, and decorations.`,
};

export default function AboutPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        About {SITE_NAME}
                    </span>
                </h1>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-white mb-3">✨ Our Mission</h2>
                        <p>
                            {SITE_NAME} is a free online tool designed to help you create beautiful, stylish names using Unicode characters. Whether you&apos;re a gamer looking for a cool nickname, a social media enthusiast wanting to stand out, or just someone who loves creative text — we&apos;ve got you covered.
                        </p>
                    </div>

                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-white mb-3">🚀 What We Offer</h2>
                        <ul className="space-y-2 list-disc list-inside">
                            <li><strong className="text-white">1000+ Font Styles</strong> — From bold and italic to gothic, cursive, bubble, and more</li>
                            <li><strong className="text-white">70+ Decorators</strong> — Beautiful symbols and frames to wrap your name</li>
                            <li><strong className="text-white">Instant Copy</strong> — One-click to copy any style to your clipboard</li>
                            <li><strong className="text-white">Category Filters</strong> — Gaming, Cute, Cool, Fancy, Love, and more</li>
                            <li><strong className="text-white">Platform-Specific</strong> — Optimized for Instagram, TikTok, PUBG, Free Fire</li>
                            <li><strong className="text-white">Always Free</strong> — No sign-up, no downloads, no limits</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-white mb-3">💡 How It Works</h2>
                        <p>
                            Our tool uses Unicode — a universal character encoding standard. Instead of changing fonts (which require installation), we map your regular letters to special Unicode characters that look like different font styles. This means the stylish text works everywhere: social media, messaging apps, gaming platforms, and more.
                        </p>
                    </div>

                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-white mb-3">📧 Contact</h2>
                        <p>
                            Have questions, suggestions, or feedback? We&apos;d love to hear from you! Reach out to us and we&apos;ll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
