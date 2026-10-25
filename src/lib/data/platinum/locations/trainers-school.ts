import { trainersSchool } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TRAINERS_SCHOOL: Location = {
    name: "Trainers' School",
    map: trainersSchool,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'school-kid-m-harrison',
            x: 76.77,
            y: 16.46,
        },
        {
            battleKey: 'school-kid-f-christine',
            x: 90.1,
            y: 16.46,
        },
    ],
};

export default TRAINERS_SCHOOL;
