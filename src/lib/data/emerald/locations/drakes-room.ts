import { drakesRoom } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DRAKES_ROOM: Location = {
    name: "Drake's Room",
    map: drakesRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'elite-four-drake', x: 50.0, y: 38.17 }],
};

export default DRAKES_ROOM;
