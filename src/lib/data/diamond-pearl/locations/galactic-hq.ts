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
        },
        {
            name: '1F',
            map: galacticHq1f,
        },
        {
            name: '2F',
            map: galacticHq2f,
        },
        {
            name: '3F',
            map: galacticHq3f,
        },
        {
            name: '4F',
            map: galacticHq4f,
        },
        {
            name: 'Pixie Room',
            map: galacticHqPixies,
        },
    ],
};

export default GALACTIC_HQ;
