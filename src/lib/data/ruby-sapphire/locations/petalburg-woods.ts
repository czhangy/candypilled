import {
    petalburgWoodsRuby,
    petalburgWoodsSapphire,
} from '@/lib/data/ruby-sapphire/maps';
import { Location } from '@/lib/static/types';

const PETALBURG_WOODS: Location = {
    name: 'Petalburg Woods',
    map: { Ruby: petalburgWoodsRuby, Sapphire: petalburgWoodsSapphire },
    encountersKey: 'petalburg-woods',
};

export default PETALBURG_WOODS;
