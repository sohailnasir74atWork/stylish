import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Bio Template Generator | Stylish Social Media Bios 📝',
    description: 'Create stunning social media bios with stylish fonts for Instagram, TikTok, Discord, YouTube, and more. Customize and copy instantly!',
};

export default function BioGeneratorLayout({ children }: { children: React.ReactNode }) {
    return children;
}
