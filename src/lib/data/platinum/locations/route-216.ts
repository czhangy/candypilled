import { route216 } from '@/lib/data/platinum/maps';
import { BattleMetadata, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_216: Location = {
    name: 'Route 216',
    map: route216,
    mapAnchor: MapAnchor.BottomRight,
    encountersKey: 'sinnoh-route-216',
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-blake',
            fieldCondition: FieldCondition.Hail,
            x: 69.8,
            y: 63,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-f-maria',
            fieldCondition: FieldCondition.Hail,
            x: 58.4,
            y: 83.6,
        },
        {
            metadata: [],
            battleKey: 'ace-trainer-snow-f-laura',
            fieldCondition: FieldCondition.Hail,
            x: 41.6,
            y: 77.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-m-edward',
            fieldCondition: FieldCondition.Hail,
            x: 27.6,
            y: 76.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'ace-trainer-snow-m-garrett',
            fieldCondition: FieldCondition.Hail,
            x: 11.5,
            y: 49.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-philip',
            fieldCondition: FieldCondition.Hail,
            x: 51,
            y: 25.9,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-f-kaitlyn',
            fieldCondition: FieldCondition.Hail,
            x: 58.2,
            y: 15.7,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-m-bradley',
            fieldCondition: FieldCondition.Hail,
            x: 63.2,
            y: 24.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'skier-f-andrea',
            fieldCondition: FieldCondition.Hail,
            x: 82.5,
            y: 32.8,
        },
    ],
};

export default ROUTE_216;
