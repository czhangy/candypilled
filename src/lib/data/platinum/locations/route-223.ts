import { route223 } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_223: Location = {
    name: 'Route 223',
    map: route223,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sinnoh-sea-route-223',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-miranda',
            x: 60.1,
            y: 90,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-aubree',
            x: 61.2,
            y: 83.7,
        },
        {
            metadata: [],
            battleKey: 'swimmer-m-oscar',
            x: 39,
            y: 70.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-paige',
            x: 48.3,
            y: 63.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-colton',
            x: 70.6,
            y: 63.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-ricardo',
            x: 39.2,
            y: 58,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-crystal',
            x: 58.7,
            y: 47.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-wesley',
            x: 17.3,
            y: 44,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'sailor-zachariah',
            x: 48.5,
            y: 36.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-gabrielle',
            x: 36.4,
            y: 26.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-f-cassandra',
            x: 51.7,
            y: 23.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-francisco',
            x: 92.3,
            y: 36.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'swimmer-m-troy',
            x: 49.9,
            y: 11.2,
        },
    ],
};

export default ROUTE_223;
