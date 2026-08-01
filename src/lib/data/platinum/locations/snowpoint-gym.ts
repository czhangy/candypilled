import { snowpointGym } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const SNOWPOINT_GYM: Location = {
    name: 'Snowpoint Gym',
    map: snowpointGym,
    battles: [
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-f::Brenna',
            x: 21.6,
            y: 57.8,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-m::Isaiah',
            x: 83.5,
            y: 54.2,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-m::Sergio',
            x: 7.3,
            y: 44.7,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-f::Savannah',
            x: 97.2,
            y: 31.4,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-f::Alicia',
            x: 11.8,
            y: 21.6,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-m::Anton',
            x: 78.4,
            y: 11.3,
        },
        {
            isBoss: true,
            battleKey: 'leader-candice::Candice',
            x: 50,
            y: 8.7,
        },
    ],
};

export default SNOWPOINT_GYM;
