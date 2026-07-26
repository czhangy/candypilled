import { route213 } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    encountersKey: 'sinnoh-route-213',
    battles: [
        {
            isOptional: true,
            trainerClass: 'Tuber F',
            name: 'Chelsea',
            team: [
                {
                    slug: 'marill',
                    ability: 1,
                    gender: 'female',
                    level: 28,
                    nature: Nature.Adamant,
                },
            ],
            x: 67.1,
            y: 47.2,
        },
        {
            isOptional: true,
            trainerClass: 'Tuber M',
            name: 'Jared',
            team: [
                {
                    slug: 'shellos',
                    ability: 1,
                    gender: 'male',
                    level: 25,
                    nature: Nature.Quirky,
                },
                {
                    slug: 'shellos',
                    ability: 1,
                    gender: 'male',
                    level: 25,
                    nature: Nature.Quirky,
                },
                {
                    slug: 'shellos',
                    ability: 1,
                    gender: 'male',
                    level: 26,
                    nature: Nature.Naive,
                },
            ],
            x: 66.6,
            y: 54.2,
        },
        {
            isOptional: true,
            trainerClass: 'Fisherman',
            name: 'Kenneth',
            team: [
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 25,
                    nature: Nature.Hasty,
                },
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 25,
                    nature: Nature.Hasty,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 28,
                    nature: Nature.Naive,
                },
            ],
            x: 26.5,
            y: 72.5,
        },
        {
            isOptional: true,
            trainerClass: 'Beauty',
            name: 'Cyndy',
            team: [
                {
                    slug: 'glameow',
                    ability: 1,
                    gender: 'female',
                    level: 29,
                    nature: Nature.Hardy,
                },
            ],
            x: 29.7,
            y: 47,
        },
        {
            isOptional: true,
            trainerClass: 'Swimmer F',
            name: 'Haley',
            team: [
                {
                    slug: 'psyduck',
                    ability: 1,
                    gender: 'female',
                    level: 31,
                    nature: Nature.Jolly,
                },
                {
                    slug: 'azumarill',
                    ability: 1,
                    gender: 'female',
                    level: 35,
                    nature: Nature.Lax,
                },
            ],
            x: 68.1,
            y: 81.9,
        },
        {
            isOptional: true,
            trainerClass: 'Sailor',
            name: 'Paul',
            team: [
                {
                    slug: 'tentacool',
                    ability: 1,
                    gender: 'male',
                    level: 31,
                    nature: Nature.Jolly,
                },
                {
                    slug: 'pelipper',
                    ability: 1,
                    gender: 'male',
                    level: 31,
                    nature: Nature.Quiet,
                },
                {
                    slug: 'machoke',
                    ability: 1,
                    gender: 'male',
                    level: 34,
                    nature: Nature.Quirky,
                },
            ],
            x: 80.6,
            y: 85.6,
        },
        {
            isOptional: true,
            trainerClass: 'Swimmer M',
            name: 'Evan',
            team: [
                {
                    slug: 'golduck',
                    ability: 1,
                    gender: 'male',
                    level: 32,
                    nature: Nature.Lonely,
                },
                {
                    slug: 'golduck',
                    ability: 1,
                    gender: 'male',
                    level: 34,
                    nature: Nature.Bashful,
                },
            ],
            x: 88.9,
            y: 69.3,
        },
        {
            isOptional: true,
            trainerClass: 'Swimmer F',
            name: 'Mary',
            team: [
                {
                    slug: 'finneon',
                    ability: 1,
                    gender: 'female',
                    level: 33,
                    nature: Nature.Jolly,
                },
                {
                    slug: 'pelipper',
                    ability: 1,
                    gender: 'female',
                    level: 33,
                    nature: Nature.Relaxed,
                },
            ],
            x: 94.2,
            y: 69.3,
        },
        {
            isOptional: true,
            trainerClass: 'Swimmer M',
            name: 'Sheltin',
            team: [
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 32,
                    nature: Nature.Naughty,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 32,
                    nature: Nature.Naughty,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 32,
                    nature: Nature.Naughty,
                },
            ],
            x: 58.8,
            y: 93.1,
        },
    ],
};

export default ROUTE_213;
