import { route218 } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    encountersKey: 'sinnoh-route-218',
    battles: [
        {
            isOptional: true,
            trainerClass: 'Fisherman',
            name: 'Miguel',
            team: [
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Adamant,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Adamant,
                },
            ],
            x: 46.1,
            y: 65.3,
        },
        {
            isOptional: true,
            trainerClass: 'Fisherman',
            name: 'Luc',
            team: [
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 29,
                    nature: Nature.Docile,
                },
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 29,
                    nature: Nature.Docile,
                },
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 30,
                    nature: Nature.Quiet,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 31,
                    nature: Nature.Impish,
                },
                {
                    slug: 'remoraid',
                    ability: 1,
                    gender: 'male',
                    level: 31,
                    nature: Nature.Adamant,
                },
            ],
            x: 46.1,
            y: 46,
        },
        {
            isOptional: true,
            trainerClass: 'Sailor',
            name: 'Skyler',
            team: [
                {
                    slug: 'mantyke',
                    ability: 1,
                    gender: 'male',
                    level: 32,
                    nature: Nature.Quiet,
                },
                {
                    slug: 'machoke',
                    ability: 1,
                    gender: 'male',
                    level: 34,
                    nature: Nature.Impish,
                },
            ],
            x: 19.7,
            y: 30,
        },
        {
            isOptional: true,
            trainerClass: 'Guitarist',
            name: 'Tony',
            team: [
                {
                    slug: 'kricketune',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Bashful,
                },
                {
                    slug: 'magnemite',
                    ability: 1,
                    level: 33,
                    nature: Nature.Hasty,
                },
            ],
            x: 25.8,
            y: 52.9,
        },
    ],
};

export default ROUTE_218;
