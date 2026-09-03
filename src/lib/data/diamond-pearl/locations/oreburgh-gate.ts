import { oreburghGate1f, oreburghGateB1f } from '@/lib/data/diamond-pearl/maps';
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
                    x: 55.5,
                    y: 85.5,
                },
                {
                    battleKey: 'picnicker-diana',
                    x: 80,
                    y: 70.8,
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
                    x: 21,
                    y: 53.5,
                },
            ],
        },
    ],
};

export default OREBURGH_GATE;
