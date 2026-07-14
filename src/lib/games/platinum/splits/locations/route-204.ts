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
                            level: 7,
                            moves: ['Tackle', 'Leer'],
                            nature: Nature.Hardy,
                            ability: 'Rivalry',
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
                            level: 8,
                            moves: ['Splash', 'Tackle', 'Flail'],
                            nature: Nature.Sassy,
                            ability: 'Swift Swim',
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
                            level: 7,
                            moves: ['Absorb', 'Growth', 'Water Sport'],
                            nature: Nature.Docile,
                            ability: 'Natural Cure',
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
                            level: 9,
                            moves: ['Absorb', 'Growth', 'Water Sport'],
                            nature: Nature.Bashful,
                            ability: 'Natural Cure',
                        },
                        {
                            name: 'Cherubi',
                            level: 11,
                            moves: ['Tackle', 'Growth', 'Leech Seed'],
                            nature: Nature.Docile,
                            ability: 'Chlorophyll',
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
                            level: 10,
                            moves: ['Tackle', 'String Shot', 'Poison Sting'],
                            nature: Nature.Quirky,
                            ability: 'Shield Dust',
                        },
                        {
                            name: 'Kricketot',
                            level: 11,
                            moves: ['Growl', 'Bide'],
                            nature: Nature.Modest,
                            ability: 'Shed Skin',
                        },
                    ],
                    x: 52.9,
                    y: 59.4,
                },
                {
                    trainerClass: 'Twins',
                    name: 'Taylor',
                    team: [
                        {
                            name: 'Budew',
                            level: 9,
                            moves: ['Absorb', 'Growth', 'Water Sport'],
                            nature: Nature.Bashful,
                            ability: 'Natural Cure',
                        },
                        {
                            name: 'Cherubi',
                            level: 11,
                            moves: ['Tackle', 'Growth', 'Leech Seed'],
                            nature: Nature.Docile,
                            ability: 'Chlorophyll',
                        },
                    ],
                    x: 52.9,
                    y: 59.4,
                },
            ],
        },
    ],
};

export default ROUTE_204;
