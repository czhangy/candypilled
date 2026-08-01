import { route219 } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_219: Location = {
    name: 'Route 219',
    map: route219,
    encountersKey: 'sinnoh-route-219',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-m-trenton',
            x: 35.4,
            y: 74.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-f-mariel',
            x: 52.5,
            y: 74.1,
        },
    ],
};

export default ROUTE_219;
