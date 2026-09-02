import { route220 } from '@/lib/data/platinum/maps';
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
            x: 17.1,
            y: 30.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-erica',
            x: 19,
            y: 36.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-adrian',
            x: 40,
            y: 70.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-vincent',
            x: 56.5,
            y: 48.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-katelyn',
            x: 62.2,
            y: 27.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-claire',
            x: 80.5,
            y: 48.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-erik',
            x: 80.5,
            y: 66.3,
        },
    ],
};

export default ROUTE_220;
