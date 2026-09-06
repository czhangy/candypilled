import { jaggedPass } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JAGGED_PASS: Location = {
    name: 'Jagged Pass',
    map: jaggedPass,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'jagged-pass',
};

export default JAGGED_PASS;
