import { Nature } from '@/lib/static/enums';
import { BattleData } from '@/lib/static/types';

export const BATTLES: Record<string, BattleData> = {
    'pkmn-trainer-barry-barry-1': {
        trainerClass: 'pkmn-trainer-barry',
        name: 'Barry 1',
        teams: [
            {
                condition: { type: 'starter', starter: 'turtwig' },
                team: [
                    {
                        slug: 'chimchar',
                        ability: 'iron-fist',
                        gender: 'male',
                        level: 5,
                        moves: ['scratch', 'leer'],
                        nature: Nature.Timid,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'chimchar' },
                team: [
                    {
                        slug: 'piplup',
                        ability: 'torrent',
                        gender: 'male',
                        level: 5,
                        moves: ['pound', 'growl'],
                        nature: Nature.Naive,
                        ivs: 30,
                    },
                ],
            },
            {
                condition: { type: 'starter', starter: 'piplup' },
                team: [
                    {
                        slug: 'turtwig',
                        ability: 'overgrow',
                        gender: 'male',
                        level: 5,
                        moves: ['tackle', 'withdraw'],
                        nature: Nature.Gentle,
                        ivs: 30,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-and-galactic-grunt-lake-verity': {
        trainerClass: 'galactic-grunt-m',
        name: '1',
        teams: [
            {
                team: [
                    {
                        slug: 'dustox',
                        ability: 'shield-dust',
                        gender: 'male',
                        level: 50,
                        moves: [
                            'hurricane',
                            'whirlwind',
                            'protect',
                            'tailwind',
                        ],
                        nature: Nature.Lax,
                        ivs: 12,
                    },
                    {
                        slug: 'beedrill',
                        ability: 'adaptability',
                        gender: 'male',
                        level: 50,
                        moves: ['megahorn', 'outrage', 'endeavor', 'agility'],
                        nature: Nature.Jolly,
                        ivs: 12,
                    },
                ],
            },
        ],
        secondTrainer: {
            name: '1',
            trainerClass: 'galactic-grunt-f',
            teams: [
                {
                    team: [
                        {
                            slug: 'beautifly',
                            ability: 'swarm',
                            gender: 'female',
                            level: 50,
                            moves: [
                                'hurricane',
                                'whirlwind',
                                'rage',
                                'air-slash',
                            ],
                            nature: Nature.Quirky,
                            ivs: 12,
                        },
                        {
                            slug: 'butterfree',
                            ability: 'tinted-lens',
                            gender: 'female',
                            level: 50,
                            moves: [
                                'hurricane',
                                'teleport',
                                'tailwind',
                                'whirlwind',
                            ],
                            nature: Nature.Lax,
                            ivs: 12,
                        },
                    ],
                },
            ],
        },
    },
    'galactic-grunt-m-lake-verity-2': {
        trainerClass: 'galactic-grunt-m',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'nidorino',
                        ability: 'poison-point',
                        gender: 'male',
                        level: 49,
                        moves: [
                            'head-smash',
                            'captivate',
                            'poison-tail',
                            'sucker-punch',
                        ],
                        nature: Nature.Quiet,
                        ivs: 12,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'male',
                        level: 49,
                        moves: [
                            'nasty-plot',
                            'zen-headbutt',
                            'haze',
                            'air-slash',
                        ],
                        nature: Nature.Impish,
                        ivs: 12,
                    },
                    {
                        slug: 'wormadam-plant',
                        ability: 'battle-armor',
                        gender: 'female',
                        level: 49,
                        moves: ['attract', 'psychic', 'flail', 'captivate'],
                        nature: Nature.Hardy,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'galactic-grunt-f-lake-verity-2': {
        trainerClass: 'galactic-grunt-f',
        name: '2',
        teams: [
            {
                team: [
                    {
                        slug: 'nidorina',
                        ability: 'poison-point',
                        gender: 'female',
                        level: 49,
                        moves: [
                            'super-fang',
                            'captivate',
                            'poison-tail',
                            'crunch',
                        ],
                        nature: Nature.Impish,
                        ivs: 12,
                    },
                    {
                        slug: 'golbat',
                        ability: 'inner-focus',
                        gender: 'female',
                        level: 49,
                        moves: [
                            'nasty-plot',
                            'zen-headbutt',
                            'haze',
                            'air-slash',
                        ],
                        nature: Nature.Bold,
                        ivs: 12,
                    },
                    {
                        slug: 'mothim',
                        ability: 'tinted-lens',
                        gender: 'male',
                        level: 49,
                        moves: ['camouflage', 'flail', 'psychic', 'air-slash'],
                        nature: Nature.Bashful,
                        ivs: 12,
                    },
                ],
            },
        ],
    },
    'commander-mars-mars-lake-verity': {
        trainerClass: 'commander-mars',
        name: 'Mars',
        teams: [
            {
                team: [
                    {
                        slug: 'crobat',
                        ability: 'inner-focus',
                        gender: 'female',
                        heldItem: 'bright-powder',
                        level: 52,
                        moves: [
                            'brave-bird',
                            'hypnosis',
                            'double-team',
                            'giga-drain',
                        ],
                        nature: Nature.Modest,
                        ivs: 31,
                    },
                    {
                        slug: 'yanmega',
                        ability: 'speed-boost',
                        gender: 'female',
                        heldItem: 'wise-glasses',
                        level: 52,
                        moves: ['bug-buzz', 'air-slash', 'psychic', 'detect'],
                        nature: Nature.Rash,
                        ivs: 31,
                    },
                    {
                        slug: 'bronzong',
                        ability: 'levitate',
                        heldItem: 'leftovers',
                        level: 52,
                        moves: [
                            'stealth-rock',
                            'gyro-ball',
                            'payback',
                            'explosion',
                        ],
                        nature: Nature.Naughty,
                        ivs: 31,
                    },
                    {
                        slug: 'kangaskhan',
                        ability: 'scrappy',
                        gender: 'female',
                        heldItem: 'muscle-band',
                        level: 52,
                        moves: [
                            'double-edge',
                            'hammer-arm',
                            'crunch',
                            'fake-out',
                        ],
                        nature: Nature.Impish,
                        ivs: 31,
                    },
                    {
                        slug: 'purugly',
                        ability: 'thick-fat',
                        gender: 'female',
                        heldItem: 'sitrus-berry',
                        level: 53,
                        moves: [
                            'body-slam',
                            'play-rough',
                            'hypnosis',
                            'fake-out',
                        ],
                        nature: Nature.Lonely,
                        ivs: 31,
                    },
                ],
            },
        ],
    },
};
