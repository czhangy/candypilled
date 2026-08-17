import {
    oreburghGate1f,
    oreburghGateB1f,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: maps are placeholders — replace with real screenshots and pick
// real mapAnchors once they exist.
const OREBURGH_GATE: Location = {
    name: 'Oreburgh Gate',
    subareas: [
        {
            name: '1F',
            map: oreburghGate1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-gate-1f',
        },
        {
            name: 'B1F',
            map: oreburghGateB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-gate-b1f',
        },
    ],
};

export default OREBURGH_GATE;
