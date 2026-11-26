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
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const IRON_ISLAND: Location = {
    name: 'Iron Island',
    subareas: [
        {
            name: 'Exterior',
            map: ironIslandExterior,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-outside',
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'iron-tail',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Riley',
                    slug: 'strength',
                },
            ],
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Byron' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
            ],
            battles: [
                {
                    battleKey: 'pkmn-trainer-riley',
                    x: 67.29,
                    y: 31.45,
                },
            ],
        },
        {
            name: '1F',
            map: ironIsland1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-inside',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
        },
        {
            name: 'B1F West',
            map: ironIslandB1fWest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-inside',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
            battles: [
                {
                    battleKey: 'camper-lawrence',
                    x: 64.06,
                    y: 72.57,
                },
            ],
        },
        {
            name: 'B1F East',
            map: ironIslandB1fEast,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'iron-island-inside',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
            battles: [
                {
                    battleKey: 'picnicker-summer',
                    x: 75.81,
                    y: 53.1,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-inside',
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
            encountersKey: 'iron-island-inside',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
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
                    battleKey: 'worker-quentin',
                    x: 37.94,
                    y: 47.18,
                },
                {
                    battleKey: 'worker-brendon',
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
                    battleKey: 'galactic-grunt-and-galactic-grunt-iron-island',
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 47.71,
                    y: 76.35,
                },
            ],
        },
        {
            name: 'B3F',
            map: ironIslandB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-inside',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Byron' }],
        },
    ],
};

export default IRON_ISLAND;
