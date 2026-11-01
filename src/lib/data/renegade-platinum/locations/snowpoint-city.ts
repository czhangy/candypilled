import { snowpointCity } from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_CITY: Location = {
    name: 'Snowpoint City',
    map: snowpointCity,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: false,
            method: 'Gift from NPC',
            slug: 'super-rod',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from Candice',
            slug: 'avalanche',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from Candice',
            slug: 'rock-climb',
        },
    ],
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
