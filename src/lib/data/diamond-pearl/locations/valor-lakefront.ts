import { valorLakefront } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_LAKEFRONT: Location = {
    name: 'Valor Lakefront',
    map: valorLakefront,
    mapAnchor: MapAnchor.TopRight,
    encountersKey: 'valor-lakefront',
    methodSplits: [{ method: EncounterMethod.Grass, split: 'Maylene' }],
    battles: [
        {
            battleKey: 'galactic-grunt-m-valor-lakefront',
            x: 61.04,
            y: 51.66,
        },
    ],
};

export default VALOR_LAKEFRONT;
