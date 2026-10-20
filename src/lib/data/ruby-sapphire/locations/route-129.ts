import { route129 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_129: Location = {
    name: 'Route 129',
    map: route129,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-129',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'triathlete-swimmer-f-allison', x: 44.38, y: 23.36 },
        { battleKey: 'triathlete-swimmer-m-chase', x: 19.38, y: 58.36 },
        { battleKey: 'swimmer-m-reed', x: 35.62, y: 40.86 },
        { battleKey: 'swimmer-f-tisha', x: 11.88, y: 35.86 },
    ],
};

export default ROUTE_129;
