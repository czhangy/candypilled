import {
    oreburghMineB1f,
    oreburghMineB2f,
} from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_MINE: Location = {
    name: 'Oreburgh Mine',
    subareas: [
        {
            name: 'B1F',
            map: oreburghMineB1f,
            encountersKey: 'oreburgh-mine-1f',
        },
        {
            name: 'B2F',
            map: oreburghMineB2f,
            encountersKey: 'oreburgh-mine-b1f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-colin',
                    x: 26.7,
                    y: 87.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-mason',
                    x: 82.7,
                    y: 62.6,
                },
            ],
        },
    ],
};

export default OREBURGH_MINE;
