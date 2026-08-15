import { route215 } from '@/lib/data/platinum/maps';
import { BattleMetadata, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_215: Location = {
    name: 'Route 215',
    map: route215,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-215',
    battles: [
        {
            metadata: [],
            battleKey: 'ruin-maniac-calvin',
            x: 14.1,
            y: 56,
            fieldCondition: FieldCondition.Rain,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'jogger-craig',
            x: 23.5,
            y: 59,
            fieldCondition: FieldCondition.Rain,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-derek',
            x: 32.9,
            y: 37.2,
            fieldCondition: FieldCondition.Rain,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-gregory',
            x: 47.5,
            y: 18,
            fieldCondition: FieldCondition.Rain,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-nathaniel',
            x: 70.5,
            y: 30,
            fieldCondition: FieldCondition.Rain,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'jogger-scott',
            x: 80.9,
            y: 65,
            fieldCondition: FieldCondition.Rain,
        },
        {
            metadata: [],
            battleKey: 'ace-trainer-f-maya',
            x: 75.5,
            y: 75.7,
            fieldCondition: FieldCondition.Rain,
        },
        {
            metadata: [],
            battleKey: 'ace-trainer-m-dennis',
            x: 75.5,
            y: 85.2,
            fieldCondition: FieldCondition.Rain,
        },
    ],
};

export default ROUTE_215;
