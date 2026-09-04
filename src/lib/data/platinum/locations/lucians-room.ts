import { luciansRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    battles: [
        {
            battleKey: 'elite-four-lucian',
            x: 50.2,
            y: 40.6,
        },
    ],
};

export default LUCIANS_ROOM;
