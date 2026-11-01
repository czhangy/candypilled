import { trainersSchool } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TRAINERS_SCHOOL: Location = {
    name: "Trainers' School",
    map: trainersSchool,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'trainers-school',
    items: [
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: false,
            method: 'Gift from rival',
            slug: 'town-map',
        },
    ],
    methodSplits: [{ method: EncounterMethod.Egg, split: 'Roark' }],
    battles: [
        {
            battleKey: 'school-kid-harrison',
            x: 76.7,
            y: 16.8,
        },
        {
            battleKey: 'school-kid-christine',
            x: 90,
            y: 16.8,
        },
    ],
};

export default TRAINERS_SCHOOL;
