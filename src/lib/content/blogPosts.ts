// Blog content for the Stylish Names guides hub.
// Bodies are self-authored, trusted semantic HTML rendered into a `prose` container.
// Dates are real publish dates (staggered) so the section reads as an established hub.

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string; // ISO YYYY-MM-DD
    category: 'Guides' | 'Tips' | 'Gaming' | 'Social Media';
    readingMinutes: number;
    html: string;
}

// Shared closing call-to-action appended to every post body.
const CTA_HTML = `
<hr />
<p><em>Ready to try it?</em> Open the <a href="/">free stylish name generator</a>, type your name, and copy a style in one tap — no sign-up, no download, and it works on every phone and computer.</p>
`;

const POSTS: BlogPost[] = [
    {
        slug: 'how-to-make-a-stylish-name',
        title: 'How to Make a Stylish Name (Step-by-Step Guide)',
        description: 'A simple, beginner-friendly walkthrough for turning a plain name into a stylish, copy-and-paste name with fancy fonts and symbols that work anywhere.',
        date: '2026-03-08',
        category: 'Guides',
        readingMinutes: 5,
        html: `
<p>A <strong>stylish name</strong> is the quickest way to make your profile stand out — whether it is your Instagram display name, a gaming nickname, or a WhatsApp status. The good news is you do not need any design skills or apps. This guide walks you through making one in under a minute.</p>

<h2>Step 1: Type your name</h2>
<p>Open the <a href="/">stylish name generator</a> and type your name (or any word) into the box. The tool instantly converts it into hundreds of styles using special Unicode characters. You will see everything from elegant cursive to bold gothic to symbol-wrapped designs.</p>

<h2>Step 2: Pick a style that matches the vibe</h2>
<p>Different platforms suit different looks. Here is a quick rule of thumb:</p>
<ul>
  <li><strong>Instagram &amp; TikTok</strong> — soft <a href="/tool/cursive">cursive</a>, <a href="/tool/aesthetic">aesthetic</a>, and <a href="/tool/small">small caps</a> styles read as clean and modern.</li>
  <li><strong>Gaming (Free Fire, PUBG, BGMI)</strong> — bold, <a href="/tool/gothic">gothic</a>, and symbol-framed names look pro in the lobby.</li>
  <li><strong>WhatsApp &amp; Facebook</strong> — subtle <a href="/tool/bold">bold</a> or cursive versions of your real name look elegant without being unreadable.</li>
</ul>

<h2>Step 3: Add symbols (optional)</h2>
<p>Want extra flair? Wrap your name in decorative symbols like ꧁ ꧂ ☬ ★ ⚡ ♛. Our <a href="/tool/symbol-keyboard">symbol keyboard</a> lets you browse and copy them, or use the <a href="/tool/style-builder">style builder</a> to combine a font with frames automatically.</p>

<h2>Step 4: Copy and paste</h2>
<p>Tap any style to copy it to your clipboard. Then paste it wherever you want — your bio, username, status, or game profile. Because the result is real Unicode (not a screenshot), it looks identical for everyone who sees it.</p>

<h2>A few tips before you finalize</h2>
<ol>
  <li><strong>Mind character limits.</strong> Free Fire allows about 12 characters, PUBG 14, Instagram bio 30. Some symbols count as two characters.</li>
  <li><strong>Test before committing.</strong> A few games and apps filter certain characters — paste it once to confirm it displays correctly.</li>
  <li><strong>Keep it readable.</strong> One or two effects usually look better than stacking five.</li>
</ol>
${CTA_HTML}`,
    },
    {
        slug: 'best-stylish-fonts-for-instagram-bio',
        title: 'Best Stylish Fonts for Your Instagram Bio',
        description: 'The font styles that look best in an Instagram bio and display name, plus exactly how to add them and the limits you should know about.',
        date: '2026-03-22',
        category: 'Social Media',
        readingMinutes: 6,
        html: `
<p>Your <a href="/instagram">Instagram</a> name and bio are the first things a visitor reads before deciding to follow. A plain name blends in; a <strong>stylish font</strong> instantly signals personality. Here are the styles that consistently look best — and how to add them.</p>

<h2>1. Cursive script</h2>
<p>The most popular bio look by far. <a href="/tool/cursive">Cursive fonts</a> feel personal and elegant, perfect for creators, artists, and aesthetic accounts. Example: 𝓎𝑜𝓊𝓇 𝓃𝒶𝓂𝑒.</p>

<h2>2. Small caps and tiny text</h2>
<p><a href="/tool/small">Small text</a> gives a minimalist, editorial feel that stands out precisely because it is quiet — great for one-line bios and subtitles like ˢᵐᵃˡˡ ᶜᵃᵖˢ.</p>

<h2>3. Bold sans</h2>
<p>Instagram has no bold button, so <a href="/tool/bold">bold Unicode</a> is the trick creators use to make one line — a tagline or a link label — pop without shouting.</p>

<h2>4. Aesthetic and full-width</h2>
<p>The dreamy, spaced-out <a href="/tool/aesthetic">aesthetic / vaporwave</a> look (ｌｉｋｅ ｔｈｉｓ) pairs beautifully with soft emoji and is a favorite for fashion, music, and lifestyle pages.</p>

<h2>How to change your Instagram font</h2>
<ol>
  <li>Type your name in the <a href="/">generator</a> and copy a style.</li>
  <li>Open Instagram → <strong>Edit Profile</strong>.</li>
  <li>Paste it into the <strong>Name</strong> field (the display name) or your bio.</li>
  <li>Save. Your new font appears instantly.</li>
</ol>

<h2>Important limits</h2>
<ul>
  <li>Fancy fonts work in your <strong>display name</strong>, <strong>bio</strong>, captions, and comments.</li>
  <li>Your <strong>@username</strong> (handle) only accepts letters, numbers, periods, and underscores — Unicode fonts will not save there.</li>
  <li>Keep the display name under ~30 characters so it does not get cut off.</li>
</ul>
<p>Stylish fonts are just standard characters, so they do <strong>not</strong> affect your reach or the algorithm — they only make your profile more memorable.</p>
${CTA_HTML}`,
    },
    {
        slug: 'free-fire-pubg-stylish-name-guide',
        title: 'How to Get a Stylish Name in Free Fire & PUBG',
        description: 'Step-by-step instructions for creating and changing a stylish Free Fire, PUBG, and BGMI nickname, including which symbols work and the character limits.',
        date: '2026-04-05',
        category: 'Gaming',
        readingMinutes: 6,
        html: `
<p>In battle royale games, your name shows up in the kill feed, on the leaderboard, and to every player who spectates you. A <strong>stylish gaming name</strong> with the right symbols is how pros and streamers build a recognizable identity. Here is how to make one for <a href="/free-fire">Free Fire</a>, <a href="/pubg">PUBG</a>, and BGMI.</p>

<h2>Create your name</h2>
<p>Type your nickname into the <a href="/">generator</a> and browse the <a href="/gaming">gaming styles</a>. For that classic esports look, wrap your name in symbols like ꧁༒☬ NAME ☬༒꧂ or ★彡 NAME 彡★. The <a href="/tool/symbol-keyboard">symbol keyboard</a> has every game-safe symbol in one place.</p>

<h2>Which symbols actually work?</h2>
<p>These render reliably in Free Fire, PUBG Mobile, and BGMI: ꧁ ꧂ ☬ ★ ⚡ ♛ ☠ 卐 ✰ ᤲ. Avoid heavy <a href="/tool/glitch">glitch / Zalgo</a> stacking in-game — some clients trim or reject it. Always paste your chosen name once to confirm it displays before you commit.</p>

<h2>Character limits</h2>
<ul>
  <li><strong>Free Fire:</strong> ~12 characters (some symbols count as two).</li>
  <li><strong>PUBG Mobile:</strong> up to 14 characters.</li>
  <li><strong>BGMI:</strong> up to 14 characters.</li>
</ul>

<h2>How to change your name in-game</h2>
<ol>
  <li><strong>Free Fire:</strong> Profile → Edit Name → paste → confirm. Needs a Name Change Card or diamonds.</li>
  <li><strong>PUBG / BGMI:</strong> Tap your nickname → use a <strong>Rename Card</strong> → paste. You usually get one free rename; after that, Rename Cards cost UC.</li>
</ol>
<p>Because renames cost in-game currency, decide on the perfect name first. Preview a few options in the generator, copy your favorite, and only then spend the card. Want ideas? Browse <a href="/attitude">attitude</a> and <a href="/mafia">mafia</a> name styles for inspiration.</p>
${CTA_HTML}`,
    },
    {
        slug: 'what-is-unicode-text',
        title: 'What Is Unicode Text and Why Fancy Fonts Work Everywhere',
        description: 'A plain-English explanation of how a font generator actually works — why these are Unicode characters, not real fonts, and why they paste correctly almost everywhere.',
        date: '2026-04-19',
        category: 'Guides',
        readingMinutes: 5,
        html: `
<p>Ever wondered how you can paste a "fancy font" into Instagram or a game that has no font settings at all? The secret is <strong>Unicode</strong> — and understanding it explains both why these styles work everywhere and why a few characters occasionally do not.</p>

<h2>Fonts vs. characters</h2>
<p>A real font (like Arial or Times New Roman) has to be installed on a device to display. You cannot install a font inside an Instagram bio or a PUBG name field — which is why those apps have no font menu. So a <a href="/">stylish name generator</a> does something different: instead of changing the font, it swaps each of your letters for a <strong>different character</strong> that already looks like a styled letter.</p>

<h2>What is Unicode?</h2>
<p>Unicode is the universal standard that assigns a unique code to every character — every alphabet, emoji, and symbol. It includes special alphabets such as 𝓼𝓬𝓻𝓲𝓹𝓽, 𝕕𝕠𝕦𝕓𝕝𝕖-𝕤𝕥𝕣𝕦𝕔𝕜, and 𝐛𝐨𝐥𝐝 serif letters. When you copy one of these, you are copying genuine characters — not an image and not a font file.</p>

<h2>Why it works almost everywhere</h2>
<p>Because nearly every modern app and operating system supports Unicode, those characters display the same on an iPhone, an Android phone, and a computer. That is why a name you make here looks identical to everyone who sees it on <a href="/instagram">Instagram</a>, <a href="/whatsapp">WhatsApp</a>, <a href="/discord">Discord</a>, or in a game.</p>

<h2>Why a few characters sometimes break</h2>
<ul>
  <li><strong>Coverage gaps:</strong> Unicode does not include a styled version of every single letter or number, so a generator uses the closest match.</li>
  <li><strong>Platform filters:</strong> some games and the Instagram @handle only allow basic letters and numbers.</li>
  <li><strong>Old devices:</strong> very old phones may not have the newest Unicode blocks and show a box □ instead.</li>
</ul>
<p>The fix is simple — if one style does not paste cleanly, pick another. Cursive, bold, and small caps have the widest support, while heavy <a href="/tool/glitch">glitch text</a> and brand-new emoji are the most likely to vary.</p>
${CTA_HTML}`,
    },
    {
        slug: 'whatsapp-stylish-name-and-status-guide',
        title: 'WhatsApp Stylish Names & Status: The Complete Guide',
        description: 'How to set a stylish WhatsApp profile name, About/status, and group name — with the exact character limits and step-by-step instructions for Android and iPhone.',
        date: '2026-05-03',
        category: 'Social Media',
        readingMinutes: 5,
        html: `
<p>Most people leave their <a href="/whatsapp">WhatsApp</a> name as plain text. A <strong>stylish name</strong> makes you instantly recognizable in chat lists and group member lists — and it takes about ten seconds to set up.</p>

<h2>Where you can use stylish text on WhatsApp</h2>
<ul>
  <li><strong>Profile name</strong> — up to ~25 characters.</li>
  <li><strong>About / status</strong> — up to 139 characters, great for a quote or vibe.</li>
  <li><strong>Group names</strong> — up to 100 characters.</li>
</ul>

<h2>How to set it (Android &amp; iPhone)</h2>
<ol>
  <li>Make your name in the <a href="/">generator</a> and copy a style. Subtle <a href="/tool/cursive">cursive</a> or <a href="/tool/bold">bold</a> looks best here.</li>
  <li>Open WhatsApp → <strong>Settings</strong> → tap your name at the top.</li>
  <li>Tap the name field, paste your stylish name, and save.</li>
  <li>For your status, do the same in the <strong>About</strong> field.</li>
</ol>

<h2>Stylish status ideas</h2>
<p>Pair a font with a matching mood. For example:</p>
<ul>
  <li><strong>Attitude:</strong> browse <a href="/attitude">attitude styles</a> — "Silent but dangerous", "Self made".</li>
  <li><strong>Love:</strong> try <a href="/love">love styles</a> with ♡ ♥ 💕 for a romantic touch.</li>
  <li><strong>Sad / emotional:</strong> the <a href="/sad">sad styles</a> work well for heartfelt one-liners with 💔.</li>
</ul>

<h2>Quick tips</h2>
<p>Keep the profile name short so it is not truncated, and avoid overly broken or hard-to-read characters for your main name — save the wild styles for your status. Our fonts work on both Android and iPhone WhatsApp because they are standard Unicode.</p>
${CTA_HTML}`,
    },
    {
        slug: 'cool-symbols-for-names',
        title: 'Cool Symbols & Decorations for Names (꧁ ☬ ★)',
        description: 'A handy reference of the most popular symbols for stylish names and gaming tags, plus how to combine them with fonts so they actually display in-game.',
        date: '2026-05-17',
        category: 'Tips',
        readingMinutes: 4,
        html: `
<p>Symbols are what turn a normal nickname into a head-turning <strong>stylish name</strong>. Wrapping your name in the right decorations — ꧁ ꧂ ☬ ★ ⚡ — is the signature look of <a href="/gaming">gaming tags</a> and aesthetic bios alike. Here is a quick reference and how to use them.</p>

<h2>Popular symbol categories</h2>
<ul>
  <li><strong>Frames &amp; brackets:</strong> ꧁ ꧂ ༺ ༻ 「 」 ⟦ ⟧ — wrap around your whole name.</li>
  <li><strong>Crosses &amp; dark:</strong> ☬ ✞ ⛧ 卐 ☠ — popular for <a href="/devil">devil</a> and edgy styles.</li>
  <li><strong>Stars &amp; sparkles:</strong> ★ ✦ ✧ ⋆ ✰ ⚡ — for <a href="/star">star &amp; glitter</a> names.</li>
  <li><strong>Royalty:</strong> ♛ ♕ ♚ ♔ — for king/queen and <a href="/couple">couple</a> names.</li>
  <li><strong>Hearts:</strong> ♡ ♥ ❣ 💕 — for <a href="/love">love</a> and cute profiles.</li>
</ul>

<h2>How to combine symbols with fonts</h2>
<p>The cleanest results come from one font plus one or two symbols. For example, take a <a href="/tool/gothic">gothic</a> name and frame it: ꧁༒ 𝓝𝓪𝓶𝓮 ༒꧂. Use the <a href="/tool/style-builder">style builder</a> to do this automatically, or grab individual symbols from the <a href="/tool/symbol-keyboard">symbol keyboard</a>.</p>

<h2>Will they work in games?</h2>
<p>Most of the symbols above are game-safe for <a href="/free-fire">Free Fire</a>, <a href="/pubg">PUBG</a>, and BGMI. A few rarer symbols may not render on every device, so always paste your finished name once to check. And remember: many symbols count as two characters against the in-game limit, so keep the core name short.</p>
${CTA_HTML}`,
    },
    {
        slug: 'stylish-name-ideas-boys-girls',
        title: '100+ Stylish Name Ideas for Boys and Girls',
        description: 'A big list of stylish name ideas for boys and girls across attitude, cute, royal, and gaming themes — ready to style and copy in one tap.',
        date: '2026-05-31',
        category: 'Tips',
        readingMinutes: 6,
        html: `
<p>Stuck on what to call yourself? Sometimes the hardest part of a <strong>stylish name</strong> is the words, not the font. Here is a big list of ideas you can drop into the <a href="/">generator</a> and instantly style.</p>

<h2>Stylish names for boys</h2>
<p>Browse the full <a href="/boy">boy name collection</a>, or start with these:</p>
<ul>
  <li><strong>Attitude:</strong> Lone Wolf, Silent Killer, Savage King, Bad Boy, Rebel Heart</li>
  <li><strong>Royal:</strong> Dark Prince, Royal King, Boss Boy, Alpha Male</li>
  <li><strong>Gaming:</strong> Headshot God, Shadow Assassin, Night Hawk, One Tap King</li>
</ul>

<h2>Stylish names for girls</h2>
<p>See the full <a href="/girl">girl name collection</a>, or try these:</p>
<ul>
  <li><strong>Cute:</strong> Sweet Angel, Sugar Doll, Baby Girl, Cherry Blossom</li>
  <li><strong>Queen:</strong> Queen Bee, Boss Babe, Queen of Hearts</li>
  <li><strong>Aesthetic:</strong> Moon Child, Butterfly Girl, Star Girl, Soft Era</li>
</ul>

<h2>Couple &amp; matching names</h2>
<p>Want a matching set? Pick the same font for both names and add a heart between them. See <a href="/couple">couple name ideas</a> like King &amp; Queen, Hubby &amp; Wifey, or His &amp; Hers.</p>

<h2>Funny &amp; WiFi names</h2>
<p>Looking for something playful? The <a href="/wifi">WiFi name list</a> is full of network names that make neighbors smile, and the <a href="/crazy">crazy styles</a> are great for inside jokes.</p>

<h2>How to use these</h2>
<p>Copy any idea above, paste it into the generator, and pick a font that matches the mood — <a href="/tool/cursive">cursive</a> for cute, <a href="/tool/gothic">gothic</a> for attitude, <a href="/tool/aesthetic">aesthetic</a> for soft vibes. Then copy your finished name and paste it into your profile.</p>
${CTA_HTML}`,
    },
    {
        slug: 'aesthetic-username-ideas-tiktok-discord',
        title: 'Aesthetic Username Ideas for TikTok & Discord',
        description: 'How to build a soft, aesthetic username for TikTok and Discord using cursive, small caps, and symbols — with ready-made ideas and the platform rules to know.',
        date: '2026-06-14',
        category: 'Social Media',
        readingMinutes: 5,
        html: `
<p>The <strong>aesthetic</strong> look — soft fonts, gentle symbols, lowercase calm — rules <a href="/tiktok">TikTok</a> and <a href="/discord">Discord</a> profiles right now. Here is how to build one that fits the vibe.</p>

<h2>The aesthetic formula</h2>
<p>Most aesthetic usernames combine three things: a soft font, a simple word, and one or two delicate symbols. For example: ‧₊˚ 𝓢𝓸𝓯𝓽 𝓔𝓻𝓪 ˚₊‧ or ⊹ 𝓂𝑜𝑜𝓃 𝒸𝒽𝒾𝓁𝒹 ⊹.</p>

<h2>Best fonts for the look</h2>
<ul>
  <li><a href="/tool/cursive">Cursive</a> — the classic soft, flowing aesthetic.</li>
  <li><a href="/tool/small">Small caps / tiny text</a> — minimalist and quiet.</li>
  <li><a href="/tool/aesthetic">Aesthetic / full-width</a> — that spaced-out vaporwave feel.</li>
  <li><a href="/tool/pretty">Pretty</a> — dainty letters with hearts and flowers.</li>
</ul>

<h2>Username ideas to style</h2>
<p>angel dust, lunar, soft era, moon child, cloud nine, dreamy, velvet, honey hour, starlit, after glow, cherry, mistveil. Drop any of these into the <a href="/">generator</a> and pick a soft style.</p>

<h2>Platform rules to know</h2>
<ul>
  <li><strong>TikTok:</strong> your <strong>display name</strong> (up to 30 characters) supports stylish fonts; the @handle does not.</li>
  <li><strong>Discord:</strong> set your fancy text as your <strong>display name</strong> (Settings → Profile). The new unique username has stricter rules. No Nitro required for Unicode display names.</li>
</ul>
<p>Keep symbols light — one accent on each side is plenty — and test the paste once so everything renders cleanly before you save.</p>
${CTA_HTML}`,
    },
    {
        slug: 'free-fire-stylish-names-list',
        title: '120+ Stylish Free Fire Names (Copy & Paste)',
        description: 'A big copy-and-paste list of stylish Free Fire names — pro, attitude, funny, and symbol styles — plus how to set them and the character limit.',
        date: '2026-04-12',
        category: 'Gaming',
        readingMinutes: 7,
        html: `
<p>Looking for a ready-made <a href="/free-fire">Free Fire</a> name? Below is a big list of <strong>stylish FF names</strong> you can copy and paste straight into the game. Want to style your own instead? Drop it into the <a href="/">generator</a>. Free Fire allows about 12 characters (some symbols count as two), and you need a Name Change Card or diamonds to apply it.</p>

<h2>Pro / sweaty names</h2>
<ul>
  <li>꧁☬ Headshot God ☬꧂</li>
  <li>★彡 One Tap King 彡★</li>
  <li>꧁༒ Grand Master ༒꧂</li>
  <li>FF Pro Sniper</li>
  <li>꧁ Toxic Viper ꧂</li>
  <li>Speed Killer</li>
  <li>꧁☆ Fire Demon ☆꧂</li>
  <li>Blade Master</li>
</ul>

<h2>Attitude / boy names</h2>
<ul>
  <li>꧁ Lone Wolf ꧂</li>
  <li>Silent Killer</li>
  <li>꧁☬ Savage King ☬꧂</li>
  <li>Bad Boy Pro</li>
  <li>★ Heartless ★</li>
  <li>꧁ Rebel Soul ꧂</li>
</ul>

<h2>Funny names</h2>
<ul>
  <li>Boiled Aloo</li>
  <li>Desi Gamer</li>
  <li>Pro Noob</li>
  <li>Boom Boom</li>
  <li>AFK Legend</li>
  <li>Free Loot Plz</li>
</ul>

<h2>Symbol &amp; clan styles</h2>
<p>For squad and clan tags, frame a short word in symbols: ꧁༒☬ TEAM ☬༒꧂, ★彡 SQUAD 彡★, ⫷ CLAN ⫸. Browse more game-safe symbols in the <a href="/tool/symbol-keyboard">symbol keyboard</a>, and see our full <a href="/free-fire">Free Fire name styles</a> and <a href="/gaming">gaming name</a> pages for hundreds more.</p>

<h2>How to set your name</h2>
<ol>
  <li>Copy a name above (or make your own in the <a href="/">generator</a>).</li>
  <li>Open Free Fire → Profile → Edit Name.</li>
  <li>Paste and confirm (needs a Name Change Card or diamonds).</li>
</ol>
${CTA_HTML}`,
    },
    {
        slug: 'stylish-names-for-girls-list',
        title: '100+ Stylish Names for Girls (Cute & Aesthetic)',
        description: 'A copy-and-paste list of stylish girl names — cute, queen, and aesthetic styles with hearts and flowers for Instagram, TikTok, and WhatsApp.',
        date: '2026-05-24',
        category: 'Tips',
        readingMinutes: 6,
        html: `
<p>Here is a ready-to-use list of <strong>stylish names for girls</strong> across the most popular vibes. Copy any one, or make your own in the <a href="/">generator</a>. For more, see the full <a href="/girl">girl name styles</a> and <a href="/cute">cute styles</a> pages.</p>

<h2>Cute names</h2>
<ul>
  <li>꧁💖 Princess 💖꧂</li>
  <li>♡ Sweet Angel ♡</li>
  <li>🌸 Cute Doll 🌸</li>
  <li>Baby Girl</li>
  <li>꧁ Sugar Bloom ꧂</li>
  <li>Cherry Blossom</li>
</ul>

<h2>Queen / boss names</h2>
<ul>
  <li>👑 Queen Bee 👑</li>
  <li>Boss Babe</li>
  <li>✿ Queen Of Hearts ✿</li>
  <li>꧁ Royal Diva ꧂</li>
  <li>Diamond Girl</li>
</ul>

<h2>Aesthetic names</h2>
<ul>
  <li>🌙 Moon Child 🌙</li>
  <li>🦋 Butterfly Girl 🦋</li>
  <li>Soft Girl Era</li>
  <li>✨ Aesthetic Vibes ✨</li>
  <li>Star Girl</li>
  <li>Dreamy</li>
</ul>

<h2>Make it your own</h2>
<p>Pair a name with a soft font — try <a href="/tool/cursive">cursive</a>, <a href="/tool/pretty">pretty</a>, or <a href="/tool/aesthetic">aesthetic</a> styles — and add one or two hearts (♡) or flowers (✿). Then copy and paste it into your <a href="/instagram">Instagram</a>, <a href="/tiktok">TikTok</a>, or <a href="/whatsapp">WhatsApp</a> profile.</p>
${CTA_HTML}`,
    },
    {
        slug: 'attitude-names-for-boys-list',
        title: '100+ Attitude Names for Boys (Cool & Stylish)',
        description: 'A copy-and-paste list of attitude and stylish names for boys — boss, royal, and gaming styles for Instagram, WhatsApp, and Free Fire.',
        date: '2026-06-07',
        category: 'Tips',
        readingMinutes: 6,
        html: `
<p>Want a name that shows confidence? Here is a list of <strong>attitude names for boys</strong> by theme. Copy one or style your own in the <a href="/">generator</a>. See more on the <a href="/boy">boy name styles</a> and <a href="/attitude">attitude styles</a> pages.</p>

<h2>Boss / attitude names</h2>
<ul>
  <li>꧁ Silent Killer ꧂</li>
  <li>Lone Wolf</li>
  <li>☬ Savage King ☬</li>
  <li>Mr Perfect</li>
  <li>꧁ Heartless Boy ꧂</li>
  <li>Bad Boy</li>
</ul>

<h2>Royal / king names</h2>
<ul>
  <li>♛ Dark Prince ♛</li>
  <li>꧁ Royal King ꧂</li>
  <li>Boss Boy</li>
  <li>♚ Dark Lord ♚</li>
  <li>Alpha Male</li>
</ul>

<h2>Gaming names</h2>
<ul>
  <li>꧁☬ Headshot God ☬꧂</li>
  <li>Shadow Assassin</li>
  <li>Night Hawk</li>
  <li>★ Pro Sniper ★</li>
  <li>War Machine</li>
</ul>

<h2>How to use them</h2>
<p>For a stronger look, style the name in <a href="/tool/gothic">gothic</a> or <a href="/tool/bold">bold</a> and frame it with symbols from the <a href="/tool/symbol-keyboard">symbol keyboard</a>. These work great on <a href="/whatsapp">WhatsApp</a> status, <a href="/instagram">Instagram</a> bios, and <a href="/free-fire">Free Fire</a> / <a href="/pubg">PUBG</a> profiles.</p>
${CTA_HTML}`,
    },
];

export function getAllBlogPosts(): BlogPost[] {
    // Newest first.
    return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | undefined {
    return POSTS.find(p => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return POSTS.map(p => p.slug);
}
