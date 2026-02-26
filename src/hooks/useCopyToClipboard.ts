'use client';

import { useState, useCallback } from 'react';

export function useCopyToClipboard() {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const copy = useCallback(async (text: string, id: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
            return true;
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setCopiedId(id);
                setTimeout(() => setCopiedId(null), 2000);
                return true;
            } catch {
                return false;
            } finally {
                document.body.removeChild(textArea);
            }
        }
    }, []);

    return { copiedId, copy };
}
