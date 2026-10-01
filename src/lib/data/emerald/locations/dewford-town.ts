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
};

export default DEWFORD_TOWN;
