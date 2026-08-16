import { route201 } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_201: Location = {
    name: 'Route 201',
    map: route201,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-201',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-barry-1',
            x: 27.5,
            y: 64,
        },
    ],
};

export default ROUTE_201;
