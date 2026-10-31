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
        { battleKey: 'swimmer-m-barry', x: 69.38, y: 27.93 },
        { battleKey: 'swimmer-m-dean', x: 41.88, y: 79.18 },
        { battleKey: 'swimmer-f-brenda', x: 80.62, y: 55.43 },
        { battleKey: 'swimmer-f-nikki', x: 11.88, y: 61.68 },
    ],
};

export default ROUTE_126;
