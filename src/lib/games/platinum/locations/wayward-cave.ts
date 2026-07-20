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
                            name: 'Aipom',
                            ability: 1,
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
                            name: 'Psyduck',
                            ability: 1,
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
                            name: 'Geodude',
                            ability: 1,
                            level: 20,
                            nature: Nature.Mild,
                        },
                        {
                            name: 'Geodude',
                            ability: 1,
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
                            name: 'Onix',
                            ability: 1,
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
                            name: 'Buneary',
                            ability: 1,
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
                            name: 'Staravia',
                            ability: 1,
                            level: 17,
                            nature: Nature.Serious,
                        },
                        {
                            name: 'Shellos',
                            ability: 1,
                            level: 20,
                            nature: Nature.Bold,
                        },
                        {
                            name: 'Ponyta',
                            ability: 1,
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
                            name: 'Hoothoot',
                            ability: 1,
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
                            name: 'Buizel',
                            ability: 1,
                            level: 20,
                            nature: Nature.Naughty,
                            moves: ['Water Gun', 'Swift', 'Quick Attack'],
                        },
                        {
                            name: 'Shinx',
                            ability: 1,
                            level: 20,
                            nature: Nature.Lonely,
                            moves: ['Spark', 'Bite'],
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
                            name: 'Gible',
                            ability: 1,
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
                            name: 'Geodude',
                            ability: 1,
                            level: 19,
                            nature: Nature.Quiet,
                        },
                        {
                            name: 'Bronzor',
                            ability: 1,
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
