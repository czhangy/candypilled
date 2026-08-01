import {
    canalaveGym1f,
    canalaveGym2f,
    canalaveGym3f,
    canalaveGym4f,
} from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CANALAVE_GYM: Location = {
    name: 'Canalave Gym',
    subareas: [
        {
            name: '1F',
            map: canalaveGym1f,
            battles: [
                {
                    battleKey: 'black-belt::Ricky',
                    x: 14.4,
                    y: 43,
                },
                {
                    isOptional: true,
                    battleKey: 'worker::Gary',
                    x: 66.1,
                    y: 38.8,
                },
                {
                    battleKey: 'ace-trainer-m::Cesar',
                    x: 86.1,
                    y: 81.2,
                },
            ],
        },
        {
            name: '2F',
            map: canalaveGym2f,
            battles: [
                {
                    isOptional: true,
                    battleKey: 'worker::Jackson',
                    x: 44.9,
                    y: 4.1,
                },
                {
                    battleKey: 'ace-trainer-f::Breanna',
                    x: 88.2,
                    y: 11.1,
                },
            ],
        },
        {
            name: '3F',
            map: canalaveGym3f,
            battles: [
                {
                    battleKey: 'worker::Gerardo',
                    x: 25.1,
                    y: 3.8,
                },
                {
                    battleKey: 'black-belt::David',
                    x: 78.2,
                    y: 3.8,
                },
            ],
        },
        {
            name: '4F',
            map: canalaveGym4f,
            battles: [
                {
                    isBoss: true,
                    battleKey: 'leader-byron::Byron',
                    x: 51.8,
                    y: 4.1,
                },
            ],
        },
    ],
};

export default CANALAVE_GYM;
