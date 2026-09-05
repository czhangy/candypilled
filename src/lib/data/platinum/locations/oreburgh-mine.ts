import { oreburghMineB1f, oreburghMineB2f } from '@/lib/data/platinum/maps';
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
                    battleKey: 'worker-colin',
                    x: 26.6,
                    y: 87.8,
                },
                {
                    battleKey: 'worker-mason',
                    x: 83,
                    y: 62.8,
                },
            ],
        },
    ],
};

export default OREBURGH_MINE;
