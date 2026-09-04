import {
    oreburghGate1f,
    oreburghGateB1f,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const OREBURGH_GATE: Location = {
    name: 'Oreburgh Gate',
    subareas: [
        {
            name: '1F',
            map: oreburghGate1f,
            encountersKey: 'oreburgh-gate-1f',
            battles: [
                {
                    battleKey: 'camper-curtis',
                    x: 55.3,
                    y: 89.4,
                },
                {
                    battleKey: 'picnicker-diana',
                    x: 80.3,
                    y: 66.8,
                },
            ],
        },
        {
            name: 'B1F',
            map: oreburghGateB1f,
            encountersKey: 'oreburgh-gate-b1f',
            battles: [
                {
                    battleKey: 'veteran-grant',
                    x: 21.1,
                    y: 53.6,
                },
            ],
        },
    ],
};

export default OREBURGH_GATE;
