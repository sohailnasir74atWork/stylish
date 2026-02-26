// Unicode character mappings for 100+ font styles
// Each map transforms a-z, A-Z, 0-9 to Unicode equivalents

export interface CharMap {
    id: string;
    name: string;
    category: string;
    map: Record<string, string>;
}

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function buildMap(chars: string): Record<string, string> {
    const m: Record<string, string> = {};
    const arr = [...chars];
    const keys = [...alpha];
    for (let i = 0; i < keys.length && i < arr.length; i++) {
        m[keys[i]] = arr[i];
    }
    return m;
}

export const charMaps: CharMap[] = [
    {
        id: 'bold-serif',
        name: '𝐁𝐨𝐥𝐝 𝐒𝐞𝐫𝐢𝐟',
        category: 'bold',
        map: buildMap('𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'),
    },
    {
        id: 'bold-sans',
        name: '𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀',
        category: 'bold',
        map: buildMap('𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'),
    },
    {
        id: 'italic-serif',
        name: '𝐼𝑡𝑎𝑙𝑖𝑐 𝑆𝑒𝑟𝑖𝑓',
        category: 'fancy',
        map: buildMap('𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍0123456789'),
    },
    {
        id: 'bold-italic-serif',
        name: '𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄',
        category: 'fancy',
        map: buildMap('𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁0123456789'),
    },
    {
        id: 'italic-sans',
        name: '𝘐𝘵𝘢𝘭𝘪𝘤 𝘚𝘢𝘯𝘴',
        category: 'fancy',
        map: buildMap('𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789'),
    },
    {
        id: 'bold-italic-sans',
        name: '𝙱𝙾𝙻𝙳 𝙸𝚃𝙰𝙻𝙸𝙲 𝚂𝙰𝙽𝚂',
        category: 'bold',
        map: buildMap('𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕0123456789'),
    },
    {
        id: 'script',
        name: '𝒮𝒸𝓇𝒾𝓅𝓉',
        category: 'fancy',
        map: buildMap('𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵0123456789'),
    },
    {
        id: 'bold-script',
        name: '𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽',
        category: 'fancy',
        map: buildMap('𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789'),
    },
    {
        id: 'fraktur',
        name: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯',
        category: 'gothic',
        map: buildMap('𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ0123456789'),
    },
    {
        id: 'bold-fraktur',
        name: '𝕭𝖔𝖑𝖉 𝕱𝖗𝖆𝖐𝖙𝖚𝖗',
        category: 'gothic',
        map: buildMap('𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789'),
    },
    {
        id: 'double-struck',
        name: '𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜',
        category: 'cool',
        map: buildMap('𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'),
    },
    {
        id: 'monospace',
        name: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',
        category: 'cool',
        map: buildMap('𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'),
    },
    {
        id: 'fullwidth',
        name: 'Ｆｕｌｌｗｉｄｔｈ',
        category: 'cool',
        map: buildMap('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９'),
    },
    {
        id: 'circled',
        name: 'Ⓒⓘⓡⓒⓛⓔⓓ',
        category: 'bubble',
        map: buildMap('ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨'),
    },
    {
        id: 'negative-circled',
        name: '🅝🅔🅖 🅒🅘🅡🅒🅛🅔🅓',
        category: 'bubble',
        map: buildMap('🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩0123456789'),
    },
    {
        id: 'squared',
        name: '🄲🅀🅄🄰🅁🄴🄳',
        category: 'bubble',
        map: buildMap('🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789'),
    },
    {
        id: 'negative-squared',
        name: '🆂🆀🆄🅰🆁🅴🅳',
        category: 'bubble',
        map: buildMap('🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉0123456789'),
    },
    {
        id: 'small-caps',
        name: 'Sᴍᴀʟʟ Cᴀᴘs',
        category: 'cool',
        map: buildMap('ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
    },
    {
        id: 'superscript',
        name: 'ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ',
        category: 'small',
        map: buildMap('ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹'),
    },
    {
        id: 'subscript',
        name: 'ₛᵤᵦₛ꜀ᵣᵢₚₜ',
        category: 'small',
        map: buildMap('ₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz ABCDEFGHIJKLMNOPQRSTUVWXYZₒ₁₂₃₄₅₆₇₈₉'),
    },
    {
        id: 'upside-down',
        name: 'uʍop-ǝpᴉsd∩',
        category: 'weird',
        map: buildMap('ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz∀ꓭƆꓷƎꓞꓨHIꓩꓘꓶWNOꓒΌꓤSꓕꓵΛMX⅄Z0ƖᄅƐㄣϛ9ㄥ86'),
    },
    {
        id: 'mirrored',
        name: 'bɘɿoɿɿiM',
        category: 'weird',
        map: buildMap('ɒdɔbɘʇǫʜiįʞlmnoqpɿꙅƚυvwxγzAdƆGƎꟻᎮHIႱʞ⌐MИOꟼϘЯꙄTUVWXYZ0123456789'),
    },
    {
        id: 'parenthesized',
        name: '⒫⒜⒭⒠⒩',
        category: 'bubble',
        map: buildMap('⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵0123456789'),
    },
    {
        id: 'currency',
        name: '₵ʉɽɽɇ₦₵ɏ',
        category: 'cool',
        map: buildMap('₳฿₵ĐɆ₣₲ĦƗĴ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ĦƗĴ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789'),
    },
    {
        id: 'lenticular',
        name: '【L】【E】【N】',
        category: 'cool',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = `【${c}】`;
            return m;
        })(),
    },
    {
        id: 'dotted',
        name: '░D░O░T░',
        category: 'cool',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = `░${c}`;
            return m;
        })(),
    },
    {
        id: 'underline-bracket',
        name: '[̲̅U̲̅][̲̅N̲̅]',
        category: 'fancy',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = `[̲̅${c}]`;
            return m;
        })(),
    },
    {
        id: 'cjk-style',
        name: '匚Ⓙ长',
        category: 'gaming',
        map: buildMap('卂乃匚ᗪ乇千Ꮆ卄丨ﾌ长乚爪几ㄖ卩Ɋ尺丂ㄒ凵ᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌ长乚爪几ㄖ卩Ɋ尺丂ㄒ凵ᐯ山乂ㄚ乙0123456789'),
    },
    {
        id: 'canadian-aboriginal',
        name: 'ᔕTYᒪIᔕᕼ',
        category: 'gaming',
        map: buildMap('ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪᗴᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789'),
    },
    {
        id: 'thai-style',
        name: 'Շђคเ',
        category: 'fancy',
        map: buildMap('คb¢dєŦﻮђเןкlɱภ๏קqгรՇยשฬאყzคЪƈƊЄFGĦIJKLMᾔÖPQRSTUVWXYZ0123456789'),
    },
    {
        id: 'greek-style',
        name: 'Gɾҽҽƙ',
        category: 'fancy',
        map: buildMap('αɓϲԃεϝɠɦιʝƙʅɱɳσρφɾʂƚυʋωxყȥΛBϹDΞFGΉIJΚLMΠOPQRSTUVWXYZ0123456789'),
    },
    {
        id: 'rock-dots',
        name: 'R̈ö̤c̈k̤',
        category: 'weird',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0308';
            return m;
        })(),
    },
    {
        id: 'hearts-above',
        name: 'H̤̮e̤̮a̤̮r̤̮t̤̮',
        category: 'love',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0364';
            return m;
        })(),
    },
    {
        id: 'strikethrough',
        name: 'S̶t̶r̶i̶k̶e̶',
        category: 'cool',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0336';
            return m;
        })(),
    },
    {
        id: 'underline',
        name: 'U̲n̲d̲e̲r̲l̲i̲n̲e̲',
        category: 'cool',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0332';
            return m;
        })(),
    },
    {
        id: 'double-underline',
        name: 'D̳o̳u̳b̳l̳e̳',
        category: 'cool',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0333';
            return m;
        })(),
    },
    {
        id: 'overline',
        name: 'O̅v̅e̅r̅l̅i̅n̅e̅',
        category: 'cool',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0305';
            return m;
        })(),
    },
    {
        id: 'wavy',
        name: 'W̴a̴v̴y̴',
        category: 'weird',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0334';
            return m;
        })(),
    },
    {
        id: 'cross-above',
        name: 'C̴̛r̴̛ơ̴s̴̛s̴̛',
        category: 'weird',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u033D';
            return m;
        })(),
    },
    {
        id: 'sans-serif',
        name: '𝖲𝖺𝗇𝗌 𝖲𝖾𝗋𝗂𝖿',
        category: 'cool',
        map: buildMap('𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹0123456789'),
    },
    // Additional gaming-focused styles
    {
        id: 'gaming-fire',
        name: '🔥 Gค๓เภﻮ 🔥',
        category: 'gaming',
        map: buildMap('ค๒ƈ๔єŦﻮɦเﻝкɭ๓ภ๏קǫг丂Շย۷ฬאץ乙ค๒ƈ๔єŦﻮɦเﻝкɭ๓ภ๏קǫг丂Շย۷ฬאץ乙0123456789'),
    },
    {
        id: 'lisu',
        name: 'ꓡꓲꓢꓴ',
        category: 'cool',
        map: buildMap('ꓮꓐꓚꓓꓰꓝꓖꓧꓲꓙꓗꓡꓟꓠꓳꓑꓺꓣꓢꓔꓴꓦꓪꓫꓬꓜꓮꓐꓚꓓꓰꓝꓖꓧꓲꓙꓗꓡꓟꓠꓳꓑꓺꓣꓢꓔꓴꓦꓪꓫꓬꓜ0123456789'),
    },
    {
        id: 'old-english',
        name: '𝕺𝖑𝖉 𝕰𝖓𝖌𝖑𝖎𝖘𝖍',
        category: 'gothic',
        map: buildMap('𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789'),
    },
    // Cute styles
    {
        id: 'cute-curvy',
        name: 'ƈυƚε ƈυɾʋყ',
        category: 'cute',
        map: buildMap('αɓƈԃεϝɠԋιʝƙʅɱɳσρφɾʂƚυʋɯxყȥΛBCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
    },
    {
        id: 'cute-decorated',
        name: '꒰ᐢ. .ᐢ꒱ ᑕᑌTE',
        category: 'cute',
        map: buildMap('ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪᗴᖴᏩᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789'),
    },
    // Love styles
    {
        id: 'love-hearts',
        name: 'ℒ♡ⓥε',
        category: 'love',
        map: buildMap('αႦƈԃεϝɠԋιʝƙʅɱɳσρφɾʂƚυʋɯxყȥΛBCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
    },
    // Star and sparkle styles
    {
        id: 'sparkles',
        name: '✦Sᴘᴀʀᴋʟᴇ✦',
        category: 'star',
        map: buildMap('ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
    },
    // Crazy styles
    {
        id: 'crazy-mix',
        name: 'ᑕᖇᗩᘔY',
        category: 'crazy',
        map: buildMap('ᗩᗷᑕᗪᗴᖴǤᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪᗴᖴǤᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789'),
    },
    // Serious style
    {
        id: 'serious-bold',
        name: 'ᏚᎬᏒᏆᎾᏌᏚ',
        category: 'serious',
        map: buildMap('ᎪᏰᏟᎠᎬᎱᏀᎻᏆᎫᏦᏞᎷᏁᎾᎮᏅᏒᏚᎿᏌᏉᏔᎲᎩᏃᎪᏰᏟᎠᎬᎱᏀᎻᏆᎫᏦᏞᎷᏁᎾᎮᏅᏒᏚᎿᏌᏉᏔᎲᎩᏃ0123456789'),
    },
    // Sword / warrior style
    {
        id: 'sword-warrior',
        name: '⚔️₩₳ⱤⱤłØⱤ⚔️',
        category: 'sword',
        map: buildMap('₳฿₵ĐɆ₣₲ĦƗĴ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ĦƗĴ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789'),
    },
    // Emoji letter styles
    {
        id: 'emoji-blocks',
        name: '🇪 🇲 🇴 🇯 🇮',
        category: 'emoji',
        map: (() => {
            const emojis: Record<string, string> = {
                a: '🇦', b: '🇧', c: '🇨', d: '🇩', e: '🇪', f: '🇫', g: '🇬',
                h: '🇭', i: '🇮', j: '🇯', k: '🇰', l: '🇱', m: '🇲', n: '🇳',
                o: '🇴', p: '🇵', q: '🇶', r: '🇷', s: '🇸', t: '🇹', u: '🇺',
                v: '🇻', w: '🇼', x: '🇽', y: '🇾', z: '🇿',
            };
            const m: Record<string, string> = {};
            for (const c of alpha) {
                m[c] = emojis[c.toLowerCase()] || c;
            }
            return m;
        })(),
    },
    // Spaced styles
    {
        id: 'wide-spaced',
        name: 'W I D E',
        category: 'cool',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + ' ';
            return m;
        })(),
    },
    // Box drawing style
    {
        id: 'rounded-box',
        name: '╭P╮╭R╮╭O╮',
        category: 'fancy',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = `╭${c}╮`;
            return m;
        })(),
    },

    // === EMOTION STYLES ===

    // Angry styles
    {
        id: 'angry-bold',
        name: '😡 𝗔𝗡𝗚𝗥𝗬 😡',
        category: 'angry',
        map: buildMap('𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'),
    },
    {
        id: 'angry-caps',
        name: '💢 ᗩᑎǤᖇY 💢',
        category: 'angry',
        map: buildMap('ᗩᗷᑕᗪᗴᖴǤᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪᗴᖴǤᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789'),
    },
    {
        id: 'angry-fraktur',
        name: '🔥 𝕬𝖓𝖌𝖗𝖞 🔥',
        category: 'angry',
        map: buildMap('𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789'),
    },

    // Sad styles
    {
        id: 'sad-italic',
        name: '😢 𝘚𝘢𝘥 😢',
        category: 'sad',
        map: buildMap('𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789'),
    },
    {
        id: 'sad-script',
        name: '💔 𝓢𝓪𝓭 💔',
        category: 'sad',
        map: buildMap('𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789'),
    },
    {
        id: 'sad-small',
        name: '🥀 ˢᵃᵈ 🥀',
        category: 'sad',
        map: buildMap('ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹'),
    },

    // Attitude styles
    {
        id: 'attitude-bold',
        name: '😏 𝐀𝐓𝐓𝐈𝐓𝐔𝐃𝐄 😏',
        category: 'attitude',
        map: buildMap('𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'),
    },
    {
        id: 'attitude-double',
        name: '🖤 𝔸𝕋𝕋𝕀𝕋𝕌𝔻𝔼 🖤',
        category: 'attitude',
        map: buildMap('𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'),
    },
    {
        id: 'attitude-strike',
        name: '👑 A̶t̶t̶i̶t̶u̶d̶e̶ 👑',
        category: 'attitude',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0336';
            return m;
        })(),
    },

    // Happy styles
    {
        id: 'happy-script',
        name: '🎉 𝒽𝒶𝓅𝓅𝓎 🎉',
        category: 'happy',
        map: buildMap('𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵0123456789'),
    },
    {
        id: 'happy-bubble',
        name: '✨ Ⓗⓐⓟⓟⓨ ✨',
        category: 'happy',
        map: buildMap('ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨'),
    },

    // Sexy styles
    {
        id: 'sexy-script',
        name: '💋 𝓢𝓮𝔁𝔂 💋',
        category: 'sexy',
        map: buildMap('𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789'),
    },
    {
        id: 'sexy-italic',
        name: '🔥 𝘚𝘦𝘹𝘺 🔥',
        category: 'sexy',
        map: buildMap('𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789'),
    },

    // Devil styles
    {
        id: 'devil-gothic',
        name: '😈 𝔇𝔢𝔳𝔦𝔩 😈',
        category: 'devil',
        map: buildMap('𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ0123456789'),
    },
    {
        id: 'devil-bold-fraktur',
        name: '👿 𝕯𝖊𝖛𝖎𝖑 👿',
        category: 'devil',
        map: buildMap('𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789'),
    },

    // === ADDITIONAL TOOL STYLES ===

    // Magic / Enchanted
    {
        id: 'magic-sparkle',
        name: '🪄 𝕄𝕒𝕘𝕚𝕔 🪄',
        category: 'magic',
        map: buildMap('𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'),
    },
    {
        id: 'magic-rune',
        name: '✦ ᗰᗩǤIᑕ ✦',
        category: 'magic',
        map: buildMap('ᗩᗷᑕᗪᗴᖴǤᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪᗴᖴǤᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789'),
    },

    // Aesthetic
    {
        id: 'aesthetic-wave',
        name: '🌊 ᴀᴇsᴛʜᴇᴛɪᴄ 🌊',
        category: 'aesthetic',
        map: buildMap('ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
    },
    {
        id: 'aesthetic-wide',
        name: '✧ Ａｅｓｔｈｅｔｉｃ ✧',
        category: 'aesthetic',
        map: buildMap('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９'),
    },

    // Tattoo
    {
        id: 'tattoo-gothic',
        name: '💉 𝔗𝔞𝔱𝔱𝔬𝔬 💉',
        category: 'tattoo',
        map: buildMap('𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ0123456789'),
    },
    {
        id: 'tattoo-script',
        name: '🖋️ 𝓣𝓪𝓽𝓽𝓸𝓸 🖋️',
        category: 'tattoo',
        map: buildMap('𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789'),
    },

    // Retro
    {
        id: 'retro-pixel',
        name: '🕹️ 卂乃匚 🕹️',
        category: 'retro',
        map: buildMap('卂乃匚ᗪ乇千Ꮆ卄丨ﾌ长乚爪几ㄖ卩Ɋ尺丂ㄒ凵ᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌ长乚爪几ㄖ卩Ɋ尺丂ㄒ凵ᐯ山乂ㄚ乙0123456789'),
    },

    // Line / Joiner styles
    {
        id: 'line-through',
        name: '━━ Lɪɴᴇ ━━',
        category: 'line',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u0332';
            return m;
        })(),
    },
    {
        id: 'joiner-dots',
        name: '•.•.• Jᴏɪɴᴇʀ •.•.•',
        category: 'joiner',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '·';
            return m;
        })(),
    },

    // Number font (digits emphasized)
    {
        id: 'number-box',
        name: '0⃣ 1⃣ 2⃣',
        category: 'number',
        map: (() => {
            const m: Record<string, string> = {};
            for (const c of alpha) m[c] = c + '\u20E3';
            return m;
        })(),
    },

    // Pretty / Elegant
    {
        id: 'pretty-script',
        name: '🌸 𝒫𝓇ℯ𝓉𝓉𝓎 🌸',
        category: 'pretty',
        map: buildMap('𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵0123456789'),
    },

    // Badass
    {
        id: 'badass-currency',
        name: '💀 ₱₳₴₴ 💀',
        category: 'badass',
        map: buildMap('₳฿₵ĐɆ₣₲ĦƗĴ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ĦƗĴ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789'),
    },
    {
        id: 'badass-fraktur',
        name: '☠ 𝕭𝖆𝖉𝖆𝖘𝖘 ☠',
        category: 'badass',
        map: buildMap('𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789'),
    },
];

