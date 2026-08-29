import LAKE_VALOR from '@/lib/data/renegade-platinum/locations/lake-valor';
import VALOR_CAVERN from '@/lib/data/renegade-platinum/locations/valor-cavern';
import { Split } from '@/lib/static/types';

const CANDICE: Split = {
    name: 'Candice',
    locations: [LAKE_VALOR, VALOR_CAVERN],
    saveCondition: { type: 'badge', bit: 6 },
};

export default CANDICE;
