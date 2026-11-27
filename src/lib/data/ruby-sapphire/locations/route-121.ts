import { route121 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_121: Location = {
    name: 'Route 121',
    map: route121,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-121',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'hex-maniac-tammy', x: 14.37, y: 51.72 },
        { battleKey: 'beauty-jessica', x: 28.12, y: 26.72 },
        {
            battleKey: 'sr-and-jr-kate-and-joy',
            x: 50,
            y: 46.28,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        { battleKey: 'gentleman-walter', x: 69.38, y: 41.72 },
        { battleKey: 'pokefan-f-vanessa', x: 79.38, y: 26.72 },
    ],
    transitions: [
        {
            height: 16,
            location: 'Safari Zone',
            subarea: 'Area 1',
            width: 16,
            x: 46.88,
            y: 27.5,
        },
        { height: 80, location: 'Lilycove City', width: 16, x: 99.38, y: 37.5 },
        { height: 128, location: 'Route 120', width: 16, x: 0.63, y: 50 },
        { height: 16, location: 'Route 122', width: 176, x: 40.63, y: 97.5 },
    ],
};

export default ROUTE_121;
