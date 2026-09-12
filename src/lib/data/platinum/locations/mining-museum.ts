import { miningMuseum } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MINING_MUSEUM: Location = {
    name: 'Mining Museum',
    map: miningMuseum,
    mapAnchor: MapAnchor.Unaudited,
    encountersKey: 'oreburgh-city',
};

export default MINING_MUSEUM;
