import { veilstoneGym } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'black-belt-jeffery',
            x: 50.14,
            y: 69.7,
        },
        {
            battleKey: 'black-belt-darren',
            x: 19.7,
            y: 69.7,
        },
        {
            battleKey: 'black-belt-rafael',
            x: 80.57,
            y: 65.47,
        },
        {
            battleKey: 'black-belt-colby',
            x: 50.14,
            y: 44.3,
        },
        {
            battleKey: 'leader-maylene',
            x: 50.14,
            y: 6.21,
        },
    ],
};

export default VEILSTONE_GYM;
