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
                    x: 47.7,
                    y: 72,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-2',
                    x: 84.9,
                    y: 43.2,
                },
            ],
        },
        {
            name: '1F',
            map: galacticHq1f,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-1',
                    x: 77.9,
                    y: 21.8,
                },
                {
                    battleKey: 'scientist-fredrick',
                    x: 31.7,
                    y: 16.7,
                },
            ],
        },
        {
            name: '2F',
            map: galacticHq2f,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-3',
                    x: 18.4,
                    y: 16.9,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-4',
                    x: 39.3,
                    y: 66,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-2',
                    x: 49.2,
                    y: 66,
                },
                {
                    battleKey: 'scientist-darrius',
                    x: 60.6,
                    y: 17.2,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-5',
                    x: 6.7,
                    y: 17.9,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-6',
                    x: 16.2,
                    y: 85.8,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-3',
                    x: 79.7,
                    y: 3.1,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-7',
                    x: 79.7,
                    y: 22.8,
                },
            ],
        },
        {
            name: '4F',
            map: galacticHq4f,
            battles: [
                {
                    battleKey: 'galactic-boss-cyrus-galactic-hq',
                    x: 34.1,
                    y: 32.9,
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
                    y: 29.6,
                },
            ],
        },
    ],
};

export default GALACTIC_HQ;
