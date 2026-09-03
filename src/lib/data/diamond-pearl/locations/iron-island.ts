import {
    ironIsland1f,
    ironIslandB1fEast,
    ironIslandB1fWest,
    ironIslandB2fEast,
    ironIslandB2fWest,
    ironIslandB3f,
    ironIslandExterior,
} from '@/lib/data/diamond-pearl/maps';
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
                    x: 63,
                    y: 78.6,
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
                    x: 75.1,
                    y: 49.1,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            encountersKey: 'iron-island-b2f-right',
            battles: [
                {
                    battleKey: 'worker-willy',
                    x: 40.3,
                    y: 23.2,
                },
                {
                    battleKey: 'worker-braden',
                    x: 9.7,
                    y: 67.6,
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
                    x: 64.4,
                    y: 6.3,
                },
                {
                    battleKey: 'hiker-maurice',
                    x: 52.5,
                    y: 9.6,
                },
                {
                    battleKey: 'black-belt-kendal',
                    x: 88.2,
                    y: 33.5,
                },
                {
                    battleKey: 'battle-girl-tyler',
                    x: 88.2,
                    y: 38.1,
                },
                {
                    battleKey: 'worker-brendon',
                    x: 38.3,
                    y: 44.9,
                },
                {
                    battleKey: 'worker-quentin',
                    x: 35.7,
                    y: 49.8,
                },
                {
                    battleKey: 'ace-trainer-m-jonah',
                    x: 57.1,
                    y: 53.6,
                },
                {
                    battleKey: 'ace-trainer-f-brenda',
                    x: 66.9,
                    y: 53.6,
                },
                {
                    customHeight: 40,
                    battleKey: 'galactic-grunt-m-iron-island',
                    x: 47.7,
                    y: 69.5,
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
