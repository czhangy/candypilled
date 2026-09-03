import {
    oreburghMine1f,
    oreburghMineB1f,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const OREBURGH_MINE: Location = {
    name: 'Oreburgh Mine',
    subareas: [
        {
            name: '1F',
            map: oreburghMine1f,
            encountersKey: 'oreburgh-mine',
        },
        {
            name: 'B1F',
            map: oreburghMineB1f,
            encountersKey: 'oreburgh-mine',
            battles: [
                {
                    battleKey: 'worker-colin',
                    x: 26.6,
                    y: 87.6,
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
