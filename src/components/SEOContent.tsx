interface SEOContentProps {
    title: string;
    content: string;
    faqItems?: { question: string; answer: string }[];
}

export default function SEOContent({ title, content, faqItems }: SEOContentProps) {
    return (
        <section className="mt-16 max-w-4xl mx-auto">
            {/* Main content */}
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-black/8 dark:border-white/10 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
                <div
                    className="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>

            {/* FAQ Section */}
            {faqItems && faqItems.length > 0 && (
                <div className="mt-8 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-black/8 dark:border-white/10 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">❓ Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <details key={i} className="group">
                                <summary className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-black/5 dark:bg-white/10 transition-colors">
                                    <span className="font-medium text-white pr-4">{item.question}</span>
                                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-4 pb-4 pt-2 text-sm text-gray-400 leading-relaxed">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* FAQ Schema */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'FAQPage',
                                mainEntity: faqItems.map(item => ({
                                    '@type': 'Question',
                                    name: item.question,
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: item.answer,
                                    },
                                })),
                            }),
                        }}
                    />
                </div>
            )}
        </section>
    );
}
