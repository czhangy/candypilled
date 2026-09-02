import { celesticTown } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const CELESTIC_TOWN: Location = {
    name: 'Celestic Town',
    map: celesticTown,
    encountersKey: 'celestic-town',
    battles: [
        {
            metadata: [],
            battleKey: 'galactic-grunt-m-celestic-town',
            x: 48.2,
            y: 31.4,
        },
    ],
};

export default CELESTIC_TOWN;
