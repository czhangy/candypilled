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
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const IRON_ISLAND: Location = {
    name: 'Iron Island',
    subareas: [
        {
            name: 'Exterior',
            map: ironIslandExterior,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-area',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Byron' },
            ],
        },
        {
            name: '1F',
            map: ironIsland1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
        },
        {
            name: 'B1F West',
            map: ironIslandB1fWest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b1f-left',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
            battles: [
                {
                    battleKey: 'camper-lawrence',
                    x: 64.06,
                    y: 73.26,
                },
            ],
        },
        {
            name: 'B1F East',
            map: ironIslandB1fEast,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'iron-island-b1f-right',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
            battles: [
                {
                    battleKey: 'picnicker-summer',
                    x: 75.81,
                    y: 53.51,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b2f-right',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
            battles: [
                {
                    battleKey: 'worker-noel',
                    x: 22.66,
                    y: 21.09,
                },
                {
                    battleKey: 'worker-braden',
                    x: 7.66,
                    y: 79.43,
                },
            ],
        },
        {
            name: 'B2F West',
            map: ironIslandB2fWest,
            mapAnchor: MapAnchor.TopRight,
            encountersKey: 'iron-island-b2f-left',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Byron' },
                { method: EncounterMethod.Egg, split: 'Byron' },
            ],
            tagPartner: [{ battleKey: 'pkmn-trainer-riley-tag' }],
            battles: [
                {
                    battleKey: 'hiker-damon',
                    x: 64.81,
                    y: 3.88,
                },
                {
                    battleKey: 'hiker-maurice',
                    x: 52.6,
                    y: 7.65,
                },
                {
                    battleKey: 'black-belt-kendal',
                    x: 89.24,
                    y: 34,
                },
                {
                    battleKey: 'battle-girl-tyler',
                    x: 89.24,
                    y: 39.65,
                },
                {
                    battleKey: 'worker-brendon',
                    x: 37.94,
                    y: 47.18,
                },
                {
                    battleKey: 'worker-quentin',
                    x: 35.5,
                    y: 52.82,
                },
                {
                    battleKey: 'ace-trainer-m-jonah',
                    x: 57.48,
                    y: 58.47,
                },
                {
                    battleKey: 'ace-trainer-f-brenda',
                    x: 67.25,
                    y: 58.47,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'galactic-grunt-m-iron-island',
                    x: 47.71,
                    y: 76.35,
                },
            ],
        },
        {
            name: 'B3F',
            map: ironIslandB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b3f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
        },
    ],
};

export default IRON_ISLAND;
