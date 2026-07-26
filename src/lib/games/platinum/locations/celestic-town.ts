import { celesticTown } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CELESTIC_TOWN: Location = {
    name: 'Celestic Town',
    map: celesticTown,
    encountersKey: 'celestic-town',
    battles: [
        {
            trainerClass: 'Galactic Grunt M',
            name: '9',
            team: [
                {
                    slug: 'houndour',
                    ability: 1,
                    gender: 'male',
                    ivs: 3,
                    level: 32,
                    nature: Nature.Sassy,
                },
                {
                    slug: 'golbat',
                    ability: 1,
                    gender: 'male',
                    ivs: 3,
                    level: 30,
                    nature: Nature.Relaxed,
                },
            ],
            x: 48.5,
            y: 45.1,
        },
    ],
};

export default CELESTIC_TOWN;
