import { sandgemTown } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SANDGEM_TOWN: Location = {
    name: 'Sandgem Town',
    map: sandgemTown,
    mapAnchor: MapAnchor.Unaudited,
};

export default SANDGEM_TOWN;
