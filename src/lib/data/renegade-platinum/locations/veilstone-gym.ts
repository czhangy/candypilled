import { veilstoneGym } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    mapAnchor: MapAnchor.Top,
    battles: [
        {
            battleKey: 'black-belt-colby',
            metadata: [BattleMetadata.Optional],
            x: 60.1,
            y: 71.5,
        },
        {
            battleKey: 'black-belt-darren',
            metadata: [BattleMetadata.Optional],
            x: 64.8,
            y: 39.9,
        },
        {
            battleKey: 'black-belt-rafael',
            metadata: [],
            x: 44,
            y: 36.3,
        },
        {
            battleKey: 'black-belt-jeffery',
            metadata: [BattleMetadata.Optional],
            x: 6.4,
            y: 22.5,
        },
        {
            battleKey: 'leader-maylene',
            metadata: [BattleMetadata.Boss],
            x: 48.2,
            y: 5,
        },
    ],
};

export default VEILSTONE_GYM;
