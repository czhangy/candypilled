import { valorLakefront } from '@/lib/data/renegade-platinum/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'sinnoh-valor-lakefront',
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
