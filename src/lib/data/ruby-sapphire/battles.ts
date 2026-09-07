import { BattleMetadata, Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

export const BATTLES: Record<string, BattleData> = {
    'pkmn-trainer-brendan': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'pkmn-trainer-brendan',
        name: 'Brendan',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                team: [
                    {
                        slug: 'treecko',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'torchic',
                        ability: 'blaze',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                team: [
                    {
                        slug: 'mudkip',
                        ability: 'torrent',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-may': {
        metadata: [BattleMetadata.Miniboss],
        trainerClass: 'pkmn-trainer-may',
        name: 'May',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                team: [
                    {
                        slug: 'treecko',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'torchic',
                        ability: 'blaze',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                team: [
                    {
                        slug: 'mudkip',
                        ability: 'torrent',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aroma-lady-daisy': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'aroma-lady',
        name: 'Daisy',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pokefan-m-miguel': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'pokefan-m',
        name: 'Miguel',
        teams: [
            {
                team: [
                    {
                        slug: 'skitty',
                        ability: 'cute-charm',
                        gender: 'female',
                        heldItem: 'oran-berry',
                        level: 16,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-andrew': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'fisherman',
        name: 'Andrew',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'twins-amy-and-liv': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Brawly',
        trainerClass: 'twins',
        name: 'Amy & Liv',
        teams: [
            {
                team: [
                    {
                        slug: 'plusle',
                        ability: 'plus',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'minun',
                        ability: 'minus',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-calvin': {
        metadata: [],
        trainerClass: 'youngster',
        name: 'Calvin',
        teams: [
            {
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-catcher-rick': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'bug-catcher',
        name: 'Rick',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 4,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 4,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-allen': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Allen',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 3,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-tiana': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lass',
        name: 'Tiana',
        teams: [
            {
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'female',
                        level: 4,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'female',
                        level: 4,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-billy': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Billy',
        teams: [
            {
                team: [
                    {
                        slug: 'seedot',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'rich-boy-winston': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'rich-boy',
        name: 'Winston',
        teams: [
            {
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        heldItem: 'nugget',
                        level: 7,
                        nature: Nature.Gentle,
                        ivs: 0,
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
    'lady-cindy': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lady',
        name: 'Cindy',
        teams: [
            {
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'female',
                        heldItem: 'nugget',
                        level: 7,
                        nature: Nature.Rash,
                        ivs: 0,
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
    'lass-haley': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lass',
        name: 'Haley',
        teams: [
            {
                team: [
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 7,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 7,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'twins-gina-and-mia': {
        metadata: [BattleMetadata.TrueDouble],
        trainerClass: 'twins',
        name: 'Gina & Mia',
        teams: [
            {
                team: [
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                    {
                        slug: 'seedot',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-ivan': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'fisherman',
        name: 'Ivan',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-catcher-lyle': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'bug-catcher',
        name: 'Lyle',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 3,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 3,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 3,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 3,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 3,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 3,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-petalburg-woods': {
        metadata: [],
        trainerClass: 'team-magma-grunt-m',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-petalburg-woods': {
        metadata: [],
        trainerClass: 'team-aqua-grunt-m',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-catcher-james': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'bug-catcher',
        name: 'James',
        teams: [
            {
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-nob': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'black-belt',
        name: 'Nob',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'battle-girl-cyndy': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'battle-girl',
        name: 'Cyndy',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'collector-hector-ruby': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'collector',
        name: 'Hector',
        teams: [
            {
                team: [
                    {
                        slug: 'seviper',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-hector-sapphire': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'collector',
        name: 'Hector',
        teams: [
            {
                team: [
                    {
                        slug: 'zangoose',
                        ability: 'immunity',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'expert-m-timothy': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'expert-m',
        name: 'Timothy',
        teams: [
            {
                team: [
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Quiet,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'black-belt-koichi': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'black-belt',
        name: 'Koichi',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'youngster-joey': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Joey',
        teams: [
            {
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-catcher-jose': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'bug-catcher',
        name: 'Jose',
        teams: [
            {
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Naughty,
                        ivs: 6,
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Gentle,
                        ivs: 6,
                    },
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Quiet,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'lass-janice': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'lass',
        name: 'Janice',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 10,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-clark': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'hiker',
        name: 'Clark',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'school-kid-m-jerry': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'school-kid-m',
        name: 'Jerry',
        teams: [
            {
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Sassy,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'school-kid-f-karen': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'school-kid-f',
        name: 'Karen',
        teams: [
            {
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 9,
                        nature: Nature.Relaxed,
                        ivs: 1,
                    },
                    {
                        slug: 'whismur',
                        ability: 'soundproof',
                        gender: 'female',
                        level: 9,
                        nature: Nature.Lax,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-rusturf-tunnel': {
        metadata: [],
        trainerClass: 'team-magma-grunt-m',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-rusturf-tunnel': {
        metadata: [],
        trainerClass: 'team-aqua-grunt-m',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-mike': {
        metadata: [],
        split: 'Brawly',
        trainerClass: 'hiker',
        name: 'Mike',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-josh': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Josh',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 10,
                        moves: ['tackle'],
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        moves: ['tackle'],
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 6,
                        moves: ['tackle'],
                        nature: Nature.Careful,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'youngster-tommy': {
        metadata: [BattleMetadata.Optional],
        trainerClass: 'youngster',
        name: 'Tommy',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Timid,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'leader-roxanne': {
        metadata: [BattleMetadata.Boss],
        trainerClass: 'leader-roxanne',
        name: 'Roxanne',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'female',
                        level: 14,
                        moves: [
                            'tackle',
                            'defense-curl',
                            'rock-throw',
                            'rock-tomb',
                        ],
                        nature: Nature.Docile,
                        ivs: 18,
                    },
                    {
                        slug: 'nosepass',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 15,
                        moves: ['tackle', 'harden', 'rock-throw', 'rock-tomb'],
                        nature: Nature.Modest,
                        ivs: 24,
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
};
