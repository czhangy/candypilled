import { route203 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_203: Location = {
    name: 'Route 203',
    map: route203,
    encountersKey: 'sinnoh-route-203',
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-route-203',
            metadata: [BattleMetadata.Miniboss],
            x: 15,
            y: 65.8,
        },
        {
            battleKey: 'youngster-dallas',
            metadata: [BattleMetadata.Optional],
            x: 47.7,
            y: 62.9,
        },
        {
            battleKey: 'youngster-michael',
            metadata: [BattleMetadata.Optional],
            x: 47.7,
            y: 75.2,
        },
        {
            battleKey: 'youngster-sebastian',
            metadata: [],
            x: 66.4,
            y: 72.2,
        },
        {
            battleKey: 'lass-kaitlin',
            metadata: [],
            x: 78.9,
            y: 56.5,
        },
        {
            battleKey: 'lass-madeline',
            metadata: [],
            x: 85.3,
            y: 56.5,
        },
    ],
};

export default ROUTE_203;
