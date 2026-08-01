import { berthasRoom } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const BERTHAS_ROOM: Location = {
    name: "Bertha's Room",
    map: berthasRoom,
    battles: [
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'elite-four-bertha-bertha',
            x: 50.2,
            y: 40.5,
        },
    ],
};

export default BERTHAS_ROOM;
