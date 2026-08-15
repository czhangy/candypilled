import { route214 } from '@/lib/data/diamond-pearl/maps';
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
            x: 51.8,
            y: 20.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'pi-carlos',
            x: 68,
            y: 37.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-brady',
            x: 78.2,
            y: 43.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'beauty-devon',
            x: 84.9,
            y: 49.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ruin-maniac-bryan',
            x: 28.2,
            y: 51.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'psychic-m-mitchell',
            x: 84.9,
            y: 57.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-jamal',
            x: 45.1,
            y: 63.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ruin-maniac-hunter',
            x: 51.4,
            y: 71.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'collector-douglas',
            x: 85.1,
            y: 82.6,
        },
    ],
};

export default ROUTE_214;
