import { route204North, route204South } from '@/lib/games/platinum/splits/maps';
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
                            name: 'Shinx',
                            ability: 1,
                            level: 7,
                            moves: ['Tackle', 'Leer'],
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
                            name: 'Magikarp',
                            ability: 1,
                            level: 8,
                            moves: ['Splash', 'Tackle', 'Flail'],
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
                            name: 'Budew',
                            ability: 1,
                            level: 7,
                            moves: ['Absorb', 'Growth', 'Water Sport'],
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
                    trainerClass: 'Aroma Lady',
                    name: 'Taylor',
                    team: [
                        {
                            name: 'Budew',
                            ability: 1,
                            level: 9,
                            moves: ['Absorb', 'Growth', 'Water Sport'],
                            nature: Nature.Bashful,
                        },
                        {
                            name: 'Cherubi',
                            ability: 1,
                            level: 11,
                            moves: ['Tackle', 'Growth', 'Leech Seed'],
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
                            name: 'Wurmple',
                            ability: 1,
                            level: 10,
                            moves: ['Tackle', 'String Shot', 'Poison Sting'],
                            nature: Nature.Quirky,
                        },
                        {
                            name: 'Kricketot',
                            ability: 1,
                            level: 11,
                            moves: ['Growl', 'Bide'],
                            nature: Nature.Modest,
                        },
                    ],
                    x: 63.3,
                    y: 39.7,
                },
                {
                    isTrueDouble: true,
                    isDoubleWidthMarker: true,
                    trainerClass: 'Twins',
                    name: 'Liv & Liz',
                    team: [
                        {
                            name: 'Pachirisu',
                            ability: 1,
                            level: 9,
                            moves: ['Growl', 'Bide', 'Quick Attack', 'Charm'],
                            nature: Nature.Brave,
                        },
                        {
                            name: 'Pachirisu',
                            ability: 1,
                            level: 9,
                            moves: ['Growl', 'Bide', 'Quick Attack', 'Charm'],
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
