import { route215 } from '@/lib/data/platinum/maps';
import { EncounterMethod, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_215: Location = {
    name: 'Route 215',
    map: route215,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-215',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Maylene' },
        { method: EncounterMethod.HoneyTree, split: 'Maylene' },
    ],
    battles: [
        {
            battleKey: 'ruin-maniac-calvin',
            x: 14.1,
            y: 43.95,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'jogger-craig',
            x: 28.68,
            y: 53.32,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'black-belt-derek',
            x: 32.85,
            y: 25.2,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'black-belt-gregory',
            x: 47.43,
            y: 6.45,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'black-belt-nathaniel',
            x: 70.35,
            y: 18.95,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'jogger-scott',
            x: 81.8,
            y: 40.82,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'ace-trainer-f-maya',
            x: 75.55,
            y: 62.7,
            fieldCondition: FieldCondition.Rain,
        },
        {
            battleKey: 'ace-trainer-m-dennis',
            x: 75.55,
            y: 72.07,
            fieldCondition: FieldCondition.Rain,
        },
    ],
};

export default ROUTE_215;
