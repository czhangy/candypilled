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
        },
        {
            name: 'Post-Spear Pillar',
            map: lakeValorPostSpearPillar,
            encountersKey: 'lake-valor-area',
        },
    ],
};

export default LAKE_VALOR;
