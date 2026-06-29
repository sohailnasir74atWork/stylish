import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildAlternateLanguages } from '@/lib/i18n';
import { getAllBlogPosts } from '@/lib/content/blogPosts';

export const metadata: Metadata = {
    title: `Blog — Stylish Name & Font Guides | ${SITE_NAME}`,
    description: `Guides, tips, and tutorials on creating stylish names, fancy fonts, and cool symbols for Instagram, gaming, WhatsApp, and more.`,
    alternates: {
        canonical: '/blog',
        languages: buildAlternateLanguages('/blog'),
    },
};

function formatDate(iso: string): string {
    return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
    });
}

export default function BlogIndexPage() {
    const posts = getAllBlogPosts();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${SITE_NAME} Blog`,
        url: `${SITE_URL}/blog`,
        description: 'Guides and tips on stylish names, fancy fonts, and cool symbols.',
        blogPost: posts.map(p => ({
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            url: `${SITE_URL}/blog/${p.slug}`,
        })),
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Stylish Names Blog
                    </span>
                </h1>
                <p className="text-gray-400 mb-10 max-w-2xl">
                    Guides, tips, and tutorials for making stylish names, fancy fonts, and cool symbols that work on Instagram, gaming profiles, WhatsApp, and more.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                    {posts.map(post => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6 hover:border-purple-500/30 hover:bg-purple-500/[0.04] transition-all"
                        >
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300">{post.category}</span>
                                <span>·</span>
                                <span>{formatDate(post.date)}</span>
                                <span>·</span>
                                <span>{post.readingMinutes} min read</span>
                            </div>
                            <h2 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">{post.description}</p>
                            <span className="inline-block mt-4 text-sm text-purple-300 group-hover:translate-x-1 transition-transform">
                                Read guide →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
