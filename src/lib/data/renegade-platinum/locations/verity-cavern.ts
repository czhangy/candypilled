import { verityCavern } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VERITY_CAVERN: Location = {
    name: 'Verity Cavern',
    map: verityCavern,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'verity-cavern',
};

export default VERITY_CAVERN;
