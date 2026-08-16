import { twinleafTown } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TWINLEAF_TOWN: Location = {
    name: 'Twinleaf Town',
    map: twinleafTown,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'twinleaf-town',
};

export default TWINLEAF_TOWN;
