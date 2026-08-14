import { route217 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_217: Location = {
    name: 'Route 217',
    map: route217,
    encountersKey: 'sinnoh-route-217',
    battles: [
        {
            metadata: [],
            battleKey: 'ace-trainer-snow-m-dalton',
            fieldCondition: FieldCondition.Hail,
            x: 60.9,
            y: 89.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ninja-boy-antonio',
            fieldCondition: FieldCondition.Hail,
            x: 69.8,
            y: 75.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-m-shawn',
            fieldCondition: FieldCondition.Hail,
            x: 88.2,
            y: 72.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-f-madison',
            fieldCondition: FieldCondition.Hail,
            x: 12.2,
            y: 69.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ninja-boy-ethan',
            fieldCondition: FieldCondition.Hail,
            x: 9,
            y: 52.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-m-bjorn',
            fieldCondition: FieldCondition.Hail,
            x: 86.1,
            y: 32.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-f-lexie',
            fieldCondition: FieldCondition.Hail,
            x: 17,
            y: 27.4,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-luke',
            fieldCondition: FieldCondition.Hail,
            x: 12,
            y: 18.2,
        },
        {
            metadata: [],
            battleKey: 'ace-trainer-snow-f-olivia',
            fieldCondition: FieldCondition.Hail,
            x: 45.5,
            y: 9.4,
        },
    ],
};

export default ROUTE_217;
