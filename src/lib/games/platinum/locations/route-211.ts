import { route211East, route211West } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            encountersKey: 'sinnoh-route-211-west-towards-eterna-city',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Ninja Boy',
                    name: 'Zach',
                    team: [
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 14,
                            nature: Nature.Serious,
                            moves: [
                                'Leech Life',
                                'Supersonic',
                                'Astonish',
                                'Bite',
                            ],
                        },
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 14,
                            nature: Nature.Serious,
                            moves: [
                                'Leech Life',
                                'Supersonic',
                                'Astonish',
                                'Bite',
                            ],
                        },
                        {
                            name: 'Zubat',
                            ability: 1,
                            level: 14,
                            nature: Nature.Serious,
                            moves: [
                                'Leech Life',
                                'Supersonic',
                                'Astonish',
                                'Bite',
                            ],
                        },
                    ],
                    x: 29.4,
                    y: 36,
                },
                {
                    isOptional: true,
                    trainerClass: 'Hiker',
                    name: 'Louis',
                    team: [
                        {
                            name: 'Geodude',
                            ability: 1,
                            level: 14,
                            nature: Nature.Brave,
                            moves: [
                                'Defense Curl',
                                'Mud Sport',
                                'Rock Polish',
                                'Rock Throw',
                            ],
                        },
                        {
                            name: 'Onix',
                            ability: 1,
                            level: 18,
                            nature: Nature.Relaxed,
                            moves: [
                                'Screech',
                                'Rock Throw',
                                'Rage',
                                'Rock Tomb',
                            ],
                        },
                    ],
                    x: 76.1,
                    y: 49.6,
                },
                {
                    isOptional: true,
                    trainerClass: 'Bird Keeper',
                    name: 'Alexandra',
                    team: [
                        {
                            name: 'Starly',
                            ability: 1,
                            level: 17,
                            nature: Nature.Serious,
                            moves: [
                                'Quick Attack',
                                'Wing Attack',
                                'Double Team',
                                'Endeavor',
                            ],
                        },
                        {
                            name: 'Hoothoot',
                            ability: 1,
                            level: 17,
                            nature: Nature.Naive,
                            moves: ['Hypnosis', 'Peck', 'Uproar', 'Reflect'],
                        },
                    ],
                    x: 46.8,
                    y: 40.6,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            encountersKey: 'sinnoh-route-211-east-towards-celestic-town',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Bird Keeper',
                    name: 'Katherine',
                    team: [
                        {
                            name: 'Noctowl',
                            ability: 1,
                            level: 34,
                            nature: Nature.Quirky,
                            moves: [
                                'Reflect',
                                'Confusion',
                                'Take Down',
                                'Air Slash',
                            ],
                            ivs: 6,
                        },
                    ],
                    x: 52,
                    y: 25,
                },
                {
                    isOptional: true,
                    trainerClass: 'Ruin Maniac',
                    name: 'Harry',
                    team: [
                        {
                            name: 'Bronzor',
                            ability: 1,
                            level: 28,
                            nature: Nature.Serious,
                            moves: [
                                'Imprison',
                                'Confuse Ray',
                                'Extrasensory',
                                'Iron Defense',
                            ],
                        },
                        {
                            name: 'Bronzor',
                            ability: 1,
                            level: 30,
                            nature: Nature.Modest,
                            moves: [
                                'Confuse Ray',
                                'Extrasensory',
                                'Iron Defense',
                                'Safeguard',
                            ],
                        },
                        {
                            name: 'Bronzor',
                            ability: 1,
                            level: 32,
                            nature: Nature.Impish,
                            moves: [
                                'Confuse Ray',
                                'Extrasensory',
                                'Iron Defense',
                                'Safeguard',
                            ],
                        },
                    ],
                    x: 40,
                    y: 40,
                },
                {
                    isOptional: true,
                    trainerClass: 'Ninja Boy',
                    name: 'Nick',
                    team: [
                        {
                            name: 'Skorupi',
                            ability: 1,
                            level: 32,
                            nature: Nature.Lax,
                            moves: [
                                'Pin Missile',
                                'Acupressure',
                                'Scary Face',
                                'Toxic Spikes',
                            ],
                        },
                        {
                            name: 'Croagunk',
                            ability: 1,
                            level: 30,
                            nature: Nature.Lax,
                            moves: [
                                'Feint Attack',
                                'Revenge',
                                'Swagger',
                                'Mud Bomb',
                            ],
                        },
                    ],
                    x: 25,
                    y: 25,
                },
                {
                    isOptional: true,
                    trainerClass: 'Black Belt',
                    name: 'Sean',
                    team: [
                        {
                            name: 'Croagunk',
                            ability: 1,
                            level: 31,
                            nature: Nature.Serious,
                            moves: [
                                'Revenge',
                                'Swagger',
                                'Mud Bomb',
                                'Sucker Punch',
                            ],
                            ivs: 3,
                        },
                        {
                            name: 'Meditite',
                            ability: 1,
                            level: 31,
                            nature: Nature.Quirky,
                            moves: [
                                'Mind Reader',
                                'Feint',
                                'Calm Mind',
                                'Force Palm',
                            ],
                            ivs: 3,
                        },
                        {
                            name: 'Machoke',
                            ability: 1,
                            level: 31,
                            nature: Nature.Quirky,
                            moves: [
                                'Foresight',
                                'Seismic Toss',
                                'Revenge',
                                'Vital Throw',
                            ],
                            ivs: 3,
                        },
                    ],
                    x: 50,
                    y: 90,
                },
            ],
        },
    ],
};

export default ROUTE_211;
