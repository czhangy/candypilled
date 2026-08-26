import { trophyGarden } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TROPHY_GARDEN: Location = {
    name: 'Trophy Garden',
    map: trophyGarden,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'trophy-garden',
};

export default TROPHY_GARDEN;
