import { route130 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_130: Location = {
    name: 'Route 130',
    map: route130,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-130',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'swimmer-f-katie', x: 85.63, y: 55.98 },
        { battleKey: 'swimmer-m-rodney', x: 9.38, y: 65.85 },
    ],
};

export default ROUTE_130;
