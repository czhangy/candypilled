import { canalaveGym } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const CANALAVE_GYM: Location = {
    name: 'Canalave Gym',
    map: canalaveGym,
    battles: [
        {
            battleKey: 'black-belt-ricky',
            x: 29.9,
            y: 55,
        },
        {
            battleKey: 'worker-gary',
            x: 70.3,
            y: 51.4,
        },
        {
            battleKey: 'ace-trainer-m-cesar',
            x: 85.9,
            y: 83.1,
        },
        {
            battleKey: 'worker-jackson',
            x: 45.5,
            y: 5.8,
        },
        {
            battleKey: 'worker-gerardo',
            x: 26.6,
            y: 5.8,
        },
        {
            battleKey: 'black-belt-david',
            x: 76.8,
            y: 5.8,
        },
        {
            battleKey: 'ace-trainer-f-breanna',
            x: 86.1,
            y: 12.8,
        },
        {
            battleKey: 'leader-byron',
            x: 51.6,
            y: 5.8,
        },
    ],
};

export default CANALAVE_GYM;
