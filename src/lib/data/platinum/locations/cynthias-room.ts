import { cynthiasRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    battles: [
        {
            battleKey: 'champion-cynthia',
            x: 52.41,
            y: 53.87,
        },
    ],
};

export default CYNTHIAS_ROOM;
