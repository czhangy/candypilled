import {
    lakeValorPostGiratina,
    lakeValorPreGiratina,
} from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const LAKE_VALOR: Location = {
    name: 'Lake Valor',
    subareas: [
        {
            name: 'Pre-Giratina',
            map: lakeValorPreGiratina,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-lake-valor',
                    x: 50.9,
                    y: 30.6,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-1',
                    x: 30.3,
                    y: 55.3,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-2',
                    x: 44,
                    y: 60.9,
                },
            ],
        },
        {
            name: 'Post-Giratina',
            map: lakeValorPostGiratina,
            encountersKey: 'lake-valor-area',
        },
    ],
};

export default LAKE_VALOR;
