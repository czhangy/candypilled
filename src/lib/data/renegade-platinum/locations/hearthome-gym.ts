import { hearthomeGym } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    battles: [
        {
            battleKey: 'lass-molly',
            x: 35.3,
            y: 73.9,
        },
        {
            battleKey: 'youngster-donny',
            x: 60.7,
            y: 74,
        },
        {
            battleKey: 'school-kid-mackenzie',
            x: 21.2,
            y: 49.8,
        },
        {
            battleKey: 'school-kid-chance',
            x: 74.8,
            y: 50.2,
        },
        {
            battleKey: 'ace-trainer-catherine',
            x: 39.1,
            y: 35.4,
        },
        {
            battleKey: 'ace-trainer-allen',
            x: 67.6,
            y: 37,
        },
        {
            battleKey: 'leader-fantina',
            x: 49.8,
            y: 17.4,
        },
    ],
};

export default HEARTHOME_GYM;
