import {
    magmaHideout1f,
    magmaHideoutB1f,
    magmaHideoutB2f,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAGMA_HIDEOUT: Location = {
    name: 'Magma Hideout',
    subareas: [
        {
            name: '1F',
            map: magmaHideout1f,
            mapAnchor: MapAnchor.Bottom,
        },
        {
            name: 'B1F',
            map: magmaHideoutB1f,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'team-magma-hideout',
        },
        {
            name: 'B2F',
            map: magmaHideoutB2f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default MAGMA_HIDEOUT;
