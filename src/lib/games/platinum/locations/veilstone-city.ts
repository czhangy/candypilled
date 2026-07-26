import { veilstoneCity } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_CITY: Location = {
    name: 'Veilstone City',
    map: veilstoneCity,
    encountersKey: 'veilstone-city',
    battles: [
        {
            isTag: true,
            customHeight: 53,
            trainerClass: 'Galactic Grunt M',
            name: '9',
            team: [
                {
                    slug: 'zubat',
                    ability: 1,
                    gender: 'male',
                    ivs: 3,
                    level: 24,
                    nature: Nature.Calm,
                },
                {
                    slug: 'stunky',
                    ability: 1,
                    gender: 'male',
                    ivs: 3,
                    level: 26,
                    nature: Nature.Timid,
                },
            ],
            secondTrainer: {
                trainerClass: 'Galactic Grunt M',
                name: '9',
                team: [
                    {
                        slug: 'zubat',
                        ability: 1,
                        gender: 'male',
                        ivs: 3,
                        level: 24,
                        nature: Nature.Quiet,
                    },
                    {
                        slug: 'croagunk',
                        ability: 1,
                        gender: 'male',
                        ivs: 3,
                        level: 26,
                        nature: Nature.Hasty,
                    },
                ],
            },
            x: 40.4,
            y: 34.8,
        },
    ],
};

export default VEILSTONE_CITY;
