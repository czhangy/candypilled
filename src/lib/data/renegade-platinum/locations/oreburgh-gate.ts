import {
    oreburghGate1f,
    oreburghGateB1f,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GATE: Location = {
    name: 'Oreburgh Gate',
    subareas: [
        {
            name: '1F',
            map: oreburghGate1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-gate-1f',
            battles: [
                {
                    battleKey: 'camper-curtis',
                    metadata: [],
                    x: 55.3,
                    y: 89.4,
                },
                {
                    battleKey: 'picnicker-diana',
                    metadata: [],
                    x: 80.3,
                    y: 66.8,
                },
            ],
        },
        {
            name: 'B1F',
            map: oreburghGateB1f,
            mapAnchor: MapAnchor.Right,
            encountersKey: 'oreburgh-gate-b1f',
            battles: [
                {
                    battleKey: 'veteran-grant',
                    metadata: [BattleMetadata.Optional],
                    x: 21.1,
                    y: 53.6,
                },
            ],
        },
    ],
};

export default OREBURGH_GATE;
