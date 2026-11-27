import { rusturfTunnel } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTURF_TUNNEL: Location = {
    name: 'Rusturf Tunnel',
    map: rusturfTunnel,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'rusturf-tunnel',
    methodSplits: [{ method: EncounterMethod.Cave, split: 'Roxanne' }],
    battles: [
        {
            battleKey: 'team-aqua-grunt-m-rusturf-tunnel',
            x: 40.28,
            y: 22.27,
        },
        {
            battleKey: 'hiker-mike',
            x: 90.28,
            y: 55.6,
        },
    ],
    transitions: [
        { height: 16, location: 'Route 116', width: 16, x: 12.5, y: 43.75 },
        {
            height: 16,
            location: 'Verdanturf Town',
            width: 16,
            x: 81.94,
            y: 68.75,
        },
        { height: 16, location: 'Route 116', width: 16, x: 51.39, y: 85.42 },
    ],
};

export default RUSTURF_TUNNEL;
