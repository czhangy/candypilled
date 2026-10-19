import {
    oreburghMineB1f,
    oreburghMineB2f,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAVE_ROARK = [{ method: EncounterMethod.Cave, split: 'Roark' }];

const OREBURGH_MINE: Location = {
    name: 'Oreburgh Mine',
    subareas: [
        {
            name: 'B1F',
            map: oreburghMineB1f,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'oreburgh-mine-1f',
            methodSplits: CAVE_ROARK,
        },
        {
            name: 'B2F',
            map: oreburghMineB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-mine-b1f',
            methodSplits: CAVE_ROARK,
            battles: [
                {
                    battleKey: 'worker-colin',
                    x: 26.7,
                    y: 87.6,
                },
                {
                    battleKey: 'worker-mason',
                    x: 82.7,
                    y: 62.6,
                },
            ],
        },
    ],
};

export default OREBURGH_MINE;
