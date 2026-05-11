'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, TOOL_NAV_LINKS, PLATFORM_NAV_LINKS, FEATURE_NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { defaultLocale } from '@/lib/i18n';
import { useLocale } from '@/hooks/useLocale';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const megaMenuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const { locale, dictionary: t } = useLocale();
    const lp = (href: string) => (locale === defaultLocale ? href : `/${locale}${href}`);

    // U3: Close all menus on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setMegaMenuOpen(false);
    }, [pathname]);

    // Click outside to close mega menu
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
                setMegaMenuOpen(false);
            }
        }
        if (megaMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [megaMenuOpen]);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(10,10,30,0.85)] border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Top bar */}
                <div className="flex items-center justify-between h-16">
                    <Link href={lp('/')} className="flex items-center gap-2 group">
                        <Image src="/site_logo.webp" alt={SITE_NAME} width={36} height={36} className="rounded-lg" priority />
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-500">
                            {SITE_NAME}
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.slice(0, 5).map(link => (
                            <Link
                                key={link.href}
                                href={lp(link.href)}
                                className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* U2: Mega Menu — click toggle + keyboard accessible */}
                        <div className="relative" ref={megaMenuRef}>
                            <button
                                className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                                aria-expanded={megaMenuOpen}
                                aria-haspopup="true"
                            >
                                😎 {t.navMore} {megaMenuOpen ? '▴' : '▾'}
                            </button>
                            {megaMenuOpen && (
                                <div className="absolute top-full right-0 mt-1 w-[560px] py-4 px-4 bg-[rgba(20,20,50,0.98)] backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl transition-all duration-200">
                                    <div className="grid grid-cols-4 gap-4">
                                        <div>
                                            <p className="px-2 py-1 text-xs text-gray-500 uppercase tracking-wider mb-1">{t.navEmotions}</p>
                                            {NAV_LINKS.slice(9).map(link => (
                                                <Link key={link.href} href={lp(link.href)} className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">{link.label}</Link>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="px-2 py-1 text-xs text-gray-500 uppercase tracking-wider mb-1">{t.footerPlatforms}</p>
                                            {PLATFORM_NAV_LINKS.map(link => (
                                                <Link key={link.href} href={lp(link.href)} className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">{link.label}</Link>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="px-2 py-1 text-xs text-gray-500 uppercase tracking-wider mb-1">{t.navFontTools}</p>
                                            {TOOL_NAV_LINKS.slice(0, 12).map(link => (
                                                <Link key={link.href} href={lp(link.href)} className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">{link.label}</Link>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="px-2 py-1 text-xs text-gray-500 uppercase tracking-wider mb-1">{t.uniqueToolsHeading}</p>
                                            {FEATURE_NAV_LINKS.map(link => (
                                                <Link key={link.href} href={lp(link.href)} className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">{link.label}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Favorites shortcut */}
                        <Link href={lp('/favorites')} className="px-3 py-2 rounded-lg text-sm text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 transition-all duration-200">
                            ♥
                        </Link>
                    </nav>

                    {/* Theme toggle + Language switcher + Mobile menu */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <ThemeToggle />
                            <LanguageSwitcher />
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
                            aria-label={t.ariaToggleMenu}
                            aria-expanded={mobileMenuOpen}
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
                            <Link key={link.href} href={lp(link.href)} className="px-3 py-1.5 rounded-full text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 whitespace-nowrap transition-all duration-200">{link.label}</Link>
                        ))}
                        <span className="text-gray-600 self-center px-1">|</span>
                        {TOOL_NAV_LINKS.slice(0, 10).map(link => (
                            <Link key={link.href} href={lp(link.href)} className="px-3 py-1.5 rounded-full text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 whitespace-nowrap transition-all duration-200">{link.label}</Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-white/10 bg-[rgba(10,10,30,0.98)] backdrop-blur-xl max-h-[70vh] overflow-y-auto">
                    <div className="px-4 py-4 space-y-1">
                        <p className="px-3 py-1 text-xs text-gray-500 uppercase tracking-wider">{t.footerCategories}</p>
                        <div className="grid grid-cols-2 gap-1">
                            {NAV_LINKS.slice(0, 9).map(link => (
                                <Link key={link.href} href={lp(link.href)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>

                        <div className="border-t border-white/10 my-3" />
                        <p className="px-3 py-1 text-xs text-gray-500 uppercase tracking-wider">{t.navEmotionsMoods}</p>
                        <div className="grid grid-cols-2 gap-1">
                            {NAV_LINKS.slice(9).map(link => (
                                <Link key={link.href} href={lp(link.href)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>

                        <div className="border-t border-white/10 my-3" />
                        <p className="px-3 py-1 text-xs text-gray-500 uppercase tracking-wider">{t.footerPlatforms}</p>
                        <div className="grid grid-cols-2 gap-1">
                            {PLATFORM_NAV_LINKS.map(link => (
                                <Link key={link.href} href={lp(link.href)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>

                        <div className="border-t border-white/10 my-3" />
                        <p className="px-3 py-1 text-xs text-gray-500 uppercase tracking-wider">{t.navFontTools}</p>
                        <div className="grid grid-cols-2 gap-1">
                            {TOOL_NAV_LINKS.map(link => (
                                <Link key={link.href} href={lp(link.href)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>

                        <div className="border-t border-white/10 my-3" />
                        <p className="px-3 py-1 text-xs text-purple-400 uppercase tracking-wider">{t.uniqueToolsHeading}</p>
                        <div className="grid grid-cols-2 gap-1">
                            {FEATURE_NAV_LINKS.map(link => (
                                <Link key={link.href} href={lp(link.href)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">{link.label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
