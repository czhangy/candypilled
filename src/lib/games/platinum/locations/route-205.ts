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
                            moves: [
                                'Tackle',
                                'Defense Curl',
                                'Mud Sport',
                                'Rock Polish',
                            ],
                        },
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 11,
                            nature: Nature.Impish,
                            moves: [
                                'Defense Curl',
                                'Mud Sport',
                                'Rock Polish',
                                'Rock Throw',
                            ],
                        },
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 12,
                            nature: Nature.Careful,
                            moves: [
                                'Defense Curl',
                                'Mud Sport',
                                'Rock Polish',
                                'Rock Throw',
                            ],
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
                            moves: ['Tackle', 'Growl', 'Defense Curl'],
                        },
                        {
                            name: 'Pachirisu',
                            ability: 1,
                            level: 12,
                            nature: Nature.Naughty,
                            moves: ['Growl', 'Bide', 'Quick Attack', 'Charm'],
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
                            moves: [
                                'Tail Whip',
                                'Sand Attack',
                                'Astonish',
                                'Baton Pass',
                            ],
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
                            moves: ['Bind', 'Screech', 'Rock Throw', 'Rage'],
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
                            moves: [
                                'Leer',
                                'Focus Energy',
                                'Karate Chop',
                                'Foresight',
                            ],
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
                            moves: [
                                'Water Sport',
                                'Supersonic',
                                'Horn Attack',
                                'Water Pulse',
                            ],
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
                            moves: ['Splash'],
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 10,
                            nature: Nature.Lax,
                            moves: ['Splash'],
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 12,
                            nature: Nature.Docile,
                            moves: ['Splash'],
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 12,
                            nature: Nature.Docile,
                            moves: ['Splash'],
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 14,
                            nature: Nature.Serious,
                            moves: ['Splash'],
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 16,
                            nature: Nature.Bashful,
                            moves: ['Splash', 'Tackle'],
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
                            moves: ['Splash'],
                        },
                        {
                            name: 'Goldeen',
                            ability: 1,
                            level: 16,
                            nature: Nature.Quiet,
                            moves: [
                                'Tail Whip',
                                'Water Sport',
                                'Supersonic',
                                'Horn Attack',
                            ],
                        },
                        {
                            name: 'Magikarp',
                            ability: 1,
                            level: 14,
                            nature: Nature.Bashful,
                            moves: ['Splash'],
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
