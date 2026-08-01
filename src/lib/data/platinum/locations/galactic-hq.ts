import {
    galacticHq1f,
    galacticHq2f,
    galacticHq3f,
    galacticHq4f,
    galacticHqPixies,
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
                    isOptional: true,
                    battleKey: 'galactic-grunt-m-17',
                    x: 47.4,
                    y: 71.9,
                },
                {
                    battleKey: 'galactic-grunt-m-18',
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
                    battleKey: 'galactic-grunt-f-6',
                    x: 77.4,
                    y: 29.5,
                },
                {
                    isOptional: true,
                    battleKey: 'scientist-fredrick',
                    x: 32.1,
                    y: 25.2,
                },
            ],
        },
        {
            name: '2F',
            map: galacticHq2f,
            battles: [
                {
                    isOptional: true,
                    battleKey: 'galactic-grunt-m-19',
                    x: 18.9,
                    y: 25.5,
                },
                {
                    battleKey: 'galactic-grunt-m-22',
                    x: 39.9,
                    y: 66.6,
                },
                {
                    battleKey: 'galactic-grunt-f-7',
                    x: 49.1,
                    y: 67,
                },
                {
                    isOptional: true,
                    battleKey: 'scientist-darrius',
                    x: 60.4,
                    y: 25.2,
                },
            ],
        },
        {
            name: '3F',
            map: galacticHq3f,
            battles: [
                {
                    isOptional: true,
                    battleKey: 'galactic-grunt-m-20',
                    x: 7.4,
                    y: 25.2,
                },
                {
                    isOptional: true,
                    battleKey: 'galactic-grunt-m-21',
                    x: 16.8,
                    y: 84.7,
                },
                {
                    battleKey: 'galactic-grunt-f-8',
                    x: 79.4,
                    y: 14.1,
                },
                {
                    battleKey: 'galactic-grunt-m-23',
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
                    isMiniboss: true,
                    battleKey: 'galactic-boss-cyrus-cyrus-2',
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
                    isMiniboss: true,
                    battleKey: 'commander-saturn-saturn-2',
                    x: 50,
                    y: 40.8,
                },
            ],
        },
    ],
};

export default GALACTIC_HQ;
