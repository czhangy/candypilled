import { mauvilleCity } from '@/lib/data/ruby-sapphire/maps';
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
            y: 31.62,
        },
    ],
};

export default MAUVILLE_CITY;
