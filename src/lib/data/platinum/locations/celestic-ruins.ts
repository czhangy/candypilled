import { celesticRuins } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CELESTIC_RUINS: Location = {
    name: 'Celestic Ruins',
    map: celesticRuins,
    battles: [
        {
            isMiniboss: true,
            battleKey: 'galactic-boss-cyrus::Cyrus 1',
            x: 54.4,
            y: 21.3,
        },
    ],
};

export default CELESTIC_RUINS;
