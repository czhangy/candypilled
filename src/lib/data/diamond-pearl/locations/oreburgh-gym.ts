import { oreburghGym } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-jonathon',
            x: 40.6,
            y: 77.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-darius',
            x: 59.8,
            y: 51.6,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-roark-roark',
            x: 46.6,
            y: 23,
        },
    ],
};

export default OREBURGH_GYM;
