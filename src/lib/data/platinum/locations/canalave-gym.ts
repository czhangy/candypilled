import {
    canalaveGym1f,
    canalaveGym2f,
    canalaveGym3f,
    canalaveGym4f,
} from '@/lib/data/platinum/maps';
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
                    x: 13.88,
                    y: 42.99,
                },
                {
                    battleKey: 'worker-gary',
                    x: 65.88,
                    y: 38.24,
                },
                {
                    battleKey: 'ace-trainer-m-cesar',
                    x: 85.88,
                    y: 80.99,
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
                    x: 44.9,
                    y: 3.89,
                },
                {
                    battleKey: 'ace-trainer-f-breanna',
                    x: 88.23,
                    y: 11.29,
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
                    x: 24.9,
                    y: 3.87,
                },
                {
                    battleKey: 'black-belt-david',
                    x: 78.23,
                    y: 3.87,
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
                    x: 51.56,
                    y: 3.85,
                },
            ],
        },
    ],
};

export default CANALAVE_GYM;
