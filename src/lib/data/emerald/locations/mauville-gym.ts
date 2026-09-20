import { mauvilleGym } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAUVILLE_GYM: Location = {
    name: 'Mauville Gym',
    map: mauvilleGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'battle-girl-vivian',
            x: 15.0,
            y: 77.83,
        },
        {
            battleKey: 'guitarist-kirk',
            x: 15.0,
            y: 63.54,
        },
        {
            battleKey: 'youngster-ben',
            x: 55.0,
            y: 49.26,
        },
        {
            battleKey: 'bug-maniac-angelo',
            x: 75.0,
            y: 49.26,
        },
        {
            battleKey: 'guitarist-shawn',
            x: 75.0,
            y: 39.73,
        },
        {
            battleKey: 'leader-wattson',
            x: 55.0,
            y: 11.16,
        },
    ],
};

export default MAUVILLE_GYM;
