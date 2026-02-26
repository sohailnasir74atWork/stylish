import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Favorites | Saved Stylish Names Collection 💾',
    description: 'View and manage your saved stylish names collection. Organize your favorite Unicode fonts, symbols, and decorated names. Free copy and paste!',
};

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
