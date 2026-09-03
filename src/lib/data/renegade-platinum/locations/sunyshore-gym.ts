import {
    sunyshoreGymRoom1,
    sunyshoreGymRoom2,
    sunyshoreGymRoom3,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const SUNYSHORE_GYM: Location = {
    name: 'Sunyshore Gym',
    subareas: [
        {
            name: 'Room 1',
            map: sunyshoreGymRoom1,
            battles: [
                {
                    battleKey: 'school-kid-tiera',
                    x: 36.9,
                    y: 11.2,
                },
            ],
        },
        {
            name: 'Room 2',
            map: sunyshoreGymRoom2,
            battles: [
                {
                    battleKey: 'school-kid-forrest',
                    x: 22.1,
                    y: 12.9,
                },
                {
                    battleKey: 'guitarist-jerry',
                    x: 84.1,
                    y: 43.3,
                },
                {
                    battleKey: 'poke-kid-meghan',
                    x: 71.7,
                    y: 8.1,
                },
            ],
        },
        {
            name: 'Room 3',
            map: sunyshoreGymRoom3,
            battles: [
                {
                    battleKey: 'guitarist-lonnie',
                    x: 73.9,
                    y: 86.6,
                },
                {
                    battleKey: 'ace-trainer-destiny',
                    x: 17.9,
                    y: 86.3,
                },
                {
                    battleKey: 'guitarist-preston',
                    x: 13,
                    y: 3.3,
                },
                {
                    battleKey: 'ace-trainer-zachery',
                    x: 97.2,
                    y: 32.3,
                },
                {
                    battleKey: 'leader-volkner',
                    x: 50.9,
                    y: 3.1,
                },
            ],
        },
    ],
};

export default SUNYSHORE_GYM;
