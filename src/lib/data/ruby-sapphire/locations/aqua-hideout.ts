import {
    aquaHideout1f,
    aquaHideoutB1f,
    aquaHideoutB2f,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const AQUA_HIDEOUT: Location = {
    name: 'Aqua Hideout',
    subareas: [
        {
            name: '1F',
            map: aquaHideout1f,
            mapAnchor: MapAnchor.Bottom,
        },
        {
            name: 'B1F',
            map: aquaHideoutB1f,
            mapAnchor: MapAnchor.Left,
            encountersKey: 'team-aqua-hideout',
        },
        {
            name: 'B2F',
            map: aquaHideoutB2f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default AQUA_HIDEOUT;
