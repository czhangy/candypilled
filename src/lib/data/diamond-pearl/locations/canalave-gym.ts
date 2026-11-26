import {
    canalaveGym1f,
    canalaveGym2f,
    canalaveGym3f,
    canalaveGym4f,
} from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_GYM: Location = {
    name: 'Canalave Gym',
    subareas: [
        {
            name: '1F',
            map: canalaveGym1f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'black-belt-ricky',
                    x: 13.94,
                    y: 43,
                },
                {
                    battleKey: 'worker-gary',
                    x: 65.94,
                    y: 38.8,
                },
                {
                    battleKey: 'ace-trainer-m-cesar',
                    x: 85.94,
                    y: 81.6,
                },
            ],
        },
        {
            name: '2F',
            map: canalaveGym2f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'worker-jackson',
                    x: 44.95,
                    y: 4.1,
                },
                {
                    battleKey: 'ace-trainer-f-breanna',
                    x: 88.28,
                    y: 11.1,
                },
            ],
        },
        {
            name: '3F',
            map: canalaveGym3f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'worker-gerardo',
                    x: 24.95,
                    y: 3.8,
                },
                {
                    battleKey: 'black-belt-david',
                    x: 78.28,
                    y: 3.8,
                },
            ],
        },
        {
            name: '4F',
            map: canalaveGym4f,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'leader-byron',
                    x: 51.61,
                    y: 4.1,
                },
            ],
        },
    ],
};

export default CANALAVE_GYM;
