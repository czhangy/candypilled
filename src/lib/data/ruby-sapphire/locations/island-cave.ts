import { islandCave } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ISLAND_CAVE: Location = {
    name: 'Island Cave',
    map: islandCave,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'island-cave',
};

export default ISLAND_CAVE;
