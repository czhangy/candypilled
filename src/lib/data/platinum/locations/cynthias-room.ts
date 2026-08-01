import { cynthiasRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    battles: [
        {
            isBoss: true,
            battleKey: 'champion-cynthia-cynthia',
            x: 50.2,
            y: 72.9,
        },
    ],
};

export default CYNTHIAS_ROOM;
