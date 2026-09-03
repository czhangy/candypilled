import { trainersSchool } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const TRAINERS_SCHOOL: Location = {
    name: "Trainers' School",
    map: trainersSchool,
    encountersKey: 'trainers-school',
    battles: [
        {
            battleKey: 'school-kid-harrison',
            x: 76.7,
            y: 16.8,
        },
        {
            battleKey: 'school-kid-christine',
            x: 90,
            y: 16.8,
        },
    ],
};

export default TRAINERS_SCHOOL;
