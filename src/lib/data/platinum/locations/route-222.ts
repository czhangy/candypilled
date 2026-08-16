import { route222 } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_222: Location = {
    name: 'Route 222',
    map: route222,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-222',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'rich-boy-trey',
            x: 18.9,
            y: 48.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-alec',
            x: 29.3,
            y: 67.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-george',
            x: 37.7,
            y: 67.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'beauty-nicola',
            x: 39.8,
            y: 35.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-brett',
            x: 46.1,
            y: 70.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-cole',
            x: 51.3,
            y: 70.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-f-holly',
            x: 56.6,
            y: 66,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'policeman-thomas',
            x: 71.1,
            y: 38.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'sailor-marc',
            x: 78.6,
            y: 45.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-m-conner',
            x: 82.7,
            y: 45.7,
        },
        {
            metadata: [],
            battleKey: 'sailor-luther',
            x: 84.8,
            y: 55.8,
        },
    ],
};

export default ROUTE_222;
