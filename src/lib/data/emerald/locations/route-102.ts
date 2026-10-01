import { route102 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_102: Location = {
    name: 'Route 102',
    map: route102,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-102',
    methodSplits: [
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.Surf, split: 'Winona' },
        { method: EncounterMethod.Grass, split: 'Roxanne' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'youngster-calvin',
            x: 66.94,
            y: 71.67,
        },
        {
            battleKey: 'bug-catcher-rick',
            x: 51.06,
            y: 76.36,
        },
        {
            battleKey: 'youngster-allen',
            x: 38.94,
            y: 21.98,
        },
        {
            battleKey: 'lass-tiana',
            x: 16.94,
            y: 36.36,
        },
    ],
};

export default ROUTE_102;
