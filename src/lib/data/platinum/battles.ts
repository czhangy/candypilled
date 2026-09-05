import { BattleMetadata, Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

export const BATTLES: Record<string, BattleData> = {
    'elite-four-aaron': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        trainerClass: 'elite-four-aaron',
        name: 'Aaron',
        teams: [
            {
                team: [
                    {
                        slug: 'yanmega',
                        ability: 'speed-boost',
                        gender: 'male',
                        ivs: 30,
                        level: 49,
                        nature: Nature.Rash,
                        moves: [
                            'air-slash',
                            'bug-buzz',
                            'u-turn',
                            'double-team',
                        ],
                    },
                    {
                        slug: 'scizor',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 30,
                        level: 49,
                        nature: Nature.Gentle,
                        moves: [
                            'iron-head',
                            'x-scissor',
                            'night-slash',
                            'quick-attack',
                        ],
                    },
                    {
                        slug: 'vespiquen',
                        ability: 'pressure',
                        gender: 'female',
                        ivs: 30,
                        level: 50,
                        nature: Nature.Careful,
                        moves: [
                            'attack-order',
                            'defend-order',
                            'heal-order',
                            'power-gem',
                        ],
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 30,
                        level: 51,
                        nature: Nature.Naughty,
                        moves: [
                            'megahorn',
                            'close-combat',
                            'night-slash',
                            'stone-edge',
                        ],
                    },
                    {
                        slug: 'drapion',
                        ability: 'battle-armor',
                        gender: 'male',
                        ivs: 30,
                        level: 53,
                        nature: Nature.Jolly,
                        moves: [
                            'x-scissor',
                            'cross-poison',
                            'ice-fang',
                            'aerial-ace',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Full Restore',
            },
        ],
    },
    'elite-four-bertha': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        trainerClass: 'elite-four-bertha',
        name: 'Bertha',
        teams: [
            {
                team: [
                    {
                        slug: 'whiscash',
                        ability: 'oblivious',
                        gender: 'female',
                        ivs: 30,
                        level: 50,
                        nature: Nature.Mild,
                        moves: [
                            'earth-power',
                            'aqua-tail',
                            'zen-headbutt',
                            'sandstorm',
                        ],
                    },
                    {
                        slug: 'gliscor',
                        ability: 'hyper-cutter',
                        gender: 'female',
                        ivs: 30,
                        level: 53,
                        nature: Nature.Serious,
                        moves: [
                            'earthquake',
                            'ice-fang',
                            'fire-fang',
                            'thunder-fang',
                        ],
                    },
                    {
                        slug: 'hippowdon',
                        ability: 'sand-stream',
                        gender: 'female',
                        ivs: 30,
                        level: 52,
                        nature: Nature.Quirky,
                        moves: ['earthquake', 'stone-edge', 'crunch', 'yawn'],
                    },
                    {
                        slug: 'golem',
                        ability: 'rock-head',
                        gender: 'female',
                        ivs: 30,
                        level: 52,
                        nature: Nature.Docile,
                        moves: [
                            'earthquake',
                            'fire-punch',
                            'thunder-punch',
                            'sandstorm',
                        ],
                    },
                    {
                        slug: 'rhyperior',
                        ability: 'lightning-rod',
                        gender: 'female',
                        ivs: 30,
                        level: 55,
                        nature: Nature.Naughty,
                        moves: [
                            'earthquake',
                            'rock-wrecker',
                            'megahorn',
                            'avalanche',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Full Restore',
            },
        ],
    },
    'waitress-kati': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'waitress',
        name: 'Kati',
        teams: [
            {
                team: [
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'collector-fernando': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'collector',
        name: 'Fernando',
        teams: [
            {
                team: [
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quirky,
                    },
                ],
            },
        ],
    },
    'collector-edwin': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'collector',
        name: 'Edwin',
        teams: [
            {
                team: [
                    {
                        slug: 'munchlax',
                        ability: 'pickup',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-barry-canalave-city': {
        metadata: [BattleMetadata.Miniboss],
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
                        ivs: 12,
                        level: 36,
                        nature: Nature.Bashful,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                            'double-team',
                        ],
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 12,
                        level: 35,
                        nature: Nature.Calm,
                        moves: ['aqua-jet', 'pursuit', 'quick-attack', 'swift'],
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 12,
                        level: 37,
                        nature: Nature.Hasty,
                        moves: [
                            'brick-break',
                            'aerial-ace',
                            'night-slash',
                            'horn-attack',
                        ],
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'male',
                        ivs: 12,
                        level: 35,
                        nature: Nature.Calm,
                        moves: [
                            'giga-drain',
                            'toxic-spikes',
                            'leech-seed',
                            'grass-whistle',
                        ],
                    },
                    {
                        slug: 'infernape',
                        ability: 'blaze',
                        gender: 'male',
                        ivs: 12,
                        level: 38,
                        nature: Nature.Calm,
                        moves: [
                            'brick-break',
                            'flame-wheel',
                            'mach-punch',
                            'aerial-ace',
                        ],
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
                        ivs: 12,
                        level: 36,
                        nature: Nature.Serious,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                            'double-team',
                        ],
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'male',
                        ivs: 12,
                        level: 35,
                        nature: Nature.Naive,
                        moves: [
                            'giga-drain',
                            'toxic-spikes',
                            'leech-seed',
                            'grass-whistle',
                        ],
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 12,
                        level: 37,
                        nature: Nature.Bold,
                        moves: [
                            'brick-break',
                            'aerial-ace',
                            'night-slash',
                            'horn-attack',
                        ],
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        ivs: 12,
                        level: 35,
                        nature: Nature.Timid,
                        moves: ['fire-spin', 'take-down', 'stomp', 'tail-whip'],
                    },
                    {
                        slug: 'empoleon',
                        ability: 'torrent',
                        gender: 'male',
                        ivs: 12,
                        level: 38,
                        nature: Nature.Bashful,
                        moves: [
                            'bubble-beam',
                            'aerial-ace',
                            'metal-claw',
                            'fury-attack',
                        ],
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
                        ivs: 12,
                        level: 36,
                        nature: Nature.Quirky,
                        moves: [
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                            'double-team',
                        ],
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 12,
                        level: 35,
                        nature: Nature.Calm,
                        moves: ['aqua-jet', 'pursuit', 'quick-attack', 'swift'],
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 12,
                        level: 37,
                        nature: Nature.Hasty,
                        moves: [
                            'brick-break',
                            'aerial-ace',
                            'night-slash',
                            'horn-attack',
                        ],
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        ivs: 12,
                        level: 35,
                        nature: Nature.Sassy,
                        moves: ['fire-spin', 'take-down', 'stomp', 'tail-whip'],
                    },
                    {
                        slug: 'torterra',
                        ability: 'overgrow',
                        gender: 'male',
                        ivs: 12,
                        level: 38,
                        nature: Nature.Mild,
                        moves: [
                            'razor-leaf',
                            'bite',
                            'mega-drain',
                            'leech-seed',
                        ],
                    },
                ],
            },
        ],
    },
    'black-belt-ricky': {
        metadata: [],
        trainerClass: 'black-belt',
        name: 'Ricky',
        teams: [
            {
                team: [
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        ivs: 4,
                        level: 38,
                        nature: Nature.Rash,
                        moves: ['iron-tail', 'taunt', 'torment', 'screech'],
                    },
                ],
            },
        ],
    },
    'worker-gary': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Gary',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        ivs: 1,
                        level: 37,
                        nature: Nature.Calm,
                        moves: ['spark', 'magnet-bomb'],
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-cesar': {
        metadata: [],
        trainerClass: 'ace-trainer-m',
        name: 'Cesar',
        teams: [
            {
                team: [
                    {
                        slug: 'scizor',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 7,
                        level: 40,
                        nature: Nature.Lax,
                        moves: ['metal-claw', 'x-scissor', 'slash', 'pursuit'],
                    },
                ],
            },
        ],
    },
    'worker-jackson': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Jackson',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        ivs: 1,
                        level: 34,
                        nature: Nature.Mild,
                        moves: ['magnet-bomb', 'spark', 'thunder-wave'],
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        ivs: 1,
                        level: 34,
                        nature: Nature.Mild,
                        moves: ['magnet-bomb', 'spark', 'thunder-wave'],
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        ivs: 1,
                        level: 34,
                        nature: Nature.Mild,
                        moves: ['magnet-bomb', 'spark', 'thunder-wave'],
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-breanna': {
        metadata: [],
        trainerClass: 'ace-trainer-f',
        name: 'Breanna',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        ivs: 7,
                        level: 35,
                        nature: Nature.Modest,
                        moves: ['gyro-ball', 'extrasensory', 'confuse-ray'],
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        ivs: 7,
                        level: 36,
                        nature: Nature.Timid,
                        moves: ['gyro-ball', 'extrasensory', 'confuse-ray'],
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        ivs: 7,
                        level: 38,
                        nature: Nature.Sassy,
                        moves: ['gyro-ball', 'extrasensory', 'confuse-ray'],
                    },
                ],
            },
        ],
    },
    'worker-gerardo': {
        metadata: [],
        trainerClass: 'worker',
        name: 'Gerardo',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        ivs: 1,
                        level: 35,
                        nature: Nature.Sassy,
                        moves: ['supersonic', 'magnet-bomb', 'spark'],
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        ivs: 1,
                        level: 35,
                        nature: Nature.Sassy,
                        moves: ['thunder-wave', 'magnet-bomb', 'spark'],
                    },
                ],
            },
        ],
    },
    'black-belt-david': {
        metadata: [],
        trainerClass: 'black-belt',
        name: 'David',
        teams: [
            {
                team: [
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        ivs: 4,
                        level: 35,
                        nature: Nature.Rash,
                        moves: [
                            'iron-tail',
                            'rock-slide',
                            'sandstorm',
                            'screech',
                        ],
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        ivs: 4,
                        level: 37,
                        nature: Nature.Bashful,
                        moves: [
                            'iron-tail',
                            'rock-slide',
                            'sandstorm',
                            'screech',
                        ],
                    },
                ],
            },
        ],
    },
    'leader-byron': {
        metadata: [BattleMetadata.Boss],
        trainerClass: 'leader-byron',
        name: 'Byron',
        teams: [
            {
                team: [
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        ivs: 24,
                        level: 37,
                        nature: Nature.Relaxed,
                        moves: [
                            'flash-cannon',
                            'thunderbolt',
                            'tri-attack',
                            'metal-sound',
                        ],
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        ivs: 24,
                        level: 38,
                        nature: Nature.Serious,
                        moves: [
                            'flash-cannon',
                            'ice-fang',
                            'earthquake',
                            'sandstorm',
                        ],
                    },
                    {
                        slug: 'bastiodon',
                        ability: 'sturdy',
                        gender: 'male',
                        ivs: 24,
                        level: 41,
                        nature: Nature.Lax,
                        moves: [
                            'metal-burst',
                            'stone-edge',
                            'iron-defense',
                            'taunt',
                        ],
                        heldItem: 'sitrus-berry',
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
    'galactic-boss-cyrus-celestic-ruins': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'galactic-boss-cyrus',
        name: 'Cyrus',
        teams: [
            {
                team: [
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 30,
                        level: 34,
                        nature: Nature.Relaxed,
                        moves: [
                            'slash',
                            'ice-punch',
                            'quick-attack',
                            'screech',
                        ],
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 30,
                        level: 34,
                        nature: Nature.Quiet,
                        moves: [
                            'poison-fang',
                            'air-cutter',
                            'bite',
                            'supersonic',
                        ],
                    },
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        ivs: 30,
                        level: 36,
                        nature: Nature.Impish,
                        moves: [
                            'drill-peck',
                            'night-shade',
                            'astonish',
                            'feint-attack',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Hyper Potion',
            },
        ],
    },
    'galactic-grunt-m-celestic-town': {
        metadata: [],
        trainerClass: 'galactic-grunt-m',
        name: '11',
        teams: [
            {
                team: [
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'male',
                        ivs: 3,
                        level: 32,
                        nature: Nature.Sassy,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 3,
                        level: 30,
                        nature: Nature.Relaxed,
                    },
                ],
            },
        ],
    },
    'champion-cynthia': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        trainerClass: 'champion-cynthia',
        name: 'Cynthia',
        teams: [
            {
                team: [
                    {
                        slug: 'spiritomb',
                        ability: 'pressure',
                        gender: 'female',
                        ivs: 30,
                        level: 58,
                        nature: Nature.Timid,
                        moves: [
                            'dark-pulse',
                            'psychic',
                            'silver-wind',
                            'shadow-ball',
                        ],
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'female',
                        ivs: 30,
                        level: 58,
                        nature: Nature.Mild,
                        moves: [
                            'energy-ball',
                            'sludge-bomb',
                            'toxic',
                            'extrasensory',
                        ],
                    },
                    {
                        slug: 'togekiss',
                        ability: 'hustle',
                        gender: 'male',
                        ivs: 30,
                        level: 60,
                        nature: Nature.Hardy,
                        moves: [
                            'air-slash',
                            'aura-sphere',
                            'water-pulse',
                            'shock-wave',
                        ],
                    },
                    {
                        slug: 'lucario',
                        ability: 'steadfast',
                        gender: 'male',
                        ivs: 30,
                        level: 60,
                        nature: Nature.Careful,
                        moves: [
                            'aura-sphere',
                            'extreme-speed',
                            'shadow-ball',
                            'stone-edge',
                        ],
                    },
                    {
                        slug: 'milotic',
                        ability: 'marvel-scale',
                        gender: 'female',
                        ivs: 30,
                        level: 58,
                        nature: Nature.Docile,
                        moves: [
                            'surf',
                            'ice-beam',
                            'mirror-coat',
                            'dragon-pulse',
                        ],
                    },
                    {
                        slug: 'garchomp',
                        ability: 'sand-veil',
                        gender: 'female',
                        ivs: 30,
                        level: 62,
                        nature: Nature.Quirky,
                        moves: [
                            'dragon-rush',
                            'earthquake',
                            'flamethrower',
                            'giga-impact',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 4,
                name: 'Full Restore',
            },
        ],
    },
    'galactic-boss-cyrus-distortion-world': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'galactic-boss-cyrus',
        name: 'Cyrus',
        teams: [
            {
                team: [
                    {
                        slug: 'houndoom',
                        ability: 'early-bird',
                        gender: 'male',
                        ivs: 30,
                        level: 45,
                        nature: Nature.Bashful,
                        moves: [
                            'flamethrower',
                            'dark-pulse',
                            'will-o-wisp',
                            'thunder-fang',
                        ],
                    },
                    {
                        slug: 'honchkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        ivs: 30,
                        level: 47,
                        nature: Nature.Adamant,
                        moves: [
                            'drill-peck',
                            'night-slash',
                            'heat-wave',
                            'psychic',
                        ],
                    },
                    {
                        slug: 'crobat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 30,
                        level: 46,
                        nature: Nature.Naive,
                        moves: [
                            'cross-poison',
                            'air-slash',
                            'toxic',
                            'confuse-ray',
                        ],
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        ivs: 30,
                        level: 46,
                        nature: Nature.Careful,
                        moves: [
                            'giga-impact',
                            'waterfall',
                            'ice-fang',
                            'earthquake',
                        ],
                    },
                    {
                        slug: 'weavile',
                        ability: 'pressure',
                        gender: 'male',
                        ivs: 30,
                        level: 48,
                        nature: Nature.Modest,
                        moves: [
                            'night-slash',
                            'ice-punch',
                            'fake-out',
                            'x-scissor',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Full Restore',
            },
        ],
    },
    'pkmn-trainer-cheryl-tag': {
        metadata: [],
        trainerClass: 'pkmn-trainer-cheryl',
        name: 'Cheryl',
        teams: [
            {
                team: [
                    {
                        slug: 'chansey',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 20,
                        moves: ['egg-bomb', 'refresh', 'soft-boiled'],
                        nature: Nature.Quiet,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'bug-catcher-jack': {
        metadata: [BattleMetadata.Tag],
        trainerClass: 'bug-catcher',
        name: 'Jack',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Quiet,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Careful,
                        moves: [
                            'tackle',
                            'string-shot',
                            'poison-sting',
                            'harden',
                        ],
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Timid,
                        moves: ['tackle', 'poison-sting', 'absorb', 'gust'],
                        ivs: 2,
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
                            level: 16,
                            nature: Nature.Modest,
                        },
                    ],
                },
            ],
        },
    },
    'psychic-f-lindsey': {
        metadata: [],
        trainerClass: 'psychic-f',
        name: 'Lindsey',
        teams: [
            {
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Gentle,
                        moves: ['hidden-power'],
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'psychic-m-elijah': {
        metadata: [],
        trainerClass: 'psychic-m',
        name: 'Elijah',
        teams: [
            {
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Docile,
                        moves: ['hidden-power'],
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'bug-catcher-donald': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'bug-catcher',
        name: 'Donald',
        teams: [
            {
                team: [
                    {
                        slug: 'burmy',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Lonely,
                        ivs: 1,
                    },
                    {
                        slug: 'burmy',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Lonely,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'bug-catcher-phillip': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'bug-catcher',
        name: 'Phillip',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Quiet,
                        moves: ['tackle', 'string-shot', 'poison-sting'],
                    },
                    {
                        slug: 'cascoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Calm,
                        moves: [
                            'tackle',
                            'string-shot',
                            'poison-sting',
                            'harden',
                        ],
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Relaxed,
                        moves: ['tackle', 'poison-sting', 'confusion', 'gust'],
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'psychic-m-kody': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'psychic-m',
        name: 'Kody',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Rash,
                        moves: ['confusion', 'bide', 'meditate'],
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'psychic-f-rachael': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'psychic-f',
        name: 'Rachael',
        teams: [
            {
                team: [
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Mild,
                        moves: ['confusion', 'water-gun', 'scratch'],
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'lass-caroline': {
        metadata: [],
        trainerClass: 'lass',
        name: 'Caroline',
        teams: [
            {
                team: [
                    {
                        slug: 'cherubi',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Lonely,
                        moves: ['tackle', 'leech-seed'],
                        ivs: 2,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Sassy,
                        moves: ['mega-drain', 'poison-sting', 'stun-spore'],
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'aroma-lady-jenna': {
        metadata: [],
        trainerClass: 'aroma-lady',
        name: 'Jenna',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Naive,
                        moves: ['absorb', 'stun-spore', 'water-sport'],
                        ivs: 2,
                    },
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Serious,
                        moves: ['absorb', 'stun-spore', 'water-sport'],
                        ivs: 2,
                    },
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Hardy,
                        moves: ['absorb', 'stun-spore', 'water-sport'],
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'aroma-lady-angela': {
        metadata: [],
        trainerClass: 'aroma-lady',
        name: 'Angela',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Mild,
                        moves: ['mega-drain', 'poison-sting', 'stun-spore'],
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'leader-gardenia': {
        metadata: [BattleMetadata.Boss],
        trainerClass: 'leader-gardenia',
        name: 'Gardenia',
        teams: [
            {
                team: [
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Quirky,
                        moves: [
                            'grass-knot',
                            'razor-leaf',
                            'sunny-day',
                            'reflect',
                        ],
                        ivs: 6,
                    },
                    {
                        slug: 'cherrim',
                        ability: 'flower-gift',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Lax,
                        moves: [
                            'grass-knot',
                            'leech-seed',
                            'magical-leaf',
                            'safeguard',
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
                        ivs: 6,
                        heldItem: 'sitrus-berry',
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
    'elite-four-flint': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        trainerClass: 'elite-four-flint',
        name: 'Flint',
        teams: [
            {
                team: [
                    {
                        slug: 'houndoom',
                        ability: 'early-bird',
                        gender: 'male',
                        ivs: 30,
                        level: 52,
                        nature: Nature.Relaxed,
                        moves: [
                            'flamethrower',
                            'sludge-bomb',
                            'dark-pulse',
                            'sunny-day',
                        ],
                    },
                    {
                        slug: 'flareon',
                        ability: 'flash-fire',
                        gender: 'male',
                        ivs: 30,
                        level: 55,
                        nature: Nature.Quirky,
                        moves: [
                            'overheat',
                            'giga-impact',
                            'quick-attack',
                            'will-o-wisp',
                        ],
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        ivs: 30,
                        level: 53,
                        nature: Nature.Docile,
                        moves: [
                            'flare-blitz',
                            'solar-beam',
                            'bounce',
                            'sunny-day',
                        ],
                    },
                    {
                        slug: 'infernape',
                        ability: 'blaze',
                        gender: 'male',
                        ivs: 30,
                        level: 55,
                        nature: Nature.Bold,
                        moves: [
                            'flare-blitz',
                            'thunder-punch',
                            'mach-punch',
                            'earthquake',
                        ],
                    },
                    {
                        slug: 'magmortar',
                        ability: 'flame-body',
                        gender: 'male',
                        ivs: 30,
                        level: 57,
                        nature: Nature.Gentle,
                        moves: [
                            'flamethrower',
                            'thunderbolt',
                            'solar-beam',
                            'hyper-beam',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Full Restore',
            },
        ],
    },
    'galactic-grunt-m-floaroma-meadow': {
        metadata: [BattleMetadata.BackToBack],
        trainerClass: 'galactic-grunt-m',
        name: 'Back-to-Back',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Hasty,
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
                        nature: Nature.Gentle,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'worker-dillan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Dillan',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Relaxed,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'worker-holden': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Holden',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        level: 32,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        level: 32,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        level: 32,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'worker-conrad': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Conrad',
        teams: [
            {
                team: [
                    {
                        slug: 'magmar',
                        ability: 'flame-body',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Relaxed,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-1': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '17',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 3,
                        level: 41,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-2': {
        metadata: [],
        trainerClass: 'galactic-grunt-m',
        name: '18',
        teams: [
            {
                team: [
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'male',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Careful,
                    },
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        ivs: 3,
                        level: 40,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-galactic-hq-1': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-f',
        name: '6',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        ivs: 3,
                        level: 41,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'scientist-fredrick': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'scientist',
        name: 'Fredrick',
        teams: [
            {
                team: [
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Brave,
                        moves: [
                            'psychic',
                            'magical-leaf',
                            'hypnosis',
                            'future-sight',
                        ],
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Docile,
                        moves: [
                            'psychic',
                            'psycho-cut',
                            'thunder-wave',
                            'recover',
                        ],
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'X Defend',
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-3': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '19',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        ivs: 3,
                        level: 37,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        ivs: 3,
                        level: 39,
                        nature: Nature.Quirky,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-6': {
        metadata: [],
        trainerClass: 'galactic-grunt-m',
        name: '22',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 3,
                        level: 40,
                        nature: Nature.Modest,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-galactic-hq-2': {
        metadata: [],
        trainerClass: 'galactic-grunt-f',
        name: '7',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 3,
                        level: 39,
                        nature: Nature.Rash,
                    },
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'female',
                        ivs: 3,
                        level: 39,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'scientist-darrius': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'scientist',
        name: 'Darrius',
        teams: [
            {
                team: [
                    {
                        slug: 'porygon2',
                        ability: 'trace',
                        level: 42,
                        nature: Nature.Rash,
                        moves: [
                            'psychic',
                            'signal-beam',
                            'ice-beam',
                            'tri-attack',
                        ],
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'X Special',
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-4': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '20',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        ivs: 3,
                        level: 41,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-5': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '21',
        teams: [
            {
                team: [
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        ivs: 3,
                        level: 39,
                        nature: Nature.Rash,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        ivs: 3,
                        level: 39,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-galactic-hq-3': {
        metadata: [],
        trainerClass: 'galactic-grunt-f',
        name: '8',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'female',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'female',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Rash,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-galactic-hq-7': {
        metadata: [],
        trainerClass: 'galactic-grunt-m',
        name: '23',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        ivs: 3,
                        level: 40,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'galactic-boss-cyrus-galactic-hq': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'galactic-boss-cyrus',
        name: 'Cyrus',
        teams: [
            {
                team: [
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 30,
                        level: 44,
                        nature: Nature.Serious,
                        moves: [
                            'slash',
                            'ice-punch',
                            'quick-attack',
                            'screech',
                        ],
                    },
                    {
                        slug: 'crobat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 30,
                        level: 44,
                        nature: Nature.Hasty,
                        moves: [
                            'poison-fang',
                            'air-cutter',
                            'bite',
                            'supersonic',
                        ],
                    },
                    {
                        slug: 'honchkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        ivs: 30,
                        level: 46,
                        nature: Nature.Relaxed,
                        moves: [
                            'drill-peck',
                            'night-shade',
                            'astonish',
                            'feint-attack',
                        ],
                        heldItem: 'sitrus-berry',
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
    'commander-saturn-galactic-hq': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'commander-saturn',
        name: 'Saturn',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 24,
                        level: 42,
                        nature: Nature.Bold,
                        moves: [
                            'air-cutter',
                            'bite',
                            'poison-fang',
                            'confuse-ray',
                        ],
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        ivs: 24,
                        level: 42,
                        nature: Nature.Hardy,
                        moves: [
                            'gyro-ball',
                            'extrasensory',
                            'shadow-ball',
                            'confuse-ray',
                        ],
                    },
                    {
                        slug: 'toxicroak',
                        ability: 'anticipation',
                        gender: 'female',
                        ivs: 24,
                        level: 44,
                        nature: Nature.Naughty,
                        moves: [
                            'poison-jab',
                            'brick-break',
                            'x-scissor',
                            'feint-attack',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-barry-hearthome-city': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Maylene',
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
                        level: 25,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        nature: Nature.Timid,
                        ivs: 6,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 23,
                        moves: [
                            'water-gun',
                            'quick-attack',
                            'pursuit',
                            'growl',
                        ],
                        nature: Nature.Bashful,
                        ivs: 6,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 23,
                        moves: [
                            'mega-drain',
                            'poison-sting',
                            'leech-seed',
                            'stun-spore',
                        ],
                        nature: Nature.Jolly,
                        ivs: 6,
                    },
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        level: 27,
                        moves: [
                            'flame-wheel',
                            'mach-punch',
                            'fury-swipes',
                            'leer',
                        ],
                        nature: Nature.Serious,
                        ivs: 6,
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
                        level: 25,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        nature: Nature.Timid,
                        ivs: 6,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 23,
                        moves: [
                            'mega-drain',
                            'poison-sting',
                            'leech-seed',
                            'stun-spore',
                        ],
                        nature: Nature.Jolly,
                        ivs: 6,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 23,
                        moves: ['ember', 'tackle', 'tail-whip', 'growl'],
                        nature: Nature.Careful,
                        ivs: 6,
                    },
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 27,
                        moves: ['bubble-beam', 'peck', 'metal-claw', 'growl'],
                        nature: Nature.Timid,
                        ivs: 6,
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
                        level: 25,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                        nature: Nature.Hardy,
                        ivs: 6,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 23,
                        moves: [
                            'water-gun',
                            'quick-attack',
                            'pursuit',
                            'growl',
                        ],
                        nature: Nature.Impish,
                        ivs: 6,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 23,
                        moves: ['ember', 'tackle', 'tail-whip', 'growl'],
                        nature: Nature.Naughty,
                        ivs: 6,
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 27,
                        moves: ['razor-leaf', 'tackle', 'absorb', 'withdraw'],
                        nature: Nature.Naive,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'lass-molly': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lass',
        name: 'Molly',
        teams: [
            {
                team: [
                    {
                        slug: 'misdreavus',
                        ability: 'levitate',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Hardy,
                        moves: ['pain-split', 'psybeam', 'confuse-ray'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'youngster-donny': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Donny',
        teams: [
            {
                team: [
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Careful,
                        moves: [
                            'sucker-punch',
                            'night-shade',
                            'confuse-ray',
                            'curse',
                        ],
                        ivs: 1,
                    },
                    {
                        slug: 'drifloon',
                        ability: 'aftermath',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Docile,
                        moves: ['spit-up', 'swallow', 'stockpile'],
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'school-kid-f-mackenzie': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'school-kid-f',
        name: 'Mackenzie',
        teams: [
            {
                team: [
                    {
                        slug: 'drifloon',
                        ability: 'aftermath',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Quiet,
                        moves: ['payback', 'gust', 'astonish', 'minimize'],
                        ivs: 1,
                    },
                    {
                        slug: 'drifloon',
                        ability: 'aftermath',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Quiet,
                        moves: ['spit-up', 'swallow', 'stockpile'],
                        ivs: 1,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Super Potion',
            },
        ],
    },
    'school-kid-m-chance': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'school-kid-m',
        name: 'Chance',
        teams: [
            {
                team: [
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Rash,
                        moves: [
                            'night-shade',
                            'sucker-punch',
                            'confuse-ray',
                            'hypnosis',
                        ],
                        ivs: 1,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'X Defend',
            },
        ],
    },
    'school-kid-m-harrison': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'school-kid-m',
        name: 'Harrison',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        level: 6,
                        nature: Nature.Timid,
                        moves: ['quick-attack'],
                        ivs: 1,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'X Attack',
            },
        ],
    },
    'school-kid-f-christine': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'school-kid-f',
        name: 'Christine',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        level: 6,
                        nature: Nature.Quiet,
                        moves: ['tackle', 'growl'],
                        ivs: 1,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Potion',
            },
        ],
    },
    'ace-trainer-f-catherine': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-f',
        name: 'Catherine',
        teams: [
            {
                team: [
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Bashful,
                        moves: [
                            'night-shade',
                            'confuse-ray',
                            'sucker-punch',
                            'curse',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'misdreavus',
                        ability: 'levitate',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Careful,
                        moves: [
                            'psybeam',
                            'pain-split',
                            'confuse-ray',
                            'spite',
                        ],
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-allen': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-m',
        name: 'Allen',
        teams: [
            {
                team: [
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Quirky,
                        moves: [
                            'night-shade',
                            'sucker-punch',
                            'curse',
                            'confuse-ray',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'gastly',
                        ability: 'levitate',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Calm,
                        moves: [
                            'night-shade',
                            'sucker-punch',
                            'hypnosis',
                            'confuse-ray',
                        ],
                        ivs: 7,
                    },
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Serious,
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
    'leader-fantina': {
        metadata: [BattleMetadata.Boss],
        trainerClass: 'leader-fantina',
        name: 'Fantina',
        teams: [
            {
                team: [
                    {
                        slug: 'duskull',
                        ability: 'levitate',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Mild,
                        moves: [
                            'will-o-wisp',
                            'pursuit',
                            'shadow-sneak',
                            'future-sight',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'haunter',
                        ability: 'levitate',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Bashful,
                        moves: [
                            'shadow-claw',
                            'sucker-punch',
                            'hypnosis',
                            'confuse-ray',
                        ],
                        ivs: 12,
                    },
                    {
                        slug: 'mismagius',
                        ability: 'levitate',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Impish,
                        moves: [
                            'shadow-ball',
                            'psybeam',
                            'magical-leaf',
                            'confuse-ray',
                        ],
                        ivs: 12,
                        heldItem: 'sitrus-berry',
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
    'pkmn-trainer-riley-tag': {
        metadata: [],
        trainerClass: 'pkmn-trainer-riley',
        name: 'Riley',
        teams: [
            {
                team: [
                    {
                        slug: 'lucario',
                        ability: 'steadfast',
                        gender: 'male',
                        level: 41,
                        moves: [
                            'metal-claw',
                            'bone-rush',
                            'force-palm',
                            'quick-attack',
                        ],
                        nature: Nature.Hardy,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'camper-lawrence': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'camper',
        name: 'Lawrence',
        teams: [
            {
                team: [
                    {
                        slug: 'aipom',
                        ability: 'run-away',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
    },
    'picnicker-summer': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'picnicker',
        name: 'Summer',
        teams: [
            {
                team: [
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'worker-noel': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Noel',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        level: 34,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        level: 36,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'worker-braden': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Braden',
        teams: [
            {
                team: [
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'hiker-damon': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Damon',
        teams: [
            {
                team: [
                    {
                        slug: 'nosepass',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Bold,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'steelix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'hiker-maurice': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Maurice',
        teams: [
            {
                team: [
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'rhyhorn',
                        ability: 'lightning-rod',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'black-belt-kendal': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Kendal',
        teams: [
            {
                team: [
                    {
                        slug: 'toxicroak',
                        ability: 'anticipation',
                        gender: 'male',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'battle-girl-tyler': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'battle-girl',
        name: 'Tyler',
        teams: [
            {
                team: [
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        ivs: 3,
                        level: 38,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'worker-brendon': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Brendon',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Relaxed,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Relaxed,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'worker-quentin': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Quentin',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        level: 34,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Timid,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-jonah': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-m',
        name: 'Jonah',
        teams: [
            {
                team: [
                    {
                        slug: 'quagsire',
                        ability: 'damp',
                        gender: 'male',
                        ivs: 6,
                        level: 35,
                        nature: Nature.Gentle,
                    },
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        ivs: 6,
                        level: 36,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'hippopotas',
                        ability: 'sand-stream',
                        gender: 'male',
                        ivs: 6,
                        level: 38,
                        nature: Nature.Rash,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-brenda': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-f',
        name: 'Brenda',
        teams: [
            {
                team: [
                    {
                        slug: 'lopunny',
                        ability: 'cute-charm',
                        gender: 'female',
                        ivs: 6,
                        level: 38,
                        nature: Nature.Quirky,
                    },
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'female',
                        ivs: 6,
                        level: 36,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        ivs: 6,
                        level: 35,
                        nature: Nature.Rash,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-iron-island': {
        metadata: [BattleMetadata.Optional, BattleMetadata.Tag],
        trainerClass: 'galactic-grunt-m',
        name: '12',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 3,
                        level: 34,
                        nature: Nature.Careful,
                    },
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'male',
                        ivs: 3,
                        level: 34,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 3,
                        level: 34,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-m',
            name: '12',
            teams: [
                {
                    team: [
                        {
                            slug: 'glameow',
                            ability: 'limber',
                            gender: 'female',
                            ivs: 3,
                            level: 34,
                            nature: Nature.Mild,
                        },
                        {
                            slug: 'stunky',
                            ability: 'stench',
                            gender: 'male',
                            ivs: 3,
                            level: 34,
                            nature: Nature.Jolly,
                        },
                        {
                            slug: 'croagunk',
                            ability: 'anticipation',
                            gender: 'male',
                            ivs: 3,
                            level: 34,
                            nature: Nature.Quiet,
                        },
                    ],
                },
            ],
        },
    },
    'galactic-grunt-m-jubilife-city': {
        metadata: [BattleMetadata.Tag],
        split: 'Gardenia',
        trainerClass: 'galactic-grunt-m',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Rash,
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
                            slug: 'stunky',
                            ability: 'stench',
                            gender: 'male',
                            level: 11,
                            nature: Nature.Timid,
                        },
                    ],
                },
            ],
        },
    },
    'pkmn-trainer-dawn-jubilife-city-tag': {
        metadata: [],
        split: 'Gardenia',
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
                        level: 13,
                        moves: ['bubble', 'pound'],
                        nature: Nature.Calm,
                        ivs: 3,
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
                        level: 13,
                        moves: ['absorb', 'tackle'],
                        nature: Nature.Sassy,
                        ivs: 3,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'blaze',
                        gender: 'male',
                        level: 13,
                        moves: ['ember', 'scratch'],
                        nature: Nature.Gentle,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-lucas-jubilife-city-tag': {
        metadata: [],
        split: 'Gardenia',
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
                        level: 13,
                        moves: ['bubble', 'pound'],
                        nature: Nature.Quiet,
                        ivs: 3,
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
                        level: 13,
                        moves: ['absorb', 'tackle'],
                        nature: Nature.Modest,
                        ivs: 3,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'blaze',
                        gender: 'male',
                        level: 13,
                        moves: ['ember', 'scratch'],
                        nature: Nature.Impish,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-lake-valor': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-f',
        name: '4',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        ivs: 3,
                        level: 35,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'female',
                        ivs: 3,
                        level: 35,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-lake-valor-1': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '13',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 3,
                        level: 37,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-lake-valor-2': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '14',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        ivs: 3,
                        level: 33,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        ivs: 3,
                        level: 33,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        ivs: 3,
                        level: 33,
                        nature: Nature.Rash,
                    },
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'male',
                        ivs: 3,
                        level: 33,
                        nature: Nature.Hardy,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-lake-verity-1': {
        metadata: [BattleMetadata.Double],
        split: 'Candice',
        trainerClass: 'galactic-grunt-m',
        name: '15',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        ivs: 3,
                        level: 37,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-f',
            name: '15',
            teams: [
                {
                    team: [
                        {
                            slug: 'glameow',
                            ability: 'limber',
                            gender: 'female',
                            ivs: 3,
                            level: 33,
                            nature: Nature.Jolly,
                            moves: [
                                'fury-swipes',
                                'feint-attack',
                                'growl',
                                'fake-out',
                            ],
                        },
                        {
                            slug: 'golbat',
                            ability: 'inner-focus',
                            gender: 'female',
                            ivs: 3,
                            level: 33,
                            nature: Nature.Serious,
                            moves: [
                                'air-cutter',
                                'wing-attack',
                                'bite',
                                'supersonic',
                            ],
                        },
                        {
                            slug: 'murkrow',
                            ability: 'insomnia',
                            gender: 'female',
                            ivs: 3,
                            level: 36,
                            nature: Nature.Rash,
                            moves: [
                                'feint-attack',
                                'night-shade',
                                'wing-attack',
                            ],
                        },
                    ],
                },
            ],
        },
    },
    'galactic-grunt-m-lake-verity-2': {
        metadata: [],
        split: 'Candice',
        trainerClass: 'galactic-grunt-m',
        name: '16',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        ivs: 3,
                        level: 35,
                        nature: Nature.Sassy,
                    },
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'male',
                        ivs: 3,
                        level: 35,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-lake-verity': {
        metadata: [],
        split: 'Candice',
        trainerClass: 'galactic-grunt-f',
        name: '5',
        teams: [
            {
                team: [
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'female',
                        ivs: 3,
                        level: 34,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        ivs: 3,
                        level: 36,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'commander-mars-lake-verity': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Candice',
        trainerClass: 'commander-mars',
        name: 'Mars',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 24,
                        level: 38,
                        nature: Nature.Modest,
                        moves: ['air-cutter', 'bite', 'toxic', 'supersonic'],
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        ivs: 24,
                        level: 38,
                        nature: Nature.Relaxed,
                        moves: [
                            'gyro-ball',
                            'extrasensory',
                            'iron-defense',
                            'confuse-ray',
                        ],
                    },
                    {
                        slug: 'purugly',
                        ability: 'thick-fat',
                        gender: 'female',
                        ivs: 24,
                        level: 40,
                        nature: Nature.Bashful,
                        moves: [
                            'slash',
                            'feint-attack',
                            'hypnosis',
                            'fake-out',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
    },
    'elite-four-lucian': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        trainerClass: 'elite-four-lucian',
        name: 'Lucian',
        teams: [
            {
                team: [
                    {
                        slug: 'mr-mime',
                        ability: 'soundproof',
                        gender: 'male',
                        ivs: 30,
                        level: 53,
                        nature: Nature.Hasty,
                        moves: [
                            'psychic',
                            'thunderbolt',
                            'reflect',
                            'light-screen',
                        ],
                    },
                    {
                        slug: 'espeon',
                        ability: 'synchronize',
                        gender: 'male',
                        ivs: 30,
                        level: 55,
                        nature: Nature.Hardy,
                        moves: [
                            'psychic',
                            'shadow-ball',
                            'quick-attack',
                            'signal-beam',
                        ],
                    },
                    {
                        slug: 'bronzong',
                        ability: 'levitate',
                        ivs: 30,
                        level: 54,
                        nature: Nature.Naive,
                        moves: [
                            'psychic',
                            'gyro-ball',
                            'earthquake',
                            'calm-mind',
                        ],
                    },
                    {
                        slug: 'alakazam',
                        ability: 'synchronize',
                        gender: 'male',
                        ivs: 30,
                        level: 56,
                        nature: Nature.Hardy,
                        moves: [
                            'psychic',
                            'energy-ball',
                            'focus-blast',
                            'recover',
                        ],
                    },
                    {
                        slug: 'gallade',
                        ability: 'steadfast',
                        gender: 'male',
                        ivs: 30,
                        level: 59,
                        nature: Nature.Careful,
                        moves: [
                            'drain-punch',
                            'psycho-cut',
                            'leaf-blade',
                            'stone-edge',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                name: 'Full Restore',
            },
        ],
    },
    'galactic-grunt-f-mt-coronet-1': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-f',
        name: '9',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Bold,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-1': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-m',
        name: '24',
        teams: [
            {
                team: [
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Rash,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-2': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-m',
        name: '25',
        teams: [
            {
                team: [
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Hasty,
                        moves: [
                            'beat-up',
                            'fire-fang',
                            'feint-attack',
                            'embargo',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Serious,
                        moves: [
                            'confuse-ray',
                            'air-cutter',
                            'mean-look',
                            'poison-fang',
                        ],
                        ivs: 3,
                    },
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Hasty,
                        moves: [
                            'beat-up',
                            'fire-fang',
                            'feint-attack',
                            'embargo',
                        ],
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-3': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-m',
        name: '26',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Brave,
                        ivs: 3,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Serious,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-4': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-m',
        name: '27',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Docile,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-mt-coronet-2': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-f',
        name: '10',
        teams: [
            {
                team: [
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Quirky,
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Calm,
                        ivs: 3,
                    },
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Quirky,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-5': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-m',
        name: '28',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Modest,
                        ivs: 3,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Hasty,
                        ivs: 3,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Serious,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-mt-coronet-3': {
        metadata: [],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-f',
        name: '11',
        teams: [
            {
                team: [
                    {
                        slug: 'houndour',
                        ability: 'early-bird',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Timid,
                        ivs: 3,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Modest,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-mt-coronet-6': {
        metadata: [],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-m',
        name: '29',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Hasty,
                        ivs: 3,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Docile,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-mt-coronet-4': {
        metadata: [],
        split: 'Volkner',
        trainerClass: 'galactic-grunt-f',
        name: '12',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Quirky,
                        ivs: 3,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Quirky,
                        ivs: 3,
                    },
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Calm,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'camper-curtis': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'camper',
        name: 'Curtis',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'picnicker-diana': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'picnicker',
        name: 'Diana',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 9,
                        nature: Nature.Modest,
                    },
                ],
            },
        ],
    },
    'veteran-grant': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'veteran',
        name: 'Grant',
        teams: [
            {
                team: [
                    {
                        slug: 'riolu',
                        ability: 'steadfast',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Rash,
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
                        level: 34,
                        nature: Nature.Bold,
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
    'youngster-jonathon': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Jonathon',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 11,
                        moves: ['tackle', 'defense-curl'],
                        nature: Nature.Timid,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'youngster-darius': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Darius',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 9,
                        moves: ['tackle', 'defense-curl'],
                        nature: Nature.Calm,
                        ivs: 1,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 9,
                        moves: ['rock-throw', 'tackle', 'harden'],
                        nature: Nature.Bashful,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'leader-roark': {
        metadata: [BattleMetadata.Boss],
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
                        moves: ['stealth-rock', 'rock-throw'],
                        nature: Nature.Lax,
                        ivs: 6,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 12,
                        moves: ['stealth-rock', 'rock-throw', 'screech'],
                        nature: Nature.Bold,
                        ivs: 6,
                    },
                    {
                        slug: 'cranidos',
                        ability: 'mold-breaker',
                        gender: 'male',
                        level: 14,
                        moves: ['headbutt', 'pursuit', 'leer'],
                        nature: Nature.Jolly,
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
    'worker-colin': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Colin',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Timid,
                    },
                ],
            },
        ],
    },
    'worker-mason': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'worker',
        name: 'Mason',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Brave,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-barry-pastoria-city': {
        metadata: [BattleMetadata.Miniboss],
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
                        ivs: 9,
                        level: 34,
                        nature: Nature.Quirky,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 9,
                        level: 32,
                        nature: Nature.Mild,
                        moves: ['aqua-jet', 'quick-attack', 'pursuit', 'growl'],
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        ivs: 9,
                        level: 32,
                        nature: Nature.Brave,
                        moves: [
                            'mega-drain',
                            'poison-sting',
                            'leech-seed',
                            'magical-leaf',
                        ],
                    },
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        ivs: 9,
                        level: 36,
                        nature: Nature.Timid,
                        moves: [
                            'flame-wheel',
                            'mach-punch',
                            'fury-swipes',
                            'leer',
                        ],
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
                        ivs: 9,
                        level: 34,
                        nature: Nature.Bashful,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        ivs: 9,
                        level: 32,
                        nature: Nature.Gentle,
                        moves: [
                            'mega-drain',
                            'poison-sting',
                            'leech-seed',
                            'magical-leaf',
                        ],
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        ivs: 9,
                        level: 32,
                        nature: Nature.Docile,
                        moves: ['ember', 'stomp', 'tail-whip', 'growl'],
                    },
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        ivs: 9,
                        level: 36,
                        nature: Nature.Quirky,
                        moves: ['bubble-beam', 'peck', 'metal-claw', 'growl'],
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
                        ivs: 9,
                        level: 34,
                        nature: Nature.Naive,
                        moves: [
                            'wing-attack',
                            'quick-attack',
                            'endeavor',
                            'double-team',
                        ],
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 9,
                        level: 32,
                        nature: Nature.Mild,
                        moves: ['aqua-jet', 'quick-attack', 'pursuit', 'growl'],
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        ivs: 9,
                        level: 32,
                        nature: Nature.Serious,
                        moves: ['ember', 'stomp', 'tail-whip', 'growl'],
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        ivs: 9,
                        level: 36,
                        nature: Nature.Docile,
                        moves: ['razor-leaf', 'bite', 'mega-drain', 'withdraw'],
                    },
                ],
            },
        ],
    },
    'tuber-m-jacky': {
        metadata: [],
        trainerClass: 'tuber-m',
        name: 'Jacky',
        teams: [
            {
                team: [
                    {
                        slug: 'bibarel',
                        ability: 'simple',
                        gender: 'male',
                        ivs: 1,
                        level: 32,
                        nature: Nature.Hasty,
                        moves: ['water-gun', 'rollout', 'hyper-fang', 'yawn'],
                    },
                ],
            },
        ],
    },
    'fisherman-walter': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Walter',
        teams: [
            {
                team: [
                    {
                        slug: 'whiscash',
                        ability: 'oblivious',
                        gender: 'male',
                        ivs: 1,
                        level: 33,
                        nature: Nature.Brave,
                        moves: ['water-pulse', 'magnitude'],
                    },
                ],
            },
        ],
    },
    'sailor-damian': {
        metadata: [],
        trainerClass: 'sailor',
        name: 'Damian',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        ivs: 1,
                        level: 31,
                        nature: Nature.Bashful,
                        moves: ['water-pulse', 'wing-attack', 'quick-attack'],
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        ivs: 1,
                        level: 31,
                        nature: Nature.Naive,
                        moves: ['water-pulse', 'wing-attack', 'quick-attack'],
                    },
                ],
            },
        ],
    },
    'tuber-f-caitlyn': {
        metadata: [],
        trainerClass: 'tuber-f',
        name: 'Caitlyn',
        teams: [
            {
                team: [
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        ivs: 1,
                        level: 27,
                        nature: Nature.Jolly,
                        moves: ['water-gun', 'slam', 'charm'],
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        ivs: 1,
                        level: 29,
                        nature: Nature.Naughty,
                        moves: [
                            'bubble-beam',
                            'rollout',
                            'defense-curl',
                            'aqua-ring',
                        ],
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        ivs: 1,
                        level: 31,
                        nature: Nature.Careful,
                        moves: [
                            'bubble-beam',
                            'double-edge',
                            'rollout',
                            'aqua-ring',
                        ],
                    },
                ],
            },
        ],
    },
    'fisherman-erick': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Erick',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 1,
                        level: 28,
                        nature: Nature.Impish,
                        moves: ['water-pulse', 'peck', 'flail', 'supersonic'],
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 1,
                        level: 31,
                        nature: Nature.Hasty,
                        moves: [
                            'water-pulse',
                            'fury-attack',
                            'flail',
                            'supersonic',
                        ],
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        ivs: 1,
                        level: 31,
                        nature: Nature.Bashful,
                        moves: ['thrash', 'bite'],
                    },
                ],
            },
        ],
    },
    'sailor-samson': {
        metadata: [],
        trainerClass: 'sailor',
        name: 'Samson',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        ivs: 1,
                        level: 29,
                        nature: Nature.Brave,
                        moves: ['water-pulse', 'wing-attack', 'supersonic'],
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        ivs: 1,
                        level: 30,
                        nature: Nature.Brave,
                        moves: ['water-pulse', 'mud-bomb', 'rain-dance'],
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'male',
                        ivs: 1,
                        level: 31,
                        nature: Nature.Lax,
                        moves: ['fury-swipes', 'confusion', 'water-pulse'],
                    },
                ],
            },
        ],
    },
    'leader-wake': {
        metadata: [BattleMetadata.Boss],
        trainerClass: 'leader-wake',
        name: 'Wake',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        ivs: 18,
                        level: 33,
                        nature: Nature.Lax,
                        moves: ['waterfall', 'brine', 'bite', 'twister'],
                    },
                    {
                        slug: 'quagsire',
                        ability: 'damp',
                        gender: 'male',
                        ivs: 18,
                        level: 34,
                        nature: Nature.Naughty,
                        moves: ['mud-shot', 'rock-tomb', 'water-pulse', 'yawn'],
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 18,
                        level: 37,
                        nature: Nature.Naughty,
                        moves: ['brine', 'ice-fang', 'crunch', 'aqua-jet'],
                        heldItem: 'sitrus-berry',
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
    'pkmn-trainer-barry-pokemon-league-lobby': {
        metadata: [BattleMetadata.Miniboss],
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
                        ivs: 24,
                        level: 48,
                        nature: Nature.Careful,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'steel-wing',
                            'u-turn',
                        ],
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 24,
                        level: 47,
                        nature: Nature.Hardy,
                        moves: [
                            'aqua-jet',
                            'crunch',
                            'ice-fang',
                            'brick-break',
                        ],
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 24,
                        level: 48,
                        nature: Nature.Hardy,
                        moves: [
                            'close-combat',
                            'rock-slide',
                            'night-slash',
                            'aerial-ace',
                        ],
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'male',
                        ivs: 24,
                        level: 47,
                        nature: Nature.Rash,
                        moves: [
                            'poison-jab',
                            'giga-drain',
                            'shadow-ball',
                            'grass-whistle',
                        ],
                    },
                    {
                        slug: 'snorlax',
                        ability: 'immunity',
                        gender: 'male',
                        ivs: 24,
                        level: 49,
                        nature: Nature.Naughty,
                        moves: ['body-slam', 'crunch', 'earthquake', 'rest'],
                    },
                    {
                        slug: 'infernape',
                        ability: 'blaze',
                        gender: 'male',
                        ivs: 24,
                        level: 51,
                        nature: Nature.Rash,
                        moves: [
                            'flamethrower',
                            'focus-blast',
                            'shadow-claw',
                            'aerial-ace',
                        ],
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
                        ivs: 24,
                        level: 48,
                        nature: Nature.Quiet,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'steel-wing',
                            'u-turn',
                        ],
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'male',
                        ivs: 24,
                        level: 47,
                        nature: Nature.Rash,
                        moves: [
                            'poison-jab',
                            'giga-drain',
                            'shadow-ball',
                            'grass-whistle',
                        ],
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 24,
                        level: 48,
                        nature: Nature.Timid,
                        moves: [
                            'close-combat',
                            'rock-slide',
                            'night-slash',
                            'aerial-ace',
                        ],
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        ivs: 24,
                        level: 47,
                        nature: Nature.Modest,
                        moves: [
                            'fire-blast',
                            'sunny-day',
                            'bounce',
                            'will-o-wisp',
                        ],
                    },
                    {
                        slug: 'snorlax',
                        ability: 'immunity',
                        gender: 'male',
                        ivs: 24,
                        level: 49,
                        nature: Nature.Careful,
                        moves: ['body-slam', 'crunch', 'earthquake', 'rest'],
                    },
                    {
                        slug: 'empoleon',
                        ability: 'torrent',
                        gender: 'male',
                        ivs: 24,
                        level: 51,
                        nature: Nature.Quiet,
                        moves: [
                            'brine',
                            'aerial-ace',
                            'metal-claw',
                            'shadow-claw',
                        ],
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
                        ivs: 24,
                        level: 48,
                        nature: Nature.Relaxed,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'steel-wing',
                            'u-turn',
                        ],
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 24,
                        level: 47,
                        nature: Nature.Hardy,
                        moves: [
                            'aqua-jet',
                            'crunch',
                            'ice-fang',
                            'brick-break',
                        ],
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 24,
                        level: 48,
                        nature: Nature.Docile,
                        moves: [
                            'close-combat',
                            'rock-slide',
                            'night-slash',
                            'aerial-ace',
                        ],
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        ivs: 24,
                        level: 47,
                        nature: Nature.Bold,
                        moves: [
                            'fire-blast',
                            'sunny-day',
                            'bounce',
                            'will-o-wisp',
                        ],
                    },
                    {
                        slug: 'snorlax',
                        ability: 'immunity',
                        gender: 'male',
                        ivs: 24,
                        level: 49,
                        nature: Nature.Rash,
                        moves: ['body-slam', 'crunch', 'earthquake', 'rest'],
                    },
                    {
                        slug: 'torterra',
                        ability: 'overgrow',
                        gender: 'male',
                        ivs: 24,
                        level: 51,
                        nature: Nature.Modest,
                        moves: [
                            'leaf-storm',
                            'earthquake',
                            'crunch',
                            'synthesis',
                        ],
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-barry-route-201': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'blaze',
                        gender: 'male',
                        level: 5,
                        moves: ['scratch', 'leer'],
                        nature: Nature.Calm,
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
                        nature: Nature.Bashful,
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
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'youngster-tristan': {
        metadata: [],
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
                    },
                ],
            },
        ],
    },
    'lass-natalie': {
        metadata: [],
        trainerClass: 'lass',
        name: 'Natalie',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 5,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'youngster-logan': {
        metadata: [],
        trainerClass: 'youngster',
        name: 'Logan',
        teams: [
            {
                team: [
                    {
                        slug: 'burmy',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Impish,
                        moves: ['tackle'],
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-barry-route-203': {
        metadata: [BattleMetadata.Miniboss],
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
                        moves: ['quick-attack', 'growl'],
                        nature: Nature.Naughty,
                        ivs: 3,
                    },
                    {
                        slug: 'chimchar',
                        ability: 'blaze',
                        gender: 'male',
                        level: 9,
                        moves: ['scratch', 'leer'],
                        nature: Nature.Docile,
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
                        moves: ['quick-attack', 'growl'],
                        nature: Nature.Naive,
                        ivs: 3,
                    },
                    {
                        slug: 'piplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 9,
                        moves: ['pound', 'growl'],
                        nature: Nature.Naughty,
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
                        moves: ['quick-attack', 'growl'],
                        nature: Nature.Timid,
                        ivs: 3,
                    },
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 9,
                        moves: ['tackle', 'withdraw'],
                        nature: Nature.Brave,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'youngster-michael': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Michael',
        teams: [
            {
                team: [
                    {
                        slug: 'kricketot',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'youngster-dallas': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Dallas',
        teams: [
            {
                team: [
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'youngster-sebastian': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Sebastian',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 8,
                        moves: ['low-kick', 'leer'],
                        nature: Nature.Relaxed,
                    },
                ],
            },
        ],
    },
    'lass-kaitlin': {
        metadata: [BattleMetadata.Optional],
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
                    },
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 4,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 4,
                        nature: Nature.Quirky,
                    },
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 4,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'lass-madeline': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lass',
        name: 'Madeline',
        teams: [
            {
                team: [
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 8,
                        nature: Nature.Relaxed,
                    },
                ],
            },
        ],
    },
    'lass-sarah': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lass',
        name: 'Sarah',
        teams: [
            {
                team: [
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'female',
                        level: 7,
                        moves: ['tackle', 'leer'],
                        nature: Nature.Hardy,
                    },
                ],
            },
        ],
    },
    'youngster-tyler': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Tyler',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 8,
                        moves: ['splash'],
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'lass-samantha': {
        metadata: [BattleMetadata.Optional],
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
                        moves: ['absorb', 'growth', 'water-sport'],
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'aroma-lady-taylor': {
        metadata: [BattleMetadata.Optional],
        split: 'Gardenia',
        trainerClass: 'aroma-lady',
        name: 'Taylor',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 9,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'cherubi',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'bug-catcher-brandon': {
        metadata: [BattleMetadata.Optional],
        split: 'Gardenia',
        trainerClass: 'bug-catcher',
        name: 'Brandon',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Quirky,
                    },
                    {
                        slug: 'kricketot',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 11,
                        moves: ['bide'],
                        nature: Nature.Modest,
                    },
                ],
            },
        ],
    },
    'twins-liv-and-liz': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Gardenia',
        trainerClass: 'twins',
        name: 'Liv & Liz',
        teams: [
            {
                team: [
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Brave,
                    },
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Brave,
                    },
                ],
            },
        ],
    },
    'camper-jacob': {
        metadata: [BattleMetadata.Optional],
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
                    },
                ],
            },
        ],
    },
    'hiker-daniel': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Daniel',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'aroma-lady-elizabeth': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'aroma-lady',
        name: 'Elizabeth',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Rash,
                        moves: ['growth', 'mega-drain'],
                    },
                ],
            },
        ],
    },
    'picnicker-siena': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'picnicker',
        name: 'Siena',
        teams: [
            {
                team: [
                    {
                        slug: 'bidoof',
                        ability: 'simple',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'camper-zackary': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'camper',
        name: 'Zackary',
        teams: [
            {
                team: [
                    {
                        slug: 'aipom',
                        ability: 'run-away',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Quirky,
                    },
                ],
            },
        ],
    },
    'hiker-nicholas': {
        metadata: [BattleMetadata.Optional],
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
                    },
                ],
            },
        ],
    },
    'battle-girl-kelsey': {
        metadata: [BattleMetadata.Optional],
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
                        nature: Nature.Serious,
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'picnicker-karina': {
        metadata: [BattleMetadata.Optional],
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
                    },
                ],
            },
        ],
    },
    'fisherman-joseph': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Joseph',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'fisherman-andrew': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Andrew',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'fisherman-zachary': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Zachary',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'cyclist-m-axel': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cyclist-m',
        name: 'Axel',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'cyclist-f-megan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cyclist-f',
        name: 'Megan',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Serious,
                    },
                ],
            },
        ],
    },
    'cyclist-m-james': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cyclist-m',
        name: 'James',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'cyclist-f-nicole': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cyclist-f',
        name: 'Nicole',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Quirky,
                    },
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'cyclist-m-john': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cyclist-m',
        name: 'John',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Modest,
                    },
                ],
            },
        ],
    },
    'cyclist-m-ryan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cyclist-m',
        name: 'Ryan',
        teams: [
            {
                team: [
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'cyclist-f-rachel': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cyclist-f',
        name: 'Rachel',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'cyclist-f-kayla': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cyclist-f',
        name: 'Kayla',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Modest,
                    },
                ],
            },
        ],
    },
    'hiker-theodore': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Theodore',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Gentle,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'picnicker-lauren': {
        metadata: [BattleMetadata.Optional],
        split: 'Fantina',
        trainerClass: 'picnicker',
        name: 'Lauren',
        teams: [
            {
                team: [
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Bold,
                        moves: ['spark', 'quick-attack', 'charm'],
                    },
                ],
            },
        ],
    },
    'camper-anthony': {
        metadata: [BattleMetadata.Optional],
        split: 'Fantina',
        trainerClass: 'camper',
        name: 'Anthony',
        teams: [
            {
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'blaze',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'hiker-justin': {
        metadata: [BattleMetadata.Optional],
        split: 'Fantina',
        trainerClass: 'hiker',
        name: 'Justin',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'nosepass',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Serious,
                    },
                ],
            },
        ],
    },
    'youngster-austin': {
        metadata: [BattleMetadata.Optional],
        split: 'Fantina',
        trainerClass: 'youngster',
        name: 'Austin',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Bold,
                    },
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'gligar',
                        ability: 'hyper-cutter',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'hiker-kevin': {
        metadata: [BattleMetadata.Optional],
        split: 'Fantina',
        trainerClass: 'hiker',
        name: 'Kevin',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'battle-girl-helen': {
        metadata: [BattleMetadata.Optional],
        split: 'Fantina',
        trainerClass: 'battle-girl',
        name: 'Helen',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Lonely,
                        ivs: 2,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Serious,
                        ivs: 2,
                    },
                ],
            },
        ],
    },
    'hiker-jonathan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Jonathan',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'black-belt-kyle': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Kyle',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Jolly,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'hiker-robert': {
        metadata: [],
        trainerClass: 'hiker',
        name: 'Robert',
        teams: [
            {
                team: [
                    {
                        slug: 'nosepass',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'aroma-lady-hannah': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'aroma-lady',
        name: 'Hannah',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'combee',
                        ability: 'honey-gather',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'artist-william': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'artist',
        name: 'William',
        teams: [
            {
                team: [
                    {
                        slug: 'mime-jr',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'bonsly',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'fisherman-cody': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'fisherman',
        name: 'Cody',
        teams: [
            {
                team: [
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Relaxed,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'hiker-alexander': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'hiker',
        name: 'Alexander',
        teams: [
            {
                team: [
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'probopass',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-m-albert': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pkmn-breeder-m',
        name: 'Albert',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Sassy,
                    },
                    {
                        slug: 'bonsly',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'pichu',
                        ability: 'static',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'eevee',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Brave,
                    },
                ],
            },
        ],
    },
    'jogger-richard': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'jogger',
        name: 'Richard',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'twins-emma-and-lil': {
        metadata: [BattleMetadata.TrueDouble],
        trainerClass: 'twins',
        name: 'Emma & Lil',
        teams: [
            {
                team: [
                    {
                        slug: 'bonsly',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'mime-jr',
                        ability: 'soundproof',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'poke-kid-danielle': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'poke-kid',
        name: 'Danielle',
        teams: [
            {
                team: [
                    {
                        slug: 'pichu',
                        ability: 'static',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'jogger-raul': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'jogger',
        name: 'Raul',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-f-jennifer': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pkmn-breeder-f',
        name: 'Jennifer',
        teams: [
            {
                team: [
                    {
                        slug: 'budew',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Modest,
                    },
                    {
                        slug: 'mime-jr',
                        ability: 'soundproof',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Brave,
                    },
                    {
                        slug: 'cleffa',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Brave,
                    },
                    {
                        slug: 'eevee',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'cowgirl-shelley': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'cowgirl',
        name: 'Shelley',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'young-couple-ty-and-sue': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        trainerClass: 'young-couple',
        name: 'Ty & Sue',
        teams: [
            {
                team: [
                    {
                        slug: 'buneary',
                        ability: 'run-away',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'youngster-oliver': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Oliver',
        teams: [
            {
                team: [
                    {
                        slug: 'mothim',
                        ability: 'swarm',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'chatot',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'roughneck-kirby': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'roughneck',
        name: 'Kirby',
        teams: [
            {
                team: [
                    {
                        slug: 'cleffa',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'pokefan-m-leonard': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pokefan-m',
        name: 'Leonard',
        teams: [
            {
                team: [
                    {
                        slug: 'pichu',
                        ability: 'static',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Calm,
                        heldItem: 'sitrus-berry',
                    },
                    {
                        slug: 'pichu',
                        ability: 'static',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Calm,
                        heldItem: 'sitrus-berry',
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Serious,
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Full Heal',
            },
            {
                count: 1,
                name: 'Super Potion',
            },
        ],
    },
    'pokefan-f-rebekah': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pokefan-f',
        name: 'Rebekah',
        teams: [
            {
                team: [
                    {
                        slug: 'bonsly',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Docile,
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Full Heal',
            },
            {
                count: 1,
                name: 'Super Potion',
            },
        ],
    },
    'belle-and-pa-beth-and-bob': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        trainerClass: 'belle-and-pa',
        name: 'Beth & Bob',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
    },
    'young-couple-mike-and-nat': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        trainerClass: 'young-couple',
        name: 'Mike & Nat',
        teams: [
            {
                team: [
                    {
                        slug: 'murkrow',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'misdreavus',
                        ability: 'levitate',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'rancher-marco': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'rancher',
        name: 'Marco',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'jogger-wyatt': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'jogger',
        name: 'Wyatt',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'belle-and-pa-ava-and-matt': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        trainerClass: 'belle-and-pa',
        name: 'Ava & Matt',
        teams: [
            {
                team: [
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'twins-teri-and-tia': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        trainerClass: 'twins',
        name: 'Teri & Tia',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-m-kahlil': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pkmn-breeder-m',
        name: 'Kahlil',
        teams: [
            {
                team: [
                    {
                        slug: 'elekid',
                        ability: 'static',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Gentle,
                    },
                    {
                        slug: 'happiny',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Bold,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-f-amber': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pkmn-breeder-f',
        name: 'Amber',
        teams: [
            {
                team: [
                    {
                        slug: 'magby',
                        ability: 'flame-body',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Brave,
                    },
                    {
                        slug: 'togepi',
                        ability: 'hustle',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Modest,
                    },
                ],
            },
        ],
    },
    'ninja-boy-brennan': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ninja-boy',
        name: 'Brennan',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Naive,
                    },
                ],
            },
        ],
    },
    'ninja-boy-fabian': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ninja-boy',
        name: 'Fabian',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Naive,
                    },
                ],
            },
        ],
    },
    'ninja-boy-bruce': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ninja-boy',
        name: 'Bruce',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Modest,
                    },
                ],
            },
        ],
    },
    'ninja-boy-joel': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ninja-boy',
        name: 'Joel',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Hardy,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-alyssa': {
        metadata: [],
        split: 'Byron',
        trainerClass: 'ace-trainer-f',
        name: 'Alyssa',
        teams: [
            {
                team: [
                    {
                        slug: 'aipom',
                        ability: 'run-away',
                        gender: 'female',
                        ivs: 6,
                        level: 32,
                        nature: Nature.Bashful,
                        moves: [
                            'swift',
                            'water-pulse',
                            'shock-wave',
                            'aerial-ace',
                        ],
                    },
                    {
                        slug: 'girafarig',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 6,
                        level: 32,
                        nature: Nature.Rash,
                        moves: [
                            'double-hit',
                            'psybeam',
                            'assurance',
                            'light-screen',
                        ],
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        ivs: 6,
                        level: 33,
                        nature: Nature.Timid,
                        moves: ['mega-drain', 'bite', 'curse'],
                    },
                ],
            },
        ],
    },
    'double-team-zac-and-jen': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Byron',
        trainerClass: 'double-team',
        name: 'Zac & Jen',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        ivs: 6,
                        level: 36,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'male',
                        ivs: 6,
                        level: 36,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-ernest': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ace-trainer-m',
        name: 'Ernest',
        teams: [
            {
                team: [
                    {
                        slug: 'scyther',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 6,
                        level: 32,
                        nature: Nature.Bashful,
                        moves: [
                            'slash',
                            'wing-attack',
                            'pursuit',
                            'quick-attack',
                        ],
                    },
                    {
                        slug: 'probopass',
                        ability: 'sturdy',
                        gender: 'male',
                        ivs: 6,
                        level: 31,
                        nature: Nature.Jolly,
                        moves: [
                            'thunder-wave',
                            'rock-slide',
                            'magnet-bomb',
                            'iron-defense',
                        ],
                    },
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        ivs: 6,
                        level: 34,
                        nature: Nature.Brave,
                        moves: [
                            'thunderbolt',
                            'crunch',
                            'swagger',
                            'double-team',
                        ],
                    },
                ],
            },
        ],
    },
    'ninja-boy-davido': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ninja-boy',
        name: 'Davido',
        teams: [
            {
                team: [
                    {
                        slug: 'mothim',
                        ability: 'swarm',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Rash,
                    },
                ],
            },
        ],
    },
    'black-belt-adam': {
        metadata: [],
        split: 'Byron',
        trainerClass: 'black-belt',
        name: 'Adam',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        ivs: 3,
                        level: 34,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'ninja-boy-nathan': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ninja-boy',
        name: 'Nathan',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'bird-keeper-brianna': {
        metadata: [],
        split: 'Byron',
        trainerClass: 'bird-keeper',
        name: 'Brianna',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        ivs: 6,
                        level: 31,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'noctowl',
                        ability: 'insomnia',
                        gender: 'male',
                        ivs: 6,
                        level: 33,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'veteran-brian': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'veteran',
        name: 'Brian',
        teams: [
            {
                team: [
                    {
                        slug: 'tangela',
                        ability: 'chlorophyll',
                        gender: 'male',
                        ivs: 12,
                        level: 32,
                        nature: Nature.Adamant,
                        moves: [
                            'ingrain',
                            'giga-drain',
                            'ancient-power',
                            'toxic',
                        ],
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        ivs: 12,
                        level: 32,
                        nature: Nature.Quiet,
                        moves: ['fire-spin', 'stomp', 'take-down'],
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 12,
                        level: 32,
                        nature: Nature.Brave,
                        moves: [
                            'aqua-jet',
                            'whirlpool',
                            'pursuit',
                            'quick-attack',
                        ],
                    },
                ],
            },
        ],
    },
    'dragon-tamer-patrick': {
        metadata: [BattleMetadata.Optional],
        split: 'Volkner',
        trainerClass: 'dragon-tamer',
        name: 'Patrick',
        teams: [
            {
                team: [
                    {
                        slug: 'gible',
                        ability: 'sand-veil',
                        gender: 'male',
                        ivs: 6,
                        level: 34,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'ninja-boy-zach': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ninja-boy',
        name: 'Zach',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Serious,
                    },
                ],
            },
        ],
    },
    'hiker-louis': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Louis',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Brave,
                    },
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Relaxed,
                    },
                ],
            },
        ],
    },
    'bird-keeper-alexandra': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'bird-keeper',
        name: 'Alexandra',
        teams: [
            {
                team: [
                    {
                        slug: 'starly',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Naive,
                    },
                ],
            },
        ],
    },
    'bird-keeper-katherine': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'bird-keeper',
        name: 'Katherine',
        teams: [
            {
                team: [
                    {
                        slug: 'noctowl',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quirky,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-harry': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ruin-maniac',
        name: 'Harry',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 28,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 30,
                        nature: Nature.Modest,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 32,
                        nature: Nature.Impish,
                    },
                ],
            },
        ],
    },
    'ninja-boy-nick': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'ninja-boy',
        name: 'Nick',
        teams: [
            {
                team: [
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'black-belt-sean': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'black-belt',
        name: 'Sean',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Serious,
                        ivs: 3,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Quirky,
                        ivs: 3,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Quirky,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-m-taylor': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pkmn-ranger-m',
        name: 'Taylor',
        teams: [
            {
                team: [
                    {
                        slug: 'carnivine',
                        ability: 'levitate',
                        gender: 'male',
                        ivs: 6,
                        level: 28,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        ivs: 6,
                        level: 30,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'scientist-shaun': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'scientist',
        name: 'Shaun',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        level: 30,
                        nature: Nature.Bold,
                        moves: ['spark', 'magnet-bomb'],
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Careful,
                        moves: [
                            'psybeam',
                            'disable',
                            'kinesis',
                            'thunder-punch',
                        ],
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'X Attack',
            },
        ],
    },
    'parasol-lady-sabrina': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'parasol-lady',
        name: 'Sabrina',
        teams: [
            {
                team: [
                    {
                        slug: 'wooper',
                        ability: 'damp',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'quagsire',
                        ability: 'damp',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'parasol-lady-alexa': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'parasol-lady',
        name: 'Alexa',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Rash,
                    },
                    {
                        slug: 'bibarel',
                        ability: 'simple',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'fisherman-juan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Juan',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'fisherman-josh': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Josh',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
    },
    'fisherman-travis': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Travis',
        teams: [
            {
                team: [
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Careful,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'collector-dean': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'collector',
        name: 'Dean',
        teams: [
            {
                team: [
                    {
                        slug: 'umbreon',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'espeon',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Quirky,
                    },
                ],
            },
        ],
    },
    'policeman-danny': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'policeman',
        name: 'Danny',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'scientist-stefano': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'scientist',
        name: 'Stefano',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Rash,
                        moves: ['psybeam', 'disable', 'kinesis', 'ice-punch'],
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'X Defend',
            },
        ],
    },
    'pkmn-ranger-f-allison': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pkmn-ranger-f',
        name: 'Allison',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        ivs: 6,
                        level: 29,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'leafeon',
                        ability: 'leaf-guard',
                        gender: 'male',
                        ivs: 6,
                        level: 29,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-m-jeffrey': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pkmn-ranger-m',
        name: 'Jeffrey',
        teams: [
            {
                team: [
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        ivs: 6,
                        level: 31,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'policeman-caleb': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'policeman',
        name: 'Caleb',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'gentleman-jeremy': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'gentleman',
        name: 'Jeremy',
        teams: [
            {
                team: [
                    {
                        slug: 'chatot',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Full Restore',
            },
        ],
    },
    'socialite-reina': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'socialite',
        name: 'Reina',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Full Restore',
            },
        ],
    },
    'policeman-dylan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'policeman',
        name: 'Dylan',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Calm,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Rash,
                    },
                ],
            },
        ],
    },
    'rich-boy-jason': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'rich-boy',
        name: 'Jason',
        teams: [
            {
                team: [
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Full Restore',
            },
        ],
    },
    'lady-melissa': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lady',
        name: 'Melissa',
        teams: [
            {
                team: [
                    {
                        slug: 'cherubi',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Naive,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Full Restore',
            },
        ],
    },
    'policeman-alex': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'policeman',
        name: 'Alex',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Rash,
                    },
                ],
            },
        ],
    },
    'policeman-bobby': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'policeman',
        name: 'Bobby',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Rash,
                    },
                ],
            },
        ],
    },
    'tuber-f-chelsea': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'tuber-f',
        name: 'Chelsea',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'tuber-m-jared': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'tuber-m',
        name: 'Jared',
        teams: [
            {
                team: [
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quirky,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quirky,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Naive,
                    },
                ],
            },
        ],
    },
    'fisherman-kenneth': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Kenneth',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hasty,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hasty,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Naive,
                    },
                ],
            },
        ],
    },
    'beauty-cyndy': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'beauty',
        name: 'Cyndy',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Hardy,
                    },
                ],
            },
        ],
    },
    'swimmer-f-haley': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Haley',
        teams: [
            {
                team: [
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'sailor-paul': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'sailor',
        name: 'Paul',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quirky,
                    },
                ],
            },
        ],
    },
    'swimmer-m-evan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Evan',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'swimmer-f-mary': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Mary',
        teams: [
            {
                team: [
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Relaxed,
                    },
                ],
            },
        ],
    },
    'swimmer-m-sheltin': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Sheltin',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'psychic-f-abigail': {
        metadata: [],
        trainerClass: 'psychic-f',
        name: 'Abigail',
        teams: [
            {
                team: [
                    {
                        slug: 'chingling',
                        ability: 'levitate',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'drifloon',
                        ability: 'aftermath',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'pi-carlos': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'pi',
        name: 'Carlos',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        ivs: 6,
                        level: 30,
                        nature: Nature.Lax,
                        moves: ['horn-drill', 'flail'],
                    },
                ],
            },
        ],
    },
    'collector-brady': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'collector',
        name: 'Brady',
        teams: [
            {
                team: [
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Relaxed,
                    },
                    {
                        slug: 'tangela',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'yanma',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'carnivine',
                        ability: 'levitate',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Gentle,
                    },
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Relaxed,
                    },
                ],
            },
        ],
    },
    'beauty-devon': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'beauty',
        name: 'Devon',
        teams: [
            {
                team: [
                    {
                        slug: 'wormadam-plant',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'wormadam-sandy',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'wormadam-trash',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-bryan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ruin-maniac',
        name: 'Bryan',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 24,
                        nature: Nature.Relaxed,
                    },
                    {
                        slug: 'cranidos',
                        ability: 'mold-breaker',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Naive,
                    },
                ],
            },
        ],
    },
    'psychic-m-mitchell': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'psychic-m',
        name: 'Mitchell',
        teams: [
            {
                team: [
                    {
                        slug: 'duskull',
                        ability: 'levitate',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Sassy,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Impish,
                    },
                ],
            },
        ],
    },
    'collector-jamal': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'collector',
        name: 'Jamal',
        teams: [
            {
                team: [
                    {
                        slug: 'porygon',
                        ability: 'trace',
                        level: 27,
                        nature: Nature.Timid,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-ronald': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ruin-maniac',
        name: 'Ronald',
        teams: [
            {
                team: [
                    {
                        slug: 'shieldon',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
    },
    'collector-douglas': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'collector',
        name: 'Douglas',
        teams: [
            {
                team: [
                    {
                        slug: 'jolteon',
                        ability: 'volt-absorb',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Gentle,
                    },
                    {
                        slug: 'vaporeon',
                        ability: 'water-absorb',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'flareon',
                        ability: 'flash-fire',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-calvin': {
        metadata: [],
        trainerClass: 'ruin-maniac',
        name: 'Calvin',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 23,
                        nature: Nature.Sassy,
                    },
                    {
                        slug: 'shieldon',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'jogger-craig': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'jogger',
        name: 'Craig',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'black-belt-derek': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Derek',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Bashful,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'black-belt-gregory': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Gregory',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Adamant,
                        ivs: 3,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Adamant,
                        ivs: 3,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Adamant,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'black-belt-nathaniel': {
        metadata: [BattleMetadata.Optional],
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
                        ivs: 3,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Relaxed,
                        ivs: 3,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Sassy,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'jogger-scott': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'jogger',
        name: 'Scott',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-maya': {
        metadata: [],
        trainerClass: 'ace-trainer-f',
        name: 'Maya',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 24,
                        moves: ['toxic-spikes', 'giga-drain', 'leech-seed'],
                        nature: Nature.Adamant,
                        ivs: 6,
                    },
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 24,
                        moves: [
                            'psychic',
                            'magical-leaf',
                            'calm-mind',
                            'double-team',
                        ],
                        nature: Nature.Serious,
                        ivs: 6,
                    },
                    {
                        slug: 'lickitung',
                        ability: 'own-tempo',
                        gender: 'female',
                        level: 25,
                        moves: [
                            'supersonic',
                            'stomp',
                            'rollout',
                            'defense-curl',
                        ],
                        nature: Nature.Modest,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-dennis': {
        metadata: [],
        trainerClass: 'ace-trainer-m',
        name: 'Dennis',
        teams: [
            {
                team: [
                    {
                        slug: 'gligar',
                        ability: 'hyper-cutter',
                        gender: 'male',
                        level: 24,
                        moves: [
                            'screech',
                            'feint-attack',
                            'quick-attack',
                            'poison-sting',
                        ],
                        nature: Nature.Bold,
                        ivs: 6,
                    },
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 24,
                        moves: ['aqua-jet', 'swift', 'pursuit', 'quick-attack'],
                        nature: Nature.Naive,
                        ivs: 6,
                    },
                    {
                        slug: 'drifblim',
                        ability: 'aftermath',
                        gender: 'male',
                        level: 25,
                        moves: ['swallow', 'gust', 'stockpile', 'ominous-wind'],
                        nature: Nature.Bold,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-blake': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-m',
        name: 'Blake',
        teams: [
            {
                team: [
                    {
                        slug: 'ambipom',
                        ability: 'technician',
                        gender: 'male',
                        ivs: 6,
                        level: 39,
                        nature: Nature.Lonely,
                        moves: [
                            'double-hit',
                            'u-turn',
                            'sand-attack',
                            'screech',
                        ],
                    },
                    {
                        slug: 'porygon2',
                        ability: 'trace',
                        ivs: 6,
                        level: 40,
                        nature: Nature.Hardy,
                        moves: [
                            'psybeam',
                            'signal-beam',
                            'conversion-2',
                            'recover',
                        ],
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-maria': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-f',
        name: 'Maria',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        ivs: 6,
                        level: 38,
                        nature: Nature.Bold,
                        moves: [
                            'water-pulse',
                            'confusion',
                            'disable',
                            'screech',
                        ],
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'female',
                        ivs: 6,
                        level: 39,
                        nature: Nature.Modest,
                        moves: [
                            'fire-blast',
                            'take-down',
                            'fury-attack',
                            'will-o-wisp',
                        ],
                    },
                    {
                        slug: 'sudowoodo',
                        ability: 'sturdy',
                        gender: 'female',
                        ivs: 6,
                        level: 38,
                        nature: Nature.Mild,
                        moves: ['rock-slide', 'low-kick', 'flail', 'endure'],
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-laura': {
        metadata: [],
        trainerClass: 'ace-trainer-snow-f',
        name: 'Laura',
        teams: [
            {
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'female',
                        ivs: 6,
                        level: 42,
                        nature: Nature.Quiet,
                        moves: [
                            'air-slash',
                            'body-slam',
                            'magical-leaf',
                            'sweet-scent',
                        ],
                    },
                ],
            },
        ],
    },
    'skier-m-edward': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'skier-m',
        name: 'Edward',
        teams: [
            {
                team: [
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Hardy,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-garrett': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-m',
        name: 'Garrett',
        teams: [
            {
                team: [
                    {
                        slug: 'mr-mime',
                        ability: 'soundproof',
                        gender: 'male',
                        ivs: 6,
                        level: 37,
                        nature: Nature.Bashful,
                        moves: ['psybeam', 'mimic', 'reflect', 'light-screen'],
                    },
                    {
                        slug: 'dusclops',
                        ability: 'pressure',
                        gender: 'male',
                        ivs: 6,
                        level: 39,
                        nature: Nature.Lax,
                        moves: [
                            'will-o-wisp',
                            'shadow-punch',
                            'pursuit',
                            'confuse-ray',
                        ],
                    },
                    {
                        slug: 'scyther',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 6,
                        level: 39,
                        nature: Nature.Docile,
                        moves: [
                            'slash',
                            'x-scissor',
                            'quick-attack',
                            'fury-cutter',
                        ],
                    },
                ],
            },
        ],
    },
    'black-belt-philip': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Philip',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        ivs: 3,
                        level: 40,
                        nature: Nature.Timid,
                    },
                ],
            },
        ],
    },
    'skier-f-kaitlyn': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'skier-f',
        name: 'Kaitlyn',
        teams: [
            {
                team: [
                    {
                        slug: 'swinub',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'skier-m-bradley': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'skier-m',
        name: 'Bradley',
        teams: [
            {
                team: [
                    {
                        slug: 'snorunt',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Bold,
                    },
                    {
                        slug: 'swinub',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Careful,
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'skier-f-andrea': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'skier-f',
        name: 'Andrea',
        teams: [
            {
                team: [
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Modest,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-dalton': {
        metadata: [],
        trainerClass: 'ace-trainer-snow-m',
        name: 'Dalton',
        teams: [
            {
                team: [
                    {
                        slug: 'electabuzz',
                        ability: 'static',
                        gender: 'male',
                        ivs: 6,
                        level: 40,
                        nature: Nature.Hasty,
                        moves: [
                            'thunderbolt',
                            'swift',
                            'quick-attack',
                            'thunder-wave',
                        ],
                    },
                    {
                        slug: 'magmar',
                        ability: 'flame-body',
                        gender: 'male',
                        ivs: 6,
                        level: 40,
                        nature: Nature.Adamant,
                        moves: [
                            'flamethrower',
                            'feint-attack',
                            'smog',
                            'will-o-wisp',
                        ],
                    },
                ],
            },
        ],
    },
    'skier-m-shawn': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'skier-m',
        name: 'Shawn',
        teams: [
            {
                team: [
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Hasty,
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'ninja-boy-matthew': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ninja-boy',
        name: 'Matthew',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'skier-f-madison': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'skier-f',
        name: 'Madison',
        teams: [
            {
                team: [
                    {
                        slug: 'snorunt',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Serious,
                    },
                ],
            },
        ],
    },
    'ninja-boy-ethan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ninja-boy',
        name: 'Ethan',
        teams: [
            {
                team: [
                    {
                        slug: 'skorupi',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Impish,
                    },
                ],
            },
        ],
    },
    'skier-m-bjorn': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'skier-m',
        name: 'Bjorn',
        teams: [
            {
                team: [
                    {
                        slug: 'swinub',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Quirky,
                    },
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'skier-f-lexie': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'skier-f',
        name: 'Lexie',
        teams: [
            {
                team: [
                    {
                        slug: 'piloswine',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'glaceon',
                        ability: 'snow-cloak',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'black-belt-luke': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Luke',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        ivs: 3,
                        level: 37,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'riolu',
                        ability: 'steadfast',
                        gender: 'male',
                        ivs: 3,
                        level: 37,
                        nature: Nature.Brave,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        ivs: 3,
                        level: 37,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-olivia': {
        metadata: [],
        trainerClass: 'ace-trainer-snow-f',
        name: 'Olivia',
        teams: [
            {
                team: [
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'female',
                        ivs: 6,
                        level: 38,
                        nature: Nature.Impish,
                        moves: [
                            'future-sight',
                            'psychic',
                            'magical-leaf',
                            'lucky-chant',
                        ],
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        ivs: 6,
                        level: 39,
                        nature: Nature.Naive,
                        moves: [
                            'waterfall',
                            'poison-jab',
                            'supersonic',
                            'aqua-ring',
                        ],
                    },
                    {
                        slug: 'buneary',
                        ability: 'run-away',
                        gender: 'female',
                        ivs: 6,
                        level: 38,
                        nature: Nature.Mild,
                        moves: [
                            'dizzy-punch',
                            'quick-attack',
                            'jump-kick',
                            'shadow-ball',
                        ],
                    },
                ],
            },
        ],
    },
    'fisherman-miguel': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'fisherman',
        name: 'Miguel',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'fisherman-luc': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'fisherman',
        name: 'Luc',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'sailor-skyler': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'sailor',
        name: 'Skyler',
        teams: [
            {
                team: [
                    {
                        slug: 'mantyke',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Impish,
                    },
                ],
            },
        ],
    },
    'guitarist-tony': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'guitarist',
        name: 'Tony',
        teams: [
            {
                team: [
                    {
                        slug: 'kricketune',
                        ability: 'swarm',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        level: 33,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'tuber-m-trenton': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'tuber-m',
        name: 'Trenton',
        teams: [
            {
                team: [
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Calm,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Hardy,
                    },
                ],
            },
        ],
    },
    'tuber-f-mariel': {
        metadata: [BattleMetadata.Optional],
        split: 'Byron',
        trainerClass: 'tuber-f',
        name: 'Mariel',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Bold,
                    },
                ],
            },
        ],
    },
    'swimmer-f-jessica': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Jessica',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'swimmer-f-erica': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Erica',
        teams: [
            {
                team: [
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'swimmer-m-adrian': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Adrian',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Rash,
                    },
                    {
                        slug: 'octillery',
                        ability: 'suction-cups',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'swimmer-m-vincent': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Vincent',
        teams: [
            {
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'gastrodon',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'swimmer-f-katelyn': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Katelyn',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Hardy,
                        moves: [
                            'aqua-jet',
                            'sonic-boom',
                            'quick-attack',
                            'attract',
                        ],
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Serious,
                        moves: [
                            'confusion',
                            'brick-break',
                            'meditate',
                            'light-screen',
                        ],
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Bold,
                        moves: [
                            'water-pulse',
                            'horn-attack',
                            'aqua-ring',
                            'captivate',
                        ],
                    },
                ],
            },
        ],
    },
    'swimmer-f-claire': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Claire',
        teams: [
            {
                team: [
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Quirky,
                    },
                ],
            },
        ],
    },
    'swimmer-m-erik': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Erik',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'swimmer-m-dillon': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Dillon',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Brave,
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'swimmer-f-vanessa': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Vanessa',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'fisherman-cory': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Cory',
        teams: [
            {
                team: [
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Hasty,
                    },
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-shannon': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-f',
        name: 'Shannon',
        teams: [
            {
                team: [
                    {
                        slug: 'cherrim',
                        ability: 'flower-gift',
                        gender: 'female',
                        ivs: 6,
                        level: 34,
                        nature: Nature.Adamant,
                        moves: ['petal-dance', 'magical-leaf', 'leech-seed'],
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        ivs: 6,
                        level: 34,
                        nature: Nature.Relaxed,
                        moves: ['double-edge', 'bubble-beam', 'aqua-ring'],
                    },
                    {
                        slug: 'lopunny',
                        ability: 'cute-charm',
                        gender: 'female',
                        ivs: 6,
                        level: 35,
                        nature: Nature.Naughty,
                        moves: ['jump-kick', 'quick-attack', 'charm'],
                    },
                ],
            },
        ],
    },
    'collector-ivan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'collector',
        name: 'Ivan',
        teams: [
            {
                team: [
                    {
                        slug: 'togetic',
                        ability: 'hustle',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-jake': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-m',
        name: 'Jake',
        teams: [
            {
                team: [
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        ivs: 6,
                        level: 35,
                        nature: Nature.Serious,
                        moves: [
                            'take-down',
                            'aerial-ace',
                            'endeavor',
                            'quick-attack',
                        ],
                    },
                    {
                        slug: 'girafarig',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 6,
                        level: 36,
                        nature: Nature.Careful,
                        moves: ['double-hit', 'psychic'],
                    },
                ],
            },
        ],
    },
    'rich-boy-trey': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'rich-boy',
        name: 'Trey',
        teams: [
            {
                team: [
                    {
                        slug: 'luxray',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Full Restore',
            },
        ],
    },
    'fisherman-alec': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Alec',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'fisherman-george': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'George',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Bold,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'beauty-nicola': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'beauty',
        name: 'Nicola',
        teams: [
            {
                team: [
                    {
                        slug: 'lopunny',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 45,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'fisherman-brett': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Brett',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'finneon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'feebas',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'fisherman-cole': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Cole',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Naughty,
                    },
                ],
            },
        ],
    },
    'tuber-f-holly': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'tuber-f',
        name: 'Holly',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'female',
                        level: 44,
                        nature: Nature.Adamant,
                    },
                ],
            },
        ],
    },
    'policeman-thomas': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'policeman',
        name: 'Thomas',
        teams: [
            {
                team: [
                    {
                        slug: 'noctowl',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Sassy,
                    },
                ],
            },
        ],
    },
    'sailor-marc': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'sailor',
        name: 'Marc',
        teams: [
            {
                team: [
                    {
                        slug: 'mantyke',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Quiet,
                    },
                ],
            },
        ],
    },
    'tuber-m-conner': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'tuber-m',
        name: 'Conner',
        teams: [
            {
                team: [
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'sailor-luther': {
        metadata: [],
        trainerClass: 'sailor',
        name: 'Luther',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Modest,
                    },
                    {
                        slug: 'gastrodon',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'swimmer-f-miranda': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Miranda',
        teams: [
            {
                team: [
                    {
                        slug: 'lumineon',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 45,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'swimmer-f-aubree': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Aubree',
        teams: [
            {
                team: [
                    {
                        slug: 'bibarel',
                        ability: 'simple',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Gentle,
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'swimmer-m-oscar': {
        metadata: [],
        trainerClass: 'swimmer-m',
        name: 'Oscar',
        teams: [
            {
                team: [
                    {
                        slug: 'mantyke',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Gentle,
                    },
                    {
                        slug: 'remoraid',
                        ability: 'hustle',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Hasty,
                    },
                    {
                        slug: 'mantine',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'swimmer-f-paige': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Paige',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Timid,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Careful,
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'swimmer-m-colton': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Colton',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'octillery',
                        ability: 'suction-cups',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'swimmer-m-ricardo': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Ricardo',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'swimmer-f-crystal': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Crystal',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Brave,
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 44,
                        nature: Nature.Serious,
                    },
                ],
            },
        ],
    },
    'swimmer-m-wesley': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Wesley',
        teams: [
            {
                team: [
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Serious,
                    },
                ],
            },
        ],
    },
    'sailor-zachariah': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'sailor',
        name: 'Zachariah',
        teams: [
            {
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'gastrodon',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Impish,
                    },
                ],
            },
        ],
    },
    'swimmer-f-gabrielle': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Gabrielle',
        teams: [
            {
                team: [
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 45,
                        nature: Nature.Timid,
                    },
                ],
            },
        ],
    },
    'swimmer-f-cassandra': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-f',
        name: 'Cassandra',
        teams: [
            {
                team: [
                    {
                        slug: 'lumineon',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 44,
                        nature: Nature.Careful,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'swimmer-m-francisco': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Francisco',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Hasty,
                    },
                    {
                        slug: 'golduck',
                        ability: 'damp',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'swimmer-m-troy': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'swimmer-m',
        name: 'Troy',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-brenna': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-f',
        name: 'Brenna',
        teams: [
            {
                team: [
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 6,
                        level: 40,
                        nature: Nature.Bold,
                        moves: [
                            'ice-shard',
                            'slash',
                            'feint-attack',
                            'quick-attack',
                        ],
                    },
                    {
                        slug: 'snorunt',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 6,
                        level: 40,
                        nature: Nature.Jolly,
                        moves: ['ice-fang', 'crunch', 'hail'],
                    },
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'female',
                        ivs: 6,
                        level: 41,
                        nature: Nature.Hardy,
                        moves: [
                            'ice-shard',
                            'wood-hammer',
                            'ingrain',
                            'grass-whistle',
                        ],
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-isaiah': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-m',
        name: 'Isaiah',
        teams: [
            {
                team: [
                    {
                        slug: 'piloswine',
                        ability: 'oblivious',
                        gender: 'male',
                        ivs: 7,
                        level: 44,
                        nature: Nature.Gentle,
                        moves: [
                            'earthquake',
                            'fury-attack',
                            'ice-fang',
                            'ancient-power',
                        ],
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-sergio': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-m',
        name: 'Sergio',
        teams: [
            {
                team: [
                    {
                        slug: 'snover',
                        ability: 'snow-warning',
                        gender: 'male',
                        ivs: 7,
                        level: 41,
                        nature: Nature.Hardy,
                        moves: [
                            'ice-shard',
                            'swagger',
                            'icy-wind',
                            'wood-hammer',
                        ],
                    },
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 7,
                        level: 42,
                        nature: Nature.Lonely,
                        moves: [
                            'icy-wind',
                            'slash',
                            'feint-attack',
                            'quick-attack',
                        ],
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-savannah': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-f',
        name: 'Savannah',
        teams: [
            {
                team: [
                    {
                        slug: 'snorunt',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 7,
                        level: 39,
                        nature: Nature.Naive,
                        moves: ['ice-fang', 'crunch', 'hail', 'protect'],
                    },
                    {
                        slug: 'snorunt',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 7,
                        level: 40,
                        nature: Nature.Hardy,
                        moves: ['ice-fang', 'crunch', 'hail', 'protect'],
                    },
                    {
                        slug: 'glalie',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 7,
                        level: 42,
                        nature: Nature.Naive,
                        moves: ['ice-fang', 'crunch', 'hail', 'protect'],
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-f-alicia': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-f',
        name: 'Alicia',
        teams: [
            {
                team: [
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 7,
                        level: 40,
                        nature: Nature.Docile,
                        moves: ['icy-wind', 'slash', 'screech', 'feint-attack'],
                    },
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 7,
                        level: 43,
                        nature: Nature.Lonely,
                        moves: ['icy-wind', 'slash', 'screech', 'feint-attack'],
                    },
                ],
            },
        ],
    },
    'ace-trainer-snow-m-anton': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-snow-m',
        name: 'Anton',
        teams: [
            {
                team: [
                    {
                        slug: 'glalie',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 6,
                        level: 44,
                        nature: Nature.Lax,
                        moves: ['ice-beam', 'crunch'],
                    },
                ],
            },
        ],
    },
    'leader-candice': {
        metadata: [BattleMetadata.Boss],
        trainerClass: 'leader-candice',
        name: 'Candice',
        teams: [
            {
                team: [
                    {
                        slug: 'sneasel',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 30,
                        level: 40,
                        nature: Nature.Docile,
                        moves: [
                            'slash',
                            'aerial-ace',
                            'feint-attack',
                            'ice-shard',
                        ],
                    },
                    {
                        slug: 'piloswine',
                        ability: 'oblivious',
                        gender: 'female',
                        ivs: 30,
                        level: 40,
                        nature: Nature.Mild,
                        moves: [
                            'avalanche',
                            'stone-edge',
                            'earthquake',
                            'hail',
                        ],
                    },
                    {
                        slug: 'abomasnow',
                        ability: 'snow-warning',
                        gender: 'female',
                        ivs: 30,
                        level: 42,
                        nature: Nature.Relaxed,
                        moves: [
                            'avalanche',
                            'wood-hammer',
                            'water-pulse',
                            'focus-blast',
                        ],
                    },
                    {
                        slug: 'froslass',
                        ability: 'snow-cloak',
                        gender: 'female',
                        ivs: 30,
                        level: 44,
                        nature: Nature.Lonely,
                        moves: [
                            'blizzard',
                            'double-team',
                            'shadow-ball',
                            'psychic',
                        ],
                        heldItem: 'sitrus-berry',
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
    'ruin-maniac-karl': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ruin-maniac',
        name: 'Karl',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Lax,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 23,
                        nature: Nature.Serious,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-spear-pillar': {
        metadata: [BattleMetadata.Double],
        trainerClass: 'galactic-grunt-f',
        name: '13',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'female',
                        ivs: 3,
                        level: 41,
                        nature: Nature.Hasty,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        ivs: 3,
                        level: 41,
                        nature: Nature.Timid,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-m',
            name: '13',
            teams: [
                {
                    team: [
                        {
                            slug: 'croagunk',
                            ability: 'anticipation',
                            gender: 'male',
                            ivs: 3,
                            level: 39,
                            nature: Nature.Serious,
                        },
                        {
                            slug: 'croagunk',
                            ability: 'anticipation',
                            gender: 'male',
                            ivs: 3,
                            level: 43,
                            nature: Nature.Docile,
                        },
                    ],
                },
            ],
        },
    },
    'commander-jupiter': {
        metadata: [BattleMetadata.Miniboss, BattleMetadata.Tag],
        trainerClass: 'commander-jupiter',
        name: 'Jupiter',
        teams: [
            {
                team: [
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        ivs: 24,
                        level: 44,
                        nature: Nature.Quirky,
                        moves: [
                            'gyro-ball',
                            'extrasensory',
                            'rock-slide',
                            'reflect',
                        ],
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 24,
                        level: 44,
                        nature: Nature.Brave,
                        moves: [
                            'sludge-bomb',
                            'air-cutter',
                            'giga-drain',
                            'mean-look',
                        ],
                    },
                    {
                        slug: 'skuntank',
                        ability: 'stench',
                        gender: 'female',
                        ivs: 24,
                        level: 46,
                        nature: Nature.Relaxed,
                        moves: [
                            'night-slash',
                            'poison-jab',
                            'flamethrower',
                            'smokescreen',
                        ],
                        heldItem: 'sitrus-berry',
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
                            ivs: 24,
                            level: 44,
                            nature: Nature.Brave,
                            moves: [
                                'gyro-ball',
                                'extrasensory',
                                'light-screen',
                                'confuse-ray',
                            ],
                        },
                        {
                            slug: 'golbat',
                            ability: 'inner-focus',
                            gender: 'female',
                            ivs: 24,
                            level: 44,
                            nature: Nature.Lonely,
                            moves: [
                                'air-cutter',
                                'bite',
                                'poison-fang',
                                'confuse-ray',
                            ],
                        },
                        {
                            slug: 'purugly',
                            ability: 'thick-fat',
                            gender: 'female',
                            ivs: 24,
                            level: 46,
                            nature: Nature.Jolly,
                            moves: [
                                'slash',
                                'shadow-claw',
                                'aerial-ace',
                                'hypnosis',
                            ],
                            heldItem: 'sitrus-berry',
                        },
                    ],
                },
            ],
        },
    },
    'pkmn-trainer-barry-spear-pillar-tag': {
        metadata: [],
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'munchlax',
                        ability: 'pickup',
                        gender: 'male',
                        level: 40,
                        moves: ['body-slam', 'stockpile', 'swallow', 'screech'],
                        nature: Nature.Lonely,
                        ivs: 24,
                    },
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                        ],
                        nature: Nature.Calm,
                        ivs: 24,
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 40,
                        moves: [
                            'aqua-jet',
                            'pursuit',
                            'brick-break',
                            'iron-tail',
                        ],
                        nature: Nature.Sassy,
                        ivs: 24,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'close-combat',
                            'brick-break',
                            'night-slash',
                            'aerial-ace',
                        ],
                        nature: Nature.Jolly,
                        ivs: 24,
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 40,
                        moves: [
                            'giga-drain',
                            'toxic',
                            'ingrain',
                            'grass-whistle',
                        ],
                        nature: Nature.Sassy,
                        ivs: 24,
                    },
                    {
                        slug: 'infernape',
                        ability: 'blaze',
                        gender: 'male',
                        level: 44,
                        moves: [
                            'close-combat',
                            'punishment',
                            'flame-wheel',
                            'will-o-wisp',
                        ],
                        nature: Nature.Mild,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'munchlax',
                        ability: 'pickup',
                        gender: 'male',
                        level: 40,
                        moves: ['body-slam', 'stockpile', 'swallow', 'screech'],
                        nature: Nature.Lonely,
                        ivs: 24,
                    },
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                        ],
                        nature: Nature.Naive,
                        ivs: 24,
                    },
                    {
                        slug: 'floatzel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 40,
                        moves: [
                            'aqua-jet',
                            'pursuit',
                            'brick-break',
                            'iron-tail',
                        ],
                        nature: Nature.Sassy,
                        ivs: 24,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'close-combat',
                            'brick-break',
                            'night-slash',
                            'aerial-ace',
                        ],
                        nature: Nature.Jolly,
                        ivs: 24,
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 40,
                        moves: [
                            'fire-blast',
                            'will-o-wisp',
                            'stomp',
                            'take-down',
                        ],
                        nature: Nature.Brave,
                        ivs: 24,
                    },
                    {
                        slug: 'torterra',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 44,
                        moves: [
                            'giga-drain',
                            'bite',
                            'leech-seed',
                            'synthesis',
                        ],
                        nature: Nature.Serious,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'munchlax',
                        ability: 'pickup',
                        gender: 'male',
                        level: 40,
                        moves: ['body-slam', 'stockpile', 'swallow', 'screech'],
                        nature: Nature.Lonely,
                        ivs: 24,
                    },
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'close-combat',
                            'aerial-ace',
                            'take-down',
                            'quick-attack',
                        ],
                        nature: Nature.Naive,
                        ivs: 24,
                    },
                    {
                        slug: 'roserade',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 40,
                        moves: [
                            'giga-drain',
                            'toxic',
                            'ingrain',
                            'grass-whistle',
                        ],
                        nature: Nature.Mild,
                        ivs: 24,
                    },
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 42,
                        moves: [
                            'close-combat',
                            'brick-break',
                            'night-slash',
                            'aerial-ace',
                        ],
                        nature: Nature.Relaxed,
                        ivs: 24,
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 40,
                        moves: [
                            'fire-blast',
                            'will-o-wisp',
                            'stomp',
                            'take-down',
                        ],
                        nature: Nature.Brave,
                        ivs: 24,
                    },
                    {
                        slug: 'empoleon',
                        ability: 'torrent',
                        gender: 'male',
                        level: 44,
                        moves: [
                            'aqua-jet',
                            'aerial-ace',
                            'metal-claw',
                            'swagger',
                        ],
                        nature: Nature.Calm,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'school-kid-f-tiera': {
        metadata: [],
        trainerClass: 'school-kid-f',
        name: 'Tiera',
        teams: [
            {
                team: [
                    {
                        slug: 'pachirisu',
                        ability: 'run-away',
                        gender: 'female',
                        ivs: 1,
                        level: 47,
                        nature: Nature.Adamant,
                        moves: [
                            'last-resort',
                            'super-fang',
                            'discharge',
                            'sweet-kiss',
                        ],
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'Hyper Potion',
            },
        ],
    },
    'school-kid-m-forrest': {
        metadata: [],
        trainerClass: 'school-kid-m',
        name: 'Forrest',
        teams: [
            {
                team: [
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        ivs: 1,
                        level: 47,
                        nature: Nature.Bold,
                        moves: ['thunderbolt', 'tri-attack', 'mirror-shot'],
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'X Speed',
            },
        ],
    },
    'guitarist-jerry': {
        metadata: [],
        trainerClass: 'guitarist',
        name: 'Jerry',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        ivs: 1,
                        level: 44,
                        nature: Nature.Rash,
                    },
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        ivs: 1,
                        level: 44,
                        nature: Nature.Bashful,
                    },
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        ivs: 1,
                        level: 44,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'poke-kid-meghan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'poke-kid',
        name: 'Meghan',
        teams: [
            {
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        ivs: 1,
                        level: 42,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        ivs: 1,
                        level: 42,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        ivs: 1,
                        level: 42,
                        nature: Nature.Jolly,
                    },
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        ivs: 1,
                        level: 42,
                        nature: Nature.Jolly,
                    },
                ],
            },
        ],
    },
    'guitarist-lonnie': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'guitarist',
        name: 'Lonnie',
        teams: [
            {
                team: [
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'male',
                        ivs: 1,
                        level: 47,
                        nature: Nature.Hasty,
                        moves: [
                            'thunderbolt',
                            'slam',
                            'thunder-wave',
                            'quick-attack',
                        ],
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-destiny': {
        metadata: [],
        trainerClass: 'ace-trainer-f',
        name: 'Destiny',
        teams: [
            {
                team: [
                    {
                        slug: 'electabuzz',
                        ability: 'static',
                        gender: 'male',
                        ivs: 7,
                        level: 47,
                        nature: Nature.Modest,
                        moves: [
                            'thunderbolt',
                            'shock-wave',
                            'quick-attack',
                            'iron-tail',
                        ],
                    },
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'female',
                        ivs: 7,
                        level: 48,
                        nature: Nature.Jolly,
                        moves: [
                            'thunderbolt',
                            'dig',
                            'thunder-wave',
                            'light-screen',
                        ],
                    },
                ],
            },
        ],
    },
    'guitarist-preston': {
        metadata: [],
        trainerClass: 'guitarist',
        name: 'Preston',
        teams: [
            {
                team: [
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        ivs: 1,
                        level: 45,
                        nature: Nature.Lonely,
                    },
                    {
                        slug: 'luxio',
                        ability: 'rivalry',
                        gender: 'male',
                        ivs: 1,
                        level: 45,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-zachery': {
        metadata: [],
        trainerClass: 'ace-trainer-m',
        name: 'Zachery',
        teams: [
            {
                team: [
                    {
                        slug: 'electabuzz',
                        ability: 'static',
                        gender: 'male',
                        ivs: 7,
                        level: 47,
                        nature: Nature.Mild,
                        moves: [
                            'thunderbolt',
                            'shock-wave',
                            'quick-attack',
                            'iron-tail',
                        ],
                    },
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        ivs: 7,
                        level: 48,
                        nature: Nature.Docile,
                        moves: ['thunderbolt', 'tri-attack', 'mirror-shot'],
                    },
                ],
            },
        ],
    },
    'leader-volkner': {
        metadata: [BattleMetadata.Boss],
        trainerClass: 'leader-volkner',
        name: 'Volkner',
        teams: [
            {
                team: [
                    {
                        slug: 'jolteon',
                        ability: 'volt-absorb',
                        gender: 'male',
                        ivs: 30,
                        level: 46,
                        nature: Nature.Relaxed,
                        moves: [
                            'thunder-wave',
                            'charge-beam',
                            'iron-tail',
                            'quick-attack',
                        ],
                    },
                    {
                        slug: 'raichu',
                        ability: 'static',
                        gender: 'male',
                        ivs: 30,
                        level: 46,
                        nature: Nature.Gentle,
                        moves: [
                            'charge-beam',
                            'focus-blast',
                            'signal-beam',
                            'quick-attack',
                        ],
                    },
                    {
                        slug: 'luxray',
                        ability: 'rivalry',
                        gender: 'male',
                        ivs: 30,
                        level: 48,
                        nature: Nature.Lax,
                        moves: [
                            'ice-fang',
                            'thunder-fang',
                            'crunch',
                            'fire-fang',
                        ],
                    },
                    {
                        slug: 'electivire',
                        ability: 'motor-drive',
                        gender: 'male',
                        ivs: {
                            hp: 4,
                            atk: 3,
                            def: 29,
                            spa: 18,
                            spd: 15,
                            spe: 19,
                        },
                        level: 50,
                        nature: Nature.Impish,
                        moves: [
                            'thunder-punch',
                            'fire-punch',
                            'quick-attack',
                            'giga-impact',
                        ],
                        heldItem: 'sitrus-berry',
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
    'galactic-grunt-f-team-galactic-eterna-building-1': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-f',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Rash,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-team-galactic-eterna-building-1': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '7',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Relaxed,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-team-galactic-eterna-building-2': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '8',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bold,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-team-galactic-eterna-building-2': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-f',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-team-galactic-eterna-building-3': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-f',
        name: '3',
        teams: [
            {
                team: [
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Naughty,
                    },
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Careful,
                    },
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Rash,
                    },
                ],
            },
        ],
    },
    'scientist-travon': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'scientist',
        name: 'Travon',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Brave,
                        moves: ['confusion'],
                        ivs: 2,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                name: 'X Special',
            },
        ],
    },
    'commander-jupiter-team-galactic-eterna-building': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'commander-jupiter',
        name: 'Jupiter',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Brave,
                        moves: ['giga-drain', 'wing-attack', 'bite'],
                        ivs: 12,
                    },
                    {
                        slug: 'skuntank',
                        ability: 'stench',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Modest,
                        moves: [
                            'night-slash',
                            'poison-gas',
                            'screech',
                            'smokescreen',
                        ],
                        ivs: 12,
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-valley-windworks-interior-1': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '5',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Bashful,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-valley-windworks-interior-2': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'galactic-grunt-m',
        name: '6',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Hasty,
                    },
                ],
            },
        ],
    },
    'commander-mars-valley-windworks-interior': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'commander-mars',
        name: 'Mars',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Bold,
                        moves: ['bite', 'leech-life', 'toxic'],
                        ivs: 12,
                    },
                    {
                        slug: 'purugly',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Bashful,
                        moves: ['feint-attack', 'scratch', 'fake-out'],
                        heldItem: 'oran-berry',
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-valley-windworks': {
        metadata: [],
        trainerClass: 'galactic-grunt-m',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'glameow',
                        ability: 'limber',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'commander-saturn-valor-cavern': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'commander-saturn',
        name: 'Saturn',
        teams: [
            {
                team: [
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 24,
                        level: 38,
                        nature: Nature.Naughty,
                        moves: ['air-cutter', 'bite', 'toxic', 'supersonic'],
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        ivs: 24,
                        level: 38,
                        nature: Nature.Quirky,
                        moves: [
                            'gyro-ball',
                            'shadow-ball',
                            'rock-tomb',
                            'iron-defense',
                        ],
                    },
                    {
                        slug: 'toxicroak',
                        ability: 'anticipation',
                        gender: 'female',
                        ivs: 24,
                        level: 40,
                        nature: Nature.Adamant,
                        moves: [
                            'poison-jab',
                            'revenge',
                            'mud-bomb',
                            'feint-attack',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-valor-lakefront': {
        metadata: [],
        trainerClass: 'galactic-grunt-m',
        name: '10',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        ivs: 3,
                        level: 31,
                        nature: Nature.Impish,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-m-veilstone-city': {
        metadata: [BattleMetadata.Tag],
        split: 'Wake',
        trainerClass: 'galactic-grunt-m',
        name: '9',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        ivs: 3,
                        level: 24,
                        nature: Nature.Calm,
                    },
                    {
                        slug: 'stunky',
                        ability: 'stench',
                        gender: 'male',
                        ivs: 3,
                        level: 26,
                        nature: Nature.Timid,
                    },
                ],
            },
        ],
        secondTrainer: {
            trainerClass: 'galactic-grunt-m',
            name: '9',
            teams: [
                {
                    team: [
                        {
                            slug: 'zubat',
                            ability: 'inner-focus',
                            gender: 'male',
                            ivs: 3,
                            level: 24,
                            nature: Nature.Quiet,
                        },
                        {
                            slug: 'croagunk',
                            ability: 'anticipation',
                            gender: 'male',
                            ivs: 3,
                            level: 26,
                            nature: Nature.Hasty,
                        },
                    ],
                },
            ],
        },
    },
    'pkmn-trainer-dawn-veilstone-city-tag': {
        metadata: [],
        split: 'Wake',
        trainerClass: 'pkmn-trainer-dawn',
        name: 'Dawn',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 25,
                        moves: ['metronome', 'sing', 'gravity', 'wake-up-slap'],
                        nature: Nature.Naive,
                        ivs: 7,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 25,
                        moves: [
                            'psybeam',
                            'psycho-cut',
                            'reflect',
                            'light-screen',
                        ],
                        nature: Nature.Hasty,
                        ivs: 7,
                    },
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 27,
                        moves: [
                            'bubble-beam',
                            'peck',
                            'fury-attack',
                            'metal-claw',
                        ],
                        nature: Nature.Hardy,
                        ivs: 7,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 25,
                        moves: ['metronome', 'sing', 'gravity', 'wake-up-slap'],
                        nature: Nature.Calm,
                        ivs: 7,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 25,
                        moves: [
                            'psybeam',
                            'psycho-cut',
                            'reflect',
                            'light-screen',
                        ],
                        nature: Nature.Quiet,
                        ivs: 7,
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 27,
                        moves: ['razor-leaf', 'mega-drain', 'bite', 'curse'],
                        nature: Nature.Lonely,
                        ivs: 7,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 25,
                        moves: ['metronome', 'sing', 'gravity', 'wake-up-slap'],
                        nature: Nature.Lonely,
                        ivs: 7,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 25,
                        moves: [
                            'psybeam',
                            'psycho-cut',
                            'reflect',
                            'light-screen',
                        ],
                        nature: Nature.Careful,
                        ivs: 7,
                    },
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        level: 27,
                        moves: [
                            'flame-wheel',
                            'ember',
                            'mach-punch',
                            'fury-swipes',
                        ],
                        nature: Nature.Rash,
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-lucas-veilstone-city-tag': {
        metadata: [],
        split: 'Wake',
        trainerClass: 'pkmn-trainer-lucas',
        name: 'Lucas',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 25,
                        moves: ['metronome', 'sing', 'gravity', 'wake-up-slap'],
                        nature: Nature.Naughty,
                        ivs: 7,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 25,
                        moves: [
                            'psybeam',
                            'psycho-cut',
                            'reflect',
                            'light-screen',
                        ],
                        nature: Nature.Hardy,
                        ivs: 7,
                    },
                    {
                        slug: 'prinplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 27,
                        moves: [
                            'bubble-beam',
                            'peck',
                            'fury-attack',
                            'metal-claw',
                        ],
                        nature: Nature.Serious,
                        ivs: 7,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 25,
                        moves: ['metronome', 'sing', 'gravity', 'wake-up-slap'],
                        nature: Nature.Sassy,
                        ivs: 7,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 25,
                        moves: [
                            'psybeam',
                            'psycho-cut',
                            'reflect',
                            'light-screen',
                        ],
                        nature: Nature.Quirky,
                        ivs: 7,
                    },
                    {
                        slug: 'grotle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 27,
                        moves: ['razor-leaf', 'mega-drain', 'bite', 'curse'],
                        nature: Nature.Timid,
                        ivs: 7,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'clefairy',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 25,
                        moves: ['metronome', 'sing', 'gravity', 'wake-up-slap'],
                        nature: Nature.Quirky,
                        ivs: 7,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 25,
                        moves: [
                            'psybeam',
                            'psycho-cut',
                            'reflect',
                            'light-screen',
                        ],
                        nature: Nature.Quiet,
                        ivs: 7,
                    },
                    {
                        slug: 'monferno',
                        ability: 'blaze',
                        gender: 'male',
                        level: 27,
                        moves: [
                            'flame-wheel',
                            'ember',
                            'mach-punch',
                            'fury-swipes',
                        ],
                        nature: Nature.Jolly,
                        ivs: 7,
                    },
                ],
            },
        ],
    },
    'black-belt-colby': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Colby',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 23,
                        moves: ['karate-chop', 'leer', 'foresight'],
                        nature: Nature.Mild,
                        ivs: 4,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        moves: ['low-kick', 'foresight'],
                        nature: Nature.Gentle,
                        ivs: 4,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 27,
                        moves: ['submission', 'leer', 'foresight'],
                        nature: Nature.Calm,
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    'black-belt-darren': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Darren',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        moves: ['karate-chop', 'foresight'],
                        nature: Nature.Gentle,
                        ivs: 4,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 25,
                        moves: ['confusion', 'force-palm'],
                        nature: Nature.Hardy,
                        ivs: 4,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        moves: ['karate-chop', 'foresight'],
                        nature: Nature.Hardy,
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    'black-belt-rafael': {
        metadata: [],
        trainerClass: 'black-belt',
        name: 'Rafael',
        teams: [
            {
                team: [
                    {
                        slug: 'croagunk',
                        ability: 'anticipation',
                        gender: 'male',
                        level: 26,
                        moves: ['swagger', 'revenge', 'feint-attack'],
                        nature: Nature.Serious,
                        ivs: 4,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        moves: ['karate-chop', 'foresight'],
                        nature: Nature.Bold,
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    'black-belt-jeffery': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'black-belt',
        name: 'Jeffery',
        teams: [
            {
                team: [
                    {
                        slug: 'heracross',
                        ability: 'swarm',
                        gender: 'male',
                        level: 28,
                        moves: ['brick-break', 'aerial-ace', 'leer'],
                        nature: Nature.Mild,
                        ivs: 4,
                    },
                ],
            },
        ],
    },
    'leader-maylene': {
        metadata: [BattleMetadata.Boss],
        trainerClass: 'leader-maylene',
        name: 'Maylene',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 28,
                        moves: [
                            'drain-punch',
                            'confusion',
                            'rock-tomb',
                            'fake-out',
                        ],
                        nature: Nature.Brave,
                        ivs: 24,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 29,
                        moves: [
                            'karate-chop',
                            'rock-tomb',
                            'strength',
                            'focus-energy',
                        ],
                        nature: Nature.Naughty,
                        ivs: 24,
                    },
                    {
                        slug: 'lucario',
                        ability: 'steadfast',
                        gender: 'male',
                        level: 32,
                        moves: [
                            'drain-punch',
                            'force-palm',
                            'metal-claw',
                            'bone-rush',
                        ],
                        nature: Nature.Hasty,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'psychic-m-bryce': {
        metadata: [BattleMetadata.Optional],
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
                    },
                    {
                        slug: 'gardevoir',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Adamant,
                    },
                    {
                        slug: 'gengar',
                        ability: 'levitate',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Impish,
                    },
                ],
            },
        ],
    },
    'bird-keeper-hana': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'bird-keeper',
        name: 'Hana',
        teams: [
            {
                team: [
                    {
                        slug: 'noctowl',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Naive,
                    },
                    {
                        slug: 'togetic',
                        ability: 'hustle',
                        gender: 'male',
                        level: 47,
                        nature: Nature.Brave,
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-mariah': {
        metadata: [],
        trainerClass: 'ace-trainer-f',
        name: 'Mariah',
        teams: [
            {
                team: [
                    {
                        slug: 'blissey',
                        ability: 'natural-cure',
                        gender: 'female',
                        ivs: 6,
                        level: 45,
                        nature: Nature.Naughty,
                        moves: [
                            'double-edge',
                            'sing',
                            'soft-boiled',
                            'light-screen',
                        ],
                    },
                    {
                        slug: 'glalie',
                        ability: 'inner-focus',
                        gender: 'female',
                        ivs: 6,
                        level: 46,
                        nature: Nature.Naughty,
                        moves: [
                            'ice-beam',
                            'crunch',
                            'headbutt',
                            'shadow-ball',
                        ],
                    },
                    {
                        slug: 'magnezone',
                        ability: 'magnet-pull',
                        ivs: 6,
                        level: 48,
                        nature: Nature.Naive,
                        moves: [
                            'discharge',
                            'flash-cannon',
                            'thunder-wave',
                            'barrier',
                        ],
                    },
                ],
            },
        ],
    },
    'black-belt-miles': {
        metadata: [],
        trainerClass: 'black-belt',
        name: 'Miles',
        teams: [
            {
                team: [
                    {
                        slug: 'machamp',
                        ability: 'guts',
                        gender: 'male',
                        ivs: 3,
                        level: 48,
                        nature: Nature.Serious,
                    },
                ],
            },
        ],
    },
    'veteran-edgar': {
        metadata: [],
        trainerClass: 'veteran',
        name: 'Edgar',
        teams: [
            {
                team: [
                    {
                        slug: 'porygon-z',
                        ability: 'adaptability',
                        ivs: 12,
                        level: 46,
                        nature: Nature.Naive,
                        moves: [
                            'hyper-beam',
                            'signal-beam',
                            'psychic',
                            'thunderbolt',
                        ],
                    },
                    {
                        slug: 'tangrowth',
                        ability: 'chlorophyll',
                        gender: 'male',
                        ivs: 12,
                        level: 46,
                        nature: Nature.Hardy,
                        moves: ['power-whip', 'mega-drain', 'toxic', 'slam'],
                    },
                    {
                        slug: 'empoleon',
                        ability: 'torrent',
                        gender: 'male',
                        ivs: 12,
                        level: 46,
                        nature: Nature.Modest,
                        moves: ['brine', 'drill-peck', 'metal-claw', 'growl'],
                    },
                ],
            },
        ],
    },
    'dragon-tamer-clinton': {
        metadata: [],
        trainerClass: 'dragon-tamer',
        name: 'Clinton',
        teams: [
            {
                team: [
                    {
                        slug: 'gible',
                        ability: 'sand-veil',
                        gender: 'male',
                        ivs: 6,
                        level: 43,
                        nature: Nature.Relaxed,
                    },
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'male',
                        ivs: 6,
                        level: 45,
                        nature: Nature.Calm,
                    },
                    {
                        slug: 'gabite',
                        ability: 'sand-veil',
                        gender: 'male',
                        ivs: 6,
                        level: 47,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-omar': {
        metadata: [],
        trainerClass: 'ace-trainer-m',
        name: 'Omar',
        teams: [
            {
                team: [
                    {
                        slug: 'mamoswine',
                        ability: 'oblivious',
                        gender: 'male',
                        ivs: 6,
                        level: 45,
                        nature: Nature.Serious,
                        moves: [
                            'blizzard',
                            'ice-fang',
                            'rock-slide',
                            'giga-impact',
                        ],
                    },
                    {
                        slug: 'mothim',
                        ability: 'swarm',
                        gender: 'male',
                        ivs: 6,
                        level: 46,
                        nature: Nature.Sassy,
                        moves: ['silver-wind', 'air-slash', 'psychic', 'toxic'],
                    },
                    {
                        slug: 'rampardos',
                        ability: 'mold-breaker',
                        gender: 'male',
                        ivs: 6,
                        level: 48,
                        nature: Nature.Bold,
                        moves: [
                            'head-smash',
                            'zen-headbutt',
                            'ancient-power',
                            'screech',
                        ],
                    },
                ],
            },
        ],
    },
    'ace-trainer-f-sydney': {
        metadata: [],
        trainerClass: 'ace-trainer-f',
        name: 'Sydney',
        teams: [
            {
                team: [
                    {
                        slug: 'clefable',
                        ability: 'cute-charm',
                        gender: 'female',
                        ivs: 6,
                        level: 47,
                        nature: Nature.Naughty,
                        moves: [
                            'meteor-mash',
                            'reflect',
                            'light-screen',
                            'gravity',
                        ],
                    },
                    {
                        slug: 'torterra',
                        ability: 'overgrow',
                        gender: 'male',
                        ivs: 6,
                        level: 48,
                        nature: Nature.Lonely,
                        moves: [
                            'earthquake',
                            'crunch',
                            'leech-seed',
                            'synthesis',
                        ],
                    },
                ],
            },
        ],
    },
    'veteran-clayton': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'veteran',
        name: 'Clayton',
        teams: [
            {
                team: [
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        ivs: 12,
                        level: 47,
                        nature: Nature.Quiet,
                        moves: [
                            'brave-bird',
                            'quick-attack',
                            'double-team',
                            'growl',
                        ],
                    },
                    {
                        slug: 'lickilicky',
                        ability: 'own-tempo',
                        gender: 'male',
                        ivs: 12,
                        level: 47,
                        nature: Nature.Hardy,
                        moves: [
                            'slam',
                            'power-whip',
                            'earthquake',
                            'brick-break',
                        ],
                    },
                ],
            },
        ],
    },
    'double-team-al-and-kay': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        trainerClass: 'double-team',
        name: 'Al & Kay',
        teams: [
            {
                team: [
                    {
                        slug: 'staraptor',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 50,
                        nature: Nature.Timid,
                        moves: [
                            'close-combat',
                            'brave-bird',
                            'growl',
                            'quick-attack',
                        ],
                    },
                    {
                        slug: 'ambipom',
                        ability: 'technician',
                        gender: 'male',
                        level: 50,
                        nature: Nature.Hardy,
                        moves: [
                            'double-hit',
                            'aerial-ace',
                            'shock-wave',
                            'water-pulse',
                        ],
                    },
                ],
            },
        ],
    },
    'psychic-f-valencia': {
        metadata: [],
        trainerClass: 'psychic-f',
        name: 'Valencia',
        teams: [
            {
                team: [
                    {
                        slug: 'chimecho',
                        ability: 'levitate',
                        gender: 'female',
                        level: 44,
                        nature: Nature.Rash,
                    },
                    {
                        slug: 'absol',
                        ability: 'pressure',
                        gender: 'female',
                        level: 45,
                        nature: Nature.Docile,
                    },
                    {
                        slug: 'dusknoir',
                        ability: 'pressure',
                        gender: 'female',
                        level: 46,
                        nature: Nature.Docile,
                    },
                ],
            },
        ],
    },
    'double-team-jo-and-pat': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        trainerClass: 'double-team',
        name: 'Jo & Pat',
        teams: [
            {
                team: [
                    {
                        slug: 'lumineon',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 50,
                        nature: Nature.Lax,
                        moves: [
                            'water-pulse',
                            'aqua-ring',
                            'captivate',
                            'silver-wind',
                        ],
                    },
                    {
                        slug: 'rapidash',
                        ability: 'run-away',
                        gender: 'male',
                        level: 50,
                        nature: Nature.Quiet,
                        moves: [
                            'fire-blast',
                            'stomp',
                            'quick-attack',
                            'iron-tail',
                        ],
                    },
                ],
            },
        ],
    },
    'ace-trainer-m-henry': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ace-trainer-m',
        name: 'Henry',
        teams: [
            {
                team: [
                    {
                        slug: 'rhydon',
                        ability: 'lightning-rod',
                        gender: 'male',
                        ivs: 6,
                        level: 47,
                        nature: Nature.Impish,
                        moves: [
                            'stone-edge',
                            'earthquake',
                            'hammer-arm',
                            'take-down',
                        ],
                    },
                    {
                        slug: 'carnivine',
                        ability: 'levitate',
                        gender: 'male',
                        ivs: 6,
                        level: 48,
                        nature: Nature.Lax,
                        moves: [
                            'wring-out',
                            'crunch',
                            'feint-attack',
                            'ingrain',
                        ],
                    },
                ],
            },
        ],
    },
    'dragon-tamer-ondrej': {
        metadata: [],
        trainerClass: 'dragon-tamer',
        name: 'Ondrej',
        teams: [
            {
                team: [
                    {
                        slug: 'altaria',
                        ability: 'natural-cure',
                        gender: 'male',
                        ivs: 6,
                        level: 45,
                        nature: Nature.Calm,
                    },
                    {
                        slug: 'gabite',
                        ability: 'sand-veil',
                        gender: 'male',
                        ivs: 6,
                        level: 47,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-mira-tag': {
        metadata: [],
        trainerClass: 'pkmn-trainer-mira',
        name: 'Mira',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 26,
                        moves: ['shock-wave', 'kinesis', 'confusion', 'flash'],
                        nature: Nature.Serious,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'camper-diego': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'camper',
        name: 'Diego',
        teams: [
            {
                team: [
                    {
                        slug: 'aipom',
                        ability: 'run-away',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Hardy,
                    },
                ],
            },
        ],
    },
    'picnicker-tori': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'picnicker',
        name: 'Tori',
        teams: [
            {
                team: [
                    {
                        slug: 'psyduck',
                        ability: 'damp',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Gentle,
                    },
                ],
            },
        ],
    },
    'hiker-reginald': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Reginald',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Mild,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'hiker-lorenzo': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Lorenzo',
        teams: [
            {
                team: [
                    {
                        slug: 'onix',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Mild,
                    },
                ],
            },
        ],
    },
    'lass-cassidy': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lass',
        name: 'Cassidy',
        teams: [
            {
                team: [
                    {
                        slug: 'buneary',
                        ability: 'run-away',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Careful,
                    },
                ],
            },
        ],
    },
    'youngster-wayne': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Wayne',
        teams: [
            {
                team: [
                    {
                        slug: 'staravia',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'shellos',
                        ability: 'sticky-hold',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Bold,
                    },
                    {
                        slug: 'ponyta',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
    'picnicker-ana': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'picnicker',
        name: 'Ana',
        teams: [
            {
                team: [
                    {
                        slug: 'hoothoot',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Lonely,
                    },
                ],
            },
        ],
    },
    'camper-parker': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'camper',
        name: 'Parker',
        teams: [
            {
                team: [
                    {
                        slug: 'buizel',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Naughty,
                        moves: ['water-gun', 'swift', 'quick-attack'],
                    },
                    {
                        slug: 'shinx',
                        ability: 'rivalry',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Lonely,
                        moves: ['spark', 'bite'],
                    },
                ],
            },
        ],
    },
    'collector-terry': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'collector',
        name: 'Terry',
        teams: [
            {
                team: [
                    {
                        slug: 'gible',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Lax,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-gerald': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'ruin-maniac',
        name: 'Gerald',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'bronzor',
                        ability: 'levitate',
                        level: 21,
                        nature: Nature.Calm,
                    },
                ],
            },
        ],
    },
};
