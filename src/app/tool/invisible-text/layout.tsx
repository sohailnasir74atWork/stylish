import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Invisible Text Generator — Blank Names for PUBG, WhatsApp & More',
    description: 'Copy invisible characters and blank text for PUBG, Free Fire, WhatsApp, Instagram & Discord. 6 types of invisible Unicode characters that work everywhere.',
    alternates: { canonical: '/tool/invisible-text' },
    openGraph: {
        title: 'Invisible Text Generator — Blank Names for Games & Social Media',
        description: 'Copy invisible characters and blank text for PUBG, Free Fire, WhatsApp, Instagram & Discord. Works everywhere!',
        url: `${SITE_URL}/tool/invisible-text`,
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
