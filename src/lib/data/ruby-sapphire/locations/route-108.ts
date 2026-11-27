import { route108 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_108: Location = {
    name: 'Route 108',
    map: route108,
    mapAnchor: MapAnchor.Left,
    encountersKey: 'hoenn-route-108',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'swimmer-f-tara',
            x: 14.17,
            y: 31.72,
        },
        {
            battleKey: 'swimmer-m-jerome',
            x: 29.17,
            y: 66.72,
        },
        {
            battleKey: 'swimmer-f-missy',
            x: 60.83,
            y: 61.72,
        },
        {
            battleKey: 'swimmer-m-matthew',
            x: 84.17,
            y: 51.72,
        },
    ],
    transitions: [
        {
            height: 224,
            location: 'Route 109',
            subarea: 'Ocean',
            width: 16,
            x: 99.17,
            y: 50,
        },
        {
            height: 16,
            location: 'Abandoned Ship',
            subarea: 'Deck',
            width: 16,
            x: 49.17,
            y: 32.5,
        },
        { height: 224, location: 'Route 107', width: 16, x: 0.83, y: 50 },
    ],
};

export default ROUTE_108;
