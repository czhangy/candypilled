import { berthasRoom } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const BERTHAS_ROOM: Location = {
    name: "Bertha's Room",
    map: berthasRoom,
    battles: [
        {
            battleKey: 'elite-four-bertha',
            x: 50,
            y: 28.7,
        },
    ],
};

export default BERTHAS_ROOM;
