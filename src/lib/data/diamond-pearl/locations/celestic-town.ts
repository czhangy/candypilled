import { celesticRuins, celesticTown } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const CELESTIC_TOWN: Location = {
    name: 'Celestic Town',
    subareas: [
        {
            name: 'Town',
            map: celesticTown,
            encountersKey: 'celestic-town',
            battles: [
                {
                    battleKey: 'galactic-grunt-m-celestic-town',
                    x: 48.4,
                    y: 31.5,
                },
            ],
        },
        {
            name: 'Ruins',
            map: celesticRuins,
        },
    ],
};

export default CELESTIC_TOWN;
