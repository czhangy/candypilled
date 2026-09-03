import {
    ironIsland1f,
    ironIslandB1fEast,
    ironIslandB1fWest,
    ironIslandB2fEast,
    ironIslandB2fWest,
    ironIslandB3f,
    ironIslandExterior,
} from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { Location } from '@/lib/static/types';

const IRON_ISLAND: Location = {
    name: 'Iron Island',
    subareas: [
        {
            name: 'Exterior',
            map: ironIslandExterior,
            encountersKey: 'iron-island-outside',
            battles: [
                {
                    battleKey: 'pkmn-trainer-riley',
                    x: 67.4,
                    y: 31.5,
                },
            ],
        },
        {
            name: '1F',
            map: ironIsland1f,
            encountersKey: 'iron-island-inside',
        },
        {
            name: 'B1F West',
            map: ironIslandB1fWest,
            encountersKey: 'iron-island-inside',
            battles: [
                {
                    battleKey: 'camper-lawrence',
                    x: 63.9,
                    y: 73,
                },
            ],
        },
        {
            name: 'B1F East',
            map: ironIslandB1fEast,
            encountersKey: 'iron-island-inside',
            battles: [
                {
                    battleKey: 'picnicker-summer',
                    x: 75.7,
                    y: 53.2,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            encountersKey: 'iron-island-inside',
            battles: [
                {
                    battleKey: 'worker-noel',
                    x: 22.5,
                    y: 21.4,
                },
                {
                    battleKey: 'worker-braden',
                    x: 7.2,
                    y: 79.3,
                },
            ],
        },
        {
            name: 'B2F West',
            map: ironIslandB2fWest,
            encountersKey: 'iron-island-inside',
            tagPartner: [{ battleKey: 'pkmn-trainer-riley-tag' }],
            battles: [
                {
                    battleKey: 'hiker-damon',
                    x: 65,
                    y: 3.8,
                },
                {
                    battleKey: 'hiker-maurice',
                    x: 52.6,
                    y: 7.7,
                },
                {
                    battleKey: 'black-belt-kendal',
                    x: 89.1,
                    y: 34,
                },
                {
                    battleKey: 'battle-girl-tyler',
                    x: 89.1,
                    y: 39.6,
                },
                {
                    battleKey: 'worker-quentin',
                    x: 37.9,
                    y: 47.1,
                },
                {
                    battleKey: 'worker-brendon',
                    x: 35.5,
                    y: 52.7,
                },
                {
                    battleKey: 'ace-trainer-m-jonah',
                    x: 57.6,
                    y: 58.4,
                },
                {
                    battleKey: 'ace-trainer-f-brenda',
                    x: 67.4,
                    y: 58.4,
                },
                {
                    battleKey: 'galactic-grunt-and-galactic-grunt-iron-island',
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 47.9,
                    y: 76.4,
                },
            ],
        },
        {
            name: 'B3F',
            map: ironIslandB3f,
            encountersKey: 'iron-island-inside',
        },
    ],
};

export default IRON_ISLAND;
