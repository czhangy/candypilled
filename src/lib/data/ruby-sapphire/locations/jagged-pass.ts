import { jaggedPass } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JAGGED_PASS: Location = {
    name: 'Jagged Pass',
    map: jaggedPass,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'jagged-pass',
    battles: [
        {
            battleKey: 'hiker-eric',
            x: 28.13,
            y: 39.52,
        },
        {
            battleKey: 'camper-ethan',
            x: 54.58,
            y: 48.35,
        },
        {
            battleKey: 'picnicker-diana',
            x: 44.79,
            y: 76.61,
        },
    ],
};

export default JAGGED_PASS;
