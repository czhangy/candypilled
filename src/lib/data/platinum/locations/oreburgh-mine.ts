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
                    isOptional: true,
                    battleKey: 'worker-colin',
                    x: 27.1,
                    y: 91,
                },
                {
                    isOptional: true,
                    battleKey: 'worker-mason',
                    x: 82.6,
                    y: 66.8,
                },
            ],
        },
    ],
};

export default OREBURGH_MINE;
