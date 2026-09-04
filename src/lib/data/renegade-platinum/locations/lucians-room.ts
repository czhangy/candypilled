import { luciansRoom } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    battles: [
        {
            battleKey: 'elite-four-lucian',
            x: 49.6,
            y: 28.4,
        },
    ],
};

export default LUCIANS_ROOM;
