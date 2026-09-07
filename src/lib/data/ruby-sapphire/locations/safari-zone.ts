import {
    safariZoneNortheast,
    safariZoneNorthwest,
    safariZoneSoutheast,
    safariZoneSouthwest,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SAFARI_ZONE: Location = {
    name: 'Safari Zone',
    subareas: [
        {
            name: 'Area 1',
            map: safariZoneSoutheast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-se',
        },
        {
            name: 'Area 2',
            map: safariZoneSouthwest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-sw',
        },
        {
            name: 'Area 3',
            map: safariZoneNorthwest,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-nwmach-bike-area',
        },
        {
            name: 'Area 4',
            map: safariZoneNortheast,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-safari-zone-neacro-bike-area',
        },
    ],
};

export default SAFARI_ZONE;
