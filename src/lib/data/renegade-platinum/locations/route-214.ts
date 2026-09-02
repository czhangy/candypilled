import { route214 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_214: Location = {
    name: 'Route 214',
    map: route214,
    encountersKey: 'sinnoh-route-214',
    battles: [
        {
            battleKey: 'psychic-f-abigail',
            metadata: [],
            x: 54.9,
            y: 20.8,
        },
        {
            battleKey: 'pi-carlos',
            metadata: [BattleMetadata.Optional],
            x: 70.3,
            y: 37.6,
        },
        {
            battleKey: 'collector-brady',
            metadata: [BattleMetadata.Optional],
            x: 79.7,
            y: 46.9,
        },
        {
            battleKey: 'beauty-devon',
            metadata: [BattleMetadata.Optional],
            x: 85.7,
            y: 50,
        },
        {
            battleKey: 'psychic-m-mitchell',
            metadata: [BattleMetadata.Optional],
            x: 85.9,
            y: 56.4,
        },
        {
            battleKey: 'ruin-maniac-bryan',
            metadata: [BattleMetadata.Optional],
            x: 33,
            y: 53.2,
        },
        {
            battleKey: 'collector-jamal',
            metadata: [BattleMetadata.Optional],
            x: 48.4,
            y: 63.6,
        },
        {
            battleKey: 'ruin-maniac-ronald',
            metadata: [BattleMetadata.Optional],
            x: 54.7,
            y: 72,
        },
        {
            battleKey: 'collector-douglas',
            metadata: [BattleMetadata.Optional],
            x: 85.9,
            y: 82.4,
        },
    ],
};

export default ROUTE_214;
