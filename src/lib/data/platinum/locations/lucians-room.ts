import { luciansRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    battles: [
        {
            battleKey: 'elite-four-lucian',
            x: 50,
            y: 28.36,
        },
    ],
};

export default LUCIANS_ROOM;
