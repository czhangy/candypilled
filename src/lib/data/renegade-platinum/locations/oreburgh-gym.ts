import { oreburghGym } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'youngster-jonathon',
            metadata: [BattleMetadata.Optional],
            x: 32.2,
            y: 71.9,
        },
        {
            battleKey: 'youngster-darius',
            metadata: [BattleMetadata.Optional],
            x: 55.5,
            y: 43.9,
        },
        {
            battleKey: 'leader-roark',
            metadata: [BattleMetadata.Boss],
            x: 40,
            y: 12.2,
        },
    ],
};

export default OREBURGH_GYM;
