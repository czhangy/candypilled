import { pokemonLeagueSidneysRoom } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SIDNEYS_ROOM: Location = {
    name: "Sidney's Room",
    map: pokemonLeagueSidneysRoom,
    mapAnchor: MapAnchor.Center,
};

export default SIDNEYS_ROOM;
