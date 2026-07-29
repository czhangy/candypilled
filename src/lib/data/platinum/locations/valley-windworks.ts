import { valleyWindworks } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS: Location = {
    name: 'Valley Windworks',
    map: valleyWindworks,
    encountersKey: 'valley-windworks',
    battles: [
        {
            trainerClass: 'galactic-grunt-m',
            name: '2',
            team: [
                {
                    slug: 'glameow',
                    ability: 1,
                    gender: 'female',
                    level: 13,
                    nature: Nature.Lax,
                },
            ],
            x: 61.2,
            y: 44.9,
        },
    ],
};

export default VALLEY_WINDWORKS;
