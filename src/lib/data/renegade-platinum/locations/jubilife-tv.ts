import {
    jubilifeTv1f,
    jubilifeTv2f,
    jubilifeTv3f,
    jubilifeTv4f,
} from '@/lib/data/renegade-platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_TV: Location = {
    name: 'Jubilife TV',
    subareas: [
        {
            name: '1F',
            map: jubilifeTv1f,
            mapAnchor: MapAnchor.Center,
            items: [
                {
                    category: ItemCategory.TmHm,
                    count: 1,
                    hidden: false,
                    method: 'Gift from Idol',
                    slug: 'facade',
                },
            ],
        },
        {
            name: '2F',
            map: jubilifeTv2f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '3F',
            map: jubilifeTv3f,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: '4F',
            map: jubilifeTv4f,
            mapAnchor: MapAnchor.Center,
        },
    ],
};

export default JUBILIFE_TV;
