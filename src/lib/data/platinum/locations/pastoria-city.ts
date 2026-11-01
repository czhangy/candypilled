import { pastoriaCity } from '@/lib/data/platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const PASTORIA_CITY: Location = {
    name: 'Pastoria City',
    map: pastoriaCity,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'pastoria-city',
    items: [
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'persim-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 2,
            hidden: false,
            method: 'Berry tree',
            slug: 'nanab-berry',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Surf, split: 'Wake' },
        { method: EncounterMethod.OldRod, split: 'Wake' },
        { method: EncounterMethod.GoodRod, split: 'Wake' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-barry-pastoria-city',
            x: 24.27,
            y: 43.85,
        },
    ],
};

export default PASTORIA_CITY;
