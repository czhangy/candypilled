import { oreburghGate1f, oreburghGateB1f } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata } from '@/lib/static/enums';
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
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'camper-curtis',
                    x: 55.2,
                    y: 90.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'picnicker-diana',
                    x: 80.4,
                    y: 76.3,
                },
            ],
        },
        {
            name: 'B1F',
            map: oreburghGateB1f,
            encountersKey: 'oreburgh-gate-b1f',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'veteran-grant',
                    x: 21.8,
                    y: 61.6,
                },
            ],
        },
    ],
};

export default OREBURGH_GATE;
