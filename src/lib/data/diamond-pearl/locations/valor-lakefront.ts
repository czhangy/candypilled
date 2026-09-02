import { valorLakefront } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    encountersKey: 'valor-lakefront',
    battles: [
        {
            metadata: [],
            battleKey: 'galactic-grunt-m-valor-lakefront',
            x: 77.6,
            y: 57.9,
        },
    ],
};

export default VALOR_LAKEFRONT;
