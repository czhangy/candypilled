import {
    valorCavernPostGiratina,
    valorCavernPreGiratina,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    subareas: [
        {
            name: 'Pre-Giratina',
            map: valorCavernPreGiratina,
            mapAnchor: MapAnchor.Center,
            hideBattles: true,
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
            mapAnchor: MapAnchor.Center,
            encountersKey: 'valor-cavern-post-giratina',
        },
    ],
};

export default VALOR_CAVERN;
