import { route206 } from '@/lib/data/platinum/maps';
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
            x: 43.2,
            y: 21.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-megan',
            x: 31.6,
            y: 29.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-james',
            x: 49.8,
            y: 38,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-nicole',
            x: 54.3,
            y: 45.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-john',
            x: 47,
            y: 55.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-m-ryan',
            x: 35,
            y: 68.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-rachel',
            x: 32,
            y: 75.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'cyclist-f-kayla',
            x: 57.4,
            y: 80,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'hiker-theodore',
            x: 76.3,
            y: 42.1,
        },
    ],
};

export default ROUTE_206;
