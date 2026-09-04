import { oreburghGate1f, oreburghGateB1f } from '@/lib/data/platinum/maps';
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
                    x: 55,
                    y: 91,
                },
                {
                    battleKey: 'picnicker-diana',
                    x: 80.3,
                    y: 76.5,
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
                    x: 21.8,
                    y: 61.8,
                },
            ],
        },
    ],
};

export default OREBURGH_GATE;
