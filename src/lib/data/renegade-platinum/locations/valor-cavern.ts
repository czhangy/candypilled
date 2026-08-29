import { valorCavern } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    map: valorCavern,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'commander-saturn-valor-cavern',
            metadata: [BattleMetadata.Miniboss],
            x: 50,
            y: 59.3,
        },
    ],
};

export default VALOR_CAVERN;
