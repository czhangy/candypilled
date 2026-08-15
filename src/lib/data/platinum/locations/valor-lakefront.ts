import { valorLakefront } from '@/lib/data/platinum/maps';
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
            battleKey: 'galactic-grunt-m-10',
            x: 80.5,
            y: 56.5,
        },
    ],
};

export default VALOR_LAKEFRONT;
