import { aaronsRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const AARONS_ROOM: Location = {
    name: "Aaron's Room",
    map: aaronsRoom,
    battles: [
        {
            battleKey: 'elite-four-aaron',
            x: 50,
            y: 27.98,
        },
    ],
};

export default AARONS_ROOM;
