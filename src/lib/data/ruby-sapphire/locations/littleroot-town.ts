import { littlerootTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LITTLEROOT_TOWN: Location = {
    name: 'Littleroot Town',
    map: littlerootTown,
    mapAnchor: MapAnchor.Center,
};

export default LITTLEROOT_TOWN;
