import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Upside Down & Mirror Text Generator — Flip Your Text',
    description: 'Flip your text upside down or mirror it instantly! Works on WhatsApp, Instagram, Discord, TikTok & more. Free, no sign-up needed. Just type and copy!',
    alternates: { canonical: '/tool/mirror-text' },
    openGraph: {
        title: 'Upside Down & Mirror Text Generator',
        description: 'Flip text upside down or mirror it. Copy & paste on WhatsApp, Instagram, Discord & more. Free!',
        url: `${SITE_URL}/tool/mirror-text`,
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
