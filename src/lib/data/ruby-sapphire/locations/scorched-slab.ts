import { scorchedSlab } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SCORCHED_SLAB: Location = {
    name: 'Scorched Slab',
    map: scorchedSlab,
    mapAnchor: MapAnchor.Center,
};

export default SCORCHED_SLAB;
