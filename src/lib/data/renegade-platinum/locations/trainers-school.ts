import { trainersSchool } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TRAINERS_SCHOOL: Location = {
    name: "Trainers' School",
    map: trainersSchool,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'trainers-school',
    battles: [
        {
            battleKey: 'school-kid-harrison',
            metadata: [BattleMetadata.Optional],
            x: 76.7,
            y: 16.8,
        },
        {
            battleKey: 'school-kid-christine',
            metadata: [BattleMetadata.Optional],
            x: 90,
            y: 16.8,
        },
    ],
};

export default TRAINERS_SCHOOL;
