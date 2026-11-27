import { mauvilleCity } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MAUVILLE_CITY: Location = {
    name: 'Mauville City',
    map: mauvilleCity,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'pkmn-trainer-wally',
            x: 21.25,
            y: 31.72,
        },
    ],
    transitions: [
        {
            height: 16,
            location: 'Route 111',
            subarea: 'South',
            width: 112,
            x: 41.25,
            y: 2.5,
        },
        { height: 16, location: 'Mauville Gym', width: 16, x: 21.25, y: 27.5 },
        { height: 64, location: 'Route 117', width: 16, x: 1.25, y: 45 },
        {
            height: 80,
            location: 'Route 118',
            subarea: 'West',
            width: 16,
            x: 98.75,
            y: 47.5,
        },
        { height: 16, location: 'Route 110', width: 112, x: 38.75, y: 97.5 },
    ],
};

export default MAUVILLE_CITY;
