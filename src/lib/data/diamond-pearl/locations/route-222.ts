import { route222 } from '@/lib/data/diamond-pearl/maps';
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
            x: 16.2,
            y: 43.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-alec',
            x: 26.6,
            y: 66.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-george',
            x: 34.9,
            y: 66.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'beauty-nicola',
            x: 37,
            y: 29.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-brett',
            x: 43.3,
            y: 69.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'fisherman-cole',
            x: 48.5,
            y: 69.5,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-f-holly',
            x: 53.7,
            y: 64.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'policeman-thomas',
            x: 64.5,
            y: 31.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'sailor-marc',
            x: 75.6,
            y: 40.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'tuber-m-conner',
            x: 79.8,
            y: 40.4,
        },
        {
            metadata: [],
            battleKey: 'sailor-luther',
            x: 81.8,
            y: 51.7,
        },
    ],
};

export default ROUTE_222;
