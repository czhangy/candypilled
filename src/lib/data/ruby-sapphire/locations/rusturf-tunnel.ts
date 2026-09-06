import {
    rusturfTunnelRuby,
    rusturfTunnelSapphire,
} from '@/lib/data/ruby-sapphire/maps';
import { Location } from '@/lib/static/types';

const RUSTURF_TUNNEL: Location = {
    name: 'Rusturf Tunnel',
    map: { Ruby: rusturfTunnelRuby, Sapphire: rusturfTunnelSapphire },
    encountersKey: 'rusturf-tunnel',
};

export default RUSTURF_TUNNEL;
