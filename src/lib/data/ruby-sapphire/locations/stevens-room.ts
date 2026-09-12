import { pokemonLeagueChampionsRoom } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const STEVENS_ROOM: Location = {
    name: "Steven's Room",
    map: pokemonLeagueChampionsRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'champion-steven', x: 49.52, y: 40.59 }],
};

export default STEVENS_ROOM;
