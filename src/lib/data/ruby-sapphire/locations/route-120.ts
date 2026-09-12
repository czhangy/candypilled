import { route120 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_120: Location = {
    name: 'Route 120',
    map: route120,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'hoenn-route-120',
    battles: [
        { battleKey: 'parasol-lady-clarissa', x: 41.09, y: 6.32 },
        {
            battleKey: 'interviewers-gabby-and-ty-route-120',
            x: 92.5,
            y: 5.32,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        { battleKey: 'bird-keeper-robert', x: 81.09, y: 14.32 },
        {
            battleKey: 'bird-keeper-colin',
            fieldCondition: FieldCondition.Rain,
            x: 13.59,
            y: 22.26,
        },
        {
            battleKey: 'parasol-lady-angelica',
            fieldCondition: FieldCondition.Rain,
            x: 46.09,
            y: 34.26,
        },
        {
            battleKey: 'ninja-boy-tsunao',
            fieldCondition: FieldCondition.Rain,
            x: 48.59,
            y: 28.45,
        },
        {
            battleKey: 'cooltrainer-f-jennifer',
            fieldCondition: FieldCondition.Rain,
            x: 71.09,
            y: 35.26,
        },
        {
            battleKey: 'pkmn-ranger-f-jenna',
            fieldCondition: FieldCondition.Rain,
            x: 91.25,
            y: 45.26,
        },
        {
            battleKey: 'pkmn-ranger-m-carlos',
            fieldCondition: FieldCondition.Rain,
            x: 68.59,
            y: 51.33,
        },
        { battleKey: 'bug-maniac-brandon', x: 48.59, y: 80.33 },
        { battleKey: 'ninja-boy-keigo', x: 26.09, y: 72.38 },
        {
            battleKey: 'ruin-maniac-chip',
            fieldCondition: FieldCondition.Rain,
            x: 23.75,
            y: 60.26,
        },
    ],
};

export default ROUTE_120;
