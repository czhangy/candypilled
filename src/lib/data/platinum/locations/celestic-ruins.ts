import { celesticRuins } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CELESTIC_RUINS: Location = {
    name: 'Celestic Ruins',
    map: celesticRuins,
    battles: [
        {
            battleKey: 'galactic-boss-cyrus-celestic-ruins',
            x: 54.4,
            y: 21.3,
        },
    ],
};

export default CELESTIC_RUINS;
