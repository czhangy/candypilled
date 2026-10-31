import { oreburghMineB1f, oreburghMineB2f } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_MINE: Location = {
    name: 'Oreburgh Mine',
    subareas: [
        {
            name: 'B1F',
            map: oreburghMineB1f,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'oreburgh-mine-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Roark' }],
        },
        {
            name: 'B2F',
            map: oreburghMineB2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-mine-b1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Roark' }],
            battles: [
                {
                    battleKey: 'worker-colin',
                    x: 26.66,
                    y: 87.7,
                },
                {
                    battleKey: 'worker-mason',
                    x: 82.91,
                    y: 62.7,
                },
            ],
        },
    ],
};

export default OREBURGH_MINE;
