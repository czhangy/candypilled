import { snowpointGym } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_GYM: Location = {
    name: 'Snowpoint Gym',
    map: snowpointGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'ace-trainer-snow-m-sergio',
            x: 2.31,
            y: 68.4,
        },
        {
            battleKey: 'ace-trainer-snow-f-brenna',
            x: 21.35,
            y: 54.5,
        },
        {
            battleKey: 'ace-trainer-snow-m-isaiah',
            x: 64.21,
            y: 49.9,
        },
        {
            battleKey: 'ace-trainer-snow-f-savannah',
            x: 92.78,
            y: 34.7,
        },
        {
            battleKey: 'ace-trainer-snow-f-alicia',
            x: 26.12,
            y: 21.1,
        },
        {
            battleKey: 'ace-trainer-snow-m-anton',
            x: 68.97,
            y: 18.1,
        },
        {
            battleKey: 'leader-candice',
            x: 49.93,
            y: 8.7,
        },
    ],
};

export default SNOWPOINT_GYM;
