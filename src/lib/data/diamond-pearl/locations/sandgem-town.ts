import { sandgemTown } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SANDGEM_TOWN: Location = {
    name: 'Sandgem Town',
    map: sandgemTown,
    mapAnchor: MapAnchor.Center,
};

export default SANDGEM_TOWN;
