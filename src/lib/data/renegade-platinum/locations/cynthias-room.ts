import { cynthiasRoom } from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    battles: [
        {
            battleKey: 'champion-cynthia',
            x: 52,
            y: 53.9,
        },
    ],
};

export default CYNTHIAS_ROOM;
