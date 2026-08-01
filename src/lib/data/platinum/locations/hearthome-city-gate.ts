import { hearthomeCityGate } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const HEARTHOME_CITY_GATE: Location = {
    name: 'Hearthome City Gate',
    map: hearthomeCityGate,
    battles: [
        {
            isMiniboss: true,
            battleKey: 'pkmn-trainer-barry::Barry',
            x: 68,
            y: 48,
        },
    ],
};

export default HEARTHOME_CITY_GATE;
