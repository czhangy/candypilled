import {
    jubilifeCity,
    jubilifeCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    subareas: [
        {
            name: 'Exterior',
            map: jubilifeCity,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'jubilife-city',
        },
        {
            name: 'Pokemon Center',
            map: jubilifeCityPokemonCenter,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default JUBILIFE_CITY;
