import { floaromaTown } from '@/lib/data/platinum/maps';
import { ItemCategory, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_TOWN: Location = {
    name: 'Floaroma Town',
    map: floaromaTown,
    mapAnchor: MapAnchor.Center,
    items: [
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'oran-berry',
        },
        {
            category: ItemCategory.Berry,
            count: 1,
            hidden: false,
            method: 'Berry tree',
            slug: 'cheri-berry',
        },
    ],
};

export default FLOAROMA_TOWN;
