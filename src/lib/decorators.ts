// Decorator templates for wrapping styled text in decorative symbols

export interface Decorator {
    id: string;
    name: string;
    category: string;
    prefix: string;
    suffix: string;
}

export const decorators: Decorator[] = [
    // Gaming decorators
    { id: 'gaming-1', name: 'Royal Crown', category: 'gaming', prefix: '꧁༒☬', suffix: '☬༒꧂' },
    { id: 'gaming-2', name: 'Fire King', category: 'gaming', prefix: '꧁🔥', suffix: '🔥꧂' },
    { id: 'gaming-3', name: 'Skull Pro', category: 'gaming', prefix: '亗 ', suffix: ' ×͜×' },
    { id: 'gaming-4', name: 'Danger Zone', category: 'gaming', prefix: '꧁☠', suffix: '☠꧂' },
    { id: 'gaming-5', name: 'Thunder', category: 'gaming', prefix: '⚡', suffix: '⚡' },
    { id: 'gaming-6', name: 'Royal Knight', category: 'gaming', prefix: '♔〘', suffix: '〙♔' },
    { id: 'gaming-7', name: 'Crown Master', category: 'gaming', prefix: '꧁༒♛', suffix: '♛༒꧂' },
    { id: 'gaming-8', name: 'Cross Swords', category: 'gaming', prefix: '⚔️', suffix: '⚔️' },
    { id: 'gaming-9', name: 'Sniper', category: 'gaming', prefix: '▄︻デ ', suffix: ' ═━一' },
    { id: 'gaming-10', name: 'Star Pro', category: 'gaming', prefix: '★ᴄ͢͢͢ʀɪᴍɪɴᴀʟ ', suffix: ' ⁰⁰⁷★࿐' },
    { id: 'gaming-11', name: 'Demon', category: 'gaming', prefix: '꧁ঔৣ☬✞', suffix: '✞☬ঔৣ꧂' },
    { id: 'gaming-12', name: 'Boss Mode', category: 'gaming', prefix: '꧁⁣⁣≼', suffix: '≽꧂' },

    // Cute decorators
    { id: 'cute-1', name: 'Bear Hug', category: 'cute', prefix: '(っ◔◡◔)っ ♥ ', suffix: ' ♥' },
    { id: 'cute-2', name: 'Flower Power', category: 'cute', prefix: '꧁❀ ', suffix: ' ❀꧂' },
    { id: 'cute-3', name: 'Sparkle Star', category: 'cute', prefix: '✧˖°. ', suffix: ' .°˖✧' },
    { id: 'cute-4', name: 'Butterfly', category: 'cute', prefix: '🦋⃤ ', suffix: ' 🦋⃤' },
    { id: 'cute-5', name: 'Kawaii Face', category: 'cute', prefix: '꒰ᐢ. .ᐢ꒱ ', suffix: ' ♡' },
    { id: 'cute-6', name: 'Cherry Blossom', category: 'cute', prefix: '🌸 ', suffix: ' 🌸' },
    { id: 'cute-7', name: 'Happy Cat', category: 'cute', prefix: '(=^・ω・^=) ', suffix: '' },
    { id: 'cute-8', name: 'Sweet Dream', category: 'cute', prefix: '✿ ', suffix: ' ✿' },

    // Cool decorators
    { id: 'cool-1', name: 'Star Line', category: 'cool', prefix: '★·.·´¯★ ', suffix: ' ★¯´·.·★' },
    { id: 'cool-2', name: 'Lightning', category: 'cool', prefix: '╰‿╯ ϟ ', suffix: ' ✯꧂' },
    { id: 'cool-3', name: 'Cool Arrow', category: 'cool', prefix: '➤ ', suffix: ' ✦' },
    { id: 'cool-4', name: 'Diamond', category: 'cool', prefix: '◈ ', suffix: ' ◈' },
    { id: 'cool-5', name: 'Frost', category: 'cool', prefix: '❄ ', suffix: ' ❄' },
    { id: 'cool-6', name: 'Wave', category: 'cool', prefix: '≋', suffix: '≋' },
    { id: 'cool-7', name: 'Indie', category: 'cool', prefix: '༄ᶦᶰᵈ ', suffix: ' ࿐' },
    { id: 'cool-8', name: 'Pro Tag', category: 'cool', prefix: 'ᶦᶰᵈ᭄ ', suffix: ' 亗' },

    // Fancy decorators
    { id: 'fancy-1', name: 'Elegant Scroll', category: 'fancy', prefix: '✧༝ ', suffix: ' ༝✧' },
    { id: 'fancy-2', name: 'Ornate Frame', category: 'fancy', prefix: '꧁࿇', suffix: '࿇꧂' },
    { id: 'fancy-3', name: 'Royal', category: 'fancy', prefix: '꧁✧ ', suffix: ' ࿐' },
    { id: 'fancy-4', name: 'Floral', category: 'fancy', prefix: '✿༺', suffix: '༻✿' },
    { id: 'fancy-5', name: 'Luxury', category: 'fancy', prefix: '»»———— ', suffix: ' ————««' },
    { id: 'fancy-6', name: 'Classic', category: 'fancy', prefix: '•°¯`••', suffix: '••´¯°•' },
    { id: 'fancy-7', name: 'Art Deco', category: 'fancy', prefix: '╔══╗ ', suffix: ' ╚══╝' },
    { id: 'fancy-8', name: 'Decorative', category: 'fancy', prefix: '¸,ø¤º°`°º¤ø,¸ ', suffix: ' ¸,ø¤º°`°º¤ø,¸' },

    // Love decorators
    { id: 'love-1', name: 'Heart Wings', category: 'love', prefix: '♡⃝ ', suffix: ' ♡⃝' },
    { id: 'love-2', name: 'Love Bird', category: 'love', prefix: '𓆩♡𓆪 ', suffix: ' 𓆩♡𓆪' },
    { id: 'love-3', name: 'Double Heart', category: 'love', prefix: '💕 ', suffix: ' 💕' },
    { id: 'love-4', name: 'Rose', category: 'love', prefix: '🌹 ', suffix: ' 🌹' },
    { id: 'love-5', name: 'Cupid', category: 'love', prefix: '💘 ', suffix: ' 💘' },
    { id: 'love-6', name: 'Moon Hearts', category: 'love', prefix: '☾𓂃 ', suffix: ' 𓂃☽' },
    { id: 'love-7', name: 'Ribbon Heart', category: 'love', prefix: '♡ ', suffix: ' ♡' },
    { id: 'love-8', name: 'Love Nest', category: 'love', prefix: '꧁ ❤ ', suffix: ' ❤ ꧂' },

    // Star decorators
    { id: 'star-1', name: 'Shooting Star', category: 'star', prefix: '☆彡 ', suffix: ' 彡☆' },
    { id: 'star-2', name: 'Glitter', category: 'star', prefix: '✪ ', suffix: ' ✪' },
    { id: 'star-3', name: 'Sparkle', category: 'star', prefix: '✨ ', suffix: ' ✨' },
    { id: 'star-4', name: 'Star Burst', category: 'star', prefix: '★彡 ', suffix: ' 彡★' },
    { id: 'star-5', name: 'Constellation', category: 'star', prefix: '⋆⁺₊⋆ ', suffix: ' ⋆⁺₊⋆' },

    // Sword decorators
    { id: 'sword-1', name: 'Blade', category: 'sword', prefix: '▬▬ι═══════► ', suffix: ' ◄═══════ι▬▬' },
    { id: 'sword-2', name: 'Axe', category: 'sword', prefix: '⚔️ ', suffix: ' ⚔️' },
    { id: 'sword-3', name: 'Shield', category: 'sword', prefix: '🛡️ ', suffix: ' 🛡️' },
    { id: 'sword-4', name: 'Cross Blade', category: 'sword', prefix: '༒ ', suffix: ' ༒' },
    { id: 'sword-5', name: 'Warrior', category: 'sword', prefix: '⚜ ', suffix: ' ⚜' },

    // Crazy decorators
    { id: 'crazy-1', name: 'Chaos', category: 'crazy', prefix: '༼☯︎☠︎༽', suffix: '༼☠︎☯︎༽' },
    { id: 'crazy-2', name: 'Glitch', category: 'crazy', prefix: '░▒▓ ', suffix: ' ▓▒░' },
    { id: 'crazy-3', name: 'Neon', category: 'crazy', prefix: '╚»★«╝ ', suffix: ' ╚»★«╝' },
    { id: 'crazy-4', name: 'Matrix', category: 'crazy', prefix: '「 ', suffix: ' 」' },

    // Serious decorators
    { id: 'serious-1', name: 'Professional', category: 'serious', prefix: '『 ', suffix: ' 』' },
    { id: 'serious-2', name: 'Formal', category: 'serious', prefix: '〖 ', suffix: ' 〗' },
    { id: 'serious-3', name: 'Executive', category: 'serious', prefix: '【 ', suffix: ' 】' },
    { id: 'serious-4', name: 'Authority', category: 'serious', prefix: '≡ ', suffix: ' ≡' },

    // Angry decorators
    { id: 'angry-1', name: 'Table Flip', category: 'angry', prefix: '(╯°□°）╯︵ ┻━┻ ', suffix: '' },
    { id: 'angry-2', name: 'Rage Fire', category: 'angry', prefix: '😤💢 ', suffix: ' 💢😤' },
    { id: 'angry-3', name: 'Fury', category: 'angry', prefix: '(ಠ益ಠ) ', suffix: '' },
    { id: 'angry-4', name: 'Explosion', category: 'angry', prefix: '💥 ', suffix: ' 💥' },
    { id: 'angry-5', name: 'Thunder Rage', category: 'angry', prefix: '⚡😡 ', suffix: ' 😡⚡' },
    { id: 'angry-6', name: 'Angry Bear', category: 'angry', prefix: 'ʕ•̫͡•ʔ💢 ', suffix: '' },
    { id: 'angry-7', name: 'Dark Fire', category: 'angry', prefix: '🖤🔥 ', suffix: ' 🔥🖤' },

    // Sad decorators
    { id: 'sad-1', name: 'Tearful', category: 'sad', prefix: '(╥﹏╥) ', suffix: '' },
    { id: 'sad-2', name: 'Broken Heart', category: 'sad', prefix: '💔 ', suffix: ' 💔' },
    { id: 'sad-3', name: 'Wilted Rose', category: 'sad', prefix: '🥀 ', suffix: ' 🥀' },
    { id: 'sad-4', name: 'Rain', category: 'sad', prefix: '☔ ', suffix: ' ☔' },
    { id: 'sad-5', name: 'Sobbing', category: 'sad', prefix: '(´;ω;`) ', suffix: '' },
    { id: 'sad-6', name: 'Bandage Heart', category: 'sad', prefix: '💔🩹 ', suffix: ' 🩹💔' },
    { id: 'sad-7', name: 'Dark Moon', category: 'sad', prefix: '🌑 ', suffix: ' 🌑' },

    // Attitude decorators
    { id: 'attitude-1', name: 'Side Eye', category: 'attitude', prefix: '( ͡° ͜ʖ ͡°) ', suffix: '' },
    { id: 'attitude-2', name: 'Cool Shades', category: 'attitude', prefix: '😎🖤 ', suffix: ' 🖤😎' },
    { id: 'attitude-3', name: 'Boss Mode', category: 'attitude', prefix: '👑 ', suffix: ' 👑' },
    { id: 'attitude-4', name: 'Smirk', category: 'attitude', prefix: '(ಠ_ಠ) ', suffix: '' },
    { id: 'attitude-5', name: 'Unbothered', category: 'attitude', prefix: '💅 ', suffix: ' 💅' },
    { id: 'attitude-6', name: 'Dark King', category: 'attitude', prefix: '🖤♛ ', suffix: ' ♛🖤' },
    { id: 'attitude-7', name: 'Savage', category: 'attitude', prefix: '🐍 ', suffix: ' 🐍' },

    // Happy decorators
    { id: 'happy-1', name: 'Party', category: 'happy', prefix: '🎉 ', suffix: ' 🎉' },
    { id: 'happy-2', name: 'Sunshine', category: 'happy', prefix: '☀️ ', suffix: ' ☀️' },
    { id: 'happy-3', name: 'Joy Face', category: 'happy', prefix: '(´▽`) ', suffix: '' },
    { id: 'happy-4', name: 'Rainbow', category: 'happy', prefix: '🌈 ', suffix: ' 🌈' },
    { id: 'happy-5', name: 'Celebration', category: 'happy', prefix: '🥳✨ ', suffix: ' ✨🥳' },
    { id: 'happy-6', name: 'Smiley', category: 'happy', prefix: '(ᵔᴥᵔ) ', suffix: '' },
    { id: 'happy-7', name: 'Confetti', category: 'happy', prefix: '🎊 ', suffix: ' 🎊' },

    // Sexy decorators
    { id: 'sexy-1', name: 'Kiss', category: 'sexy', prefix: '💋 ', suffix: ' 💋' },
    { id: 'sexy-2', name: 'Fire Hot', category: 'sexy', prefix: '🔥💋 ', suffix: ' 💋🔥' },
    { id: 'sexy-3', name: 'Wink', category: 'sexy', prefix: '(‾◡◝) ', suffix: '' },
    { id: 'sexy-4', name: 'Sparkle Kiss', category: 'sexy', prefix: '✨💄 ', suffix: ' 💄✨' },
    { id: 'sexy-5', name: 'Red Lips', category: 'sexy', prefix: '👄 ', suffix: ' 👄' },
    { id: 'sexy-6', name: 'Flame Heart', category: 'sexy', prefix: '❤️‍🔥 ', suffix: ' ❤️‍🔥' },

    // Devil decorators
    { id: 'devil-1', name: 'Dark Devil', category: 'devil', prefix: '😈🔥 ', suffix: ' 🔥😈' },
    { id: 'devil-2', name: 'Skull Devil', category: 'devil', prefix: '☠️👿 ', suffix: ' 👿☠️' },
    { id: 'devil-3', name: 'Trident', category: 'devil', prefix: '🔱 ', suffix: ' 🔱' },
    { id: 'devil-4', name: 'Dark Soul', category: 'devil', prefix: '🖤💀 ', suffix: ' 💀🖤' },
    { id: 'devil-5', name: 'Hell Fire', category: 'devil', prefix: '꧁👹 ', suffix: ' 👹꧂' },
    { id: 'devil-6', name: 'Demon Eyes', category: 'devil', prefix: '⚫👁️ ', suffix: ' 👁️⚫' },

    // Dog decorators
    { id: 'dog-1', name: 'Puppy Paws', category: 'dog', prefix: '🐾 ', suffix: ' 🐾' },
    { id: 'dog-2', name: 'Good Boy', category: 'dog', prefix: '🐕 ', suffix: ' 🐕' },
    { id: 'dog-3', name: 'Woof Woof', category: 'dog', prefix: '🐶 ', suffix: ' 🐶' },
    { id: 'dog-4', name: 'Bone Lover', category: 'dog', prefix: '🦴🐕 ', suffix: ' 🐕🦴' },
    { id: 'dog-5', name: 'Paw Print', category: 'dog', prefix: '🐾🐶 ', suffix: ' 🐶🐾' },

    // Bear decorators
    { id: 'bear-1', name: 'Teddy Bear', category: 'bear', prefix: '🐻 ', suffix: ' 🐻' },
    { id: 'bear-2', name: 'Honey Bear', category: 'bear', prefix: '🍯🐻 ', suffix: ' 🐻🍯' },
    { id: 'bear-3', name: 'Bear Paw', category: 'bear', prefix: '🐻‍❄️ ', suffix: ' 🐻‍❄️' },
    { id: 'bear-4', name: 'Cozy Bear', category: 'bear', prefix: 'ʕ•ᴥ•ʔ ', suffix: ' ʕ•ᴥ•ʔ' },
    { id: 'bear-5', name: 'Bear Hug', category: 'bear', prefix: '⊂(・▽・⊂) ', suffix: '' },

    // Dancing decorators
    { id: 'dancing-1', name: 'Dance Floor', category: 'dancing', prefix: '💃 ', suffix: ' 🕺' },
    { id: 'dancing-2', name: 'Party Dance', category: 'dancing', prefix: '🪩✨ ', suffix: ' ✨🪩' },
    { id: 'dancing-3', name: 'Music Beat', category: 'dancing', prefix: '🎶💃 ', suffix: ' 💃🎶' },
    { id: 'dancing-4', name: 'Disco Fever', category: 'dancing', prefix: '🕺🎵 ', suffix: ' 🎵🕺' },

    // Confused decorators
    { id: 'confused-1', name: 'Head Spin', category: 'confused', prefix: '😵‍💫 ', suffix: ' 😵‍💫' },
    { id: 'confused-2', name: 'Question Mark', category: 'confused', prefix: '❓🤔 ', suffix: ' 🤔❓' },
    { id: 'confused-3', name: 'Swirl', category: 'confused', prefix: '🌀 ', suffix: ' 🌀' },
    { id: 'confused-4', name: 'Puzzled', category: 'confused', prefix: '(⊙_⊙)？', suffix: '' },

    // Boy decorators
    { id: 'boy-1', name: 'King Crown', category: 'boy', prefix: '👑 ', suffix: ' 👑' },
    { id: 'boy-2', name: 'Muscle Boy', category: 'boy', prefix: '💪😎 ', suffix: ' 😎💪' },
    { id: 'boy-3', name: 'Cool Dude', category: 'boy', prefix: '🤴 ', suffix: ' 🤴' },
    { id: 'boy-4', name: 'Sports Star', category: 'boy', prefix: '⚽🏆 ', suffix: ' 🏆⚽' },

    // Girl decorators
    { id: 'girl-1', name: 'Princess', category: 'girl', prefix: '👸✨ ', suffix: ' ✨👸' },
    { id: 'girl-2', name: 'Fairy Wings', category: 'girl', prefix: '🧚‍♀️ ', suffix: ' 🧚‍♀️' },
    { id: 'girl-3', name: 'Flower Girl', category: 'girl', prefix: '🌺💕 ', suffix: ' 💕🌺' },
    { id: 'girl-4', name: 'Sparkle Queen', category: 'girl', prefix: '✨👑 ', suffix: ' 👑✨' },
    { id: 'girl-5', name: 'Butterfly Girl', category: 'girl', prefix: '🦋💖 ', suffix: ' 💖🦋' },

    // Beautiful decorators
    { id: 'beautiful-1', name: 'Rose Garden', category: 'beautiful', prefix: '🌹✨ ', suffix: ' ✨🌹' },
    { id: 'beautiful-2', name: 'Bloom', category: 'beautiful', prefix: '🌸🌿 ', suffix: ' 🌿🌸' },
    { id: 'beautiful-3', name: 'Pearl', category: 'beautiful', prefix: '🦢 ', suffix: ' 🦢' },
    { id: 'beautiful-4', name: 'Golden Grace', category: 'beautiful', prefix: '✿ ', suffix: ' ✿' },

    // Begging decorators
    { id: 'begging-1', name: 'Pleading', category: 'begging', prefix: '🥺🙏 ', suffix: ' 🙏🥺' },
    { id: 'begging-2', name: 'Puppy Eyes', category: 'begging', prefix: '(ó﹏ò｡) ', suffix: '' },
    { id: 'begging-3', name: 'Pretty Please', category: 'begging', prefix: '🙏✨ ', suffix: ' ✨🙏' },
    { id: 'begging-4', name: 'Sweet Plea', category: 'begging', prefix: '🥺💕 ', suffix: ' 💕🥺' },

    // Couple decorators
    { id: 'couple-1', name: 'King & Queen', category: 'couple', prefix: '👑♔ ', suffix: ' ♕👑' },
    { id: 'couple-2', name: 'Love Birds', category: 'couple', prefix: '🕊️❤️ ', suffix: ' ❤️🕊️' },
    { id: 'couple-3', name: 'Together', category: 'couple', prefix: '💑 ', suffix: ' 💑' },
    { id: 'couple-4', name: 'Infinity Love', category: 'couple', prefix: '∞❤️ ', suffix: ' ❤️∞' },
    { id: 'couple-5', name: 'His & Hers', category: 'couple', prefix: '💍 ', suffix: ' 💍' },

    // Group Name decorators
    { id: 'group-name-1', name: 'Squad Goals', category: 'group-name', prefix: '👥🔥 ', suffix: ' 🔥👥' },
    { id: 'group-name-2', name: 'Team Clan', category: 'group-name', prefix: '⚡🏆 ', suffix: ' 🏆⚡' },
    { id: 'group-name-3', name: 'Crew Tag', category: 'group-name', prefix: '『 ', suffix: ' 』' },
    { id: 'group-name-4', name: 'Family', category: 'group-name', prefix: '👨‍👩‍👧‍👦 ', suffix: ' 👨‍👩‍👧‍👦' },

    // Mafia decorators
    { id: 'mafia-1', name: 'Godfather', category: 'mafia', prefix: '🎩🔫 ', suffix: ' 🔫🎩' },
    { id: 'mafia-2', name: 'Don Boss', category: 'mafia', prefix: '🖤♠️ ', suffix: ' ♠️🖤' },
    { id: 'mafia-3', name: 'Gangster', category: 'mafia', prefix: '💰🔫 ', suffix: ' 🔫💰' },
    { id: 'mafia-4', name: 'Boss Ring', category: 'mafia', prefix: '💎♛ ', suffix: ' ♛💎' },
    { id: 'mafia-5', name: 'Mob King', category: 'mafia', prefix: '🎲🃏 ', suffix: ' 🃏🎲' },

    // WiFi decorators
    { id: 'wifi-1', name: 'Signal', category: 'wifi', prefix: '📶 ', suffix: ' 📶' },
    { id: 'wifi-2', name: 'Connected', category: 'wifi', prefix: '🌐📡 ', suffix: ' 📡🌐' },
    { id: 'wifi-3', name: 'Hot Spot', category: 'wifi', prefix: '🔥📶 ', suffix: ' 📶🔥' },
    { id: 'wifi-4', name: 'Router', category: 'wifi', prefix: '📡 ', suffix: ' 📡' },

    // Broken Heart decorators
    { id: 'broken-heart-1', name: 'Shattered', category: 'broken-heart', prefix: '💔😢 ', suffix: ' 😢💔' },
    { id: 'broken-heart-2', name: 'Stitched Heart', category: 'broken-heart', prefix: '💔🩹 ', suffix: ' 🩹💔' },
    { id: 'broken-heart-3', name: 'Crying Heart', category: 'broken-heart', prefix: '😭💔 ', suffix: ' 💔😭' },
    { id: 'broken-heart-4', name: 'Empty Heart', category: 'broken-heart', prefix: '🖤 ', suffix: ' 🖤' },

    // Depressed decorators
    { id: 'depressed-1', name: 'Dark Cloud', category: 'depressed', prefix: '🌧️ ', suffix: ' 🌧️' },
    { id: 'depressed-2', name: 'Empty Soul', category: 'depressed', prefix: '🖤😔 ', suffix: ' 😔🖤' },
    { id: 'depressed-3', name: 'Lonely', category: 'depressed', prefix: '(ᵕ—ᴗ—) ', suffix: '' },
    { id: 'depressed-4', name: 'Fading', category: 'depressed', prefix: '🌑💧 ', suffix: ' 💧🌑' },

    // Crying decorators
    { id: 'crying-1', name: 'Tears', category: 'crying', prefix: '😭💧 ', suffix: ' 💧😭' },
    { id: 'crying-2', name: 'Sobbing', category: 'crying', prefix: '(ಥ_ಥ) ', suffix: '' },
    { id: 'crying-3', name: 'Rainy Eyes', category: 'crying', prefix: '🌧️😢 ', suffix: ' 😢🌧️' },
    { id: 'crying-4', name: 'Flood', category: 'crying', prefix: '💧😿 ', suffix: ' 😿💧' },

    // No decorator (plain)
    { id: 'none', name: 'None', category: 'all', prefix: '', suffix: '' },
];

