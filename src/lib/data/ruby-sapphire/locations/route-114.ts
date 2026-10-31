import { route114 } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_114: Location = {
    name: 'Route 114',
    map: route114,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'hoenn-route-114',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Flannery' },
        { method: EncounterMethod.OldRod, split: 'Flannery' },
        { method: EncounterMethod.RockSmash, split: 'Flannery' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'fisherman-nolan',
            x: 58.75,
            y: 25.43,
        },
        {
            battleKey: 'fisherman-claude',
            x: 48.75,
            y: 32.93,
        },
        {
            battleKey: 'picnicker-nancy',
            x: 48.75,
            y: 44.18,
        },
        {
            battleKey: 'sr-and-jr-tyra-and-ivy',
            x: 60,
            y: 55.43,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        {
            battleKey: 'camper-shane',
            x: 56.25,
            y: 62.93,
        },
        {
            battleKey: 'poke-maniac-steve',
            x: 51.25,
            y: 70.43,
        },
        {
            battleKey: 'kindler-bernie',
            x: 76.25,
            y: 72.93,
        },
        {
            battleKey: 'hiker-lucas',
            x: 76.25,
            y: 90.43,
        },
        {
            battleKey: 'hiker-lenny',
            x: 38.75,
            y: 81.68,
        },
    ],
};

export default ROUTE_114;
