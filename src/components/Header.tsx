'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, TOOL_NAV_LINKS, PLATFORM_NAV_LINKS, FEATURE_NAV_LINKS, SITE_NAME } from '@/lib/constants';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(10,10,30,0.85)] border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Top bar */}
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl">✨</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-500">
                            {SITE_NAME}
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.slice(0, 5).map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mega Menu - Categories */}
                        <div className="relative group">
                            <button className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200">
                                😎 More ▾
                            </button>
                            <div className="absolute top-full right-0 mt-1 w-[560px] py-4 px-4 bg-[rgba(20,20,50,0.98)] backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="grid grid-cols-4 gap-4">
                                    <div>
                                        <p className="px-2 py-1 text-xs text-gray-500 uppercase tracking-wider mb-1">Emotions</p>
                                        {NAV_LINKS.slice(9).map(link => (
                                            <Link key={link.href} href={link.href} className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">{link.label}</Link>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="px-2 py-1 text-xs text-gray-500 uppercase tracking-wider mb-1">Platforms</p>
                                        {PLATFORM_NAV_LINKS.map(link => (
                                            <Link key={link.href} href={link.href} className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">{link.label}</Link>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="px-2 py-1 text-xs text-gray-500 uppercase tracking-wider mb-1">Font Tools</p>
                                        {TOOL_NAV_LINKS.slice(0, 12).map(link => (
                                            <Link key={link.href} href={link.href} className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">{link.label}</Link>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="px-2 py-1 text-xs text-gray-500 uppercase tracking-wider mb-1">✨ Unique Tools</p>
                                        {FEATURE_NAV_LINKS.map(link => (
                                            <Link key={link.href} href={link.href} className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">{link.label}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Favorites shortcut */}
                        <Link href="/favorites" className="px-3 py-2 rounded-lg text-sm text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 transition-all duration-200">
                            ♥
                        </Link>
                    </nav>

                    {/* Language switcher + Mobile menu */}
                    <div className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Tool scroll bar (desktop) */}
                <div className="hidden lg:block -mx-4 px-4 pb-2">
                    <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                        {NAV_LINKS.slice(5, 9).map(link => (
                            <Link key={link.href} href={link.href} className="px-3 py-1.5 rounded-full text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 whitespace-nowrap transition-all duration-200">{link.label}</Link>
                        ))}
                        <span className="text-gray-600 self-center px-1">|</span>
                        {TOOL_NAV_LINKS.slice(0, 10).map(link => (
                            <Link key={link.href} href={link.href} className="px-3 py-1.5 rounded-full text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 whitespace-nowrap transition-all duration-200">{link.label}</Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-white/10 bg-[rgba(10,10,30,0.98)] backdrop-blur-xl max-h-[70vh] overflow-y-auto">
                    <div className="px-4 py-4 space-y-1">
                        <p className="px-3 py-1 text-xs text-gray-500 uppercase tracking-wider">Categories</p>
                        <div className="grid grid-cols-2 gap-1">
                            {NAV_LINKS.slice(0, 9).map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>

                        <div className="border-t border-white/10 my-3" />
                        <p className="px-3 py-1 text-xs text-gray-500 uppercase tracking-wider">Emotions & Moods</p>
                        <div className="grid grid-cols-2 gap-1">
                            {NAV_LINKS.slice(9).map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>

                        <div className="border-t border-white/10 my-3" />
                        <p className="px-3 py-1 text-xs text-gray-500 uppercase tracking-wider">Platforms</p>
                        <div className="grid grid-cols-2 gap-1">
                            {PLATFORM_NAV_LINKS.map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>

                        <div className="border-t border-white/10 my-3" />
                        <p className="px-3 py-1 text-xs text-gray-500 uppercase tracking-wider">Font Tools</p>
                        <div className="grid grid-cols-2 gap-1">
                            {TOOL_NAV_LINKS.map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>

                        <div className="border-t border-white/10 my-3" />
                        <p className="px-3 py-1 text-xs text-purple-400 uppercase tracking-wider">✨ Unique Tools</p>
                        <div className="grid grid-cols-2 gap-1">
                            {FEATURE_NAV_LINKS.map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
