import { snowpointGym } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const SNOWPOINT_GYM: Location = {
    name: 'Snowpoint Gym',
    map: snowpointGym,
    battles: [
        {
            battleKey: 'ace-trainer-snow-f-alicia',
            x: 12.5,
            y: 13.7,
        },
        {
            battleKey: 'ace-trainer-snow-m-anton',
            x: 78.6,
            y: 2.9,
        },
        {
            battleKey: 'ace-trainer-snow-f-savannah',
            x: 97.8,
            y: 25.1,
        },
        {
            battleKey: 'ace-trainer-snow-m-isaiah',
            x: 83.3,
            y: 47.1,
        },
        {
            battleKey: 'ace-trainer-snow-m-sergio',
            x: 7.8,
            y: 39.7,
        },
        {
            battleKey: 'ace-trainer-snow-f-brenna',
            x: 22,
            y: 50.8,
        },
        {
            battleKey: 'leader-candice',
            x: 50.3,
            y: 2.9,
        },
    ],
};

export default SNOWPOINT_GYM;
