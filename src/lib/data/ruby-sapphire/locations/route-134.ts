import { route134 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_134: Location = {
    name: 'Route 134',
    map: route134,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-134',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'swimmer-m-jack', x: 65.62, y: 23.36 },
        { battleKey: 'swimmer-f-laurel', x: 56.88, y: 13.36 },
        { battleKey: 'black-belt-hitoshi', x: 70.62, y: 40.86 },
        { battleKey: 'dragon-tamer-aaron', x: 51.88, y: 58.36 },
        { battleKey: 'bird-keeper-alex', x: 81.88, y: 35.86 },
    ],
};

export default ROUTE_134;
