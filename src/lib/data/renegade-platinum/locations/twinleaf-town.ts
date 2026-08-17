import { twinleafTown } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const TWINLEAF_TOWN: Location = {
    name: 'Twinleaf Town',
    map: twinleafTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'twinleaf-town',
};

export default TWINLEAF_TOWN;
