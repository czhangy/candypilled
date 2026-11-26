import { flintsRoom } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLINTS_ROOM: Location = {
    name: "Flint's Room",
    map: flintsRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'elite-four-flint',
            x: 49.9,
            y: 28.49,
        },
    ],
};

export default FLINTS_ROOM;
