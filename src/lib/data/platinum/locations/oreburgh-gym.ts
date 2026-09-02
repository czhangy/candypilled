import { oreburghGym } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-jonathon',
            x: 40,
            y: 77.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-darius',
            x: 59,
            y: 51.6,
        },
        {
            metadata: [BattleMetadata.Boss],
            battleKey: 'leader-roark',
            x: 46.6,
            y: 22.8,
        },
    ],
};

export default OREBURGH_GYM;
