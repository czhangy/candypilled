import {
    lakeValorPostGiratina,
    lakeValorPreGiratina,
} from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VALOR: Location = {
    name: 'Lake Valor',
    subareas: [
        {
            name: 'Pre-Giratina',
            map: lakeValorPreGiratina,
            mapAnchor: MapAnchor.TopRight,
            encountersKey: 'lake-valor',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Candice' },
                { method: EncounterMethod.Surf, split: 'Candice' },
                { method: EncounterMethod.OldRod, split: 'Candice' },
                { method: EncounterMethod.GoodRod, split: 'Candice' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.PokeRadar, split: 'Candice' },
            ],
            battles: [
                {
                    battleKey: 'galactic-grunt-f-lake-valor',
                    x: 46.1,
                    y: 28.1,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-1',
                    x: 27.5,
                    y: 50.1,
                },
                {
                    battleKey: 'galactic-grunt-m-lake-valor-2',
                    x: 39.9,
                    y: 54.8,
                },
            ],
        },
        {
            name: 'Post-Giratina',
            map: lakeValorPostGiratina,
            mapAnchor: MapAnchor.TopRight,
            encountersKey: 'lake-valor',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Volkner' },
                { method: EncounterMethod.Surf, split: 'Volkner' },
                { method: EncounterMethod.OldRod, split: 'Volkner' },
                { method: EncounterMethod.GoodRod, split: 'Volkner' },
                { method: EncounterMethod.SuperRod, split: 'Volkner' },
                { method: EncounterMethod.PokeRadar, split: 'Volkner' },
            ],
        },
    ],
};

export default LAKE_VALOR;
