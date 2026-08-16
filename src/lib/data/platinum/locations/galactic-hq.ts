import {
    galacticHq1f,
    galacticHq2f,
    galacticHq3f,
    galacticHq4f,
    galacticHqPixies,
    galacticHqWarehouse,
} from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GALACTIC_HQ: Location = {
    name: 'Galactic HQ',
    subareas: [
        {
            name: 'Warehouse',
            map: galacticHqWarehouse,
            mapAnchor: MapAnchor.Left,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-17',
                    x: 47.4,
                    y: 71.9,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-18',
                    x: 84.4,
                    y: 48.5,
                },
            ],
        },
        {
            name: '1F',
            map: galacticHq1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-f-6',
                    x: 77.4,
                    y: 29.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'scientist-fredrick',
                    x: 32.1,
                    y: 25.2,
                },
            ],
        },
        {
            name: '2F',
            map: galacticHq2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-19',
                    x: 18.9,
                    y: 25.5,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-22',
                    x: 39.9,
                    y: 66.6,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-f-7',
                    x: 49.1,
                    y: 67,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'scientist-darrius',
                    x: 60.4,
                    y: 25.2,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-20',
                    x: 7.4,
                    y: 25.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-21',
                    x: 16.8,
                    y: 84.7,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-f-8',
                    x: 79.4,
                    y: 14.1,
                },
                {
                    metadata: [],
                    battleKey: 'galactic-grunt-m-23',
                    x: 79.4,
                    y: 29.5,
                },
            ],
        },
        {
            name: '4F',
            map: galacticHq4f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Miniboss],
                    battleKey: 'galactic-boss-cyrus-cyrus-2',
                    x: 34.8,
                    y: 41.5,
                },
            ],
        },
        {
            name: 'Pixie Room',
            map: galacticHqPixies,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    metadata: [BattleMetadata.Miniboss],
                    battleKey: 'commander-saturn-saturn-2',
                    x: 50,
                    y: 40.8,
                },
            ],
        },
    ],
};

export default GALACTIC_HQ;
