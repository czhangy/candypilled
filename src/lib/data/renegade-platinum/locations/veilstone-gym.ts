import { veilstoneGym } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    battles: [
        {
            battleKey: 'black-belt-colby',
            x: 60.1,
            y: 71.5,
        },
        {
            battleKey: 'black-belt-darren',
            x: 64.8,
            y: 39.9,
        },
        {
            battleKey: 'black-belt-rafael',
            x: 44,
            y: 36.3,
        },
        {
            battleKey: 'black-belt-jeffery',
            x: 6.4,
            y: 22.5,
        },
        {
            battleKey: 'leader-maylene',
            x: 48.2,
            y: 5,
        },
    ],
};

export default VEILSTONE_GYM;
