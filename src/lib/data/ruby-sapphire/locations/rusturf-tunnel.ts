import {
    rusturfTunnelRuby,
    rusturfTunnelSapphire,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTURF_TUNNEL: Location = {
    name: 'Rusturf Tunnel',
    map: { Ruby: rusturfTunnelRuby, Sapphire: rusturfTunnelSapphire },
    mapAnchor: MapAnchor.Center,
    encountersKey: 'rusturf-tunnel',
};

export default RUSTURF_TUNNEL;
