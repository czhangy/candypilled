import { route203 } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-route-203',
    battles: [
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'pkmn-trainer-barry-route-203',
            x: 15.1,
            y: 66.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-michael',
            x: 19.8,
            y: 44,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-dallas',
            x: 47.7,
            y: 62.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'lass-kaitlin',
            x: 66.6,
            y: 66.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-sebastian',
            x: 83.6,
            y: 62.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'lass-madeline',
            x: 75.7,
            y: 37.8,
        },
    ],
};

export default ROUTE_203;
