import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Name Compatibility Checker | Test Your Stylish Name 🧪',
    description: 'Check if your stylish name works on Instagram, PUBG, Free Fire, Discord, and 15+ platforms before committing. Free compatibility testing!',
};

export default function CompatibilityCheckerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
