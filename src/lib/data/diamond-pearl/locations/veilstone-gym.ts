import { veilstoneGym } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    battles: [
        {
            battleKey: 'black-belt-jeffry',
            x: 49.9,
            y: 72.4,
        },
        {
            battleKey: 'black-belt-darren',
            x: 20.7,
            y: 72.4,
        },
        {
            battleKey: 'black-belt-rafael',
            x: 79.3,
            y: 68.9,
        },
        {
            battleKey: 'black-belt-colby',
            x: 50.4,
            y: 50.8,
        },
        {
            battleKey: 'leader-maylene',
            x: 50.1,
            y: 15.1,
        },
    ],
};

export default VEILSTONE_GYM;
