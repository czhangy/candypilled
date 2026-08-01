import { route217 } from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_217: Location = {
    name: 'Route 217',
    map: route217,
    encountersKey: 'sinnoh-route-217',
    battles: [
        {
            battleKey: 'ace-trainer-snow-m-dalton',
            fieldCondition: FieldCondition.Hail,
            x: 61.1,
            y: 89.1,
        },
        {
            isOptional: true,
            battleKey: 'skier-m-shawn',
            fieldCondition: FieldCondition.Hail,
            x: 88,
            y: 76,
        },
        {
            isOptional: true,
            battleKey: 'ninja-boy-matthew',
            fieldCondition: FieldCondition.Hail,
            x: 69,
            y: 75,
        },
        {
            isOptional: true,
            battleKey: 'skier-f-madison',
            fieldCondition: FieldCondition.Hail,
            x: 12,
            y: 69.4,
        },
        {
            isOptional: true,
            battleKey: 'ninja-boy-ethan',
            fieldCondition: FieldCondition.Hail,
            x: 9,
            y: 51.3,
        },
        {
            isOptional: true,
            battleKey: 'skier-m-bjorn',
            fieldCondition: FieldCondition.Hail,
            x: 81.9,
            y: 33.2,
        },
        {
            isOptional: true,
            battleKey: 'skier-f-lexie',
            fieldCondition: FieldCondition.Hail,
            x: 18.1,
            y: 32,
        },
        {
            isOptional: true,
            battleKey: 'black-belt-luke',
            fieldCondition: FieldCondition.Hail,
            x: 12.4,
            y: 16.8,
        },
        {
            battleKey: 'ace-trainer-snow-f-olivia',
            fieldCondition: FieldCondition.Hail,
            x: 45.5,
            y: 9.4,
        },
    ],
};

export default ROUTE_217;
