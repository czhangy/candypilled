import {
    caveOfOrigin1f,
    caveOfOriginB1f,
    caveOfOriginEntrance,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CAVE_OF_ORIGIN: Location = {
    name: 'Cave of Origin',
    subareas: [
        {
            name: 'Entrance',
            map: caveOfOriginEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-entrance',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
        },
        {
            name: '1F',
            map: caveOfOrigin1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
        },
        {
            name: 'B1F',
            map: caveOfOriginB1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'cave-of-origin-b1f',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Juan' }],
        },
    ],
};

export default CAVE_OF_ORIGIN;
