import { snowpointGym } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_GYM: Location = {
    name: 'Snowpoint Gym',
    map: snowpointGym,
    battles: [
        {
            battleKey: 'ace-trainer-snow-f-alicia',
            metadata: [BattleMetadata.Optional],
            x: 12.5,
            y: 13.7,
        },
        {
            battleKey: 'ace-trainer-snow-m-anton',
            metadata: [BattleMetadata.Optional],
            x: 78.6,
            y: 2.9,
        },
        {
            battleKey: 'ace-trainer-snow-f-savannah',
            metadata: [BattleMetadata.Optional],
            x: 97.8,
            y: 25.1,
        },
        {
            battleKey: 'ace-trainer-snow-m-isaiah',
            metadata: [BattleMetadata.Optional],
            x: 83.3,
            y: 47.1,
        },
        {
            battleKey: 'ace-trainer-snow-m-sergio',
            metadata: [BattleMetadata.Optional],
            x: 7.8,
            y: 39.7,
        },
        {
            battleKey: 'ace-trainer-snow-f-brenna',
            metadata: [BattleMetadata.Optional],
            x: 22,
            y: 50.8,
        },
        {
            battleKey: 'leader-candice',
            metadata: [BattleMetadata.Boss],
            x: 50.3,
            y: 2.9,
        },
    ],
};

export default SNOWPOINT_GYM;
