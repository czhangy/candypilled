import { hearthomeCity, hearthomeCityGate } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    subareas: [
        {
            name: 'City',
            map: hearthomeCity,
            encountersKey: 'hearthome-city-area',
        },
        {
            name: 'Gate',
            map: hearthomeCityGate,
            battles: [
                {
                    battleKey: 'pkmn-trainer-barry-hearthome-city',
                    x: 69.8,
                    y: 46.7,
                },
            ],
        },
    ],
};

export default HEARTHOME_CITY;
