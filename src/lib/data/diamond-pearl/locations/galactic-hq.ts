import {
    galacticHq1f,
    galacticHq2f,
    galacticHq3f,
    galacticHq4f,
    galacticHqPixies,
    galacticHqWarehouse,
} from '@/lib/data/diamond-pearl/maps';
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
                    y: 71.99,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-2',
                    x: 84.98,
                    y: 43.21,
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
                    x: 77.94,
                    y: 21.67,
                },
                {
                    battleKey: 'scientist-fredrick',
                    x: 31.79,
                    y: 16.83,
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
                    y: 16.92,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-4',
                    x: 39.48,
                    y: 66,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-2',
                    x: 49.1,
                    y: 66,
                },
                {
                    battleKey: 'scientist-darrius',
                    x: 60.64,
                    y: 16.92,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-5',
                    x: 6.79,
                    y: 17.91,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-6',
                    x: 16.41,
                    y: 85.79,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-3',
                    x: 79.87,
                    y: 3.37,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-7',
                    x: 79.87,
                    y: 22.76,
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
                    y: 33.21,
                },
            ],
        },
        {
            name: 'Pixie Room',
            map: galacticHqPixies,
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
