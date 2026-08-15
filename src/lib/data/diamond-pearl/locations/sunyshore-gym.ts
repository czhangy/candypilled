import {
    sunyshoreGymRoom1,
    sunyshoreGymRoom2,
    sunyshoreGymRoom3,
} from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SUNYSHORE_GYM: Location = {
    name: 'Sunyshore Gym',
    subareas: [
        {
            name: 'Room 1',
            map: sunyshoreGymRoom1,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Room 2',
            map: sunyshoreGymRoom2,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Room 3',
            map: sunyshoreGymRoom3,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default SUNYSHORE_GYM;
