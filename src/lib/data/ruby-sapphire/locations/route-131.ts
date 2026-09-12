import { route131 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_131: Location = {
    name: 'Route 131',
    map: route131,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-131',
    battles: [
        { battleKey: 'swimmer-f-kara', x: 75.73, y: 58.43 },
        { battleKey: 'swimmer-m-herman', x: 60.73, y: 65.93 },
        { battleKey: 'swimmer-f-susie', x: 55.73, y: 70.93 },
        { battleKey: 'swimmer-m-richard', x: 29.06, y: 63.27 },
        {
            battleKey: 'sis-and-bro-reli-and-ian',
            x: 14.9,
            y: 40.93,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
    ],
};

export default ROUTE_131;
