import { grandLake } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GRAND_LAKE: Location = {
    name: 'Grand Lake',
    map: grandLake,
    mapAnchor: MapAnchor.Center,
};

export default GRAND_LAKE;
