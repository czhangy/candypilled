import { route216 } from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_216: Location = {
    name: 'Route 216',
    map: route216,
    encountersKey: 'sinnoh-route-216',
    battles: [
        {
            battleKey: 'ace-trainer-snow-m-blake',
            fieldCondition: FieldCondition.Hail,
            x: 70.3,
            y: 56.5,
        },
        {
            battleKey: 'ace-trainer-snow-f-maria',
            fieldCondition: FieldCondition.Hail,
            x: 58.9,
            y: 84.4,
        },
        {
            battleKey: 'ace-trainer-snow-f-laura',
            fieldCondition: FieldCondition.Hail,
            x: 42.2,
            y: 65.7,
        },
        {
            battleKey: 'skier-m-edward',
            fieldCondition: FieldCondition.Hail,
            x: 24.5,
            y: 55.6,
        },
        {
            battleKey: 'ace-trainer-snow-m-garrett',
            fieldCondition: FieldCondition.Hail,
            x: 12,
            y: 31.3,
        },
        {
            battleKey: 'black-belt-philip',
            fieldCondition: FieldCondition.Hail,
            x: 51.6,
            y: 25.3,
        },
        {
            battleKey: 'skier-f-kaitlyn',
            fieldCondition: FieldCondition.Hail,
            x: 56.7,
            y: 2.3,
        },
        {
            battleKey: 'skier-m-bradley',
            fieldCondition: FieldCondition.Hail,
            x: 65.1,
            y: 24.2,
        },
        {
            battleKey: 'skier-f-andrea',
            fieldCondition: FieldCondition.Hail,
            x: 81.8,
            y: 21,
        },
    ],
};

export default ROUTE_216;
