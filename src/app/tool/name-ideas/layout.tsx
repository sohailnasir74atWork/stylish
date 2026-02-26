import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Top Profile Names | 800+ Amazing Gaming, Attitude & Cool Name Ideas 🔥',
    description: 'Browse 800+ trending profile names organized by mood — Gaming, Sad, Happy, Attitude, Love, Cool, Mafia, Anime, PUBG, Free Fire & more. Click any name to generate stylish versions!',
};

export default function NameIdeasLayout({ children }: { children: React.ReactNode }) {
    return children;
}
