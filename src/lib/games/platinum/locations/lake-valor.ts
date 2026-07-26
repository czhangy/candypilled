import {
    lakeValorCavern,
    lakeValorDry,
    lakeValorPostGiratina,
} from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const LAKE_VALOR: Location = {
    name: 'Lake Valor',
    subareas: [
        {
            name: 'Dry',
            map: lakeValorDry,
        },
        {
            name: 'Cavern',
            map: lakeValorCavern,
        },
        {
            name: 'Post-Giratina',
            map: lakeValorPostGiratina,
            encountersKey: 'lake-valor-area',
        },
    ],
};

export default LAKE_VALOR;
