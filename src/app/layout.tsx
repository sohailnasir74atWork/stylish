import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { LocaleProvider } from "@/hooks/useLocale";
import { locales, defaultLocale, isRtl } from "@/lib/i18n";
import { getLocaleDictionary } from "@/lib/getLocale";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Force dynamic rendering so locale is read from cookies/headers on every request
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const { dictionary: t } = await getLocaleDictionary();

  return {
    title: {
      default: `${t.siteName} — ${t.heroTitle} ✨ Copy & Paste`,
      template: `%s | ${t.siteName}`,
    },
    description: t.metaDescription,
    keywords: [
      'stylish name', 'stylish name generator', 'stylish name design',
      'fancy text generator', 'cool fonts', 'copy paste fonts',
      'instagram stylish name', 'stylish name for instagram',
      'free fire stylish name', 'ff stylish name', 'free fire name',
      'pubg stylish name', 'pubg name generator',
      'tiktok stylish name', 'stylish name for tiktok',
      'fb stylish name maker', 'bgmi stylish name',
      'stylish name for boy', 'stylish name for girl',
      'beautiful stylish name', 'cool name generator',
      'stylish text generator', 'stylish text name',
      'gaming name generator', 'unicode fonts', 'fancy name maker',
      'whatsapp stylish name', 'discord name generator',
      'invisible text', 'zalgo text generator', 'text repeater',
      'strikethrough text', 'mirror text', 'upside down text',
      'stylish name for youtube channel', 'name style',
    ],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: `${t.siteName} — ${t.heroTitle} ✨`,
      description: t.metaDescription,
      url: SITE_URL,
      siteName: t.siteName,
      type: 'website',
      locale: 'en_US',
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
      title: `${t.siteName} — ${t.heroTitle} ✨`,
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
    <html lang={locale} dir={rtl ? 'rtl' : 'ltr'} className={inter.variable}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        {/* Google AdSense Auto Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3701208411582706"
          crossOrigin="anonymous"
        />
        {/* Hreflang tags for all locales */}
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        {locales.map(loc => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={loc === defaultLocale ? SITE_URL : `${SITE_URL}/${loc}`}
          />
        ))}
        <script
          type="application/ld+json"
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "2450",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: locale === 'en' ? "What is a stylish name generator?" : `${dictionary.heroTitle}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: dictionary.metaDescription,
                  },
                },
                {
                  "@type": "Question",
                  name: locale === 'en' ? "Is this stylish name generator free?" : `${dictionary.siteName} — free?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: locale === 'en'
                      ? "Yes, 100% free! No sign-up, no downloads, no limits. Just type your name and copy any style you like."
                      : dictionary.siteDescription,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <LocaleProvider locale={locale}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
