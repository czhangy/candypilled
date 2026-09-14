import { route116 } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_116: Location = {
    name: 'Route 116',
    map: route116,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-116',
    battles: [
        {
            battleKey: 'bug-catcher-jose',
            x: 13.5,
            y: 86.72,
        },
        {
            battleKey: 'youngster-joey',
            x: 12.5,
            y: 36.72,
        },
        {
            battleKey: 'school-kid-f-karen',
            x: 22.5,
            y: 81.72,
        },
        {
            battleKey: 'hiker-clark',
            x: 36.5,
            y: 86.72,
        },
        {
            battleKey: 'youngster-johnson',
            x: 36.5,
            y: 66.72,
        },
        {
            battleKey: 'hiker-devan',
            x: 42.5,
            y: 66.72,
        },
        {
            battleKey: 'lady-sarah',
            x: 33.5,
            y: 41.72,
        },
        {
            battleKey: 'rich-boy-dawson',
            x: 33.5,
            y: 26.72,
        },
        {
            battleKey: 'school-kid-m-jerry',
            x: 28.5,
            y: 41.72,
        },
        {
            battleKey: 'lass-janice',
            x: 26.5,
            y: 31.72,
        },
    ],
};

export default ROUTE_116;
