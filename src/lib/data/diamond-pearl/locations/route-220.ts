import { route220 } from '@/lib/data/diamond-pearl/maps';
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
            y: 28.83,
        },
        {
            battleKey: 'swimmer-f-erica',
            x: 14.91,
            y: 35.09,
        },
        {
            battleKey: 'swimmer-m-adrian',
            x: 39.93,
            y: 69.53,
        },
        {
            battleKey: 'swimmer-m-vincent',
            x: 60.26,
            y: 47.61,
        },
        {
            battleKey: 'swimmer-f-katelyn',
            x: 69.65,
            y: 22.56,
        },
        {
            battleKey: 'swimmer-f-claire',
            x: 80.6,
            y: 47.61,
        },
        {
            battleKey: 'swimmer-m-erik',
            x: 80.6,
            y: 66.4,
        },
    ],
};

export default ROUTE_220;
