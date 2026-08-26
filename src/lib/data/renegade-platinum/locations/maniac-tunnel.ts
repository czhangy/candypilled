import { maniacTunnel } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MANIAC_TUNNEL: Location = {
    name: 'Maniac Tunnel',
    map: maniacTunnel,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'maniac-tunnel',
};

export default MANIAC_TUNNEL;
