import {
    lilycoveCityBrendan,
    lilycoveCityMay,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LILYCOVE_CITY: Location = {
    name: 'Lilycove City',
    map: { male: lilycoveCityMay, female: lilycoveCityBrendan },
    mapAnchor: MapAnchor.TopLeft,
    encountersKey: 'lilycove-city-area',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
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
