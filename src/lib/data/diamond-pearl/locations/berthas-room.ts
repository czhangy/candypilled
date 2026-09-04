import { berthasRoom } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const BERTHAS_ROOM: Location = {
    name: "Bertha's Room",
    map: berthasRoom,
    battles: [
        {
            battleKey: 'elite-four-bertha',
            x: 49.6,
            y: 28.8,
        },
    ],
};

export default BERTHAS_ROOM;
