import { celesticTown } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CELESTIC_TOWN: Location = {
    name: 'Celestic Town',
    map: celesticTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'celestic-town',
    battles: [
        {
            metadata: [],
            battleKey: 'galactic-grunt-m-celestic-town',
            x: 51.1,
            y: 41.7,
        },
    ],
};

export default CELESTIC_TOWN;
