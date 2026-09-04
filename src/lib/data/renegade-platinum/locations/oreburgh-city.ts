import {
    oreburghCityCity,
    oreburghCityPokemonCenter,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const OREBURGH_CITY: Location = {
    name: 'Oreburgh City',
    subareas: [
        {
            name: 'City',
            map: oreburghCityCity,
        },
        {
            name: 'Pokémon Center',
            map: oreburghCityPokemonCenter,
            encountersKey: 'oreburgh-city',
            battles: [
                {
                    battleKey: 'reporter-helen',
                    x: 16.7,
                    y: 18.2,
                },
            ],
        },
    ],
};

export default OREBURGH_CITY;
