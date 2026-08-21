import {
    jubilifeCityCity,
    jubilifeCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    subareas: [
        {
            name: 'City',
            map: jubilifeCityCity,
            mapAnchor: MapAnchor.BottomRight,
        },
        {
            name: 'Pokémon Center',
            map: jubilifeCityPokemonCenter,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'jubilife-city',
        },
    ],
};

export default JUBILIFE_CITY;
