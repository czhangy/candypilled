import { mauvilleGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAUVILLE_GYM: Location = {
    name: 'Mauville Gym',
    map: mauvilleGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'guitarist-kirk',
            x: 25,
            y: 72.66,
        },
        {
            battleKey: 'youngster-ben',
            x: 15,
            y: 63.43,
        },
        {
            battleKey: 'guitarist-shawn',
            x: 65,
            y: 44.08,
        },
        {
            battleKey: 'battle-girl-vivian',
            x: 74.38,
            y: 53.91,
        },
        {
            battleKey: 'leader-wattson',
            x: 44.38,
            y: 15.51,
        },
    ],
};

export default MAUVILLE_GYM;
