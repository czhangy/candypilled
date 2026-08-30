import { Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

// Shared by Diamond and Pearl (see ../diamond/diamond.ts and
// ../pearl/pearl.ts) since gym/rival/Elite Four trainer data doesn't differ
// between the two versions. Populate with `npm run gen:battle diamond-pearl
// <location> ...`.
export const BATTLES: Record<string, BattleData> = {
    'youngster-logan': {
        trainerClass: 'youngster',
        name: 'Logan',
        teams: [
            {
                team: [
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Bold,
                        moves: ['tackle', 'leer'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-natalie': {
        trainerClass: 'lass',
        name: 'Natalie',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 3,
                        nature: Nature.Bold,
                        moves: ['tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 3,
                        nature: Nature.Bold,
                        moves: ['tackle'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-tristan': {
        trainerClass: 'youngster',
        name: 'Tristan',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Careful,
                        moves: ['tackle', 'growl', 'quick-attack'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-tyler': {
        trainerClass: 'youngster',
        name: 'Tyler',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Docile,
                        moves: ['splash'],
                        ivs: 0,
                    },
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Lonely,
                        moves: ['tackle', 'growl', 'quick-attack'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-samantha': {
        trainerClass: 'lass',
        name: 'Samantha',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 7,
                        nature: Nature.Docile,
                        moves: ['absorb', 'growth', 'water-sport'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-sarah': {
        trainerClass: 'lass',
        name: 'Sarah',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 7,
                        nature: Nature.Relaxed,
                        moves: ['tackle', 'growl'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-catcher-brandon': {
        trainerClass: 'bug-catcher',
        name: 'Brandon',
        teams: [
            {
                team: [
                    {
                        slug: 'kricketot',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Bashful,
                        moves: ['growl', 'bide'],
                        ivs: 0,
                    },
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Bashful,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aroma-lady-taylor': {
        trainerClass: 'aroma-lady',
        name: 'Taylor',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 7,
                        nature: Nature.Jolly,
                        moves: ['absorb', 'growth', 'water-sport'],
                        ivs: 0,
                    },
                    {
                        slug: 'cherubi',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 7,
                        nature: Nature.Modest,
                        moves: ['tackle', 'growth'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-michael': {
        trainerClass: 'youngster',
        name: 'Michael',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Adamant,
                        moves: ['tackle', 'growl'],
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Brave,
                        moves: ['leech-life', 'supersonic'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-madeline': {
        trainerClass: 'lass',
        name: 'Madeline',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 5,
                        nature: Nature.Quirky,
                        moves: ['tackle', 'growl', 'quick-attack'],
                        ivs: 0,
                    },
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 5,
                        nature: Nature.Rash,
                        moves: ['tackle', 'growl'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-kaitlin': {
        trainerClass: 'lass',
        name: 'Kaitlin',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 4,
                        nature: Nature.Rash,
                        moves: ['tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 4,
                        nature: Nature.Mild,
                        moves: ['absorb', 'growth'],
                        ivs: 0,
                    },
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 4,
                        nature: Nature.Quirky,
                        moves: ['tackle', 'growl'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-dallas': {
        trainerClass: 'youngster',
        name: 'Dallas',
        teams: [
            {
                team: [
                    {
                        slug: 'kricketot',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Sassy,
                        moves: ['growl', 'bide'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-sebastian': {
        trainerClass: 'youngster',
        name: 'Sebastian',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Lonely,
                        moves: ['low-kick', 'leer'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-curtis': {
        trainerClass: 'camper',
        name: 'Curtis',
        teams: [
            {
                team: [
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Lax,
                        moves: ['tackle', 'leer'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-diana': {
        trainerClass: 'picnicker',
        name: 'Diana',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 5,
                        nature: Nature.Lonely,
                        moves: ['absorb', 'growth', 'water-sport'],
                        ivs: 0,
                    },
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 5,
                        nature: Nature.Impish,
                        moves: ['scratch', 'tail-whip'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'veteran-grant': {
        trainerClass: 'veteran',
        name: 'Grant',
        teams: [
            {
                team: [
                    {
                        slug: 'riolu',
                        ability: 'steadfast',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Careful,
                        moves: [
                            'force-palm',
                            'quick-attack',
                            'counter',
                            'screech',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Sassy,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                            'growl',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Careful,
                        moves: [
                            'earthquake',
                            'rock-slide',
                            'rock-polish',
                            'defense-curl',
                        ],
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'worker-colin': {
        trainerClass: 'worker',
        name: 'Colin',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Impish,
                        moves: ['tackle', 'defense-curl', 'mud-sport'],
                        ivs: 0,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Quiet,
                        moves: ['rock-throw', 'tackle', 'harden'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'worker-mason': {
        trainerClass: 'worker',
        name: 'Mason',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Lax,
                        moves: ['rock-smash', 'focus-energy'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-jonathon': {
        trainerClass: 'youngster',
        name: 'Jonathon',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Calm,
                        moves: ['tackle', 'defense-curl'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'youngster-darius': {
        trainerClass: 'youngster',
        name: 'Darius',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Impish,
                        moves: ['tackle', 'defense-curl'],
                        ivs: 1,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Docile,
                        moves: ['rock-throw', 'tackle', 'harden'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    // Gym leaders use the badge bitmask via ScrCmd_GiveBadge (opcode
    // 0x015C), not a var/flag -- verified directly from D/P's own script,
    // not assumed from Platinum: Oreburgh Gym's compiled script
    // (scr_seq_release/narc_0050.bin) calls GiveBadge with a literal
    // badge_no argument of 0.
    'leader-roark': {
        trainerClass: 'leader-roark',
        name: 'Roark',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Lax,
                        moves: ['stealth-rock', 'rock-throw'],
                        ivs: 6,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Bold,
                        moves: ['stealth-rock', 'rock-throw', 'screech'],
                        ivs: 6,
                    },
                    {
                        slug: 'cranidos',
                        ability: 'mold-breaker',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Jolly,
                        moves: ['headbutt', 'pursuit', 'leer'],
                        ivs: 6,
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Potion',
            },
        ],
    },
    'galactic-grunt-m-jubilife-city': {
        trainerClass: 'galactic-grunt-m',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Lax,
                        moves: ['leech-life', 'astonish'],
                        ivs: 3,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-m',
            name: '1',
            teams: [
                {
                    team: [
                        {
                            slug: 'wurmple',
                            ability: 'shield-dust',
                            gender: 'male',
                            level: 9,
                            nature: Nature.Jolly,
                            moves: ['tackle', 'string-shot', 'poison-sting'],
                            ivs: 3,
                        },
                    ],
                },
            ],
        },
    },
    'galactic-grunt-m-valley-windworks': {
        trainerClass: 'galactic-grunt-m',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Serious,
                        moves: ['fake-out', 'scratch', 'growl'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    // Floaroma Meadow's two "back to back" Galactic Grunts.
    'galactic-grunt-m-floaroma-meadow': {
        trainerClass: 'galactic-grunt-m',
        name: 'Back-to-Back',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Calm,
                        moves: ['tackle', 'string-shot'],
                        ivs: 3,
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Hasty,
                        moves: ['tackle', 'harden'],
                        ivs: 3,
                    },
                ],
            },
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Timid,
                        moves: ['leech-life', 'astonish'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    // Valley Windworks Interior's Galactic Grunts and Commander Mars.
    'galactic-grunt-m-valley-windworks-interior-1': {
        trainerClass: 'galactic-grunt-m',
        name: '5',
        teams: [
            {
                team: [
                    {
                        slug: 'cascoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Hasty,
                        moves: ['tackle', 'harden', 'poison-sting'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-valley-windworks-interior-2': {
        trainerClass: 'galactic-grunt-m',
        name: '6',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Naive,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 10,
                        nature: Nature.Serious,
                        moves: ['fake-out', 'scratch', 'growl'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'commander-mars-valley-windworks-interior': {
        trainerClass: 'commander-mars',
        name: 'Mars',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Calm,
                        moves: ['bite', 'leech-life', 'toxic'],
                        ivs: 12,
                    },
                    {
                        slug: 'purugly',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Impish,
                        moves: ['feint-attack', 'scratch', 'fake-out'],
                        heldItem: 'oran-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    // Route 205 South.
    'camper-jacob': {
        trainerClass: 'camper',
        name: 'Jacob',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Bashful,
                        moves: ['ember', 'tackle'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-daniel': {
        trainerClass: 'hiker',
        name: 'Daniel',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Impish,
                        moves: [
                            'defense-curl',
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Careful,
                        moves: [
                            'low-kick',
                            'leer',
                            'focus-energy',
                            'karate-chop',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Impish,
                        moves: [
                            'defense-curl',
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Brave,
                        moves: ['tackle', 'growl', 'defense-curl'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aroma-lady-elizabeth': {
        trainerClass: 'aroma-lady',
        name: 'Elizabeth',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Modest,
                        moves: [
                            'growth',
                            'water-sport',
                            'stun-spore',
                            'mega-drain',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-zackary': {
        trainerClass: 'camper',
        name: 'Zackary',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Modest,
                        moves: ['rock-throw', 'tackle'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-siena': {
        trainerClass: 'picnicker',
        name: 'Siena',
        teams: [
            {
                team: [
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Quirky,
                        moves: ['spark', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Naughty,
                        moves: ['spark', 'quick-attack', 'charm'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-nicholas': {
        trainerClass: 'hiker',
        name: 'Nicholas',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Careful,
                        moves: ['bind', 'screech', 'rock-throw', 'rage'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'battle-girl-kelsey': {
        trainerClass: 'battle-girl',
        name: 'Kelsey',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Gentle,
                        moves: [
                            'leer',
                            'focus-energy',
                            'karate-chop',
                            'foresight',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'picnicker-karina': {
        trainerClass: 'picnicker',
        name: 'Karina',
        teams: [
            {
                team: [
                    {
                        slug: 'piplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Calm,
                        moves: ['bubble', 'peck'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    // Route 205 North.
    'fisherman-joseph': {
        trainerClass: 'fisherman',
        name: 'Joseph',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Mild,
                        moves: [
                            'tail-whip',
                            'water-sport',
                            'supersonic',
                            'horn-attack',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-andrew': {
        trainerClass: 'fisherman',
        name: 'Andrew',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Lax,
                        moves: ['splash'],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Lax,
                        moves: ['splash'],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Lax,
                        moves: ['splash'],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Lax,
                        moves: ['splash'],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Lax,
                        moves: ['splash'],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Lax,
                        moves: ['splash'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-zachary': {
        trainerClass: 'fisherman',
        name: 'Zachary',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Docile,
                        moves: ['splash'],
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Mild,
                        moves: [
                            'tail-whip',
                            'water-sport',
                            'supersonic',
                            'horn-attack',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Docile,
                        moves: ['splash'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    // Eterna Forest Interior.
    'bug-catcher-jack': {
        trainerClass: 'bug-catcher',
        name: 'Jack',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Hasty,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 0,
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Quiet,
                        moves: ['harden'],
                        ivs: 0,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Naive,
                        moves: ['absorb', 'gust'],
                        ivs: 0,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'lass',
            name: 'Briana',
            teams: [
                {
                    team: [
                        {
                            slug: 'pachirisu',
                            ability: 'run-away',
                            gender: 'female',
                            level: 14,
                            nature: Nature.Lax,
                            moves: ['bide', 'quick-attack', 'charm', 'spark'],
                            ivs: 0,
                        },
                    ],
                },
            ],
        },
    },
    'psychic-f-lindsey': {
        trainerClass: 'psychic-f',
        name: 'Lindsey',
        teams: [
            {
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Bashful,
                        moves: ['hidden-power'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-elijah': {
        trainerClass: 'psychic-m',
        name: 'Elijah',
        teams: [
            {
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Naive,
                        moves: ['hidden-power'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-catcher-donald': {
        trainerClass: 'bug-catcher',
        name: 'Donald',
        teams: [
            {
                team: [
                    {
                        slug: 'burmy',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Calm,
                        moves: ['protect', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'kricketune',
                        ability: 'swarm',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Naive,
                        moves: ['growl', 'bide', 'fury-cutter'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-catcher-phillip': {
        trainerClass: 'bug-catcher',
        name: 'Phillip',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Quiet,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 0,
                    },
                    {
                        slug: 'cascoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Naive,
                        moves: ['harden'],
                        ivs: 0,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Calm,
                        moves: ['confusion', 'gust'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-kody': {
        trainerClass: 'psychic-m',
        name: 'Kody',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Impish,
                        moves: [
                            'meditate',
                            'confusion',
                            'detect',
                            'hidden-power',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-f-rachael': {
        trainerClass: 'psychic-f',
        name: 'Rachael',
        teams: [
            {
                team: [
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Rash,
                        moves: ['confusion', 'water-gun', 'scratch'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    // Route 211 West.
    'ninja-boy-zach': {
        trainerClass: 'ninja-boy',
        name: 'Zach',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Calm,
                        moves: ['leech-life', 'supersonic', 'astonish', 'bite'],
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Serious,
                        moves: ['leech-life', 'supersonic', 'astonish', 'bite'],
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Naughty,
                        moves: ['leech-life', 'supersonic', 'astonish', 'bite'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-louis': {
        trainerClass: 'hiker',
        name: 'Louis',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Quiet,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Docile,
                        moves: ['bind', 'screech', 'rock-throw', 'rage'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-alexandra': {
        trainerClass: 'bird-keeper',
        name: 'Alexandra',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Brave,
                        moves: ['foresight', 'hypnosis', 'peck', 'reflect'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    // Route 211 East.
    'bird-keeper-katherine': {
        trainerClass: 'bird-keeper',
        name: 'Katherine',
        teams: [
            {
                team: [
                    {
                        slug: 'noctowl',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Gentle,
                        moves: ['peck', 'reflect', 'confusion', 'take-down'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-harry': {
        trainerClass: 'ruin-maniac',
        name: 'Harry',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 30,
                        nature: Nature.Modest,
                        moves: [
                            'confuse-ray',
                            'extrasensory',
                            'iron-defense',
                            'safeguard',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-nick': {
        trainerClass: 'ninja-boy',
        name: 'Nick',
        teams: [
            {
                team: [
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Impish,
                        moves: [
                            'leer',
                            'pin-missile',
                            'acupressure',
                            'knock-off',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Adamant,
                        moves: [
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-sean': {
        trainerClass: 'black-belt',
        name: 'Sean',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Serious,
                        moves: [
                            'pursuit',
                            'feint-attack',
                            'revenge',
                            'swagger',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Calm,
                        moves: [
                            'hidden-power',
                            'mind-reader',
                            'feint',
                            'calm-mind',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Hardy,
                        moves: [
                            'foresight',
                            'seismic-toss',
                            'revenge',
                            'vital-throw',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    // Mt. Coronet's Galactic Grunts.
    'galactic-grunt-f-mt-coronet-1': {
        trainerClass: 'galactic-grunt-f',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Serious,
                        moves: [
                            'whirlwind',
                            'attract',
                            'silver-wind',
                            'giga-drain',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-1': {
        trainerClass: 'galactic-grunt-m',
        name: '7',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 39,
                        nature: Nature.Bold,
                        moves: [
                            'iron-defense',
                            'safeguard',
                            'gyro-ball',
                            'future-sight',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-2': {
        trainerClass: 'galactic-grunt-m',
        name: '8',
        teams: [
            {
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Rash,
                        moves: [
                            'psybeam',
                            'whirlwind',
                            'light-screen',
                            'silver-wind',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Modest,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Rash,
                        moves: [
                            'psybeam',
                            'whirlwind',
                            'light-screen',
                            'silver-wind',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-3': {
        trainerClass: 'galactic-grunt-m',
        name: '9',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Naive,
                        moves: ['toxic', 'slash', 'night-slash', 'memento'],
                        ivs: 3,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Gentle,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-4': {
        trainerClass: 'galactic-grunt-m',
        name: '10',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Lax,
                        moves: [
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                            'poison-fang',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-mt-coronet-2': {
        trainerClass: 'galactic-grunt-f',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Docile,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 3,
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Mild,
                        moves: ['harden'],
                        ivs: 3,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Quiet,
                        moves: [
                            'whirlwind',
                            'attract',
                            'silver-wind',
                            'giga-drain',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-5': {
        trainerClass: 'galactic-grunt-m',
        name: '11',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Serious,
                        moves: [
                            'revenge',
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Bold,
                        moves: ['toxic', 'slash', 'night-slash', 'memento'],
                        ivs: 3,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Modest,
                        moves: [
                            'mud-bomb',
                            'sucker-punch',
                            'nasty-plot',
                            'poison-jab',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-mt-coronet-3': {
        trainerClass: 'galactic-grunt-f',
        name: '3',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 38,
                        nature: Nature.Timid,
                        moves: [
                            'iron-defense',
                            'safeguard',
                            'gyro-ball',
                            'future-sight',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Rash,
                        moves: ['charm', 'assist', 'captivate', 'slash'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-6': {
        trainerClass: 'galactic-grunt-m',
        name: '12',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 37,
                        nature: Nature.Brave,
                        moves: [
                            'iron-defense',
                            'safeguard',
                            'gyro-ball',
                            'future-sight',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Serious,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-mt-coronet-4': {
        trainerClass: 'galactic-grunt-f',
        name: '4',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Bashful,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Rash,
                        moves: ['charm', 'assist', 'captivate', 'slash'],
                        ivs: 3,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 37,
                        nature: Nature.Timid,
                        moves: [
                            'iron-defense',
                            'safeguard',
                            'gyro-ball',
                            'future-sight',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    // Eterna Gym.
    'lass-caroline': {
        trainerClass: 'lass',
        name: 'Caroline',
        teams: [
            {
                team: [
                    {
                        slug: 'cherubi',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Adamant,
                        moves: ['tackle', 'leech-seed'],
                        ivs: 1,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Bashful,
                        moves: ['mega-drain', 'poison-sting', 'stun-spore'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'aroma-lady-jenna': {
        trainerClass: 'aroma-lady',
        name: 'Jenna',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Quirky,
                        moves: ['absorb', 'stun-spore', 'water-sport'],
                        ivs: 1,
                    },
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Quiet,
                        moves: ['absorb', 'stun-spore', 'water-sport'],
                        ivs: 1,
                    },
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Serious,
                        moves: ['absorb', 'stun-spore', 'water-sport'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'aroma-lady-angela': {
        trainerClass: 'aroma-lady',
        name: 'Angela',
        teams: [
            {
                team: [
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Quirky,
                        moves: ['razor-leaf', 'tackle'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'beauty-lindsay': {
        trainerClass: 'beauty',
        name: 'Lindsay',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Brave,
                        moves: ['mega-drain', 'poison-sting', 'stun-spore'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    // Eterna Gym's compiled script (scr_seq_release/narc_0072.bin) calls
    // GiveBadge with a literal badge_no argument of 1, at byte offset 241.
    // (Two other byte-sequences matching the GiveBadge opcode 0x015C appear
    // elsewhere in this bank: one has an out-of-range argument (461, fails
    // GF_ASSERT(badge_no<8), so not a real call), the other reads 0 -- which
    // would collide with Roark's own already-verified badge_no, so it's a
    // coincidental byte alignment too, not a genuine second GiveBadge call.)
    'leader-gardenia': {
        trainerClass: 'leader-gardenia',
        name: 'Gardenia',
        teams: [
            {
                team: [
                    {
                        slug: 'cherubi',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Sassy,
                        moves: [
                            'grass-knot',
                            'leech-seed',
                            'growth',
                            'safeguard',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Gentle,
                        moves: [
                            'grass-knot',
                            'razor-leaf',
                            'withdraw',
                            'reflect',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Naive,
                        moves: [
                            'grass-knot',
                            'magical-leaf',
                            'poison-sting',
                            'stun-spore',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    // Team Galactic Eterna Building.
    'galactic-grunt-f-team-galactic-eterna-building-1': {
        trainerClass: 'galactic-grunt-f',
        name: '5',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Careful,
                        moves: ['leech-life', 'supersonic', 'astonish', 'bite'],
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Rash,
                        moves: ['fake-out', 'scratch', 'growl', 'hypnosis'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-team-galactic-eterna-building-1': {
        trainerClass: 'galactic-grunt-m',
        name: '13',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Mild,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 3,
                    },
                    {
                        slug: 'cascoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Jolly,
                        moves: ['tackle', 'harden', 'poison-sting'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-team-galactic-eterna-building-2': {
        trainerClass: 'galactic-grunt-m',
        name: '14',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Jolly,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 3,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Lax,
                        moves: ['leech-life', 'astonish'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-team-galactic-eterna-building-2': {
        trainerClass: 'galactic-grunt-f',
        name: '6',
        teams: [
            {
                team: [
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Relaxed,
                        moves: ['tackle', 'harden', 'poison-sting'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-team-galactic-eterna-building-3': {
        trainerClass: 'galactic-grunt-f',
        name: '7',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Docile,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 3,
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Lonely,
                        moves: ['tackle', 'harden', 'poison-sting'],
                        ivs: 3,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Careful,
                        moves: ['leech-life', 'astonish'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'scientist-travon': {
        trainerClass: 'scientist',
        name: 'Travon',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Modest,
                        moves: ['confusion', 'kinesis'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'commander-jupiter-team-galactic-eterna-building': {
        trainerClass: 'commander-jupiter',
        name: 'Jupiter',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Serious,
                        moves: ['giga-drain', 'wing-attack', 'bite'],
                        ivs: 12,
                    },
                    {
                        slug: 'skuntank',
                        ability: 'stench',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Mild,
                        moves: [
                            'night-slash',
                            'poison-gas',
                            'screech',
                            'smokescreen',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    // Route 206.
    'cyclist-m-axel': {
        trainerClass: 'cyclist-m',
        name: 'Axel',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Bashful,
                        moves: [
                            'growl',
                            'quick-attack',
                            'wing-attack',
                            'double-team',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cyclist-f-megan': {
        trainerClass: 'cyclist-f',
        name: 'Megan',
        teams: [
            {
                team: [
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Docile,
                        moves: ['leer', 'charge', 'bite', 'spark'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cyclist-m-james': {
        trainerClass: 'cyclist-m',
        name: 'James',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Rash,
                        moves: ['tackle', 'growl', 'tail-whip', 'ember'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cyclist-f-nicole': {
        trainerClass: 'cyclist-f',
        name: 'Nicole',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Bold,
                        moves: [
                            'growl',
                            'quick-attack',
                            'wing-attack',
                            'double-team',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Hardy,
                        moves: ['tackle', 'growl', 'tail-whip'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cyclist-m-john': {
        trainerClass: 'cyclist-m',
        name: 'John',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Adamant,
                        moves: [
                            'growl',
                            'quick-attack',
                            'wing-attack',
                            'double-team',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Bashful,
                        moves: [
                            'growl',
                            'quick-attack',
                            'wing-attack',
                            'double-team',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cyclist-m-ryan': {
        trainerClass: 'cyclist-m',
        name: 'Ryan',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Calm,
                        moves: [
                            'supersonic',
                            'astonish',
                            'bite',
                            'wing-attack',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cyclist-f-rachel': {
        trainerClass: 'cyclist-f',
        name: 'Rachel',
        teams: [
            {
                team: [
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Quiet,
                        moves: ['tackle', 'leer', 'charge', 'bite'],
                        ivs: 0,
                    },
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Quiet,
                        moves: ['tackle', 'leer', 'charge', 'bite'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cyclist-f-kayla': {
        trainerClass: 'cyclist-f',
        name: 'Kayla',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Brave,
                        moves: [
                            'growl',
                            'tail-whip',
                            'thunder-wave',
                            'quick-attack',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-theodore': {
        trainerClass: 'hiker',
        name: 'Theodore',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Quiet,
                        moves: ['bind', 'screech', 'rock-throw', 'rage'],
                        ivs: 0,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Quiet,
                        moves: ['bind', 'screech', 'rock-throw', 'rage'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    // Wayward Cave 1F.
    'camper-diego': {
        trainerClass: 'camper',
        name: 'Diego',
        teams: [
            {
                team: [
                    {
                        slug: 'cascoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Docile,
                        moves: ['poison-sting', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                        moves: ['poison-sting', 'gust', 'confusion'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-tori': {
        trainerClass: 'picnicker',
        name: 'Tori',
        teams: [
            {
                team: [
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Timid,
                        moves: ['poison-sting', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Lonely,
                        moves: ['gust', 'poison-sting', 'absorb'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-reginald': {
        trainerClass: 'hiker',
        name: 'Reginald',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Relaxed,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Docile,
                        moves: [
                            'leer',
                            'focus-energy',
                            'karate-chop',
                            'foresight',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-lorenzo': {
        trainerClass: 'hiker',
        name: 'Lorenzo',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Mild,
                        moves: ['screech', 'rock-throw', 'rage', 'rock-tomb'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-cassidy': {
        trainerClass: 'lass',
        name: 'Cassidy',
        teams: [
            {
                team: [
                    {
                        slug: 'buneary',
                        ability: 'run-away',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Sassy,
                        moves: [
                            'foresight',
                            'endure',
                            'frustration',
                            'quick-attack',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-wayne': {
        trainerClass: 'youngster',
        name: 'Wayne',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Timid,
                        moves: ['tackle', 'growl', 'defense-curl', 'rollout'],
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Quirky,
                        moves: ['leech-life', 'supersonic', 'astonish', 'bite'],
                        ivs: 0,
                    },
                    {
                        slug: 'aipom',
                        ability: 'run-away',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Gentle,
                        moves: [
                            'sand-attack',
                            'astonish',
                            'baton-pass',
                            'tickle',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-ana': {
        trainerClass: 'picnicker',
        name: 'Ana',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Lonely,
                        moves: ['confusion', 'bide'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-parker': {
        trainerClass: 'camper',
        name: 'Parker',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Hasty,
                        moves: ['water-gun', 'swift', 'quick-attack'],
                        ivs: 0,
                    },
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Brave,
                        moves: ['spark', 'bite'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-terry': {
        trainerClass: 'collector',
        name: 'Terry',
        teams: [
            {
                team: [
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Serious,
                        moves: ['lick', 'spite', 'mean-look', 'curse'],
                        ivs: 0,
                    },
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Hasty,
                        moves: ['lick', 'spite', 'mean-look', 'curse'],
                        ivs: 0,
                    },
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Naive,
                        moves: ['spite', 'mean-look', 'curse', 'night-shade'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-gerald': {
        trainerClass: 'ruin-maniac',
        name: 'Gerald',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Gentle,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 17,
                        nature: Nature.Quirky,
                        moves: [
                            'confusion',
                            'hypnosis',
                            'imprison',
                            'confuse-ray',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    // Barry's Route 203 "story-scripted" battle -- does NOT use the
    // trainerFlag formula above. Its defeat state lives in a save var
    // instead, mechanically derived by disassembling Route 203's compiled
    // script (pokediamond's files/fielddata/script/scr_seq_release/
    // narc_0394.bin) against pokediamond's ScrCmd opcode table
    // (arm9/src/scrcmd*.c). The script's only SetVar call sets raw var ID
    // 0x4088 to 1 once the battle is won; per
    // include/constants/vars.h (`VAR_BASE 0x4000`), the save-array var
    // index is 0x4088 - 0x4000 = 136. (Platinum's equivalent battle uses
    // var 134/minValue 2 -- close but different, confirming these are
    // independently-numbered per game, not a shared constant.)
    'pkmn-trainer-barry-route-203': {
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Naughty,
                        moves: ['quick-attack', 'growl'],
                        ivs: 3,
                    },
                    {
                        slug: 'chimchar',
                        ability: 'blaze',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Docile,
                        moves: ['scratch', 'leer'],
                        ivs: 3,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Naive,
                        moves: ['quick-attack', 'growl'],
                        ivs: 3,
                    },
                    {
                        slug: 'piplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Naughty,
                        moves: ['pound', 'growl'],
                        ivs: 3,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Timid,
                        moves: ['quick-attack', 'growl'],
                        ivs: 3,
                    },
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Brave,
                        moves: ['tackle', 'withdraw'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    // Barry 2 (Hearthome City). Same var-based mechanism as Barry 1, derived
    // the same way (see comment above) -- disassembled
    // scr_seq_release/narc_0090.bin (MAP_HEARTHOME's scripts_bank), found
    // the win-branch SetVar of raw var 0x407b to 2, converted via
    // VAR_BASE=0x4000 -> save-array index 123.
    'pkmn-trainer-barry-hearthome-city': {
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Impish,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Naive,
                        moves: [
                            'water-gun',
                            'quick-attack',
                            'pursuit',
                            'growl',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Lax,
                        moves: [
                            'mega-drain',
                            'poison-sting',
                            'leech-seed',
                            'stun-spore',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Naughty,
                        moves: [
                            'flame-wheel',
                            'mach-punch',
                            'fury-swipes',
                            'leer',
                        ],
                        ivs: 6,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Brave,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Hardy,
                        moves: [
                            'mega-drain',
                            'poison-sting',
                            'leech-seed',
                            'stun-spore',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Timid,
                        moves: ['ember', 'tackle', 'tail-whip', 'growl'],
                        ivs: 6,
                    },
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Brave,
                        moves: ['bubble', 'peck', 'metal-claw', 'growl'],
                        ivs: 6,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Naive,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Calm,
                        moves: [
                            'water-gun',
                            'quick-attack',
                            'pursuit',
                            'growl',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Hardy,
                        moves: ['ember', 'tackle', 'tail-whip', 'growl'],
                        ivs: 6,
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Docile,
                        moves: ['razor-leaf', 'tackle', 'absorb', 'withdraw'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    // Barry 3 (Pastoria City). This one uses a save FLAG, not a var --
    // confirmed by tracing the win branch all the way to its convergence
    // point in scr_seq_release/narc_0118.bin (MAP_PASTORIA's scripts_bank),
    // which calls SetFlag(259). (The nearby SetFlag(455) belongs to the
    // *loss*/blackout branch -- don't reuse it.)
    'pkmn-trainer-barry-pastoria-city': {
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Serious,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        ivs: 9,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quirky,
                        moves: ['aqua-jet', 'quick-attack', 'pursuit', 'growl'],
                        ivs: 9,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        moves: [
                            'mega-drain',
                            'poison-sting',
                            'leech-seed',
                            'magical-leaf',
                        ],
                        ivs: 9,
                    },
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Impish,
                        moves: [
                            'flame-wheel',
                            'mach-punch',
                            'fury-swipes',
                            'leer',
                        ],
                        ivs: 9,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Docile,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        ivs: 9,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Rash,
                        moves: [
                            'mega-drain',
                            'poison-sting',
                            'leech-seed',
                            'magical-leaf',
                        ],
                        ivs: 9,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Naughty,
                        moves: ['ember', 'stomp', 'tail-whip', 'growl'],
                        ivs: 9,
                    },
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Docile,
                        moves: ['bubble-beam', 'peck', 'metal-claw', 'growl'],
                        ivs: 9,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Serious,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        ivs: 9,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Naive,
                        moves: ['aqua-jet', 'quick-attack', 'pursuit', 'growl'],
                        ivs: 9,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Timid,
                        moves: ['ember', 'stomp', 'tail-whip', 'growl'],
                        ivs: 9,
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Naughty,
                        moves: ['razor-leaf', 'bite', 'mega-drain', 'withdraw'],
                        ivs: 9,
                    },
                ],
            },
        ],
    },
    // Barry 4 (Canalave City). Disassembled
    // scr_seq_release/narc_0034.bin (MAP_CANALAVE's scripts_bank), win
    // branch sets raw var 0x4078 to 1 -> save-array index 120.
    'pkmn-trainer-barry-canalave-city': {
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Lonely,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                            'double-team',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Mild,
                        moves: ['aqua-jet', 'pursuit', 'quick-attack', 'swift'],
                        ivs: 12,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Adamant,
                        moves: [
                            'brick-break',
                            'aerial-ace',
                            'night-slash',
                            'horn-attack',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Impish,
                        moves: [
                            'giga-drain',
                            'toxic-spikes',
                            'leech-seed',
                            'grass-whistle',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Mild,
                        moves: [
                            'brick-break',
                            'flame-wheel',
                            'mach-punch',
                            'aerial-ace',
                        ],
                        ivs: 12,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Calm,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                            'double-team',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Brave,
                        moves: [
                            'giga-drain',
                            'toxic-spikes',
                            'leech-seed',
                            'grass-whistle',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Rash,
                        moves: [
                            'brick-break',
                            'aerial-ace',
                            'night-slash',
                            'horn-attack',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Serious,
                        moves: ['fire-spin', 'take-down', 'stomp', 'tail-whip'],
                        ivs: 12,
                    },
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Calm,
                        moves: [
                            'bubble-beam',
                            'aerial-ace',
                            'metal-claw',
                            'fury-attack',
                        ],
                        ivs: 12,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Mild,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                            'double-team',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Sassy,
                        moves: ['aqua-jet', 'pursuit', 'quick-attack', 'swift'],
                        ivs: 12,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Lax,
                        moves: [
                            'brick-break',
                            'aerial-ace',
                            'night-slash',
                            'horn-attack',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Brave,
                        moves: ['fire-spin', 'take-down', 'stomp', 'tail-whip'],
                        ivs: 12,
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Bashful,
                        moves: [
                            'razor-leaf',
                            'bite',
                            'mega-drain',
                            'leech-seed',
                        ],
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    // Barry 5 (Pokemon League Lobby). Disassembled
    // scr_seq_release/narc_0180.bin (MAP_POKEMON_LEAGUE_LOBBY_1F's
    // scripts_bank), win branch sets raw var 0x40ef to 1 -> save-array
    // index 239.
    'pkmn-trainer-barry-pokemon-league-lobby': {
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Careful,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'steel-wing',
                            'u-turn',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Jolly,
                        moves: [
                            'aqua-jet',
                            'crunch',
                            'ice-fang',
                            'brick-break',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 50,
                        nature: Nature.Timid,
                        moves: [
                            'close-combat',
                            'rock-slide',
                            'night-slash',
                            'aerial-ace',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Jolly,
                        moves: [
                            'poison-jab',
                            'giga-drain',
                            'shadow-ball',
                            'grass-whistle',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'snorlax',
                        ability: 'immunity',
                        gender: 'male',
                        level: 51,
                        nature: Nature.Careful,
                        moves: ['body-slam', 'crunch', 'earthquake', 'rest'],
                        ivs: 24,
                    },
                    {
                        slug: 'infernape',
                        ability: 'blaze',
                        gender: 'male',
                        level: 53,
                        nature: Nature.Relaxed,
                        moves: [
                            'flamethrower',
                            'focus-blast',
                            'shadow-claw',
                            'aerial-ace',
                        ],
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Quiet,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'steel-wing',
                            'u-turn',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Careful,
                        moves: [
                            'poison-jab',
                            'giga-drain',
                            'shadow-ball',
                            'grass-whistle',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 50,
                        nature: Nature.Naughty,
                        moves: [
                            'close-combat',
                            'rock-slide',
                            'night-slash',
                            'aerial-ace',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Lax,
                        moves: [
                            'fire-blast',
                            'sunny-day',
                            'bounce',
                            'will-o-wisp',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'snorlax',
                        ability: 'immunity',
                        gender: 'male',
                        level: 51,
                        nature: Nature.Quiet,
                        moves: ['body-slam', 'crunch', 'earthquake', 'rest'],
                        ivs: 24,
                    },
                    {
                        slug: 'empoleon',
                        ability: 'torrent',
                        gender: 'male',
                        level: 53,
                        nature: Nature.Hasty,
                        moves: [
                            'brine',
                            'aerial-ace',
                            'metal-claw',
                            'shadow-claw',
                        ],
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Relaxed,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'steel-wing',
                            'u-turn',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Rash,
                        moves: [
                            'aqua-jet',
                            'crunch',
                            'ice-fang',
                            'brick-break',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 50,
                        nature: Nature.Timid,
                        moves: [
                            'close-combat',
                            'rock-slide',
                            'night-slash',
                            'aerial-ace',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Modest,
                        moves: [
                            'fire-blast',
                            'sunny-day',
                            'bounce',
                            'will-o-wisp',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'snorlax',
                        ability: 'immunity',
                        gender: 'male',
                        level: 51,
                        nature: Nature.Careful,
                        moves: ['body-slam', 'crunch', 'earthquake', 'rest'],
                        ivs: 24,
                    },
                    {
                        slug: 'torterra',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 53,
                        nature: Nature.Lax,
                        moves: [
                            'leaf-storm',
                            'earthquake',
                            'crunch',
                            'synthesis',
                        ],
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'twins-liv-and-liz': {
        trainerClass: 'twins',
        name: 'Liv & Liz',
        teams: [
            {
                team: [
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 9,
                        nature: Nature.Sassy,
                        moves: ['growl', 'bide', 'quick-attack', 'charm'],
                        ivs: 0,
                    },
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 9,
                        nature: Nature.Sassy,
                        moves: ['growl', 'bide', 'quick-attack', 'charm'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-austin': {
        trainerClass: 'youngster',
        name: 'Austin',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Rash,
                        moves: [
                            'growl',
                            'quick-attack',
                            'wing-attack',
                            'double-team',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Bashful,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'chimchar',
                        ability: 'blaze',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Gentle,
                        moves: ['ember', 'taunt', 'fury-swipes', 'flame-wheel'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-anthony': {
        trainerClass: 'camper',
        name: 'Anthony',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bold,
                        moves: ['ember', 'tackle', 'growl'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-lauren': {
        trainerClass: 'picnicker',
        name: 'Lauren',
        teams: [
            {
                team: [
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Adamant,
                        moves: ['spark', 'quick-attack', 'charm'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-kevin': {
        trainerClass: 'hiker',
        name: 'Kevin',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Adamant,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Bashful,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                        moves: [
                            'supersonic',
                            'astonish',
                            'bite',
                            'wing-attack',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Bashful,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-justin': {
        trainerClass: 'hiker',
        name: 'Justin',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Impish,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 18,
                        nature: Nature.Relaxed,
                        moves: [
                            'confusion',
                            'hypnosis',
                            'imprison',
                            'confuse-ray',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'battle-girl-helen': {
        trainerClass: 'battle-girl',
        name: 'Helen',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Sassy,
                        moves: [
                            'confusion',
                            'detect',
                            'hidden-power',
                            'mind-reader',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Brave,
                        moves: [
                            'leer',
                            'focus-energy',
                            'karate-chop',
                            'foresight',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'hiker-robert': {
        trainerClass: 'hiker',
        name: 'Robert',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Serious,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Serious,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-kyle': {
        trainerClass: 'black-belt',
        name: 'Kyle',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Lax,
                        moves: [
                            'focus-energy',
                            'karate-chop',
                            'foresight',
                            'seismic-toss',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'hiker-jonathan': {
        trainerClass: 'hiker',
        name: 'Jonathan',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Impish,
                        moves: ['screech', 'rock-throw', 'rage', 'rock-tomb'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aroma-lady-hannah': {
        trainerClass: 'aroma-lady',
        name: 'Hannah',
        teams: [
            {
                team: [
                    {
                        slug: 'combee',
                        ability: 'honey-gather',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Bashful,
                        moves: ['sweet-scent', 'gust'],
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Mild,
                        moves: [
                            'poison-sting',
                            'stun-spore',
                            'mega-drain',
                            'leech-seed',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'artist-william': {
        trainerClass: 'artist',
        name: 'William',
        teams: [
            {
                team: [
                    {
                        slug: 'mime-jr',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Careful,
                        moves: ['copycat', 'meditate', 'encore', 'double-slap'],
                        ivs: 0,
                    },
                    {
                        slug: 'bonsly',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Calm,
                        moves: ['flail', 'low-kick', 'rock-throw', 'mimic'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-cody': {
        trainerClass: 'fisherman',
        name: 'Cody',
        teams: [
            {
                team: [
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Lonely,
                        moves: ['water-pulse', 'magnitude', 'rest', 'snore'],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Quiet,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-alexander': {
        trainerClass: 'hiker',
        name: 'Alexander',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Impish,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Impish,
                        moves: [
                            'self-destruct',
                            'rollout',
                            'rock-blast',
                            'earthquake',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Careful,
                        moves: [
                            'sandstorm',
                            'slam',
                            'rock-polish',
                            'dragon-breath',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-m-albert': {
        trainerClass: 'pkmn-breeder-m',
        name: 'Albert',
        teams: [
            {
                team: [
                    {
                        slug: 'bonsly',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Adamant,
                        moves: ['copycat', 'flail', 'low-kick', 'rock-throw'],
                        ivs: 0,
                    },
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Docile,
                        moves: [
                            'growth',
                            'water-sport',
                            'stun-spore',
                            'mega-drain',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'pichu',
                        ability: 'static',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Serious,
                        moves: [
                            'charm',
                            'tail-whip',
                            'thunder-wave',
                            'sweet-kiss',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'jogger-richard': {
        trainerClass: 'jogger',
        name: 'Richard',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Impish,
                        moves: ['leer', 'charge', 'bite', 'spark'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'twins-emma-and-lil': {
        trainerClass: 'twins',
        name: 'Emma & Lil',
        teams: [
            {
                team: [
                    {
                        slug: 'bonsly',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Modest,
                        moves: ['flail', 'low-kick', 'rock-throw', 'mimic'],
                        ivs: 0,
                    },
                    {
                        slug: 'mime-jr',
                        ability: 'soundproof',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Impish,
                        moves: ['meditate', 'encore', 'double-slap', 'mimic'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'poke-kid-danielle': {
        trainerClass: 'poke-kid',
        name: 'Danielle',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Careful,
                        moves: [
                            'tail-whip',
                            'thunder-wave',
                            'quick-attack',
                            'double-team',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'jogger-raul': {
        trainerClass: 'jogger',
        name: 'Raul',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Quiet,
                        moves: [
                            'quick-attack',
                            'wing-attack',
                            'double-team',
                            'endeavor',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-f-jennifer': {
        trainerClass: 'pkmn-breeder-f',
        name: 'Jennifer',
        teams: [
            {
                team: [
                    {
                        slug: 'mime-jr',
                        ability: 'soundproof',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Quiet,
                        moves: ['copycat', 'meditate', 'encore', 'double-slap'],
                        ivs: 0,
                    },
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Modest,
                        moves: [
                            'growth',
                            'water-sport',
                            'stun-spore',
                            'mega-drain',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'cleffa',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Timid,
                        moves: [
                            'sing',
                            'sweet-kiss',
                            'copycat',
                            'magical-leaf',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cowgirl-shelley': {
        trainerClass: 'cowgirl',
        name: 'Shelley',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Sassy,
                        moves: ['tackle', 'growl', 'defense-curl', 'rollout'],
                        ivs: 0,
                    },
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Rash,
                        moves: ['tackle', 'growl', 'defense-curl', 'rollout'],
                        ivs: 0,
                    },
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Rash,
                        moves: ['tackle', 'growl', 'defense-curl', 'rollout'],
                        ivs: 0,
                    },
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Rash,
                        moves: ['tackle', 'growl', 'defense-curl', 'rollout'],
                        ivs: 0,
                    },
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Rash,
                        moves: ['tackle', 'growl', 'defense-curl', 'rollout'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'young-couple-ty-and-sue': {
        trainerClass: 'young-couple',
        name: 'Ty & Sue',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Quiet,
                        moves: [
                            'focus-energy',
                            'karate-chop',
                            'foresight',
                            'seismic-toss',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Timid,
                        moves: [
                            'confusion',
                            'detect',
                            'hidden-power',
                            'mind-reader',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-oliver': {
        trainerClass: 'youngster',
        name: 'Oliver',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Sassy,
                        moves: [
                            'poison-gas',
                            'screech',
                            'fury-swipes',
                            'smokescreen',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'kricketune',
                        ability: 'swarm',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Hardy,
                        moves: ['growl', 'bide', 'fury-cutter', 'leech-life'],
                        ivs: 0,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Brave,
                        moves: [
                            'harden',
                            'water-pulse',
                            'mud-bomb',
                            'hidden-power',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'roughneck-kirby': {
        trainerClass: 'roughneck',
        name: 'Kirby',
        teams: [
            {
                team: [
                    {
                        slug: 'cleffa',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Lax,
                        moves: [
                            'sing',
                            'sweet-kiss',
                            'copycat',
                            'magical-leaf',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pokefan-m-leonard': {
        trainerClass: 'pokefan-m',
        name: 'Leonard',
        teams: [
            {
                team: [
                    {
                        slug: 'pichu',
                        ability: 'static',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Hardy,
                        moves: [
                            'charm',
                            'tail-whip',
                            'thunder-wave',
                            'sweet-kiss',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'pichu',
                        ability: 'static',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Hardy,
                        moves: [
                            'charm',
                            'tail-whip',
                            'thunder-wave',
                            'sweet-kiss',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Impish,
                        moves: [
                            'tail-whip',
                            'thunder-wave',
                            'quick-attack',
                            'double-team',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pokefan-f-rebekah': {
        trainerClass: 'pokefan-f',
        name: 'Rebekah',
        teams: [
            {
                team: [
                    {
                        slug: 'bonsly',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Hasty,
                        moves: ['flail', 'low-kick', 'rock-throw', 'mimic'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'belle-and-pa-beth-and-bob': {
        trainerClass: 'belle-and-pa',
        name: 'Beth & Bob',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Hardy,
                        moves: ['growl', 'tail-whip', 'ember', 'stomp'],
                        ivs: 0,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Careful,
                        moves: [
                            'quick-attack',
                            'water-gun',
                            'pursuit',
                            'swift',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'young-couple-mike-and-nat': {
        trainerClass: 'young-couple',
        name: 'Mike & Nat',
        teams: [
            {
                team: [
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bashful,
                        moves: ['astonish', 'pursuit', 'haze', 'wing-attack'],
                        ivs: 0,
                    },
                    {
                        slug: 'misdreavus',
                        ability: 'levitate',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Lax,
                        moves: [
                            'spite',
                            'astonish',
                            'confuse-ray',
                            'mean-look',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-karl': {
        trainerClass: 'ruin-maniac',
        name: 'Karl',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Naughty,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Jolly,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 18,
                        nature: Nature.Relaxed,
                        moves: [
                            'confusion',
                            'hypnosis',
                            'imprison',
                            'confuse-ray',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'rancher-marco': {
        trainerClass: 'rancher',
        name: 'Marco',
        teams: [
            {
                team: [
                    {
                        slug: 'aipom',
                        ability: 'run-away',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quirky,
                        moves: [
                            'astonish',
                            'baton-pass',
                            'tickle',
                            'fury-swipes',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Naughty,
                        moves: [
                            'tail-whip',
                            'water-gun',
                            'disable',
                            'confusion',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'girafarig',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Docile,
                        moves: ['confusion', 'odor-sleuth', 'stomp', 'agility'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'jogger-wyatt': {
        trainerClass: 'jogger',
        name: 'Wyatt',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Modest,
                        moves: ['growl', 'tail-whip', 'ember', 'stomp'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'belle-and-pa-ava-and-matt': {
        trainerClass: 'belle-and-pa',
        name: 'Ava & Matt',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Relaxed,
                        moves: [
                            'screech',
                            'fury-swipes',
                            'smokescreen',
                            'toxic',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Jolly,
                        moves: [
                            'growl',
                            'hypnosis',
                            'feint-attack',
                            'fury-swipes',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'twins-teri-and-tia': {
        trainerClass: 'twins',
        name: 'Teri & Tia',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Quiet,
                        moves: [
                            'thunder-wave',
                            'quick-attack',
                            'double-team',
                            'slam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Careful,
                        moves: [
                            'double-slap',
                            'defense-curl',
                            'follow-me',
                            'minimize',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-m-kahlil': {
        trainerClass: 'pkmn-breeder-m',
        name: 'Kahlil',
        teams: [
            {
                team: [
                    {
                        slug: 'pichu',
                        ability: 'static',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Timid,
                        moves: [
                            'tail-whip',
                            'thunder-wave',
                            'sweet-kiss',
                            'nasty-plot',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Rash,
                        moves: [
                            'tail-whip',
                            'thunder-wave',
                            'quick-attack',
                            'double-team',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'happiny',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Careful,
                        moves: ['charm', 'copycat', 'refresh', 'sweet-kiss'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-f-amber': {
        trainerClass: 'pkmn-breeder-f',
        name: 'Amber',
        teams: [
            {
                team: [
                    {
                        slug: 'cleffa',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Docile,
                        moves: [
                            'sing',
                            'sweet-kiss',
                            'copycat',
                            'magical-leaf',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Naughty,
                        moves: [
                            'sing',
                            'double-slap',
                            'defense-curl',
                            'follow-me',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'happiny',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Adamant,
                        moves: ['charm', 'copycat', 'refresh', 'sweet-kiss'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-fabian': {
        trainerClass: 'ninja-boy',
        name: 'Fabian',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Quirky,
                        moves: [
                            'rock-throw',
                            'magnitude',
                            'self-destruct',
                            'rollout',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Quirky,
                        moves: [
                            'rock-throw',
                            'magnitude',
                            'self-destruct',
                            'rollout',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Mild,
                        moves: [
                            'magnitude',
                            'self-destruct',
                            'rollout',
                            'rock-blast',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-brennan': {
        trainerClass: 'ninja-boy',
        name: 'Brennan',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Relaxed,
                        moves: [
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Careful,
                        moves: [
                            'leer',
                            'pin-missile',
                            'acupressure',
                            'knock-off',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-bruce': {
        trainerClass: 'ninja-boy',
        name: 'Bruce',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Sassy,
                        moves: ['fury-swipes', 'smokescreen', 'toxic', 'slash'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-joel': {
        trainerClass: 'ninja-boy',
        name: 'Joel',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Naughty,
                        moves: [
                            'astonish',
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Timid,
                        moves: [
                            'leer',
                            'pin-missile',
                            'acupressure',
                            'knock-off',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Naughty,
                        moves: [
                            'astonish',
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Brave,
                        moves: [
                            'astonish',
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-alyssa': {
        trainerClass: 'ace-trainer-f',
        name: 'Alyssa',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Mild,
                        moves: ['fire-spin', 'stomp', 'growl'],
                        ivs: 6,
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Serious,
                        moves: ['mega-drain', 'bite', 'curse'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'double-team-zac-and-jen': {
        trainerClass: 'double-team',
        name: 'Zac & Jen',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Calm,
                        moves: ['thrash', 'bite', 'dragon-rage', 'leer'],
                        ivs: 6,
                    },
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Naughty,
                        moves: [
                            'thunder-shock',
                            'tail-whip',
                            'quick-attack',
                            'thunderbolt',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-ernest': {
        trainerClass: 'ace-trainer-m',
        name: 'Ernest',
        teams: [
            {
                team: [
                    {
                        slug: 'mothim',
                        ability: 'swarm',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quiet,
                        moves: ['confusion', 'silver-wind', 'poison-powder'],
                        ivs: 6,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Serious,
                        moves: ['slam', 'rock-throw', 'screech', 'sandstorm'],
                        ivs: 6,
                    },
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Sassy,
                        moves: ['spark', 'bite', 'leer'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ninja-boy-davido': {
        trainerClass: 'ninja-boy',
        name: 'Davido',
        teams: [
            {
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Lonely,
                        moves: ['protect', 'moonlight', 'psybeam', 'whirlwind'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-adam': {
        trainerClass: 'black-belt',
        name: 'Adam',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Adamant,
                        moves: [
                            'foresight',
                            'seismic-toss',
                            'revenge',
                            'vital-throw',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'ninja-boy-nathan': {
        trainerClass: 'ninja-boy',
        name: 'Nathan',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Impish,
                        moves: [
                            'pursuit',
                            'feint-attack',
                            'revenge',
                            'swagger',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Rash,
                        moves: [
                            'astonish',
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-brianna': {
        trainerClass: 'bird-keeper',
        name: 'Brianna',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Brave,
                        moves: ['peck', 'reflect', 'confusion', 'take-down'],
                        ivs: 6,
                    },
                    {
                        slug: 'noctowl',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Gentle,
                        moves: ['peck', 'reflect', 'confusion', 'take-down'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'veteran-brian': {
        trainerClass: 'veteran',
        name: 'Brian',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Calm,
                        moves: [
                            'aqua-jet',
                            'sonic-boom',
                            'pursuit',
                            'quick-attack',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'girafarig',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Calm,
                        moves: ['psybeam', 'stomp', 'agility', 'baton-pass'],
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Docile,
                        moves: ['karate-chop', 'low-kick', 'leer'],
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'dragon-tamer-patrick': {
        trainerClass: 'dragon-tamer',
        name: 'Patrick',
        teams: [
            {
                team: [
                    {
                        slug: 'gible',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Impish,
                        moves: ['slash', 'dragon-claw', 'dig', 'dragon-rush'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'waitress-kati': {
        trainerClass: 'waitress',
        name: 'Kati',
        teams: [
            {
                team: [
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Impish,
                        moves: [
                            'defense-curl',
                            'follow-me',
                            'minimize',
                            'wake-up-slap',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-fernando': {
        trainerClass: 'collector',
        name: 'Fernando',
        teams: [
            {
                team: [
                    {
                        slug: 'mr-mime',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Timid,
                        moves: ['copycat', 'meditate', 'encore', 'double-slap'],
                        ivs: 0,
                    },
                    {
                        slug: 'mr-mime',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Calm,
                        moves: ['meditate', 'encore', 'double-slap', 'mimic'],
                        ivs: 0,
                    },
                    {
                        slug: 'mr-mime',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Calm,
                        moves: ['meditate', 'encore', 'double-slap', 'mimic'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-edwin': {
        trainerClass: 'collector',
        name: 'Edwin',
        teams: [
            {
                team: [
                    {
                        slug: 'sudowoodo',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bashful,
                        moves: ['flail', 'low-kick', 'rock-throw', 'mimic'],
                        ivs: 0,
                    },
                    {
                        slug: 'sudowoodo',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bashful,
                        moves: ['flail', 'low-kick', 'rock-throw', 'mimic'],
                        ivs: 0,
                    },
                    {
                        slug: 'sudowoodo',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bashful,
                        moves: ['flail', 'low-kick', 'rock-throw', 'mimic'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-calvin': {
        trainerClass: 'ruin-maniac',
        name: 'Calvin',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 21,
                        nature: Nature.Naughty,
                        moves: [
                            'hypnosis',
                            'imprison',
                            'confuse-ray',
                            'extrasensory',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'shieldon',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Careful,
                        moves: [
                            'taunt',
                            'metal-sound',
                            'take-down',
                            'iron-defense',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'jogger-craig': {
        trainerClass: 'jogger',
        name: 'Craig',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Calm,
                        moves: ['leer', 'charge', 'bite', 'spark'],
                        ivs: 0,
                    },
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Quiet,
                        moves: [
                            'quick-attack',
                            'wing-attack',
                            'double-team',
                            'endeavor',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Modest,
                        moves: ['growl', 'tail-whip', 'ember', 'stomp'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-gregory': {
        trainerClass: 'black-belt',
        name: 'Gregory',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Relaxed,
                        moves: [
                            'detect',
                            'hidden-power',
                            'mind-reader',
                            'feint',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Bashful,
                        moves: [
                            'karate-chop',
                            'foresight',
                            'seismic-toss',
                            'revenge',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Impish,
                        moves: [
                            'confusion',
                            'detect',
                            'hidden-power',
                            'mind-reader',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'black-belt-derek': {
        trainerClass: 'black-belt',
        name: 'Derek',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Naive,
                        moves: [
                            'pursuit',
                            'feint-attack',
                            'revenge',
                            'swagger',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'black-belt-nathaniel': {
        trainerClass: 'black-belt',
        name: 'Nathaniel',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Naive,
                        moves: [
                            'poison-sting',
                            'taunt',
                            'pursuit',
                            'feint-attack',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Serious,
                        moves: [
                            'detect',
                            'hidden-power',
                            'mind-reader',
                            'feint',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Careful,
                        moves: [
                            'karate-chop',
                            'foresight',
                            'seismic-toss',
                            'revenge',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'jogger-scott': {
        trainerClass: 'jogger',
        name: 'Scott',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Jolly,
                        moves: [
                            'wing-attack',
                            'double-team',
                            'endeavor',
                            'whirlwind',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-maya': {
        trainerClass: 'ace-trainer-f',
        name: 'Maya',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Quiet,
                        moves: [
                            'fury-swipes',
                            'feint-attack',
                            'hypnosis',
                            'growl',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Mild,
                        moves: ['confusion', 'disable', 'miracle-eye'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-dennis': {
        trainerClass: 'ace-trainer-m',
        name: 'Dennis',
        teams: [
            {
                team: [
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Lonely,
                        moves: [
                            'flame-wheel',
                            'mach-punch',
                            'taunt',
                            'torment',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Serious,
                        moves: ['bite', 'thrash'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'psychic-f-abigail': {
        trainerClass: 'psychic-f',
        name: 'Abigail',
        teams: [
            {
                team: [
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Mild,
                        moves: [
                            'curse',
                            'night-shade',
                            'confuse-ray',
                            'sucker-punch',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'misdreavus',
                        ability: 'levitate',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Docile,
                        moves: [
                            'astonish',
                            'confuse-ray',
                            'mean-look',
                            'psybeam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Calm,
                        moves: [
                            'confusion',
                            'disable',
                            'miracle-eye',
                            'psybeam',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pi-carlos': {
        trainerClass: 'pi',
        name: 'Carlos',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Jolly,
                        moves: ['horn-drill', 'flail'],
                        ivs: 1,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Docile,
                        moves: ['horn-drill', 'flail'],
                        ivs: 3,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Modest,
                        moves: ['horn-drill', 'flail'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'collector-brady': {
        trainerClass: 'collector',
        name: 'Brady',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Quiet,
                        moves: ['growl', 'tail-whip', 'ember', 'stomp'],
                        ivs: 0,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Adamant,
                        moves: ['growl', 'tail-whip', 'ember', 'stomp'],
                        ivs: 0,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Serious,
                        moves: ['growl', 'tail-whip', 'ember', 'stomp'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'beauty-devon': {
        trainerClass: 'beauty',
        name: 'Devon',
        teams: [
            {
                team: [
                    {
                        slug: 'wormadam',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Rash,
                        moves: [
                            'tackle',
                            'protect',
                            'hidden-power',
                            'confusion',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-bryan': {
        trainerClass: 'ruin-maniac',
        name: 'Bryan',
        teams: [
            {
                team: [
                    {
                        slug: 'cranidos',
                        ability: 'mold-breaker',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Gentle,
                        moves: [
                            'pursuit',
                            'take-down',
                            'scary-face',
                            'assurance',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Naughty,
                        moves: [
                            'rock-throw',
                            'magnitude',
                            'self-destruct',
                            'rollout',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 23,
                        nature: Nature.Careful,
                        moves: [
                            'hypnosis',
                            'imprison',
                            'confuse-ray',
                            'extrasensory',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-mitchell': {
        trainerClass: 'psychic-m',
        name: 'Mitchell',
        teams: [
            {
                team: [
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Lonely,
                        moves: [
                            'curse',
                            'night-shade',
                            'confuse-ray',
                            'sucker-punch',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Rash,
                        moves: [
                            'kinesis',
                            'confusion',
                            'disable',
                            'miracle-eye',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-jamal': {
        trainerClass: 'collector',
        name: 'Jamal',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Mild,
                        moves: ['water-gun', 'pursuit', 'swift', 'aqua-jet'],
                        ivs: 0,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Mild,
                        moves: ['water-gun', 'pursuit', 'swift', 'aqua-jet'],
                        ivs: 0,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Timid,
                        moves: ['water-gun', 'pursuit', 'swift', 'aqua-jet'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-hunter': {
        trainerClass: 'ruin-maniac',
        name: 'Hunter',
        teams: [
            {
                team: [
                    {
                        slug: 'shieldon',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Timid,
                        moves: [
                            'metal-sound',
                            'take-down',
                            'iron-defense',
                            'swagger',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-douglas': {
        trainerClass: 'collector',
        name: 'Douglas',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Lax,
                        moves: [
                            'stun-spore',
                            'mega-drain',
                            'leech-seed',
                            'magical-leaf',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Careful,
                        moves: [
                            'mega-drain',
                            'leech-seed',
                            'magical-leaf',
                            'grass-whistle',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Serious,
                        moves: [
                            'mega-drain',
                            'leech-seed',
                            'magical-leaf',
                            'grass-whistle',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-valor-lakefront': {
        trainerClass: 'galactic-grunt-m',
        name: '15',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Sassy,
                        moves: [
                            'hypnosis',
                            'feint-attack',
                            'fury-swipes',
                            'charm',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-veilstone-city': {
        trainerClass: 'galactic-grunt-m',
        name: '16',
        teams: [
            {
                team: [
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Gentle,
                        moves: [
                            'gust',
                            'stun-spore',
                            'morning-sun',
                            'mega-drain',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Timid,
                        moves: ['fury-swipes', 'smokescreen', 'toxic', 'slash'],
                        ivs: 3,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-m',
            name: '16',
            teams: [
                {
                    team: [
                        {
                            slug: 'dustox',
                            ability: 'shield-dust',
                            gender: 'male',
                            level: 25,
                            nature: Nature.Bashful,
                            moves: ['gust', 'protect', 'moonlight', 'psybeam'],
                            ivs: 3,
                        },
                        {
                            slug: 'croagunk',
                            ability: 'anticipation',
                            gender: 'male',
                            level: 25,
                            nature: Nature.Calm,
                            moves: [
                                'pursuit',
                                'feint-attack',
                                'revenge',
                                'swagger',
                            ],
                            ivs: 3,
                        },
                    ],
                },
            ],
        },
    },
    'tuber-f-chelsea': {
        trainerClass: 'tuber-f',
        name: 'Chelsea',
        teams: [
            {
                team: [
                    {
                        slug: 'bibarel',
                        ability: 'simple',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Jolly,
                        moves: [
                            'surf',
                            'hyper-fang',
                            'headbutt',
                            'defense-curl',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-m-jared': {
        trainerClass: 'tuber-m',
        name: 'Jared',
        teams: [
            {
                team: [
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Rash,
                        moves: [
                            'harden',
                            'water-pulse',
                            'mud-bomb',
                            'hidden-power',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Impish,
                        moves: [
                            'harden',
                            'water-pulse',
                            'mud-bomb',
                            'hidden-power',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Bashful,
                        moves: [
                            'harden',
                            'water-pulse',
                            'mud-bomb',
                            'hidden-power',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-kenneth': {
        trainerClass: 'fisherman',
        name: 'Kenneth',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bashful,
                        moves: ['splash', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Brave,
                        moves: [
                            'lock-on',
                            'psybeam',
                            'aurora-beam',
                            'bubble-beam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Bold,
                        moves: ['thrash', 'bite'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'beauty-cyndy': {
        trainerClass: 'beauty',
        name: 'Cyndy',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Hardy,
                        moves: [
                            'growl',
                            'hypnosis',
                            'feint-attack',
                            'fury-swipes',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-haley': {
        trainerClass: 'swimmer-f',
        name: 'Haley',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Sassy,
                        moves: [
                            'rollout',
                            'bubble-beam',
                            'aqua-ring',
                            'double-edge',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Quiet,
                        moves: [
                            'water-gun',
                            'rollout',
                            'bubble-beam',
                            'aqua-ring',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-paul': {
        trainerClass: 'sailor',
        name: 'Paul',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Lonely,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Brave,
                        moves: [
                            'seismic-toss',
                            'revenge',
                            'vital-throw',
                            'submission',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-evan': {
        trainerClass: 'swimmer-m',
        name: 'Evan',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Quirky,
                        moves: [
                            'disable',
                            'confusion',
                            'water-pulse',
                            'fury-swipes',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Lonely,
                        moves: [
                            'confusion',
                            'water-pulse',
                            'fury-swipes',
                            'screech',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-mary': {
        trainerClass: 'swimmer-f',
        name: 'Mary',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Gentle,
                        moves: [
                            'bubble-beam',
                            'aqua-ring',
                            'double-edge',
                            'rain-dance',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Timid,
                        moves: ['mist', 'water-pulse', 'payback', 'protect'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-sheltin': {
        trainerClass: 'swimmer-m',
        name: 'Sheltin',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Brave,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Calm,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Adamant,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-m-taylor': {
        trainerClass: 'pkmn-ranger-m',
        name: 'Taylor',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Hasty,
                        moves: ['leer', 'charge', 'bite', 'spark'],
                        ivs: 6,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Sassy,
                        moves: ['water-gun', 'pursuit', 'swift', 'aqua-jet'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'scientist-shaun': {
        trainerClass: 'scientist',
        name: 'Shaun',
        teams: [
            {
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Careful,
                        moves: ['hidden-power'],
                        ivs: 0,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Hardy,
                        moves: [
                            'confusion',
                            'disable',
                            'kinesis',
                            'thunder-punch',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'parasol-lady-sabrina': {
        trainerClass: 'parasol-lady',
        name: 'Sabrina',
        teams: [
            {
                team: [
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Bold,
                        moves: [
                            'tail-whip',
                            'water-gun',
                            'disable',
                            'confusion',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'parasol-lady-alexa': {
        trainerClass: 'parasol-lady',
        name: 'Alexa',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Naive,
                        moves: [
                            'water-sport',
                            'supersonic',
                            'horn-attack',
                            'water-pulse',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Jolly,
                        moves: [
                            'quick-attack',
                            'water-gun',
                            'pursuit',
                            'swift',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-juan': {
        trainerClass: 'fisherman',
        name: 'Juan',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Brave,
                        moves: ['thrash', 'bite'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-cameron': {
        trainerClass: 'fisherman',
        name: 'Cameron',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Careful,
                        moves: [
                            'water-sport',
                            'supersonic',
                            'horn-attack',
                            'water-pulse',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Rash,
                        moves: [
                            'water-sport',
                            'water-gun',
                            'mud-bomb',
                            'amnesia',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-travis': {
        trainerClass: 'fisherman',
        name: 'Travis',
        teams: [
            {
                team: [
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                        moves: [
                            'mud-sport',
                            'water-sport',
                            'water-gun',
                            'mud-bomb',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Rash,
                        moves: [
                            'water-sport',
                            'water-gun',
                            'mud-bomb',
                            'amnesia',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Quirky,
                        moves: [
                            'harden',
                            'water-pulse',
                            'mud-bomb',
                            'hidden-power',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                        moves: [
                            'mud-sport',
                            'water-sport',
                            'water-gun',
                            'mud-bomb',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-dominique': {
        trainerClass: 'collector',
        name: 'Dominique',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Bold,
                        moves: [
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                            'self-destruct',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Modest,
                        moves: [
                            'mud-sport',
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Naughty,
                        moves: [
                            'rock-polish',
                            'rock-throw',
                            'magnitude',
                            'self-destruct',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'policeman-danny': {
        trainerClass: 'policeman',
        name: 'Danny',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Quirky,
                        moves: ['foresight', 'hypnosis', 'peck', 'reflect'],
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Impish,
                        moves: [
                            'focus-energy',
                            'karate-chop',
                            'foresight',
                            'seismic-toss',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'scientist-stefano': {
        trainerClass: 'scientist',
        name: 'Stefano',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Careful,
                        moves: ['confusion', 'disable', 'kinesis', 'ice-punch'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-f-allison': {
        trainerClass: 'pkmn-ranger-f',
        name: 'Allison',
        teams: [
            {
                team: [
                    {
                        slug: 'aipom',
                        ability: 'run-away',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Modest,
                        moves: [
                            'astonish',
                            'baton-pass',
                            'tickle',
                            'fury-swipes',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Quirky,
                        moves: [
                            'tail-whip',
                            'water-gun',
                            'rollout',
                            'bubble-beam',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-m-jeffrey': {
        trainerClass: 'pkmn-ranger-m',
        name: 'Jeffrey',
        teams: [
            {
                team: [
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Mild,
                        moves: ['water-sport', 'peck', 'metal-claw', 'bide'],
                        ivs: 6,
                    },
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Mild,
                        moves: ['water-sport', 'peck', 'metal-claw', 'bide'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'policeman-caleb': {
        trainerClass: 'policeman',
        name: 'Caleb',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Naughty,
                        moves: ['foresight', 'hypnosis', 'peck', 'reflect'],
                        ivs: 0,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Gentle,
                        moves: [
                            'confusion',
                            'detect',
                            'hidden-power',
                            'mind-reader',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'gentleman-jeremy': {
        trainerClass: 'gentleman',
        name: 'Jeremy',
        teams: [
            {
                team: [
                    {
                        slug: 'chatot',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Adamant,
                        moves: ['growl', 'mirror-move', 'sing', 'fury-attack'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'socialite-reina': {
        trainerClass: 'socialite',
        name: 'Reina',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Serious,
                        moves: [
                            'stun-spore',
                            'mega-drain',
                            'leech-seed',
                            'magical-leaf',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'policeman-dylan': {
        trainerClass: 'policeman',
        name: 'Dylan',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quiet,
                        moves: ['foresight', 'hypnosis', 'peck', 'reflect'],
                        ivs: 0,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Bashful,
                        moves: [
                            'confusion',
                            'detect',
                            'hidden-power',
                            'mind-reader',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'rich-boy-jason': {
        trainerClass: 'rich-boy',
        name: 'Jason',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Jolly,
                        moves: ['leer', 'charge', 'bite', 'spark'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lady-melissa': {
        trainerClass: 'lady',
        name: 'Melissa',
        teams: [
            {
                team: [
                    {
                        slug: 'buneary',
                        ability: 'run-away',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Impish,
                        moves: [
                            'foresight',
                            'endure',
                            'frustration',
                            'quick-attack',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'policeman-alex': {
        trainerClass: 'policeman',
        name: 'Alex',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Serious,
                        moves: ['foresight', 'hypnosis', 'peck', 'reflect'],
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Gentle,
                        moves: [
                            'leer',
                            'focus-energy',
                            'karate-chop',
                            'foresight',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'policeman-bobby': {
        trainerClass: 'policeman',
        name: 'Bobby',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Relaxed,
                        moves: ['foresight', 'hypnosis', 'peck', 'reflect'],
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Mild,
                        moves: [
                            'leer',
                            'focus-energy',
                            'karate-chop',
                            'foresight',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-jeffry': {
        trainerClass: 'black-belt',
        name: 'Jeffery',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Hardy,
                        moves: ['vital-throw', 'foresight', 'leer'],
                        ivs: 4,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Lax,
                        moves: ['force-palm', 'calm-mind', 'detect'],
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    'black-belt-darren': {
        trainerClass: 'black-belt',
        name: 'Darren',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        moves: ['karate-chop', 'foresight'],
                        ivs: 4,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Gentle,
                        moves: ['low-kick', 'leer'],
                        ivs: 4,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        moves: ['seismic-toss', 'foresight'],
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    'black-belt-rafael': {
        trainerClass: 'black-belt',
        name: 'Rafael',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Naughty,
                        moves: [
                            'force-palm',
                            'confusion',
                            'detect',
                            'meditate',
                        ],
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    'black-belt-colby': {
        trainerClass: 'black-belt',
        name: 'Colby',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Gentle,
                        moves: ['karate-chop', 'leer'],
                        ivs: 4,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Gentle,
                        moves: ['low-kick', 'foresight'],
                        ivs: 4,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Gentle,
                        moves: ['revenge', 'leer'],
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    // Veilstone Gym's compiled script (scr_seq_release/narc_0132.bin) calls
    // GiveBadge with a literal badge_no argument of 2, at byte offset 104
    // (the only occurrence of the GiveBadge opcode 0x015C in this bank).
    'leader-maylene': {
        trainerClass: 'leader-maylene',
        name: 'Maylene',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Timid,
                        moves: [
                            'drain-punch',
                            'confusion',
                            'meditate',
                            'detect',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Lax,
                        moves: [
                            'brick-break',
                            'rock-tomb',
                            'leer',
                            'foresight',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'lucario',
                        ability: 'steadfast',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Mild,
                        moves: [
                            'drain-punch',
                            'force-palm',
                            'metal-claw',
                            'bone-rush',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Hyper Potion',
            },
        ],
    },
    'tuber-m-jacky': {
        trainerClass: 'tuber-m',
        name: 'Jacky',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Modest,
                        moves: [
                            'aqua-jet',
                            'sonic-boom',
                            'quick-attack',
                            'pursuit',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'fisherman-walter': {
        trainerClass: 'fisherman',
        name: 'Walter',
        teams: [
            {
                team: [
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Serious,
                        moves: ['water-pulse', 'mud-bomb', 'mud-slap'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'sailor-damian': {
        trainerClass: 'sailor',
        name: 'Damian',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Hasty,
                        moves: ['water-pulse', 'wing-attack', 'supersonic'],
                        ivs: 1,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Hasty,
                        moves: ['water-pulse', 'wing-attack', 'supersonic'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'tuber-f-caitlyn': {
        trainerClass: 'tuber-f',
        name: 'Caitlyn',
        teams: [
            {
                team: [
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Timid,
                        moves: ['water-gun', 'slam', 'charm'],
                        ivs: 1,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Modest,
                        moves: [
                            'bubble-beam',
                            'rollout',
                            'defense-curl',
                            'aqua-ring',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'fisherman-erick': {
        trainerClass: 'fisherman',
        name: 'Erick',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Quirky,
                        moves: ['water-pulse', 'peck', 'flail', 'supersonic'],
                        ivs: 1,
                    },
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Serious,
                        moves: ['water-pulse', 'mud-bomb', 'mud-sport'],
                        ivs: 1,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Careful,
                        moves: ['thrash', 'bite'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'sailor-samson': {
        trainerClass: 'sailor',
        name: 'Samson',
        teams: [
            {
                team: [
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Relaxed,
                        moves: ['water-pulse', 'mud-bomb', 'rain-dance'],
                        ivs: 1,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Lax,
                        moves: ['water-pulse', 'wing-attack', 'supersonic'],
                        ivs: 1,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Relaxed,
                        moves: ['water-pulse', 'mud-bomb', 'rain-dance'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    // Pastoria Gym's compiled script (scr_seq_release/narc_0120.bin) calls
    // GiveBadge with a literal badge_no argument of 3, at byte offset 200
    // (the only occurrence of the GiveBadge opcode 0x015C in this bank).
    'leader-wake': {
        trainerClass: 'leader-wake',
        name: 'Wake',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Docile,
                        moves: ['brine', 'dragon-rage', 'bite', 'swagger'],
                        ivs: 12,
                    },
                    {
                        slug: 'quagsire',
                        ability: 'damp',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Rash,
                        moves: ['mud-bomb', 'slam', 'mud-sport', 'tail-whip'],
                        ivs: 12,
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Adamant,
                        moves: ['brine', 'ice-fang', 'pursuit', 'swift'],
                        heldItem: 'sitrus-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Super Potion',
            },
        ],
    },
    'galactic-grunt-m-celestic-town': {
        trainerClass: 'galactic-grunt-m',
        name: '17',
        teams: [
            {
                team: [
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quiet,
                        moves: [
                            'gust',
                            'stun-spore',
                            'morning-sun',
                            'mega-drain',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Relaxed,
                        moves: [
                            'pursuit',
                            'feint-attack',
                            'revenge',
                            'swagger',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'youngster-donny': {
        trainerClass: 'youngster',
        name: 'Donny',
        teams: [
            {
                team: [
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Lax,
                        moves: [
                            'sucker-punch',
                            'night-shade',
                            'confuse-ray',
                            'curse',
                        ],
                        ivs: 1,
                    },
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Relaxed,
                        moves: [
                            'sucker-punch',
                            'shadow-punch',
                            'confuse-ray',
                            'spite',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'lass-molly': {
        trainerClass: 'lass',
        name: 'Molly',
        teams: [
            {
                team: [
                    {
                        slug: 'misdreavus',
                        ability: 'levitate',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Jolly,
                        moves: ['pain-split', 'psybeam', 'confuse-ray'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'camper-drew': {
        trainerClass: 'camper',
        name: 'Drew',
        teams: [
            {
                team: [
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Modest,
                        moves: ['payback', 'sucker-punch', 'confuse-ray'],
                        ivs: 1,
                    },
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Modest,
                        moves: ['sucker-punch', 'night-shade', 'confuse-ray'],
                        ivs: 1,
                    },
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Modest,
                        moves: ['night-shade', 'payback', 'confuse-ray'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'picnicker-cheyenne': {
        trainerClass: 'picnicker',
        name: 'Cheyenne',
        teams: [
            {
                team: [
                    {
                        slug: 'drifloon',
                        ability: 'aftermath',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Timid,
                        moves: ['spit-up', 'swallow', 'stockpile'],
                        ivs: 1,
                    },
                    {
                        slug: 'misdreavus',
                        ability: 'levitate',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Jolly,
                        moves: ['psybeam', 'astonish', 'confuse-ray'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'school-kid-m-chance': {
        trainerClass: 'school-kid-m',
        name: 'Chance',
        teams: [
            {
                team: [
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Careful,
                        moves: [
                            'shadow-punch',
                            'sucker-punch',
                            'confuse-ray',
                            'hypnosis',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'school-kid-f-mackenzie': {
        trainerClass: 'school-kid-f',
        name: 'Mackenzie',
        teams: [
            {
                team: [
                    {
                        slug: 'drifloon',
                        ability: 'aftermath',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Hasty,
                        moves: ['payback', 'gust', 'astonish', 'minimize'],
                        ivs: 1,
                    },
                    {
                        slug: 'drifloon',
                        ability: 'aftermath',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Hasty,
                        moves: ['spit-up', 'swallow', 'stockpile'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-allen': {
        trainerClass: 'ace-trainer-m',
        name: 'Allen',
        teams: [
            {
                team: [
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Brave,
                        moves: [
                            'shadow-ball',
                            'sucker-punch',
                            'curse',
                            'confuse-ray',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Hardy,
                        moves: [
                            'shadow-ball',
                            'sucker-punch',
                            'hypnosis',
                            'confuse-ray',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'gengar',
                        ability: 'levitate',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Lonely,
                        moves: [
                            'shadow-ball',
                            'confuse-ray',
                            'curse',
                            'mean-look',
                        ],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-catherine': {
        trainerClass: 'ace-trainer-f',
        name: 'Catherine',
        teams: [
            {
                team: [
                    {
                        slug: 'misdreavus',
                        ability: 'levitate',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Serious,
                        moves: [
                            'psybeam',
                            'pain-split',
                            'confuse-ray',
                            'spite',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'drifblim',
                        ability: 'aftermath',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Rash,
                        moves: ['stockpile', 'swallow', 'spit-up', 'payback'],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    // Hearthome Gym's leader-room compiled script
    // (scr_seq_release/narc_0096.bin, MAP_HEARTHOME_GYM_LEADER_ROOM's own
    // script bank) calls GiveBadge with a literal badge_no argument of 4,
    // at byte offset 224 (the only occurrence of the GiveBadge opcode
    // 0x015C in this bank).
    'leader-fantina': {
        trainerClass: 'leader-fantina',
        name: 'Fantina',
        teams: [
            {
                team: [
                    {
                        slug: 'drifblim',
                        ability: 'aftermath',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Docile,
                        moves: ['ominous-wind', 'gust', 'astonish', 'minimize'],
                        ivs: 18,
                    },
                    {
                        slug: 'gengar',
                        ability: 'levitate',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Jolly,
                        moves: [
                            'shadow-claw',
                            'poison-jab',
                            'spite',
                            'confuse-ray',
                        ],
                        ivs: 18,
                    },
                    {
                        slug: 'mismagius',
                        ability: 'levitate',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Mild,
                        moves: [
                            'shadow-ball',
                            'psybeam',
                            'magical-leaf',
                            'confuse-ray',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 18,
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Hyper Potion',
            },
        ],
    },
    'tuber-m-trenton': {
        trainerClass: 'tuber-m',
        name: 'Trenton',
        teams: [
            {
                team: [
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Hardy,
                        moves: [
                            'mud-bomb',
                            'hidden-power',
                            'rain-dance',
                            'body-slam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Hardy,
                        moves: [
                            'mud-bomb',
                            'hidden-power',
                            'rain-dance',
                            'body-slam',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-f-mariel': {
        trainerClass: 'tuber-f',
        name: 'Mariel',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Lax,
                        moves: [
                            'rollout',
                            'bubble-beam',
                            'aqua-ring',
                            'double-edge',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Lax,
                        moves: [
                            'rollout',
                            'bubble-beam',
                            'aqua-ring',
                            'double-edge',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-jessica': {
        trainerClass: 'swimmer-f',
        name: 'Jessica',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Timid,
                        moves: [
                            'horn-attack',
                            'water-pulse',
                            'flail',
                            'aqua-ring',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Timid,
                        moves: [
                            'horn-attack',
                            'water-pulse',
                            'flail',
                            'aqua-ring',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Timid,
                        moves: [
                            'horn-attack',
                            'water-pulse',
                            'flail',
                            'aqua-ring',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Timid,
                        moves: [
                            'horn-attack',
                            'water-pulse',
                            'flail',
                            'aqua-ring',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-erica': {
        trainerClass: 'swimmer-f',
        name: 'Erica',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Timid,
                        moves: [
                            'aurora-beam',
                            'bubble-beam',
                            'focus-energy',
                            'bullet-seed',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Rash,
                        moves: [
                            'disable',
                            'confusion',
                            'water-pulse',
                            'fury-swipes',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-adrian': {
        trainerClass: 'swimmer-m',
        name: 'Adrian',
        teams: [
            {
                team: [
                    {
                        slug: 'mantyke',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Lonely,
                        moves: [
                            'bubble-beam',
                            'headbutt',
                            'agility',
                            'wing-attack',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Impish,
                        moves: [
                            'aurora-beam',
                            'bubble-beam',
                            'focus-energy',
                            'bullet-seed',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Bashful,
                        moves: [
                            'bubble-beam',
                            'wrap',
                            'barrier',
                            'water-pulse',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-vincent': {
        trainerClass: 'swimmer-m',
        name: 'Vincent',
        teams: [
            {
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Sassy,
                        moves: ['mist', 'water-pulse', 'payback', 'protect'],
                        ivs: 0,
                    },
                    {
                        slug: 'whiscash',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Naughty,
                        moves: [
                            'mud-bomb',
                            'amnesia',
                            'water-pulse',
                            'magnitude',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-katelyn': {
        trainerClass: 'swimmer-f',
        name: 'Katelyn',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Impish,
                        moves: [
                            'aqua-jet',
                            'sonic-boom',
                            'quick-attack',
                            'attract',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Calm,
                        moves: [
                            'confusion',
                            'brick-break',
                            'meditate',
                            'light-screen',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Jolly,
                        moves: [
                            'water-pulse',
                            'horn-attack',
                            'aqua-ring',
                            'captivate',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-claire': {
        trainerClass: 'swimmer-f',
        name: 'Claire',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Adamant,
                        moves: ['pursuit', 'swift', 'aqua-jet', 'agility'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-erik': {
        trainerClass: 'swimmer-m',
        name: 'Erik',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Hardy,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-dillon': {
        trainerClass: 'swimmer-m',
        name: 'Dillon',
        teams: [
            {
                team: [
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Naughty,
                        moves: [
                            'mud-bomb',
                            'hidden-power',
                            'rain-dance',
                            'body-slam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gastrodon',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Adamant,
                        moves: [
                            'mud-bomb',
                            'hidden-power',
                            'rain-dance',
                            'body-slam',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-vanessa': {
        trainerClass: 'swimmer-f',
        name: 'Vanessa',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Careful,
                        moves: [
                            'confusion',
                            'water-pulse',
                            'fury-swipes',
                            'screech',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-cory': {
        trainerClass: 'fisherman',
        name: 'Cory',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Naughty,
                        moves: ['splash', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Naive,
                        moves: [
                            'gust',
                            'water-pulse',
                            'captivate',
                            'safeguard',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Brave,
                        moves: ['dragon-rage', 'leer', 'twister', 'ice-fang'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-shannon': {
        trainerClass: 'ace-trainer-f',
        name: 'Shannon',
        teams: [
            {
                team: [
                    {
                        slug: 'cherrim',
                        ability: 'flower-gift',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Calm,
                        moves: ['petal-dance', 'magical-leaf', 'leech-seed'],
                        ivs: 6,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Hardy,
                        moves: ['double-edge', 'bubble-beam', 'aqua-ring'],
                        ivs: 6,
                    },
                    {
                        slug: 'lopunny',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Bashful,
                        moves: ['jump-kick', 'quick-attack', 'defense-curl'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'collector-ivan': {
        trainerClass: 'collector',
        name: 'Ivan',
        teams: [
            {
                team: [
                    {
                        slug: 'hippopotas',
                        ability: 'sand-stream',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Bold,
                        moves: ['bite', 'yawn', 'take-down', 'sand-tomb'],
                        ivs: 0,
                    },
                    {
                        slug: 'hippopotas',
                        ability: 'sand-stream',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Bold,
                        moves: ['bite', 'yawn', 'take-down', 'sand-tomb'],
                        ivs: 0,
                    },
                    {
                        slug: 'hippopotas',
                        ability: 'sand-stream',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Rash,
                        moves: ['yawn', 'take-down', 'sand-tomb', 'crunch'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-jake': {
        trainerClass: 'ace-trainer-m',
        name: 'Jake',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Bold,
                        moves: [
                            'take-down',
                            'aerial-ace',
                            'endeavor',
                            'quick-attack',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'girafarig',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Sassy,
                        moves: ['double-hit', 'psybeam', 'growl'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'worker-dillan': {
        trainerClass: 'worker',
        name: 'Dillan',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Brave,
                        moves: [
                            'seismic-toss',
                            'revenge',
                            'vital-throw',
                            'submission',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Serious,
                        moves: [
                            'foresight',
                            'seismic-toss',
                            'revenge',
                            'vital-throw',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'worker-holden': {
        trainerClass: 'worker',
        name: 'Holden',
        teams: [
            {
                team: [
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Careful,
                        moves: [
                            'sandstorm',
                            'slam',
                            'rock-polish',
                            'dragon-breath',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'worker-conrad': {
        trainerClass: 'worker',
        name: 'Conrad',
        teams: [
            {
                team: [
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Serious,
                        moves: ['ember', 'stomp', 'fire-spin', 'take-down'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-miguel': {
        trainerClass: 'fisherman',
        name: 'Miguel',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Mild,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Mild,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-luc': {
        trainerClass: 'fisherman',
        name: 'Luc',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Quirky,
                        moves: ['splash', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Quirky,
                        moves: ['splash', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Quirky,
                        moves: ['splash', 'tackle'],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Impish,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Quirky,
                        moves: ['splash', 'tackle'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-skyler': {
        trainerClass: 'sailor',
        name: 'Skyler',
        teams: [
            {
                team: [
                    {
                        slug: 'mantyke',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Quirky,
                        moves: [
                            'bubble-beam',
                            'headbutt',
                            'agility',
                            'wing-attack',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Timid,
                        moves: ['bite', 'dragon-rage', 'leer', 'twister'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'guitarist-tony': {
        trainerClass: 'guitarist',
        name: 'Tony',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Bashful,
                        moves: ['bite', 'spark', 'roar', 'swagger'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-lawrence': {
        trainerClass: 'camper',
        name: 'Lawrence',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Hasty,
                        moves: ['spark', 'bite', 'swagger'],
                        ivs: 0,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Careful,
                        moves: ['night-slash', 'slash', 'smokescreen', 'toxic'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-summer': {
        trainerClass: 'picnicker',
        name: 'Summer',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Careful,
                        moves: ['aerial-ace', 'endeavor', 'quick-attack'],
                        ivs: 0,
                    },
                    {
                        slug: 'cherrim',
                        ability: 'flower-gift',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Docile,
                        moves: [
                            'solar-beam',
                            'magical-leaf',
                            'leech-seed',
                            'sunny-day',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'worker-willy': {
        trainerClass: 'worker',
        name: 'Willy',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Serious,
                        moves: [
                            'rock-tomb',
                            'sandstorm',
                            'slam',
                            'rock-polish',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Relaxed,
                        moves: [
                            'magnitude',
                            'self-destruct',
                            'rollout',
                            'rock-blast',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'worker-braden': {
        trainerClass: 'worker',
        name: 'Braden',
        teams: [
            {
                team: [
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Relaxed,
                        moves: [
                            'self-destruct',
                            'rollout',
                            'rock-blast',
                            'earthquake',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-damon': {
        trainerClass: 'hiker',
        name: 'Damon',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Docile,
                        moves: [
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Gentle,
                        moves: [
                            'rock-tomb',
                            'sandstorm',
                            'slam',
                            'rock-polish',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Sassy,
                        moves: [
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-maurice': {
        trainerClass: 'hiker',
        name: 'Maurice',
        teams: [
            {
                team: [
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Sassy,
                        moves: [
                            'magnitude',
                            'self-destruct',
                            'rollout',
                            'rock-blast',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Lonely,
                        moves: [
                            'seismic-toss',
                            'revenge',
                            'vital-throw',
                            'submission',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-kendal': {
        trainerClass: 'black-belt',
        name: 'Kendal',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Lax,
                        moves: [
                            'revenge',
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'battle-girl-tyler': {
        trainerClass: 'battle-girl',
        name: 'Tyler',
        teams: [
            {
                team: [
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Hasty,
                        moves: [
                            'feint',
                            'calm-mind',
                            'force-palm',
                            'high-jump-kick',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'worker-brendon': {
        trainerClass: 'worker',
        name: 'Brendon',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Serious,
                        moves: ['rage', 'rock-tomb', 'sandstorm', 'slam'],
                        ivs: 0,
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Lonely,
                        moves: [
                            'sandstorm',
                            'slam',
                            'rock-polish',
                            'dragon-breath',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'worker-quentin': {
        trainerClass: 'worker',
        name: 'Quentin',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Impish,
                        moves: [
                            'magnitude',
                            'self-destruct',
                            'rollout',
                            'rock-blast',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Relaxed,
                        moves: [
                            'magnitude',
                            'self-destruct',
                            'rollout',
                            'rock-blast',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Modest,
                        moves: [
                            'rock-tomb',
                            'sandstorm',
                            'slam',
                            'rock-polish',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-jonah': {
        trainerClass: 'ace-trainer-m',
        name: 'Jonah',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Relaxed,
                        moves: ['take-down', 'fire-spin', 'stomp', 'growl'],
                        ivs: 6,
                    },
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Docile,
                        moves: [
                            'shadow-ball',
                            'sucker-punch',
                            'confuse-ray',
                            'spite',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Jolly,
                        moves: ['aqua-jet', 'crunch', 'swift', 'ice-fang'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-brenda': {
        trainerClass: 'ace-trainer-f',
        name: 'Brenda',
        teams: [
            {
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Hasty,
                        moves: [
                            'water-pulse',
                            'wing-attack',
                            'roost',
                            'protect',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'sudowoodo',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Hasty,
                        moves: [
                            'rock-slide',
                            'feint-attack',
                            'low-kick',
                            'flail',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-iron-island': {
        trainerClass: 'galactic-grunt-m',
        name: '18',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Lonely,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Lonely,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Careful,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-m',
            name: '18',
            teams: [
                {
                    team: [
                        {
                            slug: 'glameow',
                            ability: 'limber',
                            gender: 'female',
                            level: 32,
                            nature: Nature.Rash,
                            moves: [
                                'fury-swipes',
                                'charm',
                                'assist',
                                'captivate',
                            ],
                            ivs: 3,
                        },
                        {
                            slug: 'stunky',
                            ability: 'stench',
                            gender: 'male',
                            level: 32,
                            nature: Nature.Mild,
                            moves: [
                                'smokescreen',
                                'toxic',
                                'slash',
                                'night-slash',
                            ],
                            ivs: 3,
                        },
                        {
                            slug: 'croagunk',
                            ability: 'anticipation',
                            gender: 'male',
                            level: 32,
                            nature: Nature.Lonely,
                            moves: [
                                'revenge',
                                'swagger',
                                'mud-bomb',
                                'sucker-punch',
                            ],
                            ivs: 3,
                        },
                    ],
                },
            ],
        },
    },
    'black-belt-ricky': {
        trainerClass: 'black-belt',
        name: 'Ricky',
        teams: [
            {
                team: [
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Calm,
                        moves: ['double-edge', 'taunt', 'torment', 'screech'],
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    'worker-gary': {
        trainerClass: 'worker',
        name: 'Gary',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Jolly,
                        moves: ['iron-tail', 'slam', 'dig'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-cesar': {
        trainerClass: 'ace-trainer-m',
        name: 'Cesar',
        teams: [
            {
                team: [
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Rash,
                        moves: [
                            'iron-tail',
                            'acupressure',
                            'pin-missile',
                            'poison-sting',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Quiet,
                        moves: [
                            'iron-tail',
                            'screech',
                            'rock-throw',
                            'sandstorm',
                        ],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'worker-jackson': {
        trainerClass: 'worker',
        name: 'Jackson',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Bashful,
                        moves: ['iron-tail', 'slam', 'dig'],
                        ivs: 1,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Bashful,
                        moves: ['iron-tail', 'slam', 'dig'],
                        ivs: 1,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Bashful,
                        moves: ['iron-tail', 'slam', 'dig'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-breanna': {
        trainerClass: 'ace-trainer-f',
        name: 'Breanna',
        teams: [
            {
                team: [
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Sassy,
                        moves: [
                            'iron-tail',
                            'attract',
                            'tail-whip',
                            'defense-curl',
                        ],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'worker-gerardo': {
        trainerClass: 'worker',
        name: 'Gerardo',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Bold,
                        moves: ['iron-tail', 'slam', 'dig'],
                        ivs: 1,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Bold,
                        moves: ['iron-tail', 'slam', 'dig'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'black-belt-david': {
        trainerClass: 'black-belt',
        name: 'David',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Bashful,
                        moves: [
                            'iron-tail',
                            'rock-throw',
                            'sandstorm',
                            'screech',
                        ],
                        ivs: 4,
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Timid,
                        moves: ['slam', 'rock-slide', 'sandstorm', 'screech'],
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    // Canalave Gym's compiled script (scr_seq_release/narc_0036.bin) calls
    // GiveBadge with a literal badge_no argument of 5, at byte offset 104
    // (the only occurrence of the GiveBadge opcode 0x015C in this bank).
    'leader-byron': {
        trainerClass: 'leader-byron',
        name: 'Byron',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 36,
                        nature: Nature.Gentle,
                        moves: [
                            'flash-cannon',
                            'extrasensory',
                            'confuse-ray',
                            'hypnosis',
                        ],
                        ivs: 18,
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Quirky,
                        moves: [
                            'gyro-ball',
                            'ice-fang',
                            'dragon-breath',
                            'sandstorm',
                        ],
                        ivs: 18,
                    },
                    {
                        slug: 'bastiodon',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Gentle,
                        moves: [
                            'flash-cannon',
                            'ancient-power',
                            'iron-defense',
                            'rest',
                        ],
                        heldItem: 'chesto-berry',
                        ivs: 18,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Hyper Potion',
            },
            {
                count: 1,
                name: 'Full Restore',
            },
        ],
    },
    'galactic-grunt-f-lake-valor': {
        trainerClass: 'galactic-grunt-f',
        name: '8',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Bashful,
                        moves: ['fury-swipes', 'charm', 'assist', 'captivate'],
                        ivs: 3,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Sassy,
                        moves: [
                            'revenge',
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-lake-valor-1': {
        trainerClass: 'galactic-grunt-m',
        name: '19',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Naughty,
                        moves: [
                            'bite',
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Calm,
                        moves: [
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                            'nasty-plot',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-lake-valor-2': {
        trainerClass: 'galactic-grunt-m',
        name: '20',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Naughty,
                        moves: [
                            'revenge',
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Bold,
                        moves: [
                            'moonlight',
                            'psybeam',
                            'whirlwind',
                            'light-screen',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Impish,
                        moves: [
                            'morning-sun',
                            'mega-drain',
                            'whirlwind',
                            'attract',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'commander-saturn-valor-cavern': {
        trainerClass: 'commander-saturn',
        name: 'Saturn',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Hasty,
                        moves: ['psychic', 'shock-wave', 'recover', 'embargo'],
                        ivs: 12,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 35,
                        nature: Nature.Rash,
                        moves: [
                            'gyro-ball',
                            'shadow-ball',
                            'rock-tomb',
                            'iron-defense',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'toxicroak',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Relaxed,
                        moves: [
                            'poison-jab',
                            'revenge',
                            'mud-bomb',
                            'feint-attack',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-lake-verity-1': {
        trainerClass: 'galactic-grunt-m',
        name: '21',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Sassy,
                        moves: ['fury-swipes', 'charm', 'assist', 'captivate'],
                        ivs: 3,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-f',
            name: '9',
            teams: [
                {
                    team: [
                        {
                            slug: 'silcoon',
                            ability: 'shed-skin',
                            gender: 'female',
                            level: 32,
                            nature: Nature.Sassy,
                            moves: ['tackle', 'harden', 'poison-sting'],
                            ivs: 3,
                        },
                        {
                            slug: 'golbat',
                            ability: 'inner-focus',
                            gender: 'female',
                            level: 32,
                            nature: Nature.Quiet,
                            moves: [
                                'air-cutter',
                                'wing-attack',
                                'bite',
                                'supersonic',
                            ],
                            ivs: 3,
                        },
                        {
                            slug: 'glameow',
                            ability: 'limber',
                            gender: 'female',
                            level: 32,
                            nature: Nature.Bashful,
                            moves: [
                                'fury-swipes',
                                'feint-attack',
                                'growl',
                                'fake-out',
                            ],
                            ivs: 3,
                        },
                    ],
                },
            ],
        },
    },
    'galactic-grunt-m-lake-verity-2': {
        trainerClass: 'galactic-grunt-m',
        name: '22',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Hardy,
                        moves: ['smokescreen', 'toxic', 'slash', 'night-slash'],
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Sassy,
                        moves: ['fury-swipes', 'charm', 'assist', 'captivate'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-lake-verity': {
        trainerClass: 'galactic-grunt-f',
        name: '10',
        teams: [
            {
                team: [
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Quiet,
                        moves: [
                            'morning-sun',
                            'mega-drain',
                            'whirlwind',
                            'attract',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Impish,
                        moves: ['fury-swipes', 'charm', 'assist', 'captivate'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'commander-mars-lake-verity': {
        trainerClass: 'commander-mars',
        name: 'Mars',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Jolly,
                        moves: ['air-cutter', 'bite', 'toxic', 'supersonic'],
                        ivs: 12,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 37,
                        nature: Nature.Naive,
                        moves: [
                            'gyro-ball',
                            'extrasensory',
                            'iron-defense',
                            'confuse-ray',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'purugly',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Hardy,
                        moves: [
                            'slash',
                            'feint-attack',
                            'hypnosis',
                            'fake-out',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-blake': {
        trainerClass: 'ace-trainer-snow-m',
        name: 'Blake',
        teams: [
            {
                team: [
                    {
                        slug: 'ambipom',
                        ability: 'technician',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Serious,
                        moves: [
                            'double-hit',
                            'u-turn',
                            'sand-attack',
                            'screech',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Hasty,
                        moves: ['psybeam', 'disable', 'reflect', 'recover'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-maria': {
        trainerClass: 'ace-trainer-snow-f',
        name: 'Maria',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Gentle,
                        moves: [
                            'water-pulse',
                            'confusion',
                            'disable',
                            'screech',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Lonely,
                        moves: [
                            'fire-spin',
                            'take-down',
                            'tail-whip',
                            'will-o-wisp',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'sudowoodo',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Brave,
                        moves: ['rock-slide', 'low-kick', 'flail', 'endure'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-laura': {
        trainerClass: 'ace-trainer-snow-f',
        name: 'Laura',
        teams: [
            {
                team: [
                    {
                        slug: 'lopunny',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Brave,
                        moves: [
                            'dizzy-punch',
                            'jump-kick',
                            'quick-attack',
                            'mirror-coat',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'skier-m-edward': {
        trainerClass: 'skier-m',
        name: 'Edward',
        teams: [
            {
                team: [
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Bashful,
                        moves: ['fury-swipes', 'agility', 'icy-wind', 'slash'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-garrett': {
        trainerClass: 'ace-trainer-snow-m',
        name: 'Garrett',
        teams: [
            {
                team: [
                    {
                        slug: 'mr-mime',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Careful,
                        moves: ['psybeam', 'mimic', 'reflect', 'light-screen'],
                        ivs: 6,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quirky,
                        moves: ['submission', 'low-kick', 'leer', 'rock-tomb'],
                        ivs: 6,
                    },
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Docile,
                        moves: ['slash', 'icy-wind', 'quick-attack', 'screech'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'black-belt-philip': {
        trainerClass: 'black-belt',
        name: 'Philip',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Timid,
                        moves: [
                            'vital-throw',
                            'submission',
                            'wake-up-slap',
                            'cross-chop',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'skier-f-kaitlyn': {
        trainerClass: 'skier-f',
        name: 'Kaitlyn',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Hardy,
                        moves: [
                            'giga-drain',
                            'toxic-spikes',
                            'sweet-scent',
                            'ingrain',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Bashful,
                        moves: ['mist', 'ice-shard', 'ingrain', 'wood-hammer'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'skier-m-bradley': {
        trainerClass: 'skier-m',
        name: 'Bradley',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Jolly,
                        moves: [
                            'rollout',
                            'rock-blast',
                            'earthquake',
                            'explosion',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Hasty,
                        moves: [
                            'self-destruct',
                            'rollout',
                            'rock-blast',
                            'earthquake',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Rash,
                        moves: ['swagger', 'mist', 'ice-shard', 'ingrain'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'skier-f-andrea': {
        trainerClass: 'skier-f',
        name: 'Andrea',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Serious,
                        moves: [
                            'whirlwind',
                            'aerial-ace',
                            'take-down',
                            'agility',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-dalton': {
        trainerClass: 'ace-trainer-snow-m',
        name: 'Dalton',
        teams: [
            {
                team: [
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Relaxed,
                        moves: [
                            'thunderbolt',
                            'slam',
                            'quick-attack',
                            'thunder-wave',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Naughty,
                        moves: [
                            'aerial-ace',
                            'water-pulse',
                            'supersonic',
                            'roost',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'hippopotas',
                        ability: 'sand-stream',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Docile,
                        moves: ['earthquake', 'crunch', 'sand-tomb', 'yawn'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'skier-m-shawn': {
        trainerClass: 'skier-m',
        name: 'Shawn',
        teams: [
            {
                team: [
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Modest,
                        moves: ['swagger', 'mist', 'ice-shard', 'ingrain'],
                        ivs: 0,
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Quiet,
                        moves: ['swagger', 'mist', 'ice-shard', 'ingrain'],
                        ivs: 0,
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Hasty,
                        moves: [
                            'confusion',
                            'water-pulse',
                            'fury-swipes',
                            'screech',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Jolly,
                        moves: ['swagger', 'mist', 'ice-shard', 'ingrain'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-antonio': {
        trainerClass: 'ninja-boy',
        name: 'Antonio',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Modest,
                        moves: [
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                            'poison-fang',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Relaxed,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Relaxed,
                        moves: [
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                            'poison-fang',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Jolly,
                        moves: [
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                            'nasty-plot',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'skier-f-madison': {
        trainerClass: 'skier-f',
        name: 'Madison',
        teams: [
            {
                team: [
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Sassy,
                        moves: ['mist', 'ice-shard', 'ingrain', 'wood-hammer'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-ethan': {
        trainerClass: 'ninja-boy',
        name: 'Ethan',
        teams: [
            {
                team: [
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Naughty,
                        moves: [
                            'acupressure',
                            'knock-off',
                            'scary-face',
                            'toxic-spikes',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Quirky,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'skier-m-bjorn': {
        trainerClass: 'skier-m',
        name: 'Bjorn',
        teams: [
            {
                team: [
                    {
                        slug: 'mantyke',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Hasty,
                        moves: [
                            'agility',
                            'wing-attack',
                            'water-pulse',
                            'take-down',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Gentle,
                        moves: ['agility', 'icy-wind', 'slash', 'beat-up'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'skier-f-lexie': {
        trainerClass: 'skier-f',
        name: 'Lexie',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Modest,
                        moves: [
                            'bubble-beam',
                            'aqua-ring',
                            'double-edge',
                            'rain-dance',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Hardy,
                        moves: [
                            'cosmic-power',
                            'lucky-chant',
                            'metronome',
                            'gravity',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-luke': {
        trainerClass: 'black-belt',
        name: 'Luke',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Timid,
                        moves: [
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                            'nasty-plot',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Bold,
                        moves: [
                            'sandstorm',
                            'slam',
                            'rock-polish',
                            'dragon-breath',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Quiet,
                        moves: [
                            'revenge',
                            'vital-throw',
                            'submission',
                            'wake-up-slap',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-olivia': {
        trainerClass: 'ace-trainer-snow-f',
        name: 'Olivia',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Relaxed,
                        moves: [
                            'mega-drain',
                            'toxic-spikes',
                            'ingrain',
                            'grass-whistle',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Calm,
                        moves: [
                            'water-pulse',
                            'poison-jab',
                            'peck',
                            'aqua-ring',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-brenna': {
        trainerClass: 'ace-trainer-snow-f',
        name: 'Brenna',
        teams: [
            {
                team: [
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Hardy,
                        moves: ['ice-shard', 'wood-hammer', 'leer'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-isaiah': {
        trainerClass: 'ace-trainer-snow-m',
        name: 'Isaiah',
        teams: [
            {
                team: [
                    {
                        slug: 'quagsire',
                        ability: 'damp',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Careful,
                        moves: ['earthquake', 'water-pulse', 'amnesia', 'yawn'],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-sergio': {
        trainerClass: 'ace-trainer-snow-m',
        name: 'Sergio',
        teams: [
            {
                team: [
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Adamant,
                        moves: [
                            'aqua-jet',
                            'crunch',
                            'quick-attack',
                            'ice-fang',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Hasty,
                        moves: [
                            'icy-wind',
                            'slash',
                            'feint-attack',
                            'quick-attack',
                        ],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-savannah': {
        trainerClass: 'ace-trainer-snow-f',
        name: 'Savannah',
        teams: [
            {
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Rash,
                        moves: [
                            'water-pulse',
                            'wing-attack',
                            'supersonic',
                            'roost',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Bashful,
                        moves: [
                            'water-pulse',
                            'confusion',
                            'disable',
                            'screech',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Naughty,
                        moves: ['ice-fang', 'rock-tomb', 'harden', 'screech'],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-alicia': {
        trainerClass: 'ace-trainer-snow-f',
        name: 'Alicia',
        teams: [
            {
                team: [
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Quiet,
                        moves: ['icy-wind', 'slash', 'screech', 'leer'],
                        ivs: 7,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Lax,
                        moves: ['water-pulse', 'poison-jab', 'barrier'],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-anton': {
        trainerClass: 'ace-trainer-snow-m',
        name: 'Anton',
        teams: [
            {
                team: [
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Careful,
                        moves: ['ice-shard', 'wood-hammer', 'swagger'],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    // Snowpoint Gym's compiled script (scr_seq_release/narc_0170.bin) calls
    // GiveBadge with a literal badge_no argument of 6, at byte offset 119
    // (the only occurrence of the GiveBadge opcode 0x015C in this bank).
    'leader-candice': {
        trainerClass: 'leader-candice',
        name: 'Candice',
        teams: [
            {
                team: [
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Naughty,
                        moves: ['avalanche', 'razor-leaf', 'ingrain', 'leer'],
                        ivs: 24,
                    },
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Naive,
                        moves: ['avalanche', 'slash', 'feint-attack', 'taunt'],
                        ivs: 24,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Naive,
                        moves: ['ice-punch', 'force-palm', 'detect', 'bulk-up'],
                        ivs: 24,
                    },
                    {
                        slug: 'abomasnow',
                        ability: 'snow-warning',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Naughty,
                        moves: [
                            'avalanche',
                            'wood-hammer',
                            'grass-whistle',
                            'swagger',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 24,
                    },
                ],
            },
        ],
        items: [
            { count: 1, name: 'Hyper Potion' },
            { count: 1, name: 'Full Restore' },
        ],
    },
    'galactic-grunt-m-galactic-hq-1': {
        trainerClass: 'galactic-grunt-m',
        name: '23',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Brave,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-2': {
        trainerClass: 'galactic-grunt-m',
        name: '24',
        teams: [
            {
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Adamant,
                        moves: [
                            'psybeam',
                            'whirlwind',
                            'light-screen',
                            'silver-wind',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 35,
                        nature: Nature.Lonely,
                        moves: [
                            'extrasensory',
                            'iron-defense',
                            'safeguard',
                            'gyro-ball',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-galactic-hq-1': {
        trainerClass: 'galactic-grunt-f',
        name: '11',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Quirky,
                        moves: ['charm', 'assist', 'captivate', 'slash'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'scientist-fredrick': {
        trainerClass: 'scientist',
        name: 'Fredrick',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Modest,
                        moves: ['psybeam', 'flash', 'reflect', 'light-screen'],
                        ivs: 0,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Modest,
                        moves: [
                            'psybeam',
                            'psycho-cut',
                            'thunder-wave',
                            'disable',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-3': {
        trainerClass: 'galactic-grunt-m',
        name: '25',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Lax,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                        ivs: 3,
                    },
                    {
                        slug: 'cascoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Adamant,
                        moves: ['harden'],
                        ivs: 3,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Hardy,
                        moves: [
                            'psybeam',
                            'whirlwind',
                            'light-screen',
                            'silver-wind',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-4': {
        trainerClass: 'galactic-grunt-m',
        name: '26',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Gentle,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Gentle,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-galactic-hq-2': {
        trainerClass: 'galactic-grunt-f',
        name: '12',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Lax,
                        moves: [
                            'wing-attack',
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Impish,
                        moves: ['harden'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'scientist-darrius': {
        trainerClass: 'scientist',
        name: 'Darrius',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Calm,
                        moves: ['psybeam', 'disable', 'miracle-eye'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-5': {
        trainerClass: 'galactic-grunt-m',
        name: '27',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Quiet,
                        moves: ['toxic', 'slash', 'night-slash', 'memento'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-6': {
        trainerClass: 'galactic-grunt-m',
        name: '28',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Calm,
                        moves: [
                            'extrasensory',
                            'iron-defense',
                            'safeguard',
                            'gyro-ball',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Naive,
                        moves: ['smokescreen', 'toxic', 'slash', 'night-slash'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-galactic-hq-3': {
        trainerClass: 'galactic-grunt-f',
        name: '13',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Serious,
                        moves: [
                            'revenge',
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Bashful,
                        moves: ['smokescreen', 'toxic', 'slash', 'night-slash'],
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Impish,
                        moves: ['fury-swipes', 'charm', 'assist', 'captivate'],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-7': {
        trainerClass: 'galactic-grunt-m',
        name: '29',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Calm,
                        moves: ['smokescreen', 'toxic', 'slash', 'night-slash'],
                        ivs: 3,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Modest,
                        moves: [
                            'swagger',
                            'mud-bomb',
                            'sucker-punch',
                            'nasty-plot',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-boss-cyrus-galactic-hq': {
        trainerClass: 'galactic-boss-cyrus',
        name: 'Cyrus',
        teams: [
            {
                team: [
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Relaxed,
                        moves: [
                            'drill-peck',
                            'night-shade',
                            'astonish',
                            'embargo',
                        ],
                        ivs: 18,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Modest,
                        moves: [
                            'poison-fang',
                            'air-cutter',
                            'bite',
                            'supersonic',
                        ],
                        ivs: 18,
                    },
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Naive,
                        moves: [
                            'slash',
                            'ice-punch',
                            'quick-attack',
                            'screech',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'commander-saturn-galactic-hq': {
        trainerClass: 'commander-saturn',
        name: 'Saturn',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Adamant,
                        moves: ['psychic', 'shock-wave', 'recover', 'embargo'],
                        ivs: 12,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 38,
                        nature: Nature.Hasty,
                        moves: [
                            'gyro-ball',
                            'extrasensory',
                            'shadow-ball',
                            'confuse-ray',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'toxicroak',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Quirky,
                        moves: [
                            'poison-jab',
                            'brick-break',
                            'x-scissor',
                            'swagger',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-spear-pillar': {
        trainerClass: 'galactic-grunt-f',
        name: '14',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Timid,
                        moves: ['toxic', 'slash', 'night-slash', 'memento'],
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Lax,
                        moves: ['charm', 'assist', 'captivate', 'slash'],
                        ivs: 3,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-m',
            name: '30',
            teams: [
                {
                    team: [
                        {
                            slug: 'dustox',
                            ability: 'shield-dust',
                            gender: 'male',
                            level: 38,
                            nature: Nature.Timid,
                            moves: [
                                'whirlwind',
                                'light-screen',
                                'silver-wind',
                                'toxic',
                            ],
                            ivs: 3,
                        },
                        {
                            slug: 'croagunk',
                            ability: 'anticipation',
                            gender: 'male',
                            level: 38,
                            nature: Nature.Serious,
                            moves: [
                                'mud-bomb',
                                'sucker-punch',
                                'nasty-plot',
                                'poison-jab',
                            ],
                            ivs: 3,
                        },
                    ],
                },
            ],
        },
    },
    'commander-jupiter-spear-pillar': {
        trainerClass: 'commander-jupiter',
        name: 'Jupiter',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 41,
                        nature: Nature.Calm,
                        moves: [
                            'gyro-ball',
                            'extrasensory',
                            'rock-slide',
                            'reflect',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Relaxed,
                        moves: [
                            'sludge-bomb',
                            'air-cutter',
                            'giga-drain',
                            'mean-look',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'skuntank',
                        ability: 'stench',
                        gender: 'female',
                        level: 46,
                        nature: Nature.Brave,
                        moves: [
                            'night-slash',
                            'poison-jab',
                            'flamethrower',
                            'smokescreen',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'commander-mars',
            name: 'Mars',
            teams: [
                {
                    team: [
                        {
                            slug: 'bronzor',
                            ability: 'levitate',
                            level: 41,
                            nature: Nature.Hasty,
                            moves: [
                                'gyro-ball',
                                'extrasensory',
                                'light-screen',
                                'confuse-ray',
                            ],
                            ivs: 12,
                        },
                        {
                            slug: 'golbat',
                            ability: 'inner-focus',
                            gender: 'female',
                            level: 42,
                            nature: Nature.Naive,
                            moves: [
                                'air-cutter',
                                'bite',
                                'poison-fang',
                                'confuse-ray',
                            ],
                            ivs: 12,
                        },
                        {
                            slug: 'purugly',
                            ability: 'thick-fat',
                            gender: 'female',
                            level: 45,
                            nature: Nature.Hasty,
                            moves: [
                                'slash',
                                'shadow-claw',
                                'aerial-ace',
                                'hypnosis',
                            ],
                            heldItem: 'sitrus-berry',
                            ivs: 12,
                        },
                    ],
                },
            ],
        },
    },
    'galactic-boss-cyrus-spear-pillar': {
        trainerClass: 'galactic-boss-cyrus',
        name: 'Cyrus',
        teams: [
            {
                team: [
                    {
                        slug: 'honchkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Quirky,
                        moves: [
                            'drill-peck',
                            'dark-pulse',
                            'steel-wing',
                            'embargo',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'crobat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Docile,
                        moves: [
                            'cross-poison',
                            'air-slash',
                            'bite',
                            'confuse-ray',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Quiet,
                        moves: [
                            'giga-impact',
                            'aqua-tail',
                            'ice-fang',
                            'earthquake',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'weavile',
                        ability: 'pressure',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Lonely,
                        moves: [
                            'night-slash',
                            'ice-punch',
                            'brick-break',
                            'x-scissor',
                        ],
                        heldItem: 'sitrus-berry',
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'rich-boy-trey': {
        trainerClass: 'rich-boy',
        name: 'Trey',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Naive,
                        moves: [
                            'swagger',
                            'crunch',
                            'thunder-fang',
                            'scary-face',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-alec': {
        trainerClass: 'fisherman',
        name: 'Alec',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Calm,
                        moves: ['splash', 'tackle', 'flail'],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Serious,
                        moves: [
                            'ice-fang',
                            'aqua-tail',
                            'rain-dance',
                            'hydro-pump',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-george': {
        trainerClass: 'fisherman',
        name: 'George',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Hardy,
                        moves: ['splash', 'tackle', 'flail'],
                        ivs: 0,
                    },
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Timid,
                        moves: [
                            'captivate',
                            'safeguard',
                            'aqua-ring',
                            'whirlpool',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Modest,
                        moves: [
                            'bullet-seed',
                            'water-pulse',
                            'signal-beam',
                            'ice-beam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Careful,
                        moves: [
                            'ice-fang',
                            'aqua-tail',
                            'rain-dance',
                            'hydro-pump',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'beauty-nicola': {
        trainerClass: 'beauty',
        name: 'Nicola',
        teams: [
            {
                team: [
                    {
                        slug: 'lopunny',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Relaxed,
                        moves: [
                            'baton-pass',
                            'agility',
                            'dizzy-punch',
                            'charm',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-brett': {
        trainerClass: 'fisherman',
        name: 'Brett',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Naive,
                        moves: ['splash', 'tackle', 'flail'],
                        ivs: 0,
                    },
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Timid,
                        moves: [
                            'safeguard',
                            'aqua-ring',
                            'whirlpool',
                            'u-turn',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'feebas',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Bold,
                        moves: ['splash', 'tackle', 'flail'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-cole': {
        trainerClass: 'fisherman',
        name: 'Cole',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Careful,
                        moves: [
                            'ice-fang',
                            'aqua-tail',
                            'rain-dance',
                            'hydro-pump',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Calm,
                        moves: [
                            'focus-energy',
                            'bullet-seed',
                            'water-pulse',
                            'signal-beam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Careful,
                        moves: [
                            'ice-fang',
                            'aqua-tail',
                            'rain-dance',
                            'hydro-pump',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-f-holly': {
        trainerClass: 'tuber-f',
        name: 'Holly',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Timid,
                        moves: [
                            'bullet-seed',
                            'water-pulse',
                            'signal-beam',
                            'ice-beam',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'policeman-thomas': {
        trainerClass: 'policeman',
        name: 'Thomas',
        teams: [
            {
                team: [
                    {
                        slug: 'noctowl',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Impish,
                        moves: [
                            'take-down',
                            'air-slash',
                            'zen-headbutt',
                            'extrasensory',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Careful,
                        moves: [
                            'vital-throw',
                            'submission',
                            'wake-up-slap',
                            'cross-chop',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-marc': {
        trainerClass: 'sailor',
        name: 'Marc',
        teams: [
            {
                team: [
                    {
                        slug: 'mantyke',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Lax,
                        moves: [
                            'water-pulse',
                            'take-down',
                            'confuse-ray',
                            'bounce',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-m-conner': {
        trainerClass: 'tuber-m',
        name: 'Conner',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Hasty,
                        moves: [
                            'bullet-seed',
                            'water-pulse',
                            'signal-beam',
                            'ice-beam',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-luther': {
        trainerClass: 'sailor',
        name: 'Luther',
        teams: [
            {
                team: [
                    {
                        slug: 'feebas',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Jolly,
                        moves: ['splash', 'tackle', 'flail'],
                        ivs: 0,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Relaxed,
                        moves: [
                            'vital-throw',
                            'submission',
                            'wake-up-slap',
                            'cross-chop',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gastrodon',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Bashful,
                        moves: [
                            'hidden-power',
                            'rain-dance',
                            'body-slam',
                            'muddy-water',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-wesley': {
        trainerClass: 'swimmer-m',
        name: 'Wesley',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Hardy,
                        moves: ['swift', 'aqua-jet', 'agility', 'whirlpool'],
                        ivs: 0,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Naughty,
                        moves: ['wrap', 'barrier', 'water-pulse', 'poison-jab'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-ricardo': {
        trainerClass: 'swimmer-m',
        name: 'Ricardo',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Jolly,
                        moves: [
                            'barrier',
                            'water-pulse',
                            'poison-jab',
                            'screech',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-francisco': {
        trainerClass: 'swimmer-m',
        name: 'Francisco',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Naughty,
                        moves: [
                            'water-pulse',
                            'poison-jab',
                            'screech',
                            'hydro-pump',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Hardy,
                        moves: [
                            'water-pulse',
                            'fury-swipes',
                            'screech',
                            'psych-up',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-colton': {
        trainerClass: 'swimmer-m',
        name: 'Colton',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Sassy,
                        moves: ['quick-attack', 'roost', 'pursuit', 'agility'],
                        ivs: 0,
                    },
                    {
                        slug: 'quagsire',
                        ability: 'damp',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Adamant,
                        moves: ['amnesia', 'yawn', 'earthquake', 'rain-dance'],
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Impish,
                        moves: ['roost', 'stockpile', 'swallow', 'spit-up'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-troy': {
        trainerClass: 'swimmer-m',
        name: 'Troy',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Rash,
                        moves: [
                            'ice-fang',
                            'aqua-tail',
                            'rain-dance',
                            'hydro-pump',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-oscar': {
        trainerClass: 'swimmer-m',
        name: 'Oscar',
        teams: [
            {
                team: [
                    {
                        slug: 'mantyke',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Adamant,
                        moves: [
                            'wing-attack',
                            'water-pulse',
                            'take-down',
                            'confuse-ray',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Lax,
                        moves: [
                            'bullet-seed',
                            'water-pulse',
                            'signal-beam',
                            'ice-beam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'mantine',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Calm,
                        moves: [
                            'water-pulse',
                            'take-down',
                            'confuse-ray',
                            'bounce',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-miranda': {
        trainerClass: 'swimmer-f',
        name: 'Miranda',
        teams: [
            {
                team: [
                    {
                        slug: 'lumineon',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Brave,
                        moves: [
                            'captivate',
                            'safeguard',
                            'aqua-ring',
                            'whirlpool',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-aubree': {
        trainerClass: 'swimmer-f',
        name: 'Aubree',
        teams: [
            {
                team: [
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Quirky,
                        moves: ['tail-whip', 'bubble', 'slam', 'water-gun'],
                        ivs: 0,
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Timid,
                        moves: [
                            'bubble-beam',
                            'aqua-ring',
                            'double-edge',
                            'rain-dance',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-paige': {
        trainerClass: 'swimmer-f',
        name: 'Paige',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Hasty,
                        moves: [
                            'aqua-ring',
                            'double-edge',
                            'rain-dance',
                            'aqua-tail',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Quirky,
                        moves: ['quick-attack', 'roost', 'pursuit', 'agility'],
                        ivs: 0,
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Quirky,
                        moves: [
                            'water-pulse',
                            'fury-swipes',
                            'screech',
                            'psych-up',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-crystal': {
        trainerClass: 'swimmer-f',
        name: 'Crystal',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Careful,
                        moves: ['quick-attack', 'roost', 'pursuit', 'agility'],
                        ivs: 0,
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Modest,
                        moves: [
                            'flail',
                            'aqua-ring',
                            'fury-attack',
                            'waterfall',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-cassandra': {
        trainerClass: 'swimmer-f',
        name: 'Cassandra',
        teams: [
            {
                team: [
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Docile,
                        moves: [
                            'captivate',
                            'safeguard',
                            'aqua-ring',
                            'whirlpool',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Mild,
                        moves: ['roost', 'stockpile', 'swallow', 'spit-up'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-gabrielle': {
        trainerClass: 'swimmer-f',
        name: 'Gabrielle',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Hasty,
                        moves: [
                            'water-pulse',
                            'fury-swipes',
                            'screech',
                            'psych-up',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-zachariah': {
        trainerClass: 'sailor',
        name: 'Zachariah',
        teams: [
            {
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Modest,
                        moves: ['roost', 'stockpile', 'swallow', 'spit-up'],
                        ivs: 0,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Serious,
                        moves: [
                            'revenge',
                            'vital-throw',
                            'submission',
                            'wake-up-slap',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gastrodon',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Impish,
                        moves: [
                            'hidden-power',
                            'rain-dance',
                            'body-slam',
                            'muddy-water',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'school-kid-f-tiera': {
        trainerClass: 'school-kid-f',
        name: 'Tiera',
        teams: [
            {
                team: [
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 44,
                        nature: Nature.Lax,
                        moves: [
                            'last-resort',
                            'super-fang',
                            'discharge',
                            'sweet-kiss',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'guitarist-jerry': {
        trainerClass: 'guitarist',
        name: 'Jerry',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Bashful,
                        moves: ['thunder-fang', 'crunch', 'leer'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'school-kid-m-forrest': {
        trainerClass: 'school-kid-m',
        name: 'Forrest',
        teams: [
            {
                team: [
                    {
                        slug: 'mr-mime',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Naughty,
                        moves: [
                            'thunderbolt',
                            'energy-ball',
                            'thunder-wave',
                            'flash',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'poke-kid-meghan': {
        trainerClass: 'poke-kid',
        name: 'Meghan',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Mild,
                        moves: ['thunderbolt', 'feint', 'agility', 'discharge'],
                        ivs: 1,
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Mild,
                        moves: ['thunderbolt', 'feint', 'agility', 'discharge'],
                        ivs: 1,
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Mild,
                        moves: ['thunderbolt', 'feint', 'agility', 'discharge'],
                        ivs: 1,
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Mild,
                        moves: ['thunderbolt', 'feint', 'agility', 'discharge'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'guitarist-lonnie': {
        trainerClass: 'guitarist',
        name: 'Lonnie',
        teams: [
            {
                team: [
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Relaxed,
                        moves: [
                            'thunderbolt',
                            'slam',
                            'thunder-wave',
                            'quick-attack',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-destiny': {
        trainerClass: 'ace-trainer-f',
        name: 'Destiny',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Adamant,
                        moves: ['psychic', 'reflect', 'disable', 'recover'],
                        ivs: 7,
                    },
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'female',
                        level: 44,
                        nature: Nature.Bold,
                        moves: [
                            'thunderbolt',
                            'dig',
                            'thunder-wave',
                            'light-screen',
                        ],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'guitarist-preston': {
        trainerClass: 'guitarist',
        name: 'Preston',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Sassy,
                        moves: ['thunder-fang', 'crunch', 'leer'],
                        ivs: 1,
                    },
                    {
                        slug: 'bibarel',
                        ability: 'simple',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Rash,
                        moves: [
                            'thunderbolt',
                            'water-pulse',
                            'super-fang',
                            'thunder-wave',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-zachery': {
        trainerClass: 'ace-trainer-m',
        name: 'Zachery',
        teams: [
            {
                team: [
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Calm,
                        moves: [
                            'thunder-fang',
                            'rock-throw',
                            'screech',
                            'harden',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Hasty,
                        moves: ['thunder-punch', 'meditate', 'detect'],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    // Sunyshore Gym Room 3's compiled script (scr_seq_release/narc_0154.bin,
    // MAP_SUNYSHORE_GYM_ROOM_3's own script bank) calls GiveBadge with a
    // literal badge_no argument of 7, at byte offset 121 (the only
    // occurrence of the GiveBadge opcode 0x015C in this bank).
    'leader-volkner': {
        trainerClass: 'leader-volkner',
        name: 'Volkner',
        items: [
            { count: 1, name: 'Hyper Potion' },
            { count: 1, name: 'Full Restore' },
        ],
        teams: [
            {
                team: [
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Sassy,
                        moves: [
                            'charge-beam',
                            'brick-break',
                            'thunder-wave',
                            'light-screen',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'ambipom',
                        ability: 'technician',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Brave,
                        moves: [
                            'shock-wave',
                            'agility',
                            'nasty-plot',
                            'baton-pass',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'octillery',
                        ability: 'suction-cups',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Lax,
                        moves: [
                            'charge-beam',
                            'octazooka',
                            'aurora-beam',
                            'bullet-seed',
                        ],
                        ivs: 24,
                    },
                    {
                        slug: 'luxray',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Sassy,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'charge-beam',
                            'thunder-fang',
                            'crunch',
                            'thunder-wave',
                        ],
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'psychic-m-bryce': {
        trainerClass: 'psychic-m',
        name: 'Bryce',
        teams: [
            {
                team: [
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Lonely,
                        moves: [
                            'shadow-punch',
                            'payback',
                            'shadow-ball',
                            'dream-eater',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'alakazam',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Lonely,
                        moves: [
                            'calm-mind',
                            'psychic',
                            'future-sight',
                            'trick',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gengar',
                        ability: 'levitate',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Impish,
                        moves: [
                            'payback',
                            'shadow-ball',
                            'dream-eater',
                            'dark-pulse',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-hana': {
        trainerClass: 'bird-keeper',
        name: 'Hana',
        teams: [
            {
                team: [
                    {
                        slug: 'noctowl',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 46,
                        nature: Nature.Impish,
                        moves: [
                            'take-down',
                            'air-slash',
                            'zen-headbutt',
                            'extrasensory',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 48,
                        nature: Nature.Adamant,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'close-combat',
                            'agility',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-mariah': {
        trainerClass: 'ace-trainer-f',
        name: 'Mariah',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 46,
                        nature: Nature.Mild,
                        moves: [
                            'zen-headbutt',
                            'confusion',
                            'disable',
                            'screech',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'blissey',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 48,
                        nature: Nature.Hasty,
                        moves: [
                            'double-edge',
                            'sing',
                            'soft-boiled',
                            'light-screen',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-omar': {
        trainerClass: 'ace-trainer-m',
        name: 'Omar',
        teams: [
            {
                team: [
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Calm,
                        moves: ['fire-blast', 'stomp', 'quick-attack', 'growl'],
                        ivs: 6,
                    },
                    {
                        slug: 'carnivine',
                        ability: 'levitate',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Brave,
                        moves: [
                            'wring-out',
                            'crunch',
                            'feint-attack',
                            'ingrain',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'rampardos',
                        ability: 'mold-breaker',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Bold,
                        moves: [
                            'head-smash',
                            'zen-headbutt',
                            'ancient-power',
                            'screech',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-sydney': {
        trainerClass: 'ace-trainer-f',
        name: 'Sydney',
        teams: [
            {
                team: [
                    {
                        slug: 'clefable',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 46,
                        nature: Nature.Lax,
                        moves: [
                            'meteor-mash',
                            'reflect',
                            'light-screen',
                            'gravity',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'torterra',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Lonely,
                        moves: [
                            'earthquake',
                            'crunch',
                            'leech-seed',
                            'synthesis',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'veteran-clayton': {
        trainerClass: 'veteran',
        name: 'Clayton',
        teams: [
            {
                team: [
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Quiet,
                        moves: [
                            'brave-bird',
                            'quick-attack',
                            'double-team',
                            'growl',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'hippowdon',
                        ability: 'sand-stream',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Gentle,
                        moves: ['earthquake', 'crunch', 'sand-tomb', 'yawn'],
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'double-team-al-and-kay': {
        trainerClass: 'double-team',
        name: 'Al & Kay',
        teams: [
            {
                team: [
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Timid,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'close-combat',
                            'agility',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'whiscash',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Calm,
                        moves: ['rest', 'snore', 'aqua-tail', 'earthquake'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-miles': {
        trainerClass: 'black-belt',
        name: 'Miles',
        teams: [
            {
                team: [
                    {
                        slug: 'machamp',
                        ability: 'guts',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Relaxed,
                        moves: [
                            'submission',
                            'wake-up-slap',
                            'cross-chop',
                            'scary-face',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'psychic-f-valencia': {
        trainerClass: 'psychic-f',
        name: 'Valencia',
        teams: [
            {
                team: [
                    {
                        slug: 'chingling',
                        ability: 'levitate',
                        gender: 'female',
                        level: 44,
                        nature: Nature.Lax,
                        moves: [
                            'astonish',
                            'confusion',
                            'uproar',
                            'last-resort',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'chimecho',
                        ability: 'levitate',
                        gender: 'female',
                        level: 48,
                        nature: Nature.Bashful,
                        moves: [
                            'double-edge',
                            'heal-bell',
                            'safeguard',
                            'extrasensory',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'double-team-jo-and-pat': {
        trainerClass: 'double-team',
        name: 'Jo & Pat',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Adamant,
                        moves: [
                            'rain-dance',
                            'hydro-pump',
                            'dragon-dance',
                            'hyper-beam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Lax,
                        moves: [
                            'force-palm',
                            'high-jump-kick',
                            'psych-up',
                            'power-trick',
                        ],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-henry': {
        trainerClass: 'ace-trainer-m',
        name: 'Henry',
        teams: [
            {
                team: [
                    {
                        slug: 'honchkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Lax,
                        moves: [
                            'night-slash',
                            'wing-attack',
                            'pursuit',
                            'swagger',
                        ],
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'dragon-tamer-ondrej': {
        trainerClass: 'dragon-tamer',
        name: 'Ondrej',
        teams: [
            {
                team: [
                    {
                        slug: 'gabite',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Lonely,
                        moves: ['slash', 'dragon-claw', 'dig', 'dragon-rush'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'veteran-edgar': {
        trainerClass: 'veteran',
        name: 'Edgar',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Naive,
                        moves: [
                            'sludge-bomb',
                            'water-pulse',
                            'toxic-spikes',
                            'screech',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'golem',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Bold,
                        moves: [
                            'earthquake',
                            'stone-edge',
                            'double-edge',
                            'rock-polish',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'empoleon',
                        ability: 'torrent',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Naughty,
                        moves: ['brine', 'drill-peck', 'metal-claw', 'growl'],
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'dragon-tamer-clinton': {
        trainerClass: 'dragon-tamer',
        name: 'Clinton',
        teams: [
            {
                team: [
                    {
                        slug: 'gible',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Naughty,
                        moves: ['slash', 'dragon-claw', 'dig', 'dragon-rush'],
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Mild,
                        moves: [
                            'rain-dance',
                            'hydro-pump',
                            'dragon-dance',
                            'hyper-beam',
                        ],
                        ivs: 0,
                    },
                    {
                        slug: 'gible',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Naughty,
                        moves: ['slash', 'dragon-claw', 'dig', 'dragon-rush'],
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    // Aaron's Room compiled script (scr_seq_release/narc_0182.bin) calls
    // SetFlag (opcode 0x001E) with a literal argument of 176, at byte
    // offset 61 (the only occurrence of the SetFlag opcode in this bank).
    'elite-four-aaron': {
        trainerClass: 'elite-four-aaron',
        name: 'Aaron',
        items: [{ count: 2, name: 'Full Restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 53,
                        nature: Nature.Modest,
                        moves: [
                            'toxic',
                            'bug-buzz',
                            'double-team',
                            'light-screen',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 53,
                        nature: Nature.Rash,
                        moves: [
                            'energy-ball',
                            'bug-buzz',
                            'psychic',
                            'shadow-ball',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'vespiquen',
                        ability: 'pressure',
                        gender: 'female',
                        level: 54,
                        nature: Nature.Docile,
                        moves: [
                            'attack-order',
                            'defend-order',
                            'heal-order',
                            'power-gem',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 54,
                        nature: Nature.Naive,
                        moves: [
                            'megahorn',
                            'close-combat',
                            'night-slash',
                            'stone-edge',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'drapion',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 57,
                        nature: Nature.Bold,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'x-scissor',
                            'cross-poison',
                            'ice-fang',
                            'aerial-ace',
                        ],
                        ivs: 30,
                    },
                ],
            },
        ],
    },
    // Bertha's Room compiled script (scr_seq_release/narc_0184.bin) calls
    // SetFlag (opcode 0x001E) with a literal argument of 177, at byte
    // offset 61 (the only occurrence of the SetFlag opcode in this bank).
    'elite-four-bertha': {
        trainerClass: 'elite-four-bertha',
        name: 'Bertha',
        items: [{ count: 2, name: 'Full Restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'quagsire',
                        ability: 'damp',
                        gender: 'female',
                        level: 55,
                        nature: Nature.Brave,
                        moves: ['dig', 'double-team', 'protect', 'sandstorm'],
                        ivs: 30,
                    },
                    {
                        slug: 'sudowoodo',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 56,
                        nature: Nature.Careful,
                        moves: [
                            'earthquake',
                            'sucker-punch',
                            'hammer-arm',
                            'sandstorm',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'golem',
                        ability: 'rock-head',
                        gender: 'female',
                        level: 56,
                        nature: Nature.Brave,
                        moves: [
                            'earthquake',
                            'gyro-ball',
                            'brick-break',
                            'sandstorm',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'whiscash',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 55,
                        nature: Nature.Gentle,
                        moves: [
                            'fissure',
                            'aqua-tail',
                            'zen-headbutt',
                            'rock-slide',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'hippowdon',
                        ability: 'sand-stream',
                        gender: 'female',
                        level: 59,
                        nature: Nature.Mild,
                        heldItem: 'sitrus-berry',
                        moves: ['earthquake', 'stone-edge', 'crunch', 'curse'],
                        ivs: 30,
                    },
                ],
            },
        ],
    },
    // Flint's Room compiled script (scr_seq_release/narc_0186.bin) calls
    // SetFlag (opcode 0x001E) with a literal argument of 178, at byte
    // offset 61 (the only occurrence of the SetFlag opcode in this bank).
    'elite-four-flint': {
        trainerClass: 'elite-four-flint',
        name: 'Flint',
        items: [{ count: 2, name: 'Full Restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 58,
                        nature: Nature.Naughty,
                        moves: [
                            'flare-blitz',
                            'solar-beam',
                            'bounce',
                            'sunny-day',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 57,
                        nature: Nature.Hardy,
                        moves: [
                            'fire-fang',
                            'rock-tomb',
                            'screech',
                            'sunny-day',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'drifblim',
                        ability: 'aftermath',
                        gender: 'male',
                        level: 58,
                        nature: Nature.Relaxed,
                        moves: [
                            'will-o-wisp',
                            'ominous-wind',
                            'double-team',
                            'baton-pass',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'lopunny',
                        ability: 'cute-charm',
                        gender: 'male',
                        level: 57,
                        nature: Nature.Impish,
                        moves: [
                            'fire-punch',
                            'charm',
                            'mirror-coat',
                            'sunny-day',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'infernape',
                        ability: 'blaze',
                        gender: 'male',
                        level: 61,
                        nature: Nature.Jolly,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'flare-blitz',
                            'thunder-punch',
                            'mach-punch',
                            'earthquake',
                        ],
                        ivs: 30,
                    },
                ],
            },
        ],
    },
    // Lucian's Room compiled script (scr_seq_release/narc_0188.bin) calls
    // SetFlag (opcode 0x001E) with a literal argument of 179, at byte
    // offset 61 (the only occurrence of the SetFlag opcode in this bank).
    'elite-four-lucian': {
        trainerClass: 'elite-four-lucian',
        name: 'Lucian',
        items: [{ count: 2, name: 'Full Restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'mr-mime',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 59,
                        nature: Nature.Serious,
                        moves: [
                            'psychic',
                            'thunderbolt',
                            'reflect',
                            'light-screen',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'girafarig',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 59,
                        nature: Nature.Hasty,
                        moves: [
                            'psychic',
                            'shadow-ball',
                            'double-hit',
                            'crunch',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 60,
                        nature: Nature.Hardy,
                        moves: [
                            'drain-punch',
                            'fire-punch',
                            'thunder-punch',
                            'ice-punch',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'alakazam',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 60,
                        nature: Nature.Lax,
                        moves: [
                            'psychic',
                            'energy-ball',
                            'focus-blast',
                            'recover',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'bronzong',
                        ability: 'levitate',
                        level: 63,
                        nature: Nature.Impish,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'psychic',
                            'gyro-ball',
                            'earthquake',
                            'calm-mind',
                        ],
                        ivs: 30,
                    },
                ],
            },
        ],
    },
    // Cynthia's Room compiled script (scr_seq_release/narc_0190.bin) calls
    // SetFlag (opcode 0x001E) with a literal argument of 180, at byte
    // offset 82 -- structurally the same position (same surrounding
    // opcode pattern) as the analogous real SetFlag call in each of the
    // other four gauntlet rooms, and directly sequential with their own
    // flags (176/177/178/179). Five other byte-sequences matching the
    // SetFlag opcode appear elsewhere in this (longer, 276-byte) bank, but
    // none share that surrounding pattern, so they're unrelated
    // coincidental byte alignments, not real SetFlag calls, from this
    // room's extra Hall of Fame/credits setup.
    //
    // This is a real divergence from Platinum, not a leftover placeholder:
    // Platinum's Cynthia battle uses `{ type: 'gameClear' }`, reading the
    // save's generic isMainStoryCleared byte. No script command in this
    // decomp calls PlayerProfile_SetGameClearFlag (searched every
    // arm9/src/scrcmd*.c and hall_of_fame.c) -- it's set by native game
    // logic outside the scripting VM entirely, not from this room's script.
    // D/P's own script only ever sets its own dedicated flag 180 here, so
    // that -- not gameClear -- is what this app can actually detect from a
    // decrypted D/P save.
    'champion-cynthia': {
        trainerClass: 'champion-cynthia',
        name: 'Cynthia',
        items: [{ count: 4, name: 'Full Restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'spiritomb',
                        ability: 'pressure',
                        gender: 'female',
                        level: 61,
                        nature: Nature.Jolly,
                        moves: [
                            'dark-pulse',
                            'psychic',
                            'silver-wind',
                            'embargo',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 60,
                        nature: Nature.Naughty,
                        moves: [
                            'energy-ball',
                            'sludge-bomb',
                            'shadow-ball',
                            'extrasensory',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'gastrodon',
                        ability: 'sticky-hold',
                        gender: 'female',
                        level: 60,
                        nature: Nature.Calm,
                        moves: [
                            'muddy-water',
                            'earthquake',
                            'stone-edge',
                            'sludge-bomb',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'lucario',
                        ability: 'steadfast',
                        gender: 'male',
                        level: 63,
                        nature: Nature.Timid,
                        moves: [
                            'aura-sphere',
                            'dragon-pulse',
                            'psychic',
                            'earthquake',
                        ],
                        ivs: 30,
                    },
                    {
                        slug: 'milotic',
                        ability: 'marvel-scale',
                        gender: 'female',
                        level: 63,
                        nature: Nature.Sassy,
                        moves: ['surf', 'ice-beam', 'mirror-coat', 'aqua-ring'],
                        ivs: 30,
                    },
                    {
                        slug: 'garchomp',
                        ability: 'sand-veil',
                        gender: 'female',
                        level: 66,
                        nature: Nature.Timid,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'dragon-rush',
                            'earthquake',
                            'brick-break',
                            'giga-impact',
                        ],
                        ivs: 30,
                    },
                ],
            },
        ],
    },
};
