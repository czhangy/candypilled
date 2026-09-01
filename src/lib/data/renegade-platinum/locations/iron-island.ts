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
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const IRON_ISLAND: Location = {
    name: 'Iron Island',
    subareas: [
        {
            name: 'Exterior',
            map: ironIslandExterior,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-outside',
            battles: [
                {
                    battleKey: 'pkmn-trainer-riley',
                    metadata: [BattleMetadata.Miniboss],
                    x: 67.4,
                    y: 31.5,
                },
            ],
        },
        {
            name: '1F',
            map: ironIsland1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-inside',
        },
        {
            name: 'B1F West',
            map: ironIslandB1fWest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-inside',
            battles: [
                {
                    battleKey: 'camper-lawrence',
                    metadata: [BattleMetadata.Optional],
                    x: 63.9,
                    y: 73,
                },
            ],
        },
        {
            name: 'B1F East',
            map: ironIslandB1fEast,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'iron-island-inside',
            battles: [
                {
                    battleKey: 'picnicker-summer',
                    metadata: [BattleMetadata.Optional],
                    x: 75.7,
                    y: 53.2,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-inside',
            battles: [
                {
                    battleKey: 'worker-noel',
                    metadata: [BattleMetadata.Optional],
                    x: 22.5,
                    y: 21.4,
                },
                {
                    battleKey: 'worker-braden',
                    metadata: [BattleMetadata.Optional],
                    x: 7.2,
                    y: 79.3,
                },
            ],
        },
        {
            name: 'B2F West',
            map: ironIslandB2fWest,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'iron-island-inside',
            tagPartner: [{ battleKey: 'pkmn-trainer-riley-tag' }],
            battles: [
                {
                    battleKey: 'hiker-damon',
                    metadata: [BattleMetadata.Optional],
                    x: 65,
                    y: 3.8,
                },
                {
                    battleKey: 'hiker-maurice',
                    metadata: [BattleMetadata.Optional],
                    x: 52.6,
                    y: 7.7,
                },
                {
                    battleKey: 'black-belt-kendal',
                    metadata: [BattleMetadata.Optional],
                    x: 89.1,
                    y: 34,
                },
                {
                    battleKey: 'battle-girl-tyler',
                    metadata: [BattleMetadata.Optional],
                    x: 89.1,
                    y: 39.6,
                },
                {
                    battleKey: 'worker-quentin',
                    metadata: [BattleMetadata.Optional],
                    x: 37.9,
                    y: 47.1,
                },
                {
                    battleKey: 'worker-brendon',
                    metadata: [BattleMetadata.Optional],
                    x: 35.5,
                    y: 52.7,
                },
                {
                    battleKey: 'ace-trainer-m-jonah',
                    metadata: [],
                    x: 57.6,
                    y: 58.4,
                },
                {
                    battleKey: 'ace-trainer-f-brenda',
                    metadata: [],
                    x: 67.4,
                    y: 58.4,
                },
                {
                    battleKey: 'galactic-grunt-and-galactic-grunt-iron-island',
                    metadata: [BattleMetadata.Tag],
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 47.9,
                    y: 76.4,
                },
            ],
        },
        {
            name: 'B3F',
            map: ironIslandB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-inside',
        },
    ],
};

export default IRON_ISLAND;
