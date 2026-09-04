import { route216 } from '@/lib/data/diamond-pearl/maps';
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
            x: 70.4,
            y: 56.4,
        },
        {
            battleKey: 'ace-trainer-snow-f-maria',
            fieldCondition: FieldCondition.Hail,
            x: 58.8,
            y: 84.3,
        },
        {
            battleKey: 'ace-trainer-snow-f-laura',
            fieldCondition: FieldCondition.Hail,
            x: 42.2,
            y: 59.3,
        },
        {
            battleKey: 'skier-m-edward',
            fieldCondition: FieldCondition.Hail,
            x: 24.5,
            y: 55.4,
        },
        {
            battleKey: 'ace-trainer-snow-m-garrett',
            fieldCondition: FieldCondition.Hail,
            x: 12,
            y: 31.4,
        },
        {
            battleKey: 'black-belt-philip',
            fieldCondition: FieldCondition.Hail,
            x: 51.6,
            y: 24.9,
        },
        {
            battleKey: 'skier-m-bradley',
            fieldCondition: FieldCondition.Hail,
            x: 65.2,
            y: 24.5,
        },
        {
            battleKey: 'skier-f-kaitlyn',
            fieldCondition: FieldCondition.Hail,
            x: 56.8,
            y: 2.4,
        },
        {
            battleKey: 'skier-f-andrea',
            fieldCondition: FieldCondition.Hail,
            x: 81.7,
            y: 21,
        },
    ],
};

export default ROUTE_216;
