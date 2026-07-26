import { waywardCave1f, waywardCaveB1f } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const WAYWARD_CAVE: Location = {
    name: 'Wayward Cave',
    subareas: [
        {
            name: '1F',
            map: waywardCave1f,
            encountersKey: 'wayward-cave-1f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Camper',
                    name: 'Diego',
                    team: [
                        {
                            slug: 'aipom',
                            ability: 1,
                            gender: 'male',
                            level: 22,
                            nature: Nature.Hardy,
                        },
                    ],
                    x: 3,
                    y: 26.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Picnicker',
                    name: 'Tori',
                    team: [
                        {
                            slug: 'psyduck',
                            ability: 1,
                            gender: 'female',
                            level: 22,
                            nature: Nature.Gentle,
                        },
                    ],
                    x: 6.4,
                    y: 26.5,
                },
                {
                    isOptional: true,
                    trainerClass: 'Hiker',
                    name: 'Reginald',
                    team: [
                        {
                            slug: 'geodude',
                            ability: 1,
                            gender: 'male',
                            level: 20,
                            nature: Nature.Mild,
                        },
                        {
                            slug: 'geodude',
                            ability: 1,
                            gender: 'male',
                            level: 20,
                            nature: Nature.Mild,
                        },
                    ],
                    x: 18.7,
                    y: 67.3,
                },
                {
                    isOptional: true,
                    trainerClass: 'Hiker',
                    name: 'Lorenzo',
                    team: [
                        {
                            slug: 'onix',
                            ability: 1,
                            gender: 'male',
                            level: 22,
                            nature: Nature.Mild,
                        },
                    ],
                    x: 21.6,
                    y: 67.3,
                },
                {
                    isOptional: true,
                    trainerClass: 'Lass',
                    name: 'Cassidy',
                    team: [
                        {
                            slug: 'buneary',
                            ability: 1,
                            gender: 'female',
                            level: 22,
                            nature: Nature.Careful,
                        },
                    ],
                    x: 3,
                    y: 75,
                },
                {
                    isOptional: true,
                    trainerClass: 'Youngster',
                    name: 'Wayne',
                    team: [
                        {
                            slug: 'staravia',
                            ability: 1,
                            gender: 'male',
                            level: 17,
                            nature: Nature.Serious,
                        },
                        {
                            slug: 'shellos',
                            ability: 1,
                            gender: 'male',
                            level: 20,
                            nature: Nature.Bold,
                        },
                        {
                            slug: 'ponyta',
                            ability: 1,
                            gender: 'male',
                            level: 20,
                            nature: Nature.Calm,
                        },
                    ],
                    x: 6.4,
                    y: 75,
                },
                {
                    isOptional: true,
                    trainerClass: 'Picnicker',
                    name: 'Ana',
                    team: [
                        {
                            slug: 'hoothoot',
                            ability: 1,
                            gender: 'female',
                            level: 22,
                            nature: Nature.Lonely,
                        },
                    ],
                    x: 76.3,
                    y: 54,
                },
                {
                    isOptional: true,
                    trainerClass: 'Camper',
                    name: 'Parker',
                    team: [
                        {
                            slug: 'buizel',
                            ability: 1,
                            gender: 'male',
                            level: 20,
                            nature: Nature.Naughty,
                            moves: ['water-gun', 'swift', 'quick-attack'],
                        },
                        {
                            slug: 'shinx',
                            ability: 1,
                            gender: 'male',
                            level: 20,
                            nature: Nature.Lonely,
                            moves: ['spark', 'bite'],
                        },
                    ],
                    x: 80.5,
                    y: 54,
                },
                {
                    isOptional: true,
                    trainerClass: 'Collector',
                    name: 'Terry',
                    team: [
                        {
                            slug: 'gible',
                            ability: 1,
                            gender: 'male',
                            level: 22,
                            nature: Nature.Lax,
                        },
                    ],
                    x: 94.9,
                    y: 83.3,
                },
                {
                    isOptional: true,
                    trainerClass: 'Ruin Maniac',
                    name: 'Gerald',
                    team: [
                        {
                            slug: 'geodude',
                            ability: 1,
                            gender: 'male',
                            level: 19,
                            nature: Nature.Quiet,
                        },
                        {
                            slug: 'bronzor',
                            ability: 1,
                            gender: 'male',
                            level: 21,
                            nature: Nature.Calm,
                        },
                    ],
                    x: 97,
                    y: 83.3,
                },
            ],
        },
        { name: 'B1F', map: waywardCaveB1f, encountersKey: 'wayward-cave-b1f' },
    ],
};

export default WAYWARD_CAVE;
