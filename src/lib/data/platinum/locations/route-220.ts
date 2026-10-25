import { route220 } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_220: Location = {
    name: 'Route 220',
    map: route220,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'sinnoh-sea-route-220',
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Byron' },
        { method: EncounterMethod.GoodRod, split: 'Byron' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-jessica',
            x: 24.29,
            y: 28.38,
        },
        {
            battleKey: 'swimmer-f-erica',
            x: 14.91,
            y: 34.64,
        },
        {
            battleKey: 'swimmer-m-adrian',
            x: 39.93,
            y: 69.08,
        },
        {
            battleKey: 'swimmer-m-vincent',
            x: 60.26,
            y: 47.16,
        },
        {
            battleKey: 'swimmer-f-katelyn',
            x: 69.65,
            y: 22.11,
        },
        {
            battleKey: 'swimmer-f-claire',
            x: 80.6,
            y: 47.16,
        },
        {
            battleKey: 'swimmer-m-erik',
            x: 80.6,
            y: 65.95,
        },
    ],
};

export default ROUTE_220;
