import { celesticRuins, celesticTown } from '@/lib/data/renegade-platinum/maps';
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
                    x: 48.2,
                    y: 31.4,
                },
            ],
        },
        {
            name: 'Ruins',
            map: celesticRuins,
            battles: [
                {
                    battleKey: 'galactic-boss-cyrus-celestic-ruins',
                    x: 50,
                    y: 9,
                },
            ],
        },
    ],
};

export default CELESTIC_TOWN;
