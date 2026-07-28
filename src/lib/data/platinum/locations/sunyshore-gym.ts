import {
    sunyshoreGymRoom1,
    sunyshoreGymRoom2,
    sunyshoreGymRoom3,
} from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const SUNYSHORE_GYM: Location = {
    name: 'Sunyshore Gym',
    subareas: [
        {
            name: 'Room 1',
            map: sunyshoreGymRoom1,
        },
        {
            name: 'Room 2',
            map: sunyshoreGymRoom2,
        },
        {
            name: 'Room 3',
            map: sunyshoreGymRoom3,
        },
    ],
};

export default SUNYSHORE_GYM;
