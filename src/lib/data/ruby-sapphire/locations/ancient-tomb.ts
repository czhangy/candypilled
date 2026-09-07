import { ancientTomb } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ANCIENT_TOMB: Location = {
    name: 'Ancient Tomb',
    map: ancientTomb,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'ancient-tomb',
};

export default ANCIENT_TOMB;
