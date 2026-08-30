import { route223 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_223: Location = {
    name: 'Route 223',
    map: route223,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'route-223',
    battles: [
        {
            battleKey: 'swimmer-f-miranda',
            metadata: [BattleMetadata.Optional],
            x: 48.2,
            y: 90.1,
        },
        {
            battleKey: 'swimmer-f-aubree',
            metadata: [BattleMetadata.Optional],
            x: 60.9,
            y: 83.8,
        },
        {
            battleKey: 'swimmer-m-oscar',
            metadata: [],
            x: 38.9,
            y: 70.5,
        },
        {
            battleKey: 'swimmer-f-paige',
            metadata: [BattleMetadata.Optional],
            x: 48.2,
            y: 63.4,
        },
        {
            battleKey: 'swimmer-m-colton',
            metadata: [BattleMetadata.Optional],
            x: 70.5,
            y: 63.4,
        },
        {
            battleKey: 'swimmer-m-ricardo',
            metadata: [BattleMetadata.Optional],
            x: 38.9,
            y: 58,
        },
        {
            battleKey: 'swimmer-f-crystal',
            metadata: [BattleMetadata.Optional],
            x: 51.6,
            y: 47,
        },
        {
            battleKey: 'swimmer-m-wesley',
            metadata: [BattleMetadata.Optional],
            x: 17,
            y: 44,
        },
        {
            battleKey: 'sailor-zachariah',
            metadata: [BattleMetadata.Optional],
            x: 48.4,
            y: 36.7,
        },
        {
            battleKey: 'swimmer-f-gabrielle',
            metadata: [BattleMetadata.Optional],
            x: 36.1,
            y: 26.7,
        },
        {
            battleKey: 'swimmer-f-cassandra',
            metadata: [BattleMetadata.Optional],
            x: 73.8,
            y: 21.9,
        },
        {
            battleKey: 'swimmer-m-troy',
            metadata: [BattleMetadata.Optional],
            x: 58.2,
            y: 11.1,
        },
    ],
};

export default ROUTE_223;
