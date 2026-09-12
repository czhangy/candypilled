import {
    lakeValorPostGiratina,
    lakeValorPreGiratina,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VALOR: Location = {
    name: 'Lake Valor',
    subareas: [
        {
            name: 'Pre-Giratina',
            map: lakeValorPreGiratina,
            mapAnchor: MapAnchor.TopRight,
            battles: [
                {
                    battleKey: 'galactic-grunt-f-lake-valor',
                    x: 46,
                    y: 28.3,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-1',
                    x: 27.4,
                    y: 50.1,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-2',
                    x: 39.8,
                    y: 54.7,
                },
            ],
        },
        {
            name: 'Post-Giratina',
            map: lakeValorPostGiratina,
            mapAnchor: MapAnchor.TopRight,
            encountersKey: 'lake-valor-area',
        },
    ],
};

export default LAKE_VALOR;
