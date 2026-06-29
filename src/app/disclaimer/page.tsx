import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildAlternateLanguages } from '@/lib/i18n';

export const metadata: Metadata = {
    title: `Disclaimer | ${SITE_NAME}`,
    description: `Disclaimer for ${SITE_NAME}. Read about the use of our free font generator, third-party trademarks, advertising, and limitation of liability.`,
    alternates: {
        canonical: '/disclaimer',
        languages: buildAlternateLanguages('/disclaimer'),
    },
};

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Disclaimer
                    </span>
                </h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: June 21, 2026</p>

                <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6 sm:p-8 space-y-6 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. General Information</h2>
                        <p>The information and tools provided by {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) on {SITE_URL} are for general informational and entertainment purposes only. All content and font styles are provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, or completeness of any information or output.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. Free Tool &amp; Unicode Output</h2>
                        <p>{SITE_NAME} is a free Unicode text generator. The &quot;fonts&quot; it produces are standard Unicode characters, not installed typefaces. How they display depends on the device, app, or platform you paste them into. Some characters may not be supported everywhere, and certain apps or games may filter or reject special characters. We cannot guarantee that any generated name or style will be accepted by a specific platform.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. Third-Party Trademarks</h2>
                        <p>{SITE_NAME} is an independent tool and is <strong className="text-white">not affiliated with, endorsed by, or sponsored by</strong> Instagram, TikTok, WhatsApp, Facebook, Discord, YouTube, PUBG, Free Fire, BGMI, Fortnite, Roblox, or any other platform mentioned on this site. All product names, logos, brands, and trademarks are the property of their respective owners and are used for identification and descriptive purposes only.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. Responsible Use</h2>
                        <p>You are responsible for the names and text you create and where you use them. Please follow the terms of service and naming rules of any platform where you use a generated name. We are not responsible for any account action, suspension, or other consequence resulting from names or text created with this tool.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. External Links</h2>
                        <p>This site may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, or completeness of any information on these external sites and are not responsible for their content.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">6. Advertising</h2>
                        <p>We display advertisements through third-party advertising networks, including Google AdSense. Advertisers and ad networks are solely responsible for the content of their advertisements. The appearance of an ad on {SITE_NAME} does not constitute an endorsement of the advertised product or service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">7. Limitation of Liability</h2>
                        <p>Under no circumstance shall we be liable for any loss or damage of any kind incurred as a result of the use of this site or reliance on any information or tool provided. Your use of {SITE_NAME} is solely at your own risk.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
                        <p>If you have any questions about this Disclaimer, please reach us via our <a href="/contact" className="text-purple-300 hover:text-purple-200 underline">Contact page</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
