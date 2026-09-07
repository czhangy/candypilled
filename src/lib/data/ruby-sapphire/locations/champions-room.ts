import { pokemonLeagueChampionsRoom } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CHAMPIONS_ROOM: Location = {
    name: "Champion's Room",
    map: pokemonLeagueChampionsRoom,
    mapAnchor: MapAnchor.Center,
};

export default CHAMPIONS_ROOM;
