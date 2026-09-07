import { route116 } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_116: Location = {
    name: 'Route 116',
    map: route116,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-116',
    battles: [
        {
            battleKey: 'youngster-joey',
            x: 12.45,
            y: 36.37,
        },
        {
            battleKey: 'bug-catcher-jose',
            x: 13.45,
            y: 86.68,
        },
        {
            battleKey: 'lass-janice',
            x: 22.51,
            y: 81.37,
        },
        {
            battleKey: 'hiker-clark',
            x: 36.45,
            y: 76.37,
        },
        {
            battleKey: 'school-kid-m-jerry',
            x: 31.45,
            y: 46.37,
        },
        {
            battleKey: 'school-kid-f-karen',
            x: 25.51,
            y: 21.37,
        },
    ],
};

export default ROUTE_116;
