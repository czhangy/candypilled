import {
    sunyshoreGymRoom1,
    sunyshoreGymRoom2,
    sunyshoreGymRoom3,
} from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SUNYSHORE_GYM: Location = {
    name: 'Sunyshore Gym',
    subareas: [
        {
            name: 'Room 1',
            map: sunyshoreGymRoom1,
            battles: [
                {
                    metadata: [],
                    battleKey: 'school-kid-f-tiera',
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
                    metadata: [],
                    battleKey: 'school-kid-m-forrest',
                    x: 21.6,
                    y: 31.3,
                },
                {
                    metadata: [],
                    battleKey: 'guitarist-jerry',
                    x: 83.9,
                    y: 55.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'poke-kid-meghan',
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
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'guitarist-lonnie',
                    x: 73.4,
                    y: 90,
                },
                {
                    metadata: [],
                    battleKey: 'ace-trainer-f-destiny',
                    x: 16.1,
                    y: 89.7,
                },
                {
                    metadata: [],
                    battleKey: 'guitarist-preston',
                    x: 11.3,
                    y: 12.6,
                },
                {
                    metadata: [],
                    battleKey: 'ace-trainer-m-zachery',
                    x: 97.3,
                    y: 41.7,
                },
                {
                    metadata: [BattleMetadata.Boss],
                    battleKey: 'leader-volkner-volkner',
                    x: 49.6,
                    y: 12.6,
                },
            ],
        },
    ],
};

export default SUNYSHORE_GYM;
