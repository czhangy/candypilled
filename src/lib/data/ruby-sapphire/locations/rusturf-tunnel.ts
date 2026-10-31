import {
    rusturfTunnelRuby,
    rusturfTunnelSapphire,
} from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTURF_TUNNEL: Location = {
    name: 'Rusturf Tunnel',
    map: { Ruby: rusturfTunnelRuby, Sapphire: rusturfTunnelSapphire },
    mapAnchor: MapAnchor.Center,
    encountersKey: 'rusturf-tunnel',
    methodSplits: [{ method: EncounterMethod.Cave, split: 'Roxanne' }],
    battles: [
        {
            battleKey: 'team-magma-grunt-m-rusturf-tunnel',
            game: 'Ruby',
            x: 40.28,
            y: 22.27,
        },
        {
            battleKey: 'team-aqua-grunt-m-rusturf-tunnel',
            game: 'Sapphire',
            x: 40.28,
            y: 22.27,
        },
        {
            battleKey: 'hiker-mike',
            x: 90.28,
            y: 55.6,
        },
    ],
};

export default RUSTURF_TUNNEL;
