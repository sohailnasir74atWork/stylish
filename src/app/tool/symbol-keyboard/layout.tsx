import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Special Symbols & Emoji Keyboard — 400+ Characters to Copy',
    description: 'Browse 400+ special symbols, emojis, stars, hearts, arrows, crowns & more. Click to copy any symbol instantly. Use in bios, names, captions & messages.',
    alternates: { canonical: '/tool/symbol-keyboard' },
    openGraph: {
        title: 'Symbol & Emoji Keyboard — 400+ Special Characters',
        description: 'Stars, hearts, arrows, crowns, music notes & more. Click any symbol to copy. Use anywhere!',
        url: `${SITE_URL}/tool/symbol-keyboard`,
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
