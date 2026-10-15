import {
    magmaHideout1f,
    magmaHideoutB1f,
    magmaHideoutB2f,
    magmaHideoutB3f,
    magmaHideoutB4f,
    magmaHideoutB5f,
    magmaHideoutEntrance,
    magmaHideoutStairs,
} from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAGMA_HIDEOUT: Location = {
    name: 'Magma Hideout',
    subareas: [
        {
            name: 'Entrance',
            map: magmaHideoutEntrance,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'magma-hideout',
            methodSplits: [{ method: EncounterMethod.Cave, split: 'Winona' }],
        },
        {
            name: '1F',
            map: magmaHideout1f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'B1F',
            map: magmaHideoutB1f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'B2F',
            map: magmaHideoutB2f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'B3F',
            map: magmaHideoutB3f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'B4F',
            map: magmaHideoutB4f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'B5F',
            map: magmaHideoutB5f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Stairs',
            map: magmaHideoutStairs,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default MAGMA_HIDEOUT;
