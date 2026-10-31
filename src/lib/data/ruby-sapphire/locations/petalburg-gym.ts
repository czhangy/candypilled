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
            x: 32,
            y: 68.44,
        },
        {
            battleKey: 'cooltrainer-f-mary',
            x: 67.81,
            y: 68.44,
        },
        {
            battleKey: 'cooltrainer-f-lori',
            x: 49.9,
            y: 48.65,
        },
        {
            battleKey: 'cooltrainer-m-parker',
            x: 14.1,
            y: 48.65,
        },
        {
            battleKey: 'cooltrainer-f-jody',
            x: 31.81,
            y: 28.56,
        },
        {
            battleKey: 'cooltrainer-m-berke',
            x: 67.81,
            y: 28.56,
        },
        {
            battleKey: 'cooltrainer-m-george',
            x: 85.52,
            y: 48.65,
        },
        {
            battleKey: 'leader-norman',
            x: 49.71,
            y: 8.62,
        },
    ],
};

export default PETALBURG_GYM;
