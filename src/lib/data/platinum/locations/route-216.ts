import { route216 } from '@/lib/data/platinum/maps';
import { EncounterMethod, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_216: Location = {
    name: 'Route 216',
    map: route216,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'sinnoh-route-216',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Candice' }],
    battles: [
        {
            battleKey: 'ace-trainer-snow-m-blake',
            fieldCondition: FieldCondition.Hail,
            x: 70.35,
            y: 56.45,
        },
        {
            battleKey: 'ace-trainer-snow-f-maria',
            fieldCondition: FieldCondition.Hail,
            x: 58.89,
            y: 84.57,
        },
        {
            battleKey: 'ace-trainer-snow-f-laura',
            fieldCondition: FieldCondition.Hail,
            x: 42.22,
            y: 65.82,
        },
        {
            battleKey: 'skier-m-edward',
            fieldCondition: FieldCondition.Hail,
            x: 24.51,
            y: 55.86,
        },
        {
            battleKey: 'ace-trainer-snow-m-garrett',
            fieldCondition: FieldCondition.Hail,
            x: 12.01,
            y: 31.45,
        },
        {
            battleKey: 'black-belt-philip',
            fieldCondition: FieldCondition.Hail,
            x: 51.6,
            y: 25.2,
        },
        {
            battleKey: 'skier-f-kaitlyn',
            fieldCondition: FieldCondition.Hail,
            x: 56.8,
            y: 2.73,
        },
        {
            battleKey: 'skier-m-bradley',
            fieldCondition: FieldCondition.Hail,
            x: 65.14,
            y: 24.61,
        },
        {
            battleKey: 'skier-f-andrea',
            fieldCondition: FieldCondition.Hail,
            x: 81.8,
            y: 21.48,
        },
    ],
};

export default ROUTE_216;
