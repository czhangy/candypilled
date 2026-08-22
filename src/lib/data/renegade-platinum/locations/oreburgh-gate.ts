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
                    x: 54.7,
                    y: 89.1,
                },
                {
                    battleKey: 'picnicker-diana',
                    metadata: [],
                    x: 76.6,
                    y: 67,
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
                    y: 52,
                },
            ],
        },
    ],
};

export default OREBURGH_GATE;
