import { luciansRoom } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'elite-four-lucian',
            x: 50,
            y: 28.49,
        },
    ],
};

export default LUCIANS_ROOM;
