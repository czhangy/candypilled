import {
    eternaForestExterior,
    eternaForestInterior,
} from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ETERNA_FOREST: Location = {
    name: 'Eterna Forest',
    subareas: [
        {
            name: 'Interior',
            map: eternaForestInterior,
            encountersKey: 'eterna-forest-interior',
            battles: [
                {
                    isTag: true,
                    customWidth: 75,
                    trainerClass: 'Bug Catcher',
                    name: 'Jack',
                    team: [
                        {
                            slug: 'wurmple',
                            ability: 1,
                            gender: 'male',
                            level: 11,
                            nature: Nature.Quiet,
                            moves: ['tackle', 'string-shot', 'poison-sting'],
                        },
                        {
                            slug: 'silcoon',
                            ability: 1,
                            gender: 'male',
                            level: 13,
                            nature: Nature.Careful,
                            moves: [
                                'tackle',
                                'string-shot',
                                'poison-sting',
                                'harden',
                            ],
                        },
                        {
                            slug: 'beautifly',
                            ability: 1,
                            gender: 'male',
                            level: 15,
                            nature: Nature.Timid,
                            moves: ['tackle', 'poison-sting', 'absorb', 'gust'],
                            ivs: 2,
                        },
                    ],
                    secondTrainer: {
                        trainerClass: 'Lass',
                        name: 'Briana',
                        team: [
                            {
                                slug: 'pachirisu',
                                ability: 1,
                                gender: 'female',
                                level: 16,
                                nature: Nature.Modest,
                            },
                        ],
                    },
                    x: 36,
                    y: 47.5,
                },
                {
                    trainerClass: 'Psychic F',
                    name: 'Lindsey',
                    team: [
                        {
                            slug: 'abra',
                            ability: 1,
                            gender: 'male',
                            level: 17,
                            nature: Nature.Gentle,
                            moves: ['hidden-power'],
                            ivs: 2,
                        },
                    ],
                    x: 49.8,
                    y: 47.5,
                },
                {
                    trainerClass: 'Psychic M',
                    name: 'Elijah',
                    team: [
                        {
                            slug: 'abra',
                            ability: 1,
                            gender: 'male',
                            level: 17,
                            nature: Nature.Docile,
                            moves: ['hidden-power'],
                            ivs: 2,
                        },
                    ],
                    x: 56,
                    y: 47.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Bug Catcher',
                    name: 'Donald',
                    team: [
                        {
                            slug: 'burmy',
                            ability: 1,
                            gender: 'male',
                            level: 14,
                            nature: Nature.Lonely,
                            ivs: 1,
                        },
                        {
                            slug: 'burmy',
                            ability: 1,
                            gender: 'male',
                            level: 14,
                            nature: Nature.Lonely,
                            ivs: 1,
                        },
                    ],
                    x: 68.1,
                    y: 88,
                },
                {
                    isOptional: true,
                    trainerClass: 'Bug Catcher',
                    name: 'Phillip',
                    team: [
                        {
                            slug: 'wurmple',
                            ability: 1,
                            gender: 'male',
                            level: 11,
                            nature: Nature.Quiet,
                            moves: ['tackle', 'string-shot', 'poison-sting'],
                        },
                        {
                            slug: 'cascoon',
                            ability: 1,
                            gender: 'male',
                            level: 13,
                            nature: Nature.Calm,
                            moves: [
                                'tackle',
                                'string-shot',
                                'poison-sting',
                                'harden',
                            ],
                        },
                        {
                            slug: 'dustox',
                            ability: 1,
                            gender: 'male',
                            level: 15,
                            nature: Nature.Relaxed,
                            moves: [
                                'tackle',
                                'poison-sting',
                                'confusion',
                                'gust',
                            ],
                            ivs: 2,
                        },
                    ],
                    x: 68.1,
                    y: 98,
                },
                {
                    isOptional: true,
                    trainerClass: 'Psychic M',
                    name: 'Kody',
                    team: [
                        {
                            slug: 'meditite',
                            ability: 1,
                            gender: 'male',
                            level: 17,
                            nature: Nature.Rash,
                            moves: ['confusion', 'bide', 'meditate'],
                            ivs: 2,
                        },
                    ],
                    x: 79.1,
                    y: 47.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Psychic F',
                    name: 'Rachael',
                    team: [
                        {
                            slug: 'psyduck',
                            ability: 1,
                            gender: 'female',
                            level: 17,
                            nature: Nature.Mild,
                            moves: ['confusion', 'water-gun', 'scratch'],
                            ivs: 2,
                        },
                    ],
                    x: 82.8,
                    y: 47.5,
                },
            ],
        },
        {
            name: 'Exterior',
            map: eternaForestExterior,
            encountersKey: 'eterna-forest-exterior',
        },
    ],
};

export default ETERNA_FOREST;
