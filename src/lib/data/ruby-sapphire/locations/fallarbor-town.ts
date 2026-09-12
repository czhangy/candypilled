import { fallarborTown } from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FALLARBOR_TOWN: Location = {
    name: 'Fallarbor Town',
    map: fallarborTown,
    mapAnchor: MapAnchor.Center,
};

export default FALLARBOR_TOWN;
