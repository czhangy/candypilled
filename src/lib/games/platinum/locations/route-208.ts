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
                    name: 'Onix',
                    ability: 1,
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
                    name: 'Machop',
                    ability: 1,
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
                    name: 'Nosepass',
                    ability: 1,
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
                    name: 'Roselia',
                    ability: 1,
                    level: 18,
                    nature: Nature.Mild,
                },
                {
                    name: 'Combee',
                    ability: 1,
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
                    name: 'Mime Jr.',
                    ability: 1,
                    level: 20,
                    nature: Nature.Mild,
                },
                {
                    name: 'Bonsly',
                    ability: 1,
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
                    name: 'Barboach',
                    ability: 1,
                    level: 33,
                    nature: Nature.Relaxed,
                },
                {
                    name: 'Gyarados',
                    ability: 1,
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
                    name: 'Graveler',
                    ability: 1,
                    level: 38,
                    nature: Nature.Adamant,
                },
                {
                    name: 'Probopass',
                    ability: 1,
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
