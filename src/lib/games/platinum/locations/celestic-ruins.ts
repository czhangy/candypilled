import { celesticRuins } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CELESTIC_RUINS: Location = {
    name: 'Celestic Ruins',
    map: celesticRuins,
    battles: [
        {
            isMiniboss: true,
            trainerClass: 'Galactic Boss',
            name: 'Cyrus 1',
            team: [
                {
                    slug: 'sneasel',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 34,
                    nature: Nature.Relaxed,
                    moves: ['slash', 'ice-punch', 'quick-attack', 'screech'],
                },
                {
                    slug: 'golbat',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 34,
                    nature: Nature.Quiet,
                    moves: ['poison-fang', 'air-cutter', 'bite', 'supersonic'],
                },
                {
                    slug: 'murkrow',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 36,
                    nature: Nature.Impish,
                    moves: [
                        'drill-peck',
                        'night-shade',
                        'astonish',
                        'feint-attack',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            items: [{ count: 1, name: 'Hyper Potion' }],
            x: 54.4,
            y: 21.3,
        },
    ],
};

export default CELESTIC_RUINS;
