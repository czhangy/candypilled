import { aaronsRoom } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const AARONS_ROOM: Location = {
    name: "Aaron's Room",
    map: aaronsRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'elite-four-aaron',
            metadata: [BattleMetadata.Boss],
            x: 50,
            y: 28,
        },
    ],
};

export default AARONS_ROOM;
