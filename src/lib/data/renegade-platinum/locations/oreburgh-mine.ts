import {
    oreburghMineB1f,
    oreburghMineB2f,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_MINE: Location = {
    name: 'Oreburgh Mine',
    subareas: [
        {
            name: 'B1F',
            map: oreburghMineB1f,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'oreburgh-mine',
        },
        {
            name: 'B2F',
            map: oreburghMineB2f,
            mapAnchor: MapAnchor.Center,
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
