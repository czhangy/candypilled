import { route216 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_216: Location = {
    name: 'Route 216',
    map: route216,
    encountersKey: 'sinnoh-route-216',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-blake',
            fieldCondition: FieldCondition.Hail,
            x: 70.4,
            y: 62.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-f-maria',
            fieldCondition: FieldCondition.Hail,
            x: 58.9,
            y: 83.2,
        },
        {
            metadata: [],
            battleKey: 'ace-trainer-snow-f-laura',
            fieldCondition: FieldCondition.Hail,
            x: 42.2,
            y: 72.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-m-edward',
            fieldCondition: FieldCondition.Hail,
            x: 27.3,
            y: 71.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-garrett',
            fieldCondition: FieldCondition.Hail,
            x: 12.1,
            y: 48.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-philip',
            x: 51.6,
            y: 26,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-m-bradley',
            x: 60.5,
            y: 25.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-f-kaitlyn',
            x: 61,
            y: 15.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-f-andrea',
            x: 81.8,
            y: 28.6,
        },
    ],
};

export default ROUTE_216;
