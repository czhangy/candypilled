import { valorCavern } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    map: valorCavern,
    encountersKey: 'lake-valor-cavern',
    battles: [
        {
            isMiniboss: true,
            battleKey: 'commander-saturn::Saturn 1',
            x: 50.7,
            y: 63.5,
        },
    ],
};

export default VALOR_CAVERN;
