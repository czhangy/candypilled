import { sandgemTown } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const SANDGEM_TOWN: Location = {
    name: 'Sandgem Town',
    map: sandgemTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sandgem-town',
};

export default SANDGEM_TOWN;
