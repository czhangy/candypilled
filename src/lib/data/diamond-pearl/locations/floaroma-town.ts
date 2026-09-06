import { floaromaTown } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_TOWN: Location = {
    name: 'Floaroma Town',
    map: floaromaTown,
    mapAnchor: MapAnchor.Unaudited,
};

export default FLOAROMA_TOWN;
