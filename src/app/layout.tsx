import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { LocaleProvider } from "@/hooks/useLocale";
import { ThemeProvider } from "@/hooks/useTheme";
import { isRtl, buildAlternateLanguages } from "@/lib/i18n";
import { getLocaleDictionary } from "@/lib/getLocale";

// Map short locale codes to OG locale format
const ogLocaleMap: Record<string, string> = {
  en: 'en_US', de: 'de_DE', fr: 'fr_FR', es: 'es_ES',
  pt: 'pt_BR', it: 'it_IT', tr: 'tr_TR', ar: 'ar_SA',
  id: 'id_ID', ja: 'ja_JP', nl: 'nl_NL',
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});



export async function generateMetadata(): Promise<Metadata> {
  const { locale, dictionary: t } = await getLocaleDictionary();
  const languages = buildAlternateLanguages('/');

  return {
    title: {
      default: `${t.heroTitle} (Free) — 1000+ Fancy Fonts ✨`,
      template: `%s | ${t.siteName}`,
    },
    description: t.metaDescription,
    keywords: [
      // Primary
      'stylish name', 'stylish name generator', 'stylish name maker', 'stylish name design',
      // Western search vocabulary
      'fancy text generator', 'cool font generator', 'cool fonts',
      'aesthetic fonts', 'aesthetic font generator',
      'instagram font generator', 'instagram fonts', 'cursive text generator',
      'bold italic text', 'bubble letters', 'small caps generator',
      'unicode fonts', 'copy paste fonts', 'font changer',
      // Platform-specific
      'instagram stylish name', 'stylish name for instagram',
      'tiktok stylish name', 'stylish name for tiktok',
      'whatsapp stylish name', 'discord name generator',
      'fb stylish name maker', 'stylish name for youtube channel',
      // Gaming
      'free fire stylish name', 'ff stylish name', 'free fire name',
      'pubg stylish name', 'pubg name generator', 'bgmi stylish name',
      'gaming name generator',
      // Audience
      'stylish name for boy', 'stylish name for girl',
      'beautiful stylish name', 'cool name generator', 'fancy name maker',
      // Romanized variants (PK/IN/BD)
      'stylish naam', 'naam style', 'name style font', 'name style',
      // Tools
      'stylish text generator', 'stylish text name',
      'invisible text', 'zalgo text generator', 'text repeater',
      'strikethrough text', 'mirror text', 'upside down text',
    ],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: '/',
      languages,
    },
    openGraph: {
      title: `${t.heroTitle} ✨ 1000+ Fancy Fonts (Free)`,
      description: t.metaDescription,
      url: SITE_URL,
      siteName: t.siteName,
      type: 'website',
      locale: ogLocaleMap[locale] || 'en_US',
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${t.siteName} — ${t.heroTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.heroTitle} ✨ 1000+ Fancy Fonts (Free)`,
      description: t.metaDescription,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    category: 'technology',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, dictionary } = await getLocaleDictionary();
  const rtl = isRtl(locale);

  return (
    <html lang={locale} dir={rtl ? 'rtl' : 'ltr'} className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='light'?'light':t==='dark'?'dark':window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(d);document.documentElement.setAttribute('data-theme',d)}catch(e){}})()` }} />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        {/* Preconnect hints — speed up AdSense & fonts */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Google AdSense Auto Ads */}
        <meta name="google-adsense-account" content="ca-pub-3701208411582706" />
        {/* Hreflang tags are emitted per-page via Metadata API (alternates.languages) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: dictionary.siteName,
              description: dictionary.siteDescription,
              url: SITE_URL,
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        {/* S1: FAQPage schema removed here — SEOContent component handles it per-page */}
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8CJ604KVBN"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8CJ604KVBN');`}
        </Script>

        {/* P3: AdSense loaded via next/script with lazyOnload for better LCP */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3701208411582706"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        <LocaleProvider locale={locale}>
          <ThemeProvider>
            <Header />

            <main className="flex-1">{children}</main>
            <Footer locale={locale} />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
