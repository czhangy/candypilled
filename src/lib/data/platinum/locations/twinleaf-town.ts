import { twinleafTown } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TWINLEAF_TOWN: Location = {
    name: 'Twinleaf Town',
    map: twinleafTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'twinleaf-town',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.OldRod, split: 'Roark' },
    ],
};

export default TWINLEAF_TOWN;
