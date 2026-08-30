import { valleyWindworks } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS: Location = {
    name: 'Valley Windworks',
    map: valleyWindworks,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'valley-windworks',
    battles: [
        {
            battleKey: 'galactic-grunt-m-valley-windworks',
            metadata: [],
            x: 60.9,
            y: 47.2,
        },
    ],
};

export default VALLEY_WINDWORKS;
