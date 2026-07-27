import { route219 } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    encountersKey: 'sinnoh-route-219',
    battles: [
        {
            isOptional: true,
            trainerClass: 'tuber-m',
            name: 'Trenton',
            team: [
                {
                    slug: 'shellos',
                    ability: 1,
                    gender: 'male',
                    level: 31,
                    nature: Nature.Calm,
                },
                {
                    slug: 'shellos',
                    ability: 1,
                    gender: 'male',
                    level: 33,
                    nature: Nature.Hardy,
                },
            ],
            x: 35.4,
            y: 74.1,
        },
        {
            isOptional: true,
            trainerClass: 'tuber-f',
            name: 'Mariel',
            team: [
                {
                    slug: 'marill',
                    ability: 1,
                    gender: 'female',
                    level: 31,
                    nature: Nature.Timid,
                },
                {
                    slug: 'marill',
                    ability: 1,
                    gender: 'female',
                    level: 33,
                    nature: Nature.Bold,
                },
            ],
            x: 52.5,
            y: 74.1,
        },
    ],
};

export default ROUTE_219;
