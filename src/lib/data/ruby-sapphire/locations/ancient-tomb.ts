import { ancientTomb } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ANCIENT_TOMB: Location = {
    name: 'Ancient Tomb',
    map: ancientTomb,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'ancient-tomb',
    methodSplits: [{ method: EncounterMethod.Static, split: 'Wallace' }],
    transitions: [
        { height: 16, location: 'Route 120', width: 16, x: 50, y: 89.39 },
    ],
};

export default ANCIENT_TOMB;
