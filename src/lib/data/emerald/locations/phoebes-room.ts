import { phoebesRoom } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PHOEBES_ROOM: Location = {
    name: "Phoebe's Room",
    map: phoebesRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'elite-four-phoebe', x: 50.0, y: 38.17 }],
    transitions: [
        { height: 16, location: "Glacia's Room", width: 16, x: 50, y: 17.86 },
        { height: 16, location: "Sidney's Room", width: 16, x: 50, y: 96.43 },
    ],
};

export default PHOEBES_ROOM;
