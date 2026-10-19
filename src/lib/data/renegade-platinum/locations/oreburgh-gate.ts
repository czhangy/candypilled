import {
    oreburghGate1f,
    oreburghGateB1f,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GATE: Location = {
    name: 'Oreburgh Gate',
    subareas: [
        {
            name: '1F',
            map: oreburghGate1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-gate-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Roark' }],
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
            mapAnchor: MapAnchor.Right,
            encountersKey: 'oreburgh-gate-b1f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Roark' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Roark' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
            ],
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
