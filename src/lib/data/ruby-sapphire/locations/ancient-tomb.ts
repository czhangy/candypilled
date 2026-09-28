import { ancientTomb } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ANCIENT_TOMB: Location = {
    name: 'Ancient Tomb',
    map: ancientTomb,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'ancient-tomb',
    methodSplits: [{ method: EncounterMethod.Static, split: 'Wallace' }],
};

export default ANCIENT_TOMB;
