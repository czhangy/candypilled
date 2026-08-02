import { flintsRoom } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLINTS_ROOM: Location = {
    name: "Flint's Room",
    map: flintsRoom,
    battles: [
        {
            metadata: [BattleMetadata.Boss, BattleMetadata.Gauntlet],
            battleKey: 'elite-four-flint-flint',
            x: 50.2,
            y: 40.3,
        },
    ],
};

export default FLINTS_ROOM;
