import { valorLakefront } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'valor-lakefront',
    battles: [
        {
            battleKey: 'galactic-grunt-m-valor-lakefront',
            x: 61,
            y: 51.7,
        },
    ],
};

export default VALOR_LAKEFRONT;
