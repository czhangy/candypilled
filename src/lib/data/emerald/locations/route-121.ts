import { route121 } from '@/lib/data/emerald/maps';
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
        {
            battleKey: 'bug-maniac-cale',
            x: 14.37,
            y: 31.72,
        },
        {
            battleKey: 'hex-maniac-tammy',
            x: 14.37,
            y: 56.72,
        },
        {
            battleKey: 'beauty-jessica',
            x: 28.12,
            y: 26.72,
        },
        {
            battleKey: 'sr-and-jr-kate-and-joy',
            x: 50.0,
            y: 46.72,
            customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
        },
        {
            battleKey: 'pkmn-breeder-f-pat',
            x: 74.38,
            y: 66.72,
        },
        {
            battleKey: 'pkmn-breeder-m-myles',
            x: 74.38,
            y: 41.72,
        },
        {
            battleKey: 'gentleman-walter',
            x: 69.38,
            y: 41.72,
        },
        {
            battleKey: 'pokefan-f-vanessa',
            x: 79.38,
            y: 26.72,
        },
        {
            battleKey: 'cooltrainer-m-marcel',
            x: 81.88,
            y: 46.72,
        },
        {
            battleKey: 'cooltrainer-f-cristin',
            x: 90.62,
            y: 46.72,
        },
    ],
};

export default ROUTE_121;
