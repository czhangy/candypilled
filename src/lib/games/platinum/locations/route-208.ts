import { route208 } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    encountersKey: 'sinnoh-route-208',
    battles: [
        {
            isOptional: true,
            trainerClass: 'Hiker',
            name: 'Jonathan',
            team: [
                {
                    slug: 'onix',
                    ability: 1,
                    gender: 'male',
                    level: 22,
                    nature: Nature.Adamant,
                },
            ],
            x: 38.2,
            y: 58.6,
        },
        {
            isOptional: true,
            trainerClass: 'Black Belt',
            name: 'Kyle',
            team: [
                {
                    slug: 'machop',
                    ability: 1,
                    gender: 'male',
                    level: 23,
                    nature: Nature.Jolly,
                    ivs: 3,
                },
            ],
            x: 28.2,
            y: 31.4,
        },
        {
            trainerClass: 'Hiker',
            name: 'Robert',
            team: [
                {
                    slug: 'nosepass',
                    ability: 1,
                    gender: 'male',
                    level: 22,
                    nature: Nature.Sassy,
                },
            ],
            x: 57,
            y: 56,
        },
        {
            isOptional: true,
            trainerClass: 'Aroma Lady',
            name: 'Hannah',
            team: [
                {
                    slug: 'roselia',
                    ability: 1,
                    gender: 'female',
                    level: 18,
                    nature: Nature.Mild,
                },
                {
                    slug: 'combee',
                    ability: 1,
                    gender: 'female',
                    level: 22,
                    nature: Nature.Naughty,
                },
            ],
            x: 77.3,
            y: 57.5,
        },
        {
            isOptional: true,
            trainerClass: 'Artist',
            name: 'William',
            team: [
                {
                    slug: 'mime-jr',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Mild,
                },
                {
                    slug: 'bonsly',
                    ability: 1,
                    gender: 'male',
                    level: 20,
                    nature: Nature.Naughty,
                },
            ],
            x: 86.7,
            y: 68.6,
        },
        {
            isOptional: true,
            trainerClass: 'Fisherman',
            name: 'Cody',
            team: [
                {
                    slug: 'barboach',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Relaxed,
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Careful,
                },
            ],
            x: 46,
            y: 76.6,
        },
        {
            isOptional: true,
            trainerClass: 'Hiker',
            name: 'Alexander',
            team: [
                {
                    slug: 'graveler',
                    ability: 1,
                    gender: 'male',
                    level: 38,
                    nature: Nature.Adamant,
                },
                {
                    slug: 'probopass',
                    ability: 1,
                    gender: 'male',
                    level: 40,
                    nature: Nature.Quiet,
                },
            ],
            x: 10,
            y: 43,
        },
    ],
};

export default ROUTE_208;
