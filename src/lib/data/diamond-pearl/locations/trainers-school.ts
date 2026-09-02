import { trainersSchool } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TRAINERS_SCHOOL: Location = {
    name: "Trainers' School",
    map: trainersSchool,
    battles: [
        {
            battleKey: 'school-kid-m-harrison',
            metadata: [BattleMetadata.Optional],
            x: 76.7,
            y: 15.2,
        },
        {
            battleKey: 'school-kid-f-christine',
            metadata: [BattleMetadata.Optional],
            x: 90,
            y: 15.2,
        },
    ],
};

export default TRAINERS_SCHOOL;
