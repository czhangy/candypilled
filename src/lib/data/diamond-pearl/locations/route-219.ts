import { route219 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-219',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-m-trenton',
            x: 43.8,
            y: 73.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-f-mariel',
            x: 51.9,
            y: 73.3,
        },
    ],
};

export default ROUTE_219;
