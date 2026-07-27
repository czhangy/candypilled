import { valorLakefront } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    encountersKey: 'valor-lakefront',
    battles: [
        {
            trainerClass: 'galactic-grunt-m',
            name: '10',
            team: [
                {
                    slug: 'croagunk',
                    ability: 1,
                    gender: 'male',
                    ivs: 3,
                    level: 31,
                    nature: Nature.Impish,
                },
            ],
            x: 80.5,
            y: 56.5,
        },
    ],
};

export default VALOR_LAKEFRONT;
