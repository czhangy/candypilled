import { pacifidlogTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PACIFIDLOG_TOWN: Location = {
    name: 'Pacifidlog Town',
    map: pacifidlogTown,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'pacifidlog-town',
};

export default PACIFIDLOG_TOWN;
