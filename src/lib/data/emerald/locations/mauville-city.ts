import { mauvilleCity } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAUVILLE_CITY: Location = {
    name: 'Mauville City',
    map: mauvilleCity,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'pkmn-trainer-wally',
            x: 21.25,
            y: 31.72,
        },
    ],
};

export default MAUVILLE_CITY;
