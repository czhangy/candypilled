import { route216 } from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_216: Location = {
    name: 'Route 216',
    map: route216,
    encountersKey: 'sinnoh-route-216',
    battles: [
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-m-blake',
            fieldCondition: FieldCondition.Hail,
            x: 69.8,
            y: 63,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-f-maria',
            fieldCondition: FieldCondition.Hail,
            x: 58.4,
            y: 83.6,
        },
        {
            battleKey: 'ace-trainer-snow-f-laura',
            fieldCondition: FieldCondition.Hail,
            x: 41.6,
            y: 77.9,
        },
        {
            isOptional: true,
            battleKey: 'skier-m-edward',
            fieldCondition: FieldCondition.Hail,
            x: 27.6,
            y: 76.8,
        },
        {
            isOptional: true,
            battleKey: 'ace-trainer-snow-m-garrett',
            fieldCondition: FieldCondition.Hail,
            x: 11.5,
            y: 49.1,
        },
        {
            isOptional: true,
            battleKey: 'black-belt-philip',
            x: 51,
            y: 25.9,
        },
        {
            isOptional: true,
            battleKey: 'skier-f-kaitlyn',
            x: 58.2,
            y: 15.7,
        },
        {
            isOptional: true,
            battleKey: 'skier-m-bradley',
            x: 63.2,
            y: 24.8,
        },
        {
            isOptional: true,
            battleKey: 'skier-f-andrea',
            x: 82.5,
            y: 32.8,
        },
    ],
};

export default ROUTE_216;
