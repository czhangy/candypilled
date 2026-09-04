import { celesticTown } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CELESTIC_TOWN: Location = {
    name: 'Celestic Town',
    map: celesticTown,
    encountersKey: 'celestic-town',
    battles: [
        {
            battleKey: 'galactic-grunt-m-celestic-town',
            x: 48.5,
            y: 45.1,
        },
    ],
};

export default CELESTIC_TOWN;
