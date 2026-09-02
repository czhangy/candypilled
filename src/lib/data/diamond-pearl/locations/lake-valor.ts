import {
    lakeValorPostSpearPillar,
    lakeValorPreSpearPillar,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VALOR: Location = {
    name: 'Lake Valor',
    subareas: [
        {
            name: 'Pre-Spear Pillar',
            map: lakeValorPostSpearPillar,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-f-lake-valor',
                    x: 52.5,
                    y: 31.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-lake-valor-1',
                    x: 31,
                    y: 56.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-lake-valor-2',
                    x: 45.2,
                    y: 61.9,
                },
            ],
        },
        {
            name: 'Post-Spear Pillar',
            map: lakeValorPreSpearPillar,
            encountersKey: 'lake-valor-area',
        },
    ],
};

export default LAKE_VALOR;
