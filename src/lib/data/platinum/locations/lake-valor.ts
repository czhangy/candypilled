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
                    isOptional: true,
                    battleKey: 'galactic-grunt-f::4',
                    x: 50.9,
                    y: 30.6,
                },
                {
                    isOptional: true,
                    battleKey: 'galactic-grunt-m::13',
                    x: 30.3,
                    y: 55.3,
                },
                {
                    isOptional: true,
                    battleKey: 'galactic-grunt-m::14',
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
