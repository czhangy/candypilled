import {
    oreburghMineB1f,
    oreburghMineB2f,
} from '@/lib/data/diamond-pearl/maps';
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
        },
    ],
};

export default OREBURGH_MINE;
