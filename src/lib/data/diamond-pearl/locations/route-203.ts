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
            battleKey: 'pkmn-trainer-barry-barry-1',
            x: 10,
            y: 78.6,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-michael',
            x: 21.5,
            y: 50.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-dallas',
            x: 50.9,
            y: 68.3,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'lass-kaitlin',
            x: 70.6,
            y: 66.1,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'youngster-sebastian',
            x: 88.5,
            y: 62.8,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'lass-madeline',
            x: 80.4,
            y: 35.8,
        },
    ],
};

export default ROUTE_203;
