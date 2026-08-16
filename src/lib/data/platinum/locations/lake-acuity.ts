import { lakeAcuity } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_ACUITY: Location = {
    name: 'Lake Acuity',
    map: lakeAcuity,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'lake-acuity-area',
};

export default LAKE_ACUITY;
