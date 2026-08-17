import { ravagedPath } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const RAVAGED_PATH: Location = {
    name: 'Ravaged Path',
    map: ravagedPath,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'ravaged-path',
};

export default RAVAGED_PATH;
