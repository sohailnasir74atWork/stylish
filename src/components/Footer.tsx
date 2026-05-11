import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, TOOL_NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { Locale, defaultLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';

interface FooterProps {
    locale?: Locale;
}

/** Prefix a path with locale for non-default locales */
function localePath(href: string, locale?: Locale): string {
    if (!locale || locale === defaultLocale) return href;
    return `/${locale}${href}`;
}

// Show top items on mobile, all on desktop
const FOOTER_CAT_LIMIT = 12;
const FOOTER_TOOL_LIMIT = 10;

export default function Footer({ locale }: FooterProps) {
    const t = getDictionary(locale || defaultLocale);
    return (
        <footer className="mt-16 border-t border-white/5 bg-[rgba(5,5,20,0.95)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
                {/* Brand */}
                <div className="text-center mb-8">
                    <Link href={localePath('/', locale)} className="inline-flex items-center gap-2 mb-2">
                        <Image src="/site_logo.webp" alt={SITE_NAME} width={32} height={32} className="rounded-lg" />
                        <span className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            {SITE_NAME}
                        </span>
                    </Link>
                    <p className="text-xs text-gray-500 max-w-md mx-auto">
                        {t.footerTagline}
                    </p>
                </div>

                {/* Categories Chips — limited count */}
                <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 text-center mb-3">{t.footerFontStyles}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {NAV_LINKS.slice(0, FOOTER_CAT_LIMIT).map(link => (
                            <Link
                                key={link.href}
                                href={localePath(link.href, locale)}
                                className="px-3 py-1.5 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-full hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-300 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Tools Chips — limited count */}
                <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 text-center mb-3">{t.footerTools}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {TOOL_NAV_LINKS.slice(0, FOOTER_TOOL_LIMIT).map(link => (
                            <Link
                                key={link.href}
                                href={localePath(link.href, locale)}
                                className="px-3 py-1.5 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-full hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-300 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Legal Chips */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link href={localePath('/about', locale)} className="px-3 py-1.5 text-xs text-gray-500 bg-white/[0.02] border border-white/[0.04] rounded-full hover:bg-white/[0.06] hover:text-gray-300 transition-all duration-200">
                            {t.footerAboutUs}
                        </Link>
                        <Link href={localePath('/privacy-policy', locale)} className="px-3 py-1.5 text-xs text-gray-500 bg-white/[0.02] border border-white/[0.04] rounded-full hover:bg-white/[0.06] hover:text-gray-300 transition-all duration-200">
                            {t.footerPrivacyPolicy}
                        </Link>
                        <Link href={localePath('/terms', locale)} className="px-3 py-1.5 text-xs text-gray-500 bg-white/[0.02] border border-white/[0.04] rounded-full hover:bg-white/[0.06] hover:text-gray-300 transition-all duration-200">
                            {t.footerTermsOfService}
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-[11px] text-gray-600">
                        © {new Date().getFullYear()} {SITE_NAME} · Made with ♡
                    </p>
                </div>
            </div>
        </footer>
    );
}
