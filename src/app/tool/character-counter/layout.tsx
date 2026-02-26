import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Character Counter — Check Text Length for Instagram, PUBG & 20+ Platforms',
    description: 'Free character counter. See if your text fits Instagram bio (150), PUBG name (14), WhatsApp status (139), TikTok bio (80) & 20+ platform limits. Live count!',
    alternates: { canonical: '/tool/character-counter' },
    openGraph: {
        title: 'Character Counter for Instagram, PUBG, WhatsApp & More',
        description: 'Count characters and check if your text fits 24 platform limits. Instagram, PUBG, WhatsApp, TikTok & more. Free!',
        url: `${SITE_URL}/tool/character-counter`,
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
