import {
    ironIsland1f,
    ironIslandB1fEast,
    ironIslandB1fWest,
    ironIslandB2fEast,
    ironIslandB2fWest,
    ironIslandB3f,
    ironIslandExterior,
} from '@/lib/data/platinum/maps';
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
                    x: 64.2,
                    y: 81.1,
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
                    x: 76.1,
                    y: 48.6,
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
                    battleKey: 'worker-noel',
                    x: 39.5,
                    y: 27.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-braden',
                    x: 20.3,
                    y: 56.8,
                },
            ],
        },
        {
            name: 'B2F West',
            map: ironIslandB2fWest,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'iron-island-b2f-left',
            tagPartner: [{ battleKey: 'pkmn-trainer-riley-tag' }],
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-damon',
                    x: 64.7,
                    y: 5.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'hiker-maurice',
                    x: 52.5,
                    y: 9,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'black-belt-kendal',
                    x: 89,
                    y: 33.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'battle-girl-tyler',
                    x: 89,
                    y: 38.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-brendon',
                    x: 37.9,
                    y: 45,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-quentin',
                    x: 35.4,
                    y: 50.1,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ace-trainer-m-jonah',
                    x: 57.4,
                    y: 53.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ace-trainer-f-brenda',
                    x: 67.3,
                    y: 53.6,
                },
                {
                    metadata: [BattleMetadata.Optional, BattleMetadata.Tag],
                    customHeight: 38,
                    battleKey: 'galactic-grunt-m-iron-island',
                    x: 47.8,
                    y: 69.8,
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
