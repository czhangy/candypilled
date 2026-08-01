import { valorLakefront } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    encountersKey: 'valor-lakefront',
    battles: [
        {
            battleKey: 'galactic-grunt-m-10',
            x: 80.5,
            y: 56.5,
        },
    ],
};

export default VALOR_LAKEFRONT;
