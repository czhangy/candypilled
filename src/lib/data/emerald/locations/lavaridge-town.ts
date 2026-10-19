import { lavaridgeTown } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAVARIDGE_TOWN: Location = {
    name: 'Lavaridge Town',
    map: lavaridgeTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'lavaridge-town',
    methodSplits: [{ method: EncounterMethod.Egg, split: 'Flannery' }],
};

export default LAVARIDGE_TOWN;
