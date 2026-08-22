import { trainerSchool } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TRAINER_SCHOOL: Location = {
    name: "Trainers' School",
    map: trainerSchool,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'trainer-school',
    battles: [
        {
            battleKey: 'school-kid-harrison',
            metadata: [BattleMetadata.Optional],
            x: 76.7,
            y: 15.2,
        },
        {
            battleKey: 'school-kid-christine',
            metadata: [BattleMetadata.Optional],
            x: 90,
            y: 15.2,
        },
    ],
};

export default TRAINER_SCHOOL;
