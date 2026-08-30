import { route220 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_220: Location = {
    name: 'Route 220',
    map: route220,
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'sinnoh-route-220',
    battles: [
        {
            battleKey: 'swimmer-f-jessica',
            metadata: [BattleMetadata.Optional],
            x: 24.3,
            y: 28.7,
        },
        {
            battleKey: 'swimmer-f-erica',
            metadata: [BattleMetadata.Optional],
            x: 14.7,
            y: 34.9,
        },
        {
            battleKey: 'swimmer-m-adrian',
            metadata: [BattleMetadata.Optional],
            x: 39.9,
            y: 69.2,
        },
        {
            battleKey: 'swimmer-m-vincent',
            metadata: [BattleMetadata.Optional],
            x: 60.2,
            y: 47.7,
        },
        {
            battleKey: 'swimmer-f-katelyn',
            metadata: [BattleMetadata.Optional],
            x: 69.6,
            y: 22.4,
        },
        {
            battleKey: 'swimmer-f-claire',
            metadata: [BattleMetadata.Optional],
            x: 80.4,
            y: 47.5,
        },
        {
            battleKey: 'swimmer-m-erik',
            metadata: [BattleMetadata.Optional],
            x: 80.4,
            y: 66.1,
        },
    ],
};

export default ROUTE_220;
