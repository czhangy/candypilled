import { route217 } from '@/lib/data/diamond-pearl/maps';
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
            y: 88.3,
        },
        {
            battleKey: 'ninja-boy-antonio',
            fieldCondition: FieldCondition.Hail,
            x: 70.1,
            y: 74.4,
        },
        {
            battleKey: 'skier-m-shawn',
            fieldCondition: FieldCondition.Hail,
            x: 95.3,
            y: 68.6,
        },
        {
            battleKey: 'skier-f-madison',
            fieldCondition: FieldCondition.Hail,
            x: 10.9,
            y: 68.6,
        },
        {
            battleKey: 'ninja-boy-ethan',
            fieldCondition: FieldCondition.Hail,
            x: 7.8,
            y: 50.9,
        },
        {
            battleKey: 'skier-m-bjorn',
            fieldCondition: FieldCondition.Hail,
            x: 82.6,
            y: 31.1,
        },
        {
            battleKey: 'skier-f-lexie',
            fieldCondition: FieldCondition.Hail,
            x: 20.1,
            y: 31,
        },
        {
            battleKey: 'black-belt-luke',
            fieldCondition: FieldCondition.Hail,
            x: 10.7,
            y: 13.4,
        },
        {
            battleKey: 'ace-trainer-snow-f-olivia',
            fieldCondition: FieldCondition.Hail,
            x: 45.1,
            y: 8.6,
        },
    ],
};

export default ROUTE_217;
