import {
    lakeValorCavern,
    lakeValorDry,
    lakeValorPostGiratina,
} from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VALOR: Location = {
    name: 'Lake Valor',
    subareas: [
        {
            name: 'Dry',
            map: lakeValorDry,
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'galactic-grunt-f',
                    name: '4',
                    team: [
                        {
                            slug: 'glameow',
                            ability: 1,
                            gender: 'female',
                            ivs: 3,
                            level: 35,
                            nature: Nature.Impish,
                        },
                        {
                            slug: 'murkrow',
                            ability: 1,
                            gender: 'female',
                            ivs: 3,
                            level: 35,
                            nature: Nature.Jolly,
                        },
                    ],
                    x: 50.9,
                    y: 30.6,
                },
                {
                    isOptional: true,
                    trainerClass: 'galactic-grunt-m',
                    name: '13',
                    team: [
                        {
                            slug: 'golbat',
                            ability: 1,
                            gender: 'male',
                            ivs: 3,
                            level: 37,
                            nature: Nature.Careful,
                        },
                    ],
                    x: 30.3,
                    y: 55.3,
                },
                {
                    isOptional: true,
                    trainerClass: 'galactic-grunt-m',
                    name: '14',
                    team: [
                        {
                            slug: 'croagunk',
                            ability: 1,
                            gender: 'male',
                            ivs: 3,
                            level: 33,
                            nature: Nature.Naughty,
                        },
                        {
                            slug: 'glameow',
                            ability: 1,
                            gender: 'female',
                            ivs: 3,
                            level: 33,
                            nature: Nature.Docile,
                        },
                        {
                            slug: 'stunky',
                            ability: 1,
                            gender: 'male',
                            ivs: 3,
                            level: 33,
                            nature: Nature.Rash,
                        },
                        {
                            slug: 'houndour',
                            ability: 1,
                            gender: 'male',
                            ivs: 3,
                            level: 33,
                            nature: Nature.Hardy,
                        },
                    ],
                    x: 44,
                    y: 60.9,
                },
            ],
        },
        {
            name: 'Cavern',
            map: lakeValorCavern,
            encountersKey: 'lake-valor-cavern',
            battles: [
                {
                    isMiniboss: true,
                    trainerClass: 'commander-saturn',
                    name: 'Saturn',
                    team: [
                        {
                            slug: 'golbat',
                            ability: 1,
                            gender: 'male',
                            ivs: 24,
                            level: 38,
                            nature: Nature.Naughty,
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
                            nature: Nature.Quirky,
                            moves: [
                                'gyro-ball',
                                'shadow-ball',
                                'rock-tomb',
                                'iron-defense',
                            ],
                        },
                        {
                            slug: 'toxicroak',
                            ability: 1,
                            gender: 'male',
                            ivs: 24,
                            level: 40,
                            nature: Nature.Adamant,
                            moves: [
                                'poison-jab',
                                'revenge',
                                'mud-bomb',
                                'feint-attack',
                            ],
                            heldItem: 'sitrus-berry',
                        },
                    ],
                    x: 50.7,
                    y: 63.5,
                },
            ],
        },
        {
            name: 'Post-Giratina',
            map: lakeValorPostGiratina,
            encountersKey: 'lake-valor-area',
        },
    ],
};

export default LAKE_VALOR;
