import { route116 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_116: Location = {
    name: 'Route 116',
    map: route116,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-116',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Roxanne' }],
    battles: [
        {
            battleKey: 'youngster-joey',
            x: 12.5,
            y: 36.72,
        },
        {
            battleKey: 'bug-catcher-jose',
            x: 13.5,
            y: 86.72,
        },
        {
            battleKey: 'lass-janice',
            x: 22.5,
            y: 81.72,
        },
        {
            battleKey: 'hiker-clark',
            x: 36.5,
            y: 76.72,
        },
        {
            battleKey: 'school-kid-m-jerry',
            x: 31.5,
            y: 46.72,
        },
        {
            battleKey: 'school-kid-f-karen',
            x: 25.5,
            y: 21.72,
        },
    ],
};

export default ROUTE_116;
