import { snowpointGym } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_GYM: Location = {
    name: 'Snowpoint Gym',
    map: snowpointGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-f-brenna',
            x: 21.6,
            y: 57.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-isaiah',
            x: 83.5,
            y: 54.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-sergio',
            x: 7.3,
            y: 44.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-f-savannah',
            x: 97.2,
            y: 31.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-f-alicia',
            x: 11.8,
            y: 21.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-anton',
            x: 78.4,
            y: 11.3,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-candice-candice',
            x: 50,
            y: 8.7,
        },
    ],
};

export default SNOWPOINT_GYM;
