import { route221 } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_221: Location = {
    name: 'Route 221',
    map: route221,
    encountersKey: 'sinnoh-route-221',
    battles: [
        {
            isOptional: true,
            trainerClass: 'swimmer-m',
            name: 'Dillon',
            team: [
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Brave,
                },
                {
                    slug: 'floatzel',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Naughty,
                },
            ],
            x: 12,
            y: 53.4,
        },
        {
            isOptional: true,
            trainerClass: 'swimmer-f',
            name: 'Vanessa',
            team: [
                {
                    slug: 'golduck',
                    ability: 1,
                    gender: 'female',
                    level: 35,
                    nature: Nature.Mild,
                },
            ],
            x: 14.2,
            y: 83,
        },
        {
            isOptional: true,
            trainerClass: 'fisherman',
            name: 'Cory',
            team: [
                {
                    slug: 'finneon',
                    ability: 1,
                    gender: 'male',
                    level: 30,
                    nature: Nature.Naive,
                },
                {
                    slug: 'finneon',
                    ability: 1,
                    gender: 'male',
                    level: 32,
                    nature: Nature.Hasty,
                },
                {
                    slug: 'finneon',
                    ability: 1,
                    gender: 'male',
                    level: 34,
                    nature: Nature.Quiet,
                },
            ],
            x: 27.7,
            y: 71.8,
        },
        {
            isOptional: true,
            trainerClass: 'ace-trainer-f',
            name: 'Shannon',
            team: [
                {
                    slug: 'cherrim',
                    ability: 1,
                    gender: 'female',
                    ivs: 6,
                    level: 34,
                    nature: Nature.Adamant,
                    moves: ['petal-dance', 'magical-leaf', 'leech-seed'],
                },
                {
                    slug: 'azumarill',
                    ability: 1,
                    gender: 'female',
                    ivs: 6,
                    level: 34,
                    nature: Nature.Relaxed,
                    moves: ['double-edge', 'bubble-beam', 'aqua-ring'],
                },
                {
                    slug: 'lopunny',
                    ability: 1,
                    gender: 'female',
                    ivs: 6,
                    level: 35,
                    nature: Nature.Naughty,
                    moves: ['jump-kick', 'quick-attack', 'charm'],
                },
            ],
            x: 55.9,
            y: 83.8,
        },
        {
            isOptional: true,
            trainerClass: 'collector',
            name: 'Ivan',
            team: [
                {
                    slug: 'togetic',
                    ability: 1,
                    gender: 'male',
                    level: 35,
                    nature: Nature.Lonely,
                },
            ],
            x: 67.2,
            y: 59.9,
        },
        {
            isOptional: true,
            trainerClass: 'ace-trainer-m',
            name: 'Jake',
            team: [
                {
                    slug: 'staraptor',
                    ability: 1,
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
                    ability: 1,
                    gender: 'male',
                    ivs: 6,
                    level: 36,
                    nature: Nature.Careful,
                    moves: ['double-hit', 'psychic'],
                },
            ],
            x: 85,
            y: 66.8,
        },
    ],
};

export default ROUTE_221;
