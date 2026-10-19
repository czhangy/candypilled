import { islandCave } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ISLAND_CAVE: Location = {
    name: 'Island Cave',
    map: islandCave,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'island-cave',
    methodSplits: [{ method: EncounterMethod.Static, split: 'Wallace' }],
};

export default ISLAND_CAVE;
