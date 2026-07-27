import {
    lakeVerityPostByron,
    lakeVerityPreByron,
} from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreByron,
            encountersKey: 'lake-verity-before-galactic-intervention',
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostByron,
            encountersKey: 'lake-verity-after-galactic-intervention',
            battles: [
                {
                    isDouble: true,
                    customWidth: 128,
                    trainerClass: 'galactic-grunt-m',
                    name: '15',
                    team: [
                        {
                            slug: 'croagunk',
                            ability: 1,
                            gender: 'male',
                            ivs: 3,
                            level: 37,
                            nature: Nature.Careful,
                        },
                    ],
                    secondTrainer: {
                        trainerClass: 'galactic-grunt-f',
                        name: '15',
                        team: [
                            {
                                slug: 'glameow',
                                ability: 1,
                                gender: 'female',
                                ivs: 3,
                                level: 33,
                                nature: Nature.Jolly,
                                moves: [
                                    'fury-swipes',
                                    'feint-attack',
                                    'growl',
                                    'fake-out',
                                ],
                            },
                            {
                                slug: 'golbat',
                                ability: 1,
                                gender: 'female',
                                ivs: 3,
                                level: 33,
                                nature: Nature.Serious,
                                moves: [
                                    'air-cutter',
                                    'wing-attack',
                                    'bite',
                                    'supersonic',
                                ],
                            },
                            {
                                slug: 'murkrow',
                                ability: 1,
                                gender: 'female',
                                ivs: 3,
                                level: 36,
                                nature: Nature.Rash,
                                moves: [
                                    'feint-attack',
                                    'night-shade',
                                    'wing-attack',
                                ],
                            },
                        ],
                    },
                    x: 75.9,
                    y: 73.5,
                },
                {
                    trainerClass: 'galactic-grunt-m',
                    name: '16',
                    team: [
                        {
                            slug: 'stunky',
                            ability: 1,
                            gender: 'male',
                            ivs: 3,
                            level: 35,
                            nature: Nature.Sassy,
                        },
                        {
                            slug: 'houndour',
                            ability: 1,
                            gender: 'male',
                            ivs: 3,
                            level: 35,
                            nature: Nature.Sassy,
                        },
                    ],
                    x: 78.6,
                    y: 63,
                },
                {
                    trainerClass: 'galactic-grunt-f',
                    name: '5',
                    team: [
                        {
                            slug: 'houndour',
                            ability: 1,
                            gender: 'female',
                            ivs: 3,
                            level: 34,
                            nature: Nature.Naughty,
                        },
                        {
                            slug: 'glameow',
                            ability: 1,
                            gender: 'female',
                            ivs: 3,
                            level: 36,
                            nature: Nature.Lax,
                        },
                    ],
                    x: 88.1,
                    y: 63,
                },
                {
                    isMiniboss: true,
                    trainerClass: 'commander-mars',
                    name: 'Mars 2',
                    team: [
                        {
                            slug: 'golbat',
                            ability: 1,
                            gender: 'female',
                            ivs: 24,
                            level: 38,
                            nature: Nature.Modest,
                            moves: [
                                'air-cutter',
                                'bite',
                                'toxic',
                                'supersonic',
                            ],
                        },
                        {
                            slug: 'bronzor',
                            ability: 1,
                            ivs: 24,
                            level: 38,
                            nature: Nature.Relaxed,
                            moves: [
                                'gyro-ball',
                                'extrasensory',
                                'iron-defense',
                                'confuse-ray',
                            ],
                        },
                        {
                            slug: 'purugly',
                            ability: 1,
                            gender: 'female',
                            ivs: 24,
                            level: 40,
                            nature: Nature.Bashful,
                            moves: [
                                'slash',
                                'feint-attack',
                                'hypnosis',
                                'fake-out',
                            ],
                            heldItem: 'sitrus-berry',
                        },
                    ],
                    x: 91.5,
                    y: 53.4,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
