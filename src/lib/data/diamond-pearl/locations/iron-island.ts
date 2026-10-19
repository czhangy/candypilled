import {
    ironIsland1f,
    ironIslandB1fEast,
    ironIslandB1fWest,
    ironIslandB2fEast,
    ironIslandB2fWest,
    ironIslandB3f,
    ironIslandExterior,
} from '@/lib/data/diamond-pearl/maps';
import { GEN_4_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAVE_BYRON = [{ method: EncounterMethod.Cave, split: 'Byron' }];

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
            methodSplits: CAVE_BYRON,
        },
        {
            name: 'B1F West',
            map: ironIslandB1fWest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b1f-left',
            methodSplits: CAVE_BYRON,
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
            mapAnchor: MapAnchor.Top,
            encountersKey: 'iron-island-b1f-right',
            methodSplits: CAVE_BYRON,
            battles: [
                {
                    battleKey: 'picnicker-summer',
                    x: 75.7,
                    y: 53.4,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b2f-right',
            methodSplits: CAVE_BYRON,
            battles: [
                {
                    battleKey: 'worker-willy',
                    x: 22.5,
                    y: 21.2,
                },
                {
                    battleKey: 'worker-braden',
                    x: 7.5,
                    y: 79.8,
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
                    x: 64.8,
                    y: 3.8,
                },
                {
                    battleKey: 'hiker-maurice',
                    x: 52.4,
                    y: 7.7,
                },
                {
                    battleKey: 'black-belt-kendal',
                    x: 89.2,
                    y: 34.1,
                },
                {
                    battleKey: 'battle-girl-tyler',
                    x: 89.1,
                    y: 39.7,
                },
                {
                    battleKey: 'worker-brendon',
                    x: 38.1,
                    y: 47.3,
                },
                {
                    battleKey: 'worker-quentin',
                    x: 35.5,
                    y: 52.8,
                },
                {
                    battleKey: 'ace-trainer-m-jonah',
                    x: 57.5,
                    y: 58.6,
                },
                {
                    battleKey: 'ace-trainer-f-brenda',
                    x: 67.4,
                    y: 58.6,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'galactic-grunt-m-iron-island',
                    x: 47.6,
                    y: 76.5,
                },
            ],
        },
        {
            name: 'B3F',
            map: ironIslandB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b3f',
            methodSplits: CAVE_BYRON,
        },
    ],
};

export default IRON_ISLAND;
