import { route113 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_113: Location = {
    name: 'Route 113',
    map: route113,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-113',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Flannery' }],
    battles: [
        {
            battleKey: 'youngster-neal',
            x: 62.5,
            y: 41.72,
        },
        {
            battleKey: 'ninja-boy-lao',
            x: 66.5,
            y: 16.72,
        },
        {
            battleKey: 'parasol-lady-madeline',
            x: 51.5,
            y: 56.72,
        },
        {
            battleKey: 'twins-tori-and-tia',
            x: 45.97,
            y: 31.94,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        {
            battleKey: 'ninja-boy-lung',
            x: 29.5,
            y: 31.72,
        },
        {
            battleKey: 'youngster-dillon',
            x: 21.5,
            y: 56.72,
        },
    ],
    transitions: [
        {
            height: 64,
            location: 'Route 111',
            subarea: 'North',
            width: 16,
            x: 99.5,
            y: 45,
        },
        { height: 144, location: 'Fallarbor Town', width: 16, x: 0.5, y: 52.5 },
    ],
};

export default ROUTE_113;
