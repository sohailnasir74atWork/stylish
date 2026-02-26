import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Captions & Status Ideas — 165+ Ready to Copy for Instagram & WhatsApp',
    description: 'Browse 165+ captions & status ideas for Instagram, WhatsApp, TikTok & Facebook. Attitude, love, sad, funny, gaming, birthday & more. Tap to copy!',
    alternates: { canonical: '/tool/captions' },
    openGraph: {
        title: 'Captions & Status Ideas — Instagram, WhatsApp & More',
        description: '165+ ready-to-copy captions by mood. Attitude, love, sad, funny, gaming, birthday. Tap to copy!',
        url: `${SITE_URL}/tool/captions`,
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
