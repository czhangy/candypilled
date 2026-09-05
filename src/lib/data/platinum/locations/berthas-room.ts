import { berthasRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const BERTHAS_ROOM: Location = {
    name: "Bertha's Room",
    map: berthasRoom,
    battles: [
        {
            battleKey: 'elite-four-bertha',
            x: 50,
            y: 29.27,
        },
    ],
};

export default BERTHAS_ROOM;
