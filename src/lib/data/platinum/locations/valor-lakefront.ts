import { valorLakefront } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    encountersKey: 'valor-lakefront',
    battles: [
        {
            battleKey: 'galactic-grunt-m-valor-lakefront',
            x: 60.7,
            y: 51.6,
        },
    ],
};

export default VALOR_LAKEFRONT;
