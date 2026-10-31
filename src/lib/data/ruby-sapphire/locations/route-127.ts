import { route127 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_127: Location = {
    name: 'Route 127',
    map: route127,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'hoenn-route-127',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'bird-keeper-byron', x: 15.62, y: 22.93 },
        { battleKey: 'triathlete-swimmer-f-connor', x: 56.88, y: 55.43 },
        { battleKey: 'fisherman-jonah', x: 66.88, y: 16.68 },
        { battleKey: 'fisherman-roger', x: 65.62, y: 31.68 },
        { battleKey: 'fisherman-henry', x: 80.62, y: 24.18 },
        { battleKey: 'triathlete-swimmer-m-caleb', x: 23.12, y: 85.43 },
        { battleKey: 'black-belt-koji', x: 79.38, y: 79.18 },
    ],
};

export default ROUTE_127;
