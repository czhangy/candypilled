import { cynthiasRoom } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    mapAnchor: MapAnchor.Unaudited,
    battles: [
        {
            battleKey: 'champion-cynthia',
            x: 52,
            y: 53.9,
        },
    ],
};

export default CYNTHIAS_ROOM;
