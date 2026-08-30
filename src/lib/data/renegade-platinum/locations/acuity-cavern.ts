import { acuityCavern } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ACUITY_CAVERN: Location = {
    name: 'Acuity Cavern',
    map: acuityCavern,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'acuity-cavern',
};

export default ACUITY_CAVERN;
