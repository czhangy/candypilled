import { pokemonLeagueDrakesRoom } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DRAKES_ROOM: Location = {
    name: "Drake's Room",
    map: pokemonLeagueDrakesRoom,
    mapAnchor: MapAnchor.Center,
};

export default DRAKES_ROOM;
