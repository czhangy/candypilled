import { route218 } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_218: Location = {
    name: 'Route 218',
    map: route218,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-218',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.Grass, split: 'Roark' },
        { method: EncounterMethod.OldRod, split: 'Roark' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.HoneyTree, split: 'Roark' },
    ],
    battles: [
        {
            battleKey: 'fisherman-miguel',
            x: 46.14,
            y: 65.82,
        },
        {
            battleKey: 'fisherman-luc',
            x: 46.14,
            y: 47.07,
        },
        {
            battleKey: 'sailor-skyler',
            x: 19.58,
            y: 31.45,
        },
        {
            battleKey: 'guitarist-tony',
            x: 25.83,
            y: 53.32,
        },
    ],
};

export default ROUTE_218;
