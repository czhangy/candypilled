import { hearthomeGym } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    mapAnchor: MapAnchor.BottomLeft,
    battles: [
        {
            battleKey: 'youngster-donny',
            x: 12.26,
            y: 73.53,
        },
        {
            battleKey: 'lass-molly',
            x: 35.14,
            y: 73.53,
        },
        {
            battleKey: 'camper-drew',
            x: 35.14,
            y: 51.36,
        },
        {
            battleKey: 'picnicker-cheyenne',
            x: 87.69,
            y: 51.36,
        },
        {
            battleKey: 'school-kid-m-chance',
            x: 61.41,
            y: 29.24,
        },
        {
            battleKey: 'school-kid-f-mackenzie',
            x: 84.3,
            y: 29.24,
        },
        {
            battleKey: 'ace-trainer-m-allen',
            x: 12.26,
            y: 5.11,
        },
        {
            battleKey: 'ace-trainer-f-catherine',
            x: 35.14,
            y: 5.11,
        },
        {
            battleKey: 'leader-fantina',
            x: 61.41,
            y: 4.89,
        },
    ],
};

export default HEARTHOME_GYM;
