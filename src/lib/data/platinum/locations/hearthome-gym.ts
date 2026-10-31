import { hearthomeGym } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            battleKey: 'lass-molly',
            x: 35.66,
            y: 73.98,
        },
        {
            battleKey: 'youngster-donny',
            x: 60.66,
            y: 73.98,
        },
        {
            battleKey: 'school-kid-f-mackenzie',
            x: 21.37,
            y: 49.87,
        },
        {
            battleKey: 'school-kid-m-chance',
            x: 74.83,
            y: 50.13,
        },
        {
            battleKey: 'ace-trainer-f-catherine',
            x: 39.23,
            y: 35.46,
        },
        {
            battleKey: 'ace-trainer-m-allen',
            x: 67.8,
            y: 37.12,
        },
        {
            battleKey: 'leader-fantina',
            x: 49.94,
            y: 17.47,
        },
    ],
};

export default HEARTHOME_GYM;
