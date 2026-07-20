import { route205North, route205South } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_205: Location = {
    name: 'Route 205',
    subareas: [
        {
            name: 'South',
            map: route205South,
            encountersKey: 'sinnoh-route-205-south-towards-floaroma-town',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Camper',
                    name: 'Jacob',
                    team: [
                        {
                            name: 'Ponyta',
                            ability: 1,
                            level: 14,
                            nature: Nature.Bashful,
                            moves: ['Ember', 'Tackle'],
                        },
                    ],
                    x: 73.2,
                    y: 76.6,
                },
                {
                    isOptional: true,
                    trainerClass: 'Hiker',
                    name: 'Daniel',
                    team: [
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 10,
                            nature: Nature.Bashful,
                        },
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 11,
                            nature: Nature.Impish,
                        },
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 12,
                            nature: Nature.Careful,
                        },
                    ],
                    x: 57.8,
                    y: 66.2,
                },
                {
                    isOptional: true,
                    trainerClass: 'Aroma Lady',
                    name: 'Elizabeth',
                    team: [
                        {
                            name: 'Roselia',
                            ability: 1,
                            level: 14,
                            nature: Nature.Rash,
                            moves: ['Growth', 'Mega Drain'],
                        },
                    ],
                    x: 73.2,
                    y: 62.8,
                },
                {
                    isOptional: true,
                    trainerClass: 'Picnicker',
                    name: 'Siena',
                    team: [
                        {
                            name: 'Bidoof',
                            ability: 1,
                            level: 12,
                            nature: Nature.Adamant,
                        },
                        {
                            name: 'Pachirisu',
                            ability: 1,
                            level: 12,
                            nature: Nature.Naughty,
                        },
                    ],
                    x: 76.4,
                    y: 48.3,
                },
                {
                    isOptional: true,
                    trainerClass: 'Camper',
                    name: 'Zackary',
                    team: [
                        {
                            name: 'Aipom',
                            ability: 1,
                            level: 14,
                            nature: Nature.Quirky,
                        },
                    ],
                    x: 54.6,
                    y: 53.4,
                },
                {
                    isOptional: true,
                    trainerClass: 'Hiker',
                    name: 'Nicholas',
                    team: [
                        {
                            name: 'Onix',
                            ability: 1,
                            level: 14,
                            nature: Nature.Careful,
                        },
                    ],
                    x: 51.6,
                    y: 36.9,
                },
                {
                    isOptional: true,
                    trainerClass: 'Battle Girl',
                    name: 'Kelsey',
                    team: [
                        {
                            name: 'Machop',
                            ability: 1,
                            level: 15,
                            nature: Nature.Serious,
                            ivs: 2,
                        },
                    ],
                    x: 47.9,
                    y: 29.6,
                },
                {
                    isOptional: true,
                    trainerClass: 'Picnicker',
                    name: 'Karina',
                    team: [
                        {
                            name: 'Piplup',
                            ability: 1,
                            level: 14,
                            nature: Nature.Calm,
                            moves: ['Bubble', 'Peck'],
                        },
                    ],
                    x: 51.4,
                    y: 21.4,
                },
            ],
        },
        {
            name: 'North',
            map: route205North,
            encountersKey: 'sinnoh-route-205-east-towards-eterna-city',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Fisherman',
                    name: 'Joseph',
                    team: [
                        {
                            name: 'Goldeen',
                            ability: 1,
                            level: 17,
                            nature: Nature.Quiet,
                        },
                    ],
                    x: 45.8,
                    y: 61.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Fisherman',
                    name: 'Andrew',
                    team: [
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 8,
                            nature: Nature.Adamant,
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 10,
                            nature: Nature.Lax,
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 12,
                            nature: Nature.Docile,
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 12,
                            nature: Nature.Docile,
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 14,
                            nature: Nature.Serious,
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 16,
                            nature: Nature.Bashful,
                        },
                    ],
                    x: 58.4,
                    y: 58.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Fisherman',
                    name: 'Zachary',
                    team: [
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 14,
                            nature: Nature.Bashful,
                        },
                        {
                            name: 'Goldeen',
                            ability: 1,
                            level: 16,
                            nature: Nature.Quiet,
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 14,
                            nature: Nature.Bashful,
                        },
                    ],
                    x: 67.7,
                    y: 70.8,
                },
            ],
        },
    ],
};

export default ROUTE_205;
