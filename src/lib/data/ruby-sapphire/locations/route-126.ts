import { route126 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_126: Location = {
    name: 'Route 126',
    map: route126,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'hoenn-route-126-area',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'swimmer-m-barry', x: 69.3, y: 27.92 },
        { battleKey: 'swimmer-m-dean', x: 41.91, y: 79.25 },
        { battleKey: 'swimmer-f-brenda', x: 80.63, y: 55.41 },
        { battleKey: 'swimmer-f-nikki', x: 11.86, y: 61.63 },
    ],
};

export default ROUTE_126;
