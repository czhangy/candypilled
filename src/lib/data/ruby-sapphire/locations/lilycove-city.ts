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
};

export default LILYCOVE_CITY;
