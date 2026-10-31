import { footstepHouse } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FOOTSTEP_HOUSE: Location = {
    name: 'Footstep House',
    map: footstepHouse,
    mapAnchor: MapAnchor.Center,
};

export default FOOTSTEP_HOUSE;
