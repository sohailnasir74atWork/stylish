import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ===== Old WordPress URLs → New URLs (301 permanent redirects) =====
      // These preserve SEO rankings from the old stylish-names.com site

      // Old page URLs
      {
        source: '/facebook-stylish-name',
        destination: '/facebook',
        permanent: true,
      },
      {
        source: '/facebook-stylish-name/',
        destination: '/facebook',
        permanent: true,
      },
      {
        source: '/instagram-stylish-name',
        destination: '/instagram',
        permanent: true,
      },
      {
        source: '/instagram-stylish-name/',
        destination: '/instagram',
        permanent: true,
      },
      {
        source: '/ff-name-style',
        destination: '/free-fire',
        permanent: true,
      },
      {
        source: '/ff-name-style/',
        destination: '/free-fire',
        permanent: true,
      },
      {
        source: '/cool-fonts-generator',
        destination: '/cool',
        permanent: true,
      },
      {
        source: '/cool-fonts-generator/',
        destination: '/cool',
        permanent: true,
      },
      {
        source: '/aesthetic-font',
        destination: '/tool/aesthetic',
        permanent: true,
      },
      {
        source: '/aesthetic-font/',
        destination: '/tool/aesthetic',
        permanent: true,
      },

      // Old blog post URLs → redirect to homepage (content no longer exists)
      {
        source: '/mastering-blox-fruits-trading-a-guide-to-smarter-decisions-with-fruits-values-calculator',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mastering-blox-fruits-trading-a-guide-to-smarter-decisions-with-fruits-values-calculator/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/7-font-trends-to-level-up-your-stylish-name-designs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/7-font-trends-to-level-up-your-stylish-name-designs/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/emotional-font-birthday-font-heart-font',
        destination: '/',
        permanent: true,
      },
      {
        source: '/emotional-font-birthday-font-heart-font/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-brand-your-social-media-profiles-with-unique-fonts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-brand-your-social-media-profiles-with-unique-fonts/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/the-psychology-of-fonts-in-marketing',
        destination: '/',
        permanent: true,
      },
      {
        source: '/the-psychology-of-fonts-in-marketing/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-trends-in-font-styles-for-2024',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-trends-in-font-styles-for-2024/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/evolution-of-font-design',
        destination: '/',
        permanent: true,
      },
      {
        source: '/evolution-of-font-design/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/the-art-of-choosing-fonts-for-book-covers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/the-art-of-choosing-fonts-for-book-covers/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/typography-in-film-and-television-setting-the-scene-with-fonts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/typography-in-film-and-television-setting-the-scene-with-fonts/',
        destination: '/',
        permanent: true,
      },

      // ===== WordPress media URLs (still indexed in GSC) =====
      // Old /wp-content/uploads/* image URLs returned 404 after the migration.
      // Redirecting to homepage recovers indexed equity (Google treats 301 to / as
      // soft signal but doesn't lose the inbound link weight).
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },

      // ===== Old WP category/section URLs that the dynamic [category] route
      // was soft-404'ing (HTTP 200 with "Not Found" body). Redirecting kills the
      // soft-404 signal and recovers indexed equity.
      { source: '/values', destination: '/', permanent: true },
      { source: '/values/:path*', destination: '/', permanent: true },
      { source: '/calculator', destination: '/', permanent: true },
      { source: '/trades', destination: '/', permanent: true },
      // /news and /blog are now real content sections (do NOT redirect them).
      // Old WordPress /blogs URLs → forward their equity to the new /blog hub.
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/:path*', destination: '/blog', permanent: true },
      { source: '/group-name', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
