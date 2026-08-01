import {
    ironIsland1f,
    ironIslandB1fEast,
    ironIslandB1fWest,
    ironIslandB2fEast,
    ironIslandB2fWest,
    ironIslandB3f,
    ironIslandExterior,
} from '@/lib/data/platinum/maps';
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
                    isOptional: true,
                    battleKey: 'camper-lawrence',
                    x: 64.2,
                    y: 81.1,
                },
            ],
        },
        {
            name: 'B1F East',
            map: ironIslandB1fEast,
            encountersKey: 'iron-island-b1f-right',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'picnicker-summer',
                    x: 76.1,
                    y: 48.6,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            encountersKey: 'iron-island-b2f-right',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'worker-noel',
                    x: 39.5,
                    y: 27.3,
                },
                {
                    isOptional: true,
                    battleKey: 'worker-braden',
                    x: 20.3,
                    y: 56.8,
                },
            ],
        },
        {
            name: 'B2F West',
            map: ironIslandB2fWest,
            encountersKey: 'iron-island-b2f-left',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'hiker-damon',
                    x: 64.7,
                    y: 5.7,
                },
                {
                    isOptional: true,
                    battleKey: 'hiker-maurice',
                    x: 52.5,
                    y: 9,
                },
                {
                    isOptional: true,
                    battleKey: 'black-belt-kendal',
                    x: 89,
                    y: 33.1,
                },
                {
                    isOptional: true,
                    battleKey: 'battle-girl-tyler',
                    x: 89,
                    y: 38.1,
                },
                {
                    isOptional: true,
                    battleKey: 'worker-brendon',
                    x: 37.9,
                    y: 45,
                },
                {
                    isOptional: true,
                    battleKey: 'worker-quentin',
                    x: 35.4,
                    y: 50.1,
                },
                {
                    isOptional: true,
                    battleKey: 'ace-trainer-m-jonah',
                    x: 57.4,
                    y: 53.6,
                },
                {
                    isOptional: true,
                    battleKey: 'ace-trainer-f-brenda',
                    x: 67.3,
                    y: 53.6,
                },
                {
                    isOptional: true,
                    isTag: true,
                    customHeight: 38,
                    battleKey: 'galactic-grunt-m-12',
                    x: 47.8,
                    y: 69.8,
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
