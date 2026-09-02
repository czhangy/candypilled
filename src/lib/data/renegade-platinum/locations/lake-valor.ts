import {
    lakeValorPostGiratina,
    lakeValorPreGiratina,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VALOR: Location = {
    name: 'Lake Valor',
    subareas: [
        {
            name: 'Pre-Giratina',
            map: lakeValorPreGiratina,
            encountersKey: 'lake-valor',
            battles: [
                {
                    battleKey: 'galactic-grunt-f-lake-valor',
                    metadata: [BattleMetadata.Optional],
                    x: 46.1,
                    y: 28.1,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-1',
                    metadata: [BattleMetadata.Optional],
                    x: 27.5,
                    y: 50.1,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-2',
                    metadata: [BattleMetadata.Optional],
                    x: 39.9,
                    y: 54.8,
                },
            ],
        },
        {
            name: 'Post-Giratina',
            map: lakeValorPostGiratina,
            encountersKey: 'lake-valor',
        },
    ],
};

export default LAKE_VALOR;
