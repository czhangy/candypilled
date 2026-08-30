import { valorLakefront } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-valor-lakefront',
    battles: [
        {
            battleKey: 'galactic-grunt-m-valor-lakefront',
            metadata: [],
            x: 80.5,
            y: 51.7,
        },
    ],
};

export default VALOR_LAKEFRONT;
