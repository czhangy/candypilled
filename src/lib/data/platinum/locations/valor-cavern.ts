import {
    valorCavernPostGiratina,
    valorCavernPreGiratina,
} from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    subareas: [
        {
            name: 'Pre-Giratina',
            map: valorCavernPreGiratina,
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
            name: 'Post-Giratina',
            map: valorCavernPostGiratina,
        },
    ],
};

export default VALOR_CAVERN;
