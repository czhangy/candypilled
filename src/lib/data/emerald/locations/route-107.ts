import { route107 } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_107: Location = {
    name: 'Route 107',
    map: route107,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-107',
    methodSplits: [
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.Surf, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-denise',
            x: 27.5,
            y: 36.72,
        },
        {
            battleKey: 'swimmer-m-tony',
            x: 39.17,
            y: 56.72,
        },
        {
            battleKey: 'sis-and-bro-lisa-and-ray',
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
            x: 55,
            y: 21.72,
        },
        {
            battleKey: 'swimmer-m-darrin',
            x: 69.17,
            y: 51.72,
        },
        {
            battleKey: 'triathlete-swimmer-m-camron',
            x: 84.17,
            y: 26.72,
        },
        {
            battleKey: 'swimmer-f-beth',
            x: 84.17,
            y: 56.72,
        },
    ],
    transitions: [
        { height: 96, location: 'Dewford Town', width: 16, x: 0.83, y: 55 },
        { height: 224, location: 'Route 108', width: 16, x: 99.17, y: 45 },
    ],
};

export default ROUTE_107;
