import {
    greatMarshArea1,
    greatMarshArea2,
    greatMarshArea3,
    greatMarshArea4,
    greatMarshArea5,
    greatMarshArea6,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const GREAT_MARSH: Location = {
    name: 'Great Marsh',
    subareas: [
        {
            name: 'Area 1',
            map: greatMarshArea1,
            encountersKey: 'great-marsh-area-1-2',
        },
        {
            name: 'Area 2',
            map: greatMarshArea2,
            encountersKey: 'great-marsh-area-1-2',
        },
        {
            name: 'Area 3',
            map: greatMarshArea3,
            encountersKey: 'great-marsh-area-3-4',
        },
        {
            name: 'Area 4',
            map: greatMarshArea4,
            encountersKey: 'great-marsh-area-3-4',
        },
        {
            name: 'Area 5',
            map: greatMarshArea5,
            encountersKey: 'great-marsh-area-5-6',
        },
        {
            name: 'Area 6',
            map: greatMarshArea6,
            encountersKey: 'great-marsh-area-5-6',
        },
    ],
};

export default GREAT_MARSH;
