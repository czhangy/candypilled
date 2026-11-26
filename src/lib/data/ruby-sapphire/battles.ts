import { BattleMetadata, Gen3AiFlag, Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

export const BATTLES: Record<string, BattleData> = {
    'pkmn-trainer-brendan': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Roxanne',
        trainerClass: 'pkmn-trainer-brendan',
        name: 'Brendan',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
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
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.SetupFirstTurn,
                ],
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
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
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
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Roxanne',
        trainerClass: 'pkmn-trainer-may',
        name: 'May',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
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
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
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
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        metadata: [BattleMetadata.Required],
        split: 'Roxanne',
        trainerClass: 'youngster',
        name: 'Calvin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'bug-catcher',
        name: 'Rick',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'youngster',
        name: 'Allen',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'lass',
        name: 'Tiana',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'youngster',
        name: 'Billy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'rich-boy',
        name: 'Winston',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                slug: 'full-restore',
            },
        ],
    },
    'lady-cindy': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
        trainerClass: 'lady',
        name: 'Cindy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                slug: 'full-restore',
            },
        ],
    },
    'lass-haley': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
        trainerClass: 'lass',
        name: 'Haley',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        metadata: [BattleMetadata.Required, BattleMetadata.TrueDouble],
        split: 'Roxanne',
        trainerClass: 'twins',
        name: 'Gina & Mia',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'fisherman',
        name: 'Ivan',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'bug-catcher',
        name: 'Lyle',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        metadata: [BattleMetadata.Required],
        split: 'Roxanne',
        trainerClass: 'team-magma-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        metadata: [BattleMetadata.Required],
        split: 'Roxanne',
        trainerClass: 'team-aqua-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'bug-catcher',
        name: 'James',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'youngster',
        name: 'Joey',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'bug-catcher',
        name: 'Jose',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'lass',
        name: 'Janice',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'hiker',
        name: 'Clark',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        metadata: [BattleMetadata.Required],
        split: 'Brawly',
        trainerClass: 'team-magma-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        metadata: [BattleMetadata.Required],
        split: 'Brawly',
        trainerClass: 'team-aqua-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'hiker',
        name: 'Mike',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'youngster',
        name: 'Josh',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'youngster',
        name: 'Tommy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
        split: 'Roxanne',
        trainerClass: 'leader-roxanne',
        name: 'Roxanne',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
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
                slug: 'potion',
            },
        ],
    },
    'swimmer-f-beth': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Beth',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-darrin': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Darrin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sis-and-bro-lisa-and-ray': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'sis-and-bro',
        name: 'Lisa & Ray',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-tony': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Tony',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-denise': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Denise',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-ned': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'fisherman',
        name: 'Ned',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-elliot': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'fisherman',
        name: 'Elliot',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-douglas': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Douglas',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-nicole': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Nicole',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-huey': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'sailor',
        name: 'Huey',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-edmond': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'sailor',
        name: 'Edmond',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-m-ricky': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'tuber-m',
        name: 'Ricky',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 14,
                        moves: ['sand-attack', 'headbutt', 'tail-whip', 'surf'],
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-f-lola': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'tuber-f',
        name: 'Lola',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-m-simon': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'tuber-m',
        name: 'Simon',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'beauty-johanna': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'beauty',
        name: 'Johanna',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-dwayne': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'sailor',
        name: 'Dwayne',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-f-gwen': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'tuber-f',
        name: 'Gwen',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-f-carmen': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'tuber-f',
        name: 'Carmen',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-alice': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Alice',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-david': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'David',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'young-couple-mel-and-paul': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'young-couple',
        name: 'Mel & Paul',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 27,
                        moves: ['gust', 'psybeam', 'toxic', 'protect'],
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 27,
                        moves: ['gust', 'mega-drain', 'attract', 'stun-spore'],
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-carter': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Carter',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-oceanic-museum': {
        metadata: [BattleMetadata.Required, BattleMetadata.BackToBack],
        split: 'Brawly',
        plainName: true,
        trainerClass: 'team-magma-grunt-m',
        name: 'Team Magma Grunts',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-oceanic-museum': {
        metadata: [BattleMetadata.Required, BattleMetadata.BackToBack],
        split: 'Brawly',
        plainName: true,
        trainerClass: 'team-aqua-grunt-m',
        name: 'Team Aqua Grunts',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pokefan-f-isabel': {
        metadata: [BattleMetadata.Required],
        split: 'Brawly',
        trainerClass: 'pokefan-f',
        name: 'Isabel',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'plusle',
                        ability: 'plus',
                        gender: 'female',
                        heldItem: 'oran-berry',
                        level: 15,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'minun',
                        ability: 'minus',
                        gender: 'female',
                        heldItem: 'oran-berry',
                        level: 15,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-timmy': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'youngster',
        name: 'Timmy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-edwin': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'collector',
        name: 'Edwin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-edward': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'psychic-m',
        name: 'Edward',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 16,
                        moves: ['hidden-power'],
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-dale': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'fisherman',
        name: 'Dale',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-brendan-route-110': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Brawly',
        trainerClass: 'pkmn-trainer-brendan',
        name: 'Brendan',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Mild,
                        ivs: 6,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quirky,
                        ivs: 6,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Rash,
                        ivs: 6,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quiet,
                        ivs: 6,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Lax,
                        ivs: 6,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Naive,
                        ivs: 6,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Docile,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-may-route-110': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Brawly',
        trainerClass: 'pkmn-trainer-may',
        name: 'May',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Hardy,
                        ivs: 6,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Brave,
                        ivs: 6,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Hardy,
                        ivs: 6,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Calm,
                        ivs: 6,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Modest,
                        ivs: 6,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Quiet,
                        ivs: 6,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Docile,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'psychic-f-jaclyn': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'psychic-f',
        name: 'Jaclyn',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 16,
                        moves: ['hidden-power'],
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-biker-f-abigail': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'triathlete-biker-f',
        name: 'Abigail',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 17,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-biker-m-anthony': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'triathlete-biker-m',
        name: 'Anthony',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 16,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 16,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-biker-m-benjamin': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'triathlete-biker-m',
        name: 'Benjamin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 17,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-biker-f-jasmine': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'triathlete-biker-f',
        name: 'Jasmine',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 15,
                        nature: Nature.Quirky,
                        ivs: 9,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 15,
                        nature: Nature.Adamant,
                        ivs: 9,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 7,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-biker-m-jacob': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'triathlete-biker-m',
        name: 'Jacob',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 7,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 7,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 15,
                        nature: Nature.Sassy,
                        ivs: 19,
                    },
                ],
            },
        ],
    },
    'lass-sally': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'lass',
        name: 'Sally',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'oddish',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-robin': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'lass',
        name: 'Robin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'skitty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-eddie': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'youngster',
        name: 'Eddie',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'school-kid-m-ted': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'school-kid-m',
        name: 'Ted',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'school-kid-m-paul': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'school-kid-m',
        name: 'Paul',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Calm,
                        ivs: 1,
                    },
                    {
                        slug: 'oddish',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Lax,
                        ivs: 1,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Careful,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'school-kid-f-georgia': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'school-kid-f',
        name: 'Georgia',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Quiet,
                        ivs: 1,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Lonely,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'camper-justin': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'camper',
        name: 'Justin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kecleon',
                        ability: 'color-change',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-martha': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'picnicker',
        name: 'Martha',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'skitty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 23,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-alan': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'hiker',
        name: 'Alan',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'nosepass',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-yuji': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'black-belt',
        name: 'Yuji',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'battle-girl-cora': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'battle-girl',
        name: 'Cora',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'battle-girl-jill': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'battle-girl',
        name: 'Jill',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'breloom',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-f-sophia': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'pkmn-ranger-f',
        name: 'Sophia',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Jolly,
                        ivs: 6,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Adamant,
                        ivs: 6,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                slug: 'full-restore',
            },
        ],
    },
    'pkmn-ranger-m-sebastian': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'pkmn-ranger-m',
        name: 'Sebastian',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'cacturne',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Impish,
                        ivs: 6,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                slug: 'full-restore',
            },
        ],
    },
    'bird-keeper-benny': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'bird-keeper',
        name: 'Benny',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'xatu',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-joshua': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'psychic-m',
        name: 'Joshua',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'solrock',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 41,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hex-maniac-patricia': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'hex-maniac',
        name: 'Patricia',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'banette',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-f-alexis': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'psychic-f',
        name: 'Alexis',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'xatu',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-wally': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Brawly',
        trainerClass: 'pkmn-trainer-wally',
        name: 'Wally',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 16,
                        moves: [
                            'growl',
                            'confusion',
                            'double-team',
                            'teleport',
                        ],
                        nature: Nature.Naughty,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'aroma-lady-rose': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'aroma-lady',
        name: 'Rose',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 16,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-wade': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'fisherman',
        name: 'Wade',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'guitarist-dalton': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'guitarist',
        name: 'Dalton',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 15,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'whismur',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 15,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'interviewers-gabby-and-ty': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'interviewers',
        name: 'Gabby & Ty',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 27,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                    {
                        slug: 'loudred',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Adamant,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'fisherman-barny': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Barny',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-chester': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Chester',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-perry': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Perry',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'interviewers-gabby-and-ty-route-111': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Flannery',
        trainerClass: 'interviewers',
        name: 'Gabby & Ty',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 19,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'whismur',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-irene': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'picnicker',
        name: 'Irene',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-travis': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'camper',
        name: 'Travis',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-cliff': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'camper',
        name: 'Cliff',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 22,
                        moves: [
                            'rapid-spin',
                            'mud-slap',
                            'psybeam',
                            'rock-tomb',
                        ],
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 22,
                        moves: [
                            'poison-sting',
                            'sand-attack',
                            'scratch',
                            'dig',
                        ],
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 22,
                        moves: [
                            'rapid-spin',
                            'mud-slap',
                            'psybeam',
                            'rock-tomb',
                        ],
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-heidi': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'picnicker',
        name: 'Heidi',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'female',
                        level: 23,
                        moves: ['dig', 'sand-attack', 'poison-sting', 'slash'],
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 23,
                        moves: [
                            'rapid-spin',
                            'mud-slap',
                            'psybeam',
                            'rock-tomb',
                        ],
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-drew': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'camper',
        name: 'Drew',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 24,
                        moves: ['dig', 'sand-attack', 'poison-sting', 'slash'],
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-dusty': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'ruin-maniac',
        name: 'Dusty',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 24,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                        nature: Nature.Lonely,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'picnicker-becky': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'picnicker',
        name: 'Becky',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'female',
                        level: 24,
                        moves: ['sand-attack', 'poison-sting', 'slash', 'dig'],
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-wilton': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'cooltrainer-m',
        name: 'Wilton',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                slug: 'super-potion',
            },
        ],
    },
    'cooltrainer-f-brooke': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'cooltrainer-f',
        name: 'Brooke',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                ],
            },
        ],
        items: [
            {
                count: 1,
                slug: 'super-potion',
            },
        ],
    },
    'black-belt-daisuke': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'black-belt',
        name: 'Daisuke',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'winstrate-family': {
        metadata: [BattleMetadata.Optional, BattleMetadata.BackToBack],
        split: 'Brawly',
        plainName: true,
        trainerClass: 'pokefan-m',
        name: 'Winstrate Family',
        teams: [
            {
                trainerClass: 'pokefan-m',
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        heldItem: 'oran-berry',
                        level: 16,
                        nature: Nature.Bashful,
                        ivs: 3,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        heldItem: 'oran-berry',
                        level: 16,
                        nature: Nature.Hardy,
                        ivs: 3,
                    },
                ],
            },
            {
                trainerClass: 'pokefan-f',
                aiFlags: [Gen3AiFlag.CheckBadMove, Gen3AiFlag.CheckViability],
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        heldItem: 'oran-berry',
                        level: 17,
                        nature: Nature.Mild,
                        ivs: 6,
                    },
                ],
            },
            {
                trainerClass: 'lass',
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                ],
            },
            {
                trainerClass: 'expert-f',
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 18,
                        moves: [
                            'high-jump-kick',
                            'meditate',
                            'confusion',
                            'detect',
                        ],
                        nature: Nature.Impish,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'sr-and-jr-anna-and-meg': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Brawly',
        trainerClass: 'sr-and-jr',
        name: 'Anna & Meg',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 16,
                        moves: [
                            'growl',
                            'tail-whip',
                            'headbutt',
                            'odor-sleuth',
                        ],
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 18,
                        moves: ['tackle', 'focus-energy', 'arm-thrust'],
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-runner-m-dylan': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'triathlete-runner-m',
        name: 'Dylan',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'doduo',
                        ability: 'run-away',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-f-lydia': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'pkmn-breeder-f',
        name: 'Lydia',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'skitty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-runner-f-maria': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'triathlete-runner-f',
        name: 'Maria',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'doduo',
                        ability: 'run-away',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-maniac-derek': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'bug-maniac',
        name: 'Derek',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Naive,
                        ivs: 18,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Brave,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-m-isaac': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'pkmn-breeder-m',
        name: 'Isaac',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'whismur',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'battle-girl-laura': {
        metadata: [BattleMetadata.Required],
        split: 'Brawly',
        trainerClass: 'battle-girl',
        name: 'Laura',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Docile,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'black-belt-hideki': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'black-belt',
        name: 'Hideki',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'battle-girl-tessa': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'battle-girl',
        name: 'Tessa',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'leader-brawly': {
        metadata: [BattleMetadata.Boss],
        split: 'Brawly',
        trainerClass: 'leader-brawly',
        name: 'Brawly',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 17,
                        moves: [
                            'leer',
                            'karate-chop',
                            'seismic-toss',
                            'bulk-up',
                        ],
                        nature: Nature.Hardy,
                        ivs: 18,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 18,
                        moves: [
                            'arm-thrust',
                            'knock-off',
                            'sand-attack',
                            'bulk-up',
                        ],
                        nature: Nature.Naive,
                        ivs: 24,
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                slug: 'super-potion',
            },
        ],
    },
    'guitarist-kirk': {
        metadata: [BattleMetadata.Choice],
        split: 'Wattson',
        trainerClass: 'guitarist',
        name: 'Kirk',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 18,
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'youngster-ben': {
        metadata: [BattleMetadata.Choice],
        split: 'Wattson',
        trainerClass: 'youngster',
        name: 'Ben',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 19,
                        moves: [
                            'headbutt',
                            'sand-attack',
                            'growl',
                            'thunderbolt',
                        ],
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'guitarist-shawn': {
        metadata: [BattleMetadata.Required],
        split: 'Wattson',
        trainerClass: 'guitarist',
        name: 'Shawn',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 17,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 17,
                        nature: Nature.Careful,
                        ivs: 12,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 17,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'battle-girl-vivian': {
        metadata: [BattleMetadata.Choice],
        split: 'Wattson',
        trainerClass: 'battle-girl',
        name: 'Vivian',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 19,
                        moves: ['bide', 'detect', 'confusion', 'thunder-punch'],
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'leader-wattson': {
        metadata: [BattleMetadata.Boss],
        split: 'Wattson',
        trainerClass: 'leader-wattson',
        name: 'Wattson',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 22,
                        moves: [
                            'supersonic',
                            'sonic-boom',
                            'thunder-shock',
                            'thunder-wave',
                        ],
                        nature: Nature.Hasty,
                        ivs: 24,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 20,
                        moves: [
                            'rollout',
                            'self-destruct',
                            'spark',
                            'sonic-boom',
                        ],
                        nature: Nature.Docile,
                        ivs: 24,
                    },
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 23,
                        moves: [
                            'supersonic',
                            'sonic-boom',
                            'shock-wave',
                            'thunder-wave',
                        ],
                        nature: Nature.Brave,
                        ivs: 30,
                    },
                ],
            },
        ],
        items: [
            {
                count: 2,
                slug: 'super-potion',
            },
        ],
    },
    'camper-larry': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'camper',
        name: 'Larry',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-carol': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'picnicker',
        name: 'Carol',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-trent': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'hiker',
        name: 'Trent',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
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
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-brice': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'hiker',
        name: 'Brice',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-neal': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'youngster',
        name: 'Neal',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'trapinch',
                        ability: 'hyper-cutter',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'linoone',
                        ability: 'pickup',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-lao': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'ninja-boy',
        name: 'Lao',
        teams: [
            {
                aiFlags: [],
                team: [
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Sassy,
                        ivs: 0,
                        moves: [
                            'poison-gas',
                            'tackle',
                            'smog',
                            'self-destruct',
                        ],
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                        ivs: 0,
                        moves: ['poison-gas', 'tackle', 'smog'],
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Rash,
                        ivs: 0,
                        moves: [
                            'poison-gas',
                            'tackle',
                            'smog',
                            'self-destruct',
                        ],
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bold,
                        ivs: 0,
                        moves: ['tackle', 'smog'],
                    },
                ],
            },
        ],
    },
    'parasol-lady-madeline': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'parasol-lady',
        name: 'Madeline',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Gentle,
                        ivs: 0,
                        moves: ['ember', 'tackle', 'magnitude', 'sunny-day'],
                    },
                ],
            },
        ],
    },
    'twins-tori-and-tia': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Flannery',
        trainerClass: 'twins',
        name: 'Tori & Tia',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'whismur',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'whismur',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-lung': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'ninja-boy',
        name: 'Lung',
        teams: [
            {
                aiFlags: [],
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-dillon': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'youngster',
        name: 'Dillon',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-nolan': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'fisherman',
        name: 'Nolan',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-claude': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'fisherman',
        name: 'Claude',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-nancy': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'picnicker',
        name: 'Nancy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sr-and-jr-tyra-and-ivy': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Flannery',
        trainerClass: 'sr-and-jr',
        name: 'Tyra & Ivy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Mild,
                        ivs: 0,
                        moves: [
                            'growth',
                            'stun-spore',
                            'mega-drain',
                            'leech-seed',
                        ],
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Quirky,
                        ivs: 0,
                        moves: [
                            'defense-curl',
                            'rollout',
                            'mud-sport',
                            'rock-throw',
                        ],
                    },
                ],
            },
        ],
    },
    'camper-shane': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'camper',
        name: 'Shane',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'poke-maniac-steve': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'poke-maniac',
        name: 'Steve',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'kindler-bernie': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'kindler',
        name: 'Bernie',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-lucas': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'hiker',
        name: 'Lucas',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-lenny': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'hiker',
        name: 'Lenny',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'old-couple-john-and-jay': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Steven',
        trainerClass: 'old-couple',
        name: 'John & Jay',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Sassy,
                        ivs: 24,
                        moves: ['psychic', 'fire-punch', 'psych-up', 'protect'],
                    },
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Hasty,
                        ivs: 24,
                        moves: [
                            'focus-punch',
                            'rock-tomb',
                            'rest',
                            'belly-drum',
                        ],
                    },
                ],
            },
        ],
    },
    'dragon-tamer-nicolas': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'dragon-tamer',
        name: 'Nicolas',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'altaria',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                    {
                        slug: 'altaria',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-mt-chimney': {
        metadata: [BattleMetadata.Required],
        split: 'Flannery',
        trainerClass: 'team-magma-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-mt-chimney': {
        metadata: [BattleMetadata.Required],
        split: 'Flannery',
        trainerClass: 'team-aqua-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'magma-admin-tabitha': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Flannery',
        trainerClass: 'magma-admin-tabitha',
        name: 'Tabitha',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Lax,
                        ivs: 6,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Bashful,
                        ivs: 6,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Mild,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'aqua-admin-matt': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Flannery',
        trainerClass: 'aqua-admin-matt',
        name: 'Matt',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.SetupFirstTurn,
                ],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Timid,
                        ivs: 6,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Naughty,
                        ivs: 6,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Adamant,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'magma-leader-maxie': {
        metadata: [BattleMetadata.Boss],
        split: 'Flannery',
        trainerClass: 'magma-leader-maxie',
        name: 'Maxie',
        items: [
            {
                count: 2,
                slug: 'super-potion',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Lax,
                        ivs: 18,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Naive,
                        ivs: 18,
                    },
                    {
                        slug: 'camerupt',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Mild,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'aqua-leader-archie': {
        metadata: [BattleMetadata.Boss],
        split: 'Flannery',
        trainerClass: 'aqua-leader-archie',
        name: 'Archie',
        items: [
            {
                count: 2,
                slug: 'super-potion',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Brave,
                        ivs: 18,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Hardy,
                        ivs: 18,
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Naughty,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'beauty-shirley': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'beauty',
        name: 'Shirley',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'beauty-sheila': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'beauty',
        name: 'Sheila',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'expert-f-shelby': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'expert-f',
        name: 'Shelby',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Bold,
                        ivs: 24,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Lax,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'beauty-melissa': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'beauty',
        name: 'Melissa',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-eric': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'hiker',
        name: 'Eric',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 21,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 21,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-ethan': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'camper',
        name: 'Ethan',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-diana': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'picnicker',
        name: 'Diana',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'oddish',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'kindler-cole': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'kindler',
        name: 'Cole',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Gentle,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-zane': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'cooltrainer-m',
        name: 'Zane',
        items: [
            {
                count: 1,
                slug: 'hyper-potion',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'kecleon',
                        ability: 'color-change',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Adamant,
                        ivs: 12,
                        moves: [
                            'flamethrower',
                            'fury-swipes',
                            'feint-attack',
                            'bind',
                        ],
                    },
                ],
            },
        ],
    },
    'kindler-axle': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'kindler',
        name: 'Axle',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'battle-girl-sadie': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'battle-girl',
        name: 'Sadie',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Mild,
                        ivs: 12,
                        moves: ['bide', 'detect', 'confusion', 'fire-punch'],
                    },
                ],
            },
        ],
    },
    'kindler-andy': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'kindler',
        name: 'Andy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Careful,
                        ivs: 12,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Gentle,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'leader-flannery': {
        metadata: [BattleMetadata.Boss],
        split: 'Flannery',
        trainerClass: 'leader-flannery',
        name: 'Flannery',
        items: [
            {
                count: 2,
                slug: 'hyper-potion',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Brave,
                        ivs: 24,
                        moves: [
                            'overheat',
                            'smog',
                            'light-screen',
                            'sunny-day',
                        ],
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Lax,
                        ivs: 24,
                        moves: [
                            'flamethrower',
                            'rock-slide',
                            'light-screen',
                            'sunny-day',
                        ],
                    },
                    {
                        slug: 'torkoal',
                        ability: 'white-smoke',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Gentle,
                        ivs: 30,
                        moves: ['overheat', 'body-slam', 'flail', 'attract'],
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-randall': {
        metadata: [BattleMetadata.Choice],
        split: 'Norman',
        trainerClass: 'cooltrainer-m',
        name: 'Randall',
        items: [
            {
                count: 2,
                slug: 'x-speed',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'delcatty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-parker': {
        metadata: [BattleMetadata.Choice],
        split: 'Norman',
        trainerClass: 'cooltrainer-m',
        name: 'Parker',
        items: [
            {
                count: 2,
                slug: 'guard-spec',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'linoone',
                        ability: 'pickup',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-george': {
        metadata: [BattleMetadata.Choice],
        split: 'Norman',
        trainerClass: 'cooltrainer-m',
        name: 'George',
        items: [
            {
                count: 2,
                slug: 'super-potion',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'linoone',
                        ability: 'pickup',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-berke': {
        metadata: [BattleMetadata.Choice],
        split: 'Norman',
        trainerClass: 'cooltrainer-m',
        name: 'Berke',
        items: [
            {
                count: 2,
                slug: 'dire-hit',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'zangoose',
                        ability: 'immunity',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-mary': {
        metadata: [BattleMetadata.Choice],
        split: 'Norman',
        trainerClass: 'cooltrainer-f',
        name: 'Mary',
        items: [
            {
                count: 2,
                slug: 'x-accuracy',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'delcatty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-lori': {
        metadata: [BattleMetadata.Choice],
        split: 'Norman',
        trainerClass: 'cooltrainer-f',
        name: 'Lori',
        items: [
            {
                count: 2,
                slug: 'x-defense',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'linoone',
                        ability: 'pickup',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-jody': {
        metadata: [BattleMetadata.Choice],
        split: 'Norman',
        trainerClass: 'cooltrainer-f',
        name: 'Jody',
        items: [
            {
                count: 2,
                slug: 'x-attack',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.SetupFirstTurn,
                ],
                team: [
                    {
                        slug: 'zangoose',
                        ability: 'immunity',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Careful,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'leader-norman': {
        metadata: [BattleMetadata.Boss],
        split: 'Norman',
        trainerClass: 'leader-norman',
        name: 'Norman',
        items: [
            {
                count: 2,
                slug: 'hyper-potion',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'slaking',
                        ability: 'truant',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Relaxed,
                        ivs: 24,
                        moves: ['encore', 'facade', 'yawn', 'feint-attack'],
                    },
                    {
                        slug: 'vigoroth',
                        ability: 'vital-spirit',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Modest,
                        ivs: 24,
                        moves: ['slash', 'feint-attack', 'facade', 'encore'],
                    },
                    {
                        slug: 'slaking',
                        ability: 'truant',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Hasty,
                        ivs: 30,
                        moves: [
                            'focus-punch',
                            'slack-off',
                            'facade',
                            'feint-attack',
                        ],
                    },
                ],
            },
        ],
    },
    'swimmer-f-dawn': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Dawn',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-beverly': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Beverly',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-austin': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Austin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-foster': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ruin-maniac',
        name: 'Foster',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Modest,
                        ivs: 6,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                    },
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Timid,
                        ivs: 6,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                    },
                ],
            },
        ],
    },
    'swimmer-m-luis': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Luis',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-jerome': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Jerome',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-tara': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Tara',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-matthew': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Matthew',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-missy': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Missy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-duncan': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'sailor',
        name: 'Duncan',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-m-charlie': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'tuber-m',
        name: 'Charlie',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'young-couple-lois-and-hal': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'young-couple',
        name: 'Lois & Hal',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'volbeat',
                        ability: 'illuminate',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'illumise',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'twins-miu-and-yuki': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'twins',
        name: 'Miu & Yuki',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aroma-lady-violet': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'aroma-lady',
        name: 'Violet',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'gloom',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'breloom',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hex-maniac-kindra': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'hex-maniac',
        name: 'Kindra',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'duskull',
                        ability: 'levitate',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'shuppet',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-wendy': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-f',
        name: 'Wendy',
        items: [
            {
                count: 1,
                slug: 'full-restore',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.SetupFirstTurn,
                ],
                team: [
                    {
                        slug: 'mawile',
                        ability: 'hyper-cutter',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Hardy,
                        ivs: 12,
                        moves: [
                            'baton-pass',
                            'feint-attack',
                            'fake-tears',
                            'bite',
                        ],
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Quiet,
                        ivs: 12,
                        moves: [
                            'mega-drain',
                            'magical-leaf',
                            'grass-whistle',
                            'leech-seed',
                        ],
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Impish,
                        ivs: 12,
                        moves: ['fly', 'water-gun', 'mist', 'protect'],
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-clyde': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-m',
        name: 'Clyde',
        items: [
            {
                count: 1,
                slug: 'hyper-potion',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Lonely,
                        ivs: 12,
                        moves: [
                            'focus-energy',
                            'quick-attack',
                            'wing-attack',
                            'endeavor',
                        ],
                    },
                    {
                        slug: 'trapinch',
                        ability: 'hyper-cutter',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Serious,
                        ivs: 12,
                        moves: ['bite', 'dig', 'feint-attack', 'sand-tomb'],
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Lax,
                        ivs: 12,
                        moves: [
                            'rollout',
                            'whirlpool',
                            'astonish',
                            'water-pulse',
                        ],
                    },
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 29,
                        nature: Nature.Calm,
                        ivs: 12,
                        moves: [
                            'thunderbolt',
                            'supersonic',
                            'thunder-wave',
                            'sonic-boom',
                        ],
                    },
                    {
                        slug: 'shiftry',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Hasty,
                        ivs: 12,
                        moves: [
                            'giga-drain',
                            'feint-attack',
                            'double-team',
                            'swagger',
                        ],
                    },
                ],
            },
        ],
    },
    'psychic-f-jacki': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'psychic-f',
        name: 'Jacki',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'lunatone',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 31,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-cameron': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'psychic-m',
        name: 'Cameron',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'solrock',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 31,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-catcher-kent': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-catcher',
        name: 'Kent',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-maniac-donald': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-maniac',
        name: 'Donald',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'bug-catcher-greg': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-catcher',
        name: 'Greg',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'volbeat',
                        ability: 'illuminate',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'illumise',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-maniac-taylor': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-maniac',
        name: 'Taylor',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                    {
                        slug: 'cascoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'bug-catcher-doug': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-catcher',
        name: 'Doug',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bug-maniac-brent': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-maniac',
        name: 'Brent',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'surskit',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'fisherman-eugene': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Eugene',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'feebas',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-f-catherine': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-ranger-f',
        name: 'Catherine',
        items: [
            {
                count: 1,
                slug: 'full-restore',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.SetupFirstTurn,
                ],
                team: [
                    {
                        slug: 'gloom',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Naive,
                        ivs: 6,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Quiet,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-m-jackson': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-ranger-m',
        name: 'Jackson',
        items: [
            {
                count: 1,
                slug: 'full-restore',
            },
        ],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'breloom',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Adamant,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'bird-keeper-phil': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Phil',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-takashi': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ninja-boy',
        name: 'Takashi',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove, Gen3AiFlag.CheckViability],
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-hugh': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Hugh',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-yasu': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ninja-boy',
        name: 'Yasu',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove, Gen3AiFlag.CheckViability],
                team: [
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-hideo': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ninja-boy',
        name: 'Hideo',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove, Gen3AiFlag.CheckViability],
                team: [
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Relaxed,
                        ivs: 0,
                        moves: [
                            'tackle',
                            'self-destruct',
                            'sludge',
                            'smokescreen',
                        ],
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Adamant,
                        ivs: 0,
                        moves: [
                            'tackle',
                            'poison-gas',
                            'sludge',
                            'smokescreen',
                        ],
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-f-weather-institute': {
        metadata: [BattleMetadata.Choice],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-f',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-weather-institute-1': {
        metadata: [BattleMetadata.Choice],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-weather-institute-2': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-weather-institute-3': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '3',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'magma-admin-courtney': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'magma-admin-courtney',
        name: 'Courtney',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Rash,
                        ivs: 6,
                    },
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Naughty,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-f-weather-institute': {
        metadata: [BattleMetadata.Choice],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-f',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-weather-institute-1': {
        metadata: [BattleMetadata.Choice],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-weather-institute-2': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-weather-institute-3': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '3',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aqua-admin-shelly': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'aqua-admin-shelly',
        name: 'Shelly',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Jolly,
                        ivs: 6,
                    },
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Lonely,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-brendan-route-119': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'pkmn-trainer-brendan',
        name: 'Brendan',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Calm,
                        ivs: 18,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Naive,
                        ivs: 18,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Docile,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-may-route-119': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'pkmn-trainer-may',
        name: 'May',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Calm,
                        ivs: 18,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Naive,
                        ivs: 18,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Docile,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'parasol-lady-clarissa': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'parasol-lady',
        name: 'Clarissa',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'interviewers-gabby-and-ty-route-120': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'interviewers',
        name: 'Gabby & Ty',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 30,
                        nature: Nature.Naive,
                        ivs: 18,
                    },
                    {
                        slug: 'loudred',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Quirky,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'bird-keeper-robert': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Robert',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-colin': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Colin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'natu',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'parasol-lady-angelica': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'parasol-lady',
        name: 'Angelica',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'castform',
                        ability: 'forecast',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-tsunao': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ninja-boy',
        name: 'Tsunao',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove, Gen3AiFlag.CheckViability],
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Timid,
                        ivs: 0,
                        moves: [
                            'leech-life',
                            'fury-swipes',
                            'mind-reader',
                            'dig',
                        ],
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Mild,
                        ivs: 0,
                        moves: [
                            'tackle',
                            'self-destruct',
                            'sludge',
                            'smokescreen',
                        ],
                    },
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Relaxed,
                        ivs: 0,
                        moves: [
                            'double-team',
                            'fury-cutter',
                            'screech',
                            'swords-dance',
                        ],
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-jennifer': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-f',
        name: 'Jennifer',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'milotic',
                        ability: 'marvel-scale',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-f-jenna': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-ranger-f',
        name: 'Jenna',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.SetupFirstTurn,
                ],
                team: [
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Docile,
                        ivs: 6,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Hasty,
                        ivs: 6,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Brave,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-m-carlos': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-ranger-m',
        name: 'Carlos',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'seedot',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Rash,
                        ivs: 6,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Calm,
                        ivs: 6,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Timid,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'bug-maniac-brandon': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-maniac',
        name: 'Brandon',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'surskit',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'surskit',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'surskit',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-keigo': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ninja-boy',
        name: 'Keigo',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove, Gen3AiFlag.CheckViability],
                team: [
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Bashful,
                        ivs: 0,
                        moves: [
                            'poison-gas',
                            'tackle',
                            'sludge',
                            'smokescreen',
                        ],
                    },
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Timid,
                        ivs: 0,
                        moves: [
                            'sand-attack',
                            'double-team',
                            'fury-cutter',
                            'swords-dance',
                        ],
                    },
                ],
            },
        ],
    },
    'ruin-maniac-chip': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ruin-maniac',
        name: 'Chip',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Lonely,
                        ivs: 6,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                    },
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Mild,
                        ivs: 6,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                    },
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Sassy,
                        ivs: 6,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                    },
                ],
            },
        ],
    },
    'hex-maniac-tammy': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'hex-maniac',
        name: 'Tammy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'duskull',
                        ability: 'levitate',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'beauty-jessica': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'beauty',
        name: 'Jessica',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kecleon',
                        ability: 'color-change',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Bold,
                        ivs: 0,
                        moves: ['bind', 'lick', 'fury-swipes', 'feint-attack'],
                    },
                    {
                        slug: 'seviper',
                        ability: 'shed-skin',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Naive,
                        ivs: 0,
                        moves: ['poison-tail', 'screech', 'glare', 'crunch'],
                    },
                ],
            },
        ],
    },
    'sr-and-jr-kate-and-joy': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'sr-and-jr',
        name: 'Kate & Joy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'spinda',
                        ability: 'own-tempo',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Docile,
                        ivs: 0,
                        moves: [
                            'hypnosis',
                            'psybeam',
                            'dizzy-punch',
                            'teeter-dance',
                        ],
                    },
                    {
                        slug: 'slaking',
                        ability: 'truant',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Timid,
                        ivs: 0,
                        moves: [
                            'focus-punch',
                            'yawn',
                            'slack-off',
                            'feint-attack',
                        ],
                    },
                ],
            },
        ],
    },
    'gentleman-walter': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'gentleman',
        name: 'Walter',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pokefan-f-vanessa': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pokefan-f',
        name: 'Vanessa',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Rash,
                        ivs: 0,
                        heldItem: 'oran-berry',
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-brendan-lilycove': {
        metadata: [BattleMetadata.Miniboss, BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-trainer-brendan',
        name: 'Brendan',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Serious,
                        ivs: 18,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Quiet,
                        ivs: 18,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Hardy,
                        ivs: 18,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Gentle,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Serious,
                        ivs: 18,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Calm,
                        ivs: 18,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Modest,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Serious,
                        ivs: 18,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Timid,
                        ivs: 18,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Modest,
                        ivs: 18,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Relaxed,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-may-lilycove': {
        metadata: [BattleMetadata.Miniboss, BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-trainer-may',
        name: 'May',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Calm,
                        ivs: 18,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Hardy,
                        ivs: 18,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Bashful,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Careful,
                        ivs: 18,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Serious,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Jolly,
                        ivs: 18,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Modest,
                        ivs: 18,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Naughty,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'poke-maniac-mark': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'poke-maniac',
        name: 'Mark',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'lairon',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'young-couple-dez-and-luke': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'young-couple',
        name: 'Dez & Luke',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'delcatty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-f-kayla': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'psychic-f',
        name: 'Kayla',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-william': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'psychic-m',
        name: 'William',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-atsushi': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'black-belt',
        name: 'Atsushi',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'hex-maniac-tasha': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'hex-maniac',
        name: 'Tasha',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'shuppet',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hex-maniac-valerie': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'hex-maniac',
        name: 'Valerie',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sableye',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-mt-pyre-summit-1': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-mt-pyre-summit-2': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-mt-pyre-summit-3': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '3',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-mt-pyre-summit-1': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-mt-pyre-summit-2': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-mt-pyre-summit-3': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '3',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-magma-hideout-1': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-f-magma-hideout-5': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-f',
        name: '5',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-magma-hideout-2': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-magma-hideout-3': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '3',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-f-magma-hideout-4': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-f',
        name: '4',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-magma-hideout-6': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-magma-grunt-m',
        name: '6',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'magma-admin-tabitha-hideout': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'magma-admin-tabitha',
        name: 'Tabitha',
        items: [{ count: 1, slug: 'super-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.SetupFirstTurn,
                ],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Lax,
                        ivs: 6,
                    },
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Bashful,
                        ivs: 6,
                    },
                    {
                        slug: 'camerupt',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Docile,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-aqua-hideout-1': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-f-aqua-hideout-2': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-f',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-aqua-hideout-3': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '3',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-aqua-hideout-4': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '4',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-aqua-hideout-5': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '5',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-f-aqua-hideout-6': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-f',
        name: '6',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aqua-admin-matt-hideout': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'aqua-admin-matt',
        name: 'Matt',
        items: [{ count: 1, slug: 'super-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Timid,
                        ivs: 6,
                    },
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Naughty,
                        ivs: 6,
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Hasty,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'swimmer-f-grace': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Grace',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sis-and-bro-rita-and-sam': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'sis-and-bro',
        name: 'Rita & Sam',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'chinchou',
                        ability: 'volt-absorb',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-spencer': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Spencer',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-jenny': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Jenny',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-chad': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Chad',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-roland': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Roland',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-sharon': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Sharon',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sailor-ernest': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'sailor',
        name: 'Ernest',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-tanya': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Tanya',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sr-and-jr-kim-and-iris': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'sr-and-jr',
        name: 'Kim & Iris',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Brave,
                        ivs: 0,
                        moves: [
                            'sing',
                            'fury-attack',
                            'safeguard',
                            'aerial-ace',
                        ],
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Relaxed,
                        ivs: 0,
                        moves: [
                            'flamethrower',
                            'take-down',
                            'rest',
                            'earthquake',
                        ],
                    },
                ],
            },
        ],
    },
    'swimmer-m-stan': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Stan',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-cody': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Cody',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 34,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-barry': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Barry',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-dean': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Dean',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-brenda': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Brenda',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-nikki': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'swimmer-f',
        name: 'Nikki',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-byron': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Byron',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-f-connor': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-f',
        name: 'Connor',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Bold,
                        ivs: 19,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Modest,
                        ivs: 19,
                    },
                ],
            },
        ],
    },
    'fisherman-jonah': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Jonah',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-roger': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Roger',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-henry': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Henry',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-m-caleb': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-m',
        name: 'Caleb',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-koji': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'black-belt',
        name: 'Koji',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-ruben': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-m',
        name: 'Ruben',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'shiftry',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'loudred',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-alexa': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-f',
        name: 'Alexa',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'gloom',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Timid,
                        ivs: 12,
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'fisherman-wayne': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Wayne',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-m-isaiah': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-m',
        name: 'Isaiah',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 36,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-f-katelyn': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-f',
        name: 'Katelyn',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 36,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-f-allison': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-f',
        name: 'Allison',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Brave,
                        ivs: 29,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-m-chase': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-m',
        name: 'Chase',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 35,
                        nature: Nature.Careful,
                        ivs: 9,
                    },
                ],
            },
        ],
    },
    'swimmer-m-reed': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Reed',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-tisha': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Tisha',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'chinchou',
                        ability: 'volt-absorb',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-katie': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Katie',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'chinchou',
                        ability: 'volt-absorb',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-rodney': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Rodney',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-kara': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Kara',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-herman': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Herman',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-susie': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Susie',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-richard': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Richard',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sis-and-bro-reli-and-ian': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'sis-and-bro',
        name: 'Reli & Ian',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-dana': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Dana',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-gilbert': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Gilbert',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-kiyo': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'black-belt',
        name: 'Kiyo',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Careful,
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'fisherman-ronald': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Ronald',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-franklin': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Franklin',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'sealeo',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-warren': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-m',
        name: 'Warren',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'magcargo',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                    {
                        slug: 'ludicolo',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'bird-keeper-beck': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Beck',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-debra': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Debra',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-linda': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Linda',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'seadra',
                        ability: 'poison-point',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-jack': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Jack',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 34,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-laurel': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Laurel',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-hitoshi': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'black-belt',
        name: 'Hitoshi',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'dragon-tamer-aaron': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'dragon-tamer',
        name: 'Aaron',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'bagon',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'bird-keeper-alex': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Alex',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'natu',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-jared': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Jared',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'doduo',
                        ability: 'run-away',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Adamant,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'picnicker-kylee': {
        metadata: [BattleMetadata.Required],
        split: 'Winona',
        trainerClass: 'picnicker',
        name: 'Kylee',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'camper-terrell': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'camper',
        name: 'Terrell',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'bird-keeper-will': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Will',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Hasty,
                        ivs: 12,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'leader-winona': {
        metadata: [BattleMetadata.Boss],
        split: 'Winona',
        trainerClass: 'leader-winona',
        name: 'Winona',
        items: [{ count: 2, slug: 'hyper-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Jolly,
                        ivs: 24,
                        moves: [
                            'quick-attack',
                            'aerial-ace',
                            'double-team',
                            'endeavor',
                        ],
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Hardy,
                        ivs: 24,
                        moves: [
                            'water-gun',
                            'supersonic',
                            'protect',
                            'aerial-ace',
                        ],
                    },
                    {
                        slug: 'skarmory',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Hardy,
                        ivs: 24,
                        moves: [
                            'sand-attack',
                            'fury-attack',
                            'steel-wing',
                            'aerial-ace',
                        ],
                    },
                    {
                        slug: 'altaria',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Hasty,
                        ivs: 30,
                        moves: [
                            'earthquake',
                            'dragon-breath',
                            'dragon-dance',
                            'aerial-ace',
                        ],
                    },
                ],
            },
        ],
    },
    'psychic-m-preston': {
        metadata: [BattleMetadata.Optional],
        split: 'Tate & Liza',
        trainerClass: 'psychic-m',
        name: 'Preston',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Gentle,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'psychic-f-maura': {
        metadata: [BattleMetadata.Optional],
        split: 'Tate & Liza',
        trainerClass: 'psychic-f',
        name: 'Maura',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'psychic-f-samantha': {
        metadata: [BattleMetadata.Required],
        split: 'Tate & Liza',
        trainerClass: 'psychic-f',
        name: 'Samantha',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'xatu',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'psychic-m-fritz': {
        metadata: [BattleMetadata.Optional],
        split: 'Tate & Liza',
        trainerClass: 'psychic-m',
        name: 'Fritz',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'natu',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                    {
                        slug: 'girafarig',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'psychic-m-virgil': {
        metadata: [BattleMetadata.Optional],
        split: 'Tate & Liza',
        trainerClass: 'psychic-m',
        name: 'Virgil',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'psychic-f-hannah': {
        metadata: [BattleMetadata.Optional],
        split: 'Tate & Liza',
        trainerClass: 'psychic-f',
        name: 'Hannah',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'leader-tate-and-liza': {
        metadata: [BattleMetadata.TrueDouble, BattleMetadata.Boss],
        split: 'Tate & Liza',
        trainerClass: 'leader-tate-and-liza',
        name: 'Tate & Liza',
        items: [{ count: 4, slug: 'hyper-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'lunatone',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 42,
                        nature: Nature.Bold,
                        ivs: 30,
                        moves: [
                            'light-screen',
                            'psychic',
                            'hypnosis',
                            'calm-mind',
                        ],
                    },
                    {
                        slug: 'solrock',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 42,
                        nature: Nature.Serious,
                        ivs: 30,
                        moves: [
                            'sunny-day',
                            'solar-beam',
                            'psychic',
                            'flamethrower',
                        ],
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-seafloor-cavern-1': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'team-aqua-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-seafloor-cavern-2': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'team-aqua-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-seafloor-cavern-3': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'team-aqua-grunt-m',
        name: '3',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aqua-admin-shelly-seafloor-cavern': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Wallace',
        trainerClass: 'aqua-admin-shelly',
        name: 'Shelly',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Gentle,
                        ivs: 6,
                    },
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Lax,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'aqua-leader-archie-seafloor-cavern': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Wallace',
        trainerClass: 'aqua-leader-archie',
        name: 'Archie',
        items: [{ count: 2, slug: 'super-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Brave,
                        ivs: 18,
                    },
                    {
                        slug: 'crobat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Serious,
                        ivs: 18,
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Mild,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-seafloor-cavern-1': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'team-magma-grunt-m',
        name: '1',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-seafloor-cavern-2': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'team-magma-grunt-m',
        name: '2',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 38,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-seafloor-cavern-3': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'team-magma-grunt-m',
        name: '3',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'magma-admin-courtney-seafloor-cavern': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Wallace',
        trainerClass: 'magma-admin-courtney',
        name: 'Courtney',
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.SetupFirstTurn,
                ],
                team: [
                    {
                        slug: 'camerupt',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Lax,
                        ivs: 6,
                    },
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Rash,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'magma-leader-maxie-seafloor-cavern': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Wallace',
        trainerClass: 'magma-leader-maxie',
        name: 'Maxie',
        items: [{ count: 2, slug: 'super-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Lax,
                        ivs: 18,
                    },
                    {
                        slug: 'crobat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Lonely,
                        ivs: 18,
                    },
                    {
                        slug: 'camerupt',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Adamant,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'beauty-connie': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'beauty',
        name: 'Connie',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Timid,
                        ivs: 12,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'lass-andrea': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'lass',
        name: 'Andrea',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Lonely,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'beauty-bridget': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'beauty',
        name: 'Bridget',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'lady-brianna': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'lady',
        name: 'Brianna',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Rash,
                        ivs: 12,
                        heldItem: 'nugget',
                    },
                ],
            },
        ],
    },
    'beauty-olivia': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'beauty',
        name: 'Olivia',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Timid,
                        ivs: 12,
                        moves: [
                            'uproar',
                            'fury-swipes',
                            'fake-out',
                            'water-gun',
                        ],
                    },
                ],
            },
        ],
    },
    'lass-crissy': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'lass',
        name: 'Crissy',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'beauty-tiffany': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'beauty',
        name: 'Tiffany',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 39,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'pokefan-f-marissa': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'pokefan-f',
        name: 'Marissa',
        teams: [
            {
                aiFlags: [Gen3AiFlag.CheckBadMove],
                team: [
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Bashful,
                        ivs: 12,
                        heldItem: 'oran-berry',
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 38,
                        nature: Nature.Gentle,
                        ivs: 12,
                        heldItem: 'oran-berry',
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Timid,
                        ivs: 12,
                        heldItem: 'oran-berry',
                    },
                ],
            },
        ],
    },
    'leader-wallace': {
        metadata: [BattleMetadata.Boss],
        split: 'Wallace',
        trainerClass: 'leader-wallace',
        name: 'Wallace',
        items: [{ count: 2, slug: 'hyper-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 40,
                        nature: Nature.Quiet,
                        ivs: 24,
                        moves: [
                            'water-pulse',
                            'attract',
                            'sweet-kiss',
                            'flail',
                        ],
                    },
                    {
                        slug: 'whiscash',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Naive,
                        ivs: 24,
                        moves: [
                            'rain-dance',
                            'water-pulse',
                            'amnesia',
                            'earthquake',
                        ],
                    },
                    {
                        slug: 'sealeo',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 40,
                        nature: Nature.Docile,
                        ivs: 24,
                        moves: [
                            'encore',
                            'body-slam',
                            'aurora-beam',
                            'water-pulse',
                        ],
                    },
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Bashful,
                        ivs: 24,
                        moves: [
                            'water-pulse',
                            'rain-dance',
                            'fury-attack',
                            'horn-drill',
                        ],
                    },
                    {
                        slug: 'milotic',
                        ability: 'marvel-scale',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Calm,
                        ivs: 30,
                        moves: [
                            'water-pulse',
                            'twister',
                            'recover',
                            'ice-beam',
                        ],
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-albert': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'cooltrainer-m',
        name: 'Albert',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                    {
                        slug: 'muk',
                        ability: 'stench',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-hope': {
        metadata: [BattleMetadata.Required],
        split: 'Steven',
        trainerClass: 'cooltrainer-f',
        name: 'Hope',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 44,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-shannon': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'cooltrainer-f',
        name: 'Shannon',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'claydol',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 44,
                        nature: Nature.Hasty,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-samuel': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'cooltrainer-m',
        name: 'Samuel',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'dodrio',
                        ability: 'run-away',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'lairon',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Lonely,
                        ivs: 12,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-julie': {
        metadata: [BattleMetadata.Required],
        split: 'Steven',
        trainerClass: 'cooltrainer-f',
        name: 'Julie',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                    {
                        slug: 'ninetales',
                        ability: 'flash-fire',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Adamant,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-owen': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'cooltrainer-m',
        name: 'Owen',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'kecleon',
                        ability: 'color-change',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'rhyhorn',
                        ability: 'lightning-rod',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Careful,
                        ivs: 12,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Adamant,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-caroline': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'cooltrainer-f',
        name: 'Caroline',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'mawile',
                        ability: 'hyper-cutter',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                    {
                        slug: 'sableye',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-vito': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'cooltrainer-m',
        name: 'Vito',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                    {
                        slug: 'shiftry',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-michelle': {
        metadata: [BattleMetadata.Optional],
        split: 'Steven',
        trainerClass: 'cooltrainer-f',
        name: 'Michelle',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'nosepass',
                        ability: 'sturdy',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Lonely,
                        ivs: 12,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                    {
                        slug: 'ludicolo',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-edgar': {
        metadata: [BattleMetadata.Required],
        split: 'Steven',
        trainerClass: 'cooltrainer-m',
        name: 'Edgar',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'cacturne',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-wally-victory-road': {
        metadata: [BattleMetadata.Required, BattleMetadata.Miniboss],
        split: 'Steven',
        trainerClass: 'pkmn-trainer-wally',
        name: 'Wally',
        items: [{ count: 2, slug: 'super-potion' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'altaria',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Jolly,
                        ivs: 18,
                        moves: [
                            'aerial-ace',
                            'safeguard',
                            'dragon-breath',
                            'dragon-dance',
                        ],
                    },
                    {
                        slug: 'delcatty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Quirky,
                        ivs: 18,
                        moves: ['sing', 'assist', 'charm', 'feint-attack'],
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 44,
                        nature: Nature.Adamant,
                        ivs: 18,
                        moves: [
                            'magical-leaf',
                            'leech-seed',
                            'giga-drain',
                            'toxic',
                        ],
                    },
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 41,
                        nature: Nature.Impish,
                        ivs: 18,
                        moves: [
                            'supersonic',
                            'thunderbolt',
                            'tri-attack',
                            'screech',
                        ],
                    },
                    {
                        slug: 'gardevoir',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 45,
                        nature: Nature.Naive,
                        ivs: 30,
                        moves: [
                            'double-team',
                            'calm-mind',
                            'psychic',
                            'future-sight',
                        ],
                    },
                ],
            },
        ],
    },
    'elite-four-sidney': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        split: 'Steven',
        trainerClass: 'elite-four-sidney',
        name: 'Sidney',
        items: [{ count: 2, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Rash,
                        ivs: 30,
                        moves: ['roar', 'take-down', 'sand-attack', 'crunch'],
                    },
                    {
                        slug: 'shiftry',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Jolly,
                        ivs: 30,
                        moves: [
                            'fake-out',
                            'double-team',
                            'swagger',
                            'extrasensory',
                        ],
                    },
                    {
                        slug: 'cacturne',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 46,
                        nature: Nature.Adamant,
                        ivs: 30,
                        moves: [
                            'leech-seed',
                            'feint-attack',
                            'needle-arm',
                            'cotton-spore',
                        ],
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 48,
                        nature: Nature.Quirky,
                        ivs: 30,
                        moves: ['crunch', 'swagger', 'surf', 'slash'],
                    },
                    {
                        slug: 'absol',
                        ability: 'pressure',
                        gender: 'male',
                        level: 49,
                        nature: Nature.Hardy,
                        ivs: 31,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'aerial-ace',
                            'snatch',
                            'swords-dance',
                            'slash',
                        ],
                    },
                ],
            },
        ],
    },
    'elite-four-phoebe': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        split: 'Steven',
        trainerClass: 'elite-four-phoebe',
        name: 'Phoebe',
        items: [{ count: 2, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'dusclops',
                        ability: 'pressure',
                        gender: 'female',
                        level: 48,
                        nature: Nature.Naughty,
                        ivs: 30,
                        moves: [
                            'shadow-punch',
                            'confuse-ray',
                            'curse',
                            'future-sight',
                        ],
                    },
                    {
                        slug: 'banette',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 49,
                        nature: Nature.Calm,
                        ivs: 30,
                        moves: [
                            'shadow-ball',
                            'spite',
                            'will-o-wisp',
                            'feint-attack',
                        ],
                    },
                    {
                        slug: 'sableye',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 50,
                        nature: Nature.Careful,
                        ivs: 30,
                        moves: [
                            'shadow-ball',
                            'psychic',
                            'attract',
                            'feint-attack',
                        ],
                    },
                    {
                        slug: 'banette',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 49,
                        nature: Nature.Naive,
                        ivs: 30,
                        moves: [
                            'shadow-ball',
                            'psychic',
                            'toxic',
                            'skill-swap',
                        ],
                    },
                    {
                        slug: 'dusclops',
                        ability: 'pressure',
                        gender: 'female',
                        level: 51,
                        nature: Nature.Careful,
                        ivs: 31,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'shadow-ball',
                            'ice-beam',
                            'confuse-ray',
                            'earthquake',
                        ],
                    },
                ],
            },
        ],
    },
    'elite-four-glacia': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        split: 'Steven',
        trainerClass: 'elite-four-glacia',
        name: 'Glacia',
        items: [{ count: 2, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'glalie',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 50,
                        nature: Nature.Hasty,
                        ivs: 30,
                        moves: ['light-screen', 'crunch', 'hail', 'ice-beam'],
                    },
                    {
                        slug: 'sealeo',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 50,
                        nature: Nature.Bashful,
                        ivs: 30,
                        moves: ['surf', 'body-slam', 'hail', 'ice-ball'],
                    },
                    {
                        slug: 'sealeo',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 52,
                        nature: Nature.Hardy,
                        ivs: 30,
                        moves: ['attract', 'dive', 'hail', 'blizzard'],
                    },
                    {
                        slug: 'glalie',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 52,
                        nature: Nature.Mild,
                        ivs: 30,
                        moves: ['shadow-ball', 'crunch', 'hail', 'ice-beam'],
                    },
                    {
                        slug: 'walrein',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 53,
                        nature: Nature.Naive,
                        ivs: 31,
                        heldItem: 'sitrus-berry',
                        moves: ['surf', 'body-slam', 'blizzard', 'sheer-cold'],
                    },
                ],
            },
        ],
    },
    'elite-four-drake': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        split: 'Steven',
        trainerClass: 'elite-four-drake',
        name: 'Drake',
        items: [{ count: 2, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'shelgon',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 52,
                        nature: Nature.Quiet,
                        ivs: 30,
                        moves: [
                            'rock-tomb',
                            'dragon-claw',
                            'protect',
                            'crunch',
                        ],
                    },
                    {
                        slug: 'altaria',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 54,
                        nature: Nature.Modest,
                        ivs: 30,
                        moves: [
                            'take-down',
                            'dragon-breath',
                            'dragon-dance',
                            'refresh',
                        ],
                    },
                    {
                        slug: 'flygon',
                        ability: 'levitate',
                        gender: 'male',
                        level: 53,
                        nature: Nature.Quirky,
                        ivs: 30,
                        moves: ['dig', 'dragon-breath', 'fly', 'sandstorm'],
                    },
                    {
                        slug: 'flygon',
                        ability: 'levitate',
                        gender: 'male',
                        level: 53,
                        nature: Nature.Impish,
                        ivs: 30,
                        moves: [
                            'flamethrower',
                            'crunch',
                            'dragon-breath',
                            'sand-attack',
                        ],
                    },
                    {
                        slug: 'salamence',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 55,
                        nature: Nature.Naughty,
                        ivs: 31,
                        heldItem: 'sitrus-berry',
                        moves: ['flamethrower', 'dragon-claw', 'crunch', 'fly'],
                    },
                ],
            },
        ],
    },
    'champion-steven': {
        metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
        split: 'Steven',
        trainerClass: 'champion-steven',
        name: 'Steven',
        items: [{ count: 4, slug: 'full-restore' }],
        teams: [
            {
                aiFlags: [
                    Gen3AiFlag.CheckBadMove,
                    Gen3AiFlag.CheckViability,
                    Gen3AiFlag.TryToFaint,
                ],
                team: [
                    {
                        slug: 'skarmory',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 57,
                        nature: Nature.Modest,
                        ivs: 31,
                        moves: ['toxic', 'aerial-ace', 'spikes', 'steel-wing'],
                    },
                    {
                        slug: 'claydol',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 55,
                        nature: Nature.Modest,
                        ivs: 31,
                        moves: [
                            'reflect',
                            'light-screen',
                            'ancient-power',
                            'earthquake',
                        ],
                    },
                    {
                        slug: 'aggron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 56,
                        nature: Nature.Naive,
                        ivs: 31,
                        moves: [
                            'thunder',
                            'earthquake',
                            'solar-beam',
                            'dragon-claw',
                        ],
                    },
                    {
                        slug: 'cradily',
                        ability: 'suction-cups',
                        gender: 'male',
                        level: 56,
                        nature: Nature.Naive,
                        ivs: 31,
                        moves: [
                            'giga-drain',
                            'ancient-power',
                            'sludge-bomb',
                            'confuse-ray',
                        ],
                    },
                    {
                        slug: 'armaldo',
                        ability: 'battle-armor',
                        gender: 'male',
                        level: 56,
                        nature: Nature.Mild,
                        ivs: 31,
                        moves: [
                            'water-pulse',
                            'ancient-power',
                            'aerial-ace',
                            'slash',
                        ],
                    },
                    {
                        slug: 'metagross',
                        ability: 'clear-body',
                        gender: 'genderless',
                        level: 58,
                        nature: Nature.Bashful,
                        ivs: 31,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'earthquake',
                            'psychic',
                            'meteor-mash',
                            'hyper-beam',
                        ],
                    },
                ],
            },
        ],
    },
};
