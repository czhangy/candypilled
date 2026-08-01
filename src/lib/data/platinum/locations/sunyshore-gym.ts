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
            battles: [
                {
                    battleKey: 'school-kid-f::Tiera',
                    x: 36.6,
                    y: 24.2,
                },
            ],
        },
        {
            name: 'Room 2',
            map: sunyshoreGymRoom2,
            battles: [
                {
                    battleKey: 'school-kid-m::Forrest',
                    x: 21.6,
                    y: 31.3,
                },
                {
                    battleKey: 'guitarist::Jerry',
                    x: 83.9,
                    y: 55.4,
                },
                {
                    isOptional: true,
                    battleKey: 'poke-kid::Meghan',
                    x: 71.4,
                    y: 17.9,
                },
            ],
        },
        {
            name: 'Room 3',
            map: sunyshoreGymRoom3,
            battles: [
                {
                    isOptional: true,
                    battleKey: 'guitarist::Lonnie',
                    x: 73.4,
                    y: 90,
                },
                {
                    battleKey: 'ace-trainer-f::Destiny',
                    x: 16.1,
                    y: 89.7,
                },
                {
                    battleKey: 'guitarist::Preston',
                    x: 11.3,
                    y: 12.6,
                },
                {
                    battleKey: 'ace-trainer-m::Zachery',
                    x: 97.3,
                    y: 41.7,
                },
                {
                    isBoss: true,
                    battleKey: 'leader-volkner::Volkner',
                    x: 49.6,
                    y: 12.6,
                },
            ],
        },
    ],
};

export default SUNYSHORE_GYM;
