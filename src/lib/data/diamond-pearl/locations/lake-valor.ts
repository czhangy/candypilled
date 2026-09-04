import {
    lakeValorPostSpearPillar,
    lakeValorPreSpearPillar,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const LAKE_VALOR: Location = {
    name: 'Lake Valor',
    subareas: [
        {
            name: 'Pre-Spear Pillar',
            map: lakeValorPreSpearPillar,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-lake-valor',
                    x: 46.2,
                    y: 28.1,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-1',
                    x: 27.3,
                    y: 50.3,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-2',
                    x: 39.8,
                    y: 54.7,
                },
            ],
        },
        {
            name: 'Post-Spear Pillar',
            map: lakeValorPostSpearPillar,
            encountersKey: 'lake-valor-area',
        },
    ],
};

export default LAKE_VALOR;
