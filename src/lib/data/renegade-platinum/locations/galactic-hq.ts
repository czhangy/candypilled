import {
    galacticHq1f,
    galacticHq2f,
    galacticHq3f,
    galacticHq4f,
    galacticHqPixieRoom,
    galacticHqWarehouse,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GALACTIC_HQ: Location = {
    name: 'Galactic HQ',
    subareas: [
        {
            name: 'Warehouse',
            map: galacticHqWarehouse,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-warehouse-1',
                    metadata: [BattleMetadata.Optional],
                    x: 47.7,
                    y: 72.1,
                },
                {
                    battleKey: 'galactic-grunt-m-warehouse-2',
                    metadata: [],
                    x: 85,
                    y: 43.3,
                },
            ],
        },
        {
            name: '1F',
            map: galacticHq1f,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-hq-1f',
                    metadata: [BattleMetadata.Optional],
                    x: 77.8,
                    y: 21.4,
                },
                {
                    battleKey: 'scientist-fredrick',
                    metadata: [BattleMetadata.Optional],
                    x: 31.7,
                    y: 16.5,
                },
            ],
        },
        {
            name: '2F',
            map: galacticHq2f,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-hq-2f-1',
                    metadata: [BattleMetadata.Optional],
                    x: 18.3,
                    y: 16.4,
                },
                {
                    battleKey: 'galactic-grunt-m-hq-2f-2',
                    metadata: [BattleMetadata.Optional],
                    x: 39.3,
                    y: 65.5,
                },
                {
                    battleKey: 'galactic-grunt-f-hq-2f-3',
                    metadata: [],
                    x: 49.2,
                    y: 65.5,
                },
                {
                    battleKey: 'scientist-darrius',
                    metadata: [BattleMetadata.Optional],
                    x: 60.6,
                    y: 16.4,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-hq-3f-1',
                    metadata: [BattleMetadata.Optional],
                    x: 6.7,
                    y: 17.7,
                },
                {
                    battleKey: 'galactic-grunt-m-hq-3f-2',
                    metadata: [BattleMetadata.Optional],
                    x: 16.3,
                    y: 85.3,
                },
                {
                    battleKey: 'galactic-grunt-f-hq-3f-3',
                    metadata: [],
                    x: 79.8,
                    y: 3.2,
                },
                {
                    battleKey: 'galactic-grunt-m-hq-3f-4',
                    metadata: [],
                    x: 79.8,
                    y: 22.6,
                },
            ],
        },
        {
            name: '4F',
            map: galacticHq4f,
            battles: [
                {
                    battleKey: 'galactic-boss-cyrus',
                    metadata: [BattleMetadata.Miniboss],
                    x: 34.4,
                    y: 33.7,
                },
            ],
        },
        {
            name: 'Pixie Room',
            map: galacticHqPixieRoom,
            battles: [
                {
                    battleKey: 'commander-saturn-galactic-hq',
                    metadata: [BattleMetadata.Miniboss],
                    x: 50.4,
                    y: 28.8,
                },
            ],
        },
    ],
};

export default GALACTIC_HQ;
