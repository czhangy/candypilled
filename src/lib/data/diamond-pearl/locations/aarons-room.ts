import { aaronsRoom } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const AARONS_ROOM: Location = {
    name: "Aaron's Room",
    map: aaronsRoom,
    battles: [
        {
            battleKey: 'elite-four-aaron',
            x: 50,
            y: 27.5,
        },
    ],
};

export default AARONS_ROOM;
