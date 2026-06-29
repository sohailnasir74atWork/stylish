// Tool page definitions for specific font generators

export interface ToolPage {
    slug: string;
    name: string;
    emoji: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    heroText: string;
    charMapCategory: string;
    seoContent?: string;
    faqItems?: { question: string; answer: string }[];
}

export const tools: ToolPage[] = [
    {
        slug: 'gothic',
        name: 'Gothic Font Generator',
        emoji: '☠',
        description: 'Dark & blackletter gothic fonts',
        metaTitle: 'Gothic Font Generator | Dark & Blackletter Fonts ☠',
        metaDescription: 'Generate gothic and blackletter fonts with our free tool. Create dark, medieval-style text for gaming, social media, and more. Copy and paste instantly!',
        heroText: 'Embrace the dark side with gothic blackletter fonts. Medieval-style text that adds mystery and power to any profile.',
        charMapCategory: 'gothic',
        seoContent: `<p>Our <strong>gothic font generator</strong> creates dark, medieval blackletter text that you can copy and paste anywhere. Gothic fonts are one of the most popular text styles for gaming profiles, social media bios, and anywhere you want to look powerful and mysterious. These fonts use Unicode characters, so they work on every device without installing anything.</p>

<h3>What Are Gothic Fonts?</h3>
<p>Gothic fonts (also called <strong>blackletter</strong> or <strong>Old English</strong> fonts) are a style of calligraphy from medieval Europe. They have thick strokes, sharp angles, and a dramatic look. Think of old manuscripts, metal band logos, or fantasy game titles. Our generator converts your regular text into these gothic Unicode characters instantly.</p>

<h3>Where to Use Gothic Text</h3>
<ul>
  <li><strong>Gaming names</strong> — PUBG, Free Fire, COD, and Fortnite profiles look amazing in gothic</li>
  <li><strong>Instagram bio</strong> — Stand out with a dark aesthetic bio</li>
  <li><strong>Discord</strong> — Gothic usernames are popular in gaming servers</li>
  <li><strong>WhatsApp status</strong> — Add mystery to your profile</li>
</ul>`,
        faqItems: [
            { question: 'What is a gothic font generator?', answer: 'A gothic font generator converts your regular text into blackletter (Old English) style Unicode characters. These look like medieval calligraphy and work on all devices and platforms without installing any fonts.' },
            { question: 'Do gothic fonts work in games?', answer: 'Yes! Gothic fonts use Unicode characters that work in PUBG, Free Fire, BGMI, and most mobile games. They are especially popular for dark and mysterious gaming names.' },
        ],
    },
    {
        slug: 'cursive',
        name: 'Cursive Font Generator',
        emoji: '✍️',
        description: 'Elegant cursive and script fonts',
        metaTitle: 'Cursive Font Generator | Elegant Handwriting Fonts ✍️',
        metaDescription: 'Create beautiful cursive and script fonts. Elegant handwriting-style text for Instagram, WhatsApp, and social media bios. Free copy and paste!',
        heroText: 'Add elegance to your text with beautiful cursive fonts. Handwriting-style scripts that look stunning anywhere.',
        charMapCategory: 'fancy',
        seoContent: `<p>Our <strong>cursive font generator</strong> turns your text into beautiful handwriting-style fonts. Cursive text looks elegant, personal, and eye-catching. It is the most popular font style for <strong>Instagram bios</strong>, <strong>WhatsApp profiles</strong>, and anywhere you want a classy look. No app download needed — just type, copy, and paste.</p>

<h3>Types of Cursive Fonts</h3>
<ul>
  <li><strong>Script cursive</strong> — Flowing, connected letters like real handwriting</li>
  <li><strong>Bold cursive</strong> — Thicker strokes for a stronger look</li>
  <li><strong>Italic cursive</strong> — Slightly tilted for an artistic feel</li>
  <li><strong>Decorative cursive</strong> — With additional flourishes and symbols</li>
</ul>

<h3>Why Cursive Fonts Are Popular</h3>
<p>Cursive is the go-to font for people who want their profile to look <strong>aesthetic</strong> and <strong>elegant</strong>. It works perfectly on Instagram display names, TikTok bios, and WhatsApp status. Cursive fonts make even a simple name look like art. Our generator creates multiple cursive styles so you can pick the one that fits your personality.</p>`,
        faqItems: [
            { question: 'How do I type in cursive font?', answer: 'You cannot type in cursive directly. Use our cursive font generator: type your text, and we convert it to cursive Unicode characters. Then copy and paste it anywhere.' },
            { question: 'Do cursive fonts work on Instagram?', answer: 'Yes! Cursive fonts use Unicode characters that Instagram fully supports. They work in your bio, display name, captions, and comments.' },
        ],
    },
    {
        slug: 'bubble',
        name: 'Bubble Text Generator',
        emoji: '🫧',
        description: 'Circled and bubble letter fonts',
        metaTitle: 'Bubble Text Generator | Ⓒⓘⓡⓒⓛⓔⓓ & 🅑🅤🅑🅑🅛🅔 Letters Copy Paste',
        metaDescription: 'Free bubble text generator. Turn text into Ⓒⓘⓡⓒⓛⓔⓓ and filled 🅑🅤🅑🅑🅛🅔 letters for Instagram, Discord, and playful posts. Copy and paste instantly.',
        heroText: 'Make your text pop with fun bubble letters! Circled, rounded, and playful fonts that add personality to your messages.',
        charMapCategory: 'bubble',
        seoContent: `<p>Our <strong>bubble text generator</strong> wraps every letter in a circle, turning your words into rounded <strong>Ⓒⓘⓡⓒⓛⓔⓓ</strong> or filled <strong>🅑🅤🅑🅑🅛🅔</strong> letters. It is fun, playful, and instantly recognizable — copy and paste it anywhere that supports Unicode.</p>

<h3>Two bubble styles</h3>
<ul>
  <li><strong>Outlined bubbles</strong> — Ⓐⓑⓒ — open circles around each letter, light and clean</li>
  <li><strong>Filled bubbles</strong> — 🅐🅑🅒 — solid dark circles for bold contrast</li>
</ul>

<h3>Where to use bubble letters</h3>
<p>Bubble text is popular for <strong>Instagram</strong> stories and bios, <strong>Discord</strong> nicknames, kids and gaming usernames, and any post where you want a cheerful, eye-catching vibe. The outlined style reads well at small sizes; the filled style pops against light backgrounds.</p>

<h3>Compatibility tips</h3>
<p>Outlined bubble letters are supported almost universally. The filled style relies on a slightly newer Unicode block, so on a few older devices certain letters may show a fallback box — if that happens, switch to the outlined style.</p>`,
        faqItems: [
            { question: "Do bubble letters work on Instagram?", answer: "Yes. Outlined bubble letters work in Instagram bios, names, captions, and comments. The filled style works on most modern phones; very old devices may not render every filled letter." },
            { question: "What is the difference between outlined and filled bubble text?", answer: "Outlined bubbles draw a ring around each letter; filled bubbles invert it to a solid circle with the letter knocked out. Outlined has wider device support." },
            { question: "Is the bubble text generator free?", answer: "Yes, it is free and needs no account. Generate and copy unlimited bubble text." },
        ],
    },
    {
        slug: 'emoji',
        name: 'Emoji Font Generator',
        emoji: '😍',
        description: 'Text with emoji-style decorations',
        metaTitle: 'Emoji Font Generator | Emoji Block Letters 😍',
        metaDescription: 'Generate emoji-style text and block letters. Fun and colorful text styles with emoji decorations. Free copy and paste font generator!',
        heroText: 'Turn your text into emoji block letters! Fun, colorful, and eye-catching styles perfect for social media posts.',
        charMapCategory: 'emoji',
        seoContent: `<p>Our <strong>emoji font generator</strong> turns ordinary words into playful, emoji-decorated text and colorful block letters you can copy and paste anywhere. Instead of a plain caption, your message gets sprinkled with expressive symbols and bold styling that makes posts pop. Everything is real Unicode, so it shows up the same on Instagram, Discord, WhatsApp, and your favorite games.</p>

<h3>What the emoji font generator creates</h3>
<p>This tool blends letters with emoji-style decorations and regional-indicator block characters to spell out your name or phrase in a fun, oversized way. It is perfect when a normal sentence feels too quiet and you want something cheerful and attention-grabbing without opening a design app.</p>

<h3>Fun ways to use emoji text</h3>
<ul>
  <li><strong>Instagram</strong> captions and stories that feel bright and lively</li>
  <li><strong>Discord</strong> messages and announcements with extra personality</li>
  <li><strong>WhatsApp</strong> status updates and group chats</li>
  <li><strong>Gaming</strong> profiles and lobby messages that stand out</li>
</ul>

<h3>Why people love it</h3>
<p>Emoji text instantly sets a mood — happy, hyped, romantic, or silly — without typing a single extra word. Because the output is copy-and-paste Unicode, there is nothing to install and nothing that breaks when you switch from your phone to your computer.</p>`,
        faqItems: [
            { question: "How does the emoji font generator work?", answer: "Type your text and the tool decorates it with emoji-style symbols and colorful block letters made from Unicode. Copy the result and paste it into any app that supports emoji." },
            { question: "Does emoji text work on Instagram and WhatsApp?", answer: "Yes. Emoji and the block characters are standard Unicode, so they display correctly in Instagram bios, captions, and comments as well as WhatsApp messages and status updates." },
            { question: "Is the emoji font generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy as much emoji text as you like." },
        ],
    },
    {
        slug: 'bold',
        name: 'Bold Text Generator',
        emoji: '💪',
        description: 'Bold and strong Unicode fonts',
        metaTitle: 'Bold Text Generator | Copy & Paste 𝗕𝗼𝗹𝗱 Fonts 💪',
        metaDescription: 'Free bold text generator. Convert text into 𝗯𝗼𝗹𝗱 and 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘 Unicode fonts for Instagram, Discord, and X (Twitter). Copy and paste instantly.',
        heroText: 'Make a bold statement with powerful Unicode fonts. Strong, eye-catching text that demands attention.',
        charMapCategory: 'bold',
        seoContent: `<p>Our <strong>bold text generator</strong> turns anything you type into thick, heavy <strong>𝗯𝗼𝗹𝗱 Unicode letters</strong> you can copy and paste straight into Instagram, X (Twitter), Discord, Facebook, or a LinkedIn headline. Because the output is real Unicode — not an image or an installed font — it keeps its weight everywhere, even in fields that normally strip formatting.</p>

<h3>Bold styles you can generate</h3>
<ul>
  <li><strong>𝗦𝗮𝗻𝘀-𝘀𝗲𝗿𝗶𝗳 𝗯𝗼𝗹𝗱</strong> — clean and modern, the most widely supported style</li>
  <li><strong>𝐒𝐞𝐫𝐢𝐟 𝐛𝐨𝐥𝐝</strong> — classic, newspaper-style weight</li>
  <li><strong>𝘽𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘</strong> — heavy and slanted for extra emphasis</li>
  <li><strong>Bold script</strong> — thick handwriting for a decorative look</li>
</ul>

<h3>Where bold text actually works</h3>
<p>Use it to make one line of your <strong>Instagram bio</strong> stand out, to write an attention-grabbing <strong>X (Twitter)</strong> post, to highlight your <strong>Discord</strong> username or status, or to add emphasis in <strong>WhatsApp</strong> messages. Most platforms render these characters natively on iOS, Android, Windows, and Mac — no app or keyboard required.</p>

<h3>A quick accessibility note</h3>
<p>Bold Unicode is perfect for a word or a short line, but screen readers announce each character by its formal Unicode name, so avoid setting whole paragraphs in it. Use it for emphasis, not body text.</p>`,
        faqItems: [
            { question: "Does bold text work on Instagram and X (Twitter)?", answer: "Yes. The bold characters are standard Unicode, so they display correctly in Instagram bios, captions, and comments, and in X (Twitter) posts and display names. Just copy and paste." },
            { question: "Why can't I just press Ctrl+B?", answer: "Instagram, TikTok, and most social apps have no bold button. This generator works around that by swapping your letters for bold Unicode characters that look bold everywhere, no formatting button required." },
            { question: "Is the bold text generator free?", answer: "Yes, completely free with no sign-up. Generate and copy as much bold text as you like." },
        ],
    },
    {
        slug: 'upside-down',
        name: 'Upside Down Text Generator',
        emoji: '🙃',
        description: 'Flipped and reversed text',
        metaTitle: 'Upside Down Text Generator | Flip Text ʇxǝʇ Copy Paste 🙃',
        metaDescription: 'Free upside down text generator. Flip your text to write ʇxǝʇ uʍop ǝpᴉsdn for Instagram, TikTok, and fun messages. Copy and paste instantly.',
        heroText: 'Flip your world upside down! Create inverted text that catches attention and adds a fun twist to your messages.',
        charMapCategory: 'weird',
        seoContent: `<p>Our <strong>upside down text generator</strong> flips your words so they read <strong>ʇxǝʇ uʍop ǝpᴉsdn</strong> — perfect for playful captions, pranks, and posts that make people tilt their phone. It uses special Unicode characters that look like flipped letters, so you can copy and paste the result anywhere.</p>

<h3>How does flipping text work?</h3>
<p>There is no real "upside down" button on your keyboard. Instead, the generator swaps each letter for a Unicode character that looks like its flipped version — for example, "e" becomes "ǝ" and "a" becomes "ɐ" — then reverses the order so the whole sentence reads correctly when turned over.</p>

<h3>Fun ways to use it</h3>
<ul>
  <li><strong>Instagram & TikTok</strong> captions that grab attention</li>
  <li><strong>X (Twitter)</strong> posts and replies for a comedic twist</li>
  <li><strong>Usernames and bios</strong> that look different from everyone else</li>
</ul>

<h3>Will it work everywhere?</h3>
<p>Most apps display flipped text fine. A few numbers and rare symbols have no true upside-down version, so the generator uses the closest match. For best results, keep it to letters and common punctuation.</p>`,
        faqItems: [
            { question: "How do I flip my text upside down?", answer: "Type your text in the box above and the generator instantly turns it upside down. Tap to copy, then paste it into any app — Instagram, TikTok, messages, or your bio." },
            { question: "Does upside down text work on Instagram?", answer: "Yes. The flipped characters are Unicode, so they display correctly in Instagram bios, captions, and comments, and on TikTok and X (Twitter)." },
            { question: "Is the upside down text generator free?", answer: "Yes, completely free with no sign-up. Flip and copy as much text as you want." },
        ],
    },
    {
        slug: 'glitch',
        name: 'Glitch Text Generator',
        emoji: '👾',
        description: 'Zalgo and glitch-style text',
        metaTitle: 'Glitch Text Generator | Cursed & Zalgo Text ⚡ Copy Paste',
        metaDescription: 'Free glitch text generator. Create cursed, corrupted Zalgo text for Discord, TikTok, and horror-themed posts. Copy and paste glitch text instantly.',
        heroText: 'Create eerie glitch effects with corrupted text styles. Perfect for horror themes, gaming, and making your text look hauntingly unique.',
        charMapCategory: 'weird',
        seoContent: `<p>Our <strong>glitch text generator</strong> (also called a <strong>Zalgo</strong> or "cursed text" generator) stacks layers of combining Unicode marks on top of your letters to create that creepy, corrupted, hacked-screen look. Type a word and it comes out dripping with chaotic glitch effects you can copy and paste anywhere.</p>

<h3>What is glitch / Zalgo text?</h3>
<p>Zalgo text is built from <strong>combining diacritical marks</strong> — tiny accent characters that normally sit above or below a letter. Pile dozens of them onto each character and the text appears to bleed and distort. It started with internet horror memes and is now a staple of <strong>Discord</strong> servers, <strong>TikTok</strong> edits, and Halloween posts.</p>

<h3>Where people use glitch text</h3>
<ul>
  <li><strong>Discord</strong> usernames, server names, and spooky announcements</li>
  <li><strong>TikTok</strong> and <strong>Instagram</strong> captions for horror or gaming edits</li>
  <li><strong>Gaming tags</strong> for a dark, intimidating profile</li>
</ul>

<h3>Good to know</h3>
<p>Because glitch text relies on heavy character stacking, some apps limit how many combining marks they render, and a few will clip extreme distortion. If a paste looks cut off, generate a lighter version. It works best on short names and titles rather than long sentences.</p>`,
        faqItems: [
            { question: "What is the difference between glitch text and Zalgo text?", answer: "They are the same thing. 'Zalgo' is the original meme name for text corrupted with stacked combining marks; 'glitch text' is the more common search term for the same effect." },
            { question: "Does glitch text work on Discord?", answer: "Yes. Discord renders combining Unicode marks, so glitch text works in usernames, server names, and messages. Very heavy distortion may be partially trimmed by some clients." },
            { question: "Will glitch text get my account flagged?", answer: "It is just standard Unicode, so it is safe to use. Some platforms discourage excessive special characters in legal-name fields, so use it where decorative names are allowed." },
        ],
    },
    {
        slug: 'small',
        name: 'Small Text Generator',
        emoji: '🔍',
        description: 'Tiny superscript and subscript text',
        metaTitle: 'Small Text Generator | ᵗⁱⁿʸ & ₛₘₐₗₗ Caps Text Copy Paste',
        metaDescription: 'Free small text generator. Convert text into tiny superscript, subscript, and ˢᵐᵃˡˡ ᶜᵃᵖˢ Unicode fonts for Instagram bios, usernames, and aesthetic profiles.',
        heroText: 'Go small with tiny text styles! Superscript, subscript, and miniature fonts that add a subtle, unique touch to your profile.',
        charMapCategory: 'small',
        seoContent: `<p>Our <strong>small text generator</strong> shrinks your words into miniature Unicode letters — <strong>ˢᵐᵃˡˡ ᶜᵃᵖˢ</strong>, <strong>ᵗⁱⁿʸ superscript</strong>, and subscript — that you can copy and paste into any bio or username. It is one of the most popular styles for an understated, <strong>aesthetic</strong> profile look.</p>

<h3>The three small-text styles</h3>
<ul>
  <li><strong>Small caps</strong> — full-size capitals shrunk to lowercase height, clean and readable</li>
  <li><strong>Superscript</strong> — tiny letters that sit at the top of the line</li>
  <li><strong>Subscript</strong> — tiny letters that drop to the bottom of the line</li>
</ul>

<h3>Where small text shines</h3>
<p>It is a favorite for <strong>Instagram bios</strong> and display names, <strong>TikTok</strong> usernames, <strong>X (Twitter)</strong> handles, and aesthetic <strong>Tumblr</strong> blogs. The smaller scale gives a minimalist, editorial feel that stands out precisely because it is quiet.</p>

<h3>Why some letters look different</h3>
<p>Unicode does not include a tiny version of every single letter — a couple of superscript and subscript characters have no official small form, so the generator uses the closest available glyph. Small caps, by contrast, covers the full alphabet cleanly.</p>`,
        faqItems: [
            { question: "How do I get small text in my Instagram bio?", answer: "Type your text here, copy the small-caps or tiny version, then paste it into Instagram > Edit Profile > Bio or Name. The characters are Unicode, so Instagram displays them as-is." },
            { question: "Is this the same as making the font size smaller?", answer: "No. Instagram and TikTok do not let you change font size. This swaps your letters for genuinely small Unicode characters that look tiny on every device." },
            { question: "Does small text work everywhere?", answer: "Small caps works almost everywhere. Superscript and subscript work in most apps, though a few rare letters fall back to a normal-size glyph." },
        ],
    },
    {
        slug: 'magic',
        name: 'Magic Font Generator',
        emoji: '🪄',
        description: 'Mystical and enchanted fonts',
        metaTitle: 'Magic Font Generator | Mystical & Enchanted Fonts 🪄',
        metaDescription: 'Generate magical and enchanted fonts with mystical symbols. Create spellbinding text for social media and gaming. Free copy paste!',
        heroText: 'Cast a spell with magical font styles! Mystical symbols, enchanted letters, and designs straight from a fantasy world.',
        charMapCategory: 'magic',
        seoContent: `<p>Our <strong>magic font generator</strong> conjures mystical, enchanted text decorated with stars, sparkles, and arcane symbols you can copy and paste anywhere. It is built for fantasy lovers, RPG players, and anyone who wants their name to read like a line from a spellbook. Every glyph is real Unicode, so the magic travels across Instagram, Discord, games, and WhatsApp untouched.</p>

<h3>What makes a magic font</h3>
<p>The <strong>magic font generator</strong> wraps your letters in celestial symbols — ✦ sparkles, ☽ moons, and shimmering accents — to create an enchanted, otherworldly look. It feels right at home on a wizard's profile, a mystical bio, or a fantasy guild tag.</p>

<h3>Where the magic works best</h3>
<ul>
  <li><strong>Gaming names</strong> for RPGs, MMOs, and fantasy titles</li>
  <li><strong>Discord</strong> usernames and spellbound server names</li>
  <li><strong>Instagram</strong> bios with a dreamy, mystical theme</li>
  <li><strong>WhatsApp</strong> status for a touch of enchantment</li>
</ul>

<h3>Cast and copy in seconds</h3>
<p>Just type your word, pick the enchanted style you like, and copy it. Because the spell is woven from standard Unicode characters and symbols, there is no app to install and nothing that vanishes when you change devices.</p>`,
        faqItems: [
            { question: "What is a magic font generator?", answer: "A magic font generator decorates your text with mystical symbols and enchanted-style letters using Unicode characters. You copy the result and paste it into games, social media, or chat apps." },
            { question: "Do magic fonts work in games and Discord?", answer: "Yes. The symbols are standard Unicode, so magic text works in Discord usernames and servers and in most games that allow special characters in names." },
            { question: "Is the magic font generator free?", answer: "Yes, it is free with no account needed. Generate and copy unlimited magical text." },
        ],
    },
    {
        slug: 'aesthetic',
        name: 'Aesthetic Font Generator',
        emoji: '🌊',
        description: 'Vaporwave and aesthetic text',
        metaTitle: 'Aesthetic Font Generator | Vaporwave & 𝓭𝓻𝓮𝓪𝓶𝔂 Text Copy Paste',
        metaDescription: 'Free aesthetic font generator. Create vaporwave ｆｕｌｌｗｉｄｔｈ, cursive 𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬, and dreamy fonts for Instagram, TikTok, and Tumblr bios. Copy and paste.',
        heroText: 'Feed your aesthetic soul with dreamy vaporwave fonts. Wide text, soft vibes, and styles that match your artistic energy.',
        charMapCategory: 'aesthetic',
        seoContent: `<p>Our <strong>aesthetic font generator</strong> turns plain text into the dreamy, soft, vaporwave-inspired styles that define an <strong>aesthetic</strong> profile — flowing scripts, <strong>ｗｉｄｅ ｆｕｌｌ-ｗｉｄｔｈ</strong> letters, and delicate symbol-decorated text you can copy and paste into any bio.</p>

<h3>Popular aesthetic styles</h3>
<ul>
  <li><strong>Vaporwave / full-width</strong> — ａｅｓｔｈｅｔｉｃ — extra spacing for that retro 80s and 90s mood</li>
  <li><strong>Cursive script</strong> — 𝓪𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬 — soft, elegant handwriting</li>
  <li><strong>Decorated text</strong> — wrapped in soft brackets, sparkles, and stars</li>
</ul>

<h3>Built for Instagram, TikTok & Tumblr</h3>
<p>The aesthetic look took off on <strong>Tumblr</strong> and now rules <strong>Instagram</strong> bios, <strong>TikTok</strong> usernames, and <strong>Pinterest</strong> boards. Pair a soft cursive name with a couple of symbols to get that curated, intentional feel in seconds — no design app required.</p>

<h3>How it works</h3>
<p>Every style here is built from real Unicode characters, so what you copy is exactly what your followers see — no screenshots, no installed fonts, and nothing that breaks when you switch phones.</p>`,
        faqItems: [
            { question: "What is an aesthetic font?", answer: "Aesthetic fonts are soft, decorative text styles — vaporwave full-width letters, cursive scripts, and symbol-wrapped text — popularized on Tumblr and Instagram for a curated, artistic profile look." },
            { question: "How do I add aesthetic text to my Instagram bio?", answer: "Type your text, copy the style you like, then paste it into Instagram > Edit Profile > Bio or Name. You can mix in symbols for extra effect." },
            { question: "Do aesthetic fonts work on TikTok?", answer: "Yes. TikTok supports Unicode, so vaporwave and cursive aesthetic fonts display correctly in usernames, bios, and captions." },
        ],
    },
    {
        slug: 'badass',
        name: 'Badass Font Generator',
        emoji: '💀',
        description: 'Dark and edgy badass fonts',
        metaTitle: 'Badass Font Generator | Dark & Edgy Text Styles 💀',
        metaDescription: 'Generate badass and edgy fonts with dark symbols. Create intimidating text for gaming, Discord, and social media. Free copy paste!',
        heroText: 'Embrace your dark side with badass font styles. Intimidating text, edgy symbols, and designs that command respect.',
        charMapCategory: 'badass',
        seoContent: `<p>Our <strong>badass font generator</strong> turns your name into dark, edgy, intimidating text loaded with skulls, blades, and aggressive symbols you can copy and paste anywhere. It is the go-to style for gamers and anyone who wants a profile that looks tough and commands respect. The output is genuine Unicode, so it stays sharp on Discord, Instagram, games, and WhatsApp.</p>

<h3>The badass look</h3>
<p>The <strong>badass font generator</strong> combines bold or sharp letter styles with menacing decorations — 💀 skulls, ⚔ blades, and dark brackets — to give your tag an edgy, no-nonsense attitude. It is perfect when you want to look fearless in a lobby or a server.</p>

<h3>Where badass text dominates</h3>
<ul>
  <li><strong>Gaming names</strong> for PUBG, Free Fire, COD, and Fortnite</li>
  <li><strong>Discord</strong> usernames and clan or squad tags</li>
  <li><strong>Instagram</strong> bios with a dark, edgy theme</li>
  <li><strong>WhatsApp</strong> status that sets a bold tone</li>
</ul>

<h3>Type, copy, intimidate</h3>
<p>Enter your text, choose the hardest-hitting style, and copy it instantly. Since every character is standard Unicode, there is nothing to download and your badass name looks the same across every device and platform.</p>`,
        faqItems: [
            { question: "What is a badass font generator?", answer: "A badass font generator wraps your text in dark, edgy symbols and bold letter styles using Unicode characters, giving your name an intimidating look. Just copy and paste it anywhere." },
            { question: "Do badass fonts work in games like Free Fire and PUBG?", answer: "Yes. Badass text uses Unicode characters that work in Free Fire, PUBG, BGMI, and most games, making it ideal for tough-looking gaming names and clan tags." },
            { question: "Is the badass font generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy as much badass text as you want." },
        ],
    },
    {
        slug: 'tattoo',
        name: 'Tattoo Font Generator',
        emoji: '💉',
        description: 'Tattoo-style gothic and script fonts',
        metaTitle: 'Tattoo Font Generator | Preview Script & Gothic Lettering 💉',
        metaDescription: 'Free tattoo font generator. Preview your name in gothic, script, and cursive tattoo lettering before you get inked. Copy and paste to share with your artist.',
        heroText: 'Preview your next tattoo with beautiful gothic and script fonts. Ink-style lettering that looks stunning on screen and skin.',
        charMapCategory: 'tattoo',
        seoContent: `<p>Our <strong>tattoo font generator</strong> lets you preview a name, word, or quote in popular tattoo lettering styles — flowing script, bold gothic blackletter, and elegant cursive — before you ever sit in the chair. Type your text, find a style you love, and copy it to share with your tattoo artist.</p>

<h3>Popular tattoo lettering styles</h3>
<ul>
  <li><strong>Script & cursive</strong> — the classic, flowing look for names and meaningful words</li>
  <li><strong>Gothic / blackletter</strong> — bold, dramatic Old English lettering</li>
  <li><strong>Fine-line</strong> — thin, delicate styles popular for minimalist tattoos</li>
</ul>

<h3>How to use it before your appointment</h3>
<p>Generating a preview here is a quick way to test how your idea reads — a partner's name, a date, a short phrase — and to compare styles side by side. Screenshot the version you like and bring it to your artist as a starting reference.</p>

<h3>A quick reminder</h3>
<p>These are digital Unicode previews to help you visualize a style, not exact tattoo typefaces. Your artist will hand-letter or trace the final design, so treat the output as inspiration for the look and feel you want.</p>`,
        faqItems: [
            { question: "Can I use this to plan a real tattoo?", answer: "Yes. It is a great way to preview how a name or phrase looks in script, gothic, and cursive styles. Screenshot your favorite and show it to your tattoo artist as a reference." },
            { question: "Are these the exact fonts my tattoo will use?", answer: "They are digital Unicode previews to help you choose a style. The final tattoo is drawn by your artist, so use these as inspiration rather than an exact template." },
            { question: "Is the tattoo font generator free?", answer: "Yes, it is free with no sign-up. Preview and copy as many tattoo lettering styles as you like." },
        ],
    },
    {
        slug: 'number',
        name: 'Number Font Generator',
        emoji: '🔢',
        description: 'Styled numbers and digit fonts',
        metaTitle: 'Number Font Generator | Styled Digit Fonts 🔢',
        metaDescription: 'Generate styled number fonts with unique digit styles. Keycap, circled, and decorative number fonts. Free copy paste!',
        heroText: 'Style your numbers with unique digit fonts! Keycap numbers, circled digits, and decorative number styles.',
        charMapCategory: 'number',
        seoContent: `<p>Our <strong>number font generator</strong> restyles plain digits into eye-catching forms like circled ① ② ③, keycap 1️⃣ 2️⃣ 3️⃣, and bold or decorative numbers you can copy and paste anywhere. It is perfect for ranking lists, jersey numbers, dates, and any time a normal "123" feels too ordinary. Each digit is real Unicode, so it works on Instagram, Discord, games, and WhatsApp.</p>

<h3>Number styles you can generate</h3>
<ul>
  <li><strong>Circled numbers</strong> — ① ② ③ — clean digits wrapped in a ring</li>
  <li><strong>Keycap numbers</strong> — 1️⃣ 2️⃣ 3️⃣ — emoji-style boxed digits</li>
  <li><strong>Full-width numbers</strong> — １２３ — extra-wide for a retro feel</li>
  <li><strong>Bold & fancy digits</strong> — 𝟭 𝟮 𝟯 — heavier weight for emphasis</li>
</ul>

<h3>Where styled numbers help</h3>
<p>Use circled numbers to build neat numbered lists in a bio, keycap digits to highlight a countdown or score, and bold numbers to make a date, price, or jersey number stand out. They look great in <strong>Instagram</strong> captions, <strong>Discord</strong> messages, and gaming profiles.</p>

<h3>Easy copy and paste</h3>
<p>Type your numbers, pick a style, and copy. Because every character is standard Unicode, there is nothing to install, and your styled digits display the same on phones and computers.</p>`,
        faqItems: [
            { question: "How do I make styled numbers like ① ② ③?", answer: "Type your digits into the number font generator and choose the circled style. It converts them to Unicode characters you can copy and paste into any app." },
            { question: "Do these number fonts work on Instagram and Discord?", answer: "Yes. Circled, keycap, and bold numbers are standard Unicode, so they display correctly in Instagram bios and captions and in Discord messages and usernames." },
            { question: "Is the number font generator free?", answer: "Yes, it is free with no sign-up. Generate and copy as many styled numbers as you like." },
        ],
    },
    {
        slug: 'line',
        name: 'Line Font Generator',
        emoji: '📏',
        description: 'Underline and line-decorated text',
        metaTitle: 'Line Font Generator | Underlined & Decorated Text 📏',
        metaDescription: 'Generate line-decorated text with underlines, overlines, and strikethrough effects. Unique text decorations. Free copy paste!',
        heroText: 'Add lines and decorations to your text! Underlines, overlines, and line effects that add visual structure to your names.',
        charMapCategory: 'line',
        seoContent: `<p>Our <strong>line font generator</strong> adds underlines, overlines, and strikethrough effects to your text using special combining Unicode marks. The result is decorated, line-accented text you can copy and paste into bios, names, and posts — something normal keyboards cannot do on most social apps. It works across Instagram, Discord, games, and WhatsApp.</p>

<h3>Line styles you can add</h3>
<ul>
  <li><strong>Underline</strong> — a clean line beneath every letter</li>
  <li><strong>Strikethrough</strong> — a line through the middle for crossed-out text</li>
  <li><strong>Overline</strong> — a line above your letters for a framed look</li>
  <li><strong>Double lines</strong> — stacked underlines for extra emphasis</li>
</ul>

<h3>How line decoration works</h3>
<p>Most social platforms have no underline or strikethrough button. The <strong>line font generator</strong> attaches combining line characters to each letter, so the decoration travels with your text wherever you paste it — no formatting button required.</p>

<h3>Where to use line text</h3>
<p>Underlined and struck-through text is great for highlighting a key line in an <strong>Instagram</strong> bio, marking edits in a <strong>Discord</strong> message, or adding structure to a gaming name. Keep it to short phrases — a few apps render heavy combining marks slightly differently, so test long strings before posting.</p>`,
        faqItems: [
            { question: "How do I underline text on Instagram?", answer: "Instagram has no underline button, so use the line font generator: it attaches underline marks to your letters using Unicode. Copy the result and paste it into your bio or caption." },
            { question: "Does strikethrough text work everywhere?", answer: "Strikethrough and underline use combining Unicode marks supported by most apps, including Discord and Instagram. A few older or limited apps may render them slightly differently." },
            { question: "Is the line font generator free?", answer: "Yes, it is free with no account. Add underlines, overlines, and strikethrough to as much text as you want." },
        ],
    },
    {
        slug: 'joiner',
        name: 'Joiner Font Generator',
        emoji: '🔗',
        description: 'Connected and joined letter fonts',
        metaTitle: 'Joiner Font Generator | Connected Letter Fonts 🔗',
        metaDescription: 'Generate connected and joined letter fonts with dots and linking characters. Unique chained text styles. Free copy paste!',
        heroText: 'Connect your letters with joiner fonts! Dotted links, connected characters, and flowing text styles.',
        charMapCategory: 'joiner',
        seoContent: `<p>Our <strong>joiner font generator</strong> links your letters together with dots, dashes, and connecting symbols to create flowing, chained-up text you can copy and paste anywhere. Instead of plain spacing, your name reads as one continuous, decorated string that stands out in bios and usernames. It is built from real Unicode, so it works on Instagram, Discord, games, and WhatsApp.</p>

<h3>Joiner styles you can create</h3>
<ul>
  <li><strong>Dotted joiners</strong> — letters linked by small dots (·) for a delicate chain</li>
  <li><strong>Dash joiners</strong> — connected with hyphens or lines for a bold link</li>
  <li><strong>Symbol joiners</strong> — stars, hearts, or arrows between each letter</li>
  <li><strong>Wave joiners</strong> — flowing connectors for a soft, continuous look</li>
</ul>

<h3>Why use connected text</h3>
<p>The <strong>joiner font generator</strong> is popular for gaming tags and aesthetic profiles because the linked letters look intentional and hard to copy by hand. It gives a name a unique rhythm that plain text just cannot match.</p>

<h3>Where it works</h3>
<p>Connected text fits perfectly in <strong>Instagram</strong> display names, <strong>Discord</strong> usernames, and gaming profiles. Just type, choose a joiner style, and copy — every character is standard Unicode, so there is nothing to install and nothing that breaks between devices.</p>`,
        faqItems: [
            { question: "What is a joiner font generator?", answer: "A joiner font generator connects your letters with dots, dashes, or symbols using Unicode characters, creating chained, flowing text. You copy the result and paste it anywhere." },
            { question: "Do joiner fonts work on Instagram and Discord?", answer: "Yes. The joining characters are standard Unicode, so connected text displays correctly in Instagram bios and names and in Discord usernames and messages." },
            { question: "Is the joiner font generator free?", answer: "Yes, it is free with no sign-up. Generate and copy as much connected text as you like." },
        ],
    },
    {
        slug: 'retro',
        name: 'Retro Font Generator',
        emoji: '🕹️',
        description: 'Retro and pixel-style fonts',
        metaTitle: 'Retro Font Generator | Pixel & Arcade Style Fonts 🕹️',
        metaDescription: 'Generate retro and pixel-style fonts inspired by classic arcade games. Nostalgic text for gaming profiles. Free copy paste!',
        heroText: 'Travel back in time with retro pixel fonts! Arcade-style letters, classic gaming text, and nostalgic designs.',
        charMapCategory: 'retro',
        seoContent: `<p>Our <strong>retro font generator</strong> recreates the pixel and arcade vibe of classic 80s and 90s gaming in text you can copy and paste anywhere. Think old-school cabinet titles, chunky square letters, and that nostalgic high-score look. Everything is real Unicode, so your retro text travels intact to Instagram, Discord, games, and WhatsApp.</p>

<h3>The retro arcade look</h3>
<p>The <strong>retro font generator</strong> uses blocky, full-width, and square-styled Unicode letters to capture the feel of vintage video games and synthwave aesthetics. It is perfect for anyone who grew up with arcades or loves the pixel-art revival.</p>

<h3>Where retro text fits</h3>
<ul>
  <li><strong>Gaming names</strong> and high-score tags with old-school flair</li>
  <li><strong>Discord</strong> usernames for retro-gaming servers</li>
  <li><strong>Instagram</strong> bios with a synthwave or vaporwave theme</li>
  <li><strong>WhatsApp</strong> status for a hit of nostalgia</li>
</ul>

<h3>Insert coin and copy</h3>
<p>Type your text, choose your favorite retro style, and copy it instantly. Because each character is standard Unicode rather than an image or installed font, your arcade-style text looks the same on every phone and computer with nothing to download.</p>`,
        faqItems: [
            { question: "What is a retro font generator?", answer: "A retro font generator converts your text into pixel and arcade-inspired Unicode styles that recall classic 80s and 90s games. Copy and paste the result into any app." },
            { question: "Do retro fonts work for gaming names and Discord?", answer: "Yes. Retro text uses standard Unicode characters, so it works in most gaming profiles and in Discord usernames and servers." },
            { question: "Is the retro font generator free?", answer: "Yes, it is free with no account needed. Generate and copy as much retro arcade text as you like." },
        ],
    },
    {
        slug: 'halo',
        name: 'Halo Font Generator',
        emoji: '😇',
        description: 'Angel and halo-decorated fonts',
        metaTitle: 'Halo Font Generator | Angel & Heavenly Fonts 😇',
        metaDescription: 'Generate halo and angel-themed fonts with heavenly symbols. Angelic text with halo decorations. Free copy paste!',
        heroText: 'Float like an angel with heavenly halo fonts! Divine symbols, angelic letters, and celestial designs.',
        charMapCategory: 'fancy',
        seoContent: `<p>Our <strong>halo font generator</strong> wraps your text in angelic, heavenly decorations — soft scripts framed with halos, wings, stars, and celestial symbols you can copy and paste anywhere. It gives your name a pure, divine glow that is perfect for dreamy bios and soft aesthetics. Built from real Unicode, it shows up the same on Instagram, Discord, games, and WhatsApp.</p>

<h3>The angelic look</h3>
<p>The <strong>halo font generator</strong> pairs elegant letters with heavenly symbols like ☆ stars, ✧ sparkles, and ♡ hearts to create a gentle, celestial feel. It is a favorite for anyone who loves an ethereal, angel-core aesthetic.</p>

<h3>Where halo text shines</h3>
<ul>
  <li><strong>Instagram</strong> bios and display names with a soft, divine vibe</li>
  <li><strong>TikTok</strong> usernames for an angel-core aesthetic</li>
  <li><strong>Discord</strong> nicknames with a heavenly touch</li>
  <li><strong>WhatsApp</strong> status for a pure, dreamy mood</li>
</ul>

<h3>Float in and copy</h3>
<p>Type your name, pick the heavenly style you love, and copy it in seconds. Since every glyph is standard Unicode rather than an image or installed font, your angelic text looks identical across phones and computers with nothing to download.</p>`,
        faqItems: [
            { question: "What is a halo font generator?", answer: "A halo font generator decorates your text with angelic, heavenly symbols and soft letter styles using Unicode characters. You copy the result and paste it anywhere." },
            { question: "Do halo fonts work on Instagram and TikTok?", answer: "Yes. The symbols are standard Unicode, so angelic halo text displays correctly in Instagram bios and names and in TikTok usernames and captions." },
            { question: "Is the halo font generator free?", answer: "Yes, it is free with no sign-up. Generate and copy as much angelic text as you like." },
        ],
    },
    {
        slug: 'ice',
        name: 'Ice Font Generator',
        emoji: '❄️',
        description: 'Frozen and ice-themed fonts',
        metaTitle: 'Ice Font Generator | Frozen & Winter Style Fonts ❄️',
        metaDescription: 'Generate ice and frozen-themed fonts with winter symbols. Cool, frosty text for your profile. Free copy and paste!',
        heroText: 'Freeze your text with icy font styles! Snowflakes, frost effects, and winter-themed designs that chill any profile.',
        charMapCategory: 'cool',
        seoContent: `<p>Our <strong>ice font generator</strong> gives your text a frozen, frosty makeover with snowflakes, ice crystals, and cool winter symbols you can copy and paste anywhere. It is the perfect chilly aesthetic for a wintry bio, a frost-themed gaming tag, or a cool, calm profile. Every character is real Unicode, so the frost stays crisp on Instagram, Discord, games, and WhatsApp.</p>

<h3>The frozen aesthetic</h3>
<p>The <strong>ice font generator</strong> frames sleek, cool-styled letters with icy decorations like ❄ snowflakes, ❅ crystals, and ✦ frost sparkles to create a winter-wonderland vibe. It is a great match for snow-season posts and anyone who wants a calm, frosty look.</p>

<h3>Where icy text fits</h3>
<ul>
  <li><strong>Instagram</strong> bios and winter-themed captions</li>
  <li><strong>Gaming names</strong> with a frost or ice power theme</li>
  <li><strong>Discord</strong> usernames for a cool, chill server vibe</li>
  <li><strong>WhatsApp</strong> status during the winter season</li>
</ul>

<h3>Freeze it and copy</h3>
<p>Type your text, choose your favorite frozen style, and copy it instantly. Because the snowflakes and letters are standard Unicode rather than an image or installed font, your icy text looks the same on every phone and computer with nothing to download.</p>`,
        faqItems: [
            { question: "What is an ice font generator?", answer: "An ice font generator decorates your text with snowflakes, frost symbols, and cool letter styles using Unicode characters. Copy the frozen result and paste it anywhere." },
            { question: "Do ice fonts work on Instagram and in games?", answer: "Yes. The snowflakes and symbols are standard Unicode, so frozen text works in Instagram bios and captions and in most games that allow special characters in names." },
            { question: "Is the ice font generator free?", answer: "Yes, it is free with no account. Generate and copy as much frosty winter text as you like." },
        ],
    },
    {
        slug: 'pretty',
        name: 'Pretty Font Generator',
        emoji: '🌸',
        description: 'Beautiful and elegant pretty fonts',
        metaTitle: 'Pretty Font Generator | Cute & 𝓹𝓻𝓮𝓽𝓽𝔂 Fonts Copy Paste 🌸',
        metaDescription: 'Free pretty font generator. Create soft, cute, and 𝓹𝓻𝓮𝓽𝓽𝔂 cursive fonts for Instagram bios, TikTok, and aesthetic profiles. Copy and paste instantly.',
        heroText: 'Make everything pretty with beautiful elegant fonts! Soft scripts, delicate designs, and gorgeously styled text.',
        charMapCategory: 'pretty',
        seoContent: `<p>Our <strong>pretty font generator</strong> turns plain text into soft, delicate, and <strong>𝓹𝓻𝓮𝓽𝓽𝔂</strong> fonts — gentle cursive scripts, dainty letters, and styles trimmed with hearts and flowers. Copy and paste them straight into your bio or username for an instantly elegant look.</p>

<h3>Pretty styles you will find</h3>
<ul>
  <li><strong>Cursive script</strong> — 𝓼𝓸𝓯𝓽 flowing handwriting</li>
  <li><strong>Dainty & cute</strong> — delicate letters with hearts (♡), flowers (✿), and sparkles</li>
  <li><strong>Elegant serif</strong> — refined, classy lettering</li>
</ul>

<h3>Made for Instagram & TikTok</h3>
<p>Pretty fonts are one of the most popular looks for <strong>Instagram</strong> bios and display names, <strong>TikTok</strong> usernames, and <strong>Pinterest</strong> profiles. A soft cursive name with a couple of flower or heart symbols gives your profile that gentle, put-together aesthetic in seconds.</p>

<h3>Works on every device</h3>
<p>Each style is real Unicode, so your pretty text looks the same on iPhone, Android, and computers — no app, no installed font, nothing that breaks when you change phones.</p>`,
        faqItems: [
            { question: "How do I get pretty fonts in my Instagram bio?", answer: "Type your text, copy the pretty style you like, and paste it into Instagram > Edit Profile > Bio or Name. You can add hearts or flower symbols for an extra cute touch." },
            { question: "Do pretty fonts work on TikTok?", answer: "Yes. TikTok supports Unicode, so pretty cursive and decorated fonts display correctly in usernames, bios, and captions." },
            { question: "Is the pretty font generator free?", answer: "Yes, it is free with no sign-up. Generate and copy as many pretty fonts as you like." },
        ],
    },
    {
        slug: 'big-text',
        name: 'Big Text / ASCII Art Generator',
        emoji: '🔤',
        description: 'Large block-letter ASCII art text',
        metaTitle: 'Big Text Generator | ASCII Art Block Letters 🔤',
        metaDescription: 'Generate big text and ASCII art block letters. Create large, eye-catching text art for Discord, gaming, and social media. Free!',
        heroText: 'Go BIG with massive ASCII art letters! Block-style text that dominates chats, Discord servers, and social media posts.',
        charMapCategory: 'bold',
        seoContent: `<p>Our <strong>big text generator</strong> turns a short word into huge ASCII-art block letters built from characters, so your message takes up several lines and dominates any chat. It is the classic way to make a loud announcement in a Discord server or grab attention in a group chat. The output is plain text you copy and paste — no images, no installed fonts.</p>

<h3>What is big text / ASCII art?</h3>
<p>ASCII art spells each letter out of smaller characters, stacking rows to form one giant block letter. The <strong>big text generator</strong> does this automatically: type a word and it returns a large, multi-line version you can drop straight into a chat box.</p>

<h3>Where big text works best</h3>
<ul>
  <li><strong>Discord</strong> announcements, welcome messages, and channel headers</li>
  <li><strong>Gaming</strong> chats and lobbies for a loud entrance</li>
  <li><strong>Forums</strong> and group chats for emphasis</li>
  <li><strong>Code editors</strong> and READMEs as text banners</li>
</ul>

<h3>Tips for best results</h3>
<p>Big block letters need a monospaced font and enough width to line up correctly, so they look perfect on Discord desktop and in code editors. Keep words short — long phrases wrap awkwardly on narrow mobile screens — and copy the whole block at once so the rows stay aligned.</p>`,
        faqItems: [
            { question: "What is a big text generator?", answer: "A big text generator turns a word into large ASCII-art block letters made from smaller characters. You copy the multi-line result and paste it into chats like Discord for an oversized message." },
            { question: "Does big text work on Discord?", answer: "Yes. Discord uses a monospaced style in code blocks and renders ASCII art well, especially on desktop. Wrap your big text in a code block for the cleanest alignment." },
            { question: "Is the big text generator free?", answer: "Yes, it is free with no sign-up. Generate and copy as many big text banners as you like." },
        ],
    },
];

