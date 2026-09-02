import { route218 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    encountersKey: 'sinnoh-route-218',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-miguel',
            x: 46.1,
            y: 65.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-luc',
            x: 46.1,
            y: 47,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'sailor-skyler',
            x: 19.6,
            y: 31.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'guitarist-tony',
            x: 25.7,
            y: 53.5,
        },
    ],
};

export default ROUTE_218;
