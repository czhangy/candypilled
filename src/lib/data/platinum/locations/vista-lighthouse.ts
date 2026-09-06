import { vistaLighthouse } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VISTA_LIGHTHOUSE: Location = {
    name: 'Vista Lighthouse',
    map: vistaLighthouse,
    mapAnchor: MapAnchor.Unaudited,
};

export default VISTA_LIGHTHOUSE;
