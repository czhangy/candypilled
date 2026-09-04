import { luciansRoom } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    battles: [
        {
            battleKey: 'elite-four-lucian',
            x: 50,
            y: 28.4,
        },
    ],
};

export default LUCIANS_ROOM;
