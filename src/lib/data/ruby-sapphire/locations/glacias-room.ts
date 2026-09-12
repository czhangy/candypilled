import { pokemonLeagueGlaciasRoom } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GLACIAS_ROOM: Location = {
    name: "Glacia's Room",
    map: pokemonLeagueGlaciasRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'elite-four-glacia', x: 49.52, y: 37.5 }],
};

export default GLACIAS_ROOM;
