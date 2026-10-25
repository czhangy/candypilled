import { route217 } from '@/lib/data/platinum/maps';
import { EncounterMethod, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_217: Location = {
    name: 'Route 217',
    map: route217,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sinnoh-route-217',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Candice' }],
    battles: [
        {
            battleKey: 'ace-trainer-snow-m-dalton',
            fieldCondition: FieldCondition.Hail,
            x: 61.04,
            y: 88.33,
        },
        {
            battleKey: 'skier-m-shawn',
            fieldCondition: FieldCondition.Hail,
            x: 95.41,
            y: 68.65,
        },
        {
            battleKey: 'ninja-boy-matthew',
            fieldCondition: FieldCondition.Hail,
            x: 70.41,
            y: 74.27,
        },
        {
            battleKey: 'skier-f-madison',
            fieldCondition: FieldCondition.Hail,
            x: 11.04,
            y: 68.65,
        },
        {
            battleKey: 'ninja-boy-ethan',
            fieldCondition: FieldCondition.Hail,
            x: 7.91,
            y: 50.83,
        },
        {
            battleKey: 'skier-m-bjorn',
            fieldCondition: FieldCondition.Hail,
            x: 82.91,
            y: 31.15,
        },
        {
            battleKey: 'skier-f-lexie',
            fieldCondition: FieldCondition.Hail,
            x: 20.41,
            y: 31.15,
        },
        {
            battleKey: 'black-belt-luke',
            fieldCondition: FieldCondition.Hail,
            x: 11.04,
            y: 13.33,
        },
        {
            battleKey: 'ace-trainer-snow-f-olivia',
            fieldCondition: FieldCondition.Hail,
            x: 45.41,
            y: 8.64,
        },
    ],
};

export default ROUTE_217;
