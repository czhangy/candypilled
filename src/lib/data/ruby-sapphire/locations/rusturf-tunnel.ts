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
    battles: [
        {
            battleKey: 'team-magma-grunt-m-rusturf-tunnel',
            game: 'Ruby',
            x: 40.28,
            y: 21.92,
        },
        {
            battleKey: 'team-aqua-grunt-m-rusturf-tunnel',
            game: 'Sapphire',
            x: 40.28,
            y: 21.92,
        },
        {
            battleKey: 'hiker-mike',
            x: 90.1,
            y: 55.25,
        },
    ],
};

export default RUSTURF_TUNNEL;
