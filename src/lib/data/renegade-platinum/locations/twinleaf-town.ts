import {
    twinleafTownHouse,
    twinleafTownTown,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TWINLEAF_TOWN: Location = {
    name: 'Twinleaf Town',
    subareas: [
        {
            name: 'Town',
            map: twinleafTownTown,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'twinleaf-town',
            methodSplits: [
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Roark' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
            ],
        },
        {
            name: 'House',
            map: twinleafTownHouse,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'twinleaf-town-house',
            methodSplits: [{ method: EncounterMethod.Gift, split: 'Roark' }],
        },
    ],
};

export default TWINLEAF_TOWN;
