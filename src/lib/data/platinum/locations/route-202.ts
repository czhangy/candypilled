import { route202 } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: route202,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-202',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Roark' }],
    battles: [
        {
            battleKey: 'youngster-tristan',
            x: 20.41,
            y: 40.82,
        },
        {
            battleKey: 'lass-natalie',
            x: 67.29,
            y: 56.45,
        },
        {
            battleKey: 'youngster-logan',
            x: 79.79,
            y: 12.7,
        },
    ],
};

export default ROUTE_202;
