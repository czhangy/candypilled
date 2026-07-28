import { spearPillar } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SPEAR_PILLAR: Location = {
    name: 'Spear Pillar',
    map: spearPillar,
    battles: [
        {
            isDouble: true,
            customWidth: 54,
            trainerClass: 'galactic-grunt-f',
            name: '13',
            team: [
                {
                    slug: 'stunky',
                    ability: 1,
                    gender: 'female',
                    ivs: 3,
                    level: 41,
                    nature: Nature.Hasty,
                },
                {
                    slug: 'glameow',
                    ability: 1,
                    gender: 'female',
                    ivs: 3,
                    level: 41,
                    nature: Nature.Timid,
                },
            ],
            secondTrainer: {
                trainerClass: 'galactic-grunt-m',
                name: '13',
                team: [
                    {
                        slug: 'croagunk',
                        ability: 1,
                        gender: 'male',
                        ivs: 3,
                        level: 39,
                        nature: Nature.Serious,
                    },
                    {
                        slug: 'croagunk',
                        ability: 1,
                        gender: 'male',
                        ivs: 3,
                        level: 43,
                        nature: Nature.Docile,
                    },
                ],
            },
            x: 49.2,
            y: 75.7,
        },
        {
            isMiniboss: true,
            isTag: true,
            customWidth: 82,
            trainerClass: 'commander-jupiter',
            name: 'Jupiter',
            team: [
                {
                    slug: 'bronzor',
                    ability: 1,
                    ivs: 24,
                    level: 44,
                    nature: Nature.Quirky,
                    moves: [
                        'gyro-ball',
                        'extrasensory',
                        'rock-slide',
                        'reflect',
                    ],
                },
                {
                    slug: 'golbat',
                    ability: 1,
                    gender: 'female',
                    ivs: 24,
                    level: 44,
                    nature: Nature.Brave,
                    moves: [
                        'sludge-bomb',
                        'air-cutter',
                        'giga-drain',
                        'mean-look',
                    ],
                },
                {
                    slug: 'skuntank',
                    ability: 1,
                    gender: 'female',
                    ivs: 24,
                    level: 46,
                    nature: Nature.Relaxed,
                    moves: [
                        'night-slash',
                        'poison-jab',
                        'flamethrower',
                        'smokescreen',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            secondTrainer: {
                trainerClass: 'commander-mars',
                name: 'Mars',
                team: [
                    {
                        slug: 'bronzor',
                        ability: 1,
                        ivs: 24,
                        level: 44,
                        nature: Nature.Brave,
                        moves: [
                            'gyro-ball',
                            'extrasensory',
                            'light-screen',
                            'confuse-ray',
                        ],
                    },
                    {
                        slug: 'golbat',
                        ability: 1,
                        gender: 'female',
                        ivs: 24,
                        level: 44,
                        nature: Nature.Lonely,
                        moves: [
                            'air-cutter',
                            'bite',
                            'poison-fang',
                            'confuse-ray',
                        ],
                    },
                    {
                        slug: 'purugly',
                        ability: 1,
                        gender: 'female',
                        ivs: 24,
                        level: 46,
                        nature: Nature.Jolly,
                        moves: [
                            'slash',
                            'shadow-claw',
                            'aerial-ace',
                            'hypnosis',
                        ],
                        heldItem: 'sitrus-berry',
                    },
                ],
            },
            x: 49.3,
            y: 48.6,
        },
    ],
};

export default SPEAR_PILLAR;
