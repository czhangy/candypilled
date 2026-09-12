import { lakeAcuity } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_ACUITY: Location = {
    name: 'Lake Acuity',
    map: lakeAcuity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'lake-acuity',
};

export default LAKE_ACUITY;
