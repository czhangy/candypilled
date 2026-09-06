import { fieryPath } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FIERY_PATH: Location = {
    name: 'Fiery Path',
    map: fieryPath,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'fiery-path',
};

export default FIERY_PATH;
