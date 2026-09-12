import { petalburgGym } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_GYM: Location = {
    name: 'Petalburg Gym',
    map: petalburgGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            battleKey: 'cooltrainer-m-randall',
            x: 32.1,
            y: 68.3,
        },
        {
            battleKey: 'cooltrainer-f-mary',
            x: 67.71,
            y: 68.15,
        },
        {
            battleKey: 'cooltrainer-f-lori',
            x: 49.81,
            y: 48.36,
        },
        {
            battleKey: 'cooltrainer-m-parker',
            x: 14.19,
            y: 48.36,
        },
        {
            battleKey: 'cooltrainer-f-jody',
            x: 31.9,
            y: 28.4,
        },
        {
            battleKey: 'cooltrainer-m-berke',
            x: 67.71,
            y: 28.55,
        },
        {
            battleKey: 'cooltrainer-m-george',
            x: 85.62,
            y: 48.49,
        },
        {
            battleKey: 'leader-norman',
            x: 49.81,
            y: 8.33,
        },
    ],
};

export default PETALBURG_GYM;
