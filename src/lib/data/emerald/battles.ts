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
        split: 'Winona',
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
        split: 'Winona',
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
        metadata: [BattleMetadata.Optional],
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
    },
    'battle-girl-helene': {
        metadata: [BattleMetadata.Optional],
        split: 'Winona',
        trainerClass: 'battle-girl',
        name: 'Helene',
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
};
