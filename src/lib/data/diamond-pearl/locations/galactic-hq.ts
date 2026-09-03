import {
    galacticHq1f,
    galacticHq2f,
    galacticHq3f,
    galacticHq4f,
    galacticHqPixies,
    galacticHqWarehouse,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const GALACTIC_HQ: Location = {
    name: 'Galactic HQ',
    subareas: [
        {
            name: 'Warehouse',
            map: galacticHqWarehouse,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-1',
                    x: 47.4,
                    y: 71.9,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-2',
                    x: 84.4,
                    y: 48.5,
                },
            ],
        },
        {
            name: '1F',
            map: galacticHq1f,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-1',
                    x: 77.4,
                    y: 29.5,
                },
                {
                    battleKey: 'scientist-fredrick',
                    x: 32.1,
                    y: 24.6,
                },
            ],
        },
        {
            name: '2F',
            map: galacticHq2f,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-3',
                    x: 18.9,
                    y: 25.3,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-4',
                    x: 39.8,
                    y: 67.8,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-2',
                    x: 49.1,
                    y: 67.8,
                },
                {
                    battleKey: 'scientist-darrius',
                    x: 60.4,
                    y: 24.7,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-5',
                    x: 7.4,
                    y: 25.2,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-6',
                    x: 17,
                    y: 85.1,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-3',
                    x: 79.4,
                    y: 14.1,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-7',
                    x: 79.4,
                    y: 29.5,
                },
            ],
        },
        {
            name: '4F',
            map: galacticHq4f,
            battles: [
                {
                    battleKey: 'galactic-boss-cyrus-galactic-hq',
                    x: 34.8,
                    y: 41.5,
                },
            ],
        },
        {
            name: 'Pixie Room',
            map: galacticHqPixies,
            battles: [
                {
                    battleKey: 'commander-saturn-galactic-hq',
                    x: 50,
                    y: 38.8,
                },
            ],
        },
    ],
};

export default GALACTIC_HQ;
