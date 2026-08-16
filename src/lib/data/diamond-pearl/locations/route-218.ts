import { route218 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'sinnoh-route-218',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-miguel',
            x: 46.1,
            y: 65.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-luc',
            x: 46.1,
            y: 46,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'sailor-skyler',
            x: 19.7,
            y: 30,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'guitarist-tony',
            x: 25.8,
            y: 52.9,
        },
    ],
};

export default ROUTE_218;
