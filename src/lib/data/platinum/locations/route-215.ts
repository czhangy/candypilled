import { route215 } from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_215: Location = {
    name: 'Route 215',
    map: route215,
    encountersKey: 'sinnoh-route-215',
    battles: [
        {
            battleKey: 'ruin-maniac-calvin',
            x: 14,
            y: 44,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'jogger-craig',
            x: 28.6,
            y: 53.4,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'black-belt-derek',
            x: 32.9,
            y: 25.2,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'black-belt-gregory',
            x: 47.5,
            y: 6.7,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'black-belt-nathaniel',
            x: 70.4,
            y: 19,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'jogger-scott',
            x: 81.7,
            y: 40.9,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'ace-trainer-f-maya',
            x: 75.6,
            y: 62.7,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'ace-trainer-m-dennis',
            x: 75.6,
            y: 72.1,
            fieldCondition: FieldCondition.Rain,
        },
    ],
};

export default ROUTE_215;
