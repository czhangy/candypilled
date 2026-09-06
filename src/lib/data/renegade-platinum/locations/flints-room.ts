import { flintsRoom } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLINTS_ROOM: Location = {
    name: "Flint's Room",
    map: flintsRoom,
    mapAnchor: MapAnchor.Unaudited,
    battles: [
        {
            battleKey: 'elite-four-flint',
            x: 50,
            y: 28.3,
        },
    ],
};

export default FLINTS_ROOM;
