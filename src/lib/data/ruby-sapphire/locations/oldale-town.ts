import { oldaleTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OLDALE_TOWN: Location = {
    name: 'Oldale Town',
    map: oldaleTown,
    mapAnchor: MapAnchor.Center,
};

export default OLDALE_TOWN;
