import {
    sunyshoreGymRoom1,
    sunyshoreGymRoom2,
    sunyshoreGymRoom3,
} from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SUNYSHORE_GYM: Location = {
    name: 'Sunyshore Gym',
    subareas: [
        {
            name: 'Room 1',
            map: sunyshoreGymRoom1,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'school-kid-f-tiera',
                    x: 36.59,
                    y: 23.78,
                },
            ],
        },
        {
            name: 'Room 2',
            map: sunyshoreGymRoom2,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'school-kid-m-forrest',
                    x: 21.59,
                    y: 31.09,
                },
                {
                    battleKey: 'guitarist-jerry',
                    x: 84.22,
                    y: 55.13,
                },
                {
                    battleKey: 'poke-kid-meghan',
                    x: 71.67,
                    y: 17.31,
                },
            ],
        },
        {
            name: 'Room 3',
            map: sunyshoreGymRoom3,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'guitarist-lonnie',
                    x: 73.66,
                    y: 89.8,
                },
                {
                    battleKey: 'ace-trainer-f-destiny',
                    x: 16.13,
                    y: 89.8,
                },
                {
                    battleKey: 'guitarist-preston',
                    x: 11.57,
                    y: 12.69,
                },
                {
                    battleKey: 'ace-trainer-m-zachery',
                    x: 97.78,
                    y: 41.54,
                },
                {
                    battleKey: 'leader-volkner',
                    x: 49.78,
                    y: 12.69,
                },
            ],
        },
    ],
};

export default SUNYSHORE_GYM;
