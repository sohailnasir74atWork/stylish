'use client';

import dynamic from 'next/dynamic';

const AdUnit = dynamic(() => import('@/components/AdUnit'), { ssr: false });

/** Sticky bottom ad that appears on ALL pages */
export default function StickyAd() {
    return <AdUnit format="sticky" />;
}
