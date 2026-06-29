import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildAlternateLanguages } from '@/lib/i18n';
import { getAllBlogSlugs, getBlogPost } from '@/lib/content/blogPosts';

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllBlogSlugs().map(slug => ({ slug }));
}

function formatDate(iso: string): string {
    return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
    });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};

    const url = `${SITE_URL}/blog/${post.slug}`;
    return {
        title: `${post.title} | ${SITE_NAME}`,
        description: post.description,
        alternates: {
            canonical: `/blog/${post.slug}`,
            languages: buildAlternateLanguages(`/blog/${post.slug}`),
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url,
            siteName: SITE_NAME,
            type: 'article',
            publishedTime: post.date,
            images: [`${SITE_URL}/og-image.png`],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [`${SITE_URL}/og-image.png`],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    const url = `${SITE_URL}/blog/${post.slug}`;

    const blogPostingLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        image: `${SITE_URL}/og-image.png`,
    };

    const breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

            <article className="max-w-3xl mx-auto">
                {/* Breadcrumb */}
                <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-purple-300">Home</Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-purple-300">Blog</Link>
                    <span>/</span>
                    <span className="text-gray-400 truncate">{post.title}</span>
                </nav>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300">{post.category}</span>
                    <span>·</span>
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingMinutes} min read</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight text-white">{post.title}</h1>

                <div
                    className="prose prose-invert max-w-none text-gray-300 leading-relaxed
                        prose-headings:text-white prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
                        prose-a:text-purple-300 hover:prose-a:text-purple-200
                        prose-strong:text-white prose-li:my-1"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />

                <div className="mt-12 pt-8 border-t border-white/10">
                    <Link href="/blog" className="text-sm text-purple-300 hover:text-purple-200">← Back to all guides</Link>
                </div>
            </article>
        </div>
    );
}
