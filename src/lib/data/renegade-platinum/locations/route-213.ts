import { route213 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'sinnoh-route-213',
    battles: [
        {
            battleKey: 'tuber-m-jared',
            metadata: [BattleMetadata.Optional],
            x: 66.1,
            y: 50.2,
        },
        {
            battleKey: 'tuber-f-chelsea',
            metadata: [BattleMetadata.Optional],
            x: 67.2,
            y: 42.5,
        },
        {
            battleKey: 'fisherman-kenneth',
            metadata: [BattleMetadata.Optional],
            x: 26.5,
            y: 70.3,
        },
        {
            battleKey: 'beauty-cyndy',
            metadata: [BattleMetadata.Optional],
            x: 29.8,
            y: 42.3,
        },
        {
            battleKey: 'swimmer-f-haley',
            metadata: [BattleMetadata.Optional],
            x: 65.1,
            y: 80,
        },
        {
            battleKey: 'swimmer-m-sheltin',
            metadata: [BattleMetadata.Optional],
            x: 53.6,
            y: 91.1,
        },
        {
            battleKey: 'sailor-paul',
            metadata: [BattleMetadata.Optional],
            x: 80.7,
            y: 84.4,
        },
        {
            battleKey: 'swimmer-f-mary',
            metadata: [BattleMetadata.Optional],
            x: 94.3,
            y: 66.1,
        },
        {
            battleKey: 'swimmer-m-evan',
            metadata: [BattleMetadata.Optional],
            x: 89.1,
            y: 66.1,
        },
    ],
};

export default ROUTE_213;
