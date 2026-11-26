import { hearthomeCity } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    map: hearthomeCity,
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'hearthome-city-west-gate',
    methodSplits: [{ method: EncounterMethod.Egg, split: 'Maylene' }],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-hearthome-city',
            x: 61.77,
            y: 76.66,
        },
    ],
};

export default HEARTHOME_CITY;
