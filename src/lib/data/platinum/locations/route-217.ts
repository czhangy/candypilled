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
            x: 60.94,
            y: 88.27,
        },
        {
            battleKey: 'skier-m-shawn',
            fieldCondition: FieldCondition.Hail,
            x: 95.31,
            y: 68.54,
        },
        {
            battleKey: 'ninja-boy-matthew',
            fieldCondition: FieldCondition.Hail,
            x: 70.12,
            y: 74.35,
        },
        {
            battleKey: 'skier-f-madison',
            fieldCondition: FieldCondition.Hail,
            x: 10.74,
            y: 68.54,
        },
        {
            battleKey: 'ninja-boy-ethan',
            fieldCondition: FieldCondition.Hail,
            x: 7.62,
            y: 50.9,
        },
        {
            battleKey: 'skier-m-bjorn',
            fieldCondition: FieldCondition.Hail,
            x: 82.81,
            y: 31.1,
        },
        {
            battleKey: 'skier-f-lexie',
            fieldCondition: FieldCondition.Hail,
            x: 20.12,
            y: 31.1,
        },
        {
            battleKey: 'black-belt-luke',
            fieldCondition: FieldCondition.Hail,
            x: 10.74,
            y: 13.34,
        },
        {
            battleKey: 'ace-trainer-snow-f-olivia',
            fieldCondition: FieldCondition.Hail,
            x: 45.12,
            y: 8.65,
        },
    ],
};

export default ROUTE_217;
