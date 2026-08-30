import {
    ironIsland1f,
    ironIslandB1fEast,
    ironIslandB1fWest,
    ironIslandB2fEast,
    ironIslandB2fWest,
    ironIslandB3f,
    ironIslandExterior,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const IRON_ISLAND: Location = {
    name: 'Iron Island',
    subareas: [
        {
            name: 'Exterior',
            map: ironIslandExterior,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-area',
        },
        {
            name: '1F',
            map: ironIsland1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-1f',
        },
        {
            name: 'B1F West',
            map: ironIslandB1fWest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b1f-left',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-lawrence',
                    x: 63,
                    y: 78.6,
                },
            ],
        },
        {
            name: 'B1F East',
            map: ironIslandB1fEast,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'iron-island-b1f-right',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-summer',
                    x: 75.1,
                    y: 49.1,
                },
            ],
        },
        {
            name: 'B2F East',
            map: ironIslandB2fEast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b2f-right',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-willy',
                    x: 40.3,
                    y: 23.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-braden',
                    x: 9.7,
                    y: 67.6,
                },
            ],
        },
        {
            name: 'B2F West',
            map: ironIslandB2fWest,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'iron-island-b2f-left',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-damon',
                    x: 64.4,
                    y: 6.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-maurice',
                    x: 52.5,
                    y: 9.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'black-belt-kendal',
                    x: 88.2,
                    y: 33.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'battle-girl-tyler',
                    x: 88.2,
                    y: 38.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-brendon',
                    x: 38.3,
                    y: 44.9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-quentin',
                    x: 35.7,
                    y: 49.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ace-trainer-m-jonah',
                    x: 57.1,
                    y: 53.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ace-trainer-f-brenda',
                    x: 66.9,
                    y: 53.6,
                },
                {
                    metadata: [BattleMetadata.Optional, BattleMetadata.Tag],
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
            mapAnchor: MapAnchor.Center,
            encountersKey: 'iron-island-b3f',
        },
    ],
};

export default IRON_ISLAND;
