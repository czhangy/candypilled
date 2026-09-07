import {
    route119,
    route119WeatherInstitute1fAqua,
    route119WeatherInstitute1fMagma,
    route119WeatherInstitute2fAqua,
    route119WeatherInstitute2fMagma,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_119: Location = {
    name: 'Route 119',
    subareas: [
        {
            name: 'Main',
            map: route119,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-119-area',
        },
        {
            name: 'Weather Institute 1F',
            map: {
                Ruby: route119WeatherInstitute1fMagma,
                Sapphire: route119WeatherInstitute1fAqua,
            },
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Weather Institute 2F',
            map: {
                Ruby: route119WeatherInstitute2fMagma,
                Sapphire: route119WeatherInstitute2fAqua,
            },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-119-weather-institute',
        },
    ],
};

export default ROUTE_119;
