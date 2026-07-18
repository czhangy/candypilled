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
                    trainerClass: 'Bug Catcher',
                    name: 'Jack',
                    team: [
                        {
                            name: 'Wurmple',
                            ability: 1,
                            level: 11,
                            nature: Nature.Quiet,
                            moves: ['Tackle', 'String Shot', 'Poison Sting'],
                        },
                        {
                            name: 'Silcoon',
                            ability: 1,
                            level: 13,
                            nature: Nature.Careful,
                            moves: [
                                'Tackle',
                                'String Shot',
                                'Poison Sting',
                                'Harden',
                            ],
                        },
                        {
                            name: 'Beautifly',
                            ability: 1,
                            level: 15,
                            nature: Nature.Timid,
                            moves: ['Tackle', 'Poison Sting', 'Absorb', 'Gust'],
                            ivs: 2,
                        },
                    ],
                    x: 0,
                    y: 0,
                },
                {
                    isTag: true,
                    trainerClass: 'Lass',
                    name: 'Briana',
                    team: [
                        {
                            name: 'Pachirisu',
                            ability: 1,
                            level: 16,
                            nature: Nature.Modest,
                            moves: ['Bide', 'Quick Attack', 'Charm', 'Spark'],
                        },
                    ],
                    x: 0,
                    y: 0,
                },
                {
                    trainerClass: 'Psychic F',
                    name: 'Lindsey',
                    team: [
                        {
                            name: 'Abra',
                            ability: 1,
                            level: 17,
                            nature: Nature.Gentle,
                            moves: ['Hidden Power', 'Teleport'],
                            ivs: 2,
                        },
                    ],
                    x: 0,
                    y: 0,
                },
                {
                    trainerClass: 'Psychic M',
                    name: 'Elijah',
                    team: [
                        {
                            name: 'Abra',
                            ability: 1,
                            level: 17,
                            nature: Nature.Docile,
                            moves: ['Hidden Power', 'Teleport'],
                            ivs: 2,
                        },
                    ],
                    x: 0,
                    y: 0,
                },
                {
                    isOptional: true,
                    trainerClass: 'Bug Catcher',
                    name: 'Phillip',
                    team: [
                        {
                            name: 'Wurmple',
                            ability: 1,
                            level: 11,
                            nature: Nature.Quiet,
                            moves: ['Tackle', 'String Shot', 'Poison Sting'],
                        },
                        {
                            name: 'Cascoon',
                            ability: 1,
                            level: 13,
                            nature: Nature.Calm,
                            moves: [
                                'Tackle',
                                'String Shot',
                                'Poison Sting',
                                'Harden',
                            ],
                        },
                        {
                            name: 'Dustox',
                            ability: 1,
                            level: 15,
                            nature: Nature.Relaxed,
                            moves: [
                                'Tackle',
                                'Poison Sting',
                                'Confusion',
                                'Gust',
                            ],
                            ivs: 2,
                        },
                    ],
                    x: 0,
                    y: 0,
                },
                {
                    isOptional: true,
                    trainerClass: 'Bug Catcher',
                    name: 'Donald',
                    team: [
                        {
                            name: 'Burmy',
                            ability: 1,
                            level: 14,
                            nature: Nature.Quirky,
                            moves: ['Protect', 'Tackle'],
                        },
                        {
                            name: 'Burmy',
                            ability: 1,
                            level: 14,
                            nature: Nature.Quirky,
                            moves: ['Protect', 'Tackle'],
                        },
                    ],
                    x: 0,
                    y: 0,
                },
                {
                    isOptional: true,
                    trainerClass: 'Psychic M',
                    name: 'Kody',
                    team: [
                        {
                            name: 'Meditite',
                            ability: 1,
                            level: 17,
                            nature: Nature.Rash,
                            moves: [
                                'Confusion',
                                'Bide',
                                'Meditate',
                                'Hidden Power',
                            ],
                            ivs: 2,
                        },
                    ],
                    x: 0,
                    y: 0,
                },
                {
                    isOptional: true,
                    trainerClass: 'Psychic F',
                    name: 'Rachael',
                    team: [
                        {
                            name: 'Psyduck',
                            ability: 1,
                            level: 17,
                            nature: Nature.Mild,
                            moves: [
                                'Confusion',
                                'Water Gun',
                                'Scratch',
                                'Disable',
                            ],
                            ivs: 2,
                        },
                    ],
                    x: 0,
                    y: 0,
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
