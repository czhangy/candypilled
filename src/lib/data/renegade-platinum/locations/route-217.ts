import { route217 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_217: Location = {
    name: 'Route 217',
    map: route217,
    encountersKey: 'sinnoh-route-217',
    battles: [
        {
            battleKey: 'ace-trainer-snow-m-dalton',
            metadata: [],
            fieldCondition: FieldCondition.Hail,
            x: 61.1,
            y: 88.3,
        },
        {
            battleKey: 'skier-f-madison',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Hail,
            x: 10.9,
            y: 68.6,
        },
        {
            battleKey: 'ninja-boy-ethan',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Hail,
            x: 7.8,
            y: 50.9,
        },
        {
            battleKey: 'skier-f-lexie',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Hail,
            x: 20.3,
            y: 31.1,
        },
        {
            battleKey: 'black-belt-luke',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Hail,
            x: 10.9,
            y: 13.3,
        },
        {
            battleKey: 'skier-m-shawn',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Hail,
            x: 95.3,
            y: 68.6,
        },
        {
            battleKey: 'ninja-boy-matthew',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Hail,
            x: 70.3,
            y: 74.4,
        },
        {
            battleKey: 'skier-m-bjorn',
            metadata: [BattleMetadata.Optional],
            fieldCondition: FieldCondition.Hail,
            x: 82.8,
            y: 31.1,
        },
        {
            battleKey: 'ace-trainer-snow-f-olivia',
            metadata: [],
            fieldCondition: FieldCondition.Hail,
            x: 45.3,
            y: 8.6,
        },
    ],
};

export default ROUTE_217;
