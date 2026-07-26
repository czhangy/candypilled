import { route207 } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_207: Location = {
    name: 'Route 207',
    map: route207,
    encountersKey: 'sinnoh-route-207',
    battles: [
        {
            isOptional: true,
            trainerClass: 'Picnicker',
            name: 'Lauren',
            team: [
                {
                    slug: 'pachirisu',
                    ability: 1,
                    gender: 'female',
                    level: 22,
                    nature: Nature.Bold,
                    moves: ['spark', 'quick-attack', 'charm'],
                },
            ],
            x: 50.8,
            y: 21.4,
        },
        {
            isOptional: true,
            trainerClass: 'Camper',
            name: 'Anthony',
            team: [
                {
                    slug: 'chimchar',
                    ability: 1,
                    gender: 'male',
                    level: 22,
                    nature: Nature.Careful,
                },
            ],
            x: 50.8,
            y: 39,
        },
        {
            isOptional: true,
            trainerClass: 'Hiker',
            name: 'Justin',
            team: [
                {
                    slug: 'geodude',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Impish,
                },
                {
                    slug: 'nosepass',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Serious,
                },
            ],
            x: 64.9,
            y: 35.6,
        },
        {
            isOptional: true,
            trainerClass: 'Youngster',
            name: 'Austin',
            team: [
                {
                    slug: 'buizel',
                    ability: 1,
                    gender: 'male',
                    level: 18,
                    nature: Nature.Bold,
                },
                {
                    slug: 'luxio',
                    ability: 1,
                    gender: 'male',
                    level: 18,
                    nature: Nature.Bashful,
                },
                {
                    slug: 'gligar',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Naughty,
                },
            ],
            x: 59,
            y: 69,
        },
        {
            isOptional: true,
            trainerClass: 'Hiker',
            name: 'Kevin',
            team: [
                {
                    slug: 'geodude',
                    ability: 1,
                    gender: 'male',
                    level: 17,
                    nature: Nature.Impish,
                },
                {
                    slug: 'geodude',
                    ability: 1,
                    gender: 'male',
                    level: 17,
                    nature: Nature.Impish,
                },
                {
                    slug: 'onix',
                    ability: 1,
                    gender: 'male',
                    level: 19,
                    nature: Nature.Impish,
                },
                {
                    slug: 'geodude',
                    ability: 1,
                    gender: 'male',
                    level: 19,
                    nature: Nature.Sassy,
                },
            ],
            x: 49.3,
            y: 49,
        },
        {
            isOptional: true,
            trainerClass: 'Battle Girl',
            name: 'Helen',
            team: [
                {
                    slug: 'machop',
                    ability: 1,
                    gender: 'male',
                    level: 21,
                    nature: Nature.Lonely,
                    ivs: 2,
                },
                {
                    slug: 'meditite',
                    ability: 1,
                    gender: 'female',
                    level: 21,
                    nature: Nature.Serious,
                    ivs: 2,
                },
            ],
            x: 79.3,
            y: 54.3,
        },
    ],
};

export default ROUTE_207;
