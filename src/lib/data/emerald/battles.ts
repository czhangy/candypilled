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
        name: 'Grunt',
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
        name: 'Grunt',
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
};
