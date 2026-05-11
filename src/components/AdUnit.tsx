'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        adsbygoogle: Array<Record<string, unknown>>;
    }
}

const AD_CLIENT = 'ca-pub-3701208411582706';

const SLOTS = {
    sticky: {
        desktop: { slot: '1928676520', w: 728, h: 90 },
        mobile: { slot: '8066666974', w: 320, h: 50 },
    },
    inline: {
        desktop: { slot: '2838391026', w: 728, h: 90 },
        mobile: { slot: '8768941682', w: 320, h: 50 },
    },
} as const;

export default function AdUnit({ format }: { format: 'inline' | 'sticky' }) {
    const [dismissed, setDismissed] = useState(false);
    const pushed = useRef(false);

    useEffect(() => {
        if (pushed.current || dismissed) return;
        pushed.current = true;
        // Push once for each <ins> tag (desktop + mobile)
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { }
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { }
    }, [dismissed]);

    if (dismissed) return null;

    const desktop = SLOTS[format].desktop;
    const mobile = SLOTS[format].mobile;

    const desktopIns = (
        <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: `${desktop.w}px`, height: `${desktop.h}px` }}
            data-ad-client={AD_CLIENT}
            data-ad-slot={desktop.slot}
        />
    );

    const mobileIns = (
        <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: `${mobile.w}px`, height: `${mobile.h}px` }}
            data-ad-client={AD_CLIENT}
            data-ad-slot={mobile.slot}
        />
    );

    if (format === 'sticky') {
        return (
            <div className="fixed bottom-0 left-0 right-0 z-40">
                <div className="relative">
                    <button
                        onClick={() => setDismissed(true)}
                        className="absolute -top-7 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-t-md hover:bg-black/90 transition-colors"
                        aria-label="Close ad"
                    >
                        ✕ Close ad
                    </button>
                    <div className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-center py-1">
                        <div className="desktopx">{desktopIns}</div>
                        <div className="mobilex">{mobileIns}</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center py-2">
            <div className="desktopx">{desktopIns}</div>
            <div className="mobilex">{mobileIns}</div>
        </div>
    );
}
