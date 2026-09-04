import { flintsRoom } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const FLINTS_ROOM: Location = {
    name: "Flint's Room",
    map: flintsRoom,
    battles: [
        {
            battleKey: 'elite-four-flint',
            x: 50,
            y: 28.3,
        },
    ],
};

export default FLINTS_ROOM;
