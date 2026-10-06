import { BattleMetadata, Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

export const BATTLES: Record<string, BattleData> = {
    'pkmn-trainer-brendan': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Roxanne',
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
        split: 'Roxanne',
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
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Hardy,
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
                        level: 15,
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
                        level: 15,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'minun',
                        ability: 'minus',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-rhett': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'black-belt',
        name: 'Rhett',
        teams: [
            {
                team: [
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'guitarist-marcos': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'guitarist',
        name: 'Marcos',
        teams: [
            {
                team: [
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 15,
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'swimmer-f-isabelle': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'swimmer-f',
        name: 'Isabelle',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 15,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-pete': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'swimmer-m',
        name: 'Pete',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-calvin': {
        metadata: [],
        split: 'Roxanne',
        trainerClass: 'youngster',
        name: 'Calvin',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Naughty,
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
    'lass-tiana': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
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
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 4,
                        nature: Nature.Sassy,
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
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 4,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 3,
                        nature: Nature.Brave,
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
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 5,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'seedot',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-darian': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
        trainerClass: 'fisherman',
        name: 'Darian',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lady-cindy': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
        trainerClass: 'lady',
        name: 'Cindy',
        items: [{ count: 1, slug: 'full-restore' }],
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
    },
    'rich-boy-winston': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
        trainerClass: 'rich-boy',
        name: 'Winston',
        items: [{ count: 1, slug: 'full-restore' }],
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
    },
    'lass-haley': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
        trainerClass: 'lass',
        name: 'Haley',
        teams: [
            {
                team: [
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 6,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 6,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'twins-gina-and-mia': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Roxanne',
        trainerClass: 'twins',
        name: 'Gina & Mia',
        teams: [
            {
                team: [
                    {
                        slug: 'seedot',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 6,
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
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 5,
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
                        level: 7,
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
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 6,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-petalburg-woods': {
        metadata: [],
        split: 'Roxanne',
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
    'pkmn-trainer-brendan-rustboro': {
        metadata: [BattleMetadata.Optional, BattleMetadata.Miniboss],
        split: 'Brawly',
        trainerClass: 'pkmn-trainer-brendan',
        name: 'Brendan',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                team: [
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Jolly,
                        ivs: 3,
                    },
                    {
                        slug: 'torchic',
                        ability: 'blaze',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Mild,
                        ivs: 6,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Bold,
                        ivs: 3,
                    },
                    {
                        slug: 'mudkip',
                        ability: 'torrent',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Bold,
                        ivs: 6,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Gentle,
                        ivs: 3,
                    },
                    {
                        slug: 'treecko',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Bold,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-may-rustboro': {
        metadata: [BattleMetadata.Optional, BattleMetadata.Miniboss],
        split: 'Brawly',
        trainerClass: 'pkmn-trainer-may',
        name: 'May',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                team: [
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Rash,
                        ivs: 3,
                    },
                    {
                        slug: 'torchic',
                        ability: 'blaze',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Rash,
                        ivs: 6,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'torkoal',
                        ability: 'white-smoke',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Mild,
                        ivs: 3,
                    },
                    {
                        slug: 'mudkip',
                        ability: 'torrent',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Jolly,
                        ivs: 6,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Brave,
                        ivs: 3,
                    },
                    {
                        slug: 'treecko',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Impish,
                        ivs: 6,
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
                        level: 27,
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
                        level: 24,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'triathlete-runner-f-kyra': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-runner-f',
        name: 'Kyra',
        teams: [
            {
                team: [
                    {
                        slug: 'doduo',
                        ability: 'run-away',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'dodrio',
                        ability: 'run-away',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-jaiden': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ninja-boy',
        name: 'Jaiden',
        teams: [
            {
                team: [
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'gulpin',
                        ability: 'liquid-ooze',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-f-alix': {
        metadata: [BattleMetadata.Optional, BattleMetadata.Double],
        split: 'Winona',
        trainerClass: 'psychic-f',
        name: 'Alix',
        teams: [
            {
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
        secondTrainer: {
            name: 'Helene',
            trainerClass: 'battle-girl',
            teams: [
                {
                    team: [
                        {
                            slug: 'meditite',
                            ability: 'pure-power',
                            gender: 'female',
                            level: 26,
                            nature: Nature.Careful,
                            ivs: 0,
                        },
                        {
                            slug: 'makuhita',
                            ability: 'thick-fat',
                            gender: 'male',
                            level: 26,
                            nature: Nature.Calm,
                            ivs: 0,
                        },
                    ],
                },
            ],
        },
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
                        level: 19,
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
                        level: 18,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'collector-hector': {
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
                        level: 18,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'seviper',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-f-marlene': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'psychic-f',
        name: 'Marlene',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'spoink',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Careful,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 9,
                        nature: Nature.Serious,
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
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Hardy,
                        ivs: 6,
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
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'lass-janice': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'lass',
        name: 'Janice',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 9,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'school-kid-f-karen': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
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
                        level: 9,
                        nature: Nature.Sassy,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'lady-sarah': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'lady',
        name: 'Sarah',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 8,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'female',
                        heldItem: 'nugget',
                        level: 8,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'rich-boy-dawson': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'rich-boy',
        name: 'Dawson',
        teams: [
            {
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        heldItem: 'nugget',
                        level: 8,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-devan': {
        metadata: [],
        split: 'Roxanne',
        trainerClass: 'hiker',
        name: 'Devan',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-johnson': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
        trainerClass: 'youngster',
        name: 'Johnson',
        teams: [
            {
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Bold,
                        ivs: 0,
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
        items: [{ count: 2, slug: 'potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Docile,
                        ivs: 12,
                        moves: [
                            'tackle',
                            'defense-curl',
                            'rock-throw',
                            'rock-tomb',
                        ],
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Quiet,
                        ivs: 12,
                        moves: [
                            'tackle',
                            'defense-curl',
                            'rock-throw',
                            'rock-tomb',
                        ],
                    },
                    {
                        slug: 'nosepass',
                        ability: 'sturdy',
                        gender: 'female',
                        heldItem: 'oran-berry',
                        level: 15,
                        nature: Nature.Lonely,
                        ivs: 24,
                        moves: ['block', 'harden', 'tackle', 'rock-tomb'],
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
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Modest,
                        ivs: 12,
                        moves: ['tackle'],
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
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Timid,
                        ivs: 13,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Lax,
                        ivs: 14,
                    },
                ],
            },
        ],
    },
    'hiker-marc': {
        metadata: [BattleMetadata.Optional],
        split: 'Roxanne',
        trainerClass: 'hiker',
        name: 'Marc',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Jolly,
                        ivs: 14,
                    },
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 8,
                        nature: Nature.Modest,
                        ivs: 15,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-rusturf-tunnel': {
        metadata: [],
        split: 'Brawly',
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
        metadata: [BattleMetadata.Optional],
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
    'swimmer-f-denise': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Denise',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Brave,
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
    'swimmer-m-tony': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Tony',
        teams: [
            {
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Bold,
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
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Calm,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Modest,
                        ivs: 1,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Calm,
                        ivs: 1,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Quirky,
                        ivs: 1,
                    },
                ],
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
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-m-camron': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-m',
        name: 'Camron',
        teams: [
            {
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 26,
                        nature: Nature.Hasty,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Gentle,
                        ivs: 1,
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
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 7,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 10,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Gentle,
                        ivs: 1,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Docile,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'swimmer-f-kyla': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Kyla',
        teams: [
            {
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Lonely,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Naughty,
                        ivs: 1,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Naughty,
                        ivs: 1,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-f-hailey': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'tuber-f',
        name: 'Hailey',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Serious,
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
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Lonely,
                        ivs: 1,
                        moves: ['sand-attack', 'headbutt', 'tail-whip', 'surf'],
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
                team: [
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Bold,
                        ivs: 1,
                    },
                    {
                        slug: 'azurill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 12,
                        nature: Nature.Modest,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'tuber-m-chandler': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'tuber-m',
        name: 'Chandler',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 12,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-f-austina': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'tuber-f',
        name: 'Austina',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Adamant,
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
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Naive,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hasty,
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
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Bashful,
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
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Calm,
                        ivs: 1,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bold,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'bird-keeper-elijah': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Elijah',
        teams: [
            {
                team: [
                    {
                        slug: 'skarmory',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'skarmory',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Naive,
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
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Naughty,
                        ivs: 0,
                        moves: ['gust', 'psybeam', 'toxic', 'protect'],
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Mild,
                        ivs: 0,
                        moves: ['gust', 'mega-drain', 'attract', 'stun-spore'],
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
    'team-aqua-grunt-m-oceanic-museum': {
        metadata: [BattleMetadata.BackToBack],
        split: 'Brawly',
        plainName: true,
        trainerClass: 'team-aqua-grunt-m',
        name: 'Team Aqua Grunts',
        teams: [
            {
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
    'pkmn-trainer-brendan-route-110': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Brawly',
        trainerClass: 'pkmn-trainer-brendan',
        name: 'Brendan',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Bold,
                        ivs: 6,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Modest,
                        ivs: 6,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Hasty,
                        ivs: 12,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Gentle,
                        ivs: 6,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
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
                team: [
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Relaxed,
                        ivs: 6,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Lonely,
                        ivs: 6,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-may-route-110': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Brawly',
        trainerClass: 'pkmn-trainer-may',
        name: 'May',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Brave,
                        ivs: 6,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Bashful,
                        ivs: 6,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Hasty,
                        ivs: 12,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Brave,
                        ivs: 6,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
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
                team: [
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Jolly,
                        ivs: 6,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Naughty,
                        ivs: 6,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'pokefan-f-isabel': {
        metadata: [],
        split: 'Brawly',
        trainerClass: 'pokefan-f',
        name: 'Isabel',
        teams: [
            {
                team: [
                    {
                        slug: 'plusle',
                        ability: 'plus',
                        gender: 'female',
                        heldItem: 'oran-berry',
                        level: 14,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'minun',
                        ability: 'minus',
                        gender: 'female',
                        heldItem: 'oran-berry',
                        level: 14,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pokefan-m-kaleb': {
        metadata: [],
        split: 'Brawly',
        trainerClass: 'pokefan-m',
        name: 'Kaleb',
        teams: [
            {
                team: [
                    {
                        slug: 'minun',
                        ability: 'minus',
                        gender: 'male',
                        heldItem: 'oran-berry',
                        level: 14,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'plusle',
                        ability: 'plus',
                        gender: 'male',
                        heldItem: 'oran-berry',
                        level: 14,
                        nature: Nature.Bold,
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
                team: [
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Bold,
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
    'guitarist-joseph': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'guitarist',
        name: 'Joseph',
        teams: [
            {
                team: [
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 14,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-edward': {
        metadata: [],
        split: 'Brawly',
        trainerClass: 'psychic-m',
        name: 'Edward',
        teams: [
            {
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 15,
                        nature: Nature.Impish,
                        ivs: 0,
                        moves: ['hidden-power'],
                    },
                ],
            },
        ],
    },
    'triathlete-biker-f-alyssa': {
        metadata: [],
        split: 'Brawly',
        trainerClass: 'triathlete-biker-f',
        name: 'Alyssa',
        teams: [
            {
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 15,
                        nature: Nature.Rash,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Naive,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'abra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Brave,
                        ivs: 0,
                        moves: ['hidden-power'],
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
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 14,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 14,
                        nature: Nature.Docile,
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
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 16,
                        nature: Nature.Rash,
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
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 16,
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
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 14,
                        nature: Nature.Quirky,
                        ivs: 9,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 14,
                        nature: Nature.Adamant,
                        ivs: 9,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 6,
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
                team: [
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 6,
                        nature: Nature.Jolly,
                        ivs: 2,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 6,
                        nature: Nature.Modest,
                        ivs: 2,
                    },
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 14,
                        nature: Nature.Sassy,
                        ivs: 24,
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
    'youngster-eddie': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'youngster',
        name: 'Eddie',
        teams: [
            {
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
    'lass-robin': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'lass',
        name: 'Robin',
        teams: [
            {
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
    'school-kid-m-ted': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'school-kid-m',
        name: 'Ted',
        teams: [
            {
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
    'battle-girl-cora': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'battle-girl',
        name: 'Cora',
        teams: [
            {
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
    'battle-girl-paula': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'battle-girl',
        name: 'Paula',
        teams: [
            {
                team: [
                    {
                        slug: 'breloom',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Careful,
                        ivs: 12,
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
    'pkmn-ranger-f-sophia': {
        metadata: [BattleMetadata.Optional],
        split: 'Juan',
        trainerClass: 'pkmn-ranger-f',
        name: 'Sophia',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
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
    },
    'bird-keeper-benny': {
        metadata: [BattleMetadata.Optional],
        split: 'Juan',
        trainerClass: 'bird-keeper',
        name: 'Benny',
        teams: [
            {
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
    'pkmn-ranger-m-sebastian': {
        metadata: [BattleMetadata.Optional],
        split: 'Juan',
        trainerClass: 'pkmn-ranger-m',
        name: 'Sebastian',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
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
    },
    'psychic-m-joshua': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'psychic-m',
        name: 'Joshua',
        teams: [
            {
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
    'psychic-f-alexis': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'psychic-f',
        name: 'Alexis',
        teams: [
            {
                team: [
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'xatu',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hex-maniac-patricia': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'hex-maniac',
        name: 'Patricia',
        teams: [
            {
                team: [
                    {
                        slug: 'banette',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'lunatone',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 41,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-m-alvaro': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'psychic-m',
        name: 'Alvaro',
        teams: [
            {
                team: [
                    {
                        slug: 'banette',
                        ability: 'insomnia',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'psychic-f-mariela': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'psychic-f',
        name: 'Mariela',
        teams: [
            {
                team: [
                    {
                        slug: 'chimecho',
                        ability: 'levitate',
                        gender: 'female',
                        level: 41,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'gentleman-everett': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'gentleman',
        name: 'Everett',
        teams: [
            {
                team: [
                    {
                        slug: 'wobbuffet',
                        ability: 'shadow-tag',
                        gender: 'male',
                        level: 41,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-wally': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Brawly',
        trainerClass: 'pkmn-trainer-wally',
        name: 'Wally',
        teams: [
            {
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Naughty,
                        ivs: 3,
                    },
                ],
            },
        ],
    },
    'aroma-lady-rose': {
        metadata: [],
        split: 'Brawly',
        trainerClass: 'aroma-lady',
        name: 'Rose',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 14,
                        nature: Nature.Careful,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Sassy,
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
                ],
            },
        ],
    },
    'youngster-deandre': {
        metadata: [],
        split: 'Brawly',
        trainerClass: 'youngster',
        name: 'Deandre',
        teams: [
            {
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 14,
                        nature: Nature.Adamant,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Lonely,
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
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 26,
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
                team: [
                    {
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 17,
                        nature: Nature.Bashful,
                        ivs: 6,
                    },
                    {
                        slug: 'whismur',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Calm,
                        ivs: 6,
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
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Lonely,
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
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'kindler-hayden': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'kindler',
        name: 'Hayden',
        teams: [
            {
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-bianca': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'picnicker',
        name: 'Bianca',
        teams: [
            {
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-bryan': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'ruin-maniac',
        name: 'Bryan',
        teams: [
            {
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-celia': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'picnicker',
        name: 'Celia',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 22,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-branden': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'camper',
        name: 'Branden',
        teams: [
            {
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Quiet,
                        ivs: 0,
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
    'camper-tyron': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'camper',
        name: 'Tyron',
        teams: [
            {
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aroma-lady-celina': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'aroma-lady',
        name: 'Celina',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-brooke': {
        metadata: [],
        split: 'Flannery',
        trainerClass: 'cooltrainer-f',
        name: 'Brooke',
        items: [{ count: 1, slug: 'super-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Brave,
                        ivs: 12,
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
        items: [{ count: 1, slug: 'super-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                ],
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
    'camper-drew': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'camper',
        name: 'Drew',
        teams: [
            {
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 23,
                        moves: ['dig', 'sand-attack', 'poison-sting', 'slash'],
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-beau': {
        metadata: [BattleMetadata.Optional],
        split: 'Norman',
        trainerClass: 'camper',
        name: 'Beau',
        teams: [
            {
                team: [
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 21,
                        moves: [
                            'rapid-spin',
                            'mud-slap',
                            'psybeam',
                            'rock-tomb',
                        ],
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 21,
                        moves: [
                            'poison-sting',
                            'sand-attack',
                            'scratch',
                            'dig',
                        ],
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 21,
                        moves: [
                            'rapid-spin',
                            'mud-slap',
                            'psybeam',
                            'rock-tomb',
                        ],
                        nature: Nature.Brave,
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
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'female',
                        level: 22,
                        moves: ['dig', 'sand-attack', 'poison-sting', 'slash'],
                        nature: Nature.Calm,
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
                        nature: Nature.Docile,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'female',
                        level: 22,
                        moves: ['sand-attack', 'poison-sting', 'slash', 'dig'],
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 22,
                        moves: [
                            'rollout',
                            'bubble-beam',
                            'tail-whip',
                            'defense-curl',
                        ],
                        nature: Nature.Adamant,
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
                team: [
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 23,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                        nature: Nature.Lonely,
                        ivs: 6,
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
                team: [
                    {
                        slug: 'doduo',
                        ability: 'run-away',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Hasty,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 15,
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
                        level: 17,
                        moves: ['tackle', 'focus-energy', 'arm-thrust'],
                        nature: Nature.Careful,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'whismur',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 11,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 11,
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
                team: [
                    {
                        slug: 'doduo',
                        ability: 'run-away',
                        gender: 'female',
                        level: 17,
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
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Jolly,
                        ivs: 18,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 16,
                        nature: Nature.Lonely,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'psychic-f-brandi': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'psychic-f',
        name: 'Brandi',
        teams: [
            {
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-runner-f-melina': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'triathlete-runner-f',
        name: 'Melina',
        teams: [
            {
                team: [
                    {
                        slug: 'doduo',
                        ability: 'run-away',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'battle-girl-aisha': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'battle-girl',
        name: 'Aisha',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Mild,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'skitty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 11,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'battle-girl-laura': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'battle-girl',
        name: 'Laura',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Docile,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'battle-girl-lilith': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'battle-girl',
        name: 'Lilith',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Quirky,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'sailor-brenden': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'sailor',
        name: 'Brenden',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'black-belt-takao': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'black-belt',
        name: 'Takao',
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Hasty,
                        ivs: 15,
                    },
                ],
            },
        ],
    },
    'black-belt-cristian': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'black-belt',
        name: 'Cristian',
        teams: [
            {
                team: [
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 13,
                        nature: Nature.Naughty,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'battle-girl-jocelyn': {
        metadata: [BattleMetadata.Optional],
        split: 'Brawly',
        trainerClass: 'battle-girl',
        name: 'Jocelyn',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 13,
                        nature: Nature.Quirky,
                        ivs: 15,
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
        items: [{ count: 2, slug: 'super-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 16,
                        moves: [
                            'karate-chop',
                            'low-kick',
                            'seismic-toss',
                            'bulk-up',
                        ],
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 16,
                        moves: [
                            'focus-punch',
                            'light-screen',
                            'reflect',
                            'bulk-up',
                        ],
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 19,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'arm-thrust',
                            'vital-throw',
                            'reversal',
                            'bulk-up',
                        ],
                        nature: Nature.Lax,
                        ivs: 24,
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
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 17,
                        moves: ['bide', 'detect', 'confusion', 'thunder-punch'],
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 17,
                        moves: [
                            'thunder-punch',
                            'detect',
                            'confusion',
                            'meditate',
                        ],
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                ],
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
                team: [
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 17,
                        moves: [
                            'quick-attack',
                            'thunder-wave',
                            'spark',
                            'leer',
                        ],
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 17,
                        moves: ['charge', 'shock-wave', 'screech'],
                        nature: Nature.Timid,
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
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 17,
                        moves: [
                            'headbutt',
                            'sand-attack',
                            'growl',
                            'thunderbolt',
                        ],
                        nature: Nature.Quirky,
                        ivs: 18,
                    },
                    {
                        slug: 'gulpin',
                        ability: 'liquid-ooze',
                        gender: 'male',
                        level: 17,
                        moves: ['amnesia', 'sludge', 'yawn', 'pound'],
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'bug-maniac-angelo': {
        metadata: [BattleMetadata.Choice],
        split: 'Wattson',
        trainerClass: 'bug-maniac',
        name: 'Angelo',
        teams: [
            {
                team: [
                    {
                        slug: 'illumise',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 17,
                        moves: ['shock-wave', 'quick-attack', 'charm'],
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                    {
                        slug: 'volbeat',
                        ability: 'illuminate',
                        gender: 'male',
                        level: 17,
                        moves: ['shock-wave', 'quick-attack', 'confuse-ray'],
                        nature: Nature.Adamant,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'guitarist-shawn': {
        metadata: [BattleMetadata.Choice],
        split: 'Wattson',
        trainerClass: 'guitarist',
        name: 'Shawn',
        teams: [
            {
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
                        slug: 'magnemite',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 17,
                        nature: Nature.Adamant,
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
        items: [{ count: 2, slug: 'super-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'voltorb',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 20,
                        moves: [
                            'rollout',
                            'spark',
                            'self-destruct',
                            'shock-wave',
                        ],
                        nature: Nature.Docile,
                        ivs: 24,
                    },
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 20,
                        moves: ['shock-wave', 'leer', 'quick-attack', 'howl'],
                        nature: Nature.Serious,
                        ivs: 24,
                    },
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 22,
                        moves: [
                            'supersonic',
                            'shock-wave',
                            'thunder-wave',
                            'sonic-boom',
                        ],
                        nature: Nature.Impish,
                        ivs: 26,
                    },
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 24,
                        heldItem: 'sitrus-berry',
                        moves: [
                            'quick-attack',
                            'thunder-wave',
                            'shock-wave',
                            'howl',
                        ],
                        nature: Nature.Brave,
                        ivs: 30,
                    },
                ],
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
                team: [
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Relaxed,
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
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 17,
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
                        level: 17,
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
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'kindler-bryant': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'kindler',
        name: 'Bryant',
        teams: [
            {
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aroma-lady-shayla': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'aroma-lady',
        name: 'Shayla',
        teams: [
            {
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-jaylen': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'youngster',
        name: 'Jaylen',
        teams: [
            {
                team: [
                    {
                        slug: 'trapinch',
                        ability: 'hyper-cutter',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'camper-lawrence': {
        metadata: [BattleMetadata.Optional, BattleMetadata.Double],
        split: 'Flannery',
        trainerClass: 'camper',
        name: 'Lawrence',
        teams: [
            {
                team: [
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 18,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
        secondTrainer: {
            name: 'Lung',
            trainerClass: 'ninja-boy',
            teams: [
                {
                    team: [
                        {
                            slug: 'koffing',
                            ability: 'levitate',
                            gender: 'male',
                            level: 18,
                            nature: Nature.Rash,
                            ivs: 0,
                        },
                        {
                            slug: 'ninjask',
                            ability: 'speed-boost',
                            gender: 'male',
                            level: 18,
                            nature: Nature.Serious,
                            ivs: 0,
                        },
                    ],
                },
            ],
        },
    },
    'pokemaniac-wyatt': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'poke-maniac',
        name: 'Wyatt',
        teams: [
            {
                team: [
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Bashful,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 19,
                        moves: ['ember', 'tackle', 'magnitude', 'sunny-day'],
                        nature: Nature.Gentle,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'spinda',
                        ability: 'own-tempo',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'spinda',
                        ability: 'own-tempo',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Rash,
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
                team: [
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 17,
                        moves: [
                            'poison-gas',
                            'tackle',
                            'smog',
                            'self-destruct',
                        ],
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 17,
                        moves: [
                            'poison-gas',
                            'tackle',
                            'smog',
                            'self-destruct',
                        ],
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 17,
                        moves: [
                            'poison-gas',
                            'tackle',
                            'sludge',
                            'self-destruct',
                        ],
                        nature: Nature.Rash,
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
                team: [
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-sophie': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'picnicker',
        name: 'Sophie',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 17,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 19,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-coby': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'bird-keeper',
        name: 'Coby',
        teams: [
            {
                team: [
                    {
                        slug: 'skarmory',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 17,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bashful,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Mild,
                        ivs: 18,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Hasty,
                        ivs: 18,
                    },
                    {
                        slug: 'ludicolo',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Calm,
                        ivs: 18,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quiet,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Mild,
                        ivs: 18,
                    },
                    {
                        slug: 'ludicolo',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Hardy,
                        ivs: 18,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Rash,
                        ivs: 18,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Hasty,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Mild,
                        ivs: 18,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Timid,
                        ivs: 18,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Bold,
                        ivs: 18,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Lonely,
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
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Sassy,
                        ivs: 18,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Naive,
                        ivs: 18,
                    },
                    {
                        slug: 'ludicolo',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Calm,
                        ivs: 18,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Naive,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Sassy,
                        ivs: 18,
                    },
                    {
                        slug: 'ludicolo',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Adamant,
                        ivs: 18,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Rash,
                        ivs: 18,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Impish,
                        ivs: 24,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Sassy,
                        ivs: 18,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Jolly,
                        ivs: 18,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Bold,
                        ivs: 18,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Careful,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'swimmer-f-imani': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Imani',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-dominik': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Dominik',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Sassy,
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
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Modest,
                        ivs: 12,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                    },
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Timid,
                        ivs: 12,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-andres': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ruin-maniac',
        name: 'Andres',
        teams: [
            {
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Impish,
                        ivs: 6,
                    },
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bold,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'bird-keeper-josue': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Josue',
        teams: [
            {
                team: [
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        ivs: 6,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hardy,
                        ivs: 6,
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
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Brave,
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
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Rash,
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
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Quirky,
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
                team: [
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-carolina': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-f',
        name: 'Carolina',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Gentle,
                        ivs: 6,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Adamant,
                        ivs: 6,
                    },
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'female',
                        level: 24,
                        nature: Nature.Naughty,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'sailor-cory': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'sailor',
        name: 'Cory',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Relaxed,
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
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Brave,
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
                team: [
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'fisherman-kai': {
        metadata: [BattleMetadata.Optional, BattleMetadata.Double],
        split: 'Flannery',
        trainerClass: 'fisherman',
        name: 'Kai',
        teams: [
            {
                team: [
                    {
                        slug: 'barboach',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
        secondTrainer: {
            name: 'Charlotte',
            trainerClass: 'picnicker',
            teams: [
                {
                    team: [
                        {
                            slug: 'nuzleaf',
                            ability: 'chlorophyll',
                            gender: 'female',
                            level: 19,
                            nature: Nature.Careful,
                            ivs: 0,
                        },
                    ],
                },
            ],
        },
    },
    'fisherman-claude': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'fisherman',
        name: 'Claude',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
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
                        level: 17,
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
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 18,
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
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 18,
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
                        level: 20,
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
                team: [
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pokemaniac-steve': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'poke-maniac',
        name: 'Steve',
        teams: [
            {
                team: [
                    {
                        slug: 'aron',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 19,
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
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hiker-lucas': {
        metadata: [],
        split: 'Flannery',
        trainerClass: 'hiker',
        name: 'Lucas',
        teams: [
            {
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
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'picnicker-angelina': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'picnicker',
        name: 'Angelina',
        teams: [
            {
                team: [
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 18,
                        nature: Nature.Naughty,
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
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 18,
                        nature: Nature.Gentle,
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
                team: [
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 25,
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
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'silcoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Sassy,
                        ivs: 12,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 24,
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
                team: [
                    {
                        slug: 'volbeat',
                        ability: 'illuminate',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'illumise',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 25,
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
                team: [
                    {
                        slug: 'wurmple',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                    {
                        slug: 'cascoon',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 27,
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
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Gentle,
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
                team: [
                    {
                        slug: 'surskit',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'fisherman-chris': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'fisherman',
        name: 'Chris',
        teams: [
            {
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'feebas',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Quiet,
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
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'gloom',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Naive,
                        ivs: 6,
                    },
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 26,
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
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'breloom',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Adamant,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'parasol-lady-rachel': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'parasol-lady',
        name: 'Rachel',
        teams: [
            {
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Relaxed,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Hasty,
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
                team: [
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'kindler-dayton': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'kindler',
        name: 'Dayton',
        teams: [
            {
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Bold,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-may-route-119': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'pkmn-trainer-may',
        name: 'May',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Bold,
                        ivs: 12,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Quirky,
                        ivs: 18,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Hasty,
                        ivs: 12,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Sassy,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'pkmn-trainer-brendan-route-119': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'pkmn-trainer-brendan',
        name: 'Brendan',
        teams: [
            {
                condition: { type: 'starter', starter: 'mudkip' },
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Docile,
                        ivs: 12,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Brave,
                        ivs: 12,
                    },
                    {
                        slug: 'combusken',
                        ability: 'blaze',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Quirky,
                        ivs: 18,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'treecko' },
                team: [
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Lonely,
                        ivs: 12,
                    },
                    {
                        slug: 'marshtomp',
                        ability: 'torrent',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'torchic' },
                team: [
                    {
                        slug: 'slugma',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Bold,
                        ivs: 12,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                    {
                        slug: 'grovyle',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Gentle,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'guitarist-fabian': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'guitarist',
        name: 'Fabian',
        teams: [
            {
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Modest,
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
                team: [
                    {
                        slug: 'ninjask',
                        ability: 'speed-boost',
                        gender: 'male',
                        level: 26,
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
                team: [
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 25,
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
                        level: 25,
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
    'team-aqua-grunt-f-weather-institute-1': {
        metadata: [BattleMetadata.Choice],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-f',
        name: '1',
        teams: [
            {
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
        name: '3',
        teams: [
            {
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
        metadata: [],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '4',
        teams: [
            {
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
    'team-aqua-grunt-f-weather-institute-2': {
        metadata: [],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-f',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Gentle,
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
        name: '5',
        teams: [
            {
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
    'aqua-admin-shelly-weather-institute': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Winona',
        trainerClass: 'aqua-admin-shelly',
        name: 'Shelly',
        teams: [
            {
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
    'parasol-lady-clarissa': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'parasol-lady',
        name: 'Clarissa',
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Lonely,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Rash,
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
                team: [
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 29,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                    {
                        slug: 'natu',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-leonel': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-m',
        name: 'Leonel',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Calm,
                        ivs: 12,
                        moves: ['thunder', 'quick-attack', 'thunder-wave'],
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
                team: [
                    {
                        slug: 'castform',
                        ability: 'forecast',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Impish,
                        ivs: 6,
                        moves: [
                            'rain-dance',
                            'weather-ball',
                            'thunder',
                            'water-pulse',
                        ],
                    },
                ],
            },
        ],
    },
    'ninja-boy-riley': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ninja-boy',
        name: 'Riley',
        teams: [
            {
                team: [
                    {
                        slug: 'nincada',
                        ability: 'compound-eyes',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Bashful,
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
                        nature: Nature.Relaxed,
                        ivs: 0,
                        moves: [
                            'tackle',
                            'self-destruct',
                            'sludge',
                            'smokescreen',
                        ],
                    },
                ],
            },
        ],
    },
    'battle-girl-callie': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'battle-girl',
        name: 'Callie',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Hasty,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'sableye',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Timid,
                        ivs: 24,
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
                team: [
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Docile,
                        ivs: 6,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Hasty,
                        ivs: 6,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 28,
                        nature: Nature.Brave,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'pkmn-ranger-m-lorenzo': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-ranger-m',
        name: 'Lorenzo',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'seedot',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Relaxed,
                        ivs: 6,
                    },
                    {
                        slug: 'nuzleaf',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Gentle,
                        ivs: 6,
                    },
                    {
                        slug: 'lombre',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Quirky,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'bug-maniac-jeffrey': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-maniac',
        name: 'Jeffrey',
        teams: [
            {
                team: [
                    {
                        slug: 'surskit',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'surskit',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'surskit',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Naive,
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
                team: [
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Bashful,
                        ivs: 0,
                        moves: [
                            'poison-gas',
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
                team: [
                    {
                        slug: 'baltoy',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 27,
                        nature: Nature.Serious,
                        ivs: 6,
                        moves: [
                            'psybeam',
                            'self-destruct',
                            'sandstorm',
                            'ancient-power',
                        ],
                    },
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Brave,
                        ivs: 6,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                    },
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Impish,
                        ivs: 6,
                        moves: ['dig', 'slash', 'sand-attack', 'poison-sting'],
                    },
                ],
            },
        ],
    },
    'bug-maniac-cale': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-maniac',
        name: 'Cale',
        teams: [
            {
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Bold,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'duskull',
                        ability: 'levitate',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'shuppet',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Careful,
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
                team: [
                    {
                        slug: 'kecleon',
                        ability: 'color-change',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Bold,
                        ivs: 0,
                        moves: ['bind', 'lick', 'fury-swipes', 'feint-attack'],
                    },
                    {
                        slug: 'seviper',
                        ability: 'shed-skin',
                        gender: 'female',
                        level: 29,
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
    'pkmn-breeder-f-pat': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-breeder-f',
        name: 'Pat',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Gentle,
                        ivs: 1,
                    },
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Naughty,
                        ivs: 1,
                    },
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Gentle,
                        ivs: 1,
                    },
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Brave,
                        ivs: 1,
                    },
                    {
                        slug: 'sandshrew',
                        ability: 'sand-veil',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Relaxed,
                        ivs: 1,
                    },
                    {
                        slug: 'gulpin',
                        ability: 'liquid-ooze',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Sassy,
                        ivs: 1,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-m-myles': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-breeder-m',
        name: 'Myles',
        teams: [
            {
                team: [
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Quiet,
                        ivs: 1,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Mild,
                        ivs: 1,
                    },
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Timid,
                        ivs: 1,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Careful,
                        ivs: 1,
                    },
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Rash,
                        ivs: 1,
                    },
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Jolly,
                        ivs: 1,
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
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 29,
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
                team: [
                    {
                        slug: 'pikachu',
                        ability: 'static',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-marcel': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-m',
        name: 'Marcel',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                    {
                        slug: 'shiftry',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 29,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-cristin': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-f',
        name: 'Cristin',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'loudred',
                        ability: 'soundproof',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                    {
                        slug: 'vigoroth',
                        ability: 'vital-spirit',
                        gender: 'female',
                        level: 29,
                        nature: Nature.Gentle,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'bug-catcher-davis': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bug-catcher',
        name: 'Davis',
        teams: [
            {
                team: [
                    {
                        slug: 'pinsir',
                        ability: 'hyper-cutter',
                        gender: 'male',
                        level: 27,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-jazmyn': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-f',
        name: 'Jazmyn',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'absol',
                        ability: 'pressure',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Quirky,
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
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'gloom',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Gentle,
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
                team: [
                    {
                        slug: 'beautifly',
                        ability: 'swarm',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Naive,
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
                team: [
                    {
                        slug: 'duskull',
                        ability: 'levitate',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'shuppet',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 30,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'collector-ed': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'collector',
        name: 'Ed',
        teams: [
            {
                team: [
                    {
                        slug: 'zangoose',
                        ability: 'immunity',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                    {
                        slug: 'seviper',
                        ability: 'shed-skin',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Quirky,
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
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'mawile',
                        ability: 'hyper-cutter',
                        gender: 'female',
                        level: 29,
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
                        level: 29,
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
                        level: 29,
                        nature: Nature.Impish,
                        ivs: 12,
                        moves: ['fly', 'water-gun', 'mist', 'protect'],
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-braxton': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-m',
        name: 'Braxton',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Adamant,
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
                        level: 28,
                        nature: Nature.Mild,
                        ivs: 12,
                        moves: ['bite', 'dig', 'feint-attack', 'sand-tomb'],
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 28,
                        nature: Nature.Modest,
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
                        level: 28,
                        nature: Nature.Adamant,
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
                        level: 28,
                        nature: Nature.Gentle,
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
    'guitarist-fernando': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'guitarist',
        name: 'Fernando',
        teams: [
            {
                team: [
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'loudred',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-alberto': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Alberto',
        teams: [
            {
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'xatu',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Docile,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'lunatone',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 30,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'expert-m-fredrick': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'expert-m',
        name: 'Fredrick',
        teams: [
            {
                team: [
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Modest,
                        ivs: 12,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Timid,
                        ivs: 12,
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
                team: [
                    {
                        slug: 'solrock',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 31,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ninja-boy-jonas': {
        metadata: [BattleMetadata.Optional, BattleMetadata.Double],
        split: 'Winona',
        trainerClass: 'ninja-boy',
        name: 'Jonas',
        teams: [
            {
                team: [
                    {
                        slug: 'koffing',
                        ability: 'levitate',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Modest,
                        ivs: 0,
                        moves: [
                            'toxic',
                            'thunder',
                            'self-destruct',
                            'sludge-bomb',
                        ],
                    },
                ],
            },
        ],
        secondTrainer: {
            name: 'Kayley',
            trainerClass: 'parasol-lady',
            teams: [
                {
                    team: [
                        {
                            slug: 'castform',
                            ability: 'forecast',
                            gender: 'female',
                            level: 31,
                            nature: Nature.Jolly,
                            ivs: 0,
                            moves: [
                                'sunny-day',
                                'weather-ball',
                                'flamethrower',
                                'solar-beam',
                            ],
                        },
                    ],
                },
            ],
        },
    },
    'swimmer-f-grace': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Grace',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-declan': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Declan',
        teams: [
            {
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Lax,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sis-and-bro-lila-and-roy': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'sis-and-bro',
        name: 'Lila & Roy',
        teams: [
            {
                team: [
                    {
                        slug: 'chinchou',
                        ability: 'volt-absorb',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Lonely,
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
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Rash,
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
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 34,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-f-isabella': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-f',
        name: 'Isabella',
        teams: [
            {
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 34,
                        nature: Nature.Lax,
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
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Brave,
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
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-nolen': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Nolen',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Hardy,
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
                team: [
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Quirky,
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
                team: [
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-presley': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Presley',
        teams: [
            {
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                    {
                        slug: 'xatu',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'expert-m-auron': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'expert-m',
        name: 'Auron',
        teams: [
            {
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'machamp',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Lonely,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sr-and-jr-kim-and-iris': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'sr-and-jr',
        name: 'Kim & Iris',
        teams: [
            {
                team: [
                    {
                        slug: 'swablu',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 32,
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
                        level: 35,
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
    'swimmer-m-leonardo': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Leonardo',
        teams: [
            {
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-f-isobel': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-f',
        name: 'Isobel',
        teams: [
            {
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 34,
                        nature: Nature.Impish,
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
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-nikki': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Nikki',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Lonely,
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
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-sienna': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Sienna',
        teams: [
            {
                team: [
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
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
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-m-pablo': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-m',
        name: 'Pablo',
        teams: [
            {
                team: [
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
                        nature: Nature.Jolly,
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
                team: [
                    {
                        slug: 'goldeen',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'bird-keeper-aidan': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Aidan',
        teams: [
            {
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'skarmory',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-athena': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-f',
        name: 'Athena',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Calm,
                        ivs: 12,
                        moves: ['thunder', 'thunder-wave', 'quick-attack'],
                    },
                    {
                        slug: 'linoone',
                        ability: 'pickup',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Lonely,
                        ivs: 12,
                        moves: ['surf', 'thief'],
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
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Docile,
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
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-m-camden': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-m',
        name: 'Camden',
        teams: [
            {
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Careful,
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
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Bashful,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-f-donny': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-f',
        name: 'Donny',
        teams: [
            {
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 34,
                        nature: Nature.Naive,
                        ivs: 19,
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
                        slug: 'nosepass',
                        ability: 'sturdy',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Lax,
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
                team: [
                    {
                        slug: 'gloom',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Timid,
                        ivs: 12,
                    },
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 34,
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
                team: [
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacool',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Gentle,
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
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 35,
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
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 35,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-f-carlee': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-f',
        name: 'Carlee',
        teams: [
            {
                team: [
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 35,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-harrison': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Harrison',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Hardy,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Naughty,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 34,
                        nature: Nature.Careful,
                        ivs: 9,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 27,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 33,
                        nature: Nature.Careful,
                        ivs: 29,
                    },
                ],
            },
        ],
    },
    'swimmer-m-clarence': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Clarence',
        teams: [
            {
                team: [
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quirky,
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
                team: [
                    {
                        slug: 'chinchou',
                        ability: 'volt-absorb',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Docile,
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
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Hasty,
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
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-santiago': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Santiago',
        teams: [
            {
                team: [
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'swimmer-m-kevin': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'swimmer-m',
        name: 'Kevin',
        teams: [
            {
                team: [
                    {
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'triathlete-swimmer-f-talia': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'triathlete-swimmer-f',
        name: 'Talia',
        teams: [
            {
                team: [
                    {
                        slug: 'staryu',
                        ability: 'illuminate',
                        gender: 'genderless',
                        level: 34,
                        nature: Nature.Adamant,
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
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quirky,
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
                team: [
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
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
                team: [
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'tentacruel',
                        ability: 'clear-body',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Timid,
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
                team: [
                    {
                        slug: 'luvdisc',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'sis-and-bro-reli-and-ian': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'sis-and-bro',
        name: 'Reli & Ian',
        teams: [
            {
                team: [
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                    {
                        slug: 'wingull',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Bold,
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
                team: [
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
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
                team: [
                    {
                        slug: 'azumarill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Lonely,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'magikarp',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 19,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 23,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Quiet,
                        ivs: 0,
                    },
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Modest,
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
                team: [
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Rash,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'expert-m-paxton': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'expert-m',
        name: 'Paxton',
        teams: [
            {
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Jolly,
                        ivs: 0,
                    },
                    {
                        slug: 'breloom',
                        ability: 'effect-spore',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-darcy': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-f',
        name: 'Darcy',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                    {
                        slug: 'camerupt',
                        ability: 'magma-armor',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'expert-f-makayla': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'expert-f',
        name: 'Makayla',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Serious,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-jonathan': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'cooltrainer-m',
        name: 'Jonathan',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'kecleon',
                        ability: 'color-change',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                    {
                        slug: 'loudred',
                        ability: 'soundproof',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Lonely,
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
                team: [
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'seadra',
                        ability: 'poison-point',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Hasty,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'expert-m-conor': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'expert-m',
        name: 'Conor',
        teams: [
            {
                team: [
                    {
                        slug: 'chinchou',
                        ability: 'volt-absorb',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Quirky,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'expert-f-mollie': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'expert-f',
        name: 'Mollie',
        teams: [
            {
                team: [
                    {
                        slug: 'whiscash',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Bold,
                        ivs: 0,
                    },
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Timid,
                        ivs: 24,
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
                team: [
                    {
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                    {
                        slug: 'ludicolo',
                        ability: 'swift-swim',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Docile,
                        ivs: 12,
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
                team: [
                    {
                        slug: 'seaking',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 34,
                        nature: Nature.Jolly,
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
                team: [
                    {
                        slug: 'sealeo',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Serious,
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
                team: [
                    {
                        slug: 'gyarados',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Bashful,
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
                team: [
                    {
                        slug: 'machop',
                        ability: 'guts',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Impish,
                        ivs: 6,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Gentle,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'battle-girl-reyna': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'battle-girl',
        name: 'Reyna',
        teams: [
            {
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 33,
                        nature: Nature.Mild,
                        ivs: 6,
                    },
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Impish,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'sailor-hudson': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'sailor',
        name: 'Hudson',
        teams: [
            {
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'dragon-tamer-aaron': {
        metadata: [BattleMetadata.Optional, BattleMetadata.Double],
        split: 'Winona',
        trainerClass: 'dragon-tamer',
        name: 'Aaron',
        items: [{ count: 1, slug: 'hyper-potion' }],
        teams: [
            {
                team: [
                    {
                        slug: 'bagon',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 34,
                        nature: Nature.Quirky,
                        ivs: 31,
                        moves: [
                            'dragon-breath',
                            'headbutt',
                            'focus-energy',
                            'ember',
                        ],
                    },
                ],
            },
        ],
        secondTrainer: {
            name: 'Marley',
            trainerClass: 'cooltrainer-f',
            teams: [
                {
                    team: [
                        {
                            slug: 'manectric',
                            ability: 'static',
                            gender: 'female',
                            level: 34,
                            nature: Nature.Calm,
                            ivs: 31,
                            moves: [
                                'bite',
                                'roar',
                                'thunder-wave',
                                'thunderbolt',
                            ],
                        },
                    ],
                },
            ],
        },
    },
    'bird-keeper-alex': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'bird-keeper',
        name: 'Alex',
        teams: [
            {
                team: [
                    {
                        slug: 'natu',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Brave,
                        ivs: 18,
                    },
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Lax,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'sailor-kelvin': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'sailor',
        name: 'Kelvin',
        teams: [
            {
                team: [
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Bashful,
                        ivs: 18,
                    },
                    {
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 33,
                        nature: Nature.Naive,
                        ivs: 18,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-f-mt-chimney': {
        metadata: [],
        split: 'Flannery',
        trainerClass: 'team-magma-grunt-f',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 20,
                        nature: Nature.Hardy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-magma-grunt-m-mt-chimney': {
        metadata: [],
        split: 'Flannery',
        trainerClass: 'team-magma-grunt-m',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 20,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'magma-admin-tabitha': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Flannery',
        trainerClass: 'magma-admin-tabitha',
        name: 'Tabitha',
        teams: [
            {
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'male',
                        level: 18,
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
                        level: 22,
                        nature: Nature.Mild,
                        ivs: 6,
                    },
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 22,
                        nature: Nature.Rash,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'magma-leader-maxie': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Flannery',
        trainerClass: 'magma-leader-maxie',
        name: 'Maxie',
        items: [{ count: 2, slug: 'super-potion' }],
        teams: [
            {
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
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 24,
                        nature: Nature.Lonely,
                        ivs: 18,
                    },
                    {
                        slug: 'camerupt',
                        ability: 'magma-armor',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Adamant,
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
                team: [
                    {
                        slug: 'numel',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 21,
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
                team: [
                    {
                        slug: 'shroomish',
                        ability: 'effect-spore',
                        gender: 'female',
                        level: 21,
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
                team: [
                    {
                        slug: 'meditite',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Bold,
                        ivs: 24,
                    },
                    {
                        slug: 'makuhita',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Lax,
                        ivs: 24,
                    },
                ],
            },
        ],
    },
    'hiker-sawyer': {
        metadata: [BattleMetadata.Optional],
        split: 'Flannery',
        trainerClass: 'hiker',
        name: 'Sawyer',
        teams: [
            {
                team: [
                    {
                        slug: 'geodude',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 21,
                        nature: Nature.Docile,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 21,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'beauty-thalia': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'beauty',
        name: 'Thalia',
        teams: [
            {
                team: [
                    {
                        slug: 'wailmer',
                        ability: 'water-veil',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'horsea',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Naive,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'youngster-demetrius': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'youngster',
        name: 'Demetrius',
        teams: [
            {
                team: [
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Adamant,
                        ivs: 0,
                    },
                    {
                        slug: 'electrike',
                        ability: 'static',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Adamant,
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
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'ruin-maniac-garrison': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'ruin-maniac',
        name: 'Garrison',
        teams: [
            {
                team: [
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'tuber-f-jani': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'tuber-f',
        name: 'Jani',
        teams: [
            {
                team: [
                    {
                        slug: 'marill',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'young-couple-kira-and-dan': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'young-couple',
        name: 'Kira & Dan',
        teams: [
            {
                team: [
                    {
                        slug: 'volbeat',
                        ability: 'illuminate',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'illumise',
                        ability: 'oblivious',
                        gender: 'female',
                        level: 25,
                        nature: Nature.Modest,
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
                team: [
                    {
                        slug: 'spheal',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'machoke',
                        ability: 'guts',
                        gender: 'male',
                        level: 25,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'old-couple-john-and-jay': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Wallace',
        trainerClass: 'old-couple',
        name: 'John & Jay',
        teams: [
            {
                team: [
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 39,
                        nature: Nature.Sassy,
                        ivs: 24,
                        moves: ['psychic', 'fire-punch', 'psych-up', 'protect'],
                    },
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 39,
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
        split: 'Wallace',
        trainerClass: 'dragon-tamer',
        name: 'Nicolas',
        teams: [
            {
                team: [
                    {
                        slug: 'altaria',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                    {
                        slug: 'altaria',
                        ability: 'natural-cure',
                        gender: 'male',
                        level: 37,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'pokemaniac-mark': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'poke-maniac',
        name: 'Mark',
        teams: [
            {
                team: [
                    {
                        slug: 'rhyhorn',
                        ability: 'lightning-rod',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'hex-maniac-leah': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'hex-maniac',
        name: 'Leah',
        teams: [
            {
                team: [
                    {
                        slug: 'spoink',
                        ability: 'thick-fat',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Modest,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'black-belt-zander': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'black-belt',
        name: 'Zander',
        teams: [
            {
                team: [
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 31,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'young-couple-dez-and-luke': {
        metadata: [BattleMetadata.Optional, BattleMetadata.TrueDouble],
        split: 'Winona',
        trainerClass: 'young-couple',
        name: 'Dez & Luke',
        teams: [
            {
                team: [
                    {
                        slug: 'delcatty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 31,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'manectric',
                        ability: 'static',
                        gender: 'male',
                        level: 31,
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
                team: [
                    {
                        slug: 'wobbuffet',
                        ability: 'shadow-tag',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                    {
                        slug: 'natu',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Quirky,
                        ivs: 0,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Rash,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'pkmn-breeder-f-gabrielle': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'pkmn-breeder-f',
        name: 'Gabrielle',
        teams: [
            {
                team: [
                    {
                        slug: 'skitty',
                        ability: 'cute-charm',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Timid,
                        ivs: 0,
                    },
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                    {
                        slug: 'zigzagoon',
                        ability: 'pickup',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Calm,
                        ivs: 0,
                    },
                    {
                        slug: 'lotad',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                    {
                        slug: 'seedot',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 26,
                        nature: Nature.Docile,
                        ivs: 0,
                    },
                    {
                        slug: 'taillow',
                        ability: 'guts',
                        gender: 'female',
                        level: 26,
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
                team: [
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Sassy,
                        ivs: 0,
                    },
                    {
                        slug: 'ralts',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Impish,
                        ivs: 0,
                    },
                    {
                        slug: 'kirlia',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 26,
                        nature: Nature.Hardy,
                        ivs: 0,
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
                team: [
                    {
                        slug: 'shuppet',
                        ability: 'insomnia',
                        gender: 'female',
                        level: 32,
                        nature: Nature.Hasty,
                        ivs: 6,
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
                team: [
                    {
                        slug: 'hariyama',
                        ability: 'thick-fat',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Naive,
                        ivs: 12,
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
    'psychic-m-cedric': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'psychic-m',
        name: 'Cedric',
        teams: [
            {
                team: [
                    {
                        slug: 'wobbuffet',
                        ability: 'shadow-tag',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Adamant,
                        ivs: 0,
                        moves: [
                            'destiny-bond',
                            'safeguard',
                            'counter',
                            'mirror-coat',
                        ],
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-mt-pyre-summit-1': {
        metadata: [],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '6',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-mt-pyre-summit-2': {
        metadata: [],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '7',
        teams: [
            {
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 32,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-mt-pyre-summit-3': {
        metadata: [BattleMetadata.Double],
        split: 'Winona',
        trainerClass: 'team-aqua-grunt-m',
        name: '8',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 30,
                        nature: Nature.Careful,
                        ivs: 0,
                    },
                ],
            },
        ],
        secondTrainer: {
            name: '3',
            trainerClass: 'team-aqua-grunt-f',
            teams: [
                {
                    team: [
                        {
                            slug: 'wailmer',
                            ability: 'water-veil',
                            gender: 'female',
                            level: 30,
                            nature: Nature.Adamant,
                            ivs: 0,
                        },
                        {
                            slug: 'zubat',
                            ability: 'inner-focus',
                            gender: 'female',
                            level: 30,
                            nature: Nature.Jolly,
                            ivs: 0,
                        },
                    ],
                },
            ],
        },
    },
    'team-aqua-grunt-m-seafloor-cavern-1': {
        metadata: [BattleMetadata.Optional],
        split: 'Juan',
        trainerClass: 'team-aqua-grunt-m',
        name: '9',
        teams: [
            {
                team: [
                    {
                        slug: 'poochyena',
                        ability: 'run-away',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Brave,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-seafloor-cavern-2': {
        metadata: [BattleMetadata.Optional],
        split: 'Juan',
        trainerClass: 'team-aqua-grunt-m',
        name: '10',
        teams: [
            {
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Relaxed,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-seafloor-cavern-4': {
        metadata: [BattleMetadata.Optional],
        split: 'Juan',
        trainerClass: 'team-aqua-grunt-m',
        name: '12',
        teams: [
            {
                team: [
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Brave,
                        ivs: 6,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 35,
                        nature: Nature.Hardy,
                        ivs: 6,
                    },
                ],
            },
        ],
    },
    'aqua-admin-shelly-seafloor-cavern': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Juan',
        trainerClass: 'aqua-admin-shelly',
        name: 'Shelly',
        teams: [
            {
                team: [
                    {
                        slug: 'sharpedo',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Gentle,
                        ivs: 12,
                    },
                    {
                        slug: 'mightyena',
                        ability: 'intimidate',
                        gender: 'female',
                        level: 37,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-m-seafloor-cavern-3': {
        metadata: [BattleMetadata.Optional],
        split: 'Juan',
        trainerClass: 'team-aqua-grunt-m',
        name: '11',
        teams: [
            {
                team: [
                    {
                        slug: 'zubat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 36,
                        nature: Nature.Gentle,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'team-aqua-grunt-f-seafloor-cavern-1': {
        metadata: [BattleMetadata.Optional],
        split: 'Juan',
        trainerClass: 'team-aqua-grunt-f',
        name: '4',
        teams: [
            {
                team: [
                    {
                        slug: 'carvanha',
                        ability: 'rough-skin',
                        gender: 'female',
                        level: 36,
                        nature: Nature.Mild,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'aqua-leader-archie-seafloor-cavern': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Juan',
        trainerClass: 'aqua-leader-archie',
        name: 'Archie',
        items: [{ count: 2, slug: 'super-potion' }],
        teams: [
            {
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
    'pkmn-trainer-wally-victory-road': {
        metadata: [BattleMetadata.Miniboss],
        split: 'Wallace',
        trainerClass: 'pkmn-trainer-wally',
        name: 'Wally',
        items: [{ count: 2, slug: 'full-restore' }],
        teams: [
            {
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
    'cooltrainer-m-albert': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-m',
        name: 'Albert',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'magneton',
                        ability: 'magnet-pull',
                        gender: 'genderless',
                        level: 43,
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'muk',
                        ability: 'stench',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Naughty,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-hope': {
        metadata: [],
        split: 'Wallace',
        trainerClass: 'cooltrainer-f',
        name: 'Hope',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'roselia',
                        ability: 'natural-cure',
                        gender: 'female',
                        level: 45,
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-edgar': {
        metadata: [],
        split: 'Wallace',
        trainerClass: 'cooltrainer-m',
        name: 'Edgar',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'cacturne',
                        ability: 'sand-veil',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'pelipper',
                        ability: 'keen-eye',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-katelynn': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-f',
        name: 'Katelynn',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'gardevoir',
                        ability: 'synchronize',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Careful,
                        ivs: 12,
                        moves: [
                            'skill-swap',
                            'psychic',
                            'thunderbolt',
                            'calm-mind',
                        ],
                    },
                    {
                        slug: 'slaking',
                        ability: 'truant',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Jolly,
                        ivs: 12,
                        moves: [
                            'earthquake',
                            'shadow-ball',
                            'aerial-ace',
                            'brick-break',
                        ],
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-quincy': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-m',
        name: 'Quincy',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'slaking',
                        ability: 'truant',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Mild,
                        ivs: 12,
                        moves: [
                            'attract',
                            'ice-beam',
                            'thunderbolt',
                            'flamethrower',
                        ],
                    },
                    {
                        slug: 'dusclops',
                        ability: 'pressure',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Adamant,
                        ivs: 12,
                        moves: [
                            'skill-swap',
                            'protect',
                            'will-o-wisp',
                            'toxic',
                        ],
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-shannon': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-f',
        name: 'Shannon',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'claydol',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 45,
                        nature: Nature.Hasty,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-samuel': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-m',
        name: 'Samuel',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'swellow',
                        ability: 'guts',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                    {
                        slug: 'mawile',
                        ability: 'hyper-cutter',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-michelle': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-f',
        name: 'Michelle',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'torkoal',
                        ability: 'white-smoke',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Naive,
                        ivs: 12,
                    },
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Impish,
                        ivs: 12,
                    },
                    {
                        slug: 'ludicolo',
                        ability: 'swift-swim',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Serious,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-mitchell': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-m',
        name: 'Mitchell',
        teams: [
            {
                team: [
                    {
                        slug: 'lunatone',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 43,
                        nature: Nature.Gentle,
                        ivs: 0,
                        moves: [
                            'explosion',
                            'reflect',
                            'light-screen',
                            'psychic',
                        ],
                    },
                    {
                        slug: 'solrock',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 43,
                        nature: Nature.Hasty,
                        ivs: 0,
                        moves: [
                            'explosion',
                            'reflect',
                            'light-screen',
                            'shadow-ball',
                        ],
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-halle': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-f',
        name: 'Halle',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'sableye',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Naughty,
                        ivs: 0,
                    },
                    {
                        slug: 'absol',
                        ability: 'pressure',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Hasty,
                        ivs: 0,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-julie': {
        metadata: [],
        split: 'Wallace',
        trainerClass: 'cooltrainer-f',
        name: 'Julie',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'sandslash',
                        ability: 'sand-veil',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                    {
                        slug: 'ninetales',
                        ability: 'flash-fire',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Adamant,
                        ivs: 12,
                    },
                    {
                        slug: 'tropius',
                        ability: 'chlorophyll',
                        gender: 'female',
                        level: 42,
                        nature: Nature.Calm,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-owen': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-m',
        name: 'Owen',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
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
                        slug: 'graveler',
                        ability: 'rock-head',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Docile,
                        ivs: 12,
                    },
                    {
                        slug: 'wailord',
                        ability: 'water-veil',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Mild,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-dianne': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-f',
        name: 'Dianne',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'claydol',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 43,
                        nature: Nature.Quiet,
                        ivs: 0,
                        moves: ['skill-swap', 'earthquake'],
                    },
                    {
                        slug: 'lanturn',
                        ability: 'volt-absorb',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Relaxed,
                        ivs: 0,
                        moves: ['thunderbolt', 'earthquake'],
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-felix': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-m',
        name: 'Felix',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'medicham',
                        ability: 'pure-power',
                        gender: 'male',
                        level: 43,
                        nature: Nature.Mild,
                        ivs: 0,
                        moves: ['psychic'],
                    },
                    {
                        slug: 'claydol',
                        ability: 'levitate',
                        gender: 'genderless',
                        level: 43,
                        nature: Nature.Lonely,
                        ivs: 0,
                        moves: ['skill-swap', 'earthquake'],
                    },
                ],
            },
        ],
    },
    'cooltrainer-f-caroline': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-f',
        name: 'Caroline',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'skarmory',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Impish,
                        ivs: 12,
                    },
                    {
                        slug: 'sableye',
                        ability: 'keen-eye',
                        gender: 'female',
                        level: 43,
                        nature: Nature.Quirky,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'cooltrainer-m-vito': {
        metadata: [BattleMetadata.Optional],
        split: 'Wallace',
        trainerClass: 'cooltrainer-m',
        name: 'Vito',
        items: [{ count: 1, slug: 'full-restore' }],
        teams: [
            {
                team: [
                    {
                        slug: 'dodrio',
                        ability: 'run-away',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                    {
                        slug: 'kadabra',
                        ability: 'synchronize',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Relaxed,
                        ivs: 12,
                    },
                    {
                        slug: 'electrode',
                        ability: 'soundproof',
                        gender: 'genderless',
                        level: 42,
                        nature: Nature.Impish,
                        ivs: 12,
                    },
                    {
                        slug: 'shiftry',
                        ability: 'chlorophyll',
                        gender: 'male',
                        level: 42,
                        nature: Nature.Timid,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
};
