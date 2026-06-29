// Translated SEO content for category/platform/tool pages
// Organized by locale → slug → { seoContent, faqItems }

import { Locale } from './i18n';

export interface TranslatedSEO {
    seoContent: string;
    faqItems: { question: string; answer: string }[];
}

type SEOTranslations = Partial<Record<Locale, Record<string, TranslatedSEO>>>;

const translations: SEOTranslations = {
    // ─── ENGLISH (default locale — the only indexed variant) ───
    // These power the bottom SEO/FAQ block on the dedicated tool pages,
    // which otherwise rendered nothing in English (getTranslatedSEO returned undefined).
    en: {
        strikethrough: {
            seoContent: `<p>Our <strong>strikethrough text generator</strong> draws a line through your words — <strong>l̶i̶k̶e̶ ̶t̶h̶i̶s̶</strong> — using special Unicode marks, so you can copy and paste crossed-out text into apps that have no strikethrough button, like your Instagram bio, an X (Twitter) post, or a Discord username.</p>

<h3>Strikethrough styles you can make</h3>
<ul>
  <li><strong>Single strikethrough</strong> — o̶n̶e̶ ̶l̶i̶n̶e̶ through the text, the classic crossed-out look</li>
  <li><strong>Double strikethrough</strong> — t̳w̳o̳ lines for stronger emphasis</li>
  <li><strong>Slash & tilde overlays</strong> — diagonal and wavy variations</li>
</ul>

<h3>Why use strikethrough text?</h3>
<p>Crossed-out text is a popular way to show a "before and after", make a joke, cross off a to-do, or display a price that has dropped. Because most social apps have no strikethrough button, this generator adds the line using combining Unicode characters so the effect survives copy and paste.</p>

<h3>Where it works</h3>
<p>Strikethrough text displays correctly on <strong>Instagram</strong>, <strong>X (Twitter)</strong>, <strong>Facebook</strong>, <strong>WhatsApp</strong>, and <strong>Discord</strong>. A few older apps may show the line slightly offset, but on modern phones and browsers it lines up cleanly.</p>`,
            faqItems: [
                { question: "How do I cross out text on Instagram?", answer: "Instagram has no strikethrough button. Type your text in our generator, copy the crossed-out version, and paste it into your bio, caption, or comment — the line stays in place." },
                { question: "Does strikethrough text work on WhatsApp?", answer: "WhatsApp has its own strikethrough (wrap text in ~tildes~), but our generator also works and lets you paste crossed-out text into the name field and other apps that lack the feature." },
                { question: "Is the strikethrough text generator free?", answer: "Yes, it is completely free with no sign-up. Generate and copy as much strikethrough text as you like." },
            ],
        },
        'mirror-text': {
            seoContent: `<p>Our <strong>mirror text generator</strong> flips your words into their reversed, mirror-image form — <strong>ƚxǝƚ ɿoɿɿim</strong> — that reads correctly when held up to a mirror. Copy and paste it for puzzles, secret messages, tattoo previews, or just to make a post that stands out.</p>

<h3>Mirror vs reversed text</h3>
<p>There are two effects people look for: <strong>mirrored</strong> text uses flipped letterforms so it looks like a true reflection, while <strong>reversed</strong> text simply writes your letters back-to-front in the opposite order. This generator produces both, so you can pick the look you need.</p>

<h3>Fun ways to use it</h3>
<ul>
  <li><strong>Secret messages</strong> friends decode with a mirror or their phone camera</li>
  <li><strong>Tattoo previews</strong> for mirrored or reflection-style lettering</li>
  <li><strong>Instagram & TikTok</strong> captions and usernames that look unusual</li>
</ul>

<h3>Good to know</h3>
<p>Mirror text relies on Unicode characters that resemble flipped letters, so some letters have a closer match than others. For the cleanest result, keep your text to standard letters and short phrases.</p>`,
            faqItems: [
                { question: "What is the difference between mirror text and reversed text?", answer: "Mirror text uses flipped letter shapes so it looks like a real reflection. Reversed text keeps normal letters but writes them in the opposite order. Our generator makes both." },
                { question: "Does mirror text work on Instagram?", answer: "Yes. The mirrored characters are Unicode, so they display in Instagram bios and captions, and on TikTok and X (Twitter). Copy and paste as usual." },
                { question: "Is the mirror text generator free?", answer: "Yes, free with no sign-up. Mirror and copy as much text as you want." },
            ],
        },
        'zalgo-text': {
            seoContent: `<p>Our <strong>zalgo text generator</strong> corrupts your words with layers of stacked Unicode marks to create that glitchy, "cursed", dripping look — <strong>Z̸̧̢a̵l̴g̶o̷</strong>. Copy and paste it into Discord, TikTok captions, or anywhere you want text that looks hauntingly broken.</p>

<h3>What is zalgo text?</h3>
<p>Zalgo text is built from <strong>combining diacritical marks</strong> — accent characters that normally sit above or below a letter. Stack enough of them on each character and the text appears to bleed up, down, and over its neighbors. It comes from the "He comes" internet horror meme and is now a staple of spooky and gaming posts.</p>

<h3>Adjust the level of chaos</h3>
<ul>
  <li><strong>Light</strong> — a subtle creepy edge that stays readable</li>
  <li><strong>Medium</strong> — clearly glitched but still legible</li>
  <li><strong>Heavy</strong> — fully corrupted, maximum cursed effect</li>
</ul>

<h3>Compatibility notes</h3>
<p>Zalgo works in <strong>Discord</strong>, on <strong>X (Twitter)</strong>, and in many chat apps, but some platforms cap how many combining marks they render and will trim very heavy distortion. If a paste looks clipped, use a lighter level. It is best for short names and titles, not long paragraphs.</p>`,
            faqItems: [
                { question: "What is zalgo text?", answer: "Zalgo text is glitchy, corrupted-looking text made by stacking combining Unicode marks on top of normal letters, giving that 'cursed' dripping effect popular on Discord and in horror memes." },
                { question: "Does zalgo text work on Discord?", answer: "Yes. Discord renders combining marks, so zalgo works in messages, usernames, and server names. Extremely heavy distortion may be partially trimmed by some clients." },
                { question: "Is the zalgo text generator free?", answer: "Yes, completely free with no sign-up. Generate and copy unlimited zalgo text." },
            ],
        },
        'text-repeater': {
            seoContent: `<p>Our <strong>text repeater</strong> copies a word, phrase, or emoji as many times as you want in one click — no more pasting the same thing over and over. Set the number of repeats, choose whether each copy goes on a new line or all in a row, and copy the whole block instantly.</p>

<h3>What people use a text repeater for</h3>
<ul>
  <li><strong>Spamming a word or emoji</strong> in group chats and live streams (for fun)</li>
  <li><strong>Filling a bio or post</strong> with a repeated pattern</li>
  <li><strong>Testing</strong> character limits and text wrapping</li>
  <li><strong>Creating</strong> long separators or repeated symbols</li>
</ul>

<h3>How it works</h3>
<p>Type your text, enter how many times to repeat it, and pick a separator — a space, a new line, or nothing at all. The generator builds the full repeated string so you can copy it in one tap and paste it anywhere.</p>

<h3>A note on etiquette</h3>
<p>Repeated text is great for emphasis and fun, but many chat apps and communities have anti-spam rules. Use it where it is welcome to avoid getting muted or flagged.</p>`,
            faqItems: [
                { question: "How do I repeat text many times quickly?", answer: "Type your word or phrase, set the repeat count, choose a separator (space, new line, or none), and the text repeater builds the full block for you to copy in one click." },
                { question: "Can I repeat emojis too?", answer: "Yes. The text repeater works with emojis, symbols, and any text, so you can quickly create a long run of the same emoji." },
                { question: "Is the text repeater free?", answer: "Yes, it is free with no sign-up. Repeat and copy as much text as you like." },
            ],
        },
        'ascii-art': {
            seoContent: `<p>Our <strong>ASCII art generator</strong> turns your text into large letters drawn from keyboard characters, plus ready-made ASCII pictures you can copy and paste. It is perfect for <strong>Discord</strong> messages, gaming chats, code comments, and anywhere you want eye-catching text art.</p>

<h3>Two kinds of ASCII art</h3>
<ul>
  <li><strong>ASCII text / figlet letters</strong> — your words spelled out in big block letters built from symbols</li>
  <li><strong>ASCII pictures</strong> — small ready-made designs like faces, animals, and shapes</li>
</ul>

<h3>Where ASCII art looks best</h3>
<p>ASCII art lines up perfectly in apps that use a fixed-width (monospace) font, such as <strong>Discord</strong> code blocks, terminal windows, and code editors. In apps with normal fonts the spacing can shift, so block-letter art is most reliable inside a code block.</p>

<h3>How to use it</h3>
<p>Type your text or pick a design, copy the result, and paste it where you want it. On Discord, wrapping ASCII art in a code block keeps every character aligned.</p>`,
            faqItems: [
                { question: "How do I make ASCII art from text?", answer: "Type your word above and the generator spells it out in large letters made from keyboard characters. Copy it and paste it into Discord, a chat, or a code comment." },
                { question: "Why does my ASCII art look misaligned?", answer: "ASCII art needs a fixed-width (monospace) font to line up. It looks perfect in Discord code blocks and terminals, but normal-font apps can shift the spacing." },
                { question: "Is the ASCII art generator free?", answer: "Yes, completely free with no sign-up. Create and copy unlimited ASCII art." },
            ],
        },
        'character-counter': {
            seoContent: `<p>Our free <strong>character counter</strong> instantly tallies the characters, words, sentences, and paragraphs in your text as you type — so you never go over a platform's limit again. It is built for writers, students, and social media users who need to fit an <strong>X (Twitter) post</strong>, <strong>Instagram caption</strong>, or <strong>meta description</strong> into an exact length.</p>

<h3>What it counts</h3>
<ul>
  <li><strong>Characters</strong> — with and without spaces</li>
  <li><strong>Words and sentences</strong></li>
  <li><strong>Paragraphs and lines</strong></li>
</ul>

<h3>Handy limits to remember</h3>
<p>X (Twitter) posts cap at 280 characters, an Instagram bio at 150, a Threads post at 500, and an SEO meta description reads best under about 160. Paste your text here to see exactly where you stand before you publish.</p>

<h3>Private and instant</h3>
<p>Everything is counted in your browser as you type — nothing is uploaded or stored — so it is fast and completely private.</p>`,
            faqItems: [
                { question: "Does the character counter count spaces?", answer: "Yes. It shows the count both with and without spaces, so you can match whichever limit a platform uses." },
                { question: "Is my text uploaded anywhere?", answer: "No. All counting happens in your browser as you type. Your text never leaves your device." },
                { question: "Is the character counter free?", answer: "Yes, it is completely free with no sign-up or limits." },
            ],
        },
        'symbol-keyboard': {
            seoContent: `<p>Our <strong>symbol keyboard</strong> puts hundreds of cool symbols and special characters — ★ ♥ ✓ ☆ ⚡ ♛ ✿ ☬ — in one place to copy and paste with a single tap. No need to memorize keyboard shortcuts or alt codes; just browse the categories and tap the symbol you want.</p>

<h3>Symbol categories</h3>
<ul>
  <li><strong>Stars & sparkles</strong> — ★ ☆ ✦ ✩ ⋆</li>
  <li><strong>Hearts & love</strong> — ♥ ♡ ❤ ღ</li>
  <li><strong>Arrows, checks & lines</strong> — → ✓ ✗ ▬</li>
  <li><strong>Gaming & decorative</strong> — ☬ ꧁ ꧂ ⚔ ♛ for names and clans</li>
</ul>

<h3>Where to use these symbols</h3>
<p>Special symbols are popular for decorating <strong>gaming names</strong> (Free Fire, PUBG, BGMI), dressing up an <strong>Instagram</strong> or <strong>TikTok</strong> bio, and adding flair to <strong>Discord</strong> usernames. They are all standard Unicode, so they show up the same on every device.</p>

<h3>Copy and paste anywhere</h3>
<p>Tap any symbol to copy it, then paste it into your name, bio, message, or post. No app and no shortcuts — it works on phones and computers alike.</p>`,
            faqItems: [
                { question: "How do I copy special symbols?", answer: "Browse the categories in the symbol keyboard and tap any symbol to copy it instantly. Then paste it into your name, bio, or message." },
                { question: "Do these symbols work in Free Fire and PUBG?", answer: "Yes. The symbols are Unicode characters supported in Free Fire, PUBG Mobile, and BGMI name fields, as well as on social apps." },
                { question: "Is the symbol keyboard free?", answer: "Yes, it is free with no sign-up. Copy as many symbols as you like." },
            ],
        },
    },
    // ─── INDONESIAN ───
    id: {
        gaming: { seoContent: `<p><strong>Nama gaming keren</strong> adalah hal pertama yang dilihat pemain lain. Baik kamu main <strong>PUBG Mobile</strong>, <strong>Free Fire</strong>, atau <strong>COD Mobile</strong>, nickname kamu menentukan siapa kamu. Generator kami membuat ratusan font unik dengan simbol spesial.</p><h3>Ide Nama Gaming</h3><ul><li><strong>Nama agresif</strong> — Dark Knight, Shadow Assassin, Phantom Reaper</li><li><strong>Tag pro gamer</strong> — Headshot God, Sniper Elite, One Tap King</li></ul>`, faqItems: [{ question: 'Simbol apa yang bisa dipakai di PUBG dan Free Fire?', answer: 'Kebanyakan simbol Unicode seperti ꧁ ꧂ ☬ ★ ⚡ ♛ bisa dipakai di PUBG Mobile dan Free Fire.' }] },
        boy: { seoContent: `<p>Cari <strong>nama keren untuk cowok</strong>? Generator kami membuat nama cool dengan font keren. Cocok untuk Instagram, PUBG, WhatsApp, dan TikTok.</p><ul><li><strong>Nama attitude</strong> — Bad Boy, Rebel, Savage King</li><li><strong>Nama royal</strong> — Royal King, Dark Prince, Boss Boy</li></ul>`, faqItems: [{ question: 'Nama keren terbaik untuk cowok?', answer: 'King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf paling populer.' }] },
        girl: { seoContent: `<p>Mau <strong>nama keren untuk cewek</strong>? Generator kami membuat nama cantik dengan hati, bunga, dan kupu-kupu.</p><ul><li><strong>Nama lucu</strong> — Princess, Sweet Angel, Baby Girl</li><li><strong>Nama queen</strong> — Queen Bee, Boss Babe</li></ul>`, faqItems: [{ question: 'Nama keren terbaik untuk cewek?', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child paling populer.' }] },
        instagram: { seoContent: `<p><strong>Nama Instagram</strong> kamu adalah hal pertama yang orang lihat. Nama dengan font Unicode unik langsung menarik perhatian.</p><p>1) Ketik nama. 2) Pilih gaya. 3) Salin. 4) Instagram > Edit Profil > Nama. 5) Tempel.</p>`, faqItems: [{ question: 'Cara dapat nama keren di Instagram?', answer: 'Pakai generator kami, salin, Instagram > Edit Profil > Nama dan tempel.' }] },
        'free-fire': { seoContent: `<p><strong>Nama keren Free Fire</strong> bikin kamu menonjol di lobby. Batas: <strong>12 karakter</strong>. Butuh <strong>diamond atau kartu ganti nama</strong>.</p>`, faqItems: [{ question: 'Cara dapat nama keren di Free Fire?', answer: 'Pakai generator kami, salin, Free Fire > Profil > Edit Nama dan tempel.' }] },
        pubg: { seoContent: `<p><strong>Nama PUBG keren</strong> bikin kamu menonjol. PUBG Mobile kasih <strong>satu ganti nama gratis</strong>. Setelahnya butuh <strong>Kartu Rename</strong>. Batas: <strong>14 karakter</strong>.</p>`, faqItems: [{ question: 'Cara ganti nama di PUBG Mobile?', answer: 'Profil PUBG > klik nama > pakai Kartu Rename > tempel nama keren.' }] },
        attitude: { seoContent: `<p><strong>Nama attitude keren</strong> bilang siapa kamu tanpa bicara. Kami buat nama kuat dengan font tegas dan simbol boss.</p>`, faqItems: [{ question: 'Apa itu nama attitude keren?', answer: 'Nama berani dengan font Unicode spesial. Seperti Lone Wolf, Savage King, Boss Boy.' }] },
        couple: { seoContent: `<p>Cari <strong>nama couple keren</strong>? Kami buat pasangan nama yang matching dengan font romantis dan hati.</p>`, faqItems: [{ question: 'Cara buat nama couple matching?', answer: 'Ketik namamu dan pilih gaya. Lalu nama pasangan dengan gaya sama. Tambah ♡ ♥ diantaranya.' }] },
        tiktok: { seoContent: `<p><strong>Nama TikTok</strong> kamu adalah brand kamu. Nama keren bikin kamu diingat. Nama tampilan bisa <strong>30 karakter</strong>.</p>`, faqItems: [{ question: 'Cara dapat nama keren di TikTok?', answer: 'Pakai generator kami, salin, TikTok > Edit Profil > Nama dan tempel.' }] },
        whatsapp: { seoContent: `<p>Bikin <strong>nama WhatsApp</strong> kamu keren. Nama: <strong>25 karakter</strong>, Info: <strong>139 karakter</strong>, grup: <strong>100 karakter</strong>.</p>`, faqItems: [{ question: 'Cara dapat nama keren di WhatsApp?', answer: 'Pakai generator kami, salin, WhatsApp > Pengaturan > ketuk nama > tempel.' }] },
        facebook: { seoContent: `<p><strong>Nama Facebook keren</strong> bikin profil kamu unik. Facebook terima font Unicode dari nama asli kamu.</p>`, faqItems: [{ question: 'Facebook boleh nama keren?', answer: 'Facebook minta nama asli tapi terima variasi Unicode seperti kursif dan tebal.' }] },
        discord: { seoContent: `<p><strong>Nama Discord</strong> kamu adalah identitas di setiap server. Font Unicode jalan tanpa Nitro. Batas: <strong>32 karakter</strong>.</p>`, faqItems: [{ question: 'Butuh Nitro untuk nama Discord keren?', answer: 'Tidak! Font Unicode gratis untuk semua pengguna Discord.' }] },
        roblox: { seoContent: `<p><strong>Nama Roblox keren</strong> bikin kamu terlihat pro. Nama tampilan bisa diganti tiap 7 hari. Batas: <strong>20 karakter</strong>.</p>`, faqItems: [{ question: 'Cara dapat nama Roblox keren?', answer: 'Pakai generator kami, Roblox > Pengaturan > Nama Tampilan dan tempel.' }] },
        gothic: { seoContent: `<p><strong>Generator font gothic</strong> kami membuat teks blackletter gelap dan medieval.</p>`, faqItems: [{ question: 'Apa itu generator font gothic?', answer: 'Mengubah teks kamu menjadi karakter Unicode blackletter (Inggris kuno).' }] },
        cursive: { seoContent: `<p><strong>Generator font kursif</strong> kami mengubah teks kamu menjadi font tulisan tangan yang indah.</p>`, faqItems: [{ question: 'Cara menulis font kursif?', answer: 'Kamu tidak bisa mengetik kursif langsung. Pakai generator kami — ketik dan kami ubah ke Unicode kursif.' }] },
    },
    // ─── ARABIC ───
    ar: {
        gaming: {
            seoContent: `<p><strong>اسم ألعاب أنيق</strong> هو أول شيء يراه اللاعبون الآخرون في المباراة. سواء كنت تلعب <strong>ببجي موبايل</strong> أو <strong>فري فاير</strong> أو <strong>كول أوف ديوتي</strong>، اسمك يعرّف عنك. مولد الأسماء يعطيك مئات الخطوط الفريدة مع سيوف وجماجم وتيجان ورموز خاصة تعمل في اللعبة.</p>
<h3>لماذا تحتاج اسم ألعاب أنيق؟</h3>
<p>اسم مثل "player123" ممل. لكن اسم مثل <strong>꧁༒☬𝓓𝓪𝓻𝓴𝓚𝓷𝓲𝓰𝓱𝓽☬༒꧂</strong> يجعلك تبدو كلاعب محترف. الأسماء الأنيقة تبرزك في قائمة القتل واللوبي وقائمة الأصدقاء.</p>`,
            faqItems: [
                { question: 'ما الرموز التي تعمل في أسماء ببجي وفري فاير؟', answer: 'معظم رموز Unicode مثل ꧁ ꧂ ☬ ★ ⚡ ♛ تعمل في ببجي موبايل وفري فاير. مولدنا يستخدم فقط رموز متوافقة مع الألعاب.' },
            ],
        },
        boy: {
            seoContent: `<p>تبحث عن <strong>اسم أنيق للأولاد</strong>؟ مولد أسماء الأولاد يصنع أسماء كول بخطوط جريئة ورموز قوية. مثالي لبايو إنستغرام وبروفايل ببجي وحالة واتساب.</p>
<h3>أنماط أسماء الأولاد</h3>
<ul><li><strong>أسماء أتيتيود</strong> — Bad Boy, Rebel, Savage King</li><li><strong>أسماء ملكية</strong> — Royal King, Dark Prince, Boss Boy</li></ul>`,
            faqItems: [{ question: 'ما أفضل الأسماء الأنيقة للأولاد؟', answer: 'أسماء شائعة: King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf. مولدنا يحولها لخطوط أنيقة.' }],
        },
        girl: {
            seoContent: `<p>تريدين <strong>اسم أنيق للبنات</strong>؟ مولدنا يصنع أسماء جميلة بقلوب وورود وفراشات وخطوط كيوت. مثالي لإنستغرام وتيك توك وواتساب.</p>
<ul><li><strong>أسماء كيوت</strong> — Princess, Sweet Angel, Baby Girl</li><li><strong>أسماء ملكة</strong> — Queen Bee, Boss Babe</li></ul>`,
            faqItems: [{ question: 'ما أفضل الأسماء الأنيقة للبنات؟', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child. مولدنا يصنعها بخطوط جميلة مع قلوب وورود.' }],
        },
        instagram: {
            seoContent: `<p><strong>اسم إنستغرام</strong> الأنيق بخطوط ورموز فريدة يلفت الانتباه فوراً. مولدنا يصنع خطوط Unicode جميلة تعمل في بايو إنستغرام والاسم المعروض.</p>
<h3>كيف تغير خط اسم إنستغرام</h3>
<p>1) اكتب اسمك. 2) اختر نمط. 3) انسخ. 4) إنستغرام > تعديل الملف > الاسم. 5) الصق.</p>`,
            faqItems: [{ question: 'كيف أحصل على اسم أنيق في إنستغرام؟', answer: 'استخدم مولدنا، انسخ الاسم، ثم إنستغرام > تعديل الملف > الاسم والصق. الخط الأنيق سيظهر فوراً.' }],
        },
        'free-fire': {
            seoContent: `<p><strong>أسماء فري فاير الأنيقة</strong> تجعلك مميزاً في اللوبي. اسم بسيمبولات ꧁ ⚡ ☬ يجعلك تبدو كلاعب محترف.</p>
<p>فري فاير يسمح بـ<strong>12 حرف</strong>. تحتاج <strong>ألماس أو بطاقة تغيير اسم</strong>.</p>`,
            faqItems: [{ question: 'كيف أحصل على اسم أنيق في فري فاير؟', answer: 'استخدم مولدنا، انسخ الاسم، افتح فري فاير > الملف > تعديل الاسم والصق. ستحتاج ألماس أو بطاقة تغيير اسم.' }],
        },
        pubg: {
            seoContent: `<p><strong>اسم ببجي أنيق</strong> يجعلك مميزاً في كل مباراة. اسمك يظهر في قائمة القتل والمتصدرين. رموز مثل ꧁ ☬ ★ تعطيك مظهر احترافي.</p>
<p>ببجي موبايل يعطي <strong>إعادة تسمية مجانية واحدة</strong>. بعدها تحتاج <strong>بطاقة إعادة تسمية</strong>. الحد <strong>14 حرف</strong>.</p>`,
            faqItems: [{ question: 'كيف أغير اسمي في ببجي موبايل؟', answer: 'ملف ببجي > اضغط على اسمك > استخدم بطاقة إعادة تسمية > الصق اسمك الأنيق.' }],
        },
        attitude: {
            seoContent: `<p><strong>اسم أتيتيود أنيق</strong> يقول للناس من أنت بدون كلمة. مولدنا يصنع أسماء قوية بخطوط جريئة ورموز بوس.</p>
<ul><li><strong>أسماء بوس</strong> — Silent Killer, Lone Wolf, Savage King</li><li><strong>أسماء سواغ</strong> — Mr Perfect, Bad Boy, Attitude King</li></ul>`,
            faqItems: [{ question: 'ما هو اسم أتيتيود أنيق؟', answer: 'اسم جريء وواثق مصنوع بخطوط Unicode خاصة ورموز. مثل Lone Wolf, Savage King, Boss Boy.' }],
        },
        couple: {
            seoContent: `<p>تبحث عن <strong>أسماء كابلز أنيقة</strong>؟ مولدنا يصنع أزواج أسماء متطابقة بخطوط رومانسية وقلوب.</p>
<ul><li><strong>King & Queen</strong> — ♔ + ♕ أزواج متطابقة</li><li><strong>Hubby & Wifey</strong> — أسماء كابلز كيوت</li></ul>`,
            faqItems: [{ question: 'كيف أصنع أسماء كابلز متطابقة؟', answer: 'اكتب اسمك أولاً واختر نمط. ثم اكتب اسم شريكك واختر نفس النمط. أضف ♡ ♥ بينهما.' }],
        },
        tiktok: {
            seoContent: `<p><strong>اسم تيك توك</strong> أنيق يجعلك مميزاً بين ملايين المستخدمين. مولدنا يصنع خطوط Unicode عصرية تعمل في بروفايل تيك توك.</p>
<p>اسم تيك توك المعروض يسمح بـ<strong>30 حرف</strong>.</p>`,
            faqItems: [{ question: 'كيف أغير خط اسم تيك توك؟', answer: 'استخدم مولدنا، انسخ الاسم، تيك توك > تعديل الملف > الاسم والصق.' }],
        },
        whatsapp: {
            seoContent: `<p>اجعل <strong>اسم واتساب</strong> أنيقاً بخطوط ورموز فريدة. اسم أنيق يجعلك مميزاً في قائمة الدردشات.</p>
<p>واتساب يسمح بـ<strong>25 حرف</strong> للاسم، <strong>139 حرف</strong> للحالة، <strong>100 حرف</strong> لاسم المجموعة.</p>`,
            faqItems: [{ question: 'كيف أحصل على اسم أنيق في واتساب؟', answer: 'استخدم مولدنا، انسخ الاسم، واتساب > الإعدادات > اضغط اسمك > الصق.' }],
        },
        facebook: {
            seoContent: `<p><strong>اسم فيسبوك أنيق</strong> يجعل بروفايلك فريداً. فيسبوك يطلب اسمك الحقيقي لكن يقبل خطوط Unicode. "أحمد" يمكن أن يصبح "𝒜𝒽𝓂𝒶𝒹".</p>`,
            faqItems: [{ question: 'هل فيسبوك يسمح بالأسماء الأنيقة؟', answer: 'فيسبوك يطلب اسماً حقيقياً لكن يقبل خطوط Unicode مثل الخط المائل والغامق. تجنب الرموز الكثيرة.' }],
        },
        discord: {
            seoContent: `<p><strong>اسم ديسكورد</strong> أنيق يجعلك مميزاً في كل سيرفر. خطوط Unicode تعمل بدون Nitro.</p>
<p>ديسكورد يسمح بـ<strong>32 حرف</strong>. الاسم المعروض يدعم خطوط Unicode.</p>`,
            faqItems: [{ question: 'هل أحتاج Nitro لأسماء ديسكورد أنيقة؟', answer: 'لا! الأسماء الأنيقة تستخدم Unicode وتعمل لجميع مستخدمي ديسكورد مجاناً.' }],
        },
        roblox: {
            seoContent: `<p><strong>اسم روبلوكس أنيق</strong> يجعلك تبدو محترفاً في أي لعبة. الاسم المعروض يمكن تغييره كل 7 أيام. <strong>20 حرف</strong> كحد أقصى.</p>`,
            faqItems: [{ question: 'كيف أحصل على اسم روبلوكس أنيق؟', answer: 'استخدم مولدنا، انسخ الاسم، روبلوكس > الإعدادات > الاسم المعروض والصق. يمكن التغيير كل 7 أيام.' }],
        },
        gothic: {
            seoContent: `<p><strong>مولد الخط القوطي</strong> يصنع نصوص بلاكلتر مظلمة يمكنك نسخها ولصقها في أي مكان. مثالي لأسماء الألعاب والبايو.</p>`,
            faqItems: [{ question: 'ما هو مولد الخط القوطي؟', answer: 'يحول نصك العادي إلى خط بلاكلتر (إنجليزي قديم) بأحرف Unicode. تعمل على جميع الأجهزة.' }],
        },
        cursive: {
            seoContent: `<p><strong>مولد الخط المائل</strong> يحول نصك لخطوط بأسلوب الكتابة اليدوية. الأكثر شعبية لبايو إنستغرام وبروفايل واتساب.</p>`,
            faqItems: [{ question: 'كيف أكتب بالخط المائل؟', answer: 'لا يمكنك الكتابة مباشرة بالخط المائل. استخدم مولدنا — اكتب نصك ونحوله لأحرف Unicode مائلة.' }],
        },
    },
    // ─── TURKISH ───
    tr: {
        gaming: {
            seoContent: `<p><strong>Şık bir oyun adı</strong>, diğer oyuncuların maçta ilk gördüğü şeydir. <strong>PUBG Mobile</strong>, <strong>Free Fire</strong>, <strong>BGMI</strong> veya <strong>COD Mobile</strong> oynayın — takma adınız sizi tanıtır. Oyun adı oluşturucumuz kılıç, kurukafa, taç ve özel sembollerle yüzlerce benzersiz yazı tipi sunar.</p>
<h3>Oyun Adı Neden Önemli?</h3>
<p>"player123" gibi sade bir ad unutulur. Ama <strong>꧁༒☬𝓓𝓪𝓻𝓴𝓚𝓷𝓲𝓰𝓱𝓽☬༒꧂</strong> gibi bir ad sizi profesyonel gösterir.</p>`,
            faqItems: [{ question: 'PUBG ve Free Fire adlarında hangi semboller çalışır?', answer: 'Çoğu Unicode sembolü (꧁ ꧂ ☬ ★ ⚡ ♛) PUBG Mobile ve Free Fire\'da çalışır.' }],
        },
        boy: {
            seoContent: `<p><strong>Erkekler için şık isim</strong> mi arıyorsunuz? Erkek adı oluşturucumuz Instagram bio, PUBG profili ve WhatsApp durumu için havalı, tutumlu isimler oluşturur.</p>
<ul><li><strong>Tutum isimleri</strong> — Bad Boy, Rebel, Savage King</li><li><strong>Havalı isimler</strong> — Lone Wolf, Alpha Male, Hunter</li></ul>`,
            faqItems: [{ question: 'Erkekler için en iyi şık isimler?', answer: 'King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf popüler erkek isimleridir.' }],
        },
        girl: {
            seoContent: `<p><strong>Kızlar için şık isim</strong> mi istiyorsunuz? Kız adı oluşturucumuz kalpler, çiçekler, kelebekler ve tatlı fontlarla güzel isimler oluşturur.</p>
<ul><li><strong>Tatlı isimler</strong> — Princess, Sweet Angel, Baby Girl</li><li><strong>Kraliçe isimleri</strong> — Queen Bee, Boss Babe</li></ul>`,
            faqItems: [{ question: 'Kızlar için en iyi şık isimler?', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child en popüler kız isimleridir.' }],
        },
        instagram: {
            seoContent: `<p><strong>Instagram adınız</strong> profilinizde insanların ilk gördüğü şeydir. Şık bir Instagram adı benzersiz fontlar ve sembollerle hemen dikkat çeker. Instagram bio, görünen ad ve açıklamalarda çalışan güzel Unicode fontlar oluşturuyoruz.</p>`,
            faqItems: [{ question: 'Instagram\'da şık isim nasıl yapılır?', answer: 'Oluşturucumuzu kullanın, ismi kopyalayın, Instagram > Profili Düzenle > Ad\'a gidin ve yapıştırın.' }],
        },
        'free-fire': {
            seoContent: `<p><strong>Free Fire şık isimleri</strong> lobide öne çıkmanızı sağlar. ꧁ ⚡ ☬ gibi sembollerle havalı bir isim sizi profesyonel gösterir. Free Fire <strong>12 karakter</strong> sınırı var.</p>`,
            faqItems: [{ question: 'Free Fire\'da şık isim nasıl yapılır?', answer: 'Oluşturucumuzu kullanın, kopyalayın, Free Fire > Profil > İsim Düzenle\'ye yapıştırın. Elmas veya isim değiştirme kartı gerekir.' }],
        },
        pubg: {
            seoContent: `<p><strong>Şık bir PUBG adı</strong> her maçta öne çıkmanızı sağlar. PUBG Mobile <strong>bir ücretsiz yeniden adlandırma</strong> verir. Sonra <strong>Yeniden Adlandırma Kartı</strong> gerekir. Sınır <strong>14 karakter</strong>.</p>`,
            faqItems: [{ question: 'PUBG Mobile\'da isim nasıl değiştirilir?', answer: 'PUBG profili > isminize tıklayın > Yeniden Adlandırma Kartı kullanın > şık ismi yapıştırın.' }],
        },
        attitude: {
            seoContent: `<p><strong>Tutum şık isim</strong> tek kelime söylemeden kim olduğunuzu anlatır. Güçlü fontlar ve patron seviye sembollerle güçlü isimler oluşturuyoruz.</p>`,
            faqItems: [{ question: 'Tutum şık isim nedir?', answer: 'Özel Unicode fontlar ve sembollerle yapılmış cesur, kendinden emin bir isim. Lone Wolf, Savage King, Boss Boy gibi.' }],
        },
        couple: {
            seoContent: `<p><strong>Şık çift isimleri</strong> mi arıyorsunuz? Romantik fontlar, kalpler ve aşk sembolleriyle eşleşen isim çiftleri oluşturuyoruz.</p>`,
            faqItems: [{ question: 'Eşleşen çift isimleri nasıl yapılır?', answer: 'Önce kendi adınızı yazın ve stil seçin. Sonra partnerinizin adını yazın ve aynı stili seçin. Arasına ♡ ♥ ekleyin.' }],
        },
        tiktok: {
            seoContent: `<p><strong>TikTok adınız</strong> markanızdır. Şık bir görünen ad sizi hatırlanır kılar. TikTok görünen adı <strong>30 karakter</strong> olabilir.</p>`,
            faqItems: [{ question: 'TikTok\'ta şık isim nasıl yapılır?', answer: 'Oluşturucumuzu kullanın, kopyalayın, TikTok Profil > Profili Düzenle > Ad\'a yapıştırın.' }],
        },
        whatsapp: {
            seoContent: `<p><strong>WhatsApp profil adınızı</strong> benzersiz fontlar ve sembollerle şık yapın. Profil adı <strong>25 karakter</strong>, Hakkında <strong>139 karakter</strong>, grup adı <strong>100 karakter</strong>.</p>`,
            faqItems: [{ question: 'WhatsApp\'ta şık isim nasıl yapılır?', answer: 'Oluşturucumuzu kullanın, kopyalayın, WhatsApp > Ayarlar > adınıza dokunun > yapıştırın.' }],
        },
        facebook: {
            seoContent: `<p><strong>Şık Facebook adı</strong> profilinizi benzersiz kılar. Facebook gerçek ad ister ama Unicode fontları kabul eder. "Ali" → "𝒜𝓁𝒾" olabilir.</p>`,
            faqItems: [{ question: 'Facebook şık isimlere izin veriyor mu?', answer: 'Facebook gerçek ad ister ama Unicode font varyasyonlarını kabul eder. Aşırı sembollerden kaçının.' }],
        },
        discord: {
            seoContent: `<p><strong>Discord kullanıcı adınız</strong> her sunucudaki kimliğinizdir. Unicode fontlar Nitro olmadan çalışır. <strong>32 karakter</strong> sınırı.</p>`,
            faqItems: [{ question: 'Discord\'da şık isim için Nitro gerekli mi?', answer: 'Hayır! Şık isimler Unicode kullanır ve tüm Discord kullanıcıları için ücretsiz çalışır.' }],
        },
        roblox: {
            seoContent: `<p><strong>Şık Roblox adı</strong> sizi profesyonel gösterir. Görünen ad her 7 günde değiştirilebilir. <strong>20 karakter</strong> sınırı.</p>`,
            faqItems: [{ question: 'Roblox\'ta şık görünen ad nasıl yapılır?', answer: 'Oluşturucumuzu kullanın, Roblox > Ayarlar > Görünen Ad\'a yapıştırın.' }],
        },
        gothic: {
            seoContent: `<p><strong>Gotik font oluşturucu</strong> karanlık, ortaçağ blackletter metin oluşturur. Oyun profilleri ve sosyal medya için popüler.</p>`,
            faqItems: [{ question: 'Gotik font oluşturucu nedir?', answer: 'Normal metninizi blackletter (Eski İngilizce) stil Unicode karakterlere dönüştürür.' }],
        },
        cursive: {
            seoContent: `<p><strong>El yazısı font oluşturucu</strong> metninizi güzel el yazısı fontlarına dönüştürür. Instagram bio ve WhatsApp için en popüler font stili.</p>`,
            faqItems: [{ question: 'El yazısı font nasıl yazılır?', answer: 'Doğrudan yazamazsınız. Oluşturucumuzu kullanın — metninizi yazın, biz Unicode karakterlere dönüştürürüz.' }],
        },
    },
    // ─── SPANISH ───
    es: {
        gaming: { seoContent: `<p>Un <strong>nombre gaming con estilo</strong> es lo primero que ven otros jugadores. Ya sea que juegues <strong>PUBG Mobile</strong>, <strong>Free Fire</strong> o <strong>COD Mobile</strong>, tu nombre te define. Nuestro generador crea cientos de fuentes únicas con espadas, calaveras, coronas y símbolos especiales.</p><h3>Ideas de Nombres Gaming</h3><ul><li><strong>Nombres agresivos</strong> — Dark Knight, Shadow Assassin, Phantom Reaper</li><li><strong>Tags pro gamer</strong> — Headshot God, Sniper Elite, One Tap King</li></ul>`, faqItems: [{ question: '¿Qué símbolos funcionan en PUBG y Free Fire?', answer: 'La mayoría de símbolos Unicode como ꧁ ꧂ ☬ ★ ⚡ ♛ funcionan en PUBG Mobile y Free Fire.' }] },
        boy: { seoContent: `<p>¿Buscas <strong>nombres con estilo para chicos</strong>? Nuestro generador crea nombres cool con fuentes llamativas y símbolos poderosos. Perfecto para Instagram, PUBG, WhatsApp y TikTok.</p><ul><li><strong>Nombres actitud</strong> — Bad Boy, Rebel, Savage King</li><li><strong>Nombres royales</strong> — Royal King, Dark Prince, Boss Boy</li></ul>`, faqItems: [{ question: '¿Cuáles son los mejores nombres para chicos?', answer: 'Los más populares son: King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf, Boss Boy.' }] },
        girl: { seoContent: `<p>¿Quieres <strong>nombres con estilo para chicas</strong>? Nuestro generador crea nombres hermosos con corazones, flores, mariposas y fuentes lindas.</p><ul><li><strong>Nombres lindos</strong> — Princess, Sweet Angel, Baby Girl</li><li><strong>Nombres reina</strong> — Queen Bee, Boss Babe</li></ul>`, faqItems: [{ question: '¿Mejores nombres con estilo para chicas?', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child son los más populares.' }] },
        instagram: { seoContent: `<p>Tu <strong>nombre de Instagram</strong> es lo primero que ven las personas. Un nombre con fuentes Unicode únicas llama la atención inmediatamente.</p><h3>Cómo cambiar la fuente en Instagram</h3><p>1) Escribe tu nombre. 2) Elige un estilo. 3) Copia. 4) Instagram > Editar perfil > Nombre. 5) Pega.</p>`, faqItems: [{ question: '¿Cómo poner nombre con estilo en Instagram?', answer: 'Usa nuestro generador, copia el nombre, ve a Instagram > Editar perfil > Nombre y pega.' }] },
        'free-fire': { seoContent: `<p>Los <strong>nombres con estilo para Free Fire</strong> te hacen destacar en el lobby. Símbolos como ꧁ ⚡ ☬ te hacen ver profesional. Límite: <strong>12 caracteres</strong>.</p>`, faqItems: [{ question: '¿Cómo poner nombre con estilo en Free Fire?', answer: 'Usa nuestro generador, copia, Free Fire > Perfil > Editar nombre y pega. Necesitas diamantes o tarjeta de cambio.' }] },
        pubg: { seoContent: `<p>Un <strong>nombre PUBG con estilo</strong> te hace destacar. PUBG Mobile da <strong>un cambio gratis</strong>. Después necesitas <strong>Tarjeta de renombre</strong>. Límite: <strong>14 caracteres</strong>.</p>`, faqItems: [{ question: '¿Cómo cambiar nombre en PUBG Mobile?', answer: 'Perfil PUBG > clic en tu nombre > usa Tarjeta de renombre > pega tu nombre con estilo.' }] },
        attitude: { seoContent: `<p>Un <strong>nombre actitud con estilo</strong> dice quién eres sin hablar. Creamos nombres poderosos con fuentes fuertes y símbolos boss.</p>`, faqItems: [{ question: '¿Qué es un nombre actitud?', answer: 'Un nombre audaz hecho con fuentes Unicode especiales. Como Lone Wolf, Savage King, Boss Boy.' }] },
        couple: { seoContent: `<p>¿Buscas <strong>nombres de pareja con estilo</strong>? Creamos parejas de nombres con fuentes románticas y corazones.</p><ul><li><strong>King & Queen</strong> — ♔ + ♕ parejas</li></ul>`, faqItems: [{ question: '¿Cómo hacer nombres de pareja?', answer: 'Escribe tu nombre y elige estilo. Luego el de tu pareja con el mismo estilo. Agrega ♡ ♥ entre ellos.' }] },
        tiktok: { seoContent: `<p>Tu <strong>nombre de TikTok</strong> es tu marca. Un nombre con estilo te hace memorable. El nombre visible admite <strong>30 caracteres</strong>.</p>`, faqItems: [{ question: '¿Cómo poner nombre con estilo en TikTok?', answer: 'Usa nuestro generador, copia, TikTok > Editar perfil > Nombre y pega.' }] },
        whatsapp: { seoContent: `<p>Haz tu <strong>nombre de WhatsApp</strong> con estilo. Nombre: <strong>25 caracteres</strong>, Info: <strong>139 caracteres</strong>, grupo: <strong>100 caracteres</strong>.</p>`, faqItems: [{ question: '¿Cómo poner nombre con estilo en WhatsApp?', answer: 'Usa nuestro generador, copia, WhatsApp > Ajustes > toca tu nombre > pega.' }] },
        facebook: { seoContent: `<p>Un <strong>nombre Facebook con estilo</strong> hace tu perfil único. Facebook acepta fuentes Unicode de tu nombre real.</p>`, faqItems: [{ question: '¿Facebook permite nombres con estilo?', answer: 'Facebook pide tu nombre real pero acepta variaciones Unicode como cursiva y negrita.' }] },
        discord: { seoContent: `<p>Tu <strong>nombre Discord</strong> es tu identidad en cada servidor. Las fuentes Unicode funcionan sin Nitro. Límite: <strong>32 caracteres</strong>.</p>`, faqItems: [{ question: '¿Necesito Nitro para nombres Discord con estilo?', answer: '¡No! Las fuentes Unicode funcionan gratis para todos los usuarios de Discord.' }] },
        roblox: { seoContent: `<p>Un <strong>nombre Roblox con estilo</strong> te hace ver profesional. El nombre visible se cambia cada 7 días. Límite: <strong>20 caracteres</strong>.</p>`, faqItems: [{ question: '¿Cómo poner nombre con estilo en Roblox?', answer: 'Usa nuestro generador, Roblox > Ajustes > Nombre visible y pega.' }] },
        gothic: { seoContent: `<p>Nuestro <strong>generador de fuentes góticas</strong> crea texto blackletter oscuro y medieval. Popular para perfiles gaming y redes sociales.</p>`, faqItems: [{ question: '¿Qué es un generador de fuentes góticas?', answer: 'Convierte tu texto en caracteres Unicode estilo blackletter (inglés antiguo).' }] },
        cursive: { seoContent: `<p>Nuestro <strong>generador de fuentes cursivas</strong> convierte tu texto en hermosas fuentes estilo escritura a mano.</p>`, faqItems: [{ question: '¿Cómo escribir en fuente cursiva?', answer: 'No puedes escribir cursiva directamente. Usa nuestro generador — escribe tu texto y lo convertimos a Unicode cursivo.' }] },
    },
    // ─── FRENCH ───
    fr: {
        gaming: { seoContent: `<p>Un <strong>nom de joueur stylé</strong> est la première chose que les autres joueurs voient. Que vous jouiez à <strong>PUBG Mobile</strong>, <strong>Free Fire</strong> ou <strong>COD Mobile</strong>, votre pseudo vous définit. Notre générateur crée des centaines de polices uniques avec des symboles spéciaux.</p><h3>Idées de Noms Gaming</h3><ul><li><strong>Noms agressifs</strong> — Dark Knight, Shadow Assassin, Phantom Reaper</li><li><strong>Tags pro</strong> — Headshot God, Sniper Elite, One Tap King</li></ul>`, faqItems: [{ question: 'Quels symboles fonctionnent dans PUBG et Free Fire ?', answer: 'La plupart des symboles Unicode comme ꧁ ꧂ ☬ ★ ⚡ ♛ fonctionnent dans PUBG Mobile et Free Fire.' }] },
        boy: { seoContent: `<p>Vous cherchez des <strong>noms stylés pour garçons</strong> ? Notre générateur crée des noms cool avec des polices audacieuses. Parfait pour Instagram, PUBG, WhatsApp et TikTok.</p><ul><li><strong>Noms attitude</strong> — Bad Boy, Rebel, Savage King</li><li><strong>Noms royaux</strong> — Royal King, Dark Prince, Boss Boy</li></ul>`, faqItems: [{ question: 'Quels sont les meilleurs noms stylés pour garçons ?', answer: 'Les plus populaires : King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf.' }] },
        girl: { seoContent: `<p>Vous voulez des <strong>noms stylés pour filles</strong> ? Notre générateur crée de beaux noms avec des cœurs, fleurs et papillons.</p><ul><li><strong>Noms mignons</strong> — Princess, Sweet Angel, Baby Girl</li><li><strong>Noms reine</strong> — Queen Bee, Boss Babe</li></ul>`, faqItems: [{ question: 'Meilleurs noms stylés pour filles ?', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child sont les plus populaires.' }] },
        instagram: { seoContent: `<p>Votre <strong>nom Instagram</strong> est la première chose que les gens voient. Un nom avec des polices Unicode uniques attire immédiatement l'attention.</p><p>1) Tapez votre nom. 2) Choisissez un style. 3) Copiez. 4) Instagram > Modifier le profil > Nom. 5) Collez.</p>`, faqItems: [{ question: 'Comment mettre un nom stylé sur Instagram ?', answer: 'Utilisez notre générateur, copiez, Instagram > Modifier le profil > Nom et collez.' }] },
        'free-fire': { seoContent: `<p>Les <strong>noms stylés Free Fire</strong> vous font briller dans le lobby. Limite : <strong>12 caractères</strong>. Besoin de <strong>diamants ou carte de changement</strong>.</p>`, faqItems: [{ question: 'Comment avoir un nom stylé dans Free Fire ?', answer: 'Utilisez notre générateur, copiez, Free Fire > Profil > Modifier le nom et collez.' }] },
        pubg: { seoContent: `<p>Un <strong>nom PUBG stylé</strong> vous fait briller. PUBG Mobile donne <strong>un changement gratuit</strong>. Ensuite, <strong>Carte de renommage</strong> nécessaire. Limite : <strong>14 caractères</strong>.</p>`, faqItems: [{ question: 'Comment changer de nom dans PUBG Mobile ?', answer: 'Profil PUBG > clic sur votre nom > utilisez Carte de renommage > collez votre nom stylé.' }] },
        attitude: { seoContent: `<p>Un <strong>nom attitude stylé</strong> dit qui vous êtes sans parler. Nous créons des noms puissants avec des polices fortes.</p>`, faqItems: [{ question: 'Qu\'est-ce qu\'un nom attitude stylé ?', answer: 'Un nom audacieux avec des polices Unicode spéciales. Comme Lone Wolf, Savage King, Boss Boy.' }] },
        couple: { seoContent: `<p><strong>Noms de couple stylés</strong> ? Nous créons des paires assorties avec des polices romantiques et des cœurs.</p>`, faqItems: [{ question: 'Comment faire des noms de couple assortis ?', answer: 'Tapez votre nom et choisissez un style. Puis le nom de votre partenaire avec le même style. Ajoutez ♡ ♥ entre eux.' }] },
        tiktok: { seoContent: `<p>Votre <strong>nom TikTok</strong> est votre marque. Un nom stylé vous rend mémorable. Le nom affiché accepte <strong>30 caractères</strong>.</p>`, faqItems: [{ question: 'Comment mettre un nom stylé sur TikTok ?', answer: 'Utilisez notre générateur, copiez, TikTok > Modifier le profil > Nom et collez.' }] },
        whatsapp: { seoContent: `<p>Rendez votre <strong>nom WhatsApp</strong> stylé. Nom : <strong>25 caractères</strong>, À propos : <strong>139 caractères</strong>, groupe : <strong>100 caractères</strong>.</p>`, faqItems: [{ question: 'Comment avoir un nom stylé sur WhatsApp ?', answer: 'Utilisez notre générateur, copiez, WhatsApp > Paramètres > touchez votre nom > collez.' }] },
        facebook: { seoContent: `<p>Un <strong>nom Facebook stylé</strong> rend votre profil unique. Facebook accepte les polices Unicode de votre vrai nom.</p>`, faqItems: [{ question: 'Facebook autorise-t-il les noms stylés ?', answer: 'Facebook demande votre vrai nom mais accepte les variantes Unicode comme cursive et gras.' }] },
        discord: { seoContent: `<p>Votre <strong>nom Discord</strong> est votre identité dans chaque serveur. Les polices Unicode marchent sans Nitro. Limite : <strong>32 caractères</strong>.</p>`, faqItems: [{ question: 'Faut-il Nitro pour un nom Discord stylé ?', answer: 'Non ! Les polices Unicode fonctionnent gratuitement pour tous les utilisateurs Discord.' }] },
        roblox: { seoContent: `<p>Un <strong>nom Roblox stylé</strong> vous fait paraître pro. Le nom affiché se change tous les 7 jours. Limite : <strong>20 caractères</strong>.</p>`, faqItems: [{ question: 'Comment avoir un nom Roblox stylé ?', answer: 'Utilisez notre générateur, Roblox > Paramètres > Nom affiché et collez.' }] },
        gothic: { seoContent: `<p>Notre <strong>générateur de polices gothiques</strong> crée du texte blackletter sombre et médiéval.</p>`, faqItems: [{ question: 'Qu\'est-ce qu\'un générateur gothique ?', answer: 'Il convertit votre texte en caractères Unicode blackletter (vieil anglais).' }] },
        cursive: { seoContent: `<p>Notre <strong>générateur de polices cursives</strong> transforme votre texte en belles polices style écriture manuscrite.</p>`, faqItems: [{ question: 'Comment écrire en cursif ?', answer: 'Vous ne pouvez pas taper en cursif directement. Utilisez notre générateur — tapez et nous convertissons en Unicode cursif.' }] },
    },
    // ─── GERMAN ───
    de: {
        gaming: { seoContent: `<p>Ein <strong>stylischer Gaming-Name</strong> ist das Erste, was andere Spieler sehen. Ob <strong>PUBG Mobile</strong>, <strong>Free Fire</strong> oder <strong>COD Mobile</strong> — dein Nickname definiert dich. Unser Generator erstellt hunderte einzigartige Schriftarten mit Symbolen.</p><h3>Gaming-Name Ideen</h3><ul><li><strong>Aggressive Namen</strong> — Dark Knight, Shadow Assassin, Phantom Reaper</li><li><strong>Pro Gamer Tags</strong> — Headshot God, Sniper Elite, One Tap King</li></ul>`, faqItems: [{ question: 'Welche Symbole funktionieren in PUBG und Free Fire?', answer: 'Die meisten Unicode-Symbole wie ꧁ ꧂ ☬ ★ ⚡ ♛ funktionieren in PUBG Mobile und Free Fire.' }] },
        boy: { seoContent: `<p><strong>Stylische Namen für Jungs</strong> gesucht? Unser Generator erstellt coole Namen mit auffälligen Schriften. Perfekt für Instagram, PUBG, WhatsApp und TikTok.</p><ul><li><strong>Attitude Namen</strong> — Bad Boy, Rebel, Savage King</li><li><strong>Royale Namen</strong> — Royal King, Dark Prince, Boss Boy</li></ul>`, faqItems: [{ question: 'Beste stylische Namen für Jungs?', answer: 'King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf sind am beliebtesten.' }] },
        girl: { seoContent: `<p><strong>Stylische Namen für Mädchen</strong> gewünscht? Unser Generator erstellt schöne Namen mit Herzen, Blumen und Schmetterlingen.</p><ul><li><strong>Süße Namen</strong> — Princess, Sweet Angel, Baby Girl</li><li><strong>Königin Namen</strong> — Queen Bee, Boss Babe</li></ul>`, faqItems: [{ question: 'Beste stylische Namen für Mädchen?', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child sind am beliebtesten.' }] },
        instagram: { seoContent: `<p>Dein <strong>Instagram-Name</strong> ist das Erste, was Leute sehen. Ein Name mit einzigartigen Unicode-Schriften fällt sofort auf.</p><p>1) Tippe deinen Namen. 2) Wähle einen Stil. 3) Kopiere. 4) Instagram > Profil bearbeiten > Name. 5) Einfügen.</p>`, faqItems: [{ question: 'Wie bekomme ich einen stylischen Instagram-Namen?', answer: 'Nutze unseren Generator, kopiere den Namen, Instagram > Profil bearbeiten > Name und einfügen.' }] },
        'free-fire': { seoContent: `<p><strong>Stylische Free Fire Namen</strong> lassen dich in der Lobby hervorstechen. Limit: <strong>12 Zeichen</strong>. Du brauchst <strong>Diamanten oder eine Namensänderungskarte</strong>.</p>`, faqItems: [{ question: 'Wie bekomme ich einen stylischen Free Fire Namen?', answer: 'Nutze unseren Generator, kopiere, Free Fire > Profil > Name bearbeiten und einfügen.' }] },
        pubg: { seoContent: `<p>Ein <strong>stylischer PUBG-Name</strong> lässt dich hervorstechen. PUBG Mobile gibt <strong>eine kostenlose Umbenennung</strong>. Danach brauchst du eine <strong>Umbenennungskarte</strong>. Limit: <strong>14 Zeichen</strong>.</p>`, faqItems: [{ question: 'Wie ändere ich meinen PUBG Mobile Namen?', answer: 'PUBG Profil > auf deinen Namen klicken > Umbenennungskarte verwenden > stylischen Namen einfügen.' }] },
        attitude: { seoContent: `<p>Ein <strong>stylischer Attitude-Name</strong> sagt, wer du bist, ohne ein Wort. Wir erstellen kraftvolle Namen mit starken Schriften.</p>`, faqItems: [{ question: 'Was ist ein Attitude-Name?', answer: 'Ein mutiger Name mit speziellen Unicode-Schriften. Wie Lone Wolf, Savage King, Boss Boy.' }] },
        couple: { seoContent: `<p><strong>Stylische Paar-Namen</strong> gesucht? Wir erstellen passende Namenpaare mit romantischen Schriften und Herzen.</p>`, faqItems: [{ question: 'Wie macht man passende Paar-Namen?', answer: 'Tippe deinen Namen und wähle einen Stil. Dann den Namen deines Partners mit dem gleichen Stil. Füge ♡ ♥ dazwischen ein.' }] },
        tiktok: { seoContent: `<p>Dein <strong>TikTok-Name</strong> ist deine Marke. Ein stylischer Name macht dich unvergesslich. Anzeigename erlaubt <strong>30 Zeichen</strong>.</p>`, faqItems: [{ question: 'Wie bekomme ich einen stylischen TikTok-Namen?', answer: 'Nutze unseren Generator, kopiere, TikTok > Profil bearbeiten > Name und einfügen.' }] },
        whatsapp: { seoContent: `<p>Mach deinen <strong>WhatsApp-Namen</strong> stylisch. Name: <strong>25 Zeichen</strong>, Info: <strong>139 Zeichen</strong>, Gruppe: <strong>100 Zeichen</strong>.</p>`, faqItems: [{ question: 'Wie bekomme ich einen stylischen WhatsApp-Namen?', answer: 'Nutze unseren Generator, kopiere, WhatsApp > Einstellungen > Name antippen > einfügen.' }] },
        facebook: { seoContent: `<p>Ein <strong>stylischer Facebook-Name</strong> macht dein Profil einzigartig. Facebook akzeptiert Unicode-Schriften deines echten Namens.</p>`, faqItems: [{ question: 'Erlaubt Facebook stylische Namen?', answer: 'Facebook verlangt deinen echten Namen, akzeptiert aber Unicode-Varianten wie Kursiv und Fett.' }] },
        discord: { seoContent: `<p>Dein <strong>Discord-Name</strong> ist deine Identität auf jedem Server. Unicode-Schriften funktionieren ohne Nitro. Limit: <strong>32 Zeichen</strong>.</p>`, faqItems: [{ question: 'Brauche ich Nitro für stylische Discord-Namen?', answer: 'Nein! Unicode-Schriften funktionieren kostenlos für alle Discord-Nutzer.' }] },
        roblox: { seoContent: `<p>Ein <strong>stylischer Roblox-Name</strong> lässt dich professionell aussehen. Anzeigename alle 7 Tage änderbar. Limit: <strong>20 Zeichen</strong>.</p>`, faqItems: [{ question: 'Wie bekomme ich einen stylischen Roblox-Namen?', answer: 'Nutze unseren Generator, Roblox > Einstellungen > Anzeigename und einfügen.' }] },
        gothic: { seoContent: `<p>Unser <strong>Gotik-Schrift-Generator</strong> erstellt dunkle, mittelalterliche Blackletter-Texte.</p>`, faqItems: [{ question: 'Was ist ein Gotik-Schrift-Generator?', answer: 'Er wandelt deinen Text in Unicode-Blackletter (Altenglisch) Zeichen um.' }] },
        cursive: { seoContent: `<p>Unser <strong>Kursiv-Schrift-Generator</strong> verwandelt deinen Text in schöne Handschrift-Schriften.</p>`, faqItems: [{ question: 'Wie schreibt man in Kursivschrift?', answer: 'Du kannst nicht direkt kursiv tippen. Nutze unseren Generator — tippe und wir wandeln in Unicode-Kursiv um.' }] },
    },
    // ─── PORTUGUESE ───
    pt: {
        gaming: { seoContent: `<p>Um <strong>nome gaming estiloso</strong> é a primeira coisa que outros jogadores veem. Seja <strong>PUBG Mobile</strong>, <strong>Free Fire</strong> ou <strong>COD Mobile</strong>, seu nickname define quem você é.</p><h3>Ideias de Nomes Gaming</h3><ul><li><strong>Nomes agressivos</strong> — Dark Knight, Shadow Assassin, Phantom Reaper</li><li><strong>Tags pro</strong> — Headshot God, Sniper Elite, One Tap King</li></ul>`, faqItems: [{ question: 'Quais símbolos funcionam no PUBG e Free Fire?', answer: 'A maioria dos símbolos Unicode como ꧁ ꧂ ☬ ★ ⚡ ♛ funcionam no PUBG Mobile e Free Fire.' }] },
        boy: { seoContent: `<p>Procurando <strong>nomes estilosos para meninos</strong>? Nosso gerador cria nomes legais com fontes marcantes. Perfeito para Instagram, PUBG, WhatsApp e TikTok.</p>`, faqItems: [{ question: 'Melhores nomes estilosos para meninos?', answer: 'King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf são os mais populares.' }] },
        girl: { seoContent: `<p>Quer <strong>nomes estilosos para meninas</strong>? Nosso gerador cria nomes lindos com corações, flores e borboletas.</p>`, faqItems: [{ question: 'Melhores nomes estilosos para meninas?', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child são os mais populares.' }] },
        instagram: { seoContent: `<p>Seu <strong>nome do Instagram</strong> é a primeira coisa que as pessoas veem. Um nome com fontes Unicode únicas chama atenção imediatamente.</p>`, faqItems: [{ question: 'Como colocar nome estiloso no Instagram?', answer: 'Use nosso gerador, copie, Instagram > Editar perfil > Nome e cole.' }] },
        'free-fire': { seoContent: `<p><strong>Nomes estilosos Free Fire</strong> te destacam no lobby. Limite: <strong>12 caracteres</strong>. Precisa de <strong>diamantes ou cartão de troca</strong>.</p>`, faqItems: [{ question: 'Como colocar nome estiloso no Free Fire?', answer: 'Use nosso gerador, copie, Free Fire > Perfil > Editar nome e cole.' }] },
        pubg: { seoContent: `<p>Um <strong>nome PUBG estiloso</strong> te destaca. PUBG Mobile dá <strong>uma troca grátis</strong>. Depois precisa de <strong>Cartão de renomear</strong>. Limite: <strong>14 caracteres</strong>.</p>`, faqItems: [{ question: 'Como mudar nome no PUBG Mobile?', answer: 'Perfil PUBG > clique no seu nome > use Cartão de renomear > cole seu nome estiloso.' }] },
        attitude: { seoContent: `<p>Um <strong>nome atitude estiloso</strong> diz quem você é sem falar. Criamos nomes poderosos com fontes fortes.</p>`, faqItems: [{ question: 'O que é um nome atitude?', answer: 'Um nome ousado com fontes Unicode especiais. Como Lone Wolf, Savage King, Boss Boy.' }] },
        couple: { seoContent: `<p><strong>Nomes de casal estilosos</strong>? Criamos pares combinando com fontes românticas e corações.</p>`, faqItems: [{ question: 'Como fazer nomes de casal?', answer: 'Digite seu nome e escolha estilo. Depois o do parceiro com mesmo estilo. Adicione ♡ ♥ entre eles.' }] },
        tiktok: { seoContent: `<p>Seu <strong>nome TikTok</strong> é sua marca. Um nome estiloso te torna memorável. Nome visível aceita <strong>30 caracteres</strong>.</p>`, faqItems: [{ question: 'Como colocar nome estiloso no TikTok?', answer: 'Use nosso gerador, copie, TikTok > Editar perfil > Nome e cole.' }] },
        whatsapp: { seoContent: `<p>Deixe seu <strong>nome WhatsApp</strong> estiloso. Nome: <strong>25 caracteres</strong>, Recado: <strong>139 caracteres</strong>, grupo: <strong>100 caracteres</strong>.</p>`, faqItems: [{ question: 'Como colocar nome estiloso no WhatsApp?', answer: 'Use nosso gerador, copie, WhatsApp > Configurações > toque seu nome > cole.' }] },
        facebook: { seoContent: `<p>Um <strong>nome Facebook estiloso</strong> torna seu perfil único. Facebook aceita fontes Unicode do seu nome real.</p>`, faqItems: [{ question: 'Facebook permite nomes estilosos?', answer: 'Facebook pede nome real mas aceita variações Unicode como cursivo e negrito.' }] },
        discord: { seoContent: `<p>Seu <strong>nome Discord</strong> é sua identidade em cada servidor. Fontes Unicode funcionam sem Nitro. Limite: <strong>32 caracteres</strong>.</p>`, faqItems: [{ question: 'Preciso de Nitro para nomes Discord estilosos?', answer: 'Não! Fontes Unicode funcionam grátis para todos os usuários Discord.' }] },
        roblox: { seoContent: `<p>Um <strong>nome Roblox estiloso</strong> te faz parecer profissional. Nome visível muda a cada 7 dias. Limite: <strong>20 caracteres</strong>.</p>`, faqItems: [{ question: 'Como colocar nome estiloso no Roblox?', answer: 'Use nosso gerador, Roblox > Configurações > Nome visível e cole.' }] },
        gothic: { seoContent: `<p>Nosso <strong>gerador de fontes góticas</strong> cria texto blackletter escuro e medieval.</p>`, faqItems: [{ question: 'O que é um gerador de fontes góticas?', answer: 'Converte seu texto em caracteres Unicode blackletter (inglês antigo).' }] },
        cursive: { seoContent: `<p>Nosso <strong>gerador de fontes cursivas</strong> transforma seu texto em belas fontes estilo manuscrito.</p>`, faqItems: [{ question: 'Como escrever em fonte cursiva?', answer: 'Não dá pra digitar cursivo diretamente. Use nosso gerador — digite e convertemos em Unicode cursivo.' }] },
    },
    // ─── JAPANESE ───
    ja: {
        gaming: { seoContent: `<p><strong>スタイリッシュなゲーム名</strong>は、他のプレイヤーが最初に目にするものです。<strong>PUBG Mobile</strong>、<strong>Free Fire</strong>、<strong>COD Mobile</strong>など、あなたのニックネームはアイデンティティです。</p><h3>ゲーム名アイデア</h3><ul><li><strong>攻撃的な名前</strong> — Dark Knight, Shadow Assassin, Phantom Reaper</li><li><strong>プロゲーマータグ</strong> — Headshot God, Sniper Elite, One Tap King</li></ul>`, faqItems: [{ question: 'PUBGとFree Fireで使えるシンボルは？', answer: 'ほとんどのUnicodeシンボル（꧁ ꧂ ☬ ★ ⚡ ♛）がPUBG MobileとFree Fireで動作します。' }] },
        boy: { seoContent: `<p><strong>男の子向けスタイリッシュな名前</strong>をお探しですか？Instagram、PUBG、WhatsApp、TikTokに最適なクールな名前を生成します。</p>`, faqItems: [{ question: '男の子に人気のスタイリッシュな名前は？', answer: 'King of Style、Bad Boy、Alpha Male、Dark Prince、Lone Wolfが人気です。' }] },
        girl: { seoContent: `<p><strong>女の子向けスタイリッシュな名前</strong>が欲しいですか？ハート、花、蝶々のある美しい名前を生成します。</p>`, faqItems: [{ question: '女の子に人気のスタイリッシュな名前は？', answer: 'Princess、Queen Bee、Butterfly Girl、Sweet Angel、Moon Childが人気です。' }] },
        instagram: { seoContent: `<p><strong>Instagramの名前</strong>はプロフィールで最初に目に入るものです。ユニークなUnicodeフォントの名前は即座に注目を集めます。</p>`, faqItems: [{ question: 'Instagramでスタイリッシュな名前にするには？', answer: 'ジェネレーターを使い、コピーし、Instagram > プロフィール編集 > 名前に貼り付けます。' }] },
        'free-fire': { seoContent: `<p><strong>Free Fireスタイリッシュ名前</strong>でロビーで目立ちましょう。制限：<strong>12文字</strong>。<strong>ダイヤモンドまたは名前変更カード</strong>が必要です。</p>`, faqItems: [{ question: 'Free Fireでスタイリッシュな名前にするには？', answer: 'ジェネレーターを使い、コピーし、Free Fire > プロフィール > 名前編集に貼り付けます。' }] },
        pubg: { seoContent: `<p><strong>スタイリッシュなPUBG名前</strong>で目立ちましょう。PUBG Mobileは<strong>1回無料で名前変更</strong>できます。その後は<strong>リネームカード</strong>が必要。制限：<strong>14文字</strong>。</p>`, faqItems: [{ question: 'PUBG Mobileで名前を変更するには？', answer: 'PUBGプロフィール > 名前をクリック > リネームカード使用 > スタイリッシュな名前を貼り付け。' }] },
        attitude: { seoContent: `<p><strong>アティテュード・スタイリッシュ名前</strong>は言葉なしであなたが誰かを伝えます。強力なフォントとシンボルで力強い名前を作ります。</p>`, faqItems: [{ question: 'アティテュード・スタイリッシュ名前とは？', answer: '特別なUnicodeフォントとシンボルで作られた大胆で自信のある名前です。' }] },
        couple: { seoContent: `<p><strong>スタイリッシュなカップル名前</strong>をお探しですか？ロマンチックなフォントとハートでお揃いの名前ペアを作ります。</p>`, faqItems: [{ question: 'お揃いのカップル名前の作り方は？', answer: 'まず自分の名前を入力してスタイルを選択。次にパートナーの名前で同じスタイルを選択。間に♡♥を追加。' }] },
        tiktok: { seoContent: `<p><strong>TikTokの名前</strong>はあなたのブランドです。スタイリッシュな名前で印象に残りましょう。表示名は<strong>30文字</strong>まで。</p>`, faqItems: [{ question: 'TikTokでスタイリッシュな名前にするには？', answer: 'ジェネレーターを使い、コピーし、TikTok > プロフィール編集 > 名前に貼り付けます。' }] },
        whatsapp: { seoContent: `<p><strong>WhatsAppの名前</strong>をスタイリッシュに。名前：<strong>25文字</strong>、概要：<strong>139文字</strong>、グループ：<strong>100文字</strong>。</p>`, faqItems: [{ question: 'WhatsAppでスタイリッシュな名前にするには？', answer: 'ジェネレーターを使い、コピーし、WhatsApp > 設定 > 名前をタップ > 貼り付け。' }] },
        facebook: { seoContent: `<p><strong>スタイリッシュなFacebook名前</strong>でプロフィールをユニークに。FacebookはUnicodeフォントの実名を受け入れます。</p>`, faqItems: [{ question: 'Facebookはスタイリッシュな名前を許可していますか？', answer: 'Facebookは実名を求めますが、カーシブやボールドなどのUnicodeバリエーションは受け入れます。' }] },
        discord: { seoContent: `<p><strong>Discordの名前</strong>はすべてのサーバーでのアイデンティティです。UnicodeフォントはNitroなしで動作します。制限：<strong>32文字</strong>。</p>`, faqItems: [{ question: 'Discordスタイリッシュ名前にNitroは必要？', answer: 'いいえ！UnicodeフォントはすべてのDiscordユーザーに無料で動作します。' }] },
        roblox: { seoContent: `<p><strong>スタイリッシュなRoblox名前</strong>でプロに見えます。表示名は7日ごとに変更可能。制限：<strong>20文字</strong>。</p>`, faqItems: [{ question: 'Robloxでスタイリッシュな表示名にするには？', answer: 'ジェネレーターを使い、Roblox > 設定 > 表示名に貼り付けます。' }] },
        gothic: { seoContent: `<p><strong>ゴシックフォントジェネレーター</strong>はダークで中世的なブラックレターテキストを作成します。</p>`, faqItems: [{ question: 'ゴシックフォントジェネレーターとは？', answer: 'テキストをブラックレター（古英語）スタイルのUnicode文字に変換します。' }] },
        cursive: { seoContent: `<p><strong>カーシブフォントジェネレーター</strong>はテキストを美しい手書きスタイルのフォントに変換します。</p>`, faqItems: [{ question: 'カーシブフォントの書き方は？', answer: '直接カーシブで入力はできません。ジェネレーターを使ってください。テキストを入力するとUnicodeカーシブに変換します。' }] },
    },
    // ─── ITALIAN ───
    it: {
        gaming: { seoContent: `<p>Un <strong>nome gaming stiloso</strong> è la prima cosa che gli altri giocatori vedono. Che tu giochi a <strong>PUBG Mobile</strong>, <strong>Free Fire</strong> o <strong>COD Mobile</strong>, il tuo nickname ti definisce.</p><ul><li><strong>Nomi aggressivi</strong> — Dark Knight, Shadow Assassin, Phantom Reaper</li><li><strong>Tag pro</strong> — Headshot God, Sniper Elite, One Tap King</li></ul>`, faqItems: [{ question: 'Quali simboli funzionano in PUBG e Free Fire?', answer: 'La maggior parte dei simboli Unicode come ꧁ ꧂ ☬ ★ ⚡ ♛ funzionano in PUBG Mobile e Free Fire.' }] },
        boy: { seoContent: `<p>Cerchi <strong>nomi stilosi per ragazzi</strong>? Il nostro generatore crea nomi cool con font audaci. Perfetto per Instagram, PUBG, WhatsApp e TikTok.</p>`, faqItems: [{ question: 'Migliori nomi stilosi per ragazzi?', answer: 'King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf sono i più popolari.' }] },
        girl: { seoContent: `<p>Vuoi <strong>nomi stilosi per ragazze</strong>? Il nostro generatore crea nomi belli con cuori, fiori e farfalle.</p>`, faqItems: [{ question: 'Migliori nomi stilosi per ragazze?', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child sono i più popolari.' }] },
        instagram: { seoContent: `<p>Il tuo <strong>nome Instagram</strong> è la prima cosa che le persone vedono. Un nome con font Unicode unici attira subito l'attenzione.</p>`, faqItems: [{ question: 'Come mettere un nome stiloso su Instagram?', answer: 'Usa il nostro generatore, copia, Instagram > Modifica profilo > Nome e incolla.' }] },
        'free-fire': { seoContent: `<p>I <strong>nomi stilosi Free Fire</strong> ti fanno brillare nella lobby. Limite: <strong>12 caratteri</strong>.</p>`, faqItems: [{ question: 'Come avere un nome stiloso in Free Fire?', answer: 'Usa il nostro generatore, copia, Free Fire > Profilo > Modifica nome e incolla.' }] },
        pubg: { seoContent: `<p>Un <strong>nome PUBG stiloso</strong> ti fa risaltare. PUBG Mobile dà <strong>un cambio gratis</strong>. Poi serve <strong>Carta di rinomina</strong>. Limite: <strong>14 caratteri</strong>.</p>`, faqItems: [{ question: 'Come cambiare nome in PUBG Mobile?', answer: 'Profilo PUBG > clicca sul nome > usa Carta di rinomina > incolla il nome stiloso.' }] },
        attitude: { seoContent: `<p>Un <strong>nome attitude stiloso</strong> dice chi sei senza parlare. Creiamo nomi potenti con font forti.</p>`, faqItems: [{ question: 'Cos\'è un nome attitude?', answer: 'Un nome audace con font Unicode speciali. Come Lone Wolf, Savage King, Boss Boy.' }] },
        couple: { seoContent: `<p><strong>Nomi di coppia stilosi</strong>? Creiamo coppie abbinate con font romantici e cuori.</p>`, faqItems: [{ question: 'Come fare nomi di coppia abbinati?', answer: 'Scrivi il tuo nome e scegli stile. Poi quello del partner con stesso stile. Aggiungi ♡ ♥ tra loro.' }] },
        tiktok: { seoContent: `<p>Il tuo <strong>nome TikTok</strong> è il tuo brand. Un nome stiloso ti rende memorabile. Nome visibile: <strong>30 caratteri</strong>.</p>`, faqItems: [{ question: 'Come mettere un nome stiloso su TikTok?', answer: 'Usa il nostro generatore, copia, TikTok > Modifica profilo > Nome e incolla.' }] },
        whatsapp: { seoContent: `<p>Rendi il tuo <strong>nome WhatsApp</strong> stiloso. Nome: <strong>25 caratteri</strong>, Info: <strong>139 caratteri</strong>, gruppo: <strong>100 caratteri</strong>.</p>`, faqItems: [{ question: 'Come avere un nome stiloso su WhatsApp?', answer: 'Usa il nostro generatore, copia, WhatsApp > Impostazioni > tocca il nome > incolla.' }] },
        facebook: { seoContent: `<p>Un <strong>nome Facebook stiloso</strong> rende il tuo profilo unico. Facebook accetta font Unicode del tuo vero nome.</p>`, faqItems: [{ question: 'Facebook permette nomi stilosi?', answer: 'Facebook richiede il vero nome ma accetta varianti Unicode come corsivo e grassetto.' }] },
        discord: { seoContent: `<p>Il tuo <strong>nome Discord</strong> è la tua identità in ogni server. I font Unicode funzionano senza Nitro. Limite: <strong>32 caratteri</strong>.</p>`, faqItems: [{ question: 'Serve Nitro per nomi Discord stilosi?', answer: 'No! I font Unicode funzionano gratis per tutti gli utenti Discord.' }] },
        roblox: { seoContent: `<p>Un <strong>nome Roblox stiloso</strong> ti fa sembrare professionale. Nome visibile cambiabile ogni 7 giorni. Limite: <strong>20 caratteri</strong>.</p>`, faqItems: [{ question: 'Come avere un nome Roblox stiloso?', answer: 'Usa il nostro generatore, Roblox > Impostazioni > Nome visibile e incolla.' }] },
        gothic: { seoContent: `<p>Il nostro <strong>generatore di font gotici</strong> crea testo blackletter scuro e medievale.</p>`, faqItems: [{ question: 'Cos\'è un generatore di font gotici?', answer: 'Converte il tuo testo in caratteri Unicode blackletter (antico inglese).' }] },
        cursive: { seoContent: `<p>Il nostro <strong>generatore di font corsivi</strong> trasforma il tuo testo in belle font stile scrittura a mano.</p>`, faqItems: [{ question: 'Come scrivere in corsivo?', answer: 'Non puoi digitare in corsivo direttamente. Usa il nostro generatore — scrivi e convertiamo in Unicode corsivo.' }] },
    },
    // ─── DUTCH ───
    nl: {
        gaming: { seoContent: `<p>Een <strong>stijlvolle gamingnaam</strong> is het eerste dat andere spelers zien. Of je nu <strong>PUBG Mobile</strong>, <strong>Free Fire</strong> of <strong>COD Mobile</strong> speelt, je nickname definieert je.</p><ul><li><strong>Agressieve namen</strong> — Dark Knight, Shadow Assassin, Phantom Reaper</li><li><strong>Pro tags</strong> — Headshot God, Sniper Elite, One Tap King</li></ul>`, faqItems: [{ question: 'Welke symbolen werken in PUBG en Free Fire?', answer: 'De meeste Unicode-symbolen zoals ꧁ ꧂ ☬ ★ ⚡ ♛ werken in PUBG Mobile en Free Fire.' }] },
        boy: { seoContent: `<p>Op zoek naar <strong>stijlvolle namen voor jongens</strong>? Onze generator maakt coole namen met opvallende lettertypen.</p>`, faqItems: [{ question: 'Beste stijlvolle namen voor jongens?', answer: 'King of Style, Bad Boy, Alpha Male, Dark Prince, Lone Wolf zijn het populairst.' }] },
        girl: { seoContent: `<p>Wil je <strong>stijlvolle namen voor meisjes</strong>? Onze generator maakt mooie namen met hartjes, bloemen en vlinders.</p>`, faqItems: [{ question: 'Beste stijlvolle namen voor meisjes?', answer: 'Princess, Queen Bee, Butterfly Girl, Sweet Angel, Moon Child zijn het populairst.' }] },
        instagram: { seoContent: `<p>Je <strong>Instagram-naam</strong> is het eerste dat mensen zien. Een naam met unieke Unicode-lettertypen valt direct op.</p>`, faqItems: [{ question: 'Hoe krijg ik een stijlvolle Instagram-naam?', answer: 'Gebruik onze generator, kopieer, Instagram > Profiel bewerken > Naam en plak.' }] },
        'free-fire': { seoContent: `<p><strong>Stijlvolle Free Fire namen</strong> laten je opvallen in de lobby. Limiet: <strong>12 tekens</strong>.</p>`, faqItems: [{ question: 'Hoe krijg ik een stijlvolle Free Fire naam?', answer: 'Gebruik onze generator, kopieer, Free Fire > Profiel > Naam bewerken en plak.' }] },
        pubg: { seoContent: `<p>Een <strong>stijlvolle PUBG-naam</strong> laat je opvallen. PUBG Mobile geeft <strong>één gratis naamswijziging</strong>. Limiet: <strong>14 tekens</strong>.</p>`, faqItems: [{ question: 'Hoe verander ik mijn PUBG Mobile naam?', answer: 'PUBG profiel > klik op je naam > gebruik Hernoemkaart > plak je stijlvolle naam.' }] },
        attitude: { seoContent: `<p>Een <strong>stijlvolle attitude naam</strong> zegt wie je bent zonder woorden. We maken krachtige namen met sterke lettertypen.</p>`, faqItems: [{ question: 'Wat is een attitude naam?', answer: 'Een gedurfde naam met speciale Unicode-lettertypen. Zoals Lone Wolf, Savage King, Boss Boy.' }] },
        couple: { seoContent: `<p><strong>Stijlvolle koppelnamen</strong> gezocht? We maken bijpassende naamparen met romantische lettertypen en hartjes.</p>`, faqItems: [{ question: 'Hoe maak je bijpassende koppelnamen?', answer: 'Typ je naam en kies een stijl. Dan de naam van je partner met dezelfde stijl. Voeg ♡ ♥ ertussen toe.' }] },
        tiktok: { seoContent: `<p>Je <strong>TikTok-naam</strong> is je merk. Een stijlvolle naam maakt je onvergetelijk. Weergavenaam: <strong>30 tekens</strong>.</p>`, faqItems: [{ question: 'Hoe krijg ik een stijlvolle TikTok-naam?', answer: 'Gebruik onze generator, kopieer, TikTok > Profiel bewerken > Naam en plak.' }] },
        whatsapp: { seoContent: `<p>Maak je <strong>WhatsApp-naam</strong> stijlvol. Naam: <strong>25 tekens</strong>, Info: <strong>139 tekens</strong>, groep: <strong>100 tekens</strong>.</p>`, faqItems: [{ question: 'Hoe krijg ik een stijlvolle WhatsApp-naam?', answer: 'Gebruik onze generator, kopieer, WhatsApp > Instellingen > tik op je naam > plak.' }] },
        facebook: { seoContent: `<p>Een <strong>stijlvolle Facebook-naam</strong> maakt je profiel uniek. Facebook accepteert Unicode-lettertypen van je echte naam.</p>`, faqItems: [{ question: 'Staat Facebook stijlvolle namen toe?', answer: 'Facebook vraagt je echte naam maar accepteert Unicode-varianten zoals cursief en vet.' }] },
        discord: { seoContent: `<p>Je <strong>Discord-naam</strong> is je identiteit op elke server. Unicode-lettertypen werken zonder Nitro. Limiet: <strong>32 tekens</strong>.</p>`, faqItems: [{ question: 'Heb ik Nitro nodig voor stijlvolle Discord-namen?', answer: 'Nee! Unicode-lettertypen werken gratis voor alle Discord-gebruikers.' }] },
        roblox: { seoContent: `<p>Een <strong>stijlvolle Roblox-naam</strong> laat je er professioneel uitzien. Weergavenaam elke 7 dagen wisselbaar. Limiet: <strong>20 tekens</strong>.</p>`, faqItems: [{ question: 'Hoe krijg ik een stijlvolle Roblox-naam?', answer: 'Gebruik onze generator, Roblox > Instellingen > Weergavenaam en plak.' }] },
        gothic: { seoContent: `<p>Onze <strong>gotische lettertypegenerator</strong> maakt donkere, middeleeuwse blackletter tekst.</p>`, faqItems: [{ question: 'Wat is een gotische lettertypegenerator?', answer: 'Het zet je tekst om in Unicode blackletter (oud-Engels) tekens.' }] },
        cursive: { seoContent: `<p>Onze <strong>cursieve lettertypegenerator</strong> verandert je tekst in mooie handschrift-lettertypen.</p>`, faqItems: [{ question: 'Hoe schrijf je in cursief lettertype?', answer: 'Je kunt niet direct cursief typen. Gebruik onze generator — typ en wij zetten om naar Unicode cursief.' }] },
    },
};

import { getToolTranslatedSEO } from './toolSeoTranslations';

export function getTranslatedSEO(locale: Locale, slug: string): TranslatedSEO | undefined {
    return translations[locale]?.[slug] || getToolTranslatedSEO(locale, slug);
}
