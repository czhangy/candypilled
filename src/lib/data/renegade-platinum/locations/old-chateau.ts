import { oldChateau } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OLD_CHATEAU: Location = {
    name: 'Old Chateau',
    map: oldChateau,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'old-chateau',
};

export default OLD_CHATEAU;
