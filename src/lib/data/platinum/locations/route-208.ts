import { route208 } from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_208: Location = {
    name: 'Route 208',
    map: route208,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'sinnoh-route-208',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Fantina' },
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.GoodRod, split: 'Maylene' },
        { method: EncounterMethod.OldRod, split: 'Fantina' },
        { method: EncounterMethod.HoneyTree, split: 'Fantina' },
    ],
    battles: [
        {
            battleKey: 'hiker-jonathan',
            x: 38.33,
            y: 59.57,
        },
        {
            battleKey: 'black-belt-kyle',
            x: 33.64,
            y: 31.45,
        },
        {
            battleKey: 'hiker-robert',
            x: 57.08,
            y: 56.45,
        },
        {
            battleKey: 'aroma-lady-hannah',
            x: 77.39,
            y: 50.2,
        },
        {
            battleKey: 'artist-william',
            x: 86.77,
            y: 62.7,
        },
        {
            battleKey: 'fisherman-cody',
            x: 46.14,
            y: 72.07,
        },
        {
            battleKey: 'hiker-alexander',
            x: 10.21,
            y: 47.07,
        },
    ],
};

export default ROUTE_208;
