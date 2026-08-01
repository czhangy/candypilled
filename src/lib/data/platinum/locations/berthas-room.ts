import { berthasRoom } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const BERTHAS_ROOM: Location = {
    name: "Bertha's Room",
    map: berthasRoom,
    battles: [
        {
            isBoss: true,
            battleKey: 'elite-four-bertha::Bertha',
            x: 50.2,
            y: 40.5,
        },
    ],
};

export default BERTHAS_ROOM;
