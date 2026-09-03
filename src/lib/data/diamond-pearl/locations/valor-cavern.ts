import { valorCavern } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    map: valorCavern,
    encountersKey: 'lake-valor-cavern',
    battles: [
        {
            battleKey: 'commander-saturn-valor-cavern',
            x: 50.7,
            y: 63.5,
        },
    ],
};

export default VALOR_CAVERN;
