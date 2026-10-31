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
            y: 73.07,
        },
        {
            battleKey: 'youngster-ben',
            x: 15,
            y: 63.54,
        },
        {
            battleKey: 'guitarist-shawn',
            x: 65,
            y: 44.49,
        },
        {
            battleKey: 'battle-girl-vivian',
            x: 75,
            y: 54.02,
        },
        {
            battleKey: 'leader-wattson',
            x: 45,
            y: 15.92,
        },
    ],
};

export default MAUVILLE_GYM;
