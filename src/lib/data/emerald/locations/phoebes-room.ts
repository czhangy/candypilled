import { phoebesRoom } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PHOEBES_ROOM: Location = {
    name: "Phoebe's Room",
    map: phoebesRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'elite-four-phoebe', x: 50.0, y: 38.17 }],
};

export default PHOEBES_ROOM;
