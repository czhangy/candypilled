import { hearthomeGym } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_GYM: Location = {
    name: 'Hearthome Gym',
    map: hearthomeGym,
    mapAnchor: MapAnchor.Bottom,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'lass-molly',
            x: 35.7,
            y: 74,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-donny',
            x: 60.7,
            y: 74,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'school-kid-f-mackenzie',
            x: 21.4,
            y: 49.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'school-kid-m-chance',
            x: 74.9,
            y: 50.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-f-catherine',
            x: 39.2,
            y: 35.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-m-allen',
            x: 67.7,
            y: 37.2,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-fantina-fantina',
            x: 49.9,
            y: 17.4,
        },
    ],
};

export default HEARTHOME_GYM;
