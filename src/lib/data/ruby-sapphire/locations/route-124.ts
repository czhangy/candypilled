import { route124 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_124: Location = {
    name: 'Route 124',
    map: route124,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-124-area',
    battles: [
        { battleKey: 'swimmer-f-grace', x: 61.8, y: 56.64 },
        {
            battleKey: 'sis-and-bro-rita-and-sam',
            x: 22.42,
            y: 55.5,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        { battleKey: 'swimmer-m-spencer', x: 73.05, y: 74.17 },
        { battleKey: 'swimmer-f-jenny', x: 61.88, y: 56.67 },
        { battleKey: 'swimmer-m-chad', x: 75.63, y: 92.95 },
        { battleKey: 'swimmer-m-roland', x: 41.81, y: 31.66 },
    ],
};

export default ROUTE_124;
