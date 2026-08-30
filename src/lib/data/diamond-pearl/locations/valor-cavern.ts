import { valorCavern } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    map: valorCavern,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'lake-valor-cavern',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'commander-saturn-valor-cavern',
            x: 50.7,
            y: 63.5,
        },
    ],
};

export default VALOR_CAVERN;
