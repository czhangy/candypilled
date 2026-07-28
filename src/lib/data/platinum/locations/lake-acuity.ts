import { lakeAcuityCavern, lakeAcuityLake } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const LAKE_ACUITY: Location = {
    name: 'Lake Acuity',
    subareas: [
        {
            name: 'Lake',
            map: lakeAcuityLake,
            encountersKey: 'lake-acuity-area',
        },
        {
            name: 'Cavern',
            map: lakeAcuityCavern,
            encountersKey: 'lake-acuity-cavern',
        },
    ],
};

export default LAKE_ACUITY;
