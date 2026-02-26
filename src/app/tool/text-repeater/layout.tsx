import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Text Repeater — Repeat Any Text Up to 5000 Times',
    description: 'Free text repeater tool. Repeat any text, word, or emoji up to 5000 times instantly. Add separators like new lines, spaces, or commas. Copy with one click!',
    alternates: { canonical: '/tool/text-repeater' },
    openGraph: {
        title: 'Text Repeater — Repeat Text, Words & Emojis 5000x',
        description: 'Repeat any text up to 5000 times with custom separators. One-click copy. Works for WhatsApp, Discord & more.',
        url: `${SITE_URL}/tool/text-repeater`,
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
