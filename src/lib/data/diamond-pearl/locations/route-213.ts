import { route213 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    encountersKey: 'sinnoh-route-213',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-f-chelsea',
            x: 67.3,
            y: 47,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-m-jared',
            x: 70,
            y: 53.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-kenneth',
            x: 26.6,
            y: 72.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'beauty-cyndy',
            x: 29.7,
            y: 46.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-haley',
            x: 66.8,
            y: 81.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'sailor-paul',
            x: 80.7,
            y: 85.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-evan',
            x: 89.1,
            y: 68.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-mary',
            x: 94.4,
            y: 68.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-sheltin',
            x: 59.3,
            y: 93.3,
        },
    ],
};

export default ROUTE_213;
