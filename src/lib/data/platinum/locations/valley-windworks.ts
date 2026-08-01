import { valleyWindworks } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS: Location = {
    name: 'Valley Windworks',
    map: valleyWindworks,
    encountersKey: 'valley-windworks',
    battles: [
        {
            battleKey: 'galactic-grunt-m-2',
            x: 61.2,
            y: 44.9,
        },
    ],
};

export default VALLEY_WINDWORKS;
