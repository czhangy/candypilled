import { cynthiasRoom } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'champion-cynthia',
            x: 52.11,
            y: 54.64,
        },
    ],
};

export default CYNTHIAS_ROOM;
