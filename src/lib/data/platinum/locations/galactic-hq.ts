import {
    galacticHq1f,
    galacticHq2f,
    galacticHq3f,
    galacticHq4f,
    galacticHqPixieRoom,
    galacticHqWarehouse,
} from '@/lib/data/platinum/maps';
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
                    y: 71.82,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-2',
                    x: 84.94,
                    y: 42.32,
                },
            ],
        },
        {
            name: '1F',
            map: galacticHq1f,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-1',
                    x: 77.8,
                    y: 21.11,
                },
                {
                    battleKey: 'scientist-fredrick',
                    x: 31.71,
                    y: 16.56,
                },
            ],
        },
        {
            name: '2F',
            map: galacticHq2f,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-3',
                    x: 18.27,
                    y: 16.77,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-6',
                    x: 39.54,
                    y: 65.85,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-2',
                    x: 49.16,
                    y: 65.85,
                },
                {
                    battleKey: 'scientist-darrius',
                    x: 60.58,
                    y: 16.77,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-4',
                    x: 6.61,
                    y: 17.47,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-5',
                    x: 16.35,
                    y: 85.65,
                },
                {
                    battleKey: 'galactic-grunt-f-galactic-hq-3',
                    x: 79.81,
                    y: 3.23,
                },
                {
                    battleKey: 'galactic-grunt-m-galactic-hq-7',
                    x: 79.81,
                    y: 22.62,
                },
            ],
        },
        {
            name: '4F',
            map: galacticHq4f,
            battles: [
                {
                    battleKey: 'galactic-boss-cyrus-galactic-hq',
                    x: 34.38,
                    y: 33.33,
                },
            ],
        },
        {
            name: 'Pixie Room',
            map: galacticHqPixieRoom,
            battles: [
                {
                    battleKey: 'commander-saturn-galactic-hq',
                    x: 50.41,
                    y: 29.39,
                },
            ],
        },
    ],
};

export default GALACTIC_HQ;
