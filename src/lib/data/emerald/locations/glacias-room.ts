import { glaciasRoom } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GLACIAS_ROOM: Location = {
    name: "Glacia's Room",
    map: glaciasRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'elite-four-glacia', x: 50.0, y: 38.17 }],
    transitions: [
        { height: 16, location: "Drake's Room", width: 16, x: 50, y: 17.86 },
        { height: 16, location: "Phoebe's Room", width: 16, x: 50, y: 96.43 },
    ],
};

export default GLACIAS_ROOM;
