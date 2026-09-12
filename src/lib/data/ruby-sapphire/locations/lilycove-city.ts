import {
    lilycoveCityBrendan,
    lilycoveCityMay,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LILYCOVE_CITY: Location = {
    name: 'Lilycove City',
    map: { male: lilycoveCityMay, female: lilycoveCityBrendan },
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'lilycove-city-area',
    battles: [
        {
            battleKey: 'pkmn-trainer-may-lilycove',
            gender: 'male',
            x: 34.3,
            y: 17.94,
        },
        {
            battleKey: 'pkmn-trainer-brendan-lilycove',
            gender: 'female',
            x: 34.3,
            y: 17.94,
        },
    ],
};

export default LILYCOVE_CITY;
