// Category definitions and metadata

export interface Category {
    slug: string;
    name: string;
    emoji: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    heroText: string;
    charMapCategory: string; // maps to charMaps category
    seoContent?: string; // unique SEO HTML content for this page
    faqItems?: { question: string; answer: string }[]; // unique FAQ
}

export const categories: Category[] = [
    {
        slug: 'gaming',
        name: 'Gaming',
        emoji: '🎮',
        description: 'Stylish gaming names for PUBG, Free Fire, COD, and more',
        metaTitle: 'Gaming Stylish Name Generator | Cool PUBG & Free Fire Names',
        metaDescription: 'Create stylish gaming names for PUBG, Free Fire, COD Mobile, and Fortnite. Generate cool nicknames with symbols and fancy fonts. Copy and paste instantly!',
        heroText: 'Dominate the battlefield with a stylish gaming name. Create unique nicknames for PUBG, Free Fire, COD Mobile, and more. Stand out in the lobby!',
        charMapCategory: 'gaming',
        seoContent: `<p>A <strong>stylish gaming name</strong> is the first thing other players see when you enter a match. Whether you play <strong>PUBG Mobile</strong>, <strong>Free Fire</strong>, <strong>BGMI</strong>, <strong>Call of Duty Mobile</strong>, or <strong>Fortnite</strong>, your nickname tells the lobby who you are before you fire a single shot. Our gaming name generator gives you hundreds of unique fonts with swords, skulls, crowns, and special symbols that actually work in-game.</p>

<h3>Why Use a Stylish Gaming Name?</h3>
<p>A plain name like "player123" is forgettable. But a name like <strong>꧁༒☬𝓓𝓪𝓻𝓴𝓚𝓷𝓲𝓰𝓱𝓽☬༒꧂</strong> makes you look like a pro. Stylish names help you stand out in kill feeds, lobbies, and friend lists. Many pro gamers and streamers use decorated names to build their brand. Our tool makes it easy — just type, pick, and copy.</p>

<h3>Best Gaming Name Ideas</h3>
<ul>
  <li><strong>Aggressive names</strong> — Dark Knight, Phantom Reaper, Shadow Assassin</li>
  <li><strong>Pro gamer tags</strong> — Headshot God, Sniper Elite, One Tap King</li>
  <li><strong>Funny nicknames</strong> — Noob Killer, AFK Legend, Camper King</li>
  <li><strong>Clan names</strong> — Elite Squad, Dark Army, Kings of Gaming</li>
</ul>

<h3>Tips for Gaming Names</h3>
<p>Keep your name under 12-16 characters. Most games have character limits. Test the name in-game before making it permanent — some symbols may not display on all devices. Use our compatibility checker tool to verify your name works on your game.</p>`,
        faqItems: [
            { question: 'What symbols work in PUBG and Free Fire names?', answer: 'Most Unicode symbols like ꧁ ꧂ ☬ ★ ⚡ ♛ work in PUBG Mobile and Free Fire. Our generator only uses symbols that are game-compatible. Always test in-game before finalizing.' },
            { question: 'How many characters can a gaming name have?', answer: 'PUBG Mobile allows up to 14 characters. Free Fire allows 12 characters. COD Mobile allows 16 characters. Some Unicode symbols count as 2 characters, so keep it short.' },
            { question: 'Can I change my gaming name later?', answer: 'Yes! Most games let you change your name using a rename card. PUBG gives one free rename, Free Fire requires diamonds. Generate your perfect name first, then change it in-game.' },
        ],
    },
    {
        slug: 'cute',
        name: 'Cute',
        emoji: '💕',
        description: 'Adorable and kawaii stylish names',
        metaTitle: 'Cute Font Generator | Kawaii Text & Names ♡ Copy & Paste',
        metaDescription: 'Free cute font generator. Create kawaii text, cute fonts, and names with hearts, flowers, and adorable symbols for Instagram, TikTok, and Discord. Copy and paste.',
        heroText: 'Create the cutest names with adorable symbols, hearts, and kawaii fonts. Perfect for making your profile irresistibly charming!',
        charMapCategory: 'cute',
        seoContent: `<p>Our <strong>cute font generator</strong> turns plain text into adorable <strong>kawaii</strong> styles — soft letters wrapped in hearts (♡), flowers (✿), bows, and sparkles — that you can copy and paste anywhere. It is the easiest way to make your <strong>cute name</strong>, bio, or username look sweet and charming in seconds.</p>

<h3>What is kawaii text?</h3>
<p>"Kawaii" means cute in Japanese, and kawaii text is that soft, playful aesthetic made from gentle Unicode letters and tiny decorative symbols. Think pastel-profile energy: little hearts, stars, and faces (｡♡‿♡｡) tucked around a soft cursive name.</p>

<h3>Where cute fonts work best</h3>
<ul>
  <li><strong>Instagram & TikTok</strong> — cute bios and display names</li>
  <li><strong>Discord</strong> — adorable usernames and server nicknames</li>
  <li><strong>Pinterest & Tumblr</strong> — soft, aesthetic profiles</li>
</ul>

<h3>Copy and paste anywhere</h3>
<p>Every cute style is real Unicode, so it looks the same on any phone or computer — copy a kawaii name here and paste it straight into your profile with no app to install.</p>`,
        faqItems: [
            { question: "How do I make a cute name to copy and paste?", answer: "Type your name above and the generator instantly creates cute, kawaii styles with hearts and flowers. Tap one to copy it, then paste it into your bio, username, or display name." },
            { question: "Do cute fonts work on Instagram and TikTok?", answer: "Yes. The cute characters and symbols are Unicode, so they display correctly in Instagram and TikTok bios, names, and captions." },
            { question: "Is the cute font generator free?", answer: "Yes, completely free with no sign-up or download. Generate and copy unlimited cute fonts and names." },
        ],
    },
    {
        slug: 'cool',
        name: 'Cool',
        emoji: '❄️',
        description: 'Trendy and cool stylish names',
        metaTitle: 'Cool Font Generator | Copy & Paste Cool Fonts & Names ❄️',
        metaDescription: 'Free cool font generator. Create cool fonts, symbols, and names to copy and paste into Instagram, Discord, TikTok, Free Fire, and PUBG. Instant and free.',
        heroText: 'Get the coolest name styles that make you stand out. Trendy fonts, unique symbols, and eye-catching designs — all free to copy and paste.',
        charMapCategory: 'cool',
        seoContent: `<p>Our <strong>cool font generator</strong> turns ordinary text into hundreds of cool, trendy fonts and symbols you can copy and paste into any profile. From sleek script to edgy glitched letters, it is built to make your <strong>cool name</strong> or username stand out on Instagram, Discord, TikTok, and in games like Free Fire and PUBG.</p>

<h3>What makes a font "cool"?</h3>
<p>Cool fonts usually pair an unexpected letter shape with the right symbols — slanted italics, sharp gothic strokes, or clean small-caps framed with stars (✦), lightning (⚡), or brackets. Our generator mixes letter styles and decorative symbols automatically, so you do not have to hunt for them one by one.</p>

<h3>Where cool fonts work best</h3>
<ul>
  <li><strong>Gaming names</strong> — Free Fire, PUBG, BGMI, and COD profiles</li>
  <li><strong>Instagram & TikTok</strong> — bios and display names that get noticed</li>
  <li><strong>Discord</strong> — usernames and server nicknames</li>
</ul>

<h3>Copy, paste, done</h3>
<p>Every style is real Unicode, so it travels with you — copy a cool font here and it looks identical on any phone or computer, with no app to install.</p>`,
        faqItems: [
            { question: "How do I make a cool font to copy and paste?", answer: "Type your text in the box above and the generator instantly creates dozens of cool font styles. Tap any one to copy it, then paste it into your bio, username, or game name." },
            { question: "Do cool fonts work in Free Fire and PUBG?", answer: "Yes. The generator uses Unicode characters and symbols that are supported in Free Fire, PUBG Mobile, and BGMI name fields." },
            { question: "Are these cool fonts free?", answer: "Completely free, with no sign-up or download. Generate and copy unlimited cool fonts." },
        ],
    },
    {
        slug: 'fancy',
        name: 'Fancy',
        emoji: '✨',
        description: 'Elegant and fancy font styles',
        metaTitle: 'Fancy Text Generator | 𝓕𝓪𝓷𝓬𝔂 Fonts Copy & Paste ✨',
        metaDescription: 'Free fancy text generator. Convert text into elegant 𝓯𝓪𝓷𝓬𝔂 cursive, 𝕓𝕠𝕝𝕕, and decorative Unicode fonts for Instagram, TikTok, and WhatsApp. Copy and paste.',
        heroText: 'Transform your name into a work of art with elegant script fonts, beautiful cursive styles, and decorative frames.',
        charMapCategory: 'fancy',
        seoContent: `<p>Our <strong>fancy text generator</strong> instantly converts plain words into elegant, decorative Unicode fonts — flowing <strong>𝓯𝓪𝓷𝓬𝔂 script</strong>, bold serif, and ornate symbol-framed text — that you can copy and paste anywhere. It is the fastest way to give your <strong>name</strong>, bio, or post a polished, premium look without any design skills.</p>

<h3>Fancy styles you can create</h3>
<ul>
  <li><strong>Cursive & script</strong> — 𝓮𝓵𝓮𝓰𝓪𝓷𝓽 handwriting for a classy feel</li>
  <li><strong>Double-struck & bold</strong> — 𝕗𝕒𝕟𝕔𝕪 outlined and heavy styles</li>
  <li><strong>Decorated text</strong> — names wrapped in hearts, stars, and ornate brackets</li>
</ul>

<h3>Perfect for bios and usernames</h3>
<p>Fancy fonts are a favorite for <strong>Instagram</strong> and <strong>TikTok</strong> bios, <strong>WhatsApp</strong> profiles, invitations, and aesthetic usernames. Because the result is genuine Unicode rather than an image, it stays fancy in every app and on every device.</p>

<h3>How to use it</h3>
<p>Type your text, browse the generated fancy fonts, click to copy, and paste it wherever you want to stand out — your followers see exactly what you copied.</p>`,
        faqItems: [
            { question: "What is a fancy text generator?", answer: "A fancy text generator converts normal letters into decorative Unicode fonts — cursive, bold, double-struck, and symbol-framed styles — that you can copy and paste into any app without installing a font." },
            { question: "Does fancy text work on Instagram?", answer: "Yes. Fancy Unicode fonts work in Instagram bios, names, captions, and comments. Copy a style and paste it into Edit Profile." },
            { question: "Is the fancy text generator free?", answer: "Yes, it is 100% free with no account needed. Create and copy as many fancy text styles as you like." },
        ],
    },
    {
        slug: 'love',
        name: 'Love',
        emoji: '💖',
        description: 'Romantic love and couple names',
        metaTitle: 'Love Stylish Name — Romantic & Couple Names 💖 Copy & Paste',
        metaDescription: 'Love stylish name maker ✨ Romantic names with hearts 💖, love symbols & couple fonts. Beautiful stylish name for love, lovely girl & couple bio. Free!',
        heroText: 'Beautiful love stylish names with hearts, romantic symbols & lovely fonts. Perfect for couple bios, Valentine messages and stylish name for love on Instagram.',
        charMapCategory: 'love',
        seoContent: `<p>A <strong>love stylish name</strong> wraps your name in romance — soft cursive letters surrounded by hearts (♡ ♥ 💖), roses, and sparkles that say exactly how you feel. Our love name generator turns plain text into sweet, romantic styles you can copy and paste into your bio, status, or couple profile in seconds.</p>

<h3>Romantic Love Name Ideas</h3>
<ul>
  <li><strong>Sweet nicknames</strong> — My Forever, Heart Beat, Love of My Life, Dil Se</li>
  <li><strong>Cute pet names</strong> — Babydoll, Sweetheart, Honey Bunny, Cutie Pie</li>
  <li><strong>Couple bios</strong> — Taken, Loving You, His Princess, Her King</li>
  <li><strong>Deep romance</strong> — Soulmate, Endless Love, Always Yours, Mr & Mrs</li>
</ul>

<h3>Where Love Names Shine</h3>
<p>Love names are perfect for <strong>Instagram bios</strong>, <strong>WhatsApp profile names</strong>, Valentine messages, and matching couple profiles. Drop a few heart symbols (♡ ♥ 💕) around your name and your partner will instantly feel the romance. Every style is real Unicode, so it looks the same on any phone.</p>

<h3>How to Make a Love Name</h3>
<p>Type your name above, pick a romantic font with hearts, tap to copy, and paste it anywhere — your bio, your status, or a sweet message to someone special. It takes seconds and needs no app.</p>`,
        faqItems: [
            { question: "How do I make a romantic love name to copy and paste?", answer: "Type your name above and the generator instantly creates love styles wrapped in hearts and romantic fonts. Tap one to copy it, then paste it into your bio, WhatsApp name, or a message." },
            { question: "Do love names work on Instagram and WhatsApp?", answer: "Yes. The hearts, symbols, and fonts are Unicode, so they display correctly in Instagram bios, WhatsApp profile names, and couple statuses on any device." },
            { question: "Can I use love names for couple profiles?", answer: "Definitely. Pick the same romantic style for both partners and add heart symbols between the names to create a matching couple look you can paste anywhere." },
        ],
    },
    {
        slug: 'crazy',
        name: 'Crazy',
        emoji: '🔥',
        description: 'Bold and wild crazy name styles',
        metaTitle: 'Crazy Stylish Name Generator | Bold & Wild Name Styles 🔥',
        metaDescription: 'Generate crazy and bold stylish names with wild symbols and unique fonts. Stand out with eye-catching styles for Free Fire, PUBG, and social media.',
        heroText: 'Go wild with crazy name styles! Bold fonts, intense symbols, and designs that demand attention wherever you go.',
        charMapCategory: 'crazy',
        seoContent: `<p>A <strong>crazy stylish name</strong> is loud, wild, and impossible to ignore. Our crazy name generator scrambles plain text into bold, glitched, and chaotic styles loaded with intense symbols (🔥 ⚡ ☠) that grab attention the second someone sees them. Copy and paste your crazy name into any profile or game in seconds.</p>

<h3>Wild Crazy Name Ideas</h3>
<ul>
  <li><strong>Chaos names</strong> — Mad Beast, Wild Card, No Limits, Insane Mode</li>
  <li><strong>Glitch styles</strong> — corrupted, zalgo-style letters that look hacked</li>
  <li><strong>Bold attitude</strong> — Untamed, Reckless, Psycho King, Off The Rails</li>
  <li><strong>Party vibes</strong> — Crazy Night, Loud & Proud, Wild Child</li>
</ul>

<h3>Where Crazy Names Stand Out</h3>
<p>Crazy fonts are made for <strong>Free Fire</strong> and <strong>PUBG</strong> nicknames, <strong>Instagram</strong> usernames, and TikTok bios where you want to look bold and a little unhinged. Because every style is real Unicode, your crazy name keeps its wild look on any phone or computer.</p>

<h3>Copy and Paste in Seconds</h3>
<p>Type your name, scroll the crazy styles, tap to copy, and paste it anywhere. No app, no sign-up — just instant wild text that makes you stand out from the crowd.</p>`,
        faqItems: [
            { question: "How do I make a crazy name to copy and paste?", answer: "Type your text above and the generator instantly creates wild, bold, and glitched crazy styles. Tap one to copy it, then paste it into your game name, bio, or username." },
            { question: "Do crazy fonts work in games and on Instagram?", answer: "Yes. The crazy styles use Unicode characters and symbols supported in Free Fire, PUBG, Instagram, and TikTok name fields." },
            { question: "Is the crazy name generator free?", answer: "Yes, completely free with no sign-up or download. Generate and copy unlimited crazy name styles." },
        ],
    },
    {
        slug: 'sword',
        name: 'Sword',
        emoji: '⚔️',
        description: 'Battle and warrior themed names',
        metaTitle: 'Sword & Warrior Name Generator | Battle Theme Names ⚔️',
        metaDescription: 'Create powerful warrior and sword-themed stylish names. Perfect for gaming profiles, battle names, and showing your strength. Free copy and paste!',
        heroText: 'Unleash your inner warrior with powerful sword-themed names. Shields, blades, and battle symbols for the ultimate fighter identity.',
        charMapCategory: 'sword',
        seoContent: `<p>A <strong>sword stylish name</strong> turns your nickname into a battle-ready warrior identity, framed with blades (⚔), shields, and crossed-sword symbols (⚔️ 🗡 ☨). Our sword name generator is perfect for gamers who want a fierce, fearless tag that looks like it was forged for the battlefield. Copy and paste it straight into your game profile.</p>

<h3>Warrior Sword Name Ideas</h3>
<ul>
  <li><strong>Knight names</strong> — Blade Master, Iron Knight, Sword Saint, Steel Slayer</li>
  <li><strong>Battle tags</strong> — War Lord, Blade Reaper, Last Samurai, Death Blade</li>
  <li><strong>Legendary names</strong> — Excalibur, Dragon Slayer, Shadow Blade, Lone Warrior</li>
  <li><strong>Clan names</strong> — Blade Squad, Knights of War, Sword Legion</li>
</ul>

<h3>Where Sword Names Work</h3>
<p>Sword and warrior names dominate in <strong>Free Fire</strong>, <strong>PUBG</strong>, <strong>BGMI</strong>, and Fortnite lobbies, but they also look powerful on Instagram and Discord. The blade symbols are real Unicode, so your warrior name shows up sharp on any device, in or out of game.</p>

<h3>Forge Your Name</h3>
<p>Type your name above, pick a sword style with crossed blades, tap to copy, and paste it into your game or profile. No app needed — just an instant battle-tested look.</p>`,
        faqItems: [
            { question: "How do I make a sword warrior name to copy and paste?", answer: "Type your name above and the generator creates fierce sword styles framed with blade and shield symbols. Tap one to copy it, then paste it into your game name or profile." },
            { question: "Do sword symbols work in PUBG and Free Fire?", answer: "Yes. Sword and blade symbols like ⚔ 🗡 are Unicode characters supported in PUBG, Free Fire, and BGMI name fields. Test in-game to confirm before finalizing." },
            { question: "Is the sword name generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy unlimited warrior and sword-themed names." },
        ],
    },
    {
        slug: 'star',
        name: 'Star & Glitter',
        emoji: '⭐',
        description: 'Sparkly star and glitter names',
        metaTitle: 'Star & Glitter Name Generator | Sparkly Stylish Names ⭐',
        metaDescription: 'Generate sparkly star and glitter themed stylish names. Shine bright with star symbols, glitter effects, and dazzling fonts. Free copy and paste!',
        heroText: 'Shine like a star with sparkling name styles. Star symbols, glitter effects, and dazzling decorations to light up any profile.',
        charMapCategory: 'star',
        seoContent: `<p>A <strong>star and glitter stylish name</strong> makes your profile sparkle with shining symbols (★ ✦ ✧ ⋆) and dazzling glitter effects. Our star name generator wraps your name in twinkling decorations so it glows on any feed. Copy and paste your sparkly name straight into your bio or username in seconds.</p>

<h3>Sparkly Star Name Ideas</h3>
<ul>
  <li><strong>Dreamy names</strong> — Star Girl, Moon Light, Shining Star, Galaxy Queen</li>
  <li><strong>Glitter styles</strong> — names framed with ✦ ✧ ⋆ for an aesthetic glow</li>
  <li><strong>Celestial names</strong> — Cosmic Soul, Stardust, Twinkle, Night Sky</li>
  <li><strong>Shine names</strong> — Sparkle Queen, Glow Up, Bright Star, Diamond Shine</li>
</ul>

<h3>Where Star Names Shine</h3>
<p>Star and glitter names are a favorite for <strong>Instagram</strong> and <strong>TikTok</strong> bios, aesthetic Tumblr blogs, and dreamy profile names. The sparkle symbols are real Unicode, so your glittery name keeps its shine on every phone and computer.</p>

<h3>Light Up Your Profile</h3>
<p>Type your name above, pick a sparkly star style, tap to copy, and paste it anywhere. No app or sign-up — just instant glitter that makes your name twinkle.</p>`,
        faqItems: [
            { question: "How do I make a sparkly star name to copy and paste?", answer: "Type your name above and the generator creates star and glitter styles framed with shining symbols. Tap one to copy it, then paste it into your bio, username, or display name." },
            { question: "Do star and glitter symbols work on Instagram?", answer: "Yes. Star symbols like ★ ✦ ✧ are Unicode characters that display correctly in Instagram bios, names, and TikTok profiles on any device." },
            { question: "Is the star name generator free?", answer: "Yes, completely free with no download. Generate and copy unlimited sparkly star and glitter names." },
        ],
    },
    {
        slug: 'serious',
        name: 'Serious',
        emoji: '😎',
        description: 'Professional and bold serious names',
        metaTitle: 'Serious Name Generator | Professional & Bold Styles 😎',
        metaDescription: 'Create professional and bold stylish names for a serious and authoritative look. Perfect for professional profiles and business use.',
        heroText: 'Make a powerful impression with serious and professional name styles. Bold, clean, and authoritative — perfect for business and power users.',
        charMapCategory: 'serious',
        seoContent: `<p>A <strong>serious stylish name</strong> gives your profile a clean, professional, and authoritative look without the loud symbols. Our serious name generator focuses on bold, sharp, and minimal fonts that command respect — ideal for business profiles, LinkedIn-style branding, and power users who want to be taken seriously.</p>

<h3>Professional Serious Name Ideas</h3>
<ul>
  <li><strong>Bold business names</strong> — The Founder, CEO Mindset, Mr Professional</li>
  <li><strong>Authoritative names</strong> — The Boss, Decision Maker, Power Player</li>
  <li><strong>Clean minimal styles</strong> — sharp serif and small-caps fonts with no clutter</li>
  <li><strong>Confident tags</strong> — Self Made, Focused, Driven, No Excuses</li>
</ul>

<h3>Where Serious Names Work Best</h3>
<p>Serious fonts suit <strong>professional Instagram bios</strong>, business pages, <strong>LinkedIn</strong>-style display names, and any profile where you want a mature, polished image. Because the styles are real Unicode, your serious name stays crisp on every device and app.</p>

<h3>Make It Look Professional</h3>
<p>Type your name above, choose a clean bold or serif style, tap to copy, and paste it into your profile. No app needed — just an instant upgrade to a serious, professional look.</p>`,
        faqItems: [
            { question: "How do I make a professional-looking stylish name?", answer: "Type your name above and pick one of the clean bold or serif serious styles. Tap to copy it, then paste it into your business profile, bio, or display name." },
            { question: "Do serious fonts work for business profiles?", answer: "Yes. The serious styles use Unicode characters that work in Instagram, LinkedIn-style display names, and business pages, giving you a polished look on any device." },
            { question: "Is the serious name generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy unlimited professional and serious name styles." },
        ],
    },
    // Emotion categories
    {
        slug: 'angry',
        name: 'Angry',
        emoji: '😡',
        description: 'Angry and fierce stylish names',
        metaTitle: 'Angry Stylish Name Generator | Fierce & Bold Names 😡',
        metaDescription: 'Generate angry and fierce stylish names with intense symbols and bold fonts. Express your rage with powerful name styles. Free copy and paste!',
        heroText: 'Unleash your fury with angry name styles! Intense fonts, fierce symbols, and designs that show you mean business.',
        charMapCategory: 'angry',
        seoContent: `<p>An <strong>angry stylish name</strong> radiates rage and intensity with fierce fonts and aggressive symbols (😡 🔥 ☠ ⚡). Our angry name generator turns plain text into bold, threatening styles that warn everyone you mean business. Copy and paste your angry name into your game or profile in seconds.</p>

<h3>Fierce Angry Name Ideas</h3>
<ul>
  <li><strong>Rage names</strong> — Toxic Beast, No Mercy, Pure Rage, Fury King</li>
  <li><strong>Aggressive tags</strong> — Heartless, Savage, Wrath, Destroyer</li>
  <li><strong>Dark anger</strong> — Demon Within, Burning Soul, Hell Fire, Mad Devil</li>
  <li><strong>Gaming names</strong> — Kill Machine, Rage Quit, Berserker, Warpath</li>
</ul>

<h3>Where Angry Names Hit Hard</h3>
<p>Angry names are built for <strong>Free Fire</strong>, <strong>PUBG</strong>, and <strong>BGMI</strong> lobbies where you want to look intimidating, but they also work on Instagram and WhatsApp when you want a bold, no-nonsense vibe. The fierce symbols are real Unicode, so your angry name keeps its edge on any device.</p>

<h3>Show Your Rage</h3>
<p>Type your name above, pick an intense angry style, tap to copy, and paste it anywhere. No app or sign-up — just instant fierce text that shows you are not to be messed with.</p>`,
        faqItems: [
            { question: "How do I make an angry name to copy and paste?", answer: "Type your name above and the generator creates fierce, aggressive angry styles with bold fonts and intense symbols. Tap one to copy it, then paste it into your game name or profile." },
            { question: "Do angry name symbols work in games?", answer: "Yes. The fierce symbols and fonts are Unicode characters supported in Free Fire, PUBG, BGMI, and on Instagram and WhatsApp." },
            { question: "Is the angry name generator free?", answer: "Yes, completely free with no download or sign-up. Generate and copy unlimited angry name styles." },
        ],
    },
    {
        slug: 'sad',
        name: 'Sad',
        emoji: '😢',
        description: 'Sad and emotional name styles',
        metaTitle: 'Sad Stylish Name — Emotional & Heart Broken Names 😢',
        metaDescription: 'Sad stylish name maker ✨ Emotional names with broken heart 💔, tears & melancholy fonts. Heart broken stylish names for WhatsApp, Instagram bio & status. Free!',
        heroText: 'Express your emotions with sad stylish names — broken hearts 💔, tears, and poetic fonts. Perfect for heart broken status, sad bio and emotional WhatsApp names.',
        charMapCategory: 'sad',
        seoContent: `<p>A <strong>sad stylish name</strong> lets you put feelings into words when talking is hard. Our sad name generator wraps your name in melancholy fonts, tears, and broken-heart symbols (💔 🥀 😢) that capture heartbreak and emotion. Copy and paste your sad name into your WhatsApp status, bio, or profile in seconds.</p>

<h3>Emotional Sad Name Ideas</h3>
<ul>
  <li><strong>Heartbroken names</strong> — Broken Soul, Alone Forever, Lost Love, Silent Tears</li>
  <li><strong>Sad bio styles</strong> — Empty Inside, Faded, Hurting, Numb</li>
  <li><strong>Poetic names</strong> — Last Goodbye, Fading Memory, Unspoken Pain</li>
  <li><strong>WhatsApp status</strong> — Missing You, Why Me, Broken Dreams, Tired Heart</li>
</ul>

<h3>Where Sad Names Speak for You</h3>
<p>Sad names are most powerful as <strong>WhatsApp status</strong>, <strong>Instagram bios</strong>, and emotional profile names where a single line can say what you feel. Add a broken-heart symbol (💔) and the mood comes through instantly. Every style is real Unicode, so it looks the same on any phone.</p>

<h3>How to Use a Sad Name</h3>
<p>Type your name above, pick an emotional style with tears or a broken heart, tap to copy, and paste it into your status or bio. No app needed — just an instant way to share how you feel.</p>`,
        faqItems: [
            { question: "How do I make a sad name for my WhatsApp status?", answer: "Type your name above and the generator creates emotional sad styles with tears and broken-heart symbols. Tap one to copy it, then paste it into your WhatsApp status, name, or bio." },
            { question: "Do sad name symbols work on Instagram and WhatsApp?", answer: "Yes. Symbols like 💔 🥀 and the fonts are Unicode, so they display correctly in Instagram bios, WhatsApp statuses, and profile names on any device." },
            { question: "Is the sad name generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy unlimited sad and emotional name styles." },
        ],
    },
    {
        slug: 'attitude',
        name: 'Attitude',
        emoji: '😏',
        description: 'Attitude and swag name styles',
        metaTitle: 'Attitude Stylish Name — Boy Attitude & King Names 😏',
        metaDescription: 'Attitude stylish name maker ✨ Killer attitude, attitude king & boy attitude names with bold fonts & swag symbols. Free copy & paste for Instagram, TikTok & Free Fire.',
        heroText: 'Show your attitude with killer attitude names, attitude king styles & boy attitude designs. Bold fonts and powerful symbols for true bosses on Instagram, TikTok & gaming.',
        charMapCategory: 'attitude',
        seoContent: `<p>An <strong>attitude stylish name</strong> tells people who you are without saying a word. Whether you are a gamer, social media user, or just someone who likes to stand out, an attitude name makes you look confident and bold. Our attitude name generator creates powerful names with strong fonts and boss-level symbols.</p>

<h3>Best Attitude Name Ideas</h3>
<ul>
  <li><strong>Boss names</strong> — Silent Killer, Lone Wolf, Savage King, Dark Devil</li>
  <li><strong>Swag names</strong> — Mr Perfect, Bad Boy, Attitude King, Royal Player</li>
  <li><strong>Girl attitude</strong> — Queen of Hearts, Boss Babe, Drama Queen, Fierce Girl</li>
  <li><strong>Short attitude</strong> — Danger, Toxic, Rebel, Beast, Legend</li>
</ul>

<h3>Why Attitude Names Are Popular</h3>
<p>Attitude names are the most searched name style online. People use them on <strong>Instagram bio</strong>, <strong>WhatsApp status</strong>, <strong>PUBG</strong>, and <strong>Free Fire</strong>. A strong attitude name makes your profile look powerful and gets more attention. Just type your name above, pick an attitude style, and copy it.</p>`,
        faqItems: [
            { question: 'What is an attitude stylish name?', answer: 'An attitude stylish name is a bold, confident-looking name made with special Unicode fonts and symbols. It shows swagger and personality. Popular examples include Lone Wolf, Savage King, and Boss Boy.' },
            { question: 'Where can I use attitude names?', answer: 'Attitude names work everywhere — Instagram bio, WhatsApp status, PUBG, Free Fire, TikTok, Facebook, and all social media. They use Unicode characters that are supported on all devices.' },
        ],
    },
    {
        slug: 'happy',
        name: 'Happy',
        emoji: '😊',
        description: 'Happy and cheerful name styles',
        metaTitle: 'Happy Stylish Name Generator | Cheerful & Joyful Names 😊',
        metaDescription: 'Create happy and cheerful stylish names with joyful symbols, sparkles and sunny fonts. Spread positivity! Free copy and paste!',
        heroText: 'Spread joy with happy, cheerful name styles! Sparkles, sunshine, and feel-good fonts that brighten every profile.',
        charMapCategory: 'happy',
        seoContent: `<p>A <strong>happy stylish name</strong> spreads good vibes with cheerful fonts and bright symbols (😊 ☀ ✨ 🌈). Our happy name generator turns plain text into joyful, feel-good styles that put a smile on anyone who sees your profile. Copy and paste your happy name into your bio or username in seconds.</p>

<h3>Cheerful Happy Name Ideas</h3>
<ul>
  <li><strong>Positive names</strong> — Good Vibes, Sunshine, Happy Soul, Always Smiling</li>
  <li><strong>Bright styles</strong> — names framed with ☀ ✨ 🌈 for a sunny feel</li>
  <li><strong>Feel-good tags</strong> — Living My Best Life, Blessed, Grateful, Joyful</li>
  <li><strong>Fun nicknames</strong> — Happy Go Lucky, Smiley, Cheer Up, Bright Star</li>
</ul>

<h3>Where Happy Names Brighten Things Up</h3>
<p>Happy names are perfect for <strong>Instagram</strong> and <strong>TikTok</strong> bios, <strong>WhatsApp</strong> statuses, and any profile where you want to radiate positivity. The cheerful symbols are real Unicode, so your happy name keeps its sunny look on every phone and computer.</p>

<h3>Spread the Joy</h3>
<p>Type your name above, pick a bright happy style, tap to copy, and paste it anywhere. No app or sign-up — just instant feel-good text that brightens your profile.</p>`,
        faqItems: [
            { question: "How do I make a happy name to copy and paste?", answer: "Type your name above and the generator creates cheerful, joyful styles with bright fonts and sunny symbols. Tap one to copy it, then paste it into your bio, status, or username." },
            { question: "Do happy name symbols work on Instagram and WhatsApp?", answer: "Yes. The cheerful symbols and fonts are Unicode, so they display correctly in Instagram bios, WhatsApp statuses, and TikTok profiles on any device." },
            { question: "Is the happy name generator free?", answer: "Yes, completely free with no download or sign-up. Generate and copy unlimited happy and cheerful name styles." },
        ],
    },
    {
        slug: 'broken-heart',
        name: 'Broken Heart',
        emoji: '💔',
        description: 'Broken heart and heartbreak name styles',
        metaTitle: 'Broken Heart Stylish Name — 💔 Heart Broken Names',
        metaDescription: 'Broken heart stylish name maker ✨ Heart broken names with 💔, tears & bittersweet fonts. Emotional names for WhatsApp status, Instagram bio & sad profiles. Free!',
        heroText: 'Heart broken stylish names — 💔, bandages, and emotional fonts for when words aren\'t enough. Perfect for sad status, broken heart bio and Instagram pain posts.',
        charMapCategory: 'sad',
        seoContent: `<p>A <strong>broken heart stylish name</strong> puts heartbreak into a single line, wrapping your name in broken-heart symbols (💔 🥀), bandages, and bittersweet fonts. Our broken heart name generator helps you express pain and loss in a way words alone cannot. Copy and paste your heartbroken name into your status or bio in seconds.</p>

<h3>Heart Broken Name Ideas</h3>
<ul>
  <li><strong>Pain names</strong> — Broken Heart, Shattered, Bleeding Soul, Torn Apart</li>
  <li><strong>Lost love styles</strong> — Forever Alone, Lost You, Empty Heart, No Love</li>
  <li><strong>Bittersweet tags</strong> — Faded Love, Last Tear, Goodbye Forever</li>
  <li><strong>Status names</strong> — Heart In Pieces, Why Me, Broken But Strong</li>
</ul>

<h3>Where Broken Heart Names Speak</h3>
<p>Broken heart names hit hardest as <strong>WhatsApp status</strong>, <strong>Instagram bios</strong>, and emotional profile names where a 💔 says everything. They are perfect for pain posts and sad captions. Every style is real Unicode, so your heartbroken name looks the same on any phone.</p>

<h3>How to Use It</h3>
<p>Type your name above, pick a broken heart style with a 💔, tap to copy, and paste it into your status, bio, or post. No app needed — just an instant way to share heartbreak.</p>`,
        faqItems: [
            { question: "How do I make a broken heart name to copy and paste?", answer: "Type your name above and the generator creates heartbroken styles with 💔 symbols and emotional fonts. Tap one to copy it, then paste it into your status, bio, or post." },
            { question: "Do broken heart symbols work on WhatsApp and Instagram?", answer: "Yes. The 💔 symbol and the fonts are Unicode, so they display correctly in WhatsApp statuses, Instagram bios, and captions on any device." },
            { question: "Is the broken heart name generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy unlimited broken heart and heartbreak name styles." },
        ],
    },
    {
        slug: 'sexy',
        name: 'Sexy',
        emoji: '💋',
        description: 'Sexy and attractive name styles',
        metaTitle: 'Sexy Stylish Name Generator | Hot & Attractive Names 💋',
        metaDescription: 'Generate sexy and attractive stylish names with flirty symbols and alluring fonts. Make your profile irresistible. Free copy and paste!',
        heroText: 'Turn up the heat with sexy, attractive name styles. Flirty symbols, alluring fonts, and designs that make heads turn.',
        charMapCategory: 'sexy',
        seoContent: `<p>A <strong>sexy stylish name</strong> adds flirty charm and confidence to your profile with alluring fonts and hot symbols (💋 🔥 ♥). Our sexy name generator turns plain text into bold, attractive styles that make heads turn the moment people see your bio or username. Copy and paste your sexy name anywhere in seconds.</p>

<h3>Hot Sexy Name Ideas</h3>
<ul>
  <li><strong>Flirty names</strong> — Hot Stuff, Sweet Poison, Heartbreaker, Tempting</li>
  <li><strong>Confident styles</strong> — names framed with 💋 🔥 ♥ for an alluring glow</li>
  <li><strong>Attractive tags</strong> — Drama Queen, Bad Girl, Mr Charming, Smooth Operator</li>
  <li><strong>Bold nicknames</strong> — Magnetic, Irresistible, Fire & Ice, Wild Heart</li>
</ul>

<h3>Where Sexy Names Turn Heads</h3>
<p>Sexy names are made for <strong>Instagram</strong> and <strong>TikTok</strong> bios, dating profiles, and Snapchat display names where you want to look bold and attractive. The flirty symbols are real Unicode, so your sexy name keeps its allure on every phone and computer.</p>

<h3>Make Your Profile Irresistible</h3>
<p>Type your name above, pick a sexy style with flirty symbols, tap to copy, and paste it into your bio or username. No app or sign-up — just an instant attractive upgrade.</p>`,
        faqItems: [
            { question: "How do I make a sexy name to copy and paste?", answer: "Type your name above and the generator creates flirty, attractive styles with alluring fonts and hot symbols. Tap one to copy it, then paste it into your bio, username, or display name." },
            { question: "Do sexy name fonts work on Instagram and TikTok?", answer: "Yes. The flirty symbols and fonts are Unicode, so they display correctly in Instagram bios, TikTok profiles, and Snapchat names on any device." },
            { question: "Is the sexy name generator free?", answer: "Yes, completely free with no download or sign-up. Generate and copy unlimited sexy and attractive name styles." },
        ],
    },
    {
        slug: 'devil',
        name: 'Devil',
        emoji: '😈',
        description: 'Devil and dark name styles',
        metaTitle: 'Devil Stylish Name — Dark Demonic Names 😈 Free',
        metaDescription: 'Devil stylish name maker ✨ Dark devil names with demonic symbols (☬ ⛧ ☠) & evil fonts. Perfect for PUBG, Free Fire & dark gaming profiles. Free copy & paste!',
        heroText: 'Devil stylish names with dark symbols (☬ ⛧ ☠), demonic fonts and underworld designs. Perfect for PUBG, Free Fire and dark Instagram profiles.',
        charMapCategory: 'devil',
        seoContent: `<p>A <strong>devil stylish name</strong> drips with dark, demonic energy — gothic fonts framed with pentagrams (⛧), skulls (☠), and forbidden symbols (☬ 卐 ⚰). Our devil name generator is built for gamers who want a fearsome, underworld identity that strikes fear into the lobby. Copy and paste your dark name straight into your game profile.</p>

<h3>Dark Devil Name Ideas</h3>
<ul>
  <li><strong>Demon names</strong> — Dark Devil, Hell Lord, Soul Reaper, Demon King</li>
  <li><strong>Evil tags</strong> — Death Bringer, Black Soul, Cursed One, Sinister</li>
  <li><strong>Underworld names</strong> — Lucifer, Shadow Demon, Night Crawler, Grim Reaper</li>
  <li><strong>Gaming clans</strong> — Devil Squad, Dark Army, Hell Raisers, Demon Pack</li>
</ul>

<h3>Where Devil Names Strike Fear</h3>
<p>Devil names dominate in <strong>PUBG</strong>, <strong>Free Fire</strong>, and <strong>BGMI</strong> lobbies where you want a menacing presence, but the dark aesthetic also fits gothic Instagram and Discord profiles. The demonic symbols are real Unicode, so your devil name keeps its dark edge on any device.</p>

<h3>Embrace the Dark Side</h3>
<p>Type your name above, pick a demonic style with skulls and pentagrams, tap to copy, and paste it into your game or profile. No app needed — just an instant dark, fearsome look.</p>`,
        faqItems: [
            { question: "How do I make a devil name to copy and paste?", answer: "Type your name above and the generator creates dark, demonic styles framed with skulls, pentagrams, and gothic fonts. Tap one to copy it, then paste it into your game name or profile." },
            { question: "Do devil symbols like ☠ ⛧ work in PUBG and Free Fire?", answer: "Yes. Dark symbols such as ☬ ☠ ⛧ are Unicode characters supported in PUBG, Free Fire, and BGMI name fields. Test in-game to confirm before finalizing." },
            { question: "Is the devil name generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy unlimited dark and demonic devil names." },
        ],
    },
    {
        slug: 'confused',
        name: 'Confused',
        emoji: '😵‍💫',
        description: 'Confused and puzzled name styles',
        metaTitle: 'Confused Stylish Name Generator | Puzzled & Quirky Names 😵‍💫',
        metaDescription: 'Create confused and quirky stylish names with puzzled symbols and wacky fonts. Fun and unique! Free copy and paste!',
        heroText: 'Embrace the chaos with confused, quirky name styles. Puzzled faces, tangled fonts, and wonderfully weird designs.',
        charMapCategory: 'weird',
        seoContent: `<p>A <strong>confused stylish name</strong> leans into quirky chaos with tangled, upside-down, and weird fonts plus puzzled symbols (😵‍💫 ❓ 〰). Our confused name generator turns plain text into wonderfully strange styles that look delightfully scrambled. Copy and paste your quirky name into any profile or chat in seconds.</p>

<h3>Quirky Confused Name Ideas</h3>
<ul>
  <li><strong>Weird names</strong> — Lost In Space, Brain Buffering, Error 404, Mystery</li>
  <li><strong>Upside-down styles</strong> — flipped and mirrored text that confuses the eye</li>
  <li><strong>Puzzled tags</strong> — Wait What, Confused Soul, Out Of Order, Glitch</li>
  <li><strong>Funny nicknames</strong> — Random Human, Lost Again, No Idea, Question Mark</li>
</ul>

<h3>Where Confused Names Stand Out</h3>
<p>Confused and quirky names are great for <strong>Instagram</strong> and <strong>TikTok</strong> bios, Discord usernames, and anywhere you want a fun, weird vibe that breaks the mold. The strange symbols are real Unicode, so your quirky name keeps its odd charm on every device.</p>

<h3>Get Wonderfully Weird</h3>
<p>Type your name above, pick a confused, tangled style, tap to copy, and paste it anywhere. No app or sign-up — just instant quirky text that stands out from the crowd.</p>`,
        faqItems: [
            { question: "How do I make a confused or weird name to copy and paste?", answer: "Type your name above and the generator creates quirky, tangled, and upside-down styles with puzzled symbols. Tap one to copy it, then paste it into your bio, username, or chat." },
            { question: "Do confused name fonts work on Instagram and Discord?", answer: "Yes. The weird symbols and fonts are Unicode, so they display correctly in Instagram bios, Discord usernames, and TikTok profiles on any device." },
            { question: "Is the confused name generator free?", answer: "Yes, completely free with no download. Generate and copy unlimited confused and quirky name styles." },
        ],
    },
    {
        slug: 'dancing',
        name: 'Dancing',
        emoji: '💃',
        description: 'Dancing and party name styles',
        metaTitle: 'Dancing Stylish Name Generator | Party & Fun Names 💃',
        metaDescription: 'Create fun dancing and party stylish names with festive symbols and dynamic fonts. Party vibes for your profile! Free copy paste!',
        heroText: 'Get the party started with dancing name styles! Festive symbols, dynamic fonts, and vibes that make everyone want to move.',
        charMapCategory: 'happy',
        seoContent: `<p>A <strong>dancing stylish name</strong> brings party energy to your profile with dynamic fonts and festive symbols (💃 🕺 🎉 ♪). Our dancing name generator turns plain text into lively, fun styles that capture the vibe of the dance floor. Copy and paste your dancing name into your bio or username in seconds.</p>

<h3>Fun Dancing Name Ideas</h3>
<ul>
  <li><strong>Dancer names</strong> — Dance Machine, Groove King, Rhythm Queen, Move Master</li>
  <li><strong>Party styles</strong> — names framed with 🎉 ♪ ♫ for a festive feel</li>
  <li><strong>Energy tags</strong> — Party Animal, Beat Drop, On The Floor, Night Mover</li>
  <li><strong>Fun nicknames</strong> — Disco Star, Salsa Soul, Twirl Queen, Music Lover</li>
</ul>

<h3>Where Dancing Names Bring the Party</h3>
<p>Dancing names are perfect for <strong>TikTok</strong> dancers, <strong>Instagram</strong> reels creators, and party-themed profiles. The festive symbols are real Unicode, so your dancing name keeps its energy on every phone and computer, in any app.</p>

<h3>Start the Party</h3>
<p>Type your name above, pick a lively dancing style with music notes, tap to copy, and paste it anywhere. No app or sign-up — just instant party text that makes your profile move.</p>`,
        faqItems: [
            { question: "How do I make a dancing name to copy and paste?", answer: "Type your name above and the generator creates lively, festive dancing styles with dynamic fonts and party symbols. Tap one to copy it, then paste it into your bio, username, or profile." },
            { question: "Do dancing name symbols work on TikTok and Instagram?", answer: "Yes. The festive symbols and fonts are Unicode, so they display correctly in TikTok profiles, Instagram bios, and reels captions on any device." },
            { question: "Is the dancing name generator free?", answer: "Yes, completely free with no download or sign-up. Generate and copy unlimited dancing and party name styles." },
        ],
    },
    {
        slug: 'depressed',
        name: 'Depressed',
        emoji: '😞',
        description: 'Depressed and gloomy name styles',
        metaTitle: 'Depressed Stylish Name Generator | Gloomy & Dark Names 😞',
        metaDescription: 'Create depressed and gloomy stylish names with dark symbols and somber fonts. Express your mood. Free copy and paste!',
        heroText: 'Sometimes words carry the weight of emotions. Gloomy fonts, dark symbols, and names that speak your feelings.',
        charMapCategory: 'sad',
        seoContent: `<p>A <strong>depressed stylish name</strong> carries the weight of heavy emotions in gloomy fonts and somber symbols (😞 🥀 💔). Our depressed name generator turns plain text into dark, melancholy styles that express what is hard to say out loud. Copy and paste your name into your status, bio, or profile in seconds.</p>

<h3>Gloomy Depressed Name Ideas</h3>
<ul>
  <li><strong>Dark mood names</strong> — Empty Inside, Numb Soul, Fading Away, Lost Hope</li>
  <li><strong>Somber styles</strong> — names framed with 🥀 💔 for a heavy, gloomy feel</li>
  <li><strong>Quiet pain tags</strong> — Silent Cry, Broken Mind, Tired Of Trying, Alone</li>
  <li><strong>Status names</strong> — Nobody Cares, Invisible, Dark Days, Drowning</li>
</ul>

<h3>Where Depressed Names Speak for You</h3>
<p>Depressed names work best as <strong>WhatsApp status</strong>, <strong>Instagram bios</strong>, and quiet profile names where a single line carries the mood. Pairing the font with a 🥀 makes the feeling clear. Every style is real Unicode, so it looks the same on any phone.</p>

<h3>How to Use It</h3>
<p>Type your name above, pick a gloomy, somber style, tap to copy, and paste it into your status or bio. No app needed — just an instant way to express how you feel.</p>`,
        faqItems: [
            { question: "How do I make a depressed name for my status?", answer: "Type your name above and the generator creates gloomy, somber styles with dark fonts and melancholy symbols. Tap one to copy it, then paste it into your WhatsApp status, bio, or profile." },
            { question: "Do depressed name fonts work on Instagram and WhatsApp?", answer: "Yes. The somber symbols and fonts are Unicode, so they display correctly in Instagram bios, WhatsApp statuses, and profile names on any device." },
            { question: "Is the depressed name generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy unlimited depressed and gloomy name styles." },
        ],
    },
    {
        slug: 'crying',
        name: 'Crying',
        emoji: '😭',
        description: 'Crying and tearful name styles',
        metaTitle: 'Crying Stylish Name Generator | Tearful & Emotional Names 😭',
        metaDescription: 'Generate crying and tearful stylish names with emotional symbols and sad fonts. Express your tears beautifully. Free copy paste!',
        heroText: 'Let your tears flow with emotional crying name styles. Tearful symbols, sad fonts, and designs that express every sob.',
        charMapCategory: 'sad',
        seoContent: `<p>A <strong>crying stylish name</strong> lets your tears do the talking with emotional fonts and tearful symbols (😭 💧 🥺). Our crying name generator turns plain text into heartfelt, sorrowful styles that capture every sob. Copy and paste your crying name into your status, bio, or post in seconds.</p>

<h3>Tearful Crying Name Ideas</h3>
<ul>
  <li><strong>Sorrow names</strong> — Endless Tears, Crying Soul, Cant Stop, Heavy Heart</li>
  <li><strong>Tearful styles</strong> — names framed with 💧 😭 for an emotional touch</li>
  <li><strong>Heartache tags</strong> — Tears Of Pain, Silent Sob, Crying Inside, Hurt</li>
  <li><strong>Status names</strong> — Why So Sad, Tears Wont Stop, Broken Tonight</li>
</ul>

<h3>Where Crying Names Express You</h3>
<p>Crying names are powerful as <strong>WhatsApp status</strong>, <strong>Instagram bios</strong>, and emotional captions where a 💧 or 😭 says it all. They fit sad posts and tearful moments perfectly. Every style is real Unicode, so your crying name looks the same on any device.</p>

<h3>How to Use It</h3>
<p>Type your name above, pick a tearful style with crying symbols, tap to copy, and paste it into your status, bio, or post. No app needed — just an instant way to share your tears.</p>`,
        faqItems: [
            { question: "How do I make a crying name to copy and paste?", answer: "Type your name above and the generator creates emotional crying styles with tearful symbols and sad fonts. Tap one to copy it, then paste it into your status, bio, or caption." },
            { question: "Do crying name symbols work on Instagram and WhatsApp?", answer: "Yes. Symbols like 😭 💧 and the fonts are Unicode, so they display correctly in Instagram bios, WhatsApp statuses, and captions on any device." },
            { question: "Is the crying name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited crying and tearful name styles." },
        ],
    },
    {
        slug: 'begging',
        name: 'Begging',
        emoji: '🙏',
        description: 'Begging and pleading name styles',
        metaTitle: 'Begging Stylish Name Generator | Pleading & Humble Names 🙏',
        metaDescription: 'Create begging and pleading stylish names with humble symbols and gentle fonts. Perfect for sweet requests. Free copy paste!',
        heroText: 'Add a touch of humility with begging name styles. Pleading faces, gentle fonts, and designs that melt hearts.',
        charMapCategory: 'cute',
        seoContent: `<p>A <strong>begging stylish name</strong> adds a humble, pleading charm to your profile with gentle fonts and sweet symbols (🙏 🥺 ♡). Our begging name generator turns plain text into soft, heart-melting styles perfect for cute requests and adorable profiles. Copy and paste your begging name anywhere in seconds.</p>

<h3>Sweet Begging Name Ideas</h3>
<ul>
  <li><strong>Pleading names</strong> — Please Notice Me, Pretty Please, Forgive Me, One Chance</li>
  <li><strong>Humble styles</strong> — names framed with 🙏 🥺 for a gentle, sweet feel</li>
  <li><strong>Cute request tags</strong> — Need You, Sorry Baby, Beg Your Pardon, Soft Heart</li>
  <li><strong>Adorable nicknames</strong> — Puppy Eyes, Innocent Soul, Cutie Pleads</li>
</ul>

<h3>Where Begging Names Melt Hearts</h3>
<p>Begging names are great for <strong>Instagram</strong> and <strong>TikTok</strong> bios, sweet messages, and cute profile names where you want to look humble and adorable. The gentle symbols are real Unicode, so your begging name keeps its soft charm on every device.</p>

<h3>How to Use It</h3>
<p>Type your name above, pick a gentle begging style with pleading symbols, tap to copy, and paste it into your bio, message, or profile. No app needed — just an instant heart-melting look.</p>`,
        faqItems: [
            { question: "How do I make a cute begging name to copy and paste?", answer: "Type your name above and the generator creates humble, pleading styles with gentle fonts and sweet symbols. Tap one to copy it, then paste it into your bio, message, or profile." },
            { question: "Do begging name symbols work on Instagram and TikTok?", answer: "Yes. Symbols like 🙏 🥺 and the fonts are Unicode, so they display correctly in Instagram bios, TikTok profiles, and messages on any device." },
            { question: "Is the begging name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited begging and pleading name styles." },
        ],
    },
    {
        slug: 'bear',
        name: 'Bear Faces',
        emoji: '🐻',
        description: 'Cute bear face name styles',
        metaTitle: 'Bear Face Name Generator | Cute Bear Style Names 🐻',
        metaDescription: 'Create cute bear face stylish names with adorable bear symbols and kawaii fonts. Perfect for cute profiles. Free copy paste!',
        heroText: 'Be adorably fierce with bear face name styles. Cute bear symbols, kawaii fonts, and designs that are beary cute!',
        charMapCategory: 'cute',
        seoContent: `<p>A <strong>bear face stylish name</strong> wraps your name in adorable bear emoticons (ʕ•ᴥ•ʔ), kawaii fonts, and cute symbols (🐻 ♡). Our bear face name generator turns plain text into the cuddliest, beariest styles you can copy and paste into any profile or chat. It is the easiest way to make your name look soft and adorable in seconds.</p>

<h3>Cute Bear Name Ideas</h3>
<ul>
  <li><strong>Cuddly names</strong> — Teddy Bear, Honey Bear, Cuddle Bug, Bear Hugs</li>
  <li><strong>Kawaii bear styles</strong> — names framed with ʕ•ᴥ•ʔ for maximum cuteness</li>
  <li><strong>Sweet tags</strong> — Beary Cute, Mama Bear, Baby Bear, Soft Paws</li>
  <li><strong>Fun nicknames</strong> — Panda Love, Bear Cub, Fuzzy Friend, Sleepy Bear</li>
</ul>

<h3>Where Bear Faces Look Adorable</h3>
<p>Bear face names are perfect for <strong>Instagram</strong> and <strong>TikTok</strong> bios, <strong>Discord</strong> usernames, and cute couple profiles. The bear emoticons are real Unicode, so your beary name keeps its cuteness on every phone and computer, with no app to install.</p>

<h3>How to Use It</h3>
<p>Type your name above, pick a cuddly bear face style, tap to copy, and paste it into your bio, username, or chat. No sign-up — just an instant adorable, beary look.</p>`,
        faqItems: [
            { question: "How do I make a bear face name to copy and paste?", answer: "Type your name above and the generator creates cute bear styles with kawaii bear emoticons like ʕ•ᴥ•ʔ. Tap one to copy it, then paste it into your bio, username, or chat." },
            { question: "Do bear face emoticons work on Instagram and Discord?", answer: "Yes. The bear faces and symbols are Unicode, so they display correctly in Instagram bios, Discord usernames, and TikTok profiles on any device." },
            { question: "Is the bear face name generator free?", answer: "Yes, completely free with no download. Generate and copy unlimited cute bear face name styles." },
        ],
    },
    {
        slug: 'dog',
        name: 'Dog Faces',
        emoji: '🐕',
        description: 'Cute dog face name styles',
        metaTitle: 'Dog Face Name Generator | Cute Dog Style Names 🐕',
        metaDescription: 'Generate cute dog face stylish names with adorable puppy symbols and playful fonts. Fun and cute! Free copy paste!',
        heroText: 'Show your loyal side with dog face name styles. Puppy symbols, playful fonts, and designs that are pawsitively adorable!',
        charMapCategory: 'cute',
        seoContent: `<p>A <strong>dog face stylish name</strong> adds playful, loyal charm to your profile with cute puppy emoticons (U・ᴥ・U), kawaii fonts, and paw symbols (🐕 🐾). Our dog face name generator turns plain text into pawsitively adorable styles you can copy and paste anywhere. It is the easiest way to give your name a fun, puppy-loving look in seconds.</p>

<h3>Cute Dog Name Ideas</h3>
<ul>
  <li><strong>Puppy names</strong> — Good Boy, Puppy Love, Loyal Friend, Woof Woof</li>
  <li><strong>Kawaii dog styles</strong> — names framed with U・ᴥ・U for extra cuteness</li>
  <li><strong>Playful tags</strong> — Paw Prints, Doggo, Tail Wagger, Best Boy</li>
  <li><strong>Fun nicknames</strong> — Fluffy Pup, Bark Lord, Happy Tail, Pawsome</li>
</ul>

<h3>Where Dog Faces Look Adorable</h3>
<p>Dog face names are perfect for <strong>Instagram</strong> and <strong>TikTok</strong> bios, <strong>Discord</strong> usernames, and pet-lover profiles. The puppy emoticons are real Unicode, so your doggo name keeps its playful charm on every phone and computer, with no app to install.</p>

<h3>How to Use It</h3>
<p>Type your name above, pick a playful dog face style, tap to copy, and paste it into your bio, username, or chat. No sign-up — just an instant pawsitively adorable look.</p>`,
        faqItems: [
            { question: "How do I make a dog face name to copy and paste?", answer: "Type your name above and the generator creates cute dog styles with playful puppy emoticons like U・ᴥ・U. Tap one to copy it, then paste it into your bio, username, or chat." },
            { question: "Do dog face emoticons work on Instagram and Discord?", answer: "Yes. The puppy faces and paw symbols are Unicode, so they display correctly in Instagram bios, Discord usernames, and TikTok profiles on any device." },
            { question: "Is the dog face name generator free?", answer: "Yes, completely free with no download. Generate and copy unlimited cute dog face name styles." },
        ],
    },
    {
        slug: 'boy',
        name: 'Boy',
        emoji: '👦',
        description: 'Stylish names for boys — cool, dashing & attitude',
        metaTitle: 'Stylish Name for Boy | Cool & Dashing Boy Names 👦',
        metaDescription: 'Generate stylish names for boys with cool fonts, symbols, and decorations. Attitude boy names, dashing styles, and more. Copy and paste instantly!',
        heroText: 'Get the most stylish boy names with cool fonts and dashing designs. Perfect for gaming profiles, Instagram bio, and social media. Stand out like a king!',
        charMapCategory: 'cool',
        seoContent: `<p>Looking for a <strong>stylish name for boy</strong>? You are in the right place. Our boy name generator creates cool, attitude-filled names with bold fonts and powerful symbols. Whether you want a name for your Instagram bio, PUBG profile, WhatsApp status, or TikTok username, we have hundreds of styles that make you look like a boss.</p>

<h3>Popular Boy Name Styles</h3>
<ul>
  <li><strong>Attitude names</strong> — Bad Boy, Rebel, Silent Killer, Savage King</li>
  <li><strong>Royal names</strong> — Royal King, Dark Prince, Dark Lord, Boss Boy</li>
  <li><strong>Cool names</strong> — Lone Wolf, Alpha Male, Heartless, Hunter</li>
  <li><strong>Gaming names</strong> — Headshot Machine, Shadow Assassin, Night Hawk</li>
</ul>

<h3>How Boys Use Stylish Names</h3>
<p>Boys use stylish names to stand out on social media and gaming platforms. An <strong>attitude boy name</strong> with bold fonts shows confidence. A <strong>cool boy name</strong> with unique symbols gets noticed in friend lists. Just type your name above, pick a style, and copy it. It takes 5 seconds and works everywhere.</p>`,
        faqItems: [
            { question: 'What are the best stylish names for boys?', answer: 'Popular boy names include King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf, and Boss Boy. Our generator turns these into stylish fonts with symbols you can copy and paste.' },
            { question: 'Can I use boy names on PUBG and Free Fire?', answer: 'Yes! All our stylish boy names use Unicode characters that work on PUBG, Free Fire, BGMI, and most mobile games.' },
        ],
    },
    {
        slug: 'girl',
        name: 'Girl',
        emoji: '👧',
        description: 'Stylish names for girls — cute, beautiful & trendy',
        metaTitle: 'Stylish Name for Girl | Cute & Beautiful Girl Names 👧',
        metaDescription: 'Create beautiful stylish names for girls with cute fonts, hearts, flowers, and trendy symbols. Perfect for Instagram, TikTok, and WhatsApp. Free copy paste!',
        heroText: 'Find the prettiest stylish girl names with beautiful fonts and cute decorations. Hearts, butterflies, sparkles — make your profile shine!',
        charMapCategory: 'cute',
        seoContent: `<p>Want a <strong>stylish name for girl</strong> that looks beautiful on your profile? Our girl name generator creates gorgeous names with cute hearts, flowers, butterflies, and kawaii fonts. Whether you need a name for Instagram, TikTok, WhatsApp, or Snapchat, we have styles that are pretty, elegant, and totally unique.</p>

<h3>Trending Girl Name Styles</h3>
<ul>
  <li><strong>Cute names</strong> — Princess, Sweet Angel, Cute Doll, Baby Girl</li>
  <li><strong>Queen names</strong> — Queen Bee, Queen of Hearts, Boss Babe</li>
  <li><strong>Aesthetic names</strong> — Moon Child, Butterfly Girl, Star Girl</li>
  <li><strong>Beautiful names</strong> — Rose Princess, Diamond Girl, Lovely Girl</li>
</ul>

<h3>Where Girls Use Stylish Names</h3>
<p>Stylish girl names are most popular on <strong>Instagram bio</strong> and <strong>TikTok profiles</strong>. A pretty name with hearts and flowers makes your profile look beautiful and attracts more followers. You can also use them on WhatsApp status, Snapchat display name, and Facebook profile. Just type your name, pick a style, and paste it anywhere.</p>`,
        faqItems: [
            { question: 'What are the best stylish names for girls?', answer: 'Top picks include Princess, Queen Bee, Butterfly Girl, Sweet Angel, and Moon Child. Our generator creates these in beautiful fonts with hearts, flowers, and sparkle symbols.' },
            { question: 'Do girl names work on Instagram and TikTok?', answer: 'Yes! Our stylish girl names use Unicode characters that work perfectly on Instagram bio, TikTok username, WhatsApp profile, and all social media apps.' },
        ],
    },
    {
        slug: 'beautiful',
        name: 'Beautiful',
        emoji: '🌸',
        description: 'Beautiful stylish names with elegant fonts',
        metaTitle: 'Beautiful Stylish Name Generator | Elegant & Pretty Names 🌸',
        metaDescription: 'Generate beautiful stylish names with elegant fonts and pretty decorations. Gorgeous name styles for Instagram, TikTok, and social media. Free copy paste!',
        heroText: 'Create the most beautiful names with elegant fonts, graceful decorations, and stunning designs. Make every letter a work of art.',
        charMapCategory: 'fancy',
        seoContent: `<p>A <strong>beautiful stylish name</strong> turns your name into elegant art with graceful cursive, flowing script, and pretty decorations (✿ ❀ ♡ ✧). Our beautiful name generator transforms plain text into stunning, refined styles you can copy and paste anywhere. It is the easiest way to make your name look gorgeous in seconds.</p>

<h3>Elegant Beautiful Name Ideas</h3>
<ul>
  <li><strong>Graceful names</strong> — Beautiful Soul, Pretty Petal, Elegant Rose, Grace</li>
  <li><strong>Floral styles</strong> — names framed with ✿ ❀ for a soft, pretty look</li>
  <li><strong>Aesthetic tags</strong> — Divine, Angelic, Serene, Blossom</li>
  <li><strong>Pretty nicknames</strong> — Glamour Girl, Charming, Lovely Petal, Gorgeous</li>
</ul>

<h3>Where Beautiful Names Stand Out</h3>
<p>Beautiful names are a favorite for <strong>Instagram</strong> and <strong>TikTok</strong> bios, wedding invites, and elegant profile names. Because every style is real Unicode rather than an image, your beautiful name stays gorgeous on every phone and computer, in any app.</p>

<h3>How to Use It</h3>
<p>Type your name above, browse the elegant beautiful styles, tap to copy, and paste it into your bio, username, or invitation. No app or sign-up — just an instant gorgeous, artful look.</p>`,
        faqItems: [
            { question: "How do I make a beautiful name to copy and paste?", answer: "Type your name above and the generator creates elegant, graceful styles with cursive script and pretty decorations. Tap one to copy it, then paste it into your bio, username, or invitation." },
            { question: "Do beautiful fonts work on Instagram and TikTok?", answer: "Yes. The elegant fonts and floral symbols are Unicode, so they display correctly in Instagram bios, TikTok profiles, and captions on any device." },
            { question: "Is the beautiful name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited beautiful and elegant name styles." },
        ],
    },
    {
        slug: 'couple',
        name: 'Couple',
        emoji: '💑',
        description: 'Stylish couple names — romantic & matching pairs',
        metaTitle: 'Stylish Couple Name Maker | Romantic Matching Names 💑',
        metaDescription: 'Create stylish couple names with romantic fonts and love symbols. King & Queen, His & Hers matching name pairs. Wifey & Hubby styles. Free copy paste!',
        heroText: 'Express your love with stylish couple names. Romantic fonts, matching pairs, and love-themed designs for you and your partner.',
        charMapCategory: 'love',
        seoContent: `<p>Looking for <strong>stylish couple names</strong>? Our couple name generator creates beautiful matching name pairs with romantic fonts, hearts, and love symbols. Whether you and your partner want matching Instagram bios, WhatsApp names, or game squad names, we have the perfect romantic styles.</p>

<h3>Popular Couple Name Ideas</h3>
<ul>
  <li><strong>King & Queen</strong> — ♔ King + ♕ Queen matching pairs</li>
  <li><strong>His & Hers</strong> — Matching romantic fonts for both partners</li>
  <li><strong>Hubby & Wifey</strong> — Cute married couple names</li>
  <li><strong>BF & GF</strong> — Boyfriend and girlfriend matching styles</li>
  <li><strong>Soulmates</strong> — Deep romantic name pairs with heart symbols</li>
</ul>

<h3>How to Use Couple Names</h3>
<p>Type one name at a time (like your name first, then your partner's name). Pick the same font style for both names so they match. Add love symbols like ♡ ♥ 💕 between them. Copy and paste to your Instagram bio, WhatsApp profile, or game names. Many couples use matching names on <strong>Free Fire</strong> and <strong>PUBG</strong> squads too.</p>`,
        faqItems: [
            { question: 'How to make matching couple names?', answer: 'Type your name first and pick a style. Then type your partner\'s name and pick the same style. This creates a matching pair. Add hearts (♡ ♥) between the names for a romantic look.' },
            { question: 'Can I use couple names on games?', answer: 'Yes! Many couples use matching stylish names on PUBG, Free Fire, and other games. It shows you are a duo team. Our names use Unicode that works in most games.' },
        ],
    },
    {
        slug: 'group-name',
        name: 'Group Name',
        emoji: '👥',
        description: 'Stylish group names for friends, squads & clans',
        metaTitle: 'Stylish Friends Group Name Generator | Squad & Clan Names 👥',
        metaDescription: 'Generate stylish group names for friend groups, gaming squads, and WhatsApp groups. Cool clan names, squad goals, and crew styles. Free copy paste!',
        heroText: 'Create the perfect stylish group name for your squad, clan, or friend group. Cool designs, gaming fonts, and team-ready styles.',
        charMapCategory: 'gaming',
        seoContent: `<p>A <strong>stylish group name</strong> gives your squad, clan, or friend group a shared identity that everyone can be proud of. Our group name generator creates cool, team-ready styles with bold fonts and gaming symbols (꧁ ⚔ ★) for WhatsApp groups, gaming squads, and friend crews. Copy and paste your group name in seconds.</p>

<h3>Best Group Name Ideas</h3>
<ul>
  <li><strong>Friend groups</strong> — Squad Goals, Best Friends Forever, The Legends, Crazy Crew</li>
  <li><strong>Gaming squads</strong> — Elite Squad, Pro Players, Dark Army, Kill Squad</li>
  <li><strong>Clan names</strong> — Kings of Gaming, Royal Clan, Shadow Legion, Fire Storm</li>
  <li><strong>WhatsApp groups</strong> — Family Forever, Office Buddies, College Gang</li>
</ul>

<h3>Where Group Names Work</h3>
<p>Group names are perfect for <strong>WhatsApp groups</strong>, <strong>Free Fire</strong> and <strong>PUBG</strong> squads, <strong>Discord</strong> servers, and friend chats. A stylish team name with symbols makes your group instantly recognizable. Every style is real Unicode, so it looks the same for every member on any device.</p>

<h3>How to Use It</h3>
<p>Type your group name above, pick a bold style with symbols, tap to copy, and paste it into your group settings or squad name. No app needed — just an instant team identity.</p>`,
        faqItems: [
            { question: "How do I make a stylish group name to copy and paste?", answer: "Type your group name above and the generator creates cool, team-ready styles with bold fonts and symbols. Tap one to copy it, then paste it into your WhatsApp group, Discord server, or game squad name." },
            { question: "Do group name symbols work on WhatsApp and in games?", answer: "Yes. The symbols and fonts are Unicode, so they display correctly in WhatsApp group names, Free Fire and PUBG squads, and Discord servers on any device." },
            { question: "Is the group name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited stylish group, squad, and clan names." },
        ],
    },
    {
        slug: 'mafia',
        name: 'Mafia',
        emoji: '🔫',
        description: 'Mafia style names — gangster & boss vibes',
        metaTitle: 'Mafia Stylish Name — Royal Mafia & Killer Names 🔫',
        metaDescription: 'Mafia stylish name maker ✨ Royal mafia, gangster Don & killer attitude names with boss fonts & dark symbols. Free copy & paste for Free Fire, PUBG & Instagram.',
        heroText: 'Rule like a Don with royal mafia stylish names. Dark fonts, boss symbols, and killer gangster designs that command respect on Free Fire, PUBG and Instagram.',
        charMapCategory: 'gaming',
        seoContent: `<p>A <strong>mafia stylish name</strong> gives you the boss-level, gangster identity that commands respect. Our mafia name generator creates powerful Don and underworld names with dark fonts and royal symbols (꧁ ☬ ♛ 卐) built for gamers and social media users who want to rule like a kingpin. Copy and paste your mafia name straight into your profile.</p>

<h3>Royal Mafia Name Ideas</h3>
<ul>
  <li><strong>Don names</strong> — Royal Mafia, The Don, Godfather, Big Boss</li>
  <li><strong>Gangster tags</strong> — Killer King, Underworld Lord, Don Of Dons, Capo</li>
  <li><strong>Boss styles</strong> — names framed with ♛ ꧁꧂ for a kingpin look</li>
  <li><strong>Clan names</strong> — Mafia Squad, Royal Gang, Don Family, Crime Lords</li>
</ul>

<h3>Where Mafia Names Command Respect</h3>
<p>Mafia names dominate in <strong>Free Fire</strong>, <strong>PUBG</strong>, and <strong>BGMI</strong> lobbies where you want a boss presence, and they also look powerful on Instagram and WhatsApp. The royal symbols are real Unicode, so your mafia name keeps its kingpin vibe on any device.</p>

<h3>How to Use It</h3>
<p>Type your name above, pick a dark mafia style with boss symbols, tap to copy, and paste it into your game or profile. No app needed — just an instant Don-level identity.</p>`,
        faqItems: [
            { question: "How do I make a mafia name to copy and paste?", answer: "Type your name above and the generator creates boss-level mafia styles with dark fonts and royal symbols. Tap one to copy it, then paste it into your game name or social media profile." },
            { question: "Do mafia name symbols work in Free Fire and PUBG?", answer: "Yes. Symbols like ꧁ ☬ ♛ are Unicode characters supported in Free Fire, PUBG, and BGMI name fields, and they work on Instagram and WhatsApp too." },
            { question: "Is the mafia name generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy unlimited royal mafia and gangster names." },
        ],
    },
    {
        slug: 'wifi',
        name: 'WiFi Names',
        emoji: '📶',
        description: 'Stylish & funny WiFi network names',
        metaTitle: 'Stylish WiFi Names | Cool & Funny Hotspot Names 📶',
        metaDescription: 'Get stylish and funny WiFi network names with cool fonts and symbols. Creative hotspot names that will make your neighbors smile. Free copy paste!',
        heroText: 'Make your WiFi network stand out with stylish and funny names. Creative, cool, and hilarious hotspot names everyone will notice.',
        charMapCategory: 'cool',
        seoContent: `<p>A <strong>stylish WiFi name</strong> turns your boring router or hotspot into a conversation starter. Our WiFi name generator creates funny, cool, and creative network names with eye-catching fonts and symbols that your neighbors will notice every time they scan for a connection. Copy and paste your WiFi name straight into your router settings.</p>

<h3>Funny WiFi Name Ideas</h3>
<ul>
  <li><strong>Funny names</strong> — Tell My WiFi Love Her, Pretty Fly For WiFi, Get Off My LAN</li>
  <li><strong>Neighbor jokes</strong> — Hide Yo Kids Hide Yo WiFi, FBI Surveillance Van, Not Free</li>
  <li><strong>Cool styles</strong> — names in fancy fonts that stand out in the network list</li>
  <li><strong>Hotspot names</strong> — Mobile Hotspot Pro, Loading WiFi, No Internet For You</li>
</ul>

<h3>Where Stylish WiFi Names Shine</h3>
<p>A creative WiFi name (SSID) shows up whenever anyone nearby scans for networks — at home, in apartments, or in the office. A funny or stylish name makes people smile and remember you. Most routers and phone hotspots accept Unicode characters, so your fancy WiFi name displays correctly on other devices.</p>

<h3>How to Use It</h3>
<p>Type your WiFi name above, pick a funny or stylish style, tap to copy, and paste it into your router admin panel or phone hotspot settings as the network name (SSID). No app needed — just an instant network upgrade.</p>`,
        faqItems: [
            { question: "How do I set a stylish WiFi name?", answer: "Type your name above, pick a funny or stylish style, and copy it. Then open your router admin panel or phone hotspot settings and paste it as the network name (SSID)." },
            { question: "Do fancy fonts and symbols work in WiFi names?", answer: "Most modern routers and phone hotspots support Unicode characters in the SSID, so funny and stylish WiFi names display correctly on nearby devices. Avoid very long names as some routers limit the SSID length." },
            { question: "Is the WiFi name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited funny and stylish WiFi network names." },
        ],
    },
];

// Platform-specific pages
export interface Platform {
    slug: string;
    name: string;
    emoji: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    heroText: string;
    seoContent?: string;
    faqItems?: { question: string; answer: string }[];
}

export const platforms: Platform[] = [
    {
        slug: 'instagram',
        name: 'Instagram',
        emoji: '📸',
        description: 'Stylish names for Instagram bio and profile',
        metaTitle: 'Instagram Stylish Name Generator | Cool Bio & Profile Fonts 📸',
        metaDescription: 'Create stylish names and fonts for your Instagram bio, profile name, and captions. Stand out with unique Unicode fonts. Free copy and paste!',
        heroText: 'Make your Instagram profile stand out with stylish fonts and cool names. Perfect for bio, username, and captions.',
        seoContent: `<p>Your <strong>Instagram name</strong> is the first thing people see on your profile. A plain name blends in with millions of other accounts. But a <strong>stylish Instagram name</strong> with unique fonts and symbols instantly grabs attention and makes people want to follow you. Our Instagram name generator creates beautiful Unicode fonts that work in your Instagram bio, display name, and captions.</p>

<h3>Best Instagram Name Ideas</h3>
<ul>
  <li><strong>Aesthetic bios</strong> — Soft Girl Era, Dark Aesthetic, Moon Child, Main Character</li>
  <li><strong>Cute names</strong> — Sweet Angel, Star Girl, Butterfly Girl, That Girl</li>
  <li><strong>Boss names</strong> — Boss Babe, Iconic, Luxury Life, Glow Up</li>
  <li><strong>Boy names</strong> — King of Style, Alpha Male, Savage King, Lone Wolf</li>
</ul>

<h3>How to Change Your Instagram Name Font</h3>
<p>Instagram does not let you change fonts normally. But our tool uses <strong>Unicode characters</strong> that look like different fonts. Here is how: 1) Type your name above. 2) Pick a style you like. 3) Copy it. 4) Go to Instagram > Edit Profile > Name. 5) Paste your new stylish name. That is it — your profile now has a unique font that nobody else has.</p>

<h3>Tips for Instagram Bio Fonts</h3>
<p>Keep your bio name under 30 characters. Use symbols like ✨ 🦋 💫 to add personality. Avoid too many special characters in your username (@ handle) because Instagram may not accept all Unicode there. Your <strong>display name</strong> and <strong>bio</strong> support most stylish fonts.</p>`,
        faqItems: [
            { question: 'How do I get a stylish name on Instagram?', answer: 'Use our generator: type your name, pick a style, copy it, then go to Instagram > Edit Profile > Name and paste it. The stylish font will show up on your profile instantly.' },
            { question: 'Do stylish fonts work in Instagram bio?', answer: 'Yes! Instagram bio and display name both support Unicode fonts. Your username (@ handle) has limited support, but your display name and bio work with all our fonts.' },
            { question: 'Will stylish names affect my Instagram reach?', answer: 'No. Stylish names use standard Unicode characters. They do not affect your reach, engagement, or algorithm. They just make your profile look more attractive.' },
        ],
    },
    {
        slug: 'tiktok',
        name: 'TikTok',
        emoji: '🎵',
        description: 'Cool names for TikTok profile',
        metaTitle: 'TikTok Name Style — Stylish TikTok Names 🎵 Copy & Paste',
        metaDescription: 'TikTok name style maker ✨ Stylish TikTok names with cool fonts, unique symbols & boy attitude styles. Free copy & paste for TikTok display name & bio.',
        heroText: 'Get the trendiest TikTok name styles — cool fonts, unique symbols, and boy attitude designs. Stylish names that match the TikTok vibe.',
        seoContent: `<p>Your <strong>TikTok name</strong> is your brand. On a platform with millions of creators, a stylish display name helps you stand out and get remembered. Our TikTok name generator creates trendy Unicode fonts that work perfectly on your TikTok profile, bio, and display name.</p>

<h3>TikTok Name Ideas by Niche</h3>
<ul>
  <li><strong>Content creators</strong> — Viral King, Trend Setter, FYP King, Content Creator</li>
  <li><strong>Dancers</strong> — Dance Machine, Groove Queen, Rhythm King</li>
  <li><strong>Comedy</strong> — Skit King, Funny Guy, Comedy Queen</li>
  <li><strong>Aesthetic</strong> — Soft Girl Era, Dark Aesthetic, Main Character</li>
</ul>

<h3>TikTok Name Tips</h3>
<p>TikTok display names can be up to <strong>30 characters</strong>. Your username (@handle) has more restrictions and may not support all Unicode fonts. But your <strong>display name</strong> (the one shown on your profile) supports most of our stylish fonts. A catchy font makes people more likely to follow you when they see your videos on the For You Page.</p>`,
        faqItems: [
            { question: 'How to change TikTok username font?', answer: 'You cannot change your TikTok username (@handle) font, but you can change your display name font. Use our generator, copy a stylish name, go to TikTok Profile > Edit Profile > Name and paste it.' },
            { question: 'Do stylish fonts help get more TikTok followers?', answer: 'A unique display name makes your profile stand out when people see your videos. It helps with branding and makes you more memorable, which can lead to more followers.' },
        ],
    },
    {
        slug: 'whatsapp',
        name: 'WhatsApp',
        emoji: '💬',
        description: 'Stylish names for WhatsApp status and profile',
        metaTitle: 'WhatsApp Stylish Name Generator | Cool Status & Profile Names 💬',
        metaDescription: 'Create stylish names and fonts for your WhatsApp profile name and status. Beautiful Unicode fonts that work instantly. Free copy paste!',
        heroText: 'Upgrade your WhatsApp profile with stylish names and fonts. Perfect for profile names, status updates, and group names.',
        seoContent: `<p>Make your <strong>WhatsApp profile name</strong> look stylish with unique fonts and symbols. Most people have boring plain text names on WhatsApp. A stylish name makes your profile stand out in chat lists and group members. Our WhatsApp name generator creates names that work perfectly on WhatsApp profile, status, and group names.</p>

<h3>WhatsApp Name Ideas</h3>
<ul>
  <li><strong>Attitude names</strong> — Attitude King, Last Seen Never, Silent Killer</li>
  <li><strong>Love names</strong> — Love Yourself, Dreamer, Blessed, On Fire</li>
  <li><strong>Status names</strong> — Self Made, Savage Mode, Keep It Real</li>
  <li><strong>Group names</strong> — Squad Goals, Best Friends Forever, The Legends</li>
</ul>

<h3>How to Change WhatsApp Name Font</h3>
<p>Open WhatsApp > Settings > tap your name > edit. Paste the stylish name from our generator. WhatsApp allows up to <strong>25 characters</strong> for your profile name. You can also use stylish text in your <strong>About/Status</strong> section (139 characters) and <strong>group names</strong> (100 characters). Our fonts work on both Android and iPhone WhatsApp.</p>`,
        faqItems: [
            { question: 'How to get stylish name on WhatsApp?', answer: 'Use our generator: type your name, pick a style, copy it. Then open WhatsApp > Settings > tap your name > paste the stylish name. It will show up instantly for all your contacts.' },
            { question: 'What is the WhatsApp name character limit?', answer: 'WhatsApp allows 25 characters for profile name, 139 characters for About/Status, and 100 characters for group names. Some Unicode symbols count as 2 characters.' },
        ],
    },
    {
        slug: 'facebook',
        name: 'Facebook',
        emoji: '👤',
        description: 'Stylish names for Facebook profile',
        metaTitle: 'Facebook Stylish Name Generator | Cool Profile Names 👤',
        metaDescription: 'Generate stylish names for your Facebook profile. Unique fonts and symbols that make your profile stand out. Free and instant!',
        heroText: 'Transform your Facebook profile with stylish names and unique fonts. Stand out in comments, posts, and your profile.',
        seoContent: `<p>A <strong>stylish Facebook name</strong> makes your profile look unique among billions of users. While Facebook has strict rules about names, you can still use Unicode fonts for your display name. Our Facebook name generator creates beautiful fonts that are accepted by Facebook and look amazing on your profile, in comments, and on posts.</p>

<h3>Facebook Name Tips</h3>
<ul>
  <li><strong>Display name</strong> — Use cursive or bold fonts for an elegant look</li>
  <li><strong>Comments</strong> — Stylish text in comments gets more attention</li>
  <li><strong>Posts</strong> — Use fancy fonts in your status updates</li>
  <li><strong>Gaming</strong> — Facebook Gaming profiles support Unicode names</li>
</ul>

<h3>Important Facebook Name Rules</h3>
<p>Facebook requires you to use your real name. But you can style it with Unicode fonts. For example, "John" can become "𝒥𝑜𝒽𝓃" or "𝕁𝕠𝕙𝕟". Avoid using too many symbols or completely unreadable names — Facebook may flag them. Subtle styling like bold, italic, or cursive fonts usually work without issues.</p>`,
        faqItems: [
            { question: 'Does Facebook allow stylish names?', answer: 'Facebook requires real names but accepts Unicode font variations of your name. Cursive, bold, and italic versions of your real name usually work. Avoid excessive symbols or fake names as Facebook may require ID verification.' },
            { question: 'How to change Facebook name font?', answer: 'Use our generator to create a stylish version of your name, copy it, then go to Facebook > Settings > Personal Details > Name and paste it. Facebook may take a few days to review the change.' },
        ],
    },
    {
        slug: 'free-fire',
        name: 'Free Fire',
        emoji: '🔥',
        description: 'Stylish names for Free Fire nicknames',
        metaTitle: 'Free Fire Name Style — FF Stylish Names & Symbols 🔥 (Free)',
        metaDescription: 'Free Fire name style maker ✨ FF stylish names with cool symbols (꧁ ☬ ⚡), pro fonts & boy attitude nicknames. Free copy & paste — works in-game.',
        heroText: 'Stand out in Free Fire lobbies with the coolest FF name styles. Special symbols that work in-game (꧁ ☬ ⚡), unique fonts, and pro-level nicknames.',
        seoContent: `<p><strong>Free Fire stylish names</strong> help you stand out in the game lobby. Your name is what other players see in the kill feed, on the leaderboard, and in your squad. A cool name with symbols like ꧁ ⚡ ☬ 🔥 makes you look like a pro player. Our Free Fire name generator creates names that actually work in-game — no broken characters.</p>

<h3>Best Free Fire Name Ideas</h3>
<ul>
  <li><strong>Pro names</strong> — Headshot King, One Tap King, Grand Master, FF God</li>
  <li><strong>Aggressive names</strong> — Fire Demon, Skull Trooper, Destroyer, Burning Fury</li>
  <li><strong>Funny names</strong> — Boiled Aloo, Desi Gamer, Boom Boom, Speed Kill</li>
  <li><strong>Squad names</strong> — Elite Squad, Fire Storm, Free Fire Boss</li>
</ul>

<h3>Free Fire Name Rules</h3>
<p>Free Fire allows up to <strong>12 characters</strong> in your nickname. Some Unicode symbols count as 2 characters. You need <strong>diamonds or a name change card</strong> to change your name in Free Fire. So pick the perfect name before you change it. Our generator shows you exactly how each name looks before you copy it.</p>`,
        faqItems: [
            { question: 'How to get a stylish name in Free Fire?', answer: 'Use our generator to create a stylish name, copy it, then open Free Fire > Profile > Edit Name and paste it. You will need diamonds or a name change card.' },
            { question: 'What is the character limit for Free Fire names?', answer: 'Free Fire allows up to 12 characters. Some Unicode symbols count as 2 characters, so keep it short. Our generator creates names that fit within this limit.' },
        ],
    },
    {
        slug: 'pubg',
        name: 'PUBG',
        emoji: '🎯',
        description: 'Stylish names for PUBG nicknames',
        metaTitle: 'PUBG Name Generator — Stylish PUBG Names & Symbols 🎯',
        metaDescription: 'PUBG name generator ✨ Stylish PUBG nicknames with cool symbols (꧁ ☬ ⚡), pro fonts & boy attitude names. Free copy & paste for PUBG Mobile.',
        heroText: 'Dominate PUBG with a stylish nickname. Special gaming symbols (꧁ ☬ ⚡), pro-style fonts, and boy attitude designs that make you stand out.',
        seoContent: `<p>A <strong>stylish PUBG name</strong> makes you stand out in every match. Your name appears on the kill feed, leaderboards, and when players spectate you. Pro players and streamers use decorated names with symbols like ꧁ ☬ ★ ⚡ to build their brand. Our PUBG name generator creates hundreds of cool names that work on PUBG Mobile.</p>

<h3>Top PUBG Name Ideas</h3>
<ul>
  <li><strong>Sniper names</strong> — AWM God, Sniper Elite, Headshot Machine</li>
  <li><strong>Battle names</strong> — Battle God, Conqueror, War Freak, Death Dealer</li>
  <li><strong>Squad names</strong> — Squad Leader, Pro Player, Royal Elite</li>
  <li><strong>Fun names</strong> — Pan Warrior, Chicken Dinner, Hot Dropper, Loot King</li>
</ul>

<h3>PUBG Name Change Guide</h3>
<p>PUBG Mobile gives you <strong>one free rename</strong>. After that, you need a <strong>Rename Card</strong> from shop or crates. PUBG allows up to <strong>14 characters</strong>. Make sure to choose the perfect name before using your card. Type your name above, browse styles, and copy the one that looks best.</p>`,
        faqItems: [
            { question: 'How to change name in PUBG Mobile?', answer: 'Go to your PUBG profile > click on your name > use a Rename Card > paste your stylish name. You get one free rename. After that you need a rename card from the shop.' },
            { question: 'What symbols work in PUBG names?', answer: 'Most Unicode symbols work in PUBG Mobile including ꧁ ꧂ ☬ ★ ⚡ ♛ ☠️. Our generator only uses PUBG-compatible symbols so every name we generate will work.' },
        ],
    },
    {
        slug: 'discord',
        name: 'Discord',
        emoji: '🎮',
        description: 'Stylish names for Discord username',
        metaTitle: 'Discord Stylish Name Generator | Cool Username Fonts 🎮',
        metaDescription: 'Create stylish Discord usernames with unique fonts and symbols. Stand out in servers with cool name styles. Free copy and paste!',
        heroText: 'Level up your Discord presence with stylish usernames. Cool fonts, unique symbols, and styles that pop in any server.',
        seoContent: `<p>Your <strong>Discord username</strong> is your identity across every server you join. A stylish Discord name with unique fonts makes you stand out in member lists, chat messages, and voice channels. Our Discord name generator creates cool Unicode fonts that work perfectly on Discord — no Nitro required.</p>

<h3>Discord Name Ideas</h3>
<ul>
  <li><strong>Gaming names</strong> — Gamer Lord, Server King, Admin God, Combat Pro</li>
  <li><strong>Aesthetic names</strong> — Moon Child, Dark Aesthetic, Neon Vibes</li>
  <li><strong>Funny names</strong> — Mod Bot, Pirate King, Voice Chat King</li>
  <li><strong>Server admin names</strong> — Server Boss, Nitro Booster, Streamer</li>
</ul>

<h3>Discord Name Rules</h3>
<p>Discord usernames can be up to <strong>32 characters</strong>. Discord recently switched to a new username system — your display name now supports Unicode fonts and is what people see in servers. Your unique username (the one with no discriminator) has more restrictions. Use stylish fonts in your <strong>display name</strong> for the best results.</p>`,
        faqItems: [
            { question: 'How to get a stylish name on Discord?', answer: 'Use our generator to create a stylish name. Then go to Discord > User Settings > Edit Profile > Display Name and paste it. Your display name supports most Unicode fonts.' },
            { question: 'Do I need Nitro for stylish Discord names?', answer: 'No! Stylish names use Unicode characters that work for all Discord users — free and Nitro. You do not need any special subscription to use fancy fonts in your display name.' },
        ],
    },
    // New platforms
    {
        slug: 'youtube',
        name: 'YouTube',
        emoji: '▶️',
        description: 'Stylish names for YouTube channel',
        metaTitle: 'YouTube Stylish Name Generator | Cool Channel Names ▶️',
        metaDescription: 'Create stylish YouTube channel names and display names with unique fonts. Stand out on YouTube with cool name styles. Free copy paste!',
        heroText: 'Make your YouTube channel unforgettable with stylish names. Unique fonts, eye-catching symbols, and creator-level designs.',
        seoContent: `<p>Your <strong>YouTube channel name</strong> is your brand on the world's biggest video platform. A plain name disappears in the recommendations, but a <strong>stylish YouTube name</strong> with unique fonts and symbols catches the eye in search results, comments, and subscriber feeds. Our YouTube name generator creates Unicode fonts that work on your channel name, display name, and comments.</p>

<h3>Best YouTube Name Ideas</h3>
<ul>
  <li><strong>Gaming channels</strong> — Pro Gamer, Game Master, Live Streamer, FPS King</li>
  <li><strong>Vlog channels</strong> — Daily Vlogs, Life With Me, Travel Diaries</li>
  <li><strong>Tech & how-to</strong> — Tech Guru, How To King, Gadget Pro, Review Master</li>
  <li><strong>Music & creative</strong> — Beat Maker, Cover Star, Studio Vibes, Art Lab</li>
</ul>

<h3>How to Add a Stylish Font to YouTube</h3>
<p>YouTube does not let you change fonts normally, but Unicode characters look like custom fonts and work fine. Type your name above, pick a style, copy it, then go to YouTube Studio > Customization > Basic Info (or your Google account name) and paste it. Your channel display name will instantly show the stylish font in videos and comments.</p>

<h3>Tips for YouTube Channel Names</h3>
<p>Keep your name short and readable so viewers remember it. Add a subtle symbol like ▶ ✦ or 🎬 to add personality without making it look cluttered. Because the result is real Unicode, it displays the same on mobile, desktop, and TV apps.</p>`,
        faqItems: [
            { question: "How do I get a stylish name on YouTube?", answer: "Use our generator: type your name, pick a style, copy it, then go to YouTube Studio > Customization > Basic Info (or your Google account name) and paste it. The stylish font shows up on your channel and comments." },
            { question: "Do stylish fonts work in YouTube comments?", answer: "Yes. YouTube comments and display names support Unicode fonts, so your stylish name appears the same to all viewers on any device." },
            { question: "Will a stylish channel name affect my YouTube growth?", answer: "No. Stylish names use standard Unicode characters and do not affect search, recommendations, or monetization. They simply make your channel more memorable." },
        ],
    },
    {
        slug: 'spotify',
        name: 'Spotify',
        emoji: '🎧',
        description: 'Stylish names for Spotify profile',
        metaTitle: 'Spotify Stylish Name Generator | Cool Profile Names 🎧',
        metaDescription: 'Generate stylish Spotify profile names with unique fonts and music symbols. Make your Spotify profile stand out. Free copy paste!',
        heroText: 'Give your Spotify profile a musical makeover with stylish names. Unique fonts and symbols that match the vibe.',
        seoContent: `<p>Your <strong>Spotify display name</strong> shows up on your profile, your public playlists, and when friends see what you are listening to. A <strong>stylish Spotify name</strong> with unique fonts and music symbols (♪ ♫ 🎧) gives your profile personality and makes your playlists stand out. Our Spotify name generator creates Unicode fonts that work directly on your profile and playlist titles.</p>

<h3>Stylish Spotify Name Ideas</h3>
<ul>
  <li><strong>Music lover names</strong> — Melody Soul, Beat Drop, Sound Wave, Vibe Check</li>
  <li><strong>Aesthetic names</strong> — Lo-Fi Dreams, Midnight Vibes, Soft Sounds</li>
  <li><strong>Playlist titles</strong> — My Daily Mix, Late Night Feels, Workout Energy</li>
  <li><strong>Fun nicknames</strong> — DJ Mode, Music Addict, Headphone King, Tune Master</li>
</ul>

<h3>How to Change Your Spotify Name Font</h3>
<p>Open Spotify > Profile > Edit Profile. Type your name above in our generator, pick a stylish style, copy it, and paste it into the name field. You can also use fancy fonts in your <strong>playlist titles</strong> to make them pop. The stylish text shows up the same on the Spotify app and web player.</p>

<h3>Tips for Spotify Profiles</h3>
<p>Add a music symbol like ♫ or 🎧 to match the platform vibe, but keep it readable. Because the styles are real Unicode, they display correctly on iPhone, Android, and desktop Spotify, so all your followers see the same look.</p>`,
        faqItems: [
            { question: "How do I get a stylish name on Spotify?", answer: "Use our generator: type your name, pick a style, copy it, then open Spotify > Profile > Edit Profile and paste it into the name field. The stylish font shows up on your profile instantly." },
            { question: "Can I use stylish fonts in Spotify playlist names?", answer: "Yes. Spotify playlist titles support Unicode fonts and symbols, so you can copy a stylish style and paste it into your playlist name to make it stand out." },
            { question: "Is the Spotify name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited stylish Spotify profile and playlist names." },
        ],
    },
    {
        slug: 'telegram',
        name: 'Telegram',
        emoji: '📨',
        description: 'Stylish names for Telegram profile',
        metaTitle: 'Telegram Stylish Name Generator | Cool Username Fonts 📨',
        metaDescription: 'Create stylish Telegram usernames and display names with unique fonts. Beautiful Unicode fonts for your Telegram profile. Free!',
        heroText: 'Upgrade your Telegram with stylish names and cool fonts. Perfect for usernames, group names, and display names.',
        seoContent: `<p>Your <strong>Telegram display name</strong> is what people see in chats, groups, and contact lists. A <strong>stylish Telegram name</strong> with unique fonts and symbols makes your profile stand out and look more interesting. Our Telegram name generator creates beautiful Unicode fonts that work on your display name, bio, channel, and group names.</p>

<h3>Stylish Telegram Name Ideas</h3>
<ul>
  <li><strong>Cool names</strong> — Lone Wolf, Night Owl, Silent King, Digital Nomad</li>
  <li><strong>Aesthetic names</strong> — Moon Child, Soft Vibes, Dark Aesthetic, Dreamer</li>
  <li><strong>Channel names</strong> — Daily Updates, Tech World, Movie Hub, Meme Central</li>
  <li><strong>Group names</strong> — The Squad, Chat Zone, Friends Forever, Study Group</li>
</ul>

<h3>How to Change Your Telegram Name Font</h3>
<p>Open Telegram > Settings > Edit Profile. Type your name above in our generator, pick a style, copy it, and paste it into the First Name or Last Name field. You can also style your <strong>bio</strong>, <strong>channel name</strong>, and <strong>group name</strong>. Note that your <strong>@username</strong> handle only allows plain letters, but your display name supports full Unicode fonts.</p>

<h3>Tips for Telegram Profiles</h3>
<p>Keep your display name clear so contacts can find you in search. A subtle symbol like ✦ or 🌙 adds personality without clutter. Because the styles are real Unicode, they look the same on Android, iPhone, and Telegram Desktop.</p>`,
        faqItems: [
            { question: "How do I get a stylish name on Telegram?", answer: "Use our generator: type your name, pick a style, copy it, then go to Telegram > Settings > Edit Profile and paste it into the First Name field. The stylish font appears in all your chats." },
            { question: "Can I use stylish fonts in my Telegram username?", answer: "Your @username handle only allows plain letters, numbers, and underscores. But your display name, bio, channel, and group names all support Unicode fonts and symbols." },
            { question: "Is the Telegram name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited stylish Telegram display names, channel names, and group names." },
        ],
    },
    {
        slug: 'tumblr',
        name: 'Tumblr',
        emoji: '📝',
        description: 'Stylish names for Tumblr blog',
        metaTitle: 'Tumblr Stylish Name Generator | Aesthetic Blog Names 📝',
        metaDescription: 'Generate aesthetic Tumblr blog names with unique fonts and artistic symbols. Perfect for your Tumblr aesthetic. Free copy paste!',
        heroText: 'Feed your aesthetic with Tumblr-perfect stylish names. Artistic fonts, dreamy symbols, and designs that match your blog vibe.',
        seoContent: `<p>Your <strong>Tumblr blog name</strong> sets the mood for your whole aesthetic. A <strong>stylish Tumblr name</strong> with dreamy fonts and artistic symbols (✧ ☽ ⋆ ❀) instantly gives your blog that soft, curated vibe Tumblr is famous for. Our Tumblr name generator creates aesthetic Unicode fonts that work in your blog title, display name, and posts.</p>

<h3>Aesthetic Tumblr Name Ideas</h3>
<ul>
  <li><strong>Soft aesthetic</strong> — Soft Grunge, Pastel Dreams, Cloud Nine, Fairy Core</li>
  <li><strong>Dark aesthetic</strong> — Midnight Soul, Faded, Lost In Thought, Dark Academia</li>
  <li><strong>Dreamy names</strong> — Moon Child, Stardust, Ethereal, Daydreamer</li>
  <li><strong>Artistic tags</strong> — Poetic Soul, Vintage Vibes, Indie Heart, Aesthetic Lab</li>
</ul>

<h3>How to Add a Stylish Font on Tumblr</h3>
<p>Type your name above, pick an aesthetic style, copy it, then go to Tumblr > Settings > select your blog > edit the Title or use it in your description. You can also paste fancy fonts directly into your <strong>posts</strong> and <strong>captions</strong>. The stylish text keeps its look on the Tumblr app and web dashboard.</p>

<h3>Tips for Tumblr Aesthetics</h3>
<p>Pair your stylish name with celestial symbols like ☽ ✧ ⋆ for that classic Tumblr glow. Because the styles are real Unicode rather than images, your aesthetic name displays the same for every follower on any device.</p>`,
        faqItems: [
            { question: "How do I get a stylish name on Tumblr?", answer: "Use our generator: type your name, pick an aesthetic style, copy it, then go to Tumblr > Settings > your blog and paste it into the Title or description. The stylish font shows on your blog instantly." },
            { question: "Can I use stylish fonts in Tumblr posts?", answer: "Yes. Tumblr posts and captions support Unicode fonts and symbols, so you can copy a dreamy style and paste it straight into your posts for an aesthetic look." },
            { question: "Is the Tumblr name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited aesthetic Tumblr blog names and fonts." },
        ],
    },
    {
        slug: 'snapchat',
        name: 'Snapchat',
        emoji: '👻',
        description: 'Stylish names for Snapchat profile',
        metaTitle: 'Snapchat Stylish Name Generator | Cool Display Names 👻',
        metaDescription: 'Create cool Snapchat display names with stylish fonts and fun symbols. Make your Snapchat profile unique. Free copy paste!',
        heroText: 'Snap in style with cool display names! Fun fonts, playful symbols, and designs that match the Snapchat energy.',
        seoContent: `<p>Your <strong>Snapchat display name</strong> is what friends see in chats, your snap score, and your Bitmoji profile. A <strong>stylish Snapchat name</strong> with fun fonts and playful symbols (👻 ✨ 🔥) gives your profile personality and matches Snapchat's energetic vibe. Our Snapchat name generator creates cool Unicode fonts that work on your display name.</p>

<h3>Cool Snapchat Name Ideas</h3>
<ul>
  <li><strong>Fun names</strong> — Snap King, Streak Master, Filter Queen, Ghost Mode</li>
  <li><strong>Aesthetic names</strong> — Sunset Soul, Golden Hour, Vibe Only, Moonlight</li>
  <li><strong>Boy names</strong> — Cool Dude, Savage Snap, Night Hawk, Bad Boy</li>
  <li><strong>Girl names</strong> — Snap Queen, Sweet Angel, Star Girl, Glow Up</li>
</ul>

<h3>How to Change Your Snapchat Name Font</h3>
<p>Open Snapchat > tap your Bitmoji > Settings (gear icon) > Name. Type your name above in our generator, pick a style, copy it, and paste it into the display name field. Note your <strong>username</strong> cannot be styled, but your <strong>display name</strong> (the one friends see) supports Unicode fonts.</p>

<h3>Tips for Snapchat Names</h3>
<p>Add a playful symbol like 👻 ✨ or 🔥 to match the app's fun energy. Keep it short so it fits cleanly in the chat list. Because the styles are real Unicode, your stylish name displays the same to all your friends on iPhone and Android.</p>`,
        faqItems: [
            { question: "How do I get a stylish name on Snapchat?", answer: "Use our generator: type your name, pick a style, copy it, then go to Snapchat > Settings > Name and paste it into the display name field. The stylish font shows up for your friends instantly." },
            { question: "Can I change my Snapchat username font?", answer: "No, your Snapchat username cannot be styled. But your display name (the name friends see in chats) supports Unicode fonts, so you can make that stylish." },
            { question: "Is the Snapchat name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited stylish Snapchat display names and symbols." },
        ],
    },
    {
        slug: 'roblox',
        name: 'Roblox',
        emoji: '🧱',
        description: 'Stylish names for Roblox username',
        metaTitle: 'Roblox Stylish Name Generator | Cool Gaming Usernames 🧱',
        metaDescription: 'Generate stylish Roblox usernames with cool fonts and gaming symbols. Stand out in Roblox games. Free copy and paste!',
        heroText: 'Build your Roblox identity with stylish usernames. Creative fonts, gaming symbols, and designs that stand out in any game.',
        seoContent: `<p>A <strong>stylish Roblox name</strong> makes you look like a pro player in any Roblox game. Whether you play Blox Fruits, Adopt Me, Tower Defense, or any experience, your display name is how others know you. Our Roblox name generator creates cool fonts that work as Roblox display names.</p>

<h3>Roblox Name Ideas</h3>
<ul>
  <li><strong>Gaming names</strong> — Blox Master, Obby God, Game Creator, Combat Pro</li>
  <li><strong>Rich names</strong> — Robux King, Diamond Player, Premium Gamer</li>
  <li><strong>Fun names</strong> — Adopt Me Star, Speed Run, Shark Bite, Blox Fruits King</li>
  <li><strong>Cool names</strong> — Dark Knight, Shadow Ninja, Fire Lord</li>
</ul>

<h3>Roblox Display Name Rules</h3>
<p>Roblox has two names: your <strong>username</strong> (permanent, limited characters) and your <strong>display name</strong> (changeable, supports some Unicode). Display names can be changed every 7 days and allow up to <strong>20 characters</strong>. Not all Unicode fonts work on Roblox — our generator focuses on fonts that Roblox accepts. Test your name before finalizing.</p>`,
        faqItems: [
            { question: 'How to get a stylish Roblox display name?', answer: 'Use our generator, copy a stylish name, then go to Roblox > Settings > Display Name and paste it. You can change your display name once every 7 days.' },
            { question: 'Do all fonts work on Roblox?', answer: 'Not all Unicode fonts work on Roblox. Roblox filters some special characters. Our generator includes fonts that are commonly accepted. Always test the name before finalizing.' },
        ],
    },
    {
        slug: 'fortnite',
        name: 'Fortnite',
        emoji: '🏰',
        description: 'Stylish names for Fortnite nicknames',
        metaTitle: 'Fortnite Stylish Name Generator | Cool Epic Names 🏰',
        metaDescription: 'Create stylish Fortnite display names with cool symbols and fonts. Generate epic gaming names. Free copy and paste!',
        heroText: 'Drop in with a Victory Royale name! Epic fonts, battle symbols, and designs worthy of a Fortnite champion.',
        seoContent: `<p>A <strong>stylish Fortnite name</strong> makes you look like a champion before the bus even drops. Your Epic display name shows up on the kill feed, the elimination screen, and your friends list, so a cool name with epic fonts and battle symbols (⚔ ★ 🏆) helps you stand out. Our Fortnite name generator creates Unicode display names worthy of a Victory Royale.</p>

<h3>Best Fortnite Name Ideas</h3>
<ul>
  <li><strong>Pro names</strong> — Victory King, Build Master, No Scope God, Crank 90s</li>
  <li><strong>Aggressive names</strong> — Storm Trooper, Loot Goblin, Skull Trooper, Final Circle</li>
  <li><strong>Funny names</strong> — Default Dance, Bush Camper, Floor Loot, Free V Bucks</li>
  <li><strong>Squad names</strong> — Victory Squad, Drop Squad, Tilted Team, Battle Bus</li>
</ul>

<h3>How to Change Your Fortnite Name</h3>
<p>Fortnite uses your <strong>Epic Games display name</strong>. Type your name above, pick a style, copy it, then go to your Epic Games account settings > General > Display Name and paste it. Epic lets you change your display name once every two weeks, and Unicode fonts are supported. Keep it under the character limit so it fits cleanly.</p>

<h3>Tips for Fortnite Names</h3>
<p>Add a battle symbol like ⚔ ★ or 🏆 to give your name a champion feel, but keep it readable for opponents who spectate you. Because the styles are real Unicode, your name shows up the same on PC, console, and mobile Fortnite.</p>`,
        faqItems: [
            { question: "How to change name in Fortnite?", answer: "Fortnite uses your Epic Games display name. Use our generator, copy a stylish name, then go to your Epic Games account > General > Display Name and paste it. You can change it once every two weeks." },
            { question: "Do stylish symbols work in Fortnite names?", answer: "Yes. Epic display names support many Unicode characters and symbols, so a stylish name shows up the same on PC, console, and mobile. Test it to confirm before finalizing." },
            { question: "Is the Fortnite name generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited stylish Fortnite display names and epic battle symbols." },
        ],
    },
    {
        slug: 'bgmi',
        name: 'BGMI',
        emoji: '🎮',
        description: 'Stylish names for BGMI nicknames',
        metaTitle: 'BGMI Name Generator — Stylish BGMI Names & Symbols 🎮',
        metaDescription: 'BGMI name generator ✨ Stylish BGMI nicknames with cool symbols (꧁ ☬ ⚡), gaming fonts & keyboard-friendly designs. Free copy & paste for BGMI Mobile.',
        heroText: 'Conquer BGMI with a stylish nickname. Pro-level fonts, battle-ready symbols (꧁ ☬ ⚡), and keyboard-friendly designs that command respect.',
        seoContent: `<p><strong>BGMI stylish names</strong> are how you build your in-game identity. A cool nickname with symbols like ꧁ ☬ ⚡ ★ makes you look like a pro on the kill feed, leaderboard, and squad chat. Our BGMI name generator creates hundreds of stylish names that work directly in Battlegrounds Mobile India — copy and paste straight into your profile.</p>

<h3>Best BGMI Name Ideas</h3>
<ul>
  <li><strong>Boy attitude names</strong> — Killer King, Death Lord, Battle God, Conqueror</li>
  <li><strong>Sniper names</strong> — AWM God, Sniper Elite, Headshot Pro, Quick Scope</li>
  <li><strong>Squad names</strong> — Squad Boss, Pro Player, Elite Forces, Royal Squad</li>
  <li><strong>Symbol names</strong> — ꧁༒☬KING☬༒꧂, ★彡 LEGEND 彡★, ⚡ STORM ⚡</li>
</ul>

<h3>BGMI Name Change Rules</h3>
<p>BGMI gives you <strong>one free rename</strong>. After that, you need a <strong>Rename Card</strong> from the shop or crates (costs 180 UC). BGMI allows up to <strong>14 characters</strong> in your nickname. Some Unicode symbols count as 2 characters, so keep it short. Type your name above, browse the styles, and copy your favorite before using your rename card.</p>

<h3>How to Use Stylish Symbols in BGMI</h3>
<p>BGMI fully supports Unicode characters including symbols like ꧁ ꧂ ☬ ★ ⚡ ♛ ☠ 卐. Our generator only includes BGMI-compatible symbols — every name shown will work in-game without broken characters. For best results, pair a stylish font with 1–2 decorative symbols around your name.</p>`,
        faqItems: [
            { question: 'How to change name in BGMI?', answer: 'Open BGMI > tap your profile > tap your nickname > use a Rename Card > paste your stylish name. You get one free rename. After that, Rename Cards cost 180 UC from the shop.' },
            { question: 'What symbols work in BGMI names?', answer: 'Most Unicode symbols work in BGMI including ꧁ ꧂ ☬ ★ ⚡ ♛ ☠ 卐. Our generator only uses BGMI-compatible symbols so every name we generate will display correctly in-game.' },
        ],
    },
];

// Get all page slugs for sitemap generation
export function getAllSlugs(): string[] {
    return [
        ...categories.map(c => c.slug),
        ...platforms.map(p => p.slug),
    ];
}
