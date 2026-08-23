import {
    oreburghCityCity,
    oreburghCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_CITY: Location = {
    name: 'Oreburgh City',
    subareas: [
        {
            name: 'City',
            map: oreburghCityCity,
            mapAnchor: MapAnchor.TopLeft,
        },
        {
            name: 'Pokémon Center',
            map: oreburghCityPokemonCenter,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'oreburgh-city',
        },
    ],
};

export default OREBURGH_CITY;
