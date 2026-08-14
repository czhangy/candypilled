import { route220 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_220: Location = {
    name: 'Route 220',
    map: route220,
    encountersKey: 'sinnoh-sea-route-220',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-jessica',
            x: 16.6,
            y: 29.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-erica',
            x: 19.5,
            y: 35.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-adrian',
            x: 40.1,
            y: 69.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-vincent',
            x: 51.4,
            y: 47.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-katelyn',
            x: 64.7,
            y: 22.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-claire',
            x: 80.7,
            y: 47.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-erik',
            x: 80.6,
            y: 66.2,
        },
    ],
};

export default ROUTE_220;
