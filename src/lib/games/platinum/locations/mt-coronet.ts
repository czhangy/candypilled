import {
    mtCoronet1f207,
    mtCoronet1f211,
    mtCoronet1f216,
    mtCoronet2f,
    mtCoronet3f,
    mtCoronet4f,
    mtCoronet5f,
    mtCoronet6f,
    mtCoronetB1f,
    mtCoronetExterior,
    mtCoronetTunnel,
} from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_CORONET: Location = {
    name: 'Mt. Coronet',
    subareas: [
        {
            name: '1F (211)',
            map: mtCoronet1f211,
            encountersKey: 'mt-coronet-1f-route-211',
        },
        {
            name: '1F (207)',
            map: mtCoronet1f207,
            encountersKey: 'mt-coronet-1f-route-207',
        },
        { name: 'B1F', map: mtCoronetB1f, encountersKey: 'mt-coronet-b1f' },
        {
            name: '1F (216)',
            map: mtCoronet1f216,
            encountersKey: 'mt-coronet-1f-route-216',
        },
        { name: '2F', map: mtCoronet2f, encountersKey: 'mt-coronet-2f' },
        {
            name: '3F',
            map: mtCoronet3f,
            encountersKey: 'mt-coronet-3f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt F',
                    name: '6',
                    team: [
                        {
                            name: 'Stunky',
                            ability: 1,
                            level: 43,
                            nature: Nature.Bold,
                            ivs: 3,
                        },
                    ],
                    x: 63,
                    y: 25.4,
                },
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt M',
                    name: '7',
                    team: [
                        {
                            name: 'Murkrow',
                            ability: 1,
                            level: 43,
                            nature: Nature.Rash,
                            ivs: 3,
                        },
                    ],
                    x: 9.6,
                    y: 46,
                },
            ],
        },
        {
            name: 'Exterior',
            map: mtCoronetExterior,
            encountersKey: 'mt-coronet-exterior-snowfall',
        },
        {
            name: '4F',
            map: mtCoronet4f,
            encountersKey: 'mt-coronet-4f',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt M',
                    name: '8',
                    team: [
                        {
                            name: 'Houndour',
                            ability: 1,
                            level: 40,
                            nature: Nature.Hasty,
                            moves: [
                                'Beat Up',
                                'Fire Fang',
                                'Feint Attack',
                                'Embargo',
                            ],
                            ivs: 3,
                        },
                        {
                            name: 'Golbat',
                            ability: 1,
                            level: 40,
                            nature: Nature.Serious,
                            moves: [
                                'Confuse Ray',
                                'Air Cutter',
                                'Mean Look',
                                'Poison Fang',
                            ],
                            ivs: 3,
                        },
                        {
                            name: 'Houndour',
                            ability: 1,
                            level: 40,
                            nature: Nature.Hasty,
                            moves: [
                                'Beat Up',
                                'Fire Fang',
                                'Feint Attack',
                                'Embargo',
                            ],
                            ivs: 3,
                        },
                    ],
                    x: 24,
                    y: 32.2,
                },
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt M',
                    name: '9',
                    team: [
                        {
                            name: 'Stunky',
                            ability: 1,
                            level: 42,
                            nature: Nature.Brave,
                            ivs: 3,
                        },
                        {
                            name: 'Golbat',
                            ability: 1,
                            level: 40,
                            nature: Nature.Serious,
                            ivs: 3,
                        },
                    ],
                    x: 24,
                    y: 32.2,
                },
            ],
        },
        {
            name: 'Tunnel',
            map: mtCoronetTunnel,
            encountersKey: 'mt-coronet-1f-from-exterior',
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt M',
                    name: '10',
                    team: [
                        {
                            name: 'Golbat',
                            ability: 1,
                            level: 43,
                            nature: Nature.Docile,
                            ivs: 3,
                        },
                    ],
                    x: 12,
                    y: 77.2,
                },
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt F',
                    name: '11',
                    team: [
                        {
                            name: 'Murkrow',
                            ability: 1,
                            level: 39,
                            nature: Nature.Quirky,
                            ivs: 3,
                        },
                        {
                            name: 'Glameow',
                            ability: 1,
                            level: 42,
                            nature: Nature.Calm,
                            ivs: 3,
                        },
                        {
                            name: 'Murkrow',
                            ability: 1,
                            level: 39,
                            nature: Nature.Quirky,
                            ivs: 3,
                        },
                    ],
                    x: 79.3,
                    y: 60,
                },
                {
                    isOptional: true,
                    trainerClass: 'Galactic Grunt M',
                    name: '12',
                    team: [
                        {
                            name: 'Croagunk',
                            ability: 1,
                            level: 38,
                            nature: Nature.Modest,
                            ivs: 3,
                        },
                        {
                            name: 'Stunky',
                            ability: 1,
                            level: 40,
                            nature: Nature.Hasty,
                            ivs: 3,
                        },
                        {
                            name: 'Croagunk',
                            ability: 1,
                            level: 42,
                            nature: Nature.Serious,
                            ivs: 3,
                        },
                    ],
                    x: 63.5,
                    y: 18.5,
                },
            ],
        },

        {
            name: '5F',
            map: mtCoronet5f,
            encountersKey: 'mt-coronet-5f',
            battles: [
                {
                    trainerClass: 'Galactic Grunt F',
                    name: '13',
                    team: [
                        {
                            name: 'Houndour',
                            ability: 1,
                            level: 40,
                            nature: Nature.Timid,
                            ivs: 3,
                        },
                        {
                            name: 'Glameow',
                            ability: 1,
                            level: 42,
                            nature: Nature.Modest,
                            ivs: 3,
                        },
                    ],
                    x: 73,
                    y: 67,
                },
                {
                    trainerClass: 'Galactic Grunt M',
                    name: '14',
                    team: [
                        {
                            name: 'Glameow',
                            ability: 1,
                            level: 41,
                            nature: Nature.Hasty,
                            ivs: 3,
                        },
                        {
                            name: 'Golbat',
                            ability: 1,
                            level: 41,
                            nature: Nature.Docile,
                            ivs: 3,
                        },
                    ],
                    x: 45,
                    y: 83,
                },
            ],
        },
        {
            name: '6F',
            map: mtCoronet6f,
            encountersKey: 'mt-coronet-6f',
            battles: [
                {
                    trainerClass: 'Galactic Grunt F',
                    name: '15',
                    team: [
                        {
                            name: 'Golbat',
                            ability: 1,
                            level: 39,
                            nature: Nature.Quirky,
                            ivs: 3,
                        },
                        {
                            name: 'Croagunk',
                            ability: 1,
                            level: 40,
                            nature: Nature.Quirky,
                            ivs: 3,
                        },
                        {
                            name: 'Murkrow',
                            ability: 1,
                            level: 41,
                            nature: Nature.Calm,
                            ivs: 3,
                        },
                    ],
                    x: 55.2,
                    y: 50,
                },
            ],
        },
    ],
};

export default MT_CORONET;
