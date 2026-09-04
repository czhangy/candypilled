import { cynthiasRoom } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    battles: [
        {
            battleKey: 'champion-cynthia',
            x: 52,
            y: 54.7,
        },
    ],
};

export default CYNTHIAS_ROOM;
