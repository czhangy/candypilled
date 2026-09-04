import { hearthomeGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    battles: [
        {
            battleKey: 'lass-molly',
            x: 35.7,
            y: 74,
        },
        {
            battleKey: 'youngster-donny',
            x: 60.7,
            y: 74,
        },
        {
            battleKey: 'school-kid-f-mackenzie',
            x: 21.4,
            y: 49.9,
        },
        {
            battleKey: 'school-kid-m-chance',
            x: 74.9,
            y: 50.3,
        },
        {
            battleKey: 'ace-trainer-f-catherine',
            x: 39.2,
            y: 35.5,
        },
        {
            battleKey: 'ace-trainer-m-allen',
            x: 67.7,
            y: 37.2,
        },
        {
            battleKey: 'leader-fantina',
            x: 49.9,
            y: 17.4,
        },
    ],
};

export default HEARTHOME_GYM;
