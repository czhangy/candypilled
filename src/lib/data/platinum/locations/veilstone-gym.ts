import { veilstoneGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    battles: [
        {
            battleKey: 'black-belt-colby',
            x: 59.9,
            y: 71.6,
        },
        {
            battleKey: 'black-belt-darren',
            x: 64.8,
            y: 39.7,
        },
        {
            battleKey: 'black-belt-rafael',
            x: 44,
            y: 36.4,
        },
        {
            battleKey: 'black-belt-jeffery',
            x: 6.4,
            y: 22.1,
        },
        {
            battleKey: 'leader-maylene',
            x: 47.9,
            y: 4.5,
        },
    ],
};

export default VEILSTONE_GYM;
