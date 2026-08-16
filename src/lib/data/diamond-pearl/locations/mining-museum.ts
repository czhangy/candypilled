import { miningMuseum } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MINING_MUSEUM: Location = {
    name: 'Mining Museum',
    map: miningMuseum,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'oreburgh-city',
};

export default MINING_MUSEUM;
