import { route206 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_206: Location = {
    name: 'Route 206',
    map: route206,
    encountersKey: 'sinnoh-route-206',
    battles: [
        {
            battleKey: 'cyclist-axel',
            metadata: [BattleMetadata.Optional],
            x: 45.5,
            y: 19.6,
        },
        {
            battleKey: 'cyclist-megan',
            metadata: [BattleMetadata.Optional],
            x: 35.9,
            y: 27.4,
        },
        {
            battleKey: 'hiker-theodore',
            metadata: [BattleMetadata.Optional],
            x: 73.4,
            y: 35.9,
        },
        {
            battleKey: 'cyclist-james',
            metadata: [BattleMetadata.Optional],
            x: 51.6,
            y: 36,
        },
        {
            battleKey: 'cyclist-nicole',
            metadata: [BattleMetadata.Optional],
            x: 36.3,
            y: 43.1,
        },
        {
            battleKey: 'cyclist-john',
            metadata: [BattleMetadata.Optional],
            x: 48.6,
            y: 53.2,
        },
        {
            battleKey: 'cyclist-ryan',
            metadata: [BattleMetadata.Optional],
            x: 39.1,
            y: 65.7,
        },
        {
            battleKey: 'cyclist-rachel',
            metadata: [BattleMetadata.Optional],
            x: 36.1,
            y: 72.8,
        },
        {
            battleKey: 'cyclist-kayla',
            metadata: [BattleMetadata.Optional],
            x: 57.8,
            y: 77.4,
        },
    ],
};

export default ROUTE_206;
