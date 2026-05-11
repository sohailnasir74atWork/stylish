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
        metaTitle: 'Cute Stylish Name Generator | Kawaii & Adorable Names ♡',
        metaDescription: 'Generate cute and kawaii stylish names with hearts, flowers, and adorable symbols. Perfect for Instagram bio, TikTok profile, and social media. Free copy paste!',
        heroText: 'Create the cutest names with adorable symbols, hearts, and kawaii fonts. Perfect for making your profile irresistibly charming!',
        charMapCategory: 'cute',
    },
    {
        slug: 'cool',
        name: 'Cool',
        emoji: '❄️',
        description: 'Trendy and cool stylish names',
        metaTitle: 'Cool Stylish Name Generator | Trendy & Attractive Name Styles',
        metaDescription: 'Generate cool and trendy stylish names with unique fonts and symbols. Perfect for social media profiles, gaming nicknames, and more. Free and instant!',
        heroText: 'Get the coolest name styles that make you stand out. Trendy fonts, unique symbols, and eye-catching designs — all free to copy and paste.',
        charMapCategory: 'cool',
    },
    {
        slug: 'fancy',
        name: 'Fancy',
        emoji: '✨',
        description: 'Elegant and fancy font styles',
        metaTitle: 'Fancy Name Generator | Elegant & Stylish Font Styles ✨',
        metaDescription: 'Create fancy and elegant names with beautiful cursive fonts, script styles, and decorative symbols. Perfect for Instagram, WhatsApp, and social media bios.',
        heroText: 'Transform your name into a work of art with elegant script fonts, beautiful cursive styles, and decorative frames.',
        charMapCategory: 'fancy',
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
    },
    {
        slug: 'spotify',
        name: 'Spotify',
        emoji: '🎧',
        description: 'Stylish names for Spotify profile',
        metaTitle: 'Spotify Stylish Name Generator | Cool Profile Names 🎧',
        metaDescription: 'Generate stylish Spotify profile names with unique fonts and music symbols. Make your Spotify profile stand out. Free copy paste!',
        heroText: 'Give your Spotify profile a musical makeover with stylish names. Unique fonts and symbols that match the vibe.',
    },
    {
        slug: 'telegram',
        name: 'Telegram',
        emoji: '📨',
        description: 'Stylish names for Telegram profile',
        metaTitle: 'Telegram Stylish Name Generator | Cool Username Fonts 📨',
        metaDescription: 'Create stylish Telegram usernames and display names with unique fonts. Beautiful Unicode fonts for your Telegram profile. Free!',
        heroText: 'Upgrade your Telegram with stylish names and cool fonts. Perfect for usernames, group names, and display names.',
    },
    {
        slug: 'tumblr',
        name: 'Tumblr',
        emoji: '📝',
        description: 'Stylish names for Tumblr blog',
        metaTitle: 'Tumblr Stylish Name Generator | Aesthetic Blog Names 📝',
        metaDescription: 'Generate aesthetic Tumblr blog names with unique fonts and artistic symbols. Perfect for your Tumblr aesthetic. Free copy paste!',
        heroText: 'Feed your aesthetic with Tumblr-perfect stylish names. Artistic fonts, dreamy symbols, and designs that match your blog vibe.',
    },
    {
        slug: 'snapchat',
        name: 'Snapchat',
        emoji: '👻',
        description: 'Stylish names for Snapchat profile',
        metaTitle: 'Snapchat Stylish Name Generator | Cool Display Names 👻',
        metaDescription: 'Create cool Snapchat display names with stylish fonts and fun symbols. Make your Snapchat profile unique. Free copy paste!',
        heroText: 'Snap in style with cool display names! Fun fonts, playful symbols, and designs that match the Snapchat energy.',
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
