import { aaronsRoom } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const AARONS_ROOM: Location = {
    name: "Aaron's Room",
    map: aaronsRoom,
    battles: [
        {
            battleKey: 'elite-four-aaron',
            x: 50.2,
            y: 39.3,
        },
    ],
};

export default AARONS_ROOM;
