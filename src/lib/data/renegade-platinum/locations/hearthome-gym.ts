import {
    hearthomeGymRoom1,
    hearthomeGymRoom2,
    hearthomeGymRoom3,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    subareas: [
        {
            name: 'Room 1',
            map: hearthomeGymRoom1,
            battles: [
                {
                    battleKey: 'youngster-donny',
                    x: 77.5,
                    y: 51.7,
                },
                {
                    battleKey: 'lass-molly',
                    x: 23.3,
                    y: 51.7,
                },
            ],
        },
        {
            name: 'Room 2',
            map: hearthomeGymRoom2,
            battles: [
                {
                    battleKey: 'school-kid-chance',
                    x: 75.9,
                    y: 70.3,
                },
                {
                    battleKey: 'school-kid-mackenzie',
                    x: 12.8,
                    y: 60.7,
                },
                {
                    battleKey: 'ace-trainer-catherine',
                    x: 38.7,
                    y: 31.8,
                },
                {
                    battleKey: 'ace-trainer-allen',
                    x: 64.8,
                    y: 22.1,
                },
            ],
        },
        {
            name: 'Room 3',
            map: hearthomeGymRoom3,
            battles: [
                {
                    battleKey: 'leader-fantina',
                    x: 24.6,
                    y: 63.8,
                },
            ],
        },
    ],
};

export default HEARTHOME_GYM;
