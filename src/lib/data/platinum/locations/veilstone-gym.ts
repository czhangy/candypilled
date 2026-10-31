import { veilstoneGym } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'black-belt-colby',
            x: 60.25,
            y: 71.43,
        },
        {
            battleKey: 'black-belt-darren',
            x: 65.13,
            y: 39.78,
        },
        {
            battleKey: 'black-belt-rafael',
            x: 44.22,
            y: 36.26,
        },
        {
            battleKey: 'black-belt-jeffery',
            x: 6.43,
            y: 22.2,
        },
        {
            battleKey: 'leader-maylene',
            x: 47.99,
            y: 4.62,
        },
    ],
};

export default VEILSTONE_GYM;
