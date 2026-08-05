import {
    canalaveGym1f,
    canalaveGym2f,
    canalaveGym3f,
    canalaveGym4f,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const CANALAVE_GYM: Location = {
    name: 'Canalave Gym',
    subareas: [
        {
            name: '1F',
            map: canalaveGym1f,
        },
        {
            name: '2F',
            map: canalaveGym2f,
        },
        {
            name: '3F',
            map: canalaveGym3f,
        },
        {
            name: '4F',
            map: canalaveGym4f,
        },
    ],
};

export default CANALAVE_GYM;
