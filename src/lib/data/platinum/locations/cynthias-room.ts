import { cynthiasRoom } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    battles: [
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'champion-cynthia-cynthia',
            x: 50.2,
            y: 72.9,
        },
    ],
};

export default CYNTHIAS_ROOM;
