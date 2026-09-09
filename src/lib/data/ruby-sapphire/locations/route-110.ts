import { route110Brendan, route110May } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_110: Location = {
    name: 'Route 110',
    map: { male: route110May, female: route110Brendan },
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'hoenn-route-110',
    battles: [
        {
            battleKey: 'pokefan-f-isabel',
            x: 28.75,
            y: 73.33,
        },
        {
            battleKey: 'youngster-timmy',
            x: 83.59,
            y: 69.36,
        },
        {
            battleKey: 'collector-edwin',
            x: 58.59,
            y: 40.33,
        },
        {
            battleKey: 'psychic-m-edward',
            x: 13.75,
            y: 39.27,
        },
        {
            battleKey: 'fisherman-dale',
            x: 26.25,
            y: 19.28,
        },
        {
            battleKey: 'pkmn-trainer-may-route-110',
            gender: 'male',
            x: 86.09,
            y: 54.31,
        },
        {
            battleKey: 'pkmn-trainer-brendan-route-110',
            gender: 'female',
            x: 86.09,
            y: 54.31,
        },
        {
            battleKey: 'psychic-f-jaclyn',
            x: 83.75,
            y: 15.32,
        },
        {
            battleKey: 'triathlete-biker-f-abigail',
            x: 75.94,
            y: 31.32,
        },
        {
            battleKey: 'triathlete-biker-m-anthony',
            x: 48.44,
            y: 31.33,
        },
        {
            battleKey: 'triathlete-biker-m-benjamin',
            x: 41.09,
            y: 55.32,
        },
        {
            battleKey: 'triathlete-biker-f-jasmine',
            x: 41.25,
            y: 73.32,
        },
        {
            battleKey: 'triathlete-biker-m-jacob',
            x: 53.59,
            y: 78.32,
        },
    ],
};

export default ROUTE_110;
