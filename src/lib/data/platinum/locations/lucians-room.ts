import { luciansRoom } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    battles: [
        {
            metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
            battleKey: 'elite-four-lucian-lucian',
            x: 50.2,
            y: 40.6,
        },
    ],
};

export default LUCIANS_ROOM;
