import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildAlternateLanguages } from '@/lib/i18n';


export const metadata: Metadata = {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy Policy for ${SITE_NAME}. Learn how we handle your data and protect your privacy.`,
    alternates: {
        canonical: '/privacy-policy',
        languages: buildAlternateLanguages('/privacy-policy'),
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Privacy Policy
                    </span>
                </h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: February 25, 2026</p>

                <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6 sm:p-8 space-y-6 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
                        <p>Welcome to {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at {SITE_URL}.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
                        <p>We do not collect personal information from our users. Our stylish name generator works entirely in your browser. The text you type is processed locally and is never sent to our servers.</p>
                        <p className="mt-2">We may collect anonymous usage data through:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>Google Analytics (anonymous traffic data)</li>
                            <li>Browser type and version</li>
                            <li>Pages visited and time spent</li>
                            <li>Referring website</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. Local Storage</h2>
                        <p>We use your browser&apos;s localStorage to save your recently copied names for your convenience. This data is stored only on your device and is never transmitted to our servers. You can clear this data at any time.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
                        <p>We may use cookies for analytics and advertising purposes. Third-party services like Google Analytics and Google AdSense may place cookies on your browser. You can control cookie settings through your browser preferences.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. Advertising</h2>
                        <p>We may display advertisements through third-party advertising networks, including Google AdSense. These networks may use cookies and similar technologies to serve relevant ads based on your browsing history.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">7. Children&apos;s Privacy</h2>
                        <p>Our website is suitable for all ages. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal data, please contact us.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please email us at <a href="mailto:stylishnamesgen@gmail.com" className="text-purple-300 hover:text-purple-200 underline">stylishnamesgen@gmail.com</a> or use our <a href="/contact" className="text-purple-300 hover:text-purple-200 underline">Contact page</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
