import { route222 } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    map: route222,
    encountersKey: 'sinnoh-route-222',
    battles: [
        {
            isOptional: true,
            trainerClass: 'rich-boy',
            name: 'Trey',
            team: [
                {
                    slug: 'luxray',
                    ability: 1,
                    gender: 'male',
                    level: 45,
                    nature: Nature.Jolly,
                },
            ],
            items: [{ count: 1, name: 'Full Restore' }],
            x: 18.9,
            y: 48.6,
        },
        {
            isOptional: true,
            trainerClass: 'fisherman',
            name: 'Alec',
            team: [
                {
                    slug: 'magikarp',
                    ability: 1,
                    gender: 'male',
                    level: 42,
                    nature: Nature.Lonely,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 45,
                    nature: Nature.Naughty,
                },
            ],
            x: 29.3,
            y: 67.9,
        },
        {
            isOptional: true,
            trainerClass: 'fisherman',
            name: 'George',
            team: [
                {
                    slug: 'magikarp',
                    ability: 1,
                    gender: 'male',
                    level: 41,
                    nature: Nature.Lonely,
                },
                {
                    slug: 'finneon',
                    ability: 1,
                    gender: 'male',
                    level: 41,
                    nature: Nature.Bold,
                },
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 41,
                    nature: Nature.Lonely,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 42,
                    nature: Nature.Careful,
                },
            ],
            x: 37.7,
            y: 67.9,
        },
        {
            isOptional: true,
            trainerClass: 'beauty',
            name: 'Nicola',
            team: [
                {
                    slug: 'lopunny',
                    ability: 1,
                    gender: 'female',
                    level: 45,
                    nature: Nature.Lax,
                },
            ],
            x: 39.8,
            y: 35.9,
        },
        {
            isOptional: true,
            trainerClass: 'fisherman',
            name: 'Brett',
            team: [
                {
                    slug: 'magikarp',
                    ability: 1,
                    gender: 'male',
                    level: 43,
                    nature: Nature.Lonely,
                },
                {
                    slug: 'finneon',
                    ability: 1,
                    gender: 'male',
                    level: 42,
                    nature: Nature.Timid,
                },
                {
                    slug: 'feebas',
                    ability: 1,
                    gender: 'male',
                    level: 42,
                    nature: Nature.Sassy,
                },
            ],
            x: 46.1,
            y: 70.6,
        },
        {
            isOptional: true,
            trainerClass: 'fisherman',
            name: 'Cole',
            team: [
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 43,
                    nature: Nature.Naughty,
                },
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 40,
                    nature: Nature.Lonely,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 43,
                    nature: Nature.Naughty,
                },
            ],
            x: 51.3,
            y: 70.6,
        },
        {
            isOptional: true,
            trainerClass: 'tuber-f',
            name: 'Holly',
            team: [
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'female',
                    level: 44,
                    nature: Nature.Adamant,
                },
            ],
            x: 56.6,
            y: 66,
        },
        {
            isOptional: true,
            trainerClass: 'policeman',
            name: 'Thomas',
            team: [
                {
                    slug: 'noctowl',
                    ability: 1,
                    gender: 'male',
                    level: 43,
                    nature: Nature.Jolly,
                },
                {
                    slug: 'machoke',
                    ability: 1,
                    gender: 'male',
                    level: 43,
                    nature: Nature.Sassy,
                },
            ],
            x: 71.1,
            y: 38.2,
        },
        {
            isOptional: true,
            trainerClass: 'sailor',
            name: 'Marc',
            team: [
                {
                    slug: 'mantyke',
                    ability: 1,
                    gender: 'male',
                    level: 45,
                    nature: Nature.Quiet,
                },
            ],
            x: 78.6,
            y: 45.7,
        },
        {
            isOptional: true,
            trainerClass: 'tuber-m',
            name: 'Conner',
            team: [
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 44,
                    nature: Nature.Lonely,
                },
            ],
            x: 82.7,
            y: 45.7,
        },
        {
            trainerClass: 'sailor',
            name: 'Luther',
            team: [
                {
                    slug: 'wingull',
                    ability: 1,
                    gender: 'male',
                    level: 41,
                    nature: Nature.Timid,
                },
                {
                    slug: 'machoke',
                    ability: 1,
                    gender: 'male',
                    level: 42,
                    nature: Nature.Modest,
                },
                {
                    slug: 'gastrodon',
                    ability: 1,
                    gender: 'male',
                    level: 43,
                    nature: Nature.Bashful,
                },
            ],
            x: 84.8,
            y: 55.8,
        },
    ],
};

export default ROUTE_222;
