import { rustboroCityBrendan, rustboroCityMay } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTBORO_CITY: Location = {
    name: 'Rustboro City',
    map: { male: rustboroCityMay, female: rustboroCityBrendan },
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'rustboro-city',
    battles: [
        {
            battleKey: 'pkmn-trainer-may-rustboro',
            gender: 'male',
            x: 41.25,
            y: 83.91,
        },
        {
            battleKey: 'pkmn-trainer-brendan-rustboro',
            gender: 'female',
            x: 41.25,
            y: 83.91,
        },
    ],
};

export default RUSTBORO_CITY;
