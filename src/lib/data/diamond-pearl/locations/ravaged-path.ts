import { ravagedPath } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RAVAGED_PATH: Location = {
    name: 'Ravaged Path',
    map: ravagedPath,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'ravaged-path',
};

export default RAVAGED_PATH;
