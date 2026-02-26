import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Style Builder | Custom Stylish Name Designer 🎨',
    description: 'Build your perfect stylish name by combining fonts, decorators, and symbols. Design custom Unicode names for gaming and social media. Free!',
};

export default function StyleBuilderLayout({ children }: { children: React.ReactNode }) {
    return children;
}
