import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Share Card Generator | Download Stylish Name as Image 🖼️',
    description: 'Create beautiful gradient cards with your stylish name and download as PNG. Share your styled name as an image on social media!',
};

export default function ShareCardLayout({ children }: { children: React.ReactNode }) {
    return children;
}
