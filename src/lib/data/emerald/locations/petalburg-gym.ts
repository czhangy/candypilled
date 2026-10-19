import { petalburgGym } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_GYM: Location = {
    name: 'Petalburg Gym',
    map: petalburgGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            battleKey: 'cooltrainer-m-randall',
            x: 32.46,
            y: 68.16,
        },
        {
            battleKey: 'cooltrainer-f-mary',
            x: 68.15,
            y: 68.16,
        },
        {
            battleKey: 'cooltrainer-m-parker',
            x: 14.52,
            y: 47.17,
        },
        {
            battleKey: 'cooltrainer-f-alexia',
            x: 50.0,
            y: 47.17,
        },
        {
            battleKey: 'cooltrainer-m-george',
            x: 85.48,
            y: 47.17,
        },
        {
            battleKey: 'cooltrainer-f-jody',
            x: 32.26,
            y: 26.17,
        },
        {
            battleKey: 'cooltrainer-m-berke',
            x: 67.74,
            y: 26.17,
        },
        {
            battleKey: 'leader-norman',
            x: 50.0,
            y: 5.18,
        },
    ],
};

export default PETALBURG_GYM;
