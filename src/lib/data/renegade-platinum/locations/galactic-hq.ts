import {
    galacticHq1f,
    galacticHq2f,
    galacticHq3f,
    galacticHq4f,
    galacticHqPixieRoom,
    galacticHqWarehouse,
} from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GALACTIC_HQ: Location = {
    name: 'Galactic HQ',
    subareas: [
        {
            name: 'Warehouse',
            map: galacticHqWarehouse,
            mapAnchor: MapAnchor.Left,
            items: [
                {
                    category: ItemCategory.KeyItem,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'galactic-key',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'snatch',
                },
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'fly',
                },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-m-warehouse-1',
                    x: 47.63,
                    y: 72.09,
                },
                {
                    battleKey: 'galactic-grunt-m-warehouse-2',
                    x: 84.98,
                    y: 43.31,
                },
            ],
        },
        {
            name: '1F',
            map: galacticHq1f,
            mapAnchor: MapAnchor.Center,
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Ground',
                    slug: 'frustration',
                },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-f-hq-1f',
                    x: 77.95,
                    y: 21.37,
                },
                {
                    battleKey: 'scientist-fredrick',
                    x: 31.74,
                    y: 16.53,
                },
            ],
        },
        {
            name: '2F',
            map: galacticHq2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-hq-2f-1',
                    x: 18.33,
                    y: 16.41,
                },
                {
                    battleKey: 'galactic-grunt-m-hq-2f-2',
                    x: 39.48,
                    y: 65.49,
                },
                {
                    battleKey: 'galactic-grunt-f-hq-2f-3',
                    x: 49.1,
                    y: 65.49,
                },
                {
                    battleKey: 'scientist-darrius',
                    x: 60.64,
                    y: 16.41,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-hq-3f-1',
                    x: 6.79,
                    y: 17.72,
                },
                {
                    battleKey: 'galactic-grunt-m-hq-3f-2',
                    x: 16.41,
                    y: 85.6,
                },
                {
                    battleKey: 'galactic-grunt-f-hq-3f-3',
                    x: 79.87,
                    y: 3.18,
                },
                {
                    battleKey: 'galactic-grunt-m-hq-3f-4',
                    x: 79.87,
                    y: 22.57,
                },
            ],
        },
        {
            name: '4F',
            map: galacticHq4f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-boss-cyrus',
                    x: 34.3,
                    y: 34.21,
                },
            ],
        },
        {
            name: 'Pixie Room',
            map: galacticHqPixieRoom,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'commander-saturn-galactic-hq',
                    x: 50.1,
                    y: 29.57,
                },
            ],
        },
    ],
};

export default GALACTIC_HQ;
