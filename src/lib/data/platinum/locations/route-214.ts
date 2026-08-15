import { route214 } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_214: Location = {
    name: 'Route 214',
    map: route214,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'sinnoh-route-214',
    battles: [
        {
            metadata: [],
            battleKey: 'psychic-f-abigail',
            x: 45.1,
            y: 21.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'pi-carlos',
            x: 62.5,
            y: 39.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-brady',
            x: 72.9,
            y: 42.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'beauty-devon',
            x: 79.7,
            y: 52.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ruin-maniac-bryan',
            x: 20.9,
            y: 53.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'psychic-m-mitchell',
            x: 80,
            y: 58.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-jamal',
            x: 38.1,
            y: 66,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ruin-maniac-ronald',
            x: 45.1,
            y: 73.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-douglas',
            x: 80,
            y: 85.6,
        },
    ],
};

export default ROUTE_214;
