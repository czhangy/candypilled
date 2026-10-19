import { sidneysRoom } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SIDNEYS_ROOM: Location = {
    name: "Sidney's Room",
    map: sidneysRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'elite-four-sidney', x: 50.0, y: 38.17 }],
};

export default SIDNEYS_ROOM;
