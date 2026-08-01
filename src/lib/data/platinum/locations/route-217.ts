import { route217 } from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_217: Location = {
    name: 'Route 217',
    map: route217,
    encountersKey: 'sinnoh-route-217',
    battles: [
        {
            battleKey: 'ace-trainer-snow-m::Dalton',
            fieldCondition: FieldCondition.Hail,
            x: 61.1,
            y: 89.1,
        },
        {
            isOptional: true,
            battleKey: 'skier-m::Shawn',
            fieldCondition: FieldCondition.Hail,
            x: 88,
            y: 76,
        },
        {
            isOptional: true,
            battleKey: 'ninja-boy::Matthew',
            fieldCondition: FieldCondition.Hail,
            x: 69,
            y: 75,
        },
        {
            isOptional: true,
            battleKey: 'skier-f::Madison',
            fieldCondition: FieldCondition.Hail,
            x: 12,
            y: 69.4,
        },
        {
            isOptional: true,
            battleKey: 'ninja-boy::Ethan',
            fieldCondition: FieldCondition.Hail,
            x: 9,
            y: 51.3,
        },
        {
            isOptional: true,
            battleKey: 'skier-m::Bjorn',
            fieldCondition: FieldCondition.Hail,
            x: 81.9,
            y: 33.2,
        },
        {
            isOptional: true,
            battleKey: 'skier-f::Lexie',
            fieldCondition: FieldCondition.Hail,
            x: 18.1,
            y: 32,
        },
        {
            isOptional: true,
            battleKey: 'black-belt::Luke',
            fieldCondition: FieldCondition.Hail,
            x: 12.4,
            y: 16.8,
        },
        {
            battleKey: 'ace-trainer-snow-f::Olivia',
            fieldCondition: FieldCondition.Hail,
            x: 45.5,
            y: 9.4,
        },
    ],
};

export default ROUTE_217;
