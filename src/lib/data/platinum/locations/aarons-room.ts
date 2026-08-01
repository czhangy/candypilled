import { aaronsRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const AARONS_ROOM: Location = {
    name: "Aaron's Room",
    map: aaronsRoom,
    battles: [
        {
            isBoss: true,
            battleKey: 'elite-four-aaron-aaron',
            x: 50.2,
            y: 39.3,
        },
    ],
};

export default AARONS_ROOM;
