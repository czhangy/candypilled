import { acuityLakefront } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ACUITY_LAKEFRONT: Location = {
    name: 'Acuity Lakefront',
    map: acuityLakefront,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'acuity-lakefront',
};

export default ACUITY_LAKEFRONT;
