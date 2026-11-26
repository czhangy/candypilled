import {
    sunyshoreGymRoom1,
    sunyshoreGymRoom2,
    sunyshoreGymRoom3,
} from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
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
                    x: 36.67,
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
                    battleKey: 'school-kid-forrest',
                    x: 21.47,
                    y: 31.3,
                },
                {
                    battleKey: 'guitarist-jerry',
                    x: 84.22,
                    y: 55.4,
                },
                {
                    battleKey: 'poke-kid-meghan',
                    x: 71.67,
                    y: 17.9,
                },
            ],
        },
        {
            name: 'Room 3',
            map: sunyshoreGymRoom3,
            mapAnchor: MapAnchor.Center,
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Volkner',
                    slug: 'wild-charge',
                },
            ],
            battles: [
                {
                    battleKey: 'guitarist-lonnie',
                    x: 73.66,
                    y: 90,
                },
                {
                    battleKey: 'ace-trainer-destiny',
                    x: 16.34,
                    y: 89.7,
                },
                {
                    battleKey: 'guitarist-preston',
                    x: 11.57,
                    y: 12.6,
                },
                {
                    battleKey: 'ace-trainer-zachery',
                    x: 97.54,
                    y: 41.7,
                },
                {
                    battleKey: 'leader-volkner',
                    x: 49.78,
                    y: 12.6,
                },
            ],
        },
    ],
};

export default SUNYSHORE_GYM;
