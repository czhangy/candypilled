import { route120 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_120: Location = {
    name: 'Route 120',
    map: route120,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'hoenn-route-120',
    methodSplits: [
        { method: EncounterMethod.DevonScope, split: 'Winona' },
        { method: EncounterMethod.Grass, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'parasol-lady-clarissa', x: 41.25, y: 6.34 },
        {
            battleKey: 'interviewers-gabby-and-ty-route-120',
            x: 92.5,
            y: 5.32,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        { battleKey: 'bird-keeper-robert', x: 81.25, y: 14.34 },
        {
            battleKey: 'bird-keeper-colin',
            fieldCondition: FieldCondition.Rain,
            x: 13.75,
            y: 22.34,
        },
        {
            battleKey: 'parasol-lady-angelica',
            fieldCondition: FieldCondition.Rain,
            x: 46.25,
            y: 34.34,
        },
        {
            battleKey: 'ninja-boy-tsunao',
            fieldCondition: FieldCondition.Rain,
            x: 48.75,
            y: 28.34,
        },
        {
            battleKey: 'cooltrainer-f-jennifer',
            fieldCondition: FieldCondition.Rain,
            x: 71.25,
            y: 35.34,
        },
        {
            battleKey: 'pkmn-ranger-f-jenna',
            fieldCondition: FieldCondition.Rain,
            x: 91.25,
            y: 45.34,
        },
        {
            battleKey: 'pkmn-ranger-m-carlos',
            fieldCondition: FieldCondition.Rain,
            x: 68.75,
            y: 51.34,
        },
        { battleKey: 'bug-maniac-brandon', x: 48.75, y: 80.34 },
        { battleKey: 'ninja-boy-keigo', x: 26.25, y: 72.34 },
        {
            battleKey: 'ruin-maniac-chip',
            fieldCondition: FieldCondition.Rain,
            x: 23.75,
            y: 60.34,
        },
    ],
};

export default ROUTE_120;
