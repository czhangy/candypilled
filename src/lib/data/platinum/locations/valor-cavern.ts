import {
    valorCavernPostGiratina,
    valorCavernPreGiratina,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    subareas: [
        {
            name: 'Pre-Giratina',
            map: valorCavernPreGiratina,
            mapAnchor: MapAnchor.Center,
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
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default VALOR_CAVERN;
