import {
    canalaveGym1f,
    canalaveGym2f,
    canalaveGym3f,
    canalaveGym4f,
} from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_GYM: Location = {
    name: 'Canalave Gym',
    subareas: [
        {
            name: '1F',
            map: canalaveGym1f,
            battles: [
                {
                    trainerClass: 'Black Belt',
                    name: 'Ricky',
                    team: [
                        {
                            slug: 'steelix',
                            ability: 1,
                            gender: 'male',
                            ivs: 4,
                            level: 38,
                            nature: Nature.Rash,
                            moves: ['iron-tail', 'taunt', 'torment', 'screech'],
                        },
                    ],
                    x: 14.4,
                    y: 43,
                },
                {
                    isOptional: true,
                    trainerClass: 'Worker',
                    name: 'Gary',
                    team: [
                        {
                            slug: 'magnemite',
                            ability: 1,
                            ivs: 1,
                            level: 37,
                            nature: Nature.Calm,
                            moves: ['spark', 'magnet-bomb'],
                        },
                    ],
                    x: 66.1,
                    y: 38.8,
                },
                {
                    trainerClass: 'Ace Trainer M',
                    name: 'Cesar',
                    team: [
                        {
                            slug: 'scizor',
                            ability: 1,
                            gender: 'male',
                            ivs: 7,
                            level: 40,
                            nature: Nature.Lax,
                            moves: [
                                'metal-claw',
                                'x-scissor',
                                'slash',
                                'pursuit',
                            ],
                        },
                    ],
                    x: 86.1,
                    y: 81.2,
                },
            ],
        },
        {
            name: '2F',
            map: canalaveGym2f,
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Worker',
                    name: 'Jackson',
                    team: [
                        {
                            slug: 'magnemite',
                            ability: 1,
                            ivs: 1,
                            level: 34,
                            nature: Nature.Mild,
                            moves: ['magnet-bomb', 'spark', 'thunder-wave'],
                        },
                        {
                            slug: 'magnemite',
                            ability: 1,
                            ivs: 1,
                            level: 34,
                            nature: Nature.Mild,
                            moves: ['magnet-bomb', 'spark', 'thunder-wave'],
                        },
                        {
                            slug: 'magnemite',
                            ability: 1,
                            ivs: 1,
                            level: 34,
                            nature: Nature.Mild,
                            moves: ['magnet-bomb', 'spark', 'thunder-wave'],
                        },
                    ],
                    x: 44.9,
                    y: 4.1,
                },
                {
                    trainerClass: 'Ace Trainer F',
                    name: 'Breanna',
                    team: [
                        {
                            slug: 'bronzor',
                            ability: 1,
                            ivs: 7,
                            level: 35,
                            nature: Nature.Modest,
                            moves: ['gyro-ball', 'extrasensory', 'confuse-ray'],
                        },
                        {
                            slug: 'bronzor',
                            ability: 1,
                            ivs: 7,
                            level: 36,
                            nature: Nature.Timid,
                            moves: ['gyro-ball', 'extrasensory', 'confuse-ray'],
                        },
                        {
                            slug: 'bronzor',
                            ability: 1,
                            ivs: 7,
                            level: 38,
                            nature: Nature.Sassy,
                            moves: ['gyro-ball', 'extrasensory', 'confuse-ray'],
                        },
                    ],
                    x: 88.2,
                    y: 11.1,
                },
            ],
        },
        {
            name: '3F',
            map: canalaveGym3f,
            battles: [
                {
                    trainerClass: 'Worker',
                    name: 'Gerardo',
                    team: [
                        {
                            slug: 'magnemite',
                            ability: 1,
                            ivs: 1,
                            level: 35,
                            nature: Nature.Sassy,
                            moves: ['supersonic', 'magnet-bomb', 'spark'],
                        },
                        {
                            slug: 'magnemite',
                            ability: 1,
                            ivs: 1,
                            level: 35,
                            nature: Nature.Sassy,
                            moves: ['supersonic', 'magnet-bomb', 'spark'],
                        },
                    ],
                    x: 25.1,
                    y: 3.8,
                },
                {
                    trainerClass: 'Black Belt',
                    name: 'David',
                    team: [
                        {
                            slug: 'steelix',
                            ability: 1,
                            gender: 'male',
                            ivs: 4,
                            level: 35,
                            nature: Nature.Rash,
                            moves: [
                                'iron-tail',
                                'rock-slide',
                                'sandstorm',
                                'screech',
                            ],
                        },
                        {
                            slug: 'steelix',
                            ability: 1,
                            gender: 'male',
                            ivs: 4,
                            level: 37,
                            nature: Nature.Bashful,
                            moves: [
                                'iron-tail',
                                'rock-slide',
                                'sandstorm',
                                'screech',
                            ],
                        },
                    ],
                    x: 78.2,
                    y: 3.8,
                },
            ],
        },
        {
            name: '4F',
            map: canalaveGym4f,
            battles: [
                {
                    isBoss: true,
                    trainerClass: 'Leader',
                    name: 'Byron',
                    team: [
                        {
                            slug: 'magneton',
                            ability: 1,
                            ivs: 24,
                            level: 37,
                            nature: Nature.Relaxed,
                            moves: [
                                'flash-cannon',
                                'thunderbolt',
                                'tri-attack',
                                'metal-sound',
                            ],
                        },
                        {
                            slug: 'steelix',
                            ability: 1,
                            gender: 'male',
                            ivs: 24,
                            level: 38,
                            nature: Nature.Serious,
                            moves: [
                                'flash-cannon',
                                'ice-fang',
                                'earthquake',
                                'sandstorm',
                            ],
                        },
                        {
                            slug: 'bastiodon',
                            ability: 1,
                            gender: 'male',
                            ivs: 24,
                            level: 41,
                            nature: Nature.Lax,
                            moves: [
                                'metal-burst',
                                'stone-edge',
                                'iron-defense',
                                'taunt',
                            ],
                            heldItem: 'sitrus-berry',
                        },
                    ],
                    items: [
                        { count: 1, name: 'Hyper Potion' },
                        { count: 1, name: 'Full Restore' },
                    ],
                    x: 51.8,
                    y: 4.1,
                },
            ],
        },
    ],
};

export default CANALAVE_GYM;
