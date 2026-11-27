import { oldaleTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OLDALE_TOWN: Location = {
    name: 'Oldale Town',
    map: oldaleTown,
    mapAnchor: MapAnchor.Center,
    transitions: [
        {
            height: 16,
            location: 'Route 103',
            subarea: 'West',
            width: 64,
            x: 50,
            y: 2.5,
        },
        { height: 32, location: 'Route 102', width: 16, x: 2.5, y: 55 },
        { height: 16, location: 'Route 101', width: 64, x: 50, y: 97.5 },
    ],
};

export default OLDALE_TOWN;
