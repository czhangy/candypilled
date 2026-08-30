import {
    sunyshoreGymRoom1,
    sunyshoreGymRoom2,
    sunyshoreGymRoom3,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
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
                    battleKey: 'school-kid-tiera',
                    metadata: [],
                    x: 36.9,
                    y: 11.2,
                },
            ],
        },
        {
            name: 'Room 2',
            map: sunyshoreGymRoom2,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'school-kid-forrest',
                    metadata: [],
                    x: 22.1,
                    y: 12.9,
                },
                {
                    battleKey: 'guitarist-jerry',
                    metadata: [],
                    x: 84.1,
                    y: 43.3,
                },
                {
                    battleKey: 'poke-kid-meghan',
                    metadata: [BattleMetadata.Optional],
                    x: 71.7,
                    y: 8.1,
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
                    metadata: [BattleMetadata.Optional],
                    x: 73.9,
                    y: 86.6,
                },
                {
                    battleKey: 'ace-trainer-destiny',
                    metadata: [],
                    x: 17.9,
                    y: 86.3,
                },
                {
                    battleKey: 'guitarist-preston',
                    metadata: [],
                    x: 13,
                    y: 3.3,
                },
                {
                    battleKey: 'ace-trainer-zachery',
                    metadata: [],
                    x: 97.2,
                    y: 32.3,
                },
                {
                    battleKey: 'leader-volkner',
                    metadata: [BattleMetadata.Boss],
                    x: 50.9,
                    y: 3.1,
                },
            ],
        },
    ],
};

export default SUNYSHORE_GYM;
