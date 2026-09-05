import {
    ironIsland1f,
    ironIslandB1fEast,
    ironIslandB1fWest,
    ironIslandB2fEast,
    ironIslandB2fWest,
    ironIslandB3f,
    ironIslandExterior,
} from '@/lib/data/platinum/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { Location } from '@/lib/static/types';

const IRON_ISLAND: Location = {
    name: 'Iron Island',
    subareas: [
        {
            name: 'Exterior',
            map: ironIslandExterior,
            encountersKey: 'iron-island-area',
        },
        {
            name: '1F',
            map: ironIsland1f,
            encountersKey: 'iron-island-1f',
        },
        {
            name: 'B1F West',
            map: ironIslandB1fWest,
            encountersKey: 'iron-island-b1f-left',
            battles: [
                {
                    battleKey: 'camper-lawrence',
                    x: 63.9,
                    y: 72.6,
                },
            ],
        },
        {
            name: 'B1F East',
            map: ironIslandB1fEast,
            encountersKey: 'iron-island-b1f-right',
            battles: [
                {
                    battleKey: 'picnicker-summer',
                    x: 75.9,
                    y: 53.3,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            encountersKey: 'iron-island-b2f-right',
            battles: [
                {
                    battleKey: 'worker-noel',
                    x: 22.5,
                    y: 20.9,
                },
                {
                    battleKey: 'worker-braden',
                    x: 7.5,
                    y: 79.7,
                },
            ],
        },
        {
            name: 'B2F West',
            map: ironIslandB2fWest,
            encountersKey: 'iron-island-b2f-left',
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
                    y: 7.5,
                },
                {
                    battleKey: 'black-belt-kendal',
                    x: 89.2,
                    y: 34,
                },
                {
                    battleKey: 'battle-girl-tyler',
                    x: 89.2,
                    y: 39.7,
                },
                {
                    battleKey: 'worker-brendon',
                    x: 37.9,
                    y: 47.2,
                },
                {
                    battleKey: 'worker-quentin',
                    x: 35.5,
                    y: 52.8,
                },
                {
                    battleKey: 'ace-trainer-m-jonah',
                    x: 57.5,
                    y: 58.5,
                },
                {
                    battleKey: 'ace-trainer-f-brenda',
                    x: 67.4,
                    y: 58.5,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'galactic-grunt-m-iron-island',
                    x: 47.7,
                    y: 76.4,
                },
            ],
        },
        {
            name: 'B3F',
            map: ironIslandB3f,
            encountersKey: 'iron-island-b3f',
        },
    ],
};

export default IRON_ISLAND;
