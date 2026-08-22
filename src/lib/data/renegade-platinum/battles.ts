import { Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

export const BATTLES: Record<string, BattleData> = {
    'pkmn-trainer-barry-1': {
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'iron-fist',
                        gender: 'male',
                        level: 5,
                        moves: ['scratch', 'leer'],
                        nature: Nature.Timid,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'piplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 5,
                        moves: ['pound', 'growl'],
                        nature: Nature.Naive,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 5,
                        moves: ['tackle', 'withdraw'],
                        nature: Nature.Gentle,
                        ivs: 30,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-and-galactic-grunt-lake-verity': {
        trainerClass: 'galactic-grunt-m',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 50,
                        moves: [
                            'hurricane',
                            'whirlwind',
                            'protect',
                            'tailwind',
                        ],
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                    {
                        slug: 'beedrill',
                        ability: 'adaptability',
                        gender: 'male',
                        level: 50,
                        moves: ['megahorn', 'outrage', 'endeavor', 'agility'],
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                ],
            },
        ],
        secondTrainer: {
            name: '1',
            trainerClass: 'galactic-grunt-f',
            teams: [
                {
                    team: [
                        {
                            slug: 'beautifly',
                            ability: 'swarm',
                            gender: 'female',
                            level: 50,
                            moves: [
                                'hurricane',
                                'whirlwind',
                                'rage',
                                'air-slash',
                            ],
                            nature: Nature.Quirky,
                            ivs: 12,
                        },
                        {
                            slug: 'butterfree',
                            ability: 'tinted-lens',
                            gender: 'female',
                            level: 50,
                            moves: [
                                'hurricane',
                                'teleport',
                                'tailwind',
                                'whirlwind',
                            ],
                            nature: Nature.Lax,
                            ivs: 12,
                        },
                    ],
                },
            ],
        },
    },
    'galactic-grunt-m-lake-verity-2': {
        trainerClass: 'galactic-grunt-m',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'nidorino',
                        ability: 'poison-point',
                        gender: 'male',
                        level: 49,
                        moves: [
                            'head-smash',
                            'captivate',
                            'poison-tail',
                            'sucker-punch',
                        ],
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 49,
                        moves: [
                            'nasty-plot',
                            'zen-headbutt',
                            'haze',
                            'air-slash',
                        ],
                        nature: Nature.Impish,
                        ivs: 12,
                    },
                    {
                        slug: 'wormadam-plant',
                        ability: 'battle-armor',
                        gender: 'female',
                        level: 49,
                        moves: ['attract', 'psychic', 'flail', 'captivate'],
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-lake-verity-2': {
        trainerClass: 'galactic-grunt-f',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'nidorina',
                        ability: 'poison-point',
                        gender: 'female',
                        level: 49,
                        moves: [
                            'super-fang',
                            'captivate',
                            'poison-tail',
                            'crunch',
                        ],
                        nature: Nature.Impish,
                        ivs: 12,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 49,
                        moves: [
                            'nasty-plot',
                            'zen-headbutt',
                            'haze',
                            'air-slash',
                        ],
                        nature: Nature.Bold,
                        ivs: 12,
                    },
                    {
                        slug: 'mothim',
                        ability: 'tinted-lens',
                        gender: 'male',
                        level: 49,
                        moves: ['camouflage', 'flail', 'psychic', 'air-slash'],
                        nature: Nature.Bashful,
                        ivs: 12,
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
                        slug: 'crobat',
                        ability: 'inner-focus',
                        gender: 'female',
                        heldItem: 'bright-powder',
                        level: 52,
                        moves: [
                            'brave-bird',
                            'hypnosis',
                            'double-team',
                            'giga-drain',
                        ],
                        nature: Nature.Modest,
                        ivs: 31,
                    },
                    {
                        slug: 'yanmega',
                        ability: 'speed-boost',
                        gender: 'female',
                        heldItem: 'wise-glasses',
                        level: 52,
                        moves: ['bug-buzz', 'air-slash', 'psychic', 'detect'],
                        nature: Nature.Rash,
                        ivs: 31,
                    },
                    {
                        slug: 'bronzong',
                        ability: 'levitate',
                        heldItem: 'leftovers',
                        level: 52,
                        moves: [
                            'stealth-rock',
                            'gyro-ball',
                            'payback',
                            'explosion',
                        ],
                        nature: Nature.Naughty,
                        ivs: 31,
                    },
                    {
                        slug: 'kangaskhan',
                        ability: 'scrappy',
                        gender: 'female',
                        heldItem: 'muscle-band',
                        level: 52,
                        moves: [
                            'double-edge',
                            'hammer-arm',
                            'crunch',
                            'fake-out',
                        ],
                        nature: Nature.Impish,
                        ivs: 31,
                    },
                    {
                        slug: 'purugly',
                        ability: 'thick-fat',
                        gender: 'female',
                        heldItem: 'sitrus-berry',
                        level: 53,
                        moves: [
                            'body-slam',
                            'play-rough',
                            'hypnosis',
                            'fake-out',
                        ],
                        nature: Nature.Lonely,
                        ivs: 31,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-dawn': {
        trainerClass: 'pkmn-trainer-dawn',
        name: 'Dawn',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'piplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 9,
                        moves: ['water-sport', 'bubble', 'growl', 'pound'],
                        nature: Nature.Lax,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 9,
                        moves: ['razor-leaf', 'absorb', 'withdraw', 'tackle'],
                        nature: Nature.Careful,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'iron-fist',
                        gender: 'male',
                        level: 9,
                        moves: ['taunt', 'ember', 'leer', 'scratch'],
                        nature: Nature.Careful,
                        ivs: 30,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-lucas': {
        trainerClass: 'pkmn-trainer-lucas',
        name: 'Lucas',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'piplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 9,
                        moves: ['water-sport', 'bubble', 'growl', 'pound'],
                        nature: Nature.Hasty,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 9,
                        moves: ['razor-leaf', 'absorb', 'withdraw', 'tackle'],
                        nature: Nature.Hasty,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'iron-fist',
                        gender: 'male',
                        level: 9,
                        moves: ['taunt', 'ember', 'leer', 'scratch'],
                        nature: Nature.Hasty,
                        ivs: 30,
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
                        slug: 'sentret',
                        ability: 'run-away',
                        gender: 'female',
                        level: 7,
                        moves: [
                            'fury-swipes',
                            'quick-attack',
                            'defense-curl',
                            'foresight',
                        ],
                        nature: Nature.Hasty,
                        ivs: 12,
                    },
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 7,
                        moves: ['defense-curl', 'growl', 'tackle'],
                        nature: Nature.Quiet,
                        ivs: 12,
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
                        slug: 'hoothoot',
                        ability: 'tinted-lens',
                        gender: 'male',
                        level: 7,
                        moves: ['hypnosis', 'peck', 'foresight', 'growl'],
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                    {
                        slug: 'starly',
                        ability: 'reckless',
                        gender: 'male',
                        level: 7,
                        moves: ['quick-attack', 'growl', 'tackle'],
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'youngster-logan': {
        trainerClass: 'youngster',
        name: 'Logan',
        teams: [
            {
                team: [
                    {
                        slug: 'growlithe',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 7,
                        moves: ['ember', 'howl', 'roar', 'leer'],
                        nature: Nature.Docile,
                        ivs: 12,
                    },
                    {
                        slug: 'burmy',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 7,
                        moves: [
                            'hidden-power',
                            'bug-bite',
                            'tackle',
                            'protect',
                        ],
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 7,
                        moves: ['covet', 'sand-attack', 'tail-whip', 'growl'],
                        nature: Nature.Adamant,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'school-kid-harrison': {
        trainerClass: 'school-kid-m',
        name: 'Harrison',
        items: [{ count: 1, name: 'Potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'abra',
                        ability: 'magic-guard',
                        gender: 'male',
                        level: 8,
                        moves: ['hidden-power'],
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 8,
                        moves: ['hidden-power', 'water-gun'],
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'school-kid-christine': {
        trainerClass: 'school-kid-f',
        name: 'Christine',
        items: [{ count: 1, name: 'Potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 8,
                        moves: ['confusion', 'hidden-power'],
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        level: 8,
                        moves: ['hidden-power', 'water-gun'],
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'reporter-kayla': {
        trainerClass: 'reporter',
        name: 'Kayla',
        teams: [
            {
                team: [
                    {
                        slug: 'bulbasaur',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 5,
                        moves: ['tail-whip', 'growl', 'vine-whip'],
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                    {
                        slug: 'charmander',
                        ability: 'solar-power',
                        gender: 'male',
                        level: 5,
                        moves: ['ember', 'growl', 'scratch'],
                        nature: Nature.Lonely,
                        ivs: 12,
                    },
                    {
                        slug: 'squirtle',
                        ability: 'rain-dish',
                        gender: 'male',
                        level: 5,
                        moves: ['water-gun', 'tail-whip', 'tackle'],
                        nature: Nature.Serious,
                        ivs: 12,
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
                        slug: 'omastar',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 43,
                        moves: [
                            'tickle',
                            'earth-power',
                            'muddy-water',
                            'spike-cannon',
                        ],
                        nature: Nature.Hasty,
                        ivs: 12,
                    },
                    {
                        slug: 'kabutops',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 43,
                        moves: [
                            'mega-drain',
                            'knock-off',
                            'waterfall',
                            'night-slash',
                        ],
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                    {
                        slug: 'relicanth',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 43,
                        moves: [
                            'amnesia',
                            'stone-edge',
                            'flail',
                            'zen-headbutt',
                        ],
                        nature: Nature.Bashful,
                        ivs: 12,
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
                        slug: 'kricketune',
                        ability: 'technician',
                        gender: 'male',
                        level: 44,
                        moves: ['bug-buzz', 'heal-bell', 'taunt', 'knock-off'],
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                    {
                        slug: 'exploud',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 44,
                        moves: ['hammer-arm', 'crunch', 'sleep-talk', 'rest'],
                        nature: Nature.Serious,
                        ivs: 12,
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
                        slug: 'crawdaunt',
                        ability: 'adaptability',
                        gender: 'male',
                        level: 45,
                        moves: [
                            'payback',
                            'crunch',
                            'swords-dance',
                            'knock-off',
                        ],
                        nature: Nature.Lonely,
                        ivs: 12,
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
                        slug: 'huntail',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 44,
                        moves: [
                            'confuse-ray',
                            'baton-pass',
                            'crunch',
                            'aqua-tail',
                        ],
                        nature: Nature.Lonely,
                        ivs: 12,
                    },
                    {
                        slug: 'gorebyss',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 44,
                        moves: [
                            'confuse-ray',
                            'baton-pass',
                            'psychic',
                            'muddy-water',
                        ],
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'tuber-trenton': {
        trainerClass: 'tuber-m',
        name: 'Trenton',
        teams: [
            {
                team: [
                    {
                        slug: 'poliwhirl',
                        ability: 'water-absorb',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'wake-up-slap',
                            'mud-bomb',
                            'belly-drum',
                            'low-kick',
                        ],
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'gastrodon',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'counter',
                            'mirror-coat',
                            'body-slam',
                            'muddy-water',
                        ],
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                    {
                        slug: 'bibarel',
                        ability: 'simple',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'superpower',
                            'amnesia',
                            'swords-dance',
                            'super-fang',
                        ],
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'tuber-mariel': {
        trainerClass: 'tuber-f',
        name: 'Mariel',
        teams: [
            {
                team: [
                    {
                        slug: 'azumarill',
                        ability: 'huge-power',
                        gender: 'female',
                        level: 43,
                        moves: [
                            'double-edge',
                            'belly-drum',
                            'rain-dance',
                            'aqua-ring',
                        ],
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                    {
                        slug: 'vaporeon',
                        ability: 'water-absorb',
                        gender: 'male',
                        level: 43,
                        moves: [
                            'hydro-pump',
                            'last-resort',
                            'ice-beam',
                            'muddy-water',
                        ],
                        nature: Nature.Relaxed,
                        ivs: 12,
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
                        slug: 'shinx',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 8,
                        moves: ['quick-attack', 'howl', 'leer', 'tackle'],
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                    {
                        slug: 'nidoran-f',
                        ability: 'poison-point',
                        gender: 'female',
                        level: 8,
                        moves: [
                            'fury-swipes',
                            'poison-sting',
                            'tail-whip',
                            'scratch',
                        ],
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                    {
                        slug: 'pidgey',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 8,
                        moves: [
                            'quick-attack',
                            'gust',
                            'sand-attack',
                            'tackle',
                        ],
                        nature: Nature.Hardy,
                        ivs: 12,
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
                        level: 11,
                        moves: ['flail', 'tackle', 'splash'],
                        nature: Nature.Gentle,
                        ivs: 12,
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
                        slug: 'oddish',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 8,
                        moves: ['sweet-scent', 'acid', 'growth', 'absorb'],
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'budew',
                        ability: 'poison-point',
                        gender: 'female',
                        level: 8,
                        moves: ['water-sport', 'growth', 'absorb'],
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'bellsprout',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 8,
                        moves: ['wrap', 'acid', 'growth', 'vine-whip'],
                        nature: Nature.Adamant,
                        ivs: 12,
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
                        slug: 'cherubi',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 13,
                        moves: [
                            'helping-hand',
                            'leech-seed',
                            'growth',
                            'tackle',
                        ],
                        nature: Nature.Impish,
                        ivs: 12,
                    },
                    {
                        slug: 'hoppip',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 13,
                        moves: [
                            'mega-drain',
                            'air-cutter',
                            'bullet-seed',
                            'tail-whip',
                        ],
                        nature: Nature.Bold,
                        ivs: 12,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'technician',
                        gender: 'female',
                        level: 13,
                        moves: [
                            'bullet-seed',
                            'leech-seed',
                            'mega-drain',
                            'tackle',
                        ],
                        nature: Nature.Relaxed,
                        ivs: 12,
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
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 14,
                        moves: [
                            'tackle',
                            'string-shot',
                            'poison-sting',
                            'bug-bite',
                        ],
                        nature: Nature.Adamant,
                        ivs: 12,
                    },
                    {
                        slug: 'kricketune',
                        ability: 'technician',
                        gender: 'male',
                        level: 14,
                        moves: [
                            'bug-bite',
                            'string-shot',
                            'fury-cutter',
                            'absorb',
                        ],
                        nature: Nature.Rash,
                        ivs: 12,
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
                        slug: 'minun',
                        ability: 'minus',
                        gender: 'female',
                        level: 15,
                        moves: [
                            'charge-beam',
                            'encore',
                            'spark',
                            'helping-hand',
                        ],
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                    {
                        slug: 'plusle',
                        ability: 'plus',
                        gender: 'female',
                        level: 15,
                        moves: [
                            'charge-beam',
                            'encore',
                            'spark',
                            'helping-hand',
                        ],
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
};
