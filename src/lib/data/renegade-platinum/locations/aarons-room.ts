import { aaronsRoom } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const AARONS_ROOM: Location = {
    name: "Aaron's Room",
    map: aaronsRoom,
    battles: [
        {
            battleKey: 'elite-four-aaron',
            x: 50,
            y: 28,
        },
    ],
};

export default AARONS_ROOM;
