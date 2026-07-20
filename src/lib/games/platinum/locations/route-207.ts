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
                    name: 'Pachirisu',
                    ability: 1,
                    level: 22,
                    nature: Nature.Bold,
                    moves: ['Spark', 'Quick Attack', 'Charm'],
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
                    name: 'Chimchar',
                    ability: 1,
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
                    name: 'Geodude',
                    ability: 1,
                    level: 20,
                    nature: Nature.Impish,
                },
                {
                    name: 'Nosepass',
                    ability: 1,
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
                    name: 'Buizel',
                    ability: 1,
                    level: 18,
                    nature: Nature.Bold,
                },
                {
                    name: 'Luxio',
                    ability: 1,
                    level: 18,
                    nature: Nature.Bashful,
                },
                {
                    name: 'Gligar',
                    ability: 1,
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
                    name: 'Geodude',
                    ability: 1,
                    level: 17,
                    nature: Nature.Impish,
                },
                {
                    name: 'Geodude',
                    ability: 1,
                    level: 17,
                    nature: Nature.Impish,
                },
                {
                    name: 'Onix',
                    ability: 1,
                    level: 19,
                    nature: Nature.Impish,
                },
                {
                    name: 'Geodude',
                    ability: 1,
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
                    name: 'Machop',
                    ability: 1,
                    level: 21,
                    nature: Nature.Lonely,
                    ivs: 2,
                },
                {
                    name: 'Meditite',
                    ability: 1,
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
