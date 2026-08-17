import {
    oreburghMine1f,
    oreburghMineB1f,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: maps are placeholders — replace with real screenshots and pick
// real mapAnchors once they exist.
const OREBURGH_MINE: Location = {
    name: 'Oreburgh Mine',
    subareas: [
        {
            name: '1F',
            map: oreburghMine1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-mine-1f',
        },
        {
            name: 'B1F',
            map: oreburghMineB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-mine-b1f',
        },
    ],
};

export default OREBURGH_MINE;
