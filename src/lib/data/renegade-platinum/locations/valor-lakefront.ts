import { valorLakefront } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'sinnoh-valor-lakefront',
    items: [
        {
            category: ItemCategory.KeyItem,
            count: 1,
            hidden: false,
            method: 'Gift from Cynthia',
            slug: 'secret-potion',
        },
        {
            category: ItemCategory.TmHm,
            count: 1,
            hidden: false,
            method: 'Ground',
            slug: 'energy-ball',
        },
    ],
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Wake' },
        { method: EncounterMethod.PokeRadar, split: 'Wake' },
    ],
    battles: [
        {
            battleKey: 'galactic-grunt-m-valor-lakefront',
            x: 80.5,
            y: 51.7,
        },
    ],
};

export default VALOR_LAKEFRONT;
