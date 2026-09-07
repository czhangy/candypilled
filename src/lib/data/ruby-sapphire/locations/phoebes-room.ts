import { pokemonLeaguePhoebesRoom } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PHOEBES_ROOM: Location = {
    name: "Phoebe's Room",
    map: pokemonLeaguePhoebesRoom,
    mapAnchor: MapAnchor.Center,
};

export default PHOEBES_ROOM;
