import { hearthomeCity } from '@/lib/data/diamond-pearl/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    map: hearthomeCity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'hearthome-city-west-gate',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-hearthome-city',
            x: 61.7,
            y: 76.7,
        },
    ],
};

export default HEARTHOME_CITY;
