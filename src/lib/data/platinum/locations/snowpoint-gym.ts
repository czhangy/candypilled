import { snowpointGym } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_GYM: Location = {
    name: 'Snowpoint Gym',
    map: snowpointGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'ace-trainer-snow-f-brenna',
            x: 21.35,
            y: 57.61,
        },
        {
            battleKey: 'ace-trainer-snow-m-isaiah',
            x: 83.26,
            y: 54.35,
        },
        {
            battleKey: 'ace-trainer-snow-m-sergio',
            x: 7.07,
            y: 44.84,
        },
        {
            battleKey: 'ace-trainer-snow-f-savannah',
            x: 97.54,
            y: 31.52,
        },
        {
            battleKey: 'ace-trainer-snow-f-alicia',
            x: 11.68,
            y: 21.47,
        },
        {
            battleKey: 'ace-trainer-snow-m-anton',
            x: 78.26,
            y: 11.14,
        },
        {
            battleKey: 'leader-candice',
            x: 50.07,
            y: 8.42,
        },
    ],
};

export default SNOWPOINT_GYM;
