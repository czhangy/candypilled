import {
    valorCavernPostGiratina,
    valorCavernPreGiratina,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    subareas: [
        {
            name: 'Pre-Giratina',
            map: valorCavernPreGiratina,
            battles: [
                {
                    battleKey: 'commander-saturn-valor-cavern',
                    metadata: [BattleMetadata.Miniboss],
                    x: 50,
                    y: 59.3,
                },
            ],
        },
        {
            name: 'Post-Giratina',
            map: valorCavernPostGiratina,
            encountersKey: 'valor-cavern-post-giratina',
        },
    ],
};

export default VALOR_CAVERN;
