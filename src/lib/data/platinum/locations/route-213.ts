import { route213 } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_213: Location = {
    name: 'Route 213',
    map: route213,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'sinnoh-route-213',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-f-chelsea',
            x: 67.1,
            y: 47.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-m-jared',
            x: 66.6,
            y: 54.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-kenneth',
            x: 26.5,
            y: 72.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'beauty-cyndy',
            x: 29.7,
            y: 47,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-haley',
            x: 68.1,
            y: 81.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'sailor-paul',
            x: 80.6,
            y: 85.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-evan',
            x: 88.9,
            y: 69.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-mary',
            x: 94.2,
            y: 69.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-sheltin',
            x: 58.8,
            y: 93.1,
        },
    ],
};

export default ROUTE_213;
