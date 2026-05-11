'use client';

import { useState, useMemo } from 'react';
import StylePicker from '@/components/StylePicker';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import SEOContent from '@/components/SEOContent';
import { useLocale } from '@/lib/useLocale';
import { getTranslatedSEO } from '@/lib/seoTranslations';
import { getTranslatedUI } from '@/lib/uiTranslations';

interface BioTemplate {
    id: string;
    name: string;
    platform: string;
    emoji: string;
    fields: { label: string; placeholder: string }[];
}

const templates: BioTemplate[] = [
    {
        id: 'instagram', name: 'Instagram Bio', platform: 'Instagram', emoji: '📸',
        fields: [
            { label: 'Name/Title', placeholder: 'Your brand name' },
            { label: 'Tagline', placeholder: 'Digital creator ✨' },
            { label: 'Location', placeholder: '📍 New York, NY' },
            { label: 'CTA / Link Label', placeholder: '🔗 Link in bio 👇' },
        ],
    },
    {
        id: 'tiktok', name: 'TikTok Bio', platform: 'TikTok', emoji: '🎵',
        fields: [
            { label: 'Display Name', placeholder: 'Your creative name' },
            { label: 'Bio Line 1', placeholder: '🎬 Content Creator' },
            { label: 'Bio Line 2', placeholder: '✨ Follow for more!' },
        ],
    },
    {
        id: 'discord', name: 'Discord About Me', platform: 'Discord', emoji: '🎮',
        fields: [
            { label: 'Username Display', placeholder: 'Your gamer tag' },
            { label: 'Status', placeholder: '🎮 Gaming is life' },
            { label: 'About', placeholder: 'Developer | Gamer | Artist' },
            { label: 'Server Invite', placeholder: '💬 Join my server!' },
        ],
    },
    {
        id: 'youtube', name: 'YouTube Channel', platform: 'YouTube', emoji: '▶️',
        fields: [
            { label: 'Channel Name', placeholder: 'Your channel' },
            { label: 'Description', placeholder: '🎥 New videos every week' },
            { label: 'Content Type', placeholder: 'Gaming | Tech | Vlogs' },
            { label: 'CTA', placeholder: '🔔 Subscribe & Ring the bell!' },
        ],
    },
    {
        id: 'twitter', name: 'Twitter/X Bio', platform: 'Twitter/X', emoji: '🐦',
        fields: [
            { label: 'Display Name', placeholder: 'Your name' },
            { label: 'Bio', placeholder: 'Thoughts & vibes ✨' },
            { label: 'Interests', placeholder: 'Tech | AI | Design' },
        ],
    },
    {
        id: 'gaming', name: 'Gaming Profile', platform: 'Gaming', emoji: '🕹️',
        fields: [
            { label: 'Clan / Team', placeholder: '꧁TEAM NAME꧂' },
            { label: 'Player Name', placeholder: 'Your IGN' },
            { label: 'Rank / Level', placeholder: '🏆 Legendary' },
            { label: 'Main Game', placeholder: '🎯 PUBG | Free Fire' },
        ],
    },
];

export default function BioGeneratorPage() {
    const locale = useLocale();
    const toolUI = getTranslatedUI(locale, 'bio-generator');
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
    const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
    // For the "name" field (first field), we use StylePicker
    const [styledName, setStyledName] = useState('');
    const { copiedId, copy } = useCopyToClipboard();

    const updateField = (index: number, value: string) => {
        setFieldValues(prev => ({ ...prev, [`${selectedTemplate.id}-${index}`]: value }));
    };

    const getFieldValue = (index: number) => {
        return fieldValues[`${selectedTemplate.id}-${index}`] || '';
    };

    const nameFieldText = getFieldValue(0) || selectedTemplate.fields[0].placeholder;

    const generatedBio = useMemo(() => {
        const lines = selectedTemplate.fields.map((field, i) => {
            if (i === 0) {
                // First field = name — use styled version
                return styledName || nameFieldText;
            }
            return getFieldValue(i) || field.placeholder;
        });
        return lines.join('\n');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTemplate, fieldValues, styledName, nameFieldText]);

    const isCopied = copiedId === 'bio-result';

    return (
        <div className="min-h-screen">
            <section className="relative py-10 sm:py-14 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        📝 {toolUI?.name || 'Bio Template Generator'}
                    </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    Create stunning social media bios with any stylish font + decorators. Paste from the generator or pick a style!
                </p>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                {/* Template Picker */}
                <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Choose Platform</p>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {templates.map(t => (
                            <button
                                key={t.id}
                                onClick={() => setSelectedTemplate(t)}
                                className={`p-3 rounded-xl text-center transition-all border ${selectedTemplate.id === t.id
                                    ? 'bg-purple-600/20 border-purple-500/50 shadow-lg shadow-purple-500/10'
                                    : 'bg-white/[0.03] border-black/8 dark:border-white/10 hover:bg-white/8'
                                    }`}
                            >
                                <span className="text-2xl block">{t.emoji}</span>
                                <span className="text-[10px] text-gray-400 mt-1 block">{t.platform}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Form + Style Picker */}
                    <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500">Bio Fields</p>
                        {selectedTemplate.fields.map((field, i) => (
                            <div key={`${selectedTemplate.id}-${i}`}>
                                <label className="block text-xs text-gray-500 mb-1">{field.label}{i === 0 && ' (gets styled ↓)'}</label>
                                <input
                                    type="text"
                                    value={getFieldValue(i)}
                                    onChange={e => updateField(i, e.target.value)}
                                    placeholder={field.placeholder}
                                    className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                                />
                            </div>
                        ))}

                        {/* Style Picker for the name field */}
                        <div className="mt-4 p-4 bg-white/[0.02] rounded-xl border border-purple-500/10">
                            <p className="text-xs text-purple-400 font-medium mb-3">🎨 Style the &quot;{selectedTemplate.fields[0].label}&quot; field:</p>
                            <StylePicker
                                inputText={nameFieldText}
                                styledText={styledName || nameFieldText}
                                onStyled={setStyledName}
                                compact
                            />
                        </div>
                    </div>

                    {/* Right: Preview */}
                    <div className="lg:sticky lg:top-[120px] lg:self-start">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Preview</p>
                        <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/8 dark:border-white/10 p-6 min-h-[300px]">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xl">{selectedTemplate.emoji}</span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">{selectedTemplate.name}</span>
                            </div>
                            <div className="bg-white/[0.03] rounded-xl p-4">
                                <pre className="text-white text-sm whitespace-pre-wrap break-all font-sans leading-relaxed" dir="auto">
                                    {generatedBio}
                                </pre>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={() => copy(generatedBio, 'bio-result')}
                                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${isCopied
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                                        }`}
                                >
                                    {isCopied ? '✓ Bio Copied!' : '📋 Copy Full Bio'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* SEO Content - Locale Aware */}
            <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
                {(() => {
                    const seo = getTranslatedSEO(locale, 'bio-generator');
                    if (!seo) return null;
                    return <SEOContent title="" content={seo.seoContent} faqItems={seo.faqItems} />;
                })()}
            </section>
        </div>
    );
}
