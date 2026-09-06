import { berthasRoom } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const BERTHAS_ROOM: Location = {
    name: "Bertha's Room",
    map: berthasRoom,
    mapAnchor: MapAnchor.Unaudited,
    battles: [
        {
            battleKey: 'elite-four-bertha',
            x: 50,
            y: 29.27,
        },
    ],
};

export default BERTHAS_ROOM;
