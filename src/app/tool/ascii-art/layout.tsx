import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'ASCII Art Generator | Block Letter Text Art 🔤',
    description: 'Convert text into large block-letter ASCII art. Create eye-catching text art for Discord, social media, and comments. Free copy paste!',
};

export default function AsciiArtLayout({ children }: { children: React.ReactNode }) {
    return children;
}
