import { oreburghMineB1f, oreburghMineB2f } from '@/lib/data/platinum/maps';
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
                    x: 27.1,
                    y: 91,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'worker-mason',
                    x: 82.6,
                    y: 66.8,
                },
            ],
        },
    ],
};

export default OREBURGH_MINE;
