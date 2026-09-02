import { hearthomeGym } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-donny',
            x: 12.3,
            y: 73.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'lass-molly',
            x: 35.2,
            y: 73.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'camper-drew',
            x: 35.2,
            y: 51.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'picnicker-cheyenne',
            x: 87.8,
            y: 51.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'school-kid-m-chance',
            x: 61.4,
            y: 29.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'school-kid-f-mackenzie',
            x: 84.4,
            y: 29.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-m-allen',
            x: 12.2,
            y: 5.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-f-catherine',
            x: 35.2,
            y: 5.1,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-fantina',
            x: 61.5,
            y: 4.9,
        },
    ],
};

export default HEARTHOME_GYM;
