import { snowpointCity } from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { Location } from '@/lib/static/types';

const SNOWPOINT_CITY: Location = {
    name: 'Snowpoint City',
    map: snowpointCity,
    battles: [
        {
            battleKey:
                'ace-trainer-snow-m-aran-and-ace-trainer-snow-f-nephenee',
            customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
            x: 46.9,
            y: 9.4,
        },
    ],
};

export default SNOWPOINT_CITY;
