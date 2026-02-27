'use client';

import { useState, useCallback, useEffect } from 'react';
import { MAX_INPUT_LENGTH, DEFAULT_INPUT } from '@/lib/constants';

interface TextInputProps {
    onTextChange: (text: string) => void;
    defaultValue?: string;
    placeholder?: string;
    value?: string; // controlled from parent
}

export default function TextInput({ onTextChange, defaultValue, placeholder, value }: TextInputProps) {
    const [text, setText] = useState(defaultValue || '');

    // Sync with external value prop
    useEffect(() => {
        if (value !== undefined && value !== text) {
            setText(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.slice(0, MAX_INPUT_LENGTH);
        setText(value);
        onTextChange(value);
    }, [onTextChange]);

    const handleClear = useCallback(() => {
        setText('');
        onTextChange('');
    }, [onTextChange]);

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-60 group-focus-within:opacity-75 transition-opacity duration-500 animate-glow" />

                <div className="relative bg-[rgba(15,15,40,0.95)] rounded-2xl p-1">
                    <div className="flex items-center gap-2">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={text}
                                onChange={handleChange}
                                placeholder={placeholder || `Type your name... (e.g., ${DEFAULT_INPUT})`}
                                className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-transparent text-white text-base sm:text-lg placeholder-gray-500 focus:outline-none rounded-xl"
                                maxLength={MAX_INPUT_LENGTH}
                                autoFocus
                            />
                            {text && (
                                <button
                                    onClick={handleClear}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                                    aria-label="Clear"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <button
                            onClick={() => {
                                onTextChange(text || DEFAULT_INPUT);
                                setTimeout(() => {
                                    document.getElementById('style-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }}
                            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 whitespace-nowrap text-sm sm:text-base"
                        >
                            ✨ Generate
                        </button>
                    </div>
                </div>
            </div>

            {/* Character count */}
            <div className="flex justify-between items-center mt-1.5 sm:mt-2 px-2">
                <p className="text-xs text-gray-500 hidden sm:block">
                    Type your name to see 1000+ stylish variations instantly
                </p>
                <span className="text-xs text-gray-600 ml-auto">
                    {text.length}/{MAX_INPUT_LENGTH}
                </span>
            </div>
        </div>
    );
}
