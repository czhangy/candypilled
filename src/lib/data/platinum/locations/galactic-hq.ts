import {
    galacticHq1f,
    galacticHq2f,
    galacticHq3f,
    galacticHq4f,
    galacticHqPixieRoom,
    galacticHqWarehouse,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
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
                    battleKey: 'galactic-grunt-m-galactic-hq-1',
                    x: 47.63,
                    y: 71.58,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-2',
                    x: 84.98,
                    y: 42.81,
                },
            ],
        },
        {
            name: '1F',
            map: galacticHq1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-1',
                    x: 77.86,
                    y: 21.52,
                },
                {
                    battleKey: 'scientist-fredrick',
                    x: 31.65,
                    y: 16.67,
                },
            ],
        },
        {
            name: '2F',
            map: galacticHq2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-3',
                    x: 18.33,
                    y: 16.87,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-6',
                    x: 39.48,
                    y: 65.95,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-2',
                    x: 49.1,
                    y: 65.95,
                },
                {
                    battleKey: 'scientist-darrius',
                    x: 60.64,
                    y: 16.87,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-4',
                    x: 6.79,
                    y: 17.88,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-5',
                    x: 16.41,
                    y: 85.76,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-3',
                    x: 79.87,
                    y: 3.33,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-7',
                    x: 79.87,
                    y: 22.73,
                },
            ],
        },
        {
            name: '4F',
            map: galacticHq4f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-boss-cyrus-galactic-hq',
                    x: 34.23,
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
                    x: 50,
                    y: 29.57,
                },
            ],
        },
    ],
};

export default GALACTIC_HQ;
