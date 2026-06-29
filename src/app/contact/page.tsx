import { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { buildAlternateLanguages } from '@/lib/i18n';

const CONTACT_EMAIL = 'stylishnamesgen@gmail.com';

export const metadata: Metadata = {
    title: `Contact Us | ${SITE_NAME}`,
    description: `Get in touch with the ${SITE_NAME} team. Send us your questions, feedback, feature requests, or report an issue — we usually reply within 1–2 business days.`,
    alternates: {
        canonical: '/contact',
        languages: buildAlternateLanguages('/contact'),
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Contact {SITE_NAME}
                    </span>
                </h1>
                <p className="text-sm text-gray-500 mb-8">We&apos;d love to hear from you.</p>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-white mb-3">📧 Email Us</h2>
                        <p>
                            Have a question, suggestion, or found a bug? The fastest way to reach us is by email. We read every message and usually reply within <strong className="text-white">1–2 business days</strong>.
                        </p>
                        <p className="mt-4">
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-200 font-medium hover:bg-purple-500/25 transition-colors break-all"
                            >
                                ✉️ {CONTACT_EMAIL}
                            </a>
                        </p>
                    </div>

                    <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-white mb-3">💡 What to Reach Out About</h2>
                        <ul className="space-y-2 list-disc list-inside">
                            <li><strong className="text-gray-900 dark:text-white">Feedback &amp; ideas</strong> — tell us which fonts, styles, or tools you&apos;d like to see next</li>
                            <li><strong className="text-gray-900 dark:text-white">Bug reports</strong> — let us know if a style doesn&apos;t copy correctly or a page looks broken</li>
                            <li><strong className="text-gray-900 dark:text-white">Business &amp; advertising</strong> — partnership, sponsorship, or ad enquiries</li>
                            <li><strong className="text-gray-900 dark:text-white">Privacy &amp; data</strong> — any questions about how we handle your data</li>
                            <li><strong className="text-gray-900 dark:text-white">Copyright / DMCA</strong> — report a content or trademark concern</li>
                        </ul>
                    </div>

                    <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-white mb-3">⏱️ Response Time</h2>
                        <p>
                            {SITE_NAME} is run by a small team, so please allow a little time for a reply. To help us help you faster, include as much detail as possible — the page URL, your device and browser, and a screenshot if something looks wrong.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
