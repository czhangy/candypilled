import { route202 } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: route202,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'sinnoh-route-202',
    battles: [
        {
            battleKey: 'pkmn-trainer-dawn',
            gender: 'male',
            metadata: [BattleMetadata.Miniboss],
            x: 60.9,
            y: 84.2,
        },
        {
            battleKey: 'pkmn-trainer-lucas',
            gender: 'female',
            metadata: [BattleMetadata.Miniboss],
            x: 60.9,
            y: 84.2,
        },
        {
            battleKey: 'lass-natalie',
            metadata: [],
            x: 20.5,
            y: 41,
        },
        {
            battleKey: 'youngster-tristan',
            metadata: [],
            x: 67.2,
            y: 56.4,
        },
        {
            battleKey: 'youngster-logan',
            metadata: [],
            x: 79.7,
            y: 12.7,
        },
    ],
};

export default ROUTE_202;
