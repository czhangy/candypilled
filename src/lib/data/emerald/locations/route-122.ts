import { route122 } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_122: Location = {
    name: 'Route 122',
    map: route122,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-122',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    transitions: [
        { height: 16, location: 'Route 121', width: 224, x: 35, y: 1.25 },
        {
            height: 16,
            location: 'Mt. Pyre',
            subarea: '1F',
            width: 16,
            x: 56.25,
            y: 73.75,
        },
        {
            height: 16,
            location: 'Route 123',
            subarea: 'East',
            width: 32,
            x: 50,
            y: 98.75,
        },
    ],
};

export default ROUTE_122;
