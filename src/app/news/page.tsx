import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildAlternateLanguages } from '@/lib/i18n';

export const metadata: Metadata = {
    title: `News & Updates | ${SITE_NAME}`,
    description: `The latest updates from ${SITE_NAME} — new font generators, tools, fixes, and improvements to the stylish name maker.`,
    alternates: {
        canonical: '/news',
        languages: buildAlternateLanguages('/news'),
    },
};

interface NewsEntry {
    date: string; // ISO
    title: string;
    body: string;
    href?: string;
    linkLabel?: string;
}

const NEWS_ENTRIES: NewsEntry[] = [
    {
        date: '2026-06-14',
        title: 'New Guides Hub Launched',
        body: 'We added a full blog with step-by-step guides on making stylish names, choosing fonts for Instagram, and creating gaming nicknames for Free Fire and PUBG. More guides are added regularly.',
        href: '/blog',
        linkLabel: 'Read the guides',
    },
    {
        date: '2026-05-30',
        title: 'More Tools: Captions, Character Counter & Mirror Text',
        body: 'Our toolbox keeps growing. You can now generate captions, count characters against platform limits, and flip text with the new mirror text tool — all free and copy-and-paste ready.',
        href: '/tool/character-counter',
        linkLabel: 'Try the character counter',
    },
    {
        date: '2026-05-12',
        title: 'Expanded Symbol Keyboard',
        body: 'We grew the symbol keyboard with more game-safe symbols and decorative frames (꧁ ꧂ ☬ ★ ⚡), making it easier to build pro-style gaming names in seconds.',
        href: '/tool/symbol-keyboard',
        linkLabel: 'Open the symbol keyboard',
    },
    {
        date: '2026-04-20',
        title: 'Faster Generator & New Font Styles',
        body: 'The generator now loads faster and includes new gothic, aesthetic, and bubble styles. Type your name once and browse hundreds of fonts instantly across all categories.',
        href: '/',
        linkLabel: 'Open the generator',
    },
    {
        date: '2026-03-15',
        title: 'Platform-Specific Pages Added',
        body: 'We launched dedicated pages tuned for Instagram, TikTok, WhatsApp, Discord, Free Fire, PUBG, and more — each with the character limits and tips for that platform.',
        href: '/instagram',
        linkLabel: 'See Instagram names',
    },
];

function formatDate(iso: string): string {
    return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
    });
}

export default function NewsPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${SITE_NAME} News & Updates`,
        url: `${SITE_URL}/news`,
        description: 'Product updates and announcements for the Stylish Names generator.',
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        News &amp; Updates
                    </span>
                </h1>
                <p className="text-gray-400 mb-10">
                    What&apos;s new at {SITE_NAME} — new tools, font styles, and improvements.
                </p>

                <div className="space-y-5">
                    {NEWS_ENTRIES.map(entry => (
                        <div key={entry.date} className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6">
                            <p className="text-xs text-gray-500 mb-2">{formatDate(entry.date)}</p>
                            <h2 className="text-lg font-bold text-white mb-2">{entry.title}</h2>
                            <p className="text-sm text-gray-400 leading-relaxed">{entry.body}</p>
                            {entry.href && (
                                <Link href={entry.href} className="inline-block mt-3 text-sm text-purple-300 hover:text-purple-200">
                                    {entry.linkLabel ?? 'Learn more'} →
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
