import { fallarborTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FALLARBOR_TOWN: Location = {
    name: 'Fallarbor Town',
    map: fallarborTown,
    mapAnchor: MapAnchor.Center,
    transitions: [
        { height: 128, location: 'Route 113', width: 16, x: 97.5, y: 50 },
        { height: 160, location: 'Route 114', width: 16, x: 2.5, y: 60 },
    ],
};

export default FALLARBOR_TOWN;
