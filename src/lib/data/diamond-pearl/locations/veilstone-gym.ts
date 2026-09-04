import { veilstoneGym } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    battles: [
        {
            battleKey: 'black-belt-jeffery',
            x: 50.1,
            y: 69.7,
        },
        {
            battleKey: 'black-belt-darren',
            x: 19.4,
            y: 69.7,
        },
        {
            battleKey: 'black-belt-rafael',
            x: 81.1,
            y: 65.5,
        },
        {
            battleKey: 'black-belt-colby',
            x: 50.1,
            y: 44.1,
        },
        {
            battleKey: 'leader-maylene',
            x: 50.1,
            y: 6,
        },
    ],
};

export default VEILSTONE_GYM;
