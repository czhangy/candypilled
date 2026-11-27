import { pokemonLeagueDrakesRoom } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DRAKES_ROOM: Location = {
    name: "Drake's Room",
    map: pokemonLeagueDrakesRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'elite-four-drake', x: 50, y: 38.17 }],
    transitions: [
        { height: 16, location: "Steven's Room", width: 16, x: 50, y: 17.86 },
        { height: 16, location: "Glacia's Room", width: 16, x: 50, y: 96.43 },
    ],
};

export default DRAKES_ROOM;
