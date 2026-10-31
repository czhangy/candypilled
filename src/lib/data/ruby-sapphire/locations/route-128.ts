import { route128 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_128: Location = {
    name: 'Route 128',
    map: route128,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-128',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'cooltrainer-m-ruben', x: 20.42, y: 20.86 },
        { battleKey: 'cooltrainer-f-alexa', x: 39.58, y: 23.36 },
        { battleKey: 'fisherman-wayne', x: 52.92, y: 70.86 },
        { battleKey: 'triathlete-swimmer-m-isaiah', x: 64.58, y: 60.86 },
        { battleKey: 'triathlete-swimmer-f-katelyn', x: 29.58, y: 85.86 },
    ],
};

export default ROUTE_128;
