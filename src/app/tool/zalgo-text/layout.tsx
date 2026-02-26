import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Zalgo Text Generator — Creepy Glitch Text Maker',
    description: 'Create creepy, glitchy zalgo text that looks cursed or corrupted. Adjust intensity & direction. Copy and paste on Discord, WhatsApp, social media & more!',
    alternates: { canonical: '/tool/zalgo-text' },
    openGraph: {
        title: 'Zalgo Text Generator — Make Creepy Glitch Text',
        description: 'Turn your text into creepy, glitchy zalgo text. Adjustable intensity. Works on Discord, WhatsApp & all platforms.',
        url: `${SITE_URL}/tool/zalgo-text`,
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
