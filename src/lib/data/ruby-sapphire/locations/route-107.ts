import { route107 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_107: Location = {
    name: 'Route 107',
    map: route107,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-107',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-beth',
            x: 27.5,
            y: 56.72,
        },
        {
            battleKey: 'swimmer-m-darrin',
            x: 45.83,
            y: 51.72,
        },
        {
            battleKey: 'sis-and-bro-lisa-and-ray',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 54.9,
            y: 22.02,
        },
        {
            battleKey: 'swimmer-m-tony',
            x: 64.17,
            y: 56.72,
        },
        {
            battleKey: 'swimmer-f-denise',
            x: 84.17,
            y: 31.72,
        },
    ],
};

export default ROUTE_107;
