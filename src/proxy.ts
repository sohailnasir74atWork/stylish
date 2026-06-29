import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip static files, API routes, and _next
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/favicon') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Check if the pathname starts with a non-default locale
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    // If default locale is explicitly in URL, redirect to remove it (avoid duplicate content)
    if (firstSegment === defaultLocale) {
        const newPathname = '/' + segments.slice(1).join('/');
        return NextResponse.redirect(new URL(newPathname || '/', request.url), 301);
    }

    if (firstSegment && isValidLocale(firstSegment) && firstSegment !== defaultLocale) {
        // Valid non-default locale — rewrite to the same path without the locale prefix
        // The locale is passed via a header so components can read it
        const pathWithoutLocale = '/' + segments.slice(1).join('/') || '/';
        const url = request.nextUrl.clone();
        url.pathname = pathWithoutLocale;

        const response = NextResponse.rewrite(url);
        response.headers.set('x-locale', firstSegment);
        // Keep only English indexed during the AdSense review (and beyond, until non-EN
        // pages get genuinely localized content). Non-default locale URLs render identical
        // English copy under an English canonical, so we explicitly noindex them here —
        // the strong, Google-supported header signal. `follow` preserves link equity.
        // To re-enable a locale after approval, remove this header (mirrors adopt-me's rollback).
        response.headers.set('X-Robots-Tag', 'noindex, follow');
        response.cookies.set('locale', firstSegment, { path: '/', maxAge: 60 * 60 * 24 * 365 });
        return response;
    }

    // No locale prefix — serve default English
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
