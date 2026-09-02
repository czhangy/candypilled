import { route206 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_206: Location = {
    name: 'Route 206',
    map: route206,
    encountersKey: 'sinnoh-route-206',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-axel',
            x: 45.6,
            y: 19.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-megan',
            x: 36,
            y: 27.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-james',
            x: 51.7,
            y: 35.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-nicole',
            x: 36.4,
            y: 43,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-john',
            x: 48.9,
            y: 53.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-ryan',
            x: 39.2,
            y: 65.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-rachel',
            x: 36.4,
            y: 72.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-kayla',
            x: 57.9,
            y: 77.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'hiker-theodore',
            x: 73.5,
            y: 35.9,
        },
    ],
};

export default ROUTE_206;
