import { islandCave } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ISLAND_CAVE: Location = {
    name: 'Island Cave',
    map: islandCave,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'island-cave',
    methodSplits: [{ method: EncounterMethod.Static, split: 'Juan' }],
    transitions: [
        { height: 16, location: 'Route 105', width: 16, x: 50, y: 89.39 },
    ],
};

export default ISLAND_CAVE;
