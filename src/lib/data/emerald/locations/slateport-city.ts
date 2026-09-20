import {
    slateportCity,
    slateportCityOceanicMuseum,
} from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_HEIGHT } from '@/lib/static/constants';
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
            map: slateportCityOceanicMuseum,
            mapAnchor: MapAnchor.Center,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-oceanic-museum',
                    customHeight: GEN_3_TRUE_DOUBLE_HEIGHT,
                    x: 52.5,
                    y: 64.74,
                },
            ],
        },
    ],
};

export default SLATEPORT_CITY;
