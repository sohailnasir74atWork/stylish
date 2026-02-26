import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Strikethrough Text Generator — S̶t̶r̶i̶k̶e̶ & Text Effects',
    description: 'Add strikethrough, underline, overline, slash, wavy & dotted effects to your text. 9 Unicode text effects that work everywhere. Copy & paste instantly!',
    alternates: { canonical: '/tool/strikethrough' },
    openGraph: {
        title: 'Strikethrough & Text Effects Generator',
        description: '9 text effects: strikethrough, underline, overline, slash, wavy, dotted & more. Copy & paste anywhere!',
        url: `${SITE_URL}/tool/strikethrough`,
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
