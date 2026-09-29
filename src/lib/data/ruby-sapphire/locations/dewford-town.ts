import { dewfordTown } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DEWFORD_TOWN: Location = {
    name: 'Dewford Town',
    map: dewfordTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'dewford-town',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
};

export default DEWFORD_TOWN;
