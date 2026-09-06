import { lavaridgeTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAVARIDGE_TOWN: Location = {
    name: 'Lavaridge Town',
    map: lavaridgeTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'lavaridge-town',
};

export default LAVARIDGE_TOWN;
