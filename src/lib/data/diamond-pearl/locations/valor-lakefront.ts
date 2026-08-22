import { valorLakefront } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    mapAnchor: MapAnchor.Right,
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
