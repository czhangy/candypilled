import { route103Brendan, route103May } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_103: Location = {
    name: 'Route 103',
    map: { male: route103May, female: route103Brendan },
    mapAnchor: MapAnchor.Center,
    encountersKey: 'hoenn-route-103',
    battles: [
        {
            battleKey: 'pkmn-trainer-may',
            gender: 'male',
            x: 13.05,
            y: 14.68,
        },
        {
            battleKey: 'pkmn-trainer-brendan',
            gender: 'female',
            x: 13.05,
            y: 14.68,
        },
        {
            battleKey: 'swimmer-f-isabelle',
            x: 45.55,
            y: 28.6,
        },
        {
            battleKey: 'swimmer-m-pete',
            x: 45.55,
            y: 60.42,
        },
        {
            battleKey: 'aroma-lady-daisy',
            x: 89.38,
            y: 51.05,
        },
        {
            battleKey: 'twins-amy-and-liv',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 81.25,
            y: 56.16,
        },
        {
            battleKey: 'pokefan-m-miguel',
            x: 70.55,
            y: 60.14,
        },
        {
            battleKey: 'fisherman-andrew',
            x: 63.05,
            y: 37.7,
        },
        {
            battleKey: 'black-belt-rhett',
            x: 84.38,
            y: 23.77,
        },
        {
            battleKey: 'guitarist-marcos',
            x: 84.3,
            y: 41.96,
        },
    ],
};

export default ROUTE_103;
