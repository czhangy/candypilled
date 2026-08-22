import { route219 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-219',
    battles: [
        {
            battleKey: 'tuber-trenton',
            metadata: [BattleMetadata.Optional],
            x: 35.9,
            y: 72.3,
        },
        {
            battleKey: 'tuber-mariel',
            metadata: [BattleMetadata.Optional],
            x: 51.8,
            y: 72.3,
        },
    ],
};

export default ROUTE_219;
