import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Live Preview Mockup | See Your Name on Real Platforms 📱',
    description: 'Preview your stylish name on real platform interfaces — Instagram, PUBG, Discord, WhatsApp, TikTok, and Free Fire. See before you commit!',
};

export default function LivePreviewLayout({ children }: { children: React.ReactNode }) {
    return children;
}
