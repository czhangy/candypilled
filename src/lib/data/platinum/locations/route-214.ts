import { route214 } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_214: Location = {
    name: 'Route 214',
    map: route214,
    encountersKey: 'sinnoh-route-214',
    battles: [
        {
            trainerClass: 'psychic-f',
            name: 'Abigail',
            team: [
                {
                    slug: 'chingling',
                    ability: 1,
                    gender: 'female',
                    level: 23,
                    nature: Nature.Lax,
                },
                {
                    slug: 'drifloon',
                    ability: 1,
                    gender: 'female',
                    level: 25,
                    nature: Nature.Quiet,
                },
                {
                    slug: 'kirlia',
                    ability: 1,
                    gender: 'female',
                    level: 27,
                    nature: Nature.Docile,
                },
            ],
            x: 45.1,
            y: 21.9,
        },
        {
            isOptional: true,
            trainerClass: 'pi',
            name: 'Carlos',
            team: [
                {
                    slug: 'goldeen',
                    ability: 1,
                    gender: 'male',
                    ivs: 6,
                    level: 30,
                    nature: Nature.Lax,
                    moves: ['horn-drill', 'flail'],
                },
            ],
            x: 62.5,
            y: 39.1,
        },
        {
            isOptional: true,
            trainerClass: 'collector',
            name: 'Brady',
            team: [
                {
                    slug: 'skorupi',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Relaxed,
                },
                {
                    slug: 'tangela',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Serious,
                },
                {
                    slug: 'yanma',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Serious,
                },
                {
                    slug: 'carnivine',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Timid,
                },
                {
                    slug: 'croagunk',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Gentle,
                },
                {
                    slug: 'tropius',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Relaxed,
                },
            ],
            x: 72.9,
            y: 42.4,
        },
        {
            isOptional: true,
            trainerClass: 'beauty',
            name: 'Devon',
            team: [
                {
                    slug: 'wormadam-plant',
                    ability: 1,
                    gender: 'female',
                    level: 24,
                    nature: Nature.Jolly,
                },
                {
                    slug: 'wormadam-sandy',
                    ability: 1,
                    gender: 'female',
                    level: 24,
                    nature: Nature.Jolly,
                },
                {
                    slug: 'wormadam-trash',
                    ability: 1,
                    gender: 'female',
                    level: 24,
                    nature: Nature.Jolly,
                },
            ],
            x: 79.7,
            y: 52.1,
        },
        {
            isOptional: true,
            trainerClass: 'ruin-maniac',
            name: 'Bryan',
            team: [
                {
                    slug: 'bronzor',
                    ability: 1,
                    level: 24,
                    nature: Nature.Relaxed,
                },
                {
                    slug: 'cranidos',
                    ability: 1,
                    gender: 'male',
                    level: 26,
                    nature: Nature.Naive,
                },
            ],
            x: 20.9,
            y: 53.6,
        },
        {
            isOptional: true,
            trainerClass: 'psychic-m',
            name: 'Mitchell',
            team: [
                {
                    slug: 'duskull',
                    ability: 1,
                    gender: 'male',
                    level: 26,
                    nature: Nature.Sassy,
                },
                {
                    slug: 'kadabra',
                    ability: 1,
                    gender: 'male',
                    level: 26,
                    nature: Nature.Impish,
                },
            ],
            x: 80,
            y: 58.7,
        },
        {
            isOptional: true,
            trainerClass: 'collector',
            name: 'Jamal',
            team: [
                {
                    slug: 'porygon',
                    ability: 1,
                    level: 27,
                    nature: Nature.Timid,
                },
            ],
            x: 38.1,
            y: 66,
        },
        {
            isOptional: true,
            trainerClass: 'ruin-maniac',
            name: 'Ronald',
            team: [
                {
                    slug: 'shieldon',
                    ability: 1,
                    gender: 'male',
                    level: 27,
                    nature: Nature.Jolly,
                },
            ],
            x: 45.1,
            y: 73.9,
        },
        {
            isOptional: true,
            trainerClass: 'collector',
            name: 'Douglas',
            team: [
                {
                    slug: 'jolteon',
                    ability: 1,
                    gender: 'male',
                    level: 24,
                    nature: Nature.Gentle,
                },
                {
                    slug: 'vaporeon',
                    ability: 1,
                    gender: 'male',
                    level: 24,
                    nature: Nature.Docile,
                },
                {
                    slug: 'flareon',
                    ability: 1,
                    gender: 'male',
                    level: 24,
                    nature: Nature.Hasty,
                },
            ],
            x: 80,
            y: 85.6,
        },
    ],
};

export default ROUTE_214;
