import { dewfordTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DEWFORD_TOWN: Location = {
    name: 'Dewford Town',
    map: dewfordTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'dewford-town',
};

export default DEWFORD_TOWN;
