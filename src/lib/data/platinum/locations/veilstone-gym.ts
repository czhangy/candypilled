import { veilstoneGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    battles: [
        {
            battleKey: 'black-belt-colby',
            x: 59.8,
            y: 70,
        },
        {
            battleKey: 'black-belt-darren',
            x: 63.7,
            y: 42.8,
        },
        {
            battleKey: 'black-belt-rafael',
            x: 43.8,
            y: 42.3,
        },
        {
            battleKey: 'black-belt-jeffery',
            x: 7.8,
            y: 30.4,
        },
        {
            battleKey: 'leader-maylene',
            x: 48,
            y: 13,
        },
    ],
};

export default VEILSTONE_GYM;
