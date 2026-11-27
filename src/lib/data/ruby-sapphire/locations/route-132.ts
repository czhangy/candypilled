import { route132 } from '@/lib/data/ruby-sapphire/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_132: Location = {
    name: 'Route 132',
    map: route132,
    mapAnchor: MapAnchor.Right,
    encountersKey: 'hoenn-route-132',
    methodSplits: [
        { method: EncounterMethod.OldRod, split: 'Winona' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
        { method: EncounterMethod.Surf, split: 'Winona' },
    ],
    battles: [
        { battleKey: 'black-belt-kiyo', x: 58.13, y: 70.86 },
        { battleKey: 'swimmer-f-dana', x: 51.88, y: 40.86 },
        { battleKey: 'fisherman-ronald', x: 11.88, y: 40.86 },
        { battleKey: 'swimmer-m-gilbert', x: 9.38, y: 8.36 },
    ],
    transitions: [
        { height: 304, location: 'Route 133', width: 16, x: 0.63, y: 31.25 },
        {
            height: 384,
            location: 'Pacifidlog Town',
            width: 16,
            x: 99.38,
            y: 50,
        },
        { height: 32, location: 'Route 133', width: 16, x: 0.63, y: 87.5 },
    ],
};

export default ROUTE_132;
