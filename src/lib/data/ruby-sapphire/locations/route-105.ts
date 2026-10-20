import { route105 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_105: Location = {
    name: 'Route 105',
    map: route105,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'hoenn-route-105',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-dawn',
            x: 48.75,
            y: 11.68,
        },
        {
            battleKey: 'swimmer-f-beverly',
            x: 66.25,
            y: 45.43,
        },
        {
            battleKey: 'swimmer-m-austin',
            x: 26.25,
            y: 55.43,
        },
        {
            battleKey: 'ruin-maniac-foster',
            x: 31.25,
            y: 64.18,
        },
        {
            battleKey: 'swimmer-m-luis',
            x: 46.25,
            y: 75.43,
        },
    ],
};

export default ROUTE_105;
