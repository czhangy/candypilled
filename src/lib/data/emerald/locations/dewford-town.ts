import { dewfordTown } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DEWFORD_TOWN: Location = {
    name: 'Dewford Town',
    map: dewfordTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'dewford-town',
    methodSplits: [
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.Surf, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
    ],
    transitions: [
        { height: 16, location: 'Route 106', width: 112, x: 47.5, y: 2.5 },
        { height: 48, location: 'Route 107', width: 16, x: 97.5, y: 47.5 },
        { height: 16, location: 'Dewford Gym', width: 16, x: 42.5, y: 87.5 },
        {
            height: 16,
            location: 'Route 104',
            subarea: 'South',
            width: 16,
            x: 62.5,
            y: 47.5,
        },
        {
            height: 16,
            location: 'Route 109',
            subarea: 'Beach',
            width: 16,
            x: 62.5,
            y: 42.5,
        },
    ],
};

export default DEWFORD_TOWN;
