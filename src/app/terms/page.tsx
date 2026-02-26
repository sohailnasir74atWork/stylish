import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Terms of Service for ${SITE_NAME}. Read our terms and conditions for using our stylish name generator.`,
};

export default function TermsPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Terms of Service
                    </span>
                </h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: February 25, 2026</p>

                <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                        <p>By accessing and using {SITE_NAME} ({SITE_URL}), you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
                        <p>{SITE_NAME} provides a free online tool for generating stylish names using Unicode characters. The service is provided &quot;as is&quot; and is available for personal and non-commercial use.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. Use of Service</h2>
                        <p>You agree to use {SITE_NAME} responsibly and not to:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>Use the service for any illegal or unauthorized purpose</li>
                            <li>Generate content that is offensive, harmful, or violates others&apos; rights</li>
                            <li>Attempt to disrupt or manipulate the service</li>
                            <li>Use automated tools to scrape or overload the service</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
                        <p>The website design, code, and content are owned by {SITE_NAME}. The Unicode characters generated are part of the Unicode standard and are freely available for anyone to use.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. Disclaimer</h2>
                        <p>{SITE_NAME} is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the generated text will work on all platforms, as some platforms may have restrictions on certain Unicode characters.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
                        <p>We shall not be liable for any damages arising from the use of our service. This includes but is not limited to issues with character compatibility on specific platforms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">7. Changes to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
                        <p>If you have any questions about these Terms, please contact us through our website.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
