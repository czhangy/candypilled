import { route133 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_133: Location = {
    name: 'Route 133',
    map: route133,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-133',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'swimmer-m-franklin', x: 8.12, y: 10.86 },
        { battleKey: 'cooltrainer-m-warren', x: 9.38, y: 35.86 },
        { battleKey: 'bird-keeper-beck', x: 46.88, y: 40.86 },
        { battleKey: 'swimmer-f-debra', x: 86.88, y: 60.86 },
        { battleKey: 'swimmer-f-linda', x: 85.62, y: 60.86 },
    ],
};

export default ROUTE_133;
