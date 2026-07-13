import {
    oreburghGate,
    oreburghGym,
    route202,
    route203,
    route204South,
} from '@/lib/assets/platinum/locations';
import { Nature } from '@/lib/static/enums';
import { Game } from '@/lib/static/types';

const PLATINUM: Game = {
    name: 'Platinum',
    logo: '/logos/platinum.png',
    generation: 4,
    starters: ['Turtwig', 'Chimchar', 'Piplup'],
    accentColor: '#ffd500',
    splits: [
        {
            name: 'Roark',
            locations: [
                {
                    name: 'Twinleaf Town',
                },
                {
                    name: 'Route 201',
                },
                {
                    name: 'Sandgem Town',
                },
                {
                    name: 'Route 202',
                    map: route202,
                    battles: [
                        {
                            name: 'Tristan',
                            team: [
                                {
                                    ability: 'Keen Eye',
                                    level: 5,
                                    moves: ['Tackle', 'Growl', 'Quick Attack'],
                                    name: 'Starly',
                                    nature: Nature.Careful,
                                },
                            ],
                            trainerClass: 'Youngster',
                            x: 22.13,
                            y: 47,
                        },
                        {
                            name: 'Natalie',
                            team: [
                                {
                                    ability: 'Simple',
                                    level: 5,
                                    moves: ['Tackle', 'Growl'],
                                    name: 'Bidoof',
                                    nature: Nature.Quiet,
                                },
                            ],
                            trainerClass: 'Lass',
                            x: 61.9,
                            y: 60.4,
                        },
                        {
                            name: 'Logan',
                            team: [
                                {
                                    ability: 'Shed Skin',
                                    level: 5,
                                    moves: [
                                        'Tackle',
                                        'Bug Bite',
                                        'Hidden Power',
                                    ],
                                    name: 'Burmy',
                                    nature: Nature.Impish,
                                },
                            ],
                            trainerClass: 'Youngster',
                            x: 72.3,
                            y: 21.9,
                        },
                    ],
                },
                {
                    name: 'Jubilife City',
                },
                {
                    name: 'Route 204 South',
                    map: route204South,
                    battles: [
                        {
                            name: 'Sarah',
                            team: [
                                {
                                    ability: 'Rivalry',
                                    level: 7,
                                    moves: ['Tackle', 'Leer'],
                                    name: 'Shinx',
                                    nature: Nature.Hardy,
                                },
                            ],
                            trainerClass: 'Lass',
                            x: 38.9,
                            y: 66.5,
                        },
                        {
                            isOptional: true,
                            name: 'Tyler',
                            team: [
                                {
                                    ability: 'Swift Swim',
                                    level: 8,
                                    moves: ['Splash', 'Tackle', 'Flail'],
                                    name: 'Magikarp',
                                    nature: Nature.Sassy,
                                },
                            ],
                            trainerClass: 'Youngster',
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
                                    ability: 'Natural Cure',
                                    nature: Nature.Docile,
                                },
                            ],
                            x: 35.7,
                            y: 27.5,
                        },
                    ],
                },
                {
                    name: 'Ravaged Path',
                },
                {
                    name: 'Route 203',
                    map: route203,
                    battles: [
                        {
                            isOptional: true,
                            trainerClass: 'Youngster',
                            name: 'Michael',
                            team: [
                                {
                                    name: 'Kricketot',
                                    level: 7,
                                    moves: ['Growl', 'Bide'],
                                    ability: 'Shed Skin',
                                    nature: Nature.Mild,
                                },
                                {
                                    name: 'Zubat',
                                    level: 6,
                                    moves: ['Leech Life', 'Supersonic'],
                                    ability: 'Inner Focus',
                                    nature: Nature.Careful,
                                },
                            ],
                            x: 23,
                            y: 51,
                        },
                        {
                            isOptional: true,
                            trainerClass: 'Youngster',
                            name: 'Dallas',
                            team: [
                                {
                                    name: 'Shinx',
                                    level: 8,
                                    moves: ['Tackle', 'Leer'],
                                    nature: Nature.Calm,
                                    ability: 'Rivalry',
                                },
                            ],
                            x: 52.5,
                            y: 68,
                        },
                        {
                            isOptional: true,
                            trainerClass: 'Youngster',
                            name: 'Sebastian',
                            team: [
                                {
                                    name: 'Machop',
                                    level: 8,
                                    moves: ['Low Kick', 'Leer', 'Focus Energy'],
                                    nature: Nature.Relaxed,
                                    ability: 'Guts',
                                },
                            ],
                            x: 52.5,
                            y: 68,
                        },
                    ],
                },
                {
                    name: 'Oreburgh Gate',
                    map: oreburghGate,
                },
                {
                    name: 'Oreburgh City',
                },
                {
                    name: 'Oreburgh Gym',
                    map: oreburghGym,
                },
            ],
        },
        { name: 'Gardenia', locations: [] },
        { name: 'Fantina', locations: [] },
        { name: 'Maylene', locations: [] },
        { name: 'Wake', locations: [] },
        { name: 'Byron', locations: [] },
        { name: 'Candice', locations: [] },
        { name: 'Distortion World', locations: [] },
        { name: 'Volkner', locations: [] },
        { name: 'Cynthia', locations: [] },
    ],
};

export default PLATINUM;
