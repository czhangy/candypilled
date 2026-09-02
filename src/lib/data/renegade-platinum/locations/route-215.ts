import { route215 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_215: Location = {
    name: 'Route 215',
    map: route215,
    encountersKey: 'sinnoh-route-215',
    battles: [
        {
            battleKey: 'ruin-maniac-calvin',
            metadata: [],
            fieldCondition: FieldCondition.Rain,
            x: 14,
            y: 43.8,
        },
        {
            battleKey: 'jogger-craig',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Rain,
            x: 28.6,
            y: 53,
        },
        {
            battleKey: 'black-belt-gregory',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Rain,
            x: 32.9,
            y: 25.1,
        },
        {
            battleKey: 'black-belt-derek',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Rain,
            x: 47.5,
            y: 6.5,
        },
        {
            battleKey: 'black-belt-nathaniel',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Rain,
            x: 70.4,
            y: 18.8,
        },
        {
            battleKey: 'jogger-scott',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Rain,
            x: 81.8,
            y: 40.7,
        },
        {
            battleKey: 'ace-trainer-f-maya',
            metadata: [],
            fieldCondition: FieldCondition.Rain,
            x: 75.6,
            y: 62.6,
        },
        {
            battleKey: 'ace-trainer-m-dennis',
            metadata: [],
            fieldCondition: FieldCondition.Rain,
            x: 75.5,
            y: 72,
        },
    ],
};

export default ROUTE_215;
