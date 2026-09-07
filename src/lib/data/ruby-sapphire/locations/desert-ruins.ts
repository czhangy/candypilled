import { desertRuins } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DESERT_RUINS: Location = {
    name: 'Desert Ruins',
    map: desertRuins,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'desert-ruins',
};

export default DESERT_RUINS;
