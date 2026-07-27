import { route220 } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_220: Location = {
    name: 'Route 220',
    map: route220,
    encountersKey: 'sinnoh-sea-route-220',
    battles: [
        {
            isOptional: true,
            trainerClass: 'swimmer-f',
            name: 'Jessica',
            team: [
                {
                    slug: 'goldeen',
                    ability: 1,
                    gender: 'female',
                    level: 30,
                    nature: Nature.Lax,
                },
                {
                    slug: 'goldeen',
                    ability: 1,
                    gender: 'female',
                    level: 30,
                    nature: Nature.Lax,
                },
                {
                    slug: 'goldeen',
                    ability: 1,
                    gender: 'female',
                    level: 31,
                    nature: Nature.Jolly,
                },
                {
                    slug: 'seaking',
                    ability: 1,
                    gender: 'female',
                    level: 33,
                    nature: Nature.Lonely,
                },
            ],
            x: 17.1,
            y: 30.7,
        },
        {
            isOptional: true,
            trainerClass: 'swimmer-f',
            name: 'Erica',
            team: [
                {
                    slug: 'finneon',
                    ability: 1,
                    gender: 'female',
                    level: 35,
                    nature: Nature.Mild,
                },
            ],
            x: 19,
            y: 36.5,
        },
        {
            isOptional: true,
            trainerClass: 'swimmer-m',
            name: 'Adrian',
            team: [
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 32,
                    nature: Nature.Quiet,
                },
                {
                    slug: 'tentacool',
                    ability: 1,
                    gender: 'male',
                    level: 30,
                    nature: Nature.Rash,
                },
                {
                    slug: 'octillery',
                    ability: 1,
                    gender: 'male',
                    level: 34,
                    nature: Nature.Lonely,
                },
            ],
            x: 40,
            y: 70.3,
        },
        {
            isOptional: true,
            trainerClass: 'swimmer-m',
            name: 'Vincent',
            team: [
                {
                    slug: 'pelipper',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Mild,
                },
                {
                    slug: 'gastrodon',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Adamant,
                },
            ],
            x: 56.5,
            y: 48.9,
        },
        {
            isOptional: true,
            trainerClass: 'swimmer-f',
            name: 'Katelyn',
            team: [
                {
                    slug: 'buizel',
                    ability: 1,
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
                    ability: 1,
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
                    ability: 1,
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
            x: 62.2,
            y: 27.5,
        },
        {
            isOptional: true,
            trainerClass: 'swimmer-f',
            name: 'Claire',
            team: [
                {
                    slug: 'floatzel',
                    ability: 1,
                    gender: 'female',
                    level: 35,
                    nature: Nature.Quirky,
                },
            ],
            x: 80.5,
            y: 48.9,
        },
        {
            isOptional: true,
            trainerClass: 'swimmer-m',
            name: 'Erik',
            team: [
                {
                    slug: 'tentacruel',
                    ability: 1,
                    gender: 'male',
                    level: 35,
                    nature: Nature.Adamant,
                },
            ],
            x: 80.5,
            y: 66.3,
        },
    ],
};

export default ROUTE_220;
