import {
    greatMarshArea1,
    greatMarshArea2,
    greatMarshArea3,
    greatMarshArea4,
    greatMarshArea5,
    greatMarshArea6,
} from '@/lib/data/platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GREAT_MARSH: Location = {
    name: 'Great Marsh',
    subareas: [
        {
            name: 'Area 1',
            map: greatMarshArea1,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-1',
            methodSplits: [
                { method: EncounterMethod.Binoculars, split: 'Wake' },
                { method: EncounterMethod.Grass, split: 'Wake' },
                { method: EncounterMethod.OldRod, split: 'Wake' },
                { method: EncounterMethod.GoodRod, split: 'Wake' },
                { method: EncounterMethod.Surf, split: 'Byron' },
            ],
        },
        {
            name: 'Area 2',
            map: greatMarshArea2,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-2',
            methodSplits: [
                { method: EncounterMethod.Binoculars, split: 'Wake' },
                { method: EncounterMethod.Grass, split: 'Wake' },
                { method: EncounterMethod.OldRod, split: 'Wake' },
                { method: EncounterMethod.GoodRod, split: 'Wake' },
                { method: EncounterMethod.Surf, split: 'Byron' },
            ],
        },
        {
            name: 'Area 3',
            map: greatMarshArea3,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-3',
            methodSplits: [
                { method: EncounterMethod.Binoculars, split: 'Wake' },
                { method: EncounterMethod.Grass, split: 'Wake' },
                { method: EncounterMethod.OldRod, split: 'Wake' },
                { method: EncounterMethod.GoodRod, split: 'Wake' },
                { method: EncounterMethod.Surf, split: 'Byron' },
            ],
        },
        {
            name: 'Area 4',
            map: greatMarshArea4,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-4',
            methodSplits: [
                { method: EncounterMethod.Binoculars, split: 'Wake' },
                { method: EncounterMethod.Grass, split: 'Wake' },
                { method: EncounterMethod.OldRod, split: 'Wake' },
                { method: EncounterMethod.GoodRod, split: 'Wake' },
                { method: EncounterMethod.Surf, split: 'Byron' },
            ],
        },
        {
            name: 'Area 5',
            map: greatMarshArea5,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-5',
            methodSplits: [
                { method: EncounterMethod.Binoculars, split: 'Wake' },
                { method: EncounterMethod.Grass, split: 'Wake' },
                { method: EncounterMethod.OldRod, split: 'Wake' },
                { method: EncounterMethod.GoodRod, split: 'Wake' },
                { method: EncounterMethod.Surf, split: 'Byron' },
            ],
        },
        {
            name: 'Area 6',
            map: greatMarshArea6,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'great-marsh-area-6',
            methodSplits: [
                { method: EncounterMethod.Binoculars, split: 'Wake' },
                { method: EncounterMethod.Grass, split: 'Wake' },
                { method: EncounterMethod.OldRod, split: 'Wake' },
                { method: EncounterMethod.GoodRod, split: 'Wake' },
                { method: EncounterMethod.Surf, split: 'Byron' },
            ],
        },
    ],
};

export default GREAT_MARSH;
