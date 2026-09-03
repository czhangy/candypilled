import { flintsRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const FLINTS_ROOM: Location = {
    name: "Flint's Room",
    map: flintsRoom,
    battles: [
        {
            battleKey: 'elite-four-flint',
            x: 50.2,
            y: 40.3,
        },
    ],
};

export default FLINTS_ROOM;
