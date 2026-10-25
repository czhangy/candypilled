import { foreignBuilding } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FOREIGN_BUILDING: Location = {
    name: 'Foreign Building',
    map: foreignBuilding,
    mapAnchor: MapAnchor.Center,
};

export default FOREIGN_BUILDING;
