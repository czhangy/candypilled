import { amitySquare } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const AMITY_SQUARE: Location = {
    name: 'Amity Square',
    map: amitySquare,
    mapAnchor: MapAnchor.Center,
};

export default AMITY_SQUARE;
