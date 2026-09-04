import {
    valorCavernPostSpearPillar,
    valorCavernPreSpearPillar,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    subareas: [
        {
            name: 'Pre-Spear Pillar',
            map: valorCavernPreSpearPillar,
            encountersKey: 'lake-valor-cavern',
            battles: [
                {
                    battleKey: 'commander-saturn-valor-cavern',
                    x: 50,
                    y: 59.4,
                },
            ],
        },
        {
            name: 'Post-Spear Pillar',
            map: valorCavernPostSpearPillar,
        },
    ],
};

export default VALOR_CAVERN;
