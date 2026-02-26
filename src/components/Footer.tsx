import Link from 'next/link';
import { NAV_LINKS, TOOL_NAV_LINKS, SITE_NAME } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-white/5 bg-[rgba(5,5,20,0.95)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
                {/* Brand */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-2">
                        <span className="text-2xl">✨</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            {SITE_NAME}
                        </span>
                    </Link>
                    <p className="text-xs text-gray-500 max-w-md mx-auto">
                        Create beautiful stylish names with cool fonts, symbols & decorations. Free copy & paste!
                    </p>
                </div>

                {/* Categories Chips */}
                <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 text-center mb-3">Font Styles</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3 py-1.5 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-full hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-300 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Tools Chips */}
                <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 text-center mb-3">Tools</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {TOOL_NAV_LINKS.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
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
                        <Link href="/about" className="px-3 py-1.5 text-xs text-gray-500 bg-white/[0.02] border border-white/[0.04] rounded-full hover:bg-white/[0.06] hover:text-gray-300 transition-all duration-200">
                            About Us
                        </Link>
                        <Link href="/privacy-policy" className="px-3 py-1.5 text-xs text-gray-500 bg-white/[0.02] border border-white/[0.04] rounded-full hover:bg-white/[0.06] hover:text-gray-300 transition-all duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="px-3 py-1.5 text-xs text-gray-500 bg-white/[0.02] border border-white/[0.04] rounded-full hover:bg-white/[0.06] hover:text-gray-300 transition-all duration-200">
                            Terms of Service
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
