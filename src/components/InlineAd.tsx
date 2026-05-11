'use client';

import dynamic from 'next/dynamic';

const AdUnit = dynamic(() => import('@/components/AdUnit'), { ssr: false });

/** Inline ad that appears on ALL pages below header area */
export default function InlineAd() {
    return (
        <div
            className="px-4 sm:px-6 max-w-3xl mx-auto my-3"
            style={{ minHeight: '62px' }} // Reserve space: 50px ad + 12px padding (mobile)
        >
            <AdUnit format="inline" />
        </div>
    );
}
