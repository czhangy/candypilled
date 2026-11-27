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
            x: 34.38,
            y: 18.36,
        },
        {
            battleKey: 'pkmn-trainer-brendan-lilycove',
            gender: 'female',
            x: 34.38,
            y: 18.36,
        },
    ],
    transitions: [
        {
            game: 'Sapphire',
            height: 16,
            location: 'Aqua Hideout',
            subarea: 'Entrance',
            width: 16,
            x: 89.38,
            y: 13.75,
        },
        {
            game: 'Ruby',
            height: 16,
            location: 'Magma Hideout',
            subarea: 'Entrance',
            width: 16,
            x: 88.13,
            y: 13.75,
        },
        { height: 144, location: 'Route 124', width: 16, x: 99.38, y: 33.75 },
        { height: 48, location: 'Route 121', width: 16, x: 0.63, y: 41.25 },
    ],
};

export default LILYCOVE_CITY;
