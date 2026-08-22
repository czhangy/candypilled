import { route218 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'sinnoh-route-218',
    battles: [
        {
            battleKey: 'sailor-skyler',
            metadata: [BattleMetadata.Optional],
            x: 19.6,
            y: 31.4,
        },
        {
            battleKey: 'guitarist-tony',
            metadata: [BattleMetadata.Optional],
            x: 25.8,
            y: 53.5,
        },
        {
            battleKey: 'fisherman-luc',
            metadata: [BattleMetadata.Optional],
            x: 46.1,
            y: 47.2,
        },
        {
            battleKey: 'fisherman-miguel',
            metadata: [BattleMetadata.Optional],
            x: 46.1,
            y: 66,
        },
    ],
};

export default ROUTE_218;
