import { berthasRoom } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const BERTHAS_ROOM: Location = {
    name: "Bertha's Room",
    map: berthasRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'elite-four-bertha',
            metadata: [BattleMetadata.Boss],
            x: 50,
            y: 28.7,
        },
    ],
};

export default BERTHAS_ROOM;
