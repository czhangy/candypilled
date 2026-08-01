import { route215 } from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_215: Location = {
    name: 'Route 215',
    map: route215,
    encountersKey: 'sinnoh-route-215',
    battles: [
        {
            battleKey: 'ruin-maniac::Calvin',
            x: 14.1,
            y: 56,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            battleKey: 'jogger::Craig',
            x: 23.5,
            y: 59,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            battleKey: 'black-belt::Derek',
            x: 32.9,
            y: 37.2,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            battleKey: 'black-belt::Gregory',
            x: 47.5,
            y: 18,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            battleKey: 'black-belt::Nathaniel',
            x: 70.5,
            y: 30,
            fieldCondition: FieldCondition.Rain,
        },
        {
            isOptional: true,
            battleKey: 'jogger::Scott',
            x: 80.9,
            y: 65,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'ace-trainer-f::Maya',
            x: 75.5,
            y: 75.7,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'ace-trainer-m::Dennis',
            x: 75.5,
            y: 85.2,
            fieldCondition: FieldCondition.Rain,
        },
    ],
};

export default ROUTE_215;
