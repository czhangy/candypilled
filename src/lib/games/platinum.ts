import {
    oreburghGate,
    oreburghGym,
    route201,
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
    accentColor: '#FFD500',
    splits: [
        {
            name: 'Roark',
            locations: [
                {
                    name: 'Twinleaf Town',
                    encounters: [
                        {
                            species: 'psyduck',
                            method: 'surf',
                            minLevel: 20,
                            maxLevel: 30,
                            chance: 60,
                        },
                        {
                            species: 'psyduck',
                            method: 'surf',
                            minLevel: 20,
                            maxLevel: 30,
                            chance: 30,
                        },
                        {
                            species: 'golduck',
                            method: 'surf',
                            minLevel: 20,
                            maxLevel: 40,
                            chance: 5,
                        },
                        {
                            species: 'golduck',
                            method: 'surf',
                            minLevel: 20,
                            maxLevel: 40,
                            chance: 4,
                        },
                        {
                            species: 'golduck',
                            method: 'surf',
                            minLevel: 20,
                            maxLevel: 40,
                            chance: 1,
                        },
                        {
                            species: 'goldeen',
                            method: 'good-rod',
                            minLevel: 15,
                            maxLevel: 20,
                            chance: 40,
                        },
                        {
                            species: 'goldeen',
                            method: 'good-rod',
                            minLevel: 25,
                            maxLevel: 35,
                            chance: 4,
                        },
                        {
                            species: 'goldeen',
                            method: 'good-rod',
                            minLevel: 25,
                            maxLevel: 35,
                            chance: 1,
                        },
                        {
                            species: 'magikarp',
                            method: 'old-rod',
                            minLevel: 4,
                            maxLevel: 6,
                            chance: 60,
                        },
                        {
                            species: 'magikarp',
                            method: 'old-rod',
                            minLevel: 3,
                            maxLevel: 7,
                            chance: 30,
                        },
                        {
                            species: 'magikarp',
                            method: 'old-rod',
                            minLevel: 5,
                            maxLevel: 10,
                            chance: 5,
                        },
                        {
                            species: 'magikarp',
                            method: 'old-rod',
                            minLevel: 5,
                            maxLevel: 10,
                            chance: 4,
                        },
                        {
                            species: 'magikarp',
                            method: 'old-rod',
                            minLevel: 5,
                            maxLevel: 15,
                            chance: 1,
                        },
                        {
                            species: 'magikarp',
                            method: 'good-rod',
                            minLevel: 15,
                            maxLevel: 20,
                            chance: 40,
                        },
                        {
                            species: 'magikarp',
                            method: 'good-rod',
                            minLevel: 10,
                            maxLevel: 25,
                            chance: 15,
                        },
                    ],
                },
                {
                    name: 'Route 201',
                    map: route201,
                    battles: [
                        {
                            isMiniboss: true,
                            trainerClass: 'PKMN Trainer',
                            name: 'Barry 1',
                            teamsByStarter: {
                                Turtwig: [
                                    {
                                        name: 'Chimchar',
                                        level: 5,
                                        moves: ['Scratch', 'Leer'],
                                        nature: Nature.Calm,
                                        ability: 'Blaze',
                                    },
                                ],
                                Chimchar: [
                                    {
                                        name: 'Piplup',
                                        level: 5,
                                        moves: ['Pound', 'Growl'],
                                        nature: Nature.Bashful,
                                        ability: 'Torrent',
                                    },
                                ],
                                Piplup: [
                                    {
                                        name: 'Turtwig',
                                        level: 5,
                                        moves: ['Tackle', 'Withdraw'],
                                        nature: Nature.Docile,
                                        ability: 'Overgrow',
                                    },
                                ],
                            },
                            x: 27.5,
                            y: 64,
                        },
                    ],
                },
                {
                    name: 'Sandgem Town',
                },
                {
                    name: 'Route 202',
                    map: route202,
                    battles: [
                        {
                            trainerClass: 'Youngster',
                            name: 'Tristan',
                            team: [
                                {
                                    name: 'Starly',
                                    level: 5,
                                    moves: ['Tackle', 'Growl', 'Quick Attack'],
                                    nature: Nature.Careful,
                                    ability: 'Keen Eye',
                                },
                            ],
                            x: 22.13,
                            y: 47,
                        },
                        {
                            trainerClass: 'Lass',
                            name: 'Natalie',
                            team: [
                                {
                                    name: 'Bidoof',
                                    level: 5,
                                    moves: ['Tackle', 'Growl'],
                                    nature: Nature.Quiet,
                                    ability: 'Simple',
                                },
                            ],
                            x: 61.9,
                            y: 60.4,
                        },
                        {
                            trainerClass: 'Youngster',
                            name: 'Logan',
                            team: [
                                {
                                    name: 'Burmy',
                                    level: 5,
                                    moves: [
                                        'Tackle',
                                        'Bug Bite',
                                        'Hidden Power',
                                    ],
                                    nature: Nature.Impish,
                                    ability: 'Shed Skin',
                                },
                            ],
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
                    name: 'Ravaged Path',
                },
                {
                    name: 'Route 203',
                    map: route203,
                    battles: [
                        {
                            isMiniboss: true,
                            trainerClass: 'PKMN Trainer',
                            name: 'Barry 2',
                            teamsByStarter: {
                                Turtwig: [
                                    {
                                        name: 'Starly',
                                        level: 7,
                                        moves: ['Quick Attack', 'Growl'],
                                        nature: Nature.Naughty,
                                        ability: 'Keen Eye',
                                        ivs: 3,
                                    },
                                    {
                                        name: 'Chimchar',
                                        level: 9,
                                        moves: ['Scratch', 'Leer'],
                                        nature: Nature.Docile,
                                        ability: 'Blaze',
                                        ivs: 3,
                                    },
                                ],
                                Chimchar: [
                                    {
                                        name: 'Starly',
                                        level: 7,
                                        moves: ['Quick Attack', 'Growl'],
                                        nature: Nature.Naive,
                                        ability: 'Keen Eye',
                                        ivs: 3,
                                    },
                                    {
                                        name: 'Piplup',
                                        level: 9,
                                        moves: ['Pound', 'Growl'],
                                        nature: Nature.Naughty,
                                        ability: 'Torrent',
                                        ivs: 3,
                                    },
                                ],
                                Piplup: [
                                    {
                                        name: 'Starly',
                                        level: 7,
                                        moves: ['Quick Attack', 'Growl'],
                                        nature: Nature.Timid,
                                        ability: 'Keen Eye',
                                        ivs: 3,
                                    },
                                    {
                                        name: 'Turtwig',
                                        level: 9,
                                        moves: ['Tackle', 'Withdraw'],
                                        nature: Nature.Brave,
                                        ability: 'Overgrow',
                                        ivs: 3,
                                    },
                                ],
                            },
                            x: 11.4,
                            y: 78.2,
                        },
                        {
                            isOptional: true,
                            trainerClass: 'Youngster',
                            name: 'Michael',
                            team: [
                                {
                                    name: 'Kricketot',
                                    level: 7,
                                    moves: ['Growl', 'Bide'],
                                    nature: Nature.Mild,
                                    ability: 'Shed Skin',
                                },
                                {
                                    name: 'Zubat',
                                    level: 6,
                                    moves: ['Leech Life', 'Supersonic'],
                                    nature: Nature.Careful,
                                    ability: 'Inner Focus',
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
                            x: 72.3,
                            y: 65.5,
                        },
                        {
                            isOptional: true,
                            trainerClass: 'Lass',
                            name: 'Kaitlin',
                            team: [
                                {
                                    name: 'Bidoof',
                                    level: 4,
                                    moves: ['Tackle'],
                                    nature: Nature.Rash,
                                    ability: 'Simple',
                                },
                                {
                                    name: 'Budew',
                                    level: 4,
                                    moves: ['Absorb', 'Growth'],
                                    nature: Nature.Mild,
                                    ability: 'Natural Cure',
                                },
                                {
                                    name: 'Starly',
                                    level: 4,
                                    moves: ['Tackle', 'Growl'],
                                    nature: Nature.Quirky,
                                    ability: 'Keen Eye',
                                },
                                {
                                    name: 'Abra',
                                    level: 4,
                                    moves: ['Teleport'],
                                    nature: Nature.Docile,
                                    ability: 'Synchronize',
                                },
                            ],
                            x: 85.2,
                            y: 62,
                        },
                        {
                            isOptional: true,
                            trainerClass: 'Lass',
                            name: 'Madeline',
                            team: [
                                {
                                    name: 'Psyduck',
                                    level: 8,
                                    moves: [
                                        'Water Sport',
                                        'Scratch',
                                        'Tail Whip',
                                    ],
                                    nature: Nature.Relaxed,
                                    ability: 'Damp',
                                },
                            ],
                            x: 82,
                            y: 35,
                        },
                    ],
                },
                {
                    name: 'Oreburgh Gate',
                    map: oreburghGate,
                    battles: [
                        {
                            isOptional: true,
                            trainerClass: 'Picnicker',
                            name: 'Diana',
                            team: [
                                {
                                    name: 'Bidoof',
                                    level: 9,
                                    moves: ['Tackle', 'Growl', 'Defense Curl'],
                                    nature: Nature.Modest,
                                    ability: 'Simple',
                                },
                            ],
                            x: 82,
                            y: 35,
                        },
                    ],
                },
                {
                    name: 'Oreburgh City',
                },
                {
                    name: 'Oreburgh Gym',
                    map: oreburghGym,
                    battles: [
                        {
                            isBoss: true,
                            trainerClass: 'Gym Leader',
                            name: 'Roark',
                            team: [
                                {
                                    name: 'Geodude',
                                    level: 12,
                                    moves: ['Stealth Rock', 'Rock Throw'],
                                    nature: Nature.Lax,
                                    ability: 'Rock Head',
                                    ivs: 6,
                                },
                                {
                                    name: 'Onix',
                                    level: 12,
                                    moves: [
                                        'Stealth Rock',
                                        'Rock Throw',
                                        'Screech',
                                    ],
                                    nature: Nature.Bold,
                                    ability: 'Rock Head',
                                    ivs: 6,
                                },
                                {
                                    name: 'Cranidos',
                                    level: 14,
                                    moves: ['Headbutt', 'Pursuit', 'Leer'],
                                    nature: Nature.Jolly,
                                    ability: 'Mold Breaker',
                                    ivs: 6,
                                },
                            ],
                            items: { count: 2, name: 'Potion' },
                            x: 46.6,
                            y: 22.8,
                        },
                    ],
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
