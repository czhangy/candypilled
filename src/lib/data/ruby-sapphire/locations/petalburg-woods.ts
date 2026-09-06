import {
    petalburgWoodsRuby,
    petalburgWoodsSapphire,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PETALBURG_WOODS: Location = {
    name: 'Petalburg Woods',
    map: { Ruby: petalburgWoodsRuby, Sapphire: petalburgWoodsSapphire },
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'petalburg-woods',
};

export default PETALBURG_WOODS;
