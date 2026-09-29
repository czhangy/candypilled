import { oreburghGate1f, oreburghGateB1f } from '@/lib/data/diamond-pearl/maps';
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
            mapAnchor: MapAnchor.Right,
            encountersKey: 'oreburgh-gate-b1f',
            methodSplits: [
                { method: EncounterMethod.Cave, split: 'Gardenia' },
                { method: EncounterMethod.OldRod, split: 'Gardenia' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
            ],
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
