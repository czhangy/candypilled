import { valleyWindworks } from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS: Location = {
    name: 'Valley Windworks',
    map: valleyWindworks,
    encountersKey: 'valley-windworks',
    battles: [
        {
            metadata: [],
            battleKey: 'galactic-grunt-m-2',
            x: 63.6,
            y: 51.6,
        },
    ],
};

export default VALLEY_WINDWORKS;
