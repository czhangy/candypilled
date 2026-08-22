import { luciansRoom } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
            battleKey: 'elite-four-lucian',
            x: 50.2,
            y: 40.6,
        },
    ],
};

export default LUCIANS_ROOM;
