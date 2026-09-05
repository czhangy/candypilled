import {
    hearthomeCityCity,
    hearthomeCityEastGate,
    hearthomeCityWestGate,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY: Location = {
    name: 'Hearthome City',
    subareas: [
        {
            name: 'West Gate',
            map: hearthomeCityWestGate,
            battles: [
                {
                    battleKey: 'elite-four-aaron-route-208',
                    x: 44.9,
                    y: 45.9,
                },
            ],
        },
        {
            name: 'City',
            map: hearthomeCityCity,
        },
        {
            name: 'East Gate',
            map: hearthomeCityEastGate,
            battles: [
                {
                    battleKey: 'pkmn-trainer-barry-hearthome-city-east-gate',
                    x: 69.3,
                    y: 47,
                },
            ],
        },
    ],
};

export default HEARTHOME_CITY;
