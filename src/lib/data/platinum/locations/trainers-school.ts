import { trainersSchool } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const TRAINERS_SCHOOL: Location = {
    name: "Trainers' School",
    map: trainersSchool,
    battles: [
        {
            battleKey: 'school-kid-m-harrison',
            x: 76.7,
            y: 17.1,
        },
        {
            battleKey: 'school-kid-f-christine',
            x: 89.6,
            y: 16.6,
        },
    ],
};

export default TRAINERS_SCHOOL;
