import { veilstoneGym } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VEILSTONE_GYM: Location = {
    name: 'Veilstone Gym',
    map: veilstoneGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-colby',
            x: 59.8,
            y: 70,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-darren',
            x: 63.7,
            y: 42.8,
        },
        {
            metadata: [],
            battleKey: 'black-belt-rafael',
            x: 43.8,
            y: 42.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'black-belt-jeffery',
            x: 7.8,
            y: 30.4,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-maylene',
            x: 48,
            y: 13,
        },
    ],
};

export default VEILSTONE_GYM;
