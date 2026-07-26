import { route204North, route204South } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_204: Location = {
    name: 'Route 204',
    subareas: [
        {
            name: 'South',
            map: route204South,
            encountersKey: 'sinnoh-route-204-south-towards-jubilife-city',
            battles: [
                {
                    trainerClass: 'Lass',
                    name: 'Sarah',
                    team: [
                        {
                            slug: 'shinx',
                            ability: 1,
                            gender: 'female',
                            level: 7,
                            moves: ['tackle', 'leer'],
                            nature: Nature.Hardy,
                        },
                    ],
                    x: 38.9,
                    y: 66.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Youngster',
                    name: 'Tyler',
                    team: [
                        {
                            slug: 'magikarp',
                            ability: 1,
                            gender: 'male',
                            level: 8,
                            moves: ['splash'],
                            nature: Nature.Sassy,
                        },
                    ],
                    x: 22.9,
                    y: 57.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Lass',
                    name: 'Samantha',
                    team: [
                        {
                            slug: 'budew',
                            ability: 1,
                            gender: 'female',
                            level: 7,
                            moves: ['absorb', 'growth', 'water-sport'],
                            nature: Nature.Docile,
                        },
                    ],
                    x: 35.7,
                    y: 27.5,
                },
            ],
        },
        {
            name: 'North',
            map: route204North,
            encountersKey: 'sinnoh-route-204-north-towards-floaroma-town',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Aroma Lady',
                    name: 'Taylor',
                    team: [
                        {
                            slug: 'budew',
                            ability: 1,
                            gender: 'female',
                            level: 9,
                            nature: Nature.Bashful,
                        },
                        {
                            slug: 'cherubi',
                            ability: 1,
                            gender: 'female',
                            level: 11,
                            nature: Nature.Docile,
                        },
                    ],
                    x: 52.9,
                    y: 59.4,
                },
                {
                    isOptional: true,
                    trainerClass: 'Bug Catcher',
                    name: 'Brandon',
                    team: [
                        {
                            slug: 'wurmple',
                            ability: 1,
                            gender: 'male',
                            level: 10,
                            nature: Nature.Quirky,
                        },
                        {
                            slug: 'kricketot',
                            ability: 1,
                            gender: 'male',
                            level: 11,
                            moves: ['bide'],
                            nature: Nature.Modest,
                        },
                    ],
                    x: 63.3,
                    y: 39.7,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customWidth: 36,
                    trainerClass: 'Twins',
                    name: 'Liv & Liz',
                    team: [
                        {
                            slug: 'pachirisu',
                            ability: 1,
                            gender: 'female',
                            level: 11,
                            nature: Nature.Brave,
                        },
                        {
                            slug: 'pachirisu',
                            ability: 1,
                            gender: 'female',
                            level: 11,
                            nature: Nature.Brave,
                        },
                    ],
                    x: 48.3,
                    y: 23,
                },
            ],
        },
    ],
};

export default ROUTE_204;
