import { aaronsRoom } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const AARONS_ROOM: Location = {
    name: "Aaron's Room",
    map: aaronsRoom,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
            battleKey: 'elite-four-aaron',
            x: 50.2,
            y: 39.3,
        },
    ],
};

export default AARONS_ROOM;
