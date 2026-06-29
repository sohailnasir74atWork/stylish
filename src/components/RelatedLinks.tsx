import Link from 'next/link';
import { NAV_LINKS, PLATFORM_NAV_LINKS, TOOL_NAV_LINKS } from '@/lib/constants';

interface RelatedLinksProps {
    /** Current page path (e.g. "/gaming" or "/tool/gothic") to exclude from the lists */
    currentHref?: string;
}

function Chips({ links, currentHref, hoverClass }: {
    links: { label: string; href: string }[];
    currentHref?: string;
    hoverClass: string;
}) {
    return (
        <div className="flex flex-wrap gap-2">
            {links
                .filter(l => l.href !== currentHref)
                .map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`px-3 py-1.5 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-full transition-all duration-200 ${hoverClass}`}
                    >
                        {link.label}
                    </Link>
                ))}
        </div>
    );
}

/**
 * Internal-link block surfaced at the bottom of every category/platform/tool page.
 * Boosts crawl depth and topical authority by interlinking the whole site.
 */
export default function RelatedLinks({ currentHref }: RelatedLinksProps) {
    return (
        <section className="mt-12 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <div>
                <h2 className="text-sm font-semibold text-gray-300 mb-3">Explore more name styles</h2>
                <Chips links={NAV_LINKS} currentHref={currentHref} hoverClass="hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-300" />
            </div>
            <div>
                <h2 className="text-sm font-semibold text-gray-300 mb-3">Stylish names for every platform</h2>
                <Chips links={PLATFORM_NAV_LINKS} currentHref={currentHref} hoverClass="hover:bg-pink-500/10 hover:border-pink-500/20 hover:text-pink-300" />
            </div>
            <div>
                <h2 className="text-sm font-semibold text-gray-300 mb-3">Font &amp; text tools</h2>
                <Chips links={TOOL_NAV_LINKS} currentHref={currentHref} hoverClass="hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-300" />
            </div>
        </section>
    );
}
