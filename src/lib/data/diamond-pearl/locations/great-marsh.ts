import {
    greatMarshArea1,
    greatMarshArea2,
    greatMarshArea3,
    greatMarshArea4,
    greatMarshArea5,
    greatMarshArea6,
} from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MARSH_WATER_MAYLENE = [
    { method: EncounterMethod.Binoculars, split: 'Maylene' },
    { method: EncounterMethod.Grass, split: 'Maylene' },
    { method: EncounterMethod.Surf, split: 'Maylene' },
    { method: EncounterMethod.OldRod, split: 'Maylene' },
    { method: EncounterMethod.GoodRod, split: 'Maylene' },
];

const MARSH_LAND_MAYLENE = [
    { method: EncounterMethod.Binoculars, split: 'Maylene' },
    { method: EncounterMethod.Grass, split: 'Maylene' },
];

const GREAT_MARSH: Location = {
    name: 'Great Marsh',
    subareas: [
        {
            name: 'Area 1',
            map: greatMarshArea1,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-1',
            methodSplits: MARSH_WATER_MAYLENE,
        },
        {
            name: 'Area 2',
            map: greatMarshArea2,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-2',
            methodSplits: MARSH_WATER_MAYLENE,
        },
        {
            name: 'Area 3',
            map: greatMarshArea3,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-3',
            methodSplits: MARSH_WATER_MAYLENE,
        },
        {
            name: 'Area 4',
            map: greatMarshArea4,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-4',
            methodSplits: MARSH_WATER_MAYLENE,
        },
        {
            name: 'Area 5',
            map: greatMarshArea5,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-5',
            methodSplits: MARSH_LAND_MAYLENE,
        },
        {
            name: 'Area 6',
            map: greatMarshArea6,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-6',
            methodSplits: MARSH_WATER_MAYLENE,
        },
    ],
};

export default GREAT_MARSH;
