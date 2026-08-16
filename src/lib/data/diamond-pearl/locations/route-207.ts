import { route207 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_207: Location = {
    name: 'Route 207',
    map: route207,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-207',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'picnicker-lauren',
            x: 50.9,
            y: 22.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'camper-anthony',
            x: 50.9,
            y: 39.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'hiker-justin',
            x: 74.2,
            y: 36.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-austin',
            x: 63.7,
            y: 69.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'hiker-kevin',
            x: 49.2,
            y: 49.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'battle-girl-helen',
            x: 79.5,
            y: 54.9,
        },
    ],
};

export default ROUTE_207;
