import { solaceonTown } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SOLACEON_TOWN: Location = {
    name: 'Solaceon Town',
    map: solaceonTown,
    mapAnchor: MapAnchor.Unaudited,
};

export default SOLACEON_TOWN;
