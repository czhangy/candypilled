import { ancientTomb } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ANCIENT_TOMB: Location = {
    name: 'Ancient Tomb',
    map: ancientTomb,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'ancient-tomb',
    methodSplits: [{ method: EncounterMethod.Static, split: 'Juan' }],
};

export default ANCIENT_TOMB;
