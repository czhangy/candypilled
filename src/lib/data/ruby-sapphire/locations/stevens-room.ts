import { pokemonLeagueChampionsRoom } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const STEVENS_ROOM: Location = {
    name: "Steven's Room",
    map: pokemonLeagueChampionsRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'champion-steven', x: 50, y: 41.11 }],
    transitions: [
        { height: 16, location: "Drake's Room", width: 16, x: 50, y: 96.15 },
    ],
};

export default STEVENS_ROOM;
