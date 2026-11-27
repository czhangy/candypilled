import { sidneysRoom } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SIDNEYS_ROOM: Location = {
    name: "Sidney's Room",
    map: sidneysRoom,
    mapAnchor: MapAnchor.Center,
    battles: [{ battleKey: 'elite-four-sidney', x: 50.0, y: 38.17 }],
    transitions: [
        { height: 16, location: "Phoebe's Room", width: 16, x: 50, y: 17.86 },
        {
            height: 16,
            location: 'Ever Grande City',
            subarea: 'Lobby',
            width: 16,
            x: 50,
            y: 96.43,
        },
    ],
};

export default SIDNEYS_ROOM;
