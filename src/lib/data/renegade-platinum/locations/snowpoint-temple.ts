import {
    snowpointTemple1f,
    snowpointTempleB1f,
    snowpointTempleB2f,
    snowpointTempleB3f,
    snowpointTempleB4f,
    snowpointTempleB5f,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_TEMPLE: Location = {
    name: 'Snowpoint Temple',
    subareas: [
        {
            name: '1F',
            map: snowpointTemple1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'snowpoint-temple',
        },
        {
            name: 'B1F',
            map: snowpointTempleB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'snowpoint-temple',
        },
        {
            name: 'B2F',
            map: snowpointTempleB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'snowpoint-temple',
        },
        {
            name: 'B3F',
            map: snowpointTempleB3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'snowpoint-temple',
        },
        {
            name: 'B4F',
            map: snowpointTempleB4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'snowpoint-temple',
        },
        {
            name: 'B5F',
            map: snowpointTempleB5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'snowpoint-temple',
        },
    ],
};

export default SNOWPOINT_TEMPLE;
