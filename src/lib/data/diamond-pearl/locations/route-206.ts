import { route206 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_206: Location = {
    name: 'Route 206',
    map: route206,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'sinnoh-route-206',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-axel',
            x: 45.5,
            y: 18.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-megan',
            x: 35.7,
            y: 27,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-james',
            x: 51.4,
            y: 36,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-nicole',
            x: 41.6,
            y: 43.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-john',
            x: 49,
            y: 53.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-ryan',
            x: 38.9,
            y: 66.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-rachel',
            x: 36.1,
            y: 73.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-kayla',
            x: 57.8,
            y: 78.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'hiker-theodore',
            x: 73.6,
            y: 40.2,
        },
    ],
};

export default ROUTE_206;
