import { cynthiasRoom } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'champion-cynthia',
            x: 51.81,
            y: 53.87,
        },
    ],
};

export default CYNTHIAS_ROOM;
