import {
    slateportCity,
    slateportCityOceanicMuseumAqua,
    slateportCityOceanicMuseumMagma,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SLATEPORT_CITY: Location = {
    name: 'Slateport City',
    subareas: [
        {
            name: 'City',
            map: slateportCity,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'slateport-city-area',
        },
        {
            name: 'Oceanic Museum',
            map: {
                Ruby: slateportCityOceanicMuseumMagma,
                Sapphire: slateportCityOceanicMuseumAqua,
            },
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default SLATEPORT_CITY;
