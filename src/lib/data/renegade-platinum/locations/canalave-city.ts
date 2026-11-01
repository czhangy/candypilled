import { canalaveCity } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CANALAVE_CITY: Location = {
    name: 'Canalave City',
    map: canalaveCity,
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'canalave-city',
    items: [
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Gift from NPC',
            slug: 'skill-swap',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'u-turn',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Byron' },
        { method: EncounterMethod.OldRod, split: 'Byron' },
        { method: EncounterMethod.GoodRod, split: 'Byron' },
        { method: EncounterMethod.SuperRod, split: 'Candice' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-canalave-city',
            x: 45.3,
            y: 32.9,
        },
    ],
};

export default CANALAVE_CITY;
