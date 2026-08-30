import { luciansRoom } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'elite-four-lucian',
            metadata: [BattleMetadata.Boss],
            x: 49.6,
            y: 28.4,
        },
    ],
};

export default LUCIANS_ROOM;
