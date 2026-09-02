import { snowpointGym } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_GYM: Location = {
    name: 'Snowpoint Gym',
    map: snowpointGym,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-sergio',
            x: 2.2,
            y: 68.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-f-brenna',
            x: 21.6,
            y: 54.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-isaiah',
            x: 64.1,
            y: 49.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-f-savannah',
            x: 92.4,
            y: 34.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-f-alicia',
            x: 26.3,
            y: 21.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-anton',
            x: 69.2,
            y: 18.1,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-candice',
            x: 50,
            y: 8.7,
        },
    ],
};

export default SNOWPOINT_GYM;
