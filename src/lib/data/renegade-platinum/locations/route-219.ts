import { route219 } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-219',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Roark' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
    ],
    battles: [
        {
            battleKey: 'tuber-trenton',
            x: 36.04,
            y: 72.52,
        },
        {
            battleKey: 'tuber-mariel',
            x: 51.66,
            y: 72.52,
        },
    ],
};

export default ROUTE_219;
