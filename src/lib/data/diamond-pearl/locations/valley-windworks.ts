import { valleyWindworks } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS: Location = {
    name: 'Valley Windworks',
    map: valleyWindworks,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'valley-windworks',
    battles: [
        {
            metadata: [],
            battleKey: 'galactic-grunt-m-valley-windworks',
            x: 63.6,
            y: 51.6,
        },
    ],
};

export default VALLEY_WINDWORKS;
