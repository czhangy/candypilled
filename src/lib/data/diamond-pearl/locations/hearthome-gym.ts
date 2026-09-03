import { hearthomeGym } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    battles: [
        {
            battleKey: 'youngster-donny',
            x: 12.3,
            y: 73.5,
        },
        {
            battleKey: 'lass-molly',
            x: 35.2,
            y: 73.5,
        },
        {
            battleKey: 'camper-drew',
            x: 35.2,
            y: 51.4,
        },
        {
            battleKey: 'picnicker-cheyenne',
            x: 87.8,
            y: 51.4,
        },
        {
            battleKey: 'school-kid-m-chance',
            x: 61.4,
            y: 29.3,
        },
        {
            battleKey: 'school-kid-f-mackenzie',
            x: 84.4,
            y: 29.3,
        },
        {
            battleKey: 'ace-trainer-m-allen',
            x: 12.2,
            y: 5.1,
        },
        {
            battleKey: 'ace-trainer-f-catherine',
            x: 35.2,
            y: 5.1,
        },
        {
            battleKey: 'leader-fantina',
            x: 61.5,
            y: 4.9,
        },
    ],
};

export default HEARTHOME_GYM;
