import { flintsRoom } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLINTS_ROOM: Location = {
    name: "Flint's Room",
    map: flintsRoom,
    battles: [
        {
            battleKey: 'elite-four-flint',
            metadata: [BattleMetadata.Boss],
            x: 50,
            y: 28.3,
        },
    ],
};

export default FLINTS_ROOM;
